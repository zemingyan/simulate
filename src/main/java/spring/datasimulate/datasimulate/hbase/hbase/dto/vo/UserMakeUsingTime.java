package spring.datasimulate.datasimulate.hbase.hbase.dto.vo;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class UserMakeUsingTime implements Serializable{
    private List<String> timeScope = new ArrayList<>();
    private List<Double> timeLength = new ArrayList<>();

    @Override
    public String toString() {
        return "UserMakeUsingTime{" +
                "timeScope=" + timeScope +
                ", timeLength=" + timeLength +
                '}';
    }

    public List<String> getTimeScope() {
        return timeScope;
    }

    public void setTimeScope(List<String> timeScope) {
        this.timeScope = timeScope;
    }

    public List<Double> getTimeLength() {
        return timeLength;
    }

    public void setTimeLength(List<Double> timeLength) {
        this.timeLength = timeLength;
    }
}
