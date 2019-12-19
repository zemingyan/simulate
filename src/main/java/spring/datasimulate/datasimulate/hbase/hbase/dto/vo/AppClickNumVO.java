package spring.datasimulate.datasimulate.hbase.hbase.dto.vo;

import org.omg.PortableInterceptor.INACTIVE;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class AppClickNumVO implements Serializable{
    private List<String> date = new ArrayList<>();
    private List<Integer> clickNum = new ArrayList<>();

    @Override
    public String toString() {
        return "AppClickNumVO{" +
                "date=" + date +
                ", clickNum=" + clickNum +
                '}';
    }

    public List<String> getDate() {
        return date;
    }

    public void setDate(List<String> date) {
        this.date = date;
    }

    public List<Integer> getClickNum() {
        return clickNum;
    }

    public void setClickNum(List<Integer> clickNum) {
        this.clickNum = clickNum;
    }
}
