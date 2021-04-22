package edu.utdallas.se6387.revs.votingclient.models;

import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import edu.utdallas.se6387.revs.votingclient.data.RegistrationRepository;
import edu.utdallas.se6387.revs.votingclient.data.TestRegistrationRepository;
import org.junit.Test;

import java.io.File;
import java.net.URL;
import java.nio.charset.StandardCharsets;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

public class ModelsTests {

    RegistrationRepository registrationRepository = new TestRegistrationRepository();

    @Test
    public void TestValidBallotVerification() throws Exception {
        Ballot expected = registrationRepository.getBallotFor("ABCDE".getBytes(StandardCharsets.UTF_8));
        CompletedBallot validBallot = getCompletedBallotFromFile("ballots/complete-ballot-101A-1.json");

        assertTrue(validBallot.isFrom(expected));
    }

    @Test
    public void TestInvalidBallotRace() throws Exception {
        Ballot expected = registrationRepository.getBallotFor("ABCDE".getBytes(StandardCharsets.UTF_8));
        CompletedBallot invalidBallot = getCompletedBallotFromFile("ballots/invalid-race-ballot-101A-1.json");

        assertFalse(invalidBallot.isFrom(expected));
    }

    @Test
    public void TestInvalidCandidate() throws Exception {
        Ballot expected = registrationRepository.getBallotFor("ABCDE".getBytes(StandardCharsets.UTF_8));
        CompletedBallot invalidBallot = getCompletedBallotFromFile("ballots/invalid-candidate-ballot-101A-1.json");

        assertFalse(invalidBallot.isFrom(expected));
    }

    @Test(expected = JsonMappingException.class)
    public void TestSelectTooManyCandidates() throws Exception {
        getCompletedBallotFromFile("ballots/too-many-presidents-ballot-101A-1.json");
    }

    private CompletedBallot getCompletedBallotFromFile(String filePath) throws Exception {
        URL validUrl = getClass().getClassLoader().getResource(filePath);
        File validFile = new File(validUrl.getFile());
        ObjectMapper mapper = new ObjectMapper();
        return mapper.readValue(validFile, CompletedBallot.class);
    }

}
