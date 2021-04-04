package edu.utdallas.se6387.revs.votingclient.data;

import edu.utdallas.se6387.revs.votingclient.models.Ballot;

public interface RegistrationRepository {
    Ballot getBallotFor(byte[] publicKey);
}
