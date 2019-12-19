package spring.datasimulate.datasimulate.hbase.appusage.state;

public class FirstState implements FamilyState {
    @Override
    public String getState() {
        return "5分钟之内";
    }
}
