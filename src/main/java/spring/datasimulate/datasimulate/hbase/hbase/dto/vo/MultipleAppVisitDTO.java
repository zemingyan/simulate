package spring.datasimulate.datasimulate.hbase.hbase.dto.vo;

import spring.datasimulate.datasimulate.hbase.hbase.dto.vo.innerunit.MultipleInnerRank;

import java.util.ArrayList;
import java.util.List;

public class MultipleAppVisitDTO {
    private List<String> appNames = new ArrayList();
    private List<Integer> visitCount = new ArrayList<>();


    @Override
    public String toString() {
        return "MultipleAppVisitDTO{" +
                "appNames=" + appNames +
                ", visitCount=" + visitCount +
                '}';
    }

    public List<String> getAppNames() {
        return appNames;
    }

    public void setAppNames(List<String> appNames) {
        this.appNames = appNames;
    }

    public List<Integer> getVisitCount() {
        return visitCount;
    }

    public void setVisitCount(List<Integer> visitCount) {
        this.visitCount = visitCount;
    }
}
