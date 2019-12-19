package spring.datasimulate.datasimulate.po;

public class App {
    private String appName;
    private String endTime;
    private String packageName;
    private String startTime;


    public String getAppName() {
        return appName;
    }

    public void setAppName(String appName) {
        this.appName = appName;
    }

    public String getEndTime() {
        return endTime;
    }

    public void setEndTime(String endTime) {
        this.endTime = endTime;
    }

    public String getPackageName() {
        return packageName;
    }

    public void setPackageName(String packageName) {
        this.packageName = packageName;
    }

    public String getStartTime() {
        return startTime;
    }

    public void setStartTime(String startTime) {
        this.startTime = startTime;
    }

    @Override
    public String toString() {
        return "App{" +
                "appName='" + appName + '\'' +
                ", endTime='" + endTime + '\'' +
                ", packageName='" + packageName + '\'' +
                ", startTime='" + startTime + '\'' +
                '}';
    }
}
