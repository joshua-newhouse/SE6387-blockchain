package edu.utdallas.se6387.revs.votingclient.models;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Candidate {
    private String name;
    private String party;

    public Candidate() {
    }

    public Candidate(String name, String party) {
        this.name = name;
        this.party = party;
    }
}
