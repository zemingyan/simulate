package spring.datasimulate.datasimulate.hbase.mongo.util;

import io.swagger.models.auth.In;
import org.apache.hadoop.yarn.webapp.hamlet.Hamlet;
import org.omg.CORBA.INTERNAL;
import org.omg.CORBA.PUBLIC_MEMBER;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.DayOfWeek;
import java.util.Calendar;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;
import java.util.Date;


public class MongoTimeUtil {
    public static final Integer HOUR = 1000 * 60 * 60;
    public static final Integer DAY = HOUR * 24;
    public static final Integer WEEK = DAY * 7;
    public static ConcurrentMap<Integer, Integer> timeType = new ConcurrentHashMap<>(10);
    static {
        timeType.put(1, HOUR);
        timeType.put(2, DAY);
        timeType.put(3, DAY);
    }
    public static Date getOneMonthBeforeDate(Date curDate){
        Calendar cd = Calendar.getInstance();
        cd.setTime(curDate);
        cd.add(Calendar.MONTH, -1);
        return cd.getTime();
    }
    public static Date getOneWeekBeforeDate(Date curDate){
        Calendar cd = Calendar.getInstance();
        cd.setTime(curDate);
        cd.add(Calendar.DATE, -7);
        return cd.getTime();
    }  public static Date getOneDayBeforeDate(Date curDate){
        Calendar cd = Calendar.getInstance();
        cd.setTime(curDate);
        cd.add(Calendar.DATE, -1);
        return cd.getTime();
    }
    public static Integer getDayOfWeek(Date curDate){
        Calendar cd = Calendar.getInstance();
        cd.setTime(curDate);
        return cd.get(Calendar.DAY_OF_WEEK);
    }
    public static Integer getDayOfWeek(String cur){
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        Date curDate = null;
        try {
            curDate = sdf.parse(cur);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        Calendar cd = Calendar.getInstance();
        cd.setTime(curDate);
        return cd.get(Calendar.DAY_OF_WEEK);
    }
}
