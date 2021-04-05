package edu.utdallas.se6387.revs.votingclient.models;

import lombok.Getter;
import lombok.Setter;
import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;

import java.util.List;

@Getter
@Setter
public class Race {
    protected String raceName;
    private List<Candidate> candidates;

    public Race() {
    }

    public Race(String raceName, List<Candidate> candidates) {
        this.raceName = raceName;
        this.candidates = candidates;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this, ToStringStyle.JSON_STYLE)
                .append("raceName", raceName)
                .append("candidates", candidates)
                .toString();
    }
}
