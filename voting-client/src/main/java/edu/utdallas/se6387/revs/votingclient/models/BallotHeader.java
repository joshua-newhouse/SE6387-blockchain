package edu.utdallas.se6387.revs.votingclient.models;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BallotHeader {
    private String state;
    private String date;
    private String type;
    private String county;
    private String precinct;

    public BallotHeader() {
    }

    public BallotHeader(String state, String date, String type, String county, String precinct) {
        this.state = state;
        this.date = date;
        this.type = type;
        this.county = county;
        this.precinct = precinct;
    }

}
