package edu.utdallas.se6387.revs.votingclient.models;

import lombok.Getter;
import lombok.Setter;
import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;

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

    @Override
    public String toString() {
        return new ToStringBuilder(this, ToStringStyle.JSON_STYLE)
                .append("name", name)
                .append("party", party)
                .toString();
    }
}
