package spring.datasimulate.datasimulate.hbase.mongo.util;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.data.mongodb.core.MongoTemplate;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.TreeMap;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;
import java.util.concurrent.ConcurrentNavigableMap;

public class MongoApiList {
    @Autowired
    private MongoTemplate mongoTemplate;

    public static ConcurrentMap<Integer, String> idToApi = new ConcurrentHashMap<>(20);
    public static ConcurrentMap<Integer, String> fieldIndex = new ConcurrentHashMap<>(20);
    public static ConcurrentMap<String, Integer> nameToApiID = new ConcurrentHashMap<>(20);
    static {


      //  idToApi.put(1, "class spring.datasimulate.datasimulate.hbase.hbasecontroller.HbaseControllergetHbaseVO");//终端分析
       /*  idToApi.put(2, "class spring.datasimulate.datasimulate.hbase.hbasecontroller.HbaseControllergetAllAppData");
         idToApi.put(3, "class spring.datasimulate.datasimulate.hbase.hbasecontroller.HbaseControllergetOneYearHbaseVO");*/
        idToApi.put(2, "class spring.datasimulate.datasimulate.hbase.hbasecontroller.AppUsageControllerlistDayUseFrequencyByApp");//日使用时长分析 777
        idToApi.put(3, "class spring.datasimulate.datasimulate.hbase.hbasecontroller.SingleAppControllergetSingleAppOnceHourCountByPacketAndDate");//用户使用时段分析 77
        idToApi.put(4, "class spring.datasimulate.datasimulate.hbase.hbasecontroller.SingleAppControllerlistLivenessByAppAndDate");//用户活跃分析  777
       // idToApi.put(5, "class spring.datasimulate.datasimulate.hbase.hbasecontroller.AppVersionControllergetAppVersionMsgByAppAndDate");//版本分析
       // idToApi.put(6, "class spring.datasimulate.datasimulate.hbase.hbasecontroller.HbaseUserControllerlistUserHobbyByUserId");//单个用户兴趣
      //  idToApi.put(7, "class spring.datasimulate.datasimulate.hbase.hbasecontroller.HbaseUserControllerlistUseHistoryAppTimeByUserId");// 单个用户历史app

        idToApi.put(8, "class spring.datasimulate.datasimulate.hbase.hbasecontroller.UserMakeControllergetUserMakeHobbyByDate");//用户兴趣分布
        idToApi.put(9, "class spring.datasimulate.datasimulate.hbase.hbasecontroller.UserMakeControllerlistLocation");//用户地域分布
        idToApi.put(10, "class spring.datasimulate.datasimulate.hbase.hbasecontroller.UserMakeControllergetUsingTimeLength");//用户使用手机时长分段
        idToApi.put(11, "class spring.datasimulate.datasimulate.hbase.hbasecontroller.UserMakeControllerlistPeriod");//用户使用手机时段


        idToApi.put(12, "class spring.datasimulate.datasimulate.hbase.hbasecontroller.MultipleAppControllerlistAppVisitByAppNames");//热门APP访问量
        //idToApi.put(13, "class spring.datasimulate.datasimulate.hbase.hbasecontroller.MultipleAppControllerlistAppsVisitUserByDateAndAppName");// APP市场占有率
        idToApi.put(14, "class spring.datasimulate.datasimulate.hbase.hbasecontroller.MultipleAppControllerlistAppUserNumberByAppIds");//APP数据对比
        idToApi.put(15, "class spring.datasimulate.datasimulate.hbase.hbasecontroller.MultipleAppControllerlistAppsTypeRate");//各类型APP占比


       // nameToApiID.put("终端分析", 1);
        nameToApiID.put("日使用时长分析", 2);
        nameToApiID.put("用户使用时段分析", 3);
        nameToApiID.put("用户活跃分析", 4);
       // nameToApiID.put("版本分析", 5);
      //  nameToApiID.put("单个用户兴趣", 6);
       // nameToApiID.put("单个用户历史app", 7);
        nameToApiID.put("用户兴趣分布", 8);
        nameToApiID.put("用户地域分布", 9);
        nameToApiID.put("使用手机时长分段", 10);
        nameToApiID.put("用户使用手机时段", 11);
        nameToApiID.put("热门APP访问量", 12);
      //  nameToApiID.put("APP市场占有率", 13);
        nameToApiID.put("APP数据对比", 14);
        nameToApiID.put("各类型APP占比", 15);






      /*  List<String> urls = new ArrayList(20);
        //urls.add("http://10.0.0.30:8000/listUseHistoryAppTimeByUserId?userId=8327623e610445b1&date=2018-04-30");
        urls.add("http://10.0.0.30:8000/listUserHobbyByUserId?userId=8327623e610445b1");
        urls.add("http://10.0.0.30:8000/getAppVersionMsgByAppAndDate?appName=%E7%8"
                + "E%8B%E8%80%85%E8%8D%A3%E8%80%80&start=2018-01-01&end=2018-01-20");
        urls.add("http://10.0.0.30:8000/listDayUseFrequencyByApp?appName="
                + "%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80&day=2017-12-15");
        urls.add("http://10.0.0.30:8000/userMake/getUserMakeHobbyByDate?"
                + "start=2017-11-10&end=2017-11-17");
        urls.add("http://10.0.0.30:8000/userMake/getUsingTimeLength?"
                + "start=2017-11-06&end=2017-11-16");
        urls.add("http://10.0.0.30:8000/userMake/listLocation?"
                + "start=2017-11-06&end=2017-11-16");
        urls.add("http://10.0.0.30:8000/userMake/listPeriod?start=2017-11-06&end=2017-11-16");
*/
        fieldIndex.put(0, "IPAddress");
        fieldIndex.put(1, "apiName");
    }
}
