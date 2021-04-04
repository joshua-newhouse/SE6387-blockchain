package edu.utdallas.se6387.revs.votingclient.batch;

import edu.utdallas.se6387.revs.votingclient.models.CompletedBallot;
import org.springframework.stereotype.Service;

@Service
public class TestBatchingService implements BatchingService {

    @Override
    public void send(CompletedBallot completedBallot) {

    }
}
