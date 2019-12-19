package spring.datasimulate.datasimulate.hbase.hbaseutils;

import org.junit.jupiter.api.Test;
import org.springframework.util.SimpleIdGenerator;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

public class DateUtil {

    public static ThreadLocal<SimpleDateFormat> threadLocal = new ThreadLocal<>();

    public static SimpleDateFormat getSimpleDateFormat() {
        SimpleDateFormat sdf = threadLocal.get();
        if (sdf == null){
            sdf = new SimpleDateFormat("yyyy-MM-dd");
        }
        return sdf;
    }
    public static void main(String[] args) throws Exception {
        String start = "2014-01-03";
        String end = "2014-03-05";
        Date dBegin = getSimpleDateFormat().parse(start);
        Date dEnd = getSimpleDateFormat().parse(end);
        List<Date> listDate = getDatesBetweenTwoDate(dBegin, dEnd);
        for(int i=0;i<listDate.size();i++){
            System.out.println(getSimpleDateFormat().format(listDate.get(i)));
        }
        String timeStr = timeStampToString(System.currentTimeMillis());
        System.out.println(timeStr + " 第一步的结果");
        stringTimeToDate(timeStr);
        System.out.println("dBegin " + dBegin + "   " + getSimpleDateFormat().format(dBegin));
    }
    public static List<Date> getDatesBetweenTwoDateParamString(String start, String end){
        Date theStartDate = null;
        Date theEndDate = null;
        try {
            theStartDate = getSimpleDateFormat().parse(start);
            theEndDate = getSimpleDateFormat().parse(end);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return getDatesBetweenTwoDate(theStartDate, theEndDate);
    }
    public static List<Date> getDatesBetweenTwoDate(Date beginDate, Date endDate) {
        List<Date> lDate = new ArrayList<Date>();
        lDate.add(beginDate);// 把开始时间加入集合
        Calendar cal = Calendar.getInstance();
        // 使用给定的 Date 设置此 Calendar 的时间
        cal.setTime(beginDate);
        boolean bContinue = true;
        while (bContinue) {
            // 根据日历的规则，为给定的日历字段添加或减去指定的时间量
            cal.add(Calendar.DAY_OF_MONTH, 1);

            // 测试此日期是否在指定日期之后
            if (endDate.after(cal.getTime())) {
                lDate.add(cal.getTime());
            } else {
                break;
            }
        }

        // 如果起止时间不是同一天,把结束时间加入集合
        if (!beginDate.equals(endDate)){
            lDate.add(endDate);
        }
        return lDate;
    }
    @Test
    public static String timeStampToString(Long timeStamp) {
        String stringTime = getSimpleDateFormat().format(timeStamp);
        System.out.println(stringTime);
       return stringTime;
    }
    public static Date stringTimeToDate(String stringTime){
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
        Date date = null;
        try {
            date = format.parse(stringTime);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        System.out.println(date.toString());
        //System.out.println(date.toString());
        return date;
    }
    public static Date timeStampToDate(Long timeStamp){
        String d = getSimpleDateFormat().format(timeStamp);
        Date date= null;
        try {
            date = getSimpleDateFormat().parse(d);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        System.out.println("Format To String(Date):"+d);
        System.out.println("Format To Date:"+date);
        return date;
    }
}
