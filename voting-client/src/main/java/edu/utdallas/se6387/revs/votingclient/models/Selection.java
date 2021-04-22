package edu.utdallas.se6387.revs.votingclient.models;

import edu.utdallas.se6387.revs.votingclient.VotingClientException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Collections;
import java.util.List;

public class Selection extends Race {

    public Selection() {
    }

    public Selection(String raceName, Candidate candidate) {
        super(raceName, Collections.singletonList(candidate));
    }

    public void setCandidates(List<Candidate> candidates) throws VotingClientException {
        if(candidates.size() > 1) {
            throw new VotingClientException("Cannot select more than one candidate for a race");
        }

        this.candidates = candidates.isEmpty() ?
                Collections.emptyList() : Collections.singletonList(candidates.get(0));
    }

    public boolean isFrom(List<Race> source) {
        for(Race r : source) {
            if(r.getRaceName().equals(raceName) && r.getCandidates().containsAll(this.getCandidates())) {
                return true;
            }
        }

        return false;
    }
}
