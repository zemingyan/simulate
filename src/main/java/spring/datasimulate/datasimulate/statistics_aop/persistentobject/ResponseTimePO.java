package spring.datasimulate.datasimulate.statistics_aop.persistentobject;

public class ResponseTimePO {
    private Long startTime;
    private Long endTime;
    private Long dealTime;

    public Long getStartTime() {
        return startTime;
    }

    public void setStartTime(Long startTime) {
        this.startTime = startTime;
    }

    public Long getEndTime() {
        return endTime;
    }

    public void setEndTime(Long endTime) {
        this.endTime = endTime;
    }

    public Long getDealTime() {
        return dealTime;
    }

    public void setDealTime(Long dealTime) {
        this.dealTime = dealTime;
    }

    @Override
    public String toString() {
        return "ResponseTimePO{" +
                "startTime=" + startTime +
                ", endTime=" + endTime +
                ", dealTime=" + dealTime +
                '}';
    }
}
