package spring.datasimulate.datasimulate.hbase.mongo.dto;

import java.util.ArrayList;
import java.util.List;

/**
 * 到分钟
 */
public class RoughResponseTimeDTO {
    private List<String> date = null;
    private List<Double> avgTime = null;
    private List<Integer> conut = new ArrayList<>();
    private Double allAvg ;
    public RoughResponseTimeDTO(){
        date = new ArrayList<>();
        avgTime = new ArrayList<>();
    }
    public RoughResponseTimeDTO(int length){
        date = new ArrayList<>(length);
        avgTime = new ArrayList<>(length);
    }

    @Override
    public String toString() {
        return "RoughResponseTimeDTO{" +
                "date=" + date +
                ", avgTime=" + avgTime +
                ", conut=" + conut +
                ", allAvg=" + allAvg +
                '}';
    }

    public Double getAllAvg() {
        return allAvg;
    }

    public List<Integer> getConut() {
        return conut;
    }

    public void setConut(List<Integer> conut) {
        this.conut = conut;
    }

    public void setAllAvg(Double allAvg) {
        this.allAvg = allAvg;
    }

    public List<String> getDate() {
        return date;
    }

    public void setDate(List<String> date) {
        this.date = date;
    }

    public List<Double> getAvgTime() {
        return avgTime;
    }

    public void setAvgTime(List<Double> avgTime) {
        this.avgTime = avgTime;
    }
}
