package edu.utdallas.se6387.revs.votingclient;

public class VotingClientException extends Throwable {
    public VotingClientException(String s) {
        super(s);
    }

    public VotingClientException(String s, Throwable throwable) {
        super(s, throwable);
    }

    public VotingClientException(Throwable throwable) {
        super(throwable);
    }
}
