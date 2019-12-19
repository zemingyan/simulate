package spring.datasimulate.datasimulate.hbase.appusage.state;

import org.omg.CORBA.PUBLIC_MEMBER;

public class StateContext {
    private Integer state;
    private FamilyState familyState = null;
    public StateContext(){}
    public StateContext(Integer state){
        this.state = state;
        init();
    }

    public FamilyState init() {
        if (state == 1) {
            return familyState = new FirstState();
        }
        if (state == 2){
            return familyState = new SecondState();
        }
        if (state == 3){
            return familyState = new ThirdyState();
        }
        if (state == 4){
            return familyState = new FourState();
        }
        if (state == 5){
            return familyState = new FiveState();
        }
        return familyState = new SixState();
    }
    public String getStateMsg(){
        return familyState.getState();
    }
    public void setState(Integer state) {
        this.state = state;
        init();
    }

    public FamilyState getFamilyState() {
        return familyState;
    }

}
