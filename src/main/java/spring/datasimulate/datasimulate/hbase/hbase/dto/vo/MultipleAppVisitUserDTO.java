package spring.datasimulate.datasimulate.hbase.hbase.dto.vo;

import spring.datasimulate.datasimulate.hbase.hbase.dto.vo.innerunit.MultipleNameAndCnt;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class MultipleAppVisitUserDTO implements Serializable{
    private List<String> xdata = new ArrayList<>();
    private List<String> data = new ArrayList<>();
    private List<List<Integer>> detailData = new ArrayList<>();


    @Override
    public String toString() {
        return "MultipleAppVisitUserDTO{" +
                "xdata=" + xdata +
                ", data=" + data +
                ", detailData=" + detailData +
                '}';
    }

    public List<String> getXdata() {
        return xdata;
    }

    public void setXdata(List<String> xdata) {
        this.xdata = xdata;
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
}
