package edu.utdallas.se6387.revs.transactionprocessor;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import sawtooth.sdk.processor.TransactionProcessor;

import java.io.UnsupportedEncodingException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

@SpringBootApplication
public class VotingTransactionProcessor {
    private static final Logger LOGGER = LoggerFactory.getLogger(VotingTransactionProcessor.class);
    private static final String validatorAddress = "tcp://" + System.getProperty("validator_host_port").trim();

    public static void main(String[] args) {
        ConfigurableApplicationContext ctx =
                SpringApplication.run(VotingTransactionProcessor.class, args);

        ExecutorService executorService = Executors.newSingleThreadExecutor();
        TransactionProcessor transactionProcessor = new TransactionProcessor(validatorAddress);

        try {
            transactionProcessor.addHandler(new BallotHandler());
            executorService.submit(transactionProcessor);
            LOGGER.info("Started voting transaction processor for {}", validatorAddress);
        } catch(UnsupportedEncodingException e) {
            LOGGER.error("Failed adding ballot handler.", e);
            SpringApplication.exit(ctx, () -> 16);
        }
    }
}
