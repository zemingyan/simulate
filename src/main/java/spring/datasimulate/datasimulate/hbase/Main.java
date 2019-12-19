package spring.datasimulate.datasimulate.hbase;

import java.text.ParseException;
import java.util.*;

import org.apache.hadoop.hbase.shaded.org.apache.commons.net.ntp.TimeStamp;
import redis.clients.jedis.Jedis;
import spring.datasimulate.datasimulate.hbase.mysql.dataooject.ShowAppDO;
import sun.util.resources.cldr.aa.CalendarData_aa_DJ;

import java.io.*;
import java.text.SimpleDateFormat;

public class Main {

    public static void m1(String s, String... ss) {
        for (int i = 0; i < ss.length; i++) {
            System.out.println(ss[i]);
        }
    }


    public static void main(String[]args)   {
        Set<String> set1 = new HashSet<>();
        Set<String> set2 = new HashSet<>();

        set1.add("a");
        set1.add("b");
        set1.add("c");

        set2.add("c");
        set2.add("b");
        set2.add("e");

        //交集
        set1.retainAll(set2);
        System.out.println("交集是 "+set1.toString());
        System.out.println(set2);
    }


    public void init(){
        String encoding = "UTF-8";
        File file = new File("/home/yanzeming/temp/apptype.txt");
        Long filelength = file.length();
        byte[] filecontent = new byte[filelength.intValue()];
        try {
            FileInputStream in = new FileInputStream(file);
            in.read(filecontent);
            in.close();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        String msg = "";
        try {
            msg = new String(filecontent, encoding);
        } catch (UnsupportedEncodingException e) {
            System.err.println("The OS does not support " + encoding);
            e.printStackTrace();
        }
        System.out.println(msg);
        String[] s = msg.split("\\)");
        List<ShowAppDO> lists = new ArrayList<>();
        int total = 1;
        for (int i = 0; i < s.length - 1; i ++){
            String[] ss = s[i].split(",");
            int index = 0;

            ShowAppDO showAppDO = new ShowAppDO();
            for (int j = 0; j < ss.length; j ++){
                if (ss[j] != null && !ss[j].equals("")){
                    String v = ss[j].replaceAll("'","");
                    if (index == 0){
                        showAppDO.setAppName(v.substring(1));
                    }else if (index == 1){
                        showAppDO.setPackageName(v);
                    }else if (index == 2){
                        showAppDO.setCount(Integer.valueOf(ss[j]));
                    }else if (index == 3){
                        showAppDO.setAppName(ss[j]);
                    }
                    index ++;
                }
                showAppDO.setId(total);
                // System.out.print(ss[j] + "   ");
            }
            total ++;
            lists.add(showAppDO);

        }
        Set<String> set = new HashSet<>(600);
        for (int i = 0; i < lists.size(); i ++){
            if (!
                    set.contains(lists.get(i).getPackageName())){
                //  showAppDAO.save(lists.get(i));
            }
            set.add(lists.get(i).getPackageName());
            System.out.println(lists.get(i).toString());
        }
    }
}

/*
usesHistorys: {
        UsesHistoryDatas: [
        {appUseTime: '00:00', appUselen: 1, appName: 'Australia'},
        {appUseTime: '01:15', appUselen: 2, appName: 'Canada'},
        {appUseTime: '02:30', appUselen: 1, appName: 'China'},
        {appUseTime: '03:45', appUselen: 4, appName: 'Cuba'},
        {appUseTime: '05:00', appUselen: 8, appName: 'Finland'},
        {appUseTime: '06:15', appUselen: 54, appName: 'France'},
        {appUseTime: '07:30', appUselen: 2, appName: 'Germany'},
        {appUseTime: '08:45', appUselen: 6, appName: 'Iceland'},
        {appUseTime: '10:00', appUselen: 9, appName: 'India'},
        ],
        historyXtime: ['00:00', '01:15', '02:30', '03:45', '05:00', '06:15', '07:30', '08:45', '10:00'],
        }*/
