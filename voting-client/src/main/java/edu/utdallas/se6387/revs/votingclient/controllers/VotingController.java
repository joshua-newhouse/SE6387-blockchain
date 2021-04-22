package edu.utdallas.se6387.revs.votingclient.controllers;

import edu.utdallas.se6387.revs.votingclient.batch.BatchingException;
import edu.utdallas.se6387.revs.votingclient.batch.BatchingService;
import edu.utdallas.se6387.revs.votingclient.data.RegistrationRepository;
import edu.utdallas.se6387.revs.votingclient.models.Ballot;
import edu.utdallas.se6387.revs.votingclient.models.CompletedBallot;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.nio.charset.StandardCharsets;

@RestController
public class VotingController {
    private static final Logger LOGGER = LoggerFactory.getLogger(VotingController.class);

    @Autowired
    RegistrationRepository registrationRepository;

    @Autowired
    BatchingService batchingService;

    @PostMapping(value = "/registration", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Ballot> getBallotForRegistration(@RequestBody byte[] certificate) {
        LOGGER.info("getBallotForRegistration called");

        if(!isCertificateValid(certificate)) {
            return new ResponseEntity<>(null, HttpStatus.UNAUTHORIZED);
        }

        byte[] publicKey = getPublicKey(certificate);
        Ballot ballot = registrationRepository.getBallotFor(publicKey);

        return (ballot == null) ?
                new ResponseEntity<>(null, HttpStatus.UNAUTHORIZED) : new ResponseEntity<>(ballot, HttpStatus.OK);
    }

    /* TODO: Verify certificate with the CA */
    private boolean isCertificateValid(byte[] certificate) {
        return true;
    }

    /* TODO: Extract public key from certificate */
    private byte[] getPublicKey(byte[] certificate) {
        return "ABCDE".getBytes(StandardCharsets.UTF_8);
    }

    /* TODO: Implement this */
    @PostMapping(value = "/vote", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Void> processVote(@RequestBody CompletedBallot completedBallot) {

        /* Get ballot from database for the public key and verify it is the correct ballot */
        Ballot source = registrationRepository.getBallotFor(
                completedBallot.getHeader().getVoterCertificate().getBytes(StandardCharsets.UTF_8)
        );

        if(!completedBallot.isFrom(source)) {
            return new ResponseEntity<>(HttpStatus.UNPROCESSABLE_ENTITY);
        }

        /* Get digital certificate from header and verify CA */
        /* Verify signature in ballot header with the public key */

        HttpStatus status = HttpStatus.OK;
        try {
            batchingService.send(completedBallot);
        } catch (BatchingException e) {
            LOGGER.warn("Failed creating batch", e);
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return new ResponseEntity<>(status);
    }
}
