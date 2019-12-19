package spring.datasimulate.datasimulate.hbase.hbase.dto.vo;

import spring.datasimulate.datasimulate.hbase.hbase.dto.vo.innerunit.MultipleNameAndCnt;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class MultipleAppMarketRateDTO implements Serializable{
    private List<List<String>> detailData = new ArrayList<>();
    private List<String> firstData = new ArrayList<>();
    private List<MultipleNameAndCnt> data = new ArrayList<>();

    @Override
    public String toString() {
        return "MultipleAppMarketRateDTO{" +
                "detailData=" + detailData +
                ", firstData=" + firstData +
                ", data=" + data +
                '}';
    }

    public List<List<String>> getDetailData() {
        return detailData;
    }

    public void setDetailData(List<List<String>> detailData) {
        this.detailData = detailData;
    }

    public List<String> getFirstData() {
        return firstData;
    }

    public void setFirstData(List<String> firstData) {
        this.firstData = firstData;
    }

    public List<MultipleNameAndCnt> getData() {
        return data;
    }

    public void setData(List<MultipleNameAndCnt> data) {
        this.data = data;
    }
}
