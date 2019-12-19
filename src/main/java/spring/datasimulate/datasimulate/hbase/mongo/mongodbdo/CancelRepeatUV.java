package spring.datasimulate.datasimulate.hbase.mongo.mongodbdo;

public class CancelRepeatUV {
    private String IPAddress;
    private String apiName;
    @Override
    public boolean equals(Object o) {
        if (o == null) return false;
        if (this == o) return true;
        if (!(o instanceof CancelRepeatUV)) return false;
        CancelRepeatUV that = (CancelRepeatUV) o;
        return this.IPAddress.equals(that.IPAddress) && this.apiName.equals(that.apiName);
    }

    @Override
    public int hashCode() {
        return apiName.hashCode()*IPAddress.hashCode();
    }

    @Override
    public String toString() {
        return "CancelRepeatUV{" +
                "IPAddress='" + IPAddress + '\'' +
                ", apiName='" + apiName + '\'' +
                '}';
    }
    public String getIPAddress() {
        return IPAddress;
    }

    public void setIPAddress(String IPAddress) {
        this.IPAddress = IPAddress;
    }

    public String getApiName() {
        return apiName;
    }

    public void setApiName(String apiName) {
        this.apiName = apiName;
    }

}
