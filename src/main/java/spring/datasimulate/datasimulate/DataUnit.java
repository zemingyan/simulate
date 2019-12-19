package spring.datasimulate.datasimulate;

import spring.datasimulate.datasimulate.po.App;

import java.util.ArrayList;
import java.util.List;

public class DataUnit {
    private String brand;
    private String date;
    private String id;
    private String language;
    private String model;
    private String system_version;
    private List<App> usage= new ArrayList<>();

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getSystem_version() {
        return system_version;
    }

    public void setSystem_version(String system_version) {
        this.system_version = system_version;
    }

    public List<App> getUsage() {
        return usage;
    }

    public void setUsage(List<App> usage) {
        this.usage = usage;
    }

   /* @Override
    public String toString() {
        return "{" +
                "\"brand:\"" + brand +"\""+
                ", \"date:\"" + date +"\""+
                ", \"id:\"" + id +"\""+
                ", \"language:\"" + language +"\""+
                ", \"mode:\"" + model +"\""+
                ",\" system_version:\"" + system_version +"\""+
                ", \"usage\"" + usage +"\""+
                '}';
    }*/
}
//{"brand":"ZUK","date":"Thu Jan 25 00:00:00 GMT+08:00 2018","id":"b7764f1763caa4974cb3b8dc","language":"en","model":"Z2 Plus","system_version":"8.1.0","usage":