package spring.datasimulate.datasimulate.hbase.mysql.dataooject;


import javax.persistence.*;

@Entity
@Table(indexes = {
        @Index(columnList = "app_name", unique = true),
        @Index(columnList = "package_name", unique = true)
})
public class ShowAppTypeDO {
    @GeneratedValue
    @Id
    private Integer id;

    @Column(name = "app_name", length = 40)
    private String appName;
    @Column(name = "package_name", length = 50)
    private String packageName;
    private Integer count;
    private String kind;

    @Override
    public String toString() {
        return "ShowAppTypeDO{" +
                "id=" + id +
                ", appName='" + appName + '\'' +
                ", packageName='" + packageName + '\'' +
                ", count=" + count +
                ", kind='" + kind + '\'' +
                '}';
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getAppName() {
        return appName;
    }

    public void setAppName(String appName) {
        this.appName = appName;
    }

    public String getPackageName() {
        return packageName;
    }

    public void setPackageName(String packageName) {
        this.packageName = packageName;
    }

    public Integer getCount() {
        return count;
    }

    public void setCount(Integer count) {
        this.count = count;
    }

    public String getKind() {
        return kind;
    }

    public void setKind(String kind) {
        this.kind = kind;
    }
}
