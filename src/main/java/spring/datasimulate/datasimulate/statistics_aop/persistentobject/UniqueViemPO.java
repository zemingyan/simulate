package spring.datasimulate.datasimulate.statistics_aop.persistentobject;

public class UniqueViemPO {
    private String IPAddress;
    private Long timeStamp;

    public String getIPAddress() {
        return IPAddress;
    }

    public void setIPAddress(String IPAddress) {
        this.IPAddress = IPAddress;
    }

    public Long getTimeStamp() {
        return timeStamp;
    }

    public void setTimeStamp(Long timeStamp) {
        this.timeStamp = timeStamp;
    }

    @Override
    public String toString() {
        return "UniqueViemPO{" +
                "IPAddress='" + IPAddress + '\'' +
                ", timeStamp=" + timeStamp +
                '}';
    }
}
