package edu.utdallas.se6387.revs.votingclient.models;

import java.util.List;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Ballot {
    private BallotHeader header;
    private List<Race> races;

    public Ballot() {}

    public Ballot(BallotHeader header, List<Race> races) {
        this.header = header;
        this.races = races;
    }
}
