package edu.utdallas.se6387.revs.votingclient.batch;

public class BatchingException extends Exception {
    public BatchingException(Throwable throwable) {
        super(throwable);
    }

    public BatchingException(String s, Throwable throwable) {
        super(s, throwable);
    }
}
