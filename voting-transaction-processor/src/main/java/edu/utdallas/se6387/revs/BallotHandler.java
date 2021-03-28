package edu.utdallas.se6387.revs;

import sawtooth.sdk.processor.Context;
import sawtooth.sdk.processor.TransactionHandler;
import sawtooth.sdk.processor.Utils;
import sawtooth.sdk.processor.exceptions.InternalError;
import sawtooth.sdk.processor.exceptions.InvalidTransactionException;
import sawtooth.sdk.protobuf.TpProcessRequest;

import java.io.UnsupportedEncodingException;
import java.util.Collection;
import java.util.Collections;

public class BallotHandler implements TransactionHandler {
    private final Collection<String> nameSpaces;

    public BallotHandler() throws UnsupportedEncodingException {
        this.nameSpaces = Collections.singletonList(
                Utils.hash512(this.transactionFamilyName().getBytes("UTF-8")).substring(0, 6)
        );
    }

    @Override
    public String transactionFamilyName() {
        return "vote";
    }

    @Override
    public String getVersion() {
        return "0.1.0";
    }

    @Override
    public Collection<String> getNameSpaces() {
        return nameSpaces;
    }

    @Override
    public void apply(TpProcessRequest tpProcessRequest, Context context)
            throws InvalidTransactionException, InternalError {

    }
}