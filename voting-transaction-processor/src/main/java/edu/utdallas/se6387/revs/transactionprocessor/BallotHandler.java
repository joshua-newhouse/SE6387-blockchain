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

    private final Collection<String> nameSpaces;

    public BallotHandler() throws UnsupportedEncodingException {
        String namespace = Utils.hash512(
                this.transactionFamilyName().getBytes(StandardCharsets.UTF_8)
        ).substring(0, 6);

        LOGGER.debug("NAMESPACE: {}", namespace);

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

        String voterCert = "";
        CompletedBallot ballot = null;
        try {
            ballot = new ObjectMapper().readValue(payload, CompletedBallot.class);
            voterCert = ballot.getHeader().getVoterCertificate();

            LOGGER.info("Voter Certificate: {}", voterCert);
            LOGGER.info("Completed Ballot: {}", ballot.toJSONString());
        } catch(Exception e) {
            LOGGER.warn("Failed reading completed ballot.", e);
            return;
        }

        Map<String, ByteString> ledgerEntry = state.getState(
                Collections.singletonList(voterCert)
        );

        if(!ledgerEntry.isEmpty()) {
            LOGGER.info("Ballot already present in ledger for {}", voterCert);
            return;
        }

        Map.Entry<String, ByteString> newVote = new AbstractMap.SimpleEntry<>(
                voterCert, ByteString.copyFromUtf8(ballot.toJSONString())
        );

        Collection<Map.Entry<String, ByteString>> newLedgerEntry = Collections.singletonList(newVote);
        state.setState(newLedgerEntry);
    }
}
