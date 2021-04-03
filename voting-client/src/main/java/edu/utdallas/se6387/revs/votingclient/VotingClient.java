package edu.utdallas.se6387.revs.votingclient;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class VotingClient {

    public static void main(String[] args) {
        SpringApplication.run(VotingClient.class, args);
    }
}
