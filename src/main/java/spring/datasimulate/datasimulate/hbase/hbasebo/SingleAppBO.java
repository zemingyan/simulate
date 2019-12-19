package spring.datasimulate.datasimulate.hbase.hbasebo;

import java.text.SimpleDateFormat;
import java.util.*;

import org.apache.hadoop.hbase.KeyValue;
import org.apache.hadoop.hbase.client.Result;
import org.apache.hadoop.hbase.shaded.org.apache.commons.math3.analysis.function.Sin;
import org.apache.hadoop.hbase.util.Bytes;
import org.omg.CORBA.INTERNAL;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.SimpleIdGenerator;
import spring.datasimulate.datasimulate.hbase.hbase.dto.vo.*;
import spring.datasimulate.datasimulate.hbase.hbasedao.SingleAppDAO;
import spring.datasimulate.datasimulate.hbase.hbaseutils.DateUtil;
import spring.datasimulate.datasimulate.hbase.hbaseutils.family.SingleAppFamilies;

import java.text.DecimalFormat;

@Service
public class SingleAppBO {
    @Autowired
    private SingleAppDAO singleAppDAO;

    private DecimalFormat decimalFormat = new DecimalFormat("#.##");

    public SingleAppOnceHourUseCountDTO getSingleAppOnceHourCountByPacketAndDate(String day,
        String packet) {
        SingleAppOnceHourUseCountDTO dto = new SingleAppOnceHourUseCountDTO();
        List<String> fours = new ArrayList<>();
        List<Integer> temp = new ArrayList<>();
        List<String> data = new ArrayList<>();
        for (int i = 0; i < 24; i ++){
            fours.add(i + "");
            temp.add(i, i);
        }
        dto.setFours(fours);

        double total = 0D;


        Result result = singleAppDAO.listOneFamily(SingleAppFamilies.tableName, packet,
            "day_period");
        for (KeyValue kv : result.list()) {
            int column = Integer.valueOf(Bytes.toString(kv.getQualifier()).trim());
            int value = Integer.valueOf(Bytes.toString(kv.getValue()).trim());
            temp.set(column, value);
            total += value;
        }
       /* for (int i = 0; i < fours.size(); i ++){
            String hour = fours.get(i);
            int cnt = singleAppDAO.getDayPeriodCountByHour(SingleAppFamilies.tableName, packet,
                "day_period", hour);
            System.out.println("数目是  " + cnt);
            total += cnt;
            temp.add(cnt);
        }*/
        for (int i = 0; i < temp.size(); i ++){
            String cute = decimalFormat.format((temp.get(i) / total)*100);
            data.add(cute);
        }
        dto.setData(data);
        return dto;
    }
//542, 438, 428, 428, 429, 401, 413, 440, 403, 397, 447, 416, 400, 414, 413, 416, 416, 414, 453, 446, 455, 440, 430, 439]
    public AppClickNumVO listLivenessByAppPacketAndDate(String packet, String start, String end) {
        // 读取整个点击率的列族, 从开始时间,到截至时间,存入list中
        Result result = singleAppDAO.listOneFamily(SingleAppFamilies.tableName, packet,
            "click_num");
        AppClickNumVO appClickNumVO = new AppClickNumVO();
        if (result.list() == null || result.list().size() == 0) return appClickNumVO;
        List<String> date = new ArrayList<>();
        List<Integer> clickNumber = new ArrayList<>();
        for (KeyValue kv : result.list()) {
            String column = Bytes.toString(kv.getQualifier());
            boolean inTheBetween = column.compareTo(start) >=0 && column.compareTo(end) <=0;
            if (inTheBetween){
                date.add(Bytes.toString(kv.getQualifier()));
                clickNumber.add(Integer.valueOf(Bytes.toString(kv.getValue())));
                kv.getQualifierArray();
            }
        }
        appClickNumVO.setClickNum(clickNumber);
        appClickNumVO.setDate(date);
        return appClickNumVO;
    }

