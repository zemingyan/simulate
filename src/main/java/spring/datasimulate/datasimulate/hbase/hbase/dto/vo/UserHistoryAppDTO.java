package spring.datasimulate.datasimulate.hbase.hbase.dto.vo;

public class UserHistoryAppDTO {
    private String appName;
    private String appUseTime;
    private Integer appUselen;


    @Override
    public String toString() {
        return "UserHistoryAppDTO{" +
                "appName='" + appName + '\'' +
                ", appUseTime='" + appUseTime + '\'' +
                ", appUselen=" + appUselen +
                '}';
    }

    public String getAppName() {
        return appName;
    }

    public void setAppName(String appName) {
        this.appName = appName;
    }

    public String getAppUseTime() {
        return appUseTime;
    }

    public void setAppUseTime(String appUseTime) {
        this.appUseTime = appUseTime;
    }

    public Integer getAppUselen() {
        return appUselen;
    }

    public void setAppUselen(Integer appUselen) {
        this.appUselen = appUselen;
    }
}
