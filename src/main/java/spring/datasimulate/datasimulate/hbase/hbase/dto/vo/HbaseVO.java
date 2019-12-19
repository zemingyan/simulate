package spring.datasimulate.datasimulate.hbase.hbase.dto.vo;

public class HbaseVO {
    private String month;
    private HbaseDTO hbaseDTO = new HbaseDTO();



    public HbaseVO(){}

    public HbaseVO(String month, HbaseDTO hbaseDTO){
        this.month = month;
        this.hbaseDTO = hbaseDTO;
    }

    public String getMonth() {
        return month;
    }

    public void setMonth(String month) {
        this.month = month;
    }

    public HbaseDTO getHbaseDTO() {
        return hbaseDTO;
    }

    public void setHbaseDTO(HbaseDTO hbaseDTO) {
        this.hbaseDTO = hbaseDTO;
    }

    @Override
    public String toString() {
        return "HbaseVO{" +
                "month='" + month + '\'' +
                ", hbaseDTO=" + hbaseDTO +
                '}';
    }
}
