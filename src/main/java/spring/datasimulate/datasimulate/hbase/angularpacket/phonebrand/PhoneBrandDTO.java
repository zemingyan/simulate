package spring.datasimulate.datasimulate.hbase.angularpacket.phonebrand;

import java.io.Serializable;
import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.List;

public class PhoneBrandDTO implements Comparable<PhoneBrandDTO>, Serializable{
    private String name;
    private String average;
    private String show;
    private List<Float> degree = new ArrayList<>();

    @Override
    public String toString() {
        return "PhoneBrandDTO{" +
                ", name='" + name + '\'' +
                ", show='" + show + '\'' +
                ", avg='" + average + '\'' +
                ", degree=" + degree +
                '}';
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAverage() {
        return average;
    }

    public void setAverage(String average) {
        this.average = average;
    }

    public List<Float> getDegree() {
        return degree;
    }

    public void setDegree(List<Float> degree) {
        this.degree = degree;
    }

    public String getShow() {
        return show;
    }

    public void setShow(String show) {
        this.show = show;
    }

    @Override
    public int compareTo(PhoneBrandDTO phoneBrandDTO) {
        Double paramAgerage = Double.valueOf(phoneBrandDTO.getAverage());
        Double thisAgerage = Double.valueOf(this.getAverage());
        if (paramAgerage - thisAgerage > 0) return 1;
        else if (paramAgerage - thisAgerage < 0) return -1;
        return 0;
    }
}
