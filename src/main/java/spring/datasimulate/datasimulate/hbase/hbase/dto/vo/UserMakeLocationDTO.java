package spring.datasimulate.datasimulate.hbase.hbase.dto.vo;

import javax.sql.rowset.serial.SerialArray;
import java.io.Serializable;

public class UserMakeLocationDTO implements Comparable<UserMakeLocationDTO>, Serializable{
    private String name;
    private Integer value;

    @Override
    public String toString() {
        return "UserMakeLocationDTO{" +
                "name='" + name + '\'' +
                ", value=" + value +
                '}';
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getValue() {
        return value;
    }

    public void setValue(Integer value) {
        this.value = value;
    }

    @Override
    public int compareTo(UserMakeLocationDTO o) {
        if (o.value > this.value){
            return 1;
        }
        if (o.value < this.value){
            return -1;
        }
        return 0;
    }
}
