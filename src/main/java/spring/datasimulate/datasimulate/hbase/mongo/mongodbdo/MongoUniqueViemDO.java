package spring.datasimulate.datasimulate.hbase.mongo.mongodbdo;


public class MongoUniqueViemDO {
    private String IPAddress;
    private String timeStamp;
    private String apiName;
    private Integer count;
    private String day; // 天  年月日
    private String time; // 时间 时分

    @Override
    public String toString() {
        return "MongoUniqueViemDO{" +
                "IPAddress='" + IPAddress + '\'' +
                ", timeStamp='" + timeStamp + '\'' +
                ", apiName='" + apiName + '\'' +
                ", count=" + count +
                ", day='" + day + '\'' +
                ", time='" + time + '\'' +
                '}';
    }

    public String getDay() {
        return day;
    }

    public void setDay(String day) {
        this.day = day;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public Integer getCount() {
        return count;
    }

    public void setCount(Integer count) {
        this.count = count;
    }

    public String getIPAddress() {
        return IPAddress;
    }

    public void setIPAddress(String IPAddress) {
        this.IPAddress = IPAddress;
    }

    public String getTimeStamp() {
        return timeStamp;
    }

    public void setTimeStamp(String timeStamp) {
        this.timeStamp = timeStamp;
    }

    public String getApiName() {
        return apiName;
    }

    public void setApiName(String apiName) {
        this.apiName = apiName;
    }
}
