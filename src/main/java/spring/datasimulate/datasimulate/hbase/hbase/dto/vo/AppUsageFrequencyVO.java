package spring.datasimulate.datasimulate.hbase.hbase.dto.vo;

import java.io.Serializable;
import java.util.*;

public class AppUsageFrequencyVO implements Serializable{
    private List<String> time;
    private List<List<AppUsageFrequencyDTO>> data = new ArrayList<>();
    private List<AppUsageFrequencyDTO> appTime = new ArrayList<>();

    @Override
    public String toString() {
        return "AppUsageFrequencyVO{" +
                "time=" + time +
                ", data=" + data +
                ", appTime=" + appTime +
                '}';
    }

    public List<AppUsageFrequencyDTO> getAppTime() {
        return appTime;
    }

    public void setAppTime(List<AppUsageFrequencyDTO> appTime) {
        this.appTime = appTime;
    }

    public List<String> getTime() {
        return time;
    }

    public void setTime(List<String> time) {
        this.time = time;
    }

    public List<List<AppUsageFrequencyDTO>> getData() {
        return data;
    }

    public void setData(List<List<AppUsageFrequencyDTO>> data) {
        this.data = data;
    }
}
