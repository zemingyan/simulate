package spring.datasimulate.datasimulate.hbase;


import java.io.BufferedReader;
import java.io.DataInputStream;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

public class TestBoot implements Runnable{
    private static List<Date> starts = new ArrayList<>(20);
    private static List<Date> ends = new ArrayList<>(20);
    static {
        String start = "2018-01-20";
        //String mid= "2017-12-04";
        String mid = "2018-02-08";
        String end = "2018-03-13";
        starts = getDatesBetweenTwoDateParamString(start, mid);
        ends = getDatesBetweenTwoDateParamString(mid, end);
    }
    public static List<Date> getDatesBetweenTwoDateParamString(String start, String end){
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        Date theStartDate = null;
        Date theEndDate = null;
        try {
            theStartDate = sdf.parse(start);
            theEndDate = sdf.parse(end);
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
    public static String getURL(String s) {
        BufferedReader br = null;
        URL url = null;
        URLConnection con;
        StringBuffer ret = new StringBuffer();
        DataInputStream dis;
        try {
            url = new URL(s);
            br = new BufferedReader(new InputStreamReader(url.openStream()));// openStream()是为了获得一个inputstream
            String html = "";
            while ((html = br.readLine()) != null) {
                ret.append(html + "/r/n");
            }
            br.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return ret.toString();

    }
    public static void main(String[] args) {
        Runnable runnable = new TestBoot();
        Thread thread = new Thread(runnable);
        Thread thread1 = new Thread(runnable);
        Thread thread2 = new Thread(runnable);

        thread.start();
        thread1.start();;
        thread2.start();
    }


    public static String getDay(List<Date> dates){
      /*  try {
            Thread.sleep(274);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }*/
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        int index = new Random().nextInt(dates.size());
        return sdf.format(dates.get(index));
    }
    @Override
    public void run() {
        String start = getDay(starts);
        String end = getDay(ends);
        String msg = "http://10.0.0.30:8000";
        List<String> urls = new ArrayList(20);
        urls.add(msg + "/multiple/listAppUserNumberByAppIds?appNames=1%2C2&start=" + start + "&end=" + end);

        urls.add(msg +"/multiple/listAppVisitByAppNames?appNames=1%2C2&start=" + start + "&end=" + end);

        urls.add(msg +"/multiple/listAppsMarketRateByDateAndAppName?appIds=30%2C68%2C87&start=" + start + "&end=" + end);
        urls.add(msg +"/multiple/listAppsTypeRate");

        urls.add(msg +"/userMake/getUserMakeHobbyByDate?start=" + start + "&end=" + end);

        urls.add(msg +"/userMake/getUsingTimeLength?start=" + start + "&end=" + end);

        urls.add(msg +"/userMake/listLocation?start=" + start + "&end=" + end);

        urls.add(msg +"/userMake/listPeriod?start=" + start + "&end=" + end);

        urls.add(msg +"/listLivenessByAppAndDate?appName=%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80&start=" + start + "&end=" + end);
        urls.add(msg +"/getSingleAppOnceHourCountByPacketAndDate?day=2018-01-23&appName=%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80");
        urls.add(msg +"/listDayUseFrequencyByApp?appName=%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80&day=" + end);

        int totalCnt = 300;
        int cnt = 0;
        int index = 0;
        while(totalCnt > 0) {

            String s = getURL(urls.get(index));
            System.out.println(cnt + "  " + s);
            try {
                Thread.sleep(40);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            index ++;
            index %= urls.size();
            cnt ++;
            totalCnt --;
        }
    }
}
