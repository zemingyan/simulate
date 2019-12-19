package spring.datasimulate.datasimulate.hbase.hbase.dto.vo;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class SingleAppUserChangeDTO implements Serializable{
    private List<String> data;
    private List<List<Integer>> detailData = new ArrayList<>();
    private List<Integer> propData;

    @Override
    public String toString() {
        return "SingleAppUserChangeDTO{" +
                "data=" + data +
                ", detailData=" + detailData +
                ", propData=" + propData +
                '}';
    }

    public List<String> getData() {
        return data;
    }

    public void setData(List<String> data) {
        this.data = data;
    }

    public List<List<Integer>> getDetailData() {
        return detailData;
    }

    public void setDetailData(List<List<Integer>> detailData) {
        this.detailData = detailData;
    }

    public List<Integer> getPropData() {
        return propData;
    }

    public void setPropData(List<Integer> propData) {
        this.propData = propData;
    }
}
