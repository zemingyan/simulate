package spring.datasimulate.datasimulate.hbase.hbase.dto.vo;

import java.io.Serializable;

public class AppUsageFrequencyDTO implements Serializable{
    private String name;
    private Integer value;

    @Override
    public String toString() {
        return "AppUsageFrequencyDTO{" +
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
