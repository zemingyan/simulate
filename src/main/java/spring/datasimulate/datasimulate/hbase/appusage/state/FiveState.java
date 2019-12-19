package spring.datasimulate.datasimulate.hbase.appusage.state;

public class FiveState implements FamilyState{
    @Override
    public String getState() {
        return "1小时以上";
    }
}
