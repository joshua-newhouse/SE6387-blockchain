package edu.utdallas.se6387.revs.votingclient.data;

import com.fasterxml.jackson.databind.ObjectMapper;
import edu.utdallas.se6387.revs.votingclient.models.Ballot;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Repository;

import java.io.File;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.util.Arrays;

@Repository
@Profile("dev")
public class TestRegistrationRepository implements RegistrationRepository {
    private static final Logger LOGGER = LoggerFactory.getLogger(TestRegistrationRepository.class);

    @Override
    public Ballot getBallotFor(byte[] publicKey) {
        LOGGER.info("getBallotFor called with {}", publicKey);

        ObjectMapper mapper = new ObjectMapper();
        Ballot ballot = null;

        URL url = getClass().getClassLoader().getResource(
                Arrays.equals(publicKey, "ABCDE".getBytes(StandardCharsets.UTF_8)) ?
                        "ballots/ballot-101A.json" : "ballots/ballot-325-City-of-Amarillo.json"
        );

        if (url != null) {
            try {
                File ballotFile = new File(url.getFile());
                ballot = mapper.readValue(ballotFile, Ballot.class);
            } catch(Exception e) {
                LOGGER.info("Failed getting ballot", e);
            }
        }

        return ballot;
    }
}
