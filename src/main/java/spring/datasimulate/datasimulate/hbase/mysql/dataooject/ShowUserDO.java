package spring.datasimulate.datasimulate.hbase.mysql.dataooject;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "user_id")
public class ShowUserDO {

    @GeneratedValue
    private Integer number;
    @Id
    private String id;
    private String province;
    private String city;
    private String name;


    @Override
    public String toString() {
        return "ShowUserBO{" +
                "id='" + id + '\'' +
                ", province='" + province + '\'' +
                ", city='" + city + '\'' +
                ", number='" + number + '\'' +
                ", name='" + name + '\'' +
                '}';
    }

    public Integer getNumber() {
        return number;
    }

    public void setNumber(Integer number) {
        this.number = number;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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
}
