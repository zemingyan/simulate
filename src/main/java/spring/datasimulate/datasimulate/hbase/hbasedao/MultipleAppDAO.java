package spring.datasimulate.datasimulate.hbase.hbasedao;

import org.apache.hadoop.hbase.KeyValue;
import org.apache.hadoop.hbase.client.Result;
import org.apache.hadoop.hbase.util.Bytes;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import spring.datasimulate.datasimulate.hbase.hbaseutils.family.SingleAppFamilies;

import java.text.SimpleDateFormat;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;

@Repository
public class MultipleAppDAO {
    @Autowired
    private HbaseTemple hbaseTemple;

    public HbaseTemple getHbaseTemple() {
         return this.hbaseTemple;
    }

    public int getAppVisitByAppNameAndDate(String packet, String start, String end) {
        Result result = getHbaseTemple().listOneFamily(SingleAppFamilies.tableName, packet,
            SingleAppFamilies.CLICK_NUM);
        if (result == null || result.list() == null || result.size() == 0){
            return 0;
        }
        //Set<String> set = new HashSet<>();
        int visitTotal = 0;
        for (KeyValue kv : result.list()){
            String column = Bytes.toString(kv.getQualifier());
            if (column.compareTo(start) >= 0 && column.compareTo(end) <= 0){
                String click = Bytes.toString(kv.getValue());
                visitTotal += Integer.valueOf(click);
            }
        }
        return visitTotal;
    }

    public Integer getAppUserNumberByNameAndDate(String packageName, String start, String end) {
        Result result = getHbaseTemple().listOneFamily(SingleAppFamilies.tableName, packageName,
                SingleAppFamilies.USER);
        if (result == null || result.list() == null || result.size() == 0){
            return 0;
        }
        Set<String> set = new HashSet<>();
        int peopleNum = 0;
        for (KeyValue kv : result.list()){
            String column = Bytes.toString(kv.getQualifier());
            if (column.compareTo(start) >= 0 && column.compareTo(end) <= 0){
                String value = Bytes.toString(kv.getValue());
                String[] users = value.split(",");
                List<String> userList = Arrays.asList(users);
                set.addAll(userList);
            }
        }
        return set.size();
    }

    public Integer getAppUseTimeLengthByNameAndDate(String packageName, String start, String end) {
        Result result = getHbaseTemple().listOneFamily(SingleAppFamilies.tableName, packageName,
                SingleAppFamilies.DURATION);
        if (result == null || result.list() == null || result.size() == 0){
            return 0;
        }
        int useTimeLength = 0;
        for (KeyValue kv : result.list()){
            String column = Bytes.toString(kv.getQualifier());
            if (column.compareTo(start) >= 0 && column.compareTo(end) <= 0){
                String useTime = Bytes.toString(kv.getValue());
                useTimeLength += Integer.valueOf(useTime);
            }
        }
        return useTimeLength;
    }

    public List<Integer> listAppVisitByAppNameAndDate(String packageName, String start, String end,
        List<Date> dates) {
        List<Integer> visits = new ArrayList<>(dates.size());
        ConcurrentMap<String, Integer> dateAndCnt = new ConcurrentHashMap<>();
        Result result = getHbaseTemple().listOneFamily(SingleAppFamilies.tableName, packageName,
                SingleAppFamilies.CLICK_NUM);
        if (result == null || result.list() == null || result.size() == 0){
            return visits;
        }
        return dealDataToList(result, start, end, dates, dateAndCnt, visits);
    }

    public List<Integer> listAppUserNumberByNameAndDate(String packageName, String start, String end, List<Date> dates) {
        List<Integer> visits = new ArrayList<>(dates.size());
        ConcurrentMap<String, Integer> dateAndCnt = new ConcurrentHashMap<>();
        Result result = getHbaseTemple().listOneFamily(SingleAppFamilies.tableName, packageName,
                SingleAppFamilies.USER);
        if (result == null || result.list() == null || result.size() == 0){
            return visits;
        }
        for (KeyValue kv : result.list()){
            String column = Bytes.toString(kv.getQualifier());
            if (column.compareTo(start) >= 0 && column.compareTo(end) <= 0){
                String users =  Bytes.toString(kv.getValue());
                String[] user = users.split(",");
                dateAndCnt.put(column, user.length);
            }
        }
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        for (int i = 0; i < dates.size(); i ++){
            String curDay = sdf.format(dates.get(i));
            Integer curDayNum = dateAndCnt.get(curDay);
            if (curDayNum != null){
                visits.add(i, curDayNum);
            } else {
                visits.add(i, 0);
            }
        }
        System.out.println(visits.toString());
        return visits;
    }

    public List<Integer> listAppUseTimeLengthByNameAndDate(String packageName, String start, String end, List<Date> dates) {
        List<Integer> visits = new ArrayList<>(dates.size());
        ConcurrentMap<String, Integer> dateAndCnt = new ConcurrentHashMap<>();
        Result result = getHbaseTemple().listOneFamily(SingleAppFamilies.tableName, packageName,
                SingleAppFamilies.DURATION);
        if (result == null || result.list() == null || result.size() == 0){
            return visits;
        }
        return dealDataToList(result, start, end, dates, dateAndCnt, visits);
    }

    // 将数据封装成list
    public List<Integer> dealDataToList(Result result, String start, String end, List<Date> dates,
        Map<String, Integer> dateAndCnt, List<Integer> visits){
        for (KeyValue kv : result.list()){
            String column = Bytes.toString(kv.getQualifier());
            if (column.compareTo(start) >= 0 && column.compareTo(end) <= 0){
                String visit = Bytes.toString(kv.getValue());
                Integer berforeValue = dateAndCnt.get(column);
                int value =  Integer.valueOf(Bytes.toString(kv.getValue()));
                if (berforeValue == null){
                    dateAndCnt.put(column, value);
                } else {
                    dateAndCnt.put(column, berforeValue + value);
                }
            }
        }
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        for (int i = 0; i < dates.size(); i ++){
            String curDate = sdf.format(dates.get(i));
            if (dateAndCnt.get(curDate) == null){
                visits.add(i, 0);
            } else {
                visits.add(i, dateAndCnt.get(curDate));
            }
        }
        return visits;
    }
}
