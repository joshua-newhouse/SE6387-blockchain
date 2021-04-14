package edu.utdallas.se6387.revs.transactionprocessor.models;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Collections;
import java.util.List;

public class Selection extends Race {
    private static final Logger LOGGER = LoggerFactory.getLogger(Selection.class);

    public Selection() {
    }

    public Selection(String raceName, Candidate candidate) {
        super(raceName, Collections.singletonList(candidate));
    }

    @Override
    public void setCandidates(List<Candidate> candidates) {
        if(candidates.size() > 1) {
            LOGGER.info("Cannot select more than one candidate for a race");
        } else {
            super.setCandidates(
                    candidates.isEmpty() ? Collections.emptyList() : Collections.singletonList(candidates.get(0))
            );
        }
    }
}
