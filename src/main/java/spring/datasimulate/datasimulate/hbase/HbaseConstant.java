package spring.datasimulate.datasimulate.hbase;

import io.swagger.models.auth.In;
import org.elasticsearch.common.recycler.Recycler;

import javax.management.relation.RelationNotFoundException;
import java.util.Calendar;
import java.util.Date;
import java.util.Random;
import java.util.concurrent.locks.ReentrantLock;

public class HbaseConstant {
    private static ReentrantLock lock = new ReentrantLock();
    public static final Integer HBASE_REQUEST_METHOD_COUNT = 10;
    public static final Integer HBASE_WRITE_MONGO_TIME_INTERVAL_TEN_SECOND = 1000*10;
    public static final Integer HBASE_WRITE_MONGO_TIME_INTERVAL_TWENTY_SECOND = 1000*20;
    public static final Integer ONE_DAY = 1000 * 60 * 60 * 24;

    public static final String REDIS_HOST = "127.0.0.1";
    public static final Integer REDIS_PORT = 6379;


    public static Integer year = 2018;


    private static int randomVar = 0;
    public static Long getTime(){
        Date date = new Date();
        Calendar curCalendar = Calendar.getInstance();
        curCalendar.setTime(date);

        int month = curCalendar.get(Calendar.MONTH) + 1;
        Random random = new Random();
        month  = 3;//( random.nextInt(month) + randomVar ) % month;  // 0 - 11
        randomVar ++;
        Integer day = curCalendar.get(Calendar.DAY_OF_MONTH);
        day = 14;//(random.nextInt(day) + randomVar ) % day + 1 ; // 日期是从1开始
        randomVar ++;
        Integer hour =( random.nextInt(23) + randomVar) %24;
        randomVar ++;
        Integer minue =( random.nextInt(59) + randomVar )%59;
        randomVar ++;
        Integer s = (random.nextInt(59) + randomVar) % 59;
        randomVar ++;
        Calendar calendar = Calendar.getInstance();


        calendar.set(year, month, day, hour, minue, s );
        return calendar.getTimeInMillis();
    }

}
