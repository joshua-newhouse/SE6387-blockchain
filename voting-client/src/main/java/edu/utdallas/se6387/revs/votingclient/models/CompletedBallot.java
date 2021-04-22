package edu.utdallas.se6387.revs.votingclient.models;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.Getter;
import lombok.Setter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Collections;
import java.util.List;

@Getter
@Setter
public class CompletedBallot {
    private static final Logger LOGGER = LoggerFactory.getLogger(CompletedBallot.class);

    private CompletedBallotHeader header;
    private List<Selection> races;

    public CompletedBallot() {
    }

    public CompletedBallot(CompletedBallotHeader header, List<Selection> races) {
        this.header = header;
        this.races = races;
    }

    public String toJSONString() {
        String retVal = "";
        ObjectMapper mapper = new ObjectMapper();

        try {
            retVal = mapper.writeValueAsString(this);
        } catch(JsonProcessingException e) {
            LOGGER.warn("Failed creating JSON string", e);
        }

        return retVal;
    }

    public boolean isFrom(Ballot source) {
        boolean retVal = header.isFrom(source.getHeader());

        for(Selection selection : races) {
            retVal = retVal && selection.isFrom(source.getRaces());
        }

        return retVal;
    }
}
