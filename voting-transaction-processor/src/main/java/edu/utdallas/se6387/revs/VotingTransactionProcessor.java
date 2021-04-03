package edu.utdallas.se6387.revs;

import sawtooth.sdk.processor.TransactionProcessor;

import java.io.UnsupportedEncodingException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class VotingTransactionProcessor {
    public static void main(String[] args) {
        ExecutorService executorService = Executors.newSingleThreadExecutor();
        TransactionProcessor transactionProcessor = new TransactionProcessor(args[0]);

        try {
            transactionProcessor.addHandler(new BallotHandler());
        } catch(UnsupportedEncodingException e) {
            e.printStackTrace();
        }

        executorService.submit(transactionProcessor);
    }
}
