package edu.utdallas.se6387.revs.transactionprocessor;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.protobuf.ByteString;
import edu.utdallas.se6387.revs.transactionprocessor.models.CompletedBallot;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import sawtooth.sdk.processor.State;
import sawtooth.sdk.processor.TransactionHandler;
import sawtooth.sdk.processor.Utils;
import sawtooth.sdk.processor.exceptions.InternalError;
import sawtooth.sdk.processor.exceptions.InvalidTransactionException;
import sawtooth.sdk.protobuf.TpProcessRequest;

import java.io.UnsupportedEncodingException;
import java.nio.charset.StandardCharsets;
import java.util.AbstractMap;
import java.util.Collection;
import java.util.Collections;
import java.util.Map;

public class BallotHandler implements TransactionHandler {
    private static final Logger LOGGER = LoggerFactory.getLogger(BallotHandler.class);

    private final String addressPrefix;
    private final Collection<String> nameSpaces;

    public BallotHandler() throws UnsupportedEncodingException {
        String namespace = Utils.hash512(
                this.transactionFamilyName().getBytes(StandardCharsets.UTF_8)
        ).substring(0, 6);

        LOGGER.info("NAMESPACE: {}", namespace);

        this.addressPrefix = namespace;
        this.nameSpaces = Collections.singletonList(namespace);
    }

    /* TODO: Externalize transaction family name */
    @Override
    public String transactionFamilyName() {
        return "vote";
    }

    /* TODO: Externalize version */
    @Override
    public String getVersion() {
        return "0.1.0";
    }

    @Override
    public Collection<String> getNameSpaces() {
        return nameSpaces;
    }

    @Override
    public void apply(TpProcessRequest tpProcessRequest, State state)
            throws InvalidTransactionException, InternalError {

        String payload = tpProcessRequest.getPayload().toStringUtf8();
        LOGGER.debug("PAYLOAD: {}", payload);

        String voterCert;
        CompletedBallot ballot;
        try {
            ballot = new ObjectMapper().readValue(payload, CompletedBallot.class);
            voterCert = ballot.getHeader().getVoterCertificate();

            LOGGER.info("Voter Certificate: {}", voterCert);
            LOGGER.info("Completed Ballot: {}", ballot.toJSONString());
        } catch(Exception e) {
            throw new InvalidTransactionException("Failed reading ballot.");
        }

        String voterAddress = addressPrefix + Utils.hash512(
                voterCert.getBytes(StandardCharsets.UTF_8)
        ).substring(0, 64);

        Map<String, ByteString> ledgerEntry = state.getState(
                Collections.singletonList(voterAddress)
        );

        if(ledgerEntry.get(voterAddress).isEmpty()) {
            LOGGER.info("Adding new vote to ledger: {}", voterAddress);

            Map.Entry<String, ByteString> newVote = new AbstractMap.SimpleEntry<>(
                    voterAddress, ByteString.copyFromUtf8(ballot.toJSONString())
            );

            Collection<Map.Entry<String, ByteString>> newLedgerEntry = Collections.singletonList(newVote);
            state.setState(newLedgerEntry);

            LOGGER.info("Successfully added new vote to ledger: {}", voterAddress);
        } else {
            LOGGER.warn("Vote already present at: {}", voterAddress);
        }
    }
}
