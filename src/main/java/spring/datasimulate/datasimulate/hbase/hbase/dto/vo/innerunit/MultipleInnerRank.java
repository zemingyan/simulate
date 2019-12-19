package spring.datasimulate.datasimulate.hbase.hbase.dto.vo.innerunit;

import java.io.Serializable;

public class MultipleInnerRank implements Serializable{
    private Integer id;
    private String name;
    private String avg;

    @Override
    public String toString() {
        return "MultipleInnerRank{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", avg='" + avg + '\'' +
                '}';
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAvg() {
        return avg;
    }

    public void setAvg(String avg) {
        this.avg = avg;
    }
}
