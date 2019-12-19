package spring.datasimulate.datasimulate.po;

public class UserPO {
    private String brand;
    private String date;
    private String id;
    private String language;
    private String model;
    private String system_version;


    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getSystem_version() {
        return system_version;
    }

    public void setSystem_version(String system_version) {
        this.system_version = system_version;
    }

    @Override
    public String toString() {
        return "UserPO{" +
                "brand='" + brand + '\'' +
                ", date='" + date + '\'' +
                ", id='" + id + '\'' +
                ", language='" + language + '\'' +
                ", model='" + model + '\'' +
                ", system_version='" + system_version + '\'' +
                '}';
    }
}
