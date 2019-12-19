package spring.datasimulate.datasimulate.hbase.hbase.dto.vo;

public class UserMessageDTO {
    private String id;
    private String province;
    private String city;
    private String name;
    private String allTime;
    private String allApp;

    @Override
    public String toString() {
        return "UserMessageDTO{" +
                "id='" + id + '\'' +
                ", province='" + province + '\'' +
                ", city='" + city + '\'' +
                ", name='" + name + '\'' +
                ", allTime='" + allTime + '\'' +
                ", allApp='" + allApp + '\'' +
                '}';
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getProvince() {
        return province;
    }

    public void setProvince(String province) {
        this.province = province;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAllTime() {
        return allTime;
    }

    public void setAllTime(String allTime) {
        this.allTime = allTime;
    }

    public String getAllApp() {
        return allApp;
    }

    public void setAllApp(String allApp) {
        this.allApp = allApp;
    }
}
