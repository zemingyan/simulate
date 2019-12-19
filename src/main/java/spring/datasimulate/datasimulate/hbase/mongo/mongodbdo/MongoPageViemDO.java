package spring.datasimulate.datasimulate.hbase.mongo.mongodbdo;

public class MongoPageViemDO {
    private Integer count;
    private String timeStamp;
    private String apiName;
    private String day; // 天  年月日
    private String time; // 时间 时分


    @Override
    public String toString() {
        return "MongoPageViemDO{" +
                "count=" + count +
                ", timeStamp='" + timeStamp + '\'' +
                ", apiName='" + apiName + '\'' +
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
