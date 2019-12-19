package spring.datasimulate.datasimulate.hbase.hbase.dto.vo;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class SingleAppReserveDTO implements Serializable {
    private List<String> data = new ArrayList<>();
    private List<Integer> seriesData = new ArrayList<>();

    @Override
    public String toString() {
        return "SingleAppReserveDTO{" +
                "data=" + data +
                ", seriesData=" + seriesData +
                '}';
    }

    public List<String> getData() {
        return data;
    }

    public void setData(List<String> data) {
        this.data = data;
    }

    public List<Integer> getSeriesData() {
        return seriesData;
    }

    public void setSeriesData(List<Integer> seriesData) {
        this.seriesData = seriesData;
    }
}
