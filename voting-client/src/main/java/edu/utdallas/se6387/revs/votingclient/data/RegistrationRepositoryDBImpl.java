package edu.utdallas.se6387.revs.votingclient.data;

import edu.utdallas.se6387.revs.votingclient.models.Ballot;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Repository;

@Repository
@Profile("!dev")
public class RegistrationRepositoryDBImpl implements RegistrationRepository {
    @Override
    public Ballot getBallotFor(byte[] publicKey) {
        return null;
    }
}
