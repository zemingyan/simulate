package spring.datasimulate.datasimulate.hbase.hbase.dto.vo;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class UseTimeLength implements Serializable {
    private List<String> xTime = new ArrayList<>();//: any;
    private List<Integer> aPPtime = new ArrayList<>();//: any;

    @Override
    public String toString() {
        return "UseTimeLength{" +
                "xTime=" + xTime +
                ", aPPtime=" + aPPtime +
                '}';
    }

    public List<String> getxTime() {
        return xTime;
    }

    public void setxTime(List<String> xTime) {
        this.xTime = xTime;
    }

    public List<Integer> getaPPtime() {
        return aPPtime;
    }

    public void setaPPtime(List<Integer> aPPtime) {
        this.aPPtime = aPPtime;
    }
}
