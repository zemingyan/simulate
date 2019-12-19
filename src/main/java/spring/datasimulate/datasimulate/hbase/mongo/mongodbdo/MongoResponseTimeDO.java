package spring.datasimulate.datasimulate.hbase.mongo.mongodbdo;

public class MongoResponseTimeDO {
    private String startTime;
    private String endTime;
    private String apiName;
    private Integer dealTime;
    private String day; // 天  年月日
    private String time; // 时间 时分

    @Override
    public String toString() {
        return "MongoResponseTimeDO{" +
                "startTime='" + startTime + '\'' +
                ", endTime='" + endTime + '\'' +
                ", apiName='" + apiName + '\'' +
                ", dealTime='" + dealTime + '\'' +
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

    public String getStartTime() {
        return startTime;
    }

    public void setStartTime(String startTime) {
        this.startTime = startTime;
    }

    public String getEndTime() {
        return endTime;
    }

    public void setEndTime(String endTime) {
        this.endTime = endTime;
    }

    public String getApiName() {
        return apiName;
    }

    public void setApiName(String apiName) {
        this.apiName = apiName;
    }

    public Integer getDealTime() {
        return dealTime;
    }

    public void setDealTime(Integer dealTime) {
        this.dealTime = dealTime;
    }
}
