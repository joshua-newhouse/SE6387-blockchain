package edu.utdallas.se6387.revs.votingclient.batch;

import edu.utdallas.se6387.revs.votingclient.models.CompletedBallot;

public interface BatchingService {
    void send(CompletedBallot completedBallot) throws BatchingException;
}
