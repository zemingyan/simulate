package spring.datasimulate.datasimulate.hbase.hbase.dto.vo;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class SingleAppOnceHourUseCountDTO implements Serializable{
    private List<String> fours = new ArrayList<>();
    private List<String> data = new ArrayList<>();

    @Override
    public String toString() {
        return "SingleAppOnceHourUseCountDTO{" +
                "fours=" + fours +
                ", data=" + data +
                '}';
    }

    public List<String> getFours() {
        return fours;
    }

    public void setFours(List<String> fours) {
        this.fours = fours;
    }

    public List<String> getData() {
        return data;
    }

    public void setData(List<String> data) {
        this.data = data;
    }
}
