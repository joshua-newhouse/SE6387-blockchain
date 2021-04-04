package edu.utdallas.se6387.revs.votingclient.models;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class CompletedBallot {
    private CompletedBallotHeader header;
    private List<Selection> selections;

    public CompletedBallot() {
    }

    public CompletedBallot(CompletedBallotHeader header, List<Selection> selections) {
        this.header = header;
        this.selections = selections;
    }
}
