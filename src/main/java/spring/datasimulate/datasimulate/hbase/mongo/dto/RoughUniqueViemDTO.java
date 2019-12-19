package spring.datasimulate.datasimulate.hbase.mongo.dto;

import java.util.ArrayList;
import java.util.List;

public class RoughUniqueViemDTO {
    private List<String> date = new ArrayList<>();
    private List<Integer> count = new ArrayList<>();

    @Override
    public String toString() {
        return "RoughUniqueViemDTO{" +
                "date=" + date +
                ", count=" + count +
                '}';
    }

    public List<String> getDate() {
        return date;
    }

    public void setDate(List<String> date) {
        this.date = date;
    }

    public List<Integer> getCount() {
        return count;
    }

    public void setCount(List<Integer> count) {
        this.count = count;
    }
}
