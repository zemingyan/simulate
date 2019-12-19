package spring.datasimulate.datasimulate.hbase.mysql.dataooject;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "app_version")
public class ShowAppVersionDO {
    @GeneratedValue
    @Id
    private Integer said;
    private String packetName;
    private String version;

    @Override
    public String toString() {
        return "ShowAppVersionDO{" +
                "said=" + said +
                ", packetName='" + packetName + '\'' +
                ", version='" + version + '\'' +
                '}';
    }

    public Integer getSaid() {
        return said;
    }

    public void setSaid(Integer said) {
        this.said = said;
    }

    public String getPacketName() {
        return packetName;
    }

    public void setPacketName(String packetName) {
        this.packetName = packetName;
    }

    public String getVersion() {
        return version;
    }

    public void setVersion(String version) {
        this.version = version;
    }

}
