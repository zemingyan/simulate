package spring.datasimulate.datasimulate.hbase.mysql.dataooject;

import org.springframework.beans.factory.annotation.Value;

import javax.persistence.*;

@Entity
@Table(name = "app", indexes = {
        @Index(unique = true, columnList = "package_name")
})
public class ShowAppDO {
    @GeneratedValue
    @Id
    private Integer id;

    @Column(name = "package_name", unique = true)
    private String packageName;

    private String appName;

    @Value("0")
    private Integer count;

    @Column(length = 50, name = "app_type")
    private String appType;


    @Override
    public String toString() {
        return "ShowAppDO{" +
                "id=" + id +
                ", packageName='" + packageName + '\'' +
                ", appName='" + appName + '\'' +
                ", count=" + count +
                ", appType='" + appType + '\'' +
                '}';
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getPackageName() {
        return packageName;
    }

    public void setPackageName(String packageName) {
        this.packageName = packageName;
    }

    public String getAppName() {
        return appName;
    }

    public void setAppName(String appName) {
        this.appName = appName;
    }

    public Integer getCount() {
        return count;
    }

    public void setCount(Integer count) {
        this.count = count;
    }

    public String getAppType() {
        return appType;
    }

    public void setAppType(String appType) {
        this.appType = appType;
    }
}