    public SingleAppUserChangeDTO listSingleAppUserChange(String packageName, String start, String end) {
        SingleAppUserChangeDTO singleAppUserChangeDTO = new SingleAppUserChangeDTO();
        Result result = singleAppDAO.listOneFamily(SingleAppFamilies.tableName, packageName,
                SingleAppFamilies.USER);
        if (result == null || result.list() == null || result.list().size() == 0){
            return singleAppUserChangeDTO;
        }
        List<Date> dates = DateUtil.getDatesBetweenTwoDateParamString(start, end);
        Set<String> beforeUser = new HashSet<>(50);
        Map<String, Set<String>> dayUser = new HashMap<>(100);
        for (KeyValue kv : result.list()){
            String column = Bytes.toString(kv.getQualifier());
            boolean inTheBetween = column.compareTo(start) >=0 && column.compareTo(end) <=0;
            if (inTheBetween){
                String userString = Bytes.toString(kv.getValue());
                String[] user = userString.split(",");
                List<String> userList = Arrays.asList(user);
                Set<String> oneDayUsers = new HashSet<>(userList.size());
                oneDayUsers.addAll(userList);
                dayUser.put(column, oneDayUsers);
            } else if (column.compareTo(start) < 0){
                String userString = Bytes.toString(kv.getValue());
                String[] user = userString.split(",");
                List<String> userList = Arrays.asList(user);
                beforeUser.addAll(userList);
            }
        }

        List<List<Integer>> detailData = new ArrayList<>(3);
        List<Integer> newUser = new ArrayList<>(dates.size());
        List<Integer> oldUser = new ArrayList<>(dates.size());
        List<Integer> onlineUser = new ArrayList<>(dates.size());
        List<String> data = new ArrayList<>(dates.size());
        List<Integer> propData = new ArrayList<>(dates.size());
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        Set<String> beforeUserTemp = new HashSet<>(beforeUser.size() * 2);
        for (int i = 0; i < dates.size(); i ++){
            data.add(sdf.format(dates.get(i)));
            String yearDay = sdf.format(dates.get(i));

            beforeUserTemp = beforeUser;
            //但前用户
            Set<String> curUsers = dayUser.get(yearDay);
            onlineUser.add(i, curUsers.size());
            beforeUserTemp.retainAll(curUsers);
            //此时beforeUserTemp.size()表示老用户

            int online = curUsers.size();
            int old = beforeUserTemp.size();
            int newUserNum = online - old;
            oldUser.add(i, old);
            newUser.add(i, online - old);
            if ( online == 0 ) {
                propData.add(0);
            } else {
                propData.add((int) (newUserNum * 1.0/online * 100));
            }
            beforeUser.addAll(curUsers);// 今天的用户全部变成老用户
        }
        detailData.add(newUser);
        detailData.add(oldUser);
        detailData.add(onlineUser);
        singleAppUserChangeDTO.setDetailData(detailData);
        singleAppUserChangeDTO.setData(data);
        singleAppUserChangeDTO.setPropData(propData);
        return singleAppUserChangeDTO;
    }

    //moni
    public SingleAppReserveDTO listAppRestoreRateByAppAndDate(String packageName, String start, String end) {
        SingleAppReserveDTO singleAppReserveDTO = new SingleAppReserveDTO();
        List<Date> dates = DateUtil.getDatesBetweenTwoDateParamString(start, end);
        List<String> data = new ArrayList<>(dates.size());
        List<Integer> seriesData = new ArrayList<>(dates.size());
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        Random random = new Random();
        int index = 0;
        int last = 60;
        int low = 6;
        int pos = 5;
        for (Date date : dates){
            data.add(sdf.format(date));
            int value = random.nextInt(pos);
            last -=value;
            if (last <= 0){
                last += low;
            }
            seriesData.add(last);
            index += 2;
        }
        singleAppReserveDTO.setData(data);
        singleAppReserveDTO.setSeriesData(seriesData);
        return singleAppReserveDTO;
    }
}
