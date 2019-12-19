package spring.datasimulate.datasimulate.hbase.hbase.dto.vo;

import spring.datasimulate.datasimulate.hbase.hbase.dto.vo.innerunit.MultipleNameAndCnt;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class MultipleAppTypeRate implements Serializable{
    private List<String> data = new ArrayList<>();
    private List<MultipleNameAndCnt> detailData = new ArrayList<>();

    @Override
    public String  toString() {
        return "MultipleAppVisitUserDTO{" +
                ", data=" + data +
                ", detailData=" + detailData +
                '}';
    }



    public List<String> getData() {
        return data;
    }

    public void setData(List<String> data) {
        this.data = data;
    }

    public List<MultipleNameAndCnt> getDetailData() {
        return detailData;
    }

    public void setDetailData(List<MultipleNameAndCnt> detailData) {
        this.detailData = detailData;
    }
}
