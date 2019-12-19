package spring.datasimulate.datasimulate.hbase.mongo.dto;

import java.util.TreeMap;

public class PageViemDTO {
    private String apiName;
    private Integer apiIndex;
    private TreeMap<String, Long> dateAndNum = new TreeMap();
    private Long maxViem;
    @Override
    public String toString() {
        return "PageViemDTO{" +
                "apiName='" + apiName + '\'' +
                ", dateAndNum=" + dateAndNum +
                ", apiIndex=" + apiIndex +
                ", maxViem=" + maxViem +
                '}';
    }

    public String getApiName() {
        return apiName;
    }

    public void setApiName(String apiName) {
        this.apiName = apiName;
    }

    public Integer getApiIndex() {
        return apiIndex;
    }

    public void setApiIndex(Integer apiIndex) {
        this.apiIndex = apiIndex;
    }

    public TreeMap<String, Long> getDateAndNum() {
        return dateAndNum;
    }

    public void setDateAndNum(TreeMap<String, Long> dateAndNum) {
        this.dateAndNum = dateAndNum;
    }

    public Long getMaxViem() {
        return maxViem;
    }

    public void setMaxViem(Long maxViem) {
        this.maxViem = maxViem;
    }
}
