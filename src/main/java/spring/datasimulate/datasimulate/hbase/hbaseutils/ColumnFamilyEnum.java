package spring.datasimulate.datasimulate.hbase.hbaseutils;

public enum ColumnFamilyEnum {
    BRAND(0),MODEL(1),SYSTEM_VERSION(2);
    private Integer value;
    private ColumnFamilyEnum(int value){
        this.value = value;
    }
    public int getValue(){
        return value;
    }
}