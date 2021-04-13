package edu.utdallas.se6387.revs.votingclient.batch;

import com.google.common.io.BaseEncoding;
import com.google.protobuf.ByteString;
import edu.utdallas.se6387.revs.votingclient.models.CompletedBallot;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;
import sawtooth.sdk.protobuf.*;
import sawtooth.sdk.signing.PrivateKey;
import sawtooth.sdk.signing.Secp256k1Context;
import sawtooth.sdk.signing.Signer;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import java.util.concurrent.BlockingQueue;
import java.util.concurrent.LinkedBlockingQueue;
import java.util.stream.Collectors;

@Service
@EnableScheduling
public class SawtoothRESTBatchingService implements BatchingService {
    private static final Logger LOGGER = LoggerFactory.getLogger(SawtoothRESTBatchingService.class);
    private static final int MAX_BATCH_SIZE = 100;
    private static final String SAWTOOTH_REST_URL = "http://192.168.1.227:8008";

    private final Signer signer;
    private final BlockingQueue<Transaction> transactionQueue;
    private final WebClient webClient = WebClient.create(SAWTOOTH_REST_URL);

    private long batchesSent = 0L;

    public SawtoothRESTBatchingService() {
        Secp256k1Context context = new Secp256k1Context();
        PrivateKey privateKey = context.newRandomPrivateKey();
        this.signer = new Signer(context, privateKey);
        this.transactionQueue = new LinkedBlockingQueue<>();
    }

    @Override
    public void send(CompletedBallot completedBallot) throws BatchingException {
        byte[] payloadBytes = completedBallot.toJSONString().getBytes(StandardCharsets.UTF_8);

        TransactionHeader header;
        try {
            header = getHeader(payloadBytes);
        } catch(NoSuchAlgorithmException e) {
            throw new BatchingException("Failed creating transaction header", e);
        }

        String signature = signer.sign(header.toByteArray());
        Transaction transaction = Transaction.newBuilder()
                .setHeader(header.toByteString())
                .setPayload(ByteString.copyFrom(payloadBytes))
                .setHeaderSignature(signature)
                .build();

        if(!transactionQueue.offer(transaction)) {
            LOGGER.info("Failed putting transaction to queue: {}, queue size: {}",
                    transaction, transactionQueue.size());
        }
    }

    private TransactionHeader getHeader(byte[] payloadBytes) throws NoSuchAlgorithmException {
        return TransactionHeader.newBuilder()
                .setSignerPublicKey(signer.getPublicKey().hex())
                .setFamilyName("vote")
                .setFamilyVersion("0.1.0")
                .setPayloadSha512(hash(payloadBytes))
                .setBatcherPublicKey(signer.getPublicKey().hex())
                .setNonce(UUID.randomUUID().toString())
                .build();
    }

    private String hash(byte[] input) throws NoSuchAlgorithmException {
        MessageDigest digest = MessageDigest.getInstance("SHA-512");
        digest.reset();
        digest.update(input);

        return BaseEncoding.base16().lowerCase().encode(digest.digest());
    }

    private Batch createBatch() {
        List<Transaction> transactions = new ArrayList<>(MAX_BATCH_SIZE);
        transactionQueue.drainTo(transactions, MAX_BATCH_SIZE);

        if(transactions.isEmpty()) {
            return null;
        }

        BatchHeader batchHeader = BatchHeader.newBuilder()
                .setSignerPublicKey(signer.getPublicKey().hex())
                .addAllTransactionIds(
                        transactions
                                .stream()
                                .map(Transaction::getHeaderSignature)
                                .collect(Collectors.toList())
                )
                .build();

        String batchSignature = signer.sign(batchHeader.toByteArray());
        return Batch.newBuilder()
                .setHeader(batchHeader.toByteString())
                .addAllTransactions(transactions)
                .setHeaderSignature(batchSignature)
                .build();
    }

    @Scheduled(fixedRate = 10000)
    private void sendBatch() {
        LOGGER.info("Sending batches");

        Batch b;
        while((b = createBatch()) != null) {
            byte[] batchListBytes = BatchList.newBuilder()
                    .addBatches(b)
                    .build()
                    .toByteArray();

            LOGGER.info("{}", new String(batchListBytes));

            postBatch(batchListBytes);
            batchesSent++;
        }

        LOGGER.info("{} total batches sent to blockchain network", batchesSent);
    }

    private void postBatch(byte[] batchListBytes) {
        Mono<byte[]> retVal = webClient.post()
                .uri("/batches")
                .header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_OCTET_STREAM_VALUE)
                .body(Mono.just(batchListBytes), byte[].class)
                .retrieve()
                .bodyToMono(byte[].class);

        retVal.subscribe(resp -> LOGGER.info(new String(resp)));
    }
}
