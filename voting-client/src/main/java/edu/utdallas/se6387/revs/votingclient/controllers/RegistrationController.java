package edu.utdallas.se6387.revs.votingclient.controllers;

import edu.utdallas.se6387.revs.votingclient.models.Ballot;
import edu.utdallas.se6387.revs.votingclient.models.BallotHeader;
import edu.utdallas.se6387.revs.votingclient.models.Candidate;
import edu.utdallas.se6387.revs.votingclient.models.Race;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@RestController
public class RegistrationController {
    private static final Logger LOGGER = LoggerFactory.getLogger(RegistrationController.class);

    @PostMapping(value = "/registration/{publicKey}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Ballot> getBallotForRegistration(@PathVariable String publicKey) {
        LOGGER.info("getBallotForRegistration called");

        List<Race> races = new ArrayList<>(Arrays.asList(
                new Race("President and Vice President", getPresidentialCandidates()),
                new Race("United States Senator", getSenateCandidates()),
                new Race("Sheriff", getSheriffCandidates()),
                new Race("County Commissioner, Precinct No. 1", getCommishCandidates())
        ));

        Ballot ballot1 = new Ballot(
                new BallotHeader("Texas", "2020-11-03", "general", "Collin", "101A"),
                races
        );

        if ("test1".equals(publicKey)) {
            return new ResponseEntity<>(ballot1, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }

    private List<Candidate> getPresidentialCandidates() {
        Candidate rPres = new Candidate("Donald J. Trump, Michael R. Pence", "Republican");
        Candidate dPres = new Candidate("Joseph R. Biden, Kamala D. Harris", "Democratic");
        Candidate lPres = new Candidate("Jo Jorgensen, Jeremy 'Spike' Cohen", "Libertarian");
        Candidate gPres = new Candidate("Howie Hawkins, Angela Walker", "Green");

        return new ArrayList<>(Arrays.asList(rPres, dPres, lPres, gPres));
    }

    private List<Candidate> getSenateCandidates() {
        Candidate r = new Candidate("John Cornyn", "Republican");
        Candidate d = new Candidate("Mary 'MJ' Hegar", "Democratic");
        Candidate l = new Candidate("Kerry Douglass McKennon", "Libertarian");
        Candidate g = new Candidate("David B. Collins", "Green");

        return new ArrayList<>(Arrays.asList(r, d, l, g));
    }

    private List<Candidate> getSheriffCandidates() {
        Candidate r = new Candidate("Larry Leitha", "Republican");
        Candidate l = new Candidate("Warren Funk", "Libertarian");

        return new ArrayList<>(Arrays.asList(r, l));
    }

    private List<Candidate> getCommishCandidates() {
        Candidate r = new Candidate("Harley David Belew", "Republican");

        return new ArrayList<>(Collections.singletonList(r));
    }
}
