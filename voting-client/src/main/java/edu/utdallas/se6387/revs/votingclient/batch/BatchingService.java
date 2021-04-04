package edu.utdallas.se6387.revs.votingclient.batch;

import edu.utdallas.se6387.revs.votingclient.models.Ballot;

public interface BatchingService {
    void send(Ballot completedBallot);
}
