package spring.datasimulate.datasimulate.hbase.hbase.dto.vo;

import java.io.Serializable;

public class UserHobbyDTO implements Comparable<UserHobbyDTO>, Serializable{
    private String name;
    private Integer value;
    @Override
    public int compareTo(UserHobbyDTO o) {
        if (o.value > this.value){
            return 1;
        }
        if (o.value < this.value){
            return -1;
        }
        return 0;
    }

    @Override
    public String toString() {
        return "UserHobbyDTO{" +
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
}
