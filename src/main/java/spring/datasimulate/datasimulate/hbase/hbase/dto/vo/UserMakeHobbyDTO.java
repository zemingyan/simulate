package spring.datasimulate.datasimulate.hbase.hbase.dto.vo;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class UserMakeHobbyDTO implements Serializable{
    private List<String> name = new ArrayList<>();
    private List<String> rate = new ArrayList<>();

    @Override
    public String toString() {
        return "UserMakeHobbyDTO{" +
                "name=" + name +
                ", rate=" + rate +
                '}';
    }

    public List<String> getName() {
        return name;
    }

    public void setName(List<String> name) {
        this.name = name;
    }

    public List<String> getRate() {
        return rate;
    }

    public void setRate(List<String> rate) {
        this.rate = rate;
    }
}
