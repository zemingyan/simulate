package spring.datasimulate.datasimulate.hbase.hbase.dto.vo;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class AppVersionVO implements Serializable{
    private List<String> allVersionString = new ArrayList<>();
    private List<AppVersionNumDTO> versionNumber = new ArrayList<>();
    private List<String> allVersion = new ArrayList<>();
    private List<String> date = new ArrayList<>();
    private List<List<Integer>> everyDayVersion = new ArrayList<>();


    @Override
    public String toString() {
        return "AppVersionVO{" +
                "allVersionString=" + allVersionString +
                ", versionNumber=" + versionNumber +
                ", allVersion=" + allVersion +
                ", date=" + date +
                ", everyDayVersion=" + everyDayVersion +
                '}';
    }

    public List<String> getAllVersionString() {
        return allVersionString;
    }

    public void setAllVersionString(List<String> allVersionString) {
        this.allVersionString = allVersionString;
    }

    public List<AppVersionNumDTO> getVersionNumber() {
        return versionNumber;
    }

    public void setVersionNumber(List<AppVersionNumDTO> versionNumber) {
        this.versionNumber = versionNumber;
    }

    public List<String> getAllVersion() {
        return allVersion;
    }

    public void setAllVersion(List<String> allVersion) {
        this.allVersion = allVersion;
    }

    public List<String> getDate() {
        return date;
    }

    public void setDate(List<String> date) {
        this.date = date;
    }

    public List<List<Integer>> getEveryDayVersion() {
        return everyDayVersion;
    }

    public void setEveryDayVersion(List<List<Integer>> everyDayVersion) {
        this.everyDayVersion = everyDayVersion;
    }
}
