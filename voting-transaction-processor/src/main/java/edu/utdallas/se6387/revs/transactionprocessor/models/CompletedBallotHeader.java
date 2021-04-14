package edu.utdallas.se6387.revs.transactionprocessor.models;

import lombok.Getter;
import lombok.Setter;
import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;

@Getter
@Setter
public class CompletedBallotHeader extends BallotHeader {
    private String timestamp;
    private String voterCertificate;
    private String signature;

    public CompletedBallotHeader() {
    }

    public CompletedBallotHeader(String state, String date, String type, String county, String precinct, String timestamp, String voterCertificate, String signature) {
        super(state, date, type, county, precinct);
        this.timestamp = timestamp;
        this.voterCertificate = voterCertificate;
        this.signature = signature;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this, ToStringStyle.JSON_STYLE)
                .append("timestamp", timestamp)
                .append("voterCertificate", voterCertificate)
                .append("signature", voterCertificate)
                .toString();
    }
}
