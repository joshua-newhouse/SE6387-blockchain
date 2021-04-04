package edu.utdallas.se6387.revs.votingclient.models;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CompletedBallotHeader extends BallotHeader {
    private String dateTime;
    private String voterCertificate;
    private String ballotSignature;

    public CompletedBallotHeader() {
    }

    public CompletedBallotHeader(String state, String date, String type, String county, String precinct, String dateTime, String voterCertificate, String ballotSignature) {
        super(state, date, type, county, precinct);
        this.dateTime = dateTime;
        this.voterCertificate = voterCertificate;
        this.ballotSignature = ballotSignature;
    }
}
