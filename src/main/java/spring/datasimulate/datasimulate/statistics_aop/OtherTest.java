package spring.datasimulate.datasimulate.statistics_aop;

import java.sql.Time;
import java.sql.Timestamp;

public class OtherTest {
    public static void main(String[] args){
        Timestamp timestamp = null;
        String time = "2011-05-09 11:49:45";
        timestamp = Timestamp.valueOf(time);
        System.out.println(timestamp.getTime());
    }
}
