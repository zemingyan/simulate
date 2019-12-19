package spring.datasimulate.datasimulate.hbase.hbase.dto.vo.innerunit;

import java.io.Serializable;

public class MultipleNameAndCnt implements Comparable<MultipleNameAndCnt>, Serializable{
    private String name;
    private Integer value;

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
    public String toString() {
        return "MultipleNameAndCnt{" +
                "appName='" + name + '\'' +
                ", count=" + value +
                '}';
    }


    @Override
    public int compareTo(MultipleNameAndCnt o) {
        if (o.value > this.value){
            return 1;
        }
        if (o.value < this.value){
            return -1;
        }
        return 0;
    }
}
