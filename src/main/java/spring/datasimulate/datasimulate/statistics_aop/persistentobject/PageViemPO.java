package spring.datasimulate.datasimulate.statistics_aop.persistentobject;

/**
 * 到此时间戳为止，访问某个api的次数
 */
public class PageViemPO {
    private Long timestamp;
    private Long pageViemCnt;

    public Long getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Long timestamp) {
        this.timestamp = timestamp;
    }

    public Long getPageViemCnt() {
        return pageViemCnt;
    }

    public void setPageViemCnt(Long pageViemCnt) {
        this.pageViemCnt = pageViemCnt;
    }

    @Override
    public String toString() {
        return "ResponseTimePO{" +
                "timestamp=" + timestamp +
                ", pageViemCnt=" + pageViemCnt +
                '}';
    }
}
