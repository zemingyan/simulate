package spring.datasimulate.datasimulate.hbase.hbase.dto.vo.innerunit;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class MultipleDataVO implements Serializable{
    private List<String > appNames = new ArrayList<>();
    private List<Integer> count  = new ArrayList<>();

    @Override
    public String toString() {
        return "MultipleDataVO{" +
                "appNames=" + appNames +
                ", count=" + count +
                '}';
    }

    public List<Integer> getCount() {
        return count;
    }

    public void setCount(List<Integer> count) {
        this.count = count;
    }

    public List<String> getAppNames() {
        return appNames;
    }

    public void setAppNames(List<String> appNames) {
        this.appNames = appNames;
    }
}
