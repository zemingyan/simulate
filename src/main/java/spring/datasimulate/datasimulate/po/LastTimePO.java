package spring.datasimulate.datasimulate.po;

public class LastTimePO {
    private String phoneID;
    private Long timestamp;
    public LastTimePO(){}
    public LastTimePO(String phoneID, Long timestamp){
        this.phoneID = phoneID;
        this.timestamp = timestamp;
    }
    public String getPhoneID() {
        return phoneID;
    }

    public void setPhoneID(String phoneID) {
        this.phoneID = phoneID;
    }

    public Long getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Long timestamp) {
        this.timestamp = timestamp;
    }

    @Override
    public String toString() {
        return "LastTimePO{" +
                "phoneID='" + phoneID + '\'' +
                ", timestamp=" + timestamp +
                '}';
    }
}
