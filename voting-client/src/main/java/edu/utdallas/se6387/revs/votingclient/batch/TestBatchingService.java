package edu.utdallas.se6387.revs.votingclient.batch;

import edu.utdallas.se6387.revs.votingclient.models.CompletedBallot;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Service;

@Service
@Profile("dev")
public class TestBatchingService implements BatchingService {

    @Override
    public void send(CompletedBallot completedBallot) {

    }
}
