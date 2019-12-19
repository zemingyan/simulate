package spring.datasimulate.datasimulate.hbase.hbasebo;

import org.apache.catalina.User;
import org.apache.hadoop.hbase.KeyValue;
import org.apache.hadoop.hbase.client.Result;
import org.apache.hadoop.hbase.util.Bytes;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import spring.datasimulate.datasimulate.hbase.appusage.state.StateContext;
import spring.datasimulate.datasimulate.hbase.hbase.dto.vo.UserMakeHobbyDTO;
import spring.datasimulate.datasimulate.hbase.hbase.dto.vo.UserMakeLocationDTO;
import spring.datasimulate.datasimulate.hbase.hbase.dto.vo.UserMakeUsingTime;
import spring.datasimulate.datasimulate.hbase.hbasedao.HbaseTemple;
import spring.datasimulate.datasimulate.hbase.hbasedao.UserMakeDAO;
import spring.datasimulate.datasimulate.hbase.hbaseutils.DateUtil;
import spring.datasimulate.datasimulate.hbase.hbaseutils.family.UserFamilies;
import spring.datasimulate.datasimulate.hbase.hbaseutils.family.UserGroupFamiles;

import java.text.DecimalFormat;
import java.text.SimpleDateFormat;
import java.util.*;

import static java.lang.Double.*;

@Service
public class UserMakeBO {
    @Autowired
    private UserMakeDAO userMakeDAO;

    public UserMakeHobbyDTO getUserMakeHobbyByDate(String start, String end) {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        List<Date> dateList = DateUtil.getDatesBetweenTwoDateParamString(start, end);
        HbaseTemple hbaseTemple = userMakeDAO.getHbaseTemple();
        Map<String, Integer> hobbyValue = new HashMap<>();
        double total = 0;
        for (Date date : dateList){
            String dateString = sdf.format(date);

            Result result = hbaseTemple.listOneFamily(UserGroupFamiles.TABLE_NAME, dateString,
                UserGroupFamiles.HOBBY);
            if (result == null || result.list() == null || result.list().size() == 0){
                continue;
            }
            for (KeyValue kv : result.list()){
                String column = Bytes.toString(kv.getQualifier());
                int value = Integer.valueOf(Bytes.toString(kv.getValue()));
                total += value;
                if (hobbyValue.get(column) == null){
                    hobbyValue.put(column, value);
                } else {
                    int before = hobbyValue.get(column);
                    hobbyValue.put(column, before + value);
                }
            }
        }

        List<String> names = new ArrayList<>();
        List<String> rates = new ArrayList<>();
        DecimalFormat df = new DecimalFormat("#.##");
        for (Map.Entry entry : hobbyValue.entrySet()){
            names.add(entry.getKey().toString());
            int curValue = (int) entry.getValue();
            String rate = df.format(100*curValue / total);
            rates.add(rate + "%");
            System.out.println(entry.getKey() + "  " + entry.getValue());
        }
        UserMakeHobbyDTO userMakeHobbyDTO = new UserMakeHobbyDTO();
        userMakeHobbyDTO.setName(names);
        userMakeHobbyDTO.setRate(rates);
        return userMakeHobbyDTO;
    }

    public List<UserMakeLocationDTO> listLocation(String start, String end) {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        List<Date> dates = DateUtil.getDatesBetweenTwoDateParamString(start, end);
        HbaseTemple hbaseTemple = userMakeDAO.getHbaseTemple();
        Map<String, Integer> hobbyValue = new HashMap<>();
        double total = 0;
        double maxValue = 0;
        for (Date date : dates){
            String dateString = sdf.format(date);

            Result result = hbaseTemple.listOneFamily(UserGroupFamiles.TABLE_NAME, dateString,
                    UserGroupFamiles.LOCATION);
            if (result == null || result.list() == null || result.list().size() == 0){
                continue;
            }
            for (KeyValue kv : result.list()){
                String column = Bytes.toString(kv.getQualifier());
                int value = Integer.valueOf(Bytes.toString(kv.getValue()));
                total += value;
                maxValue = Math.max(maxValue, value);
                if (hobbyValue.get(column) == null){
                    hobbyValue.put(column, value);
                } else {
                    int before = hobbyValue.get(column);
                    hobbyValue.put(column, before + value);
                }
            }
        }

        List<UserMakeLocationDTO> lists = new ArrayList<>(20);
        DecimalFormat df = new DecimalFormat("#.##");
        for (Map.Entry entry : hobbyValue.entrySet()){
            String name = entry.getKey().toString();
            int curValue = (int) entry.getValue();
            String rate = df.format(100*curValue / total);
            //String value = (rate + "%");
            double value = Double.valueOf(rate);
            UserMakeLocationDTO userMakeLocationDTO = new UserMakeLocationDTO();
            userMakeLocationDTO.setName(name);
            userMakeLocationDTO.setValue((int) value);
            lists.add(userMakeLocationDTO);
        }
        Collections.sort(lists);
        return lists;
    }

    public UserMakeUsingTime getUsingTimeLength(String start, String end) {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        List<Date> dates = DateUtil.getDatesBetweenTwoDateParamString(start, end);
        HbaseTemple hbaseTemple = userMakeDAO.getHbaseTemple();
        Map<Integer, Integer> timeValue = new HashMap<>();
        double total = 0;
        for (Date date : dates){
            String dateString = sdf.format(date);

            Result result = hbaseTemple.listOneFamily(UserGroupFamiles.TABLE_NAME, dateString,
                UserGroupFamiles.USAGE);
            if (result == null || result.list() == null || result.list().size() == 0){
                continue;
            }
            for (KeyValue kv : result.list()){
                int column = Integer.valueOf(Bytes.toString(kv.getQualifier()));
                int value = Integer.valueOf(Bytes.toString(kv.getValue()));
                total += value;
                if (timeValue.get(column) == null){
                    timeValue.put(column, value);
                } else {
                    int before = timeValue.get(column);
                    timeValue.put(column, before + value);
                }
            }
        }
        List<String> names = new ArrayList<>();
        List<Double> timeLength = new ArrayList<>();
        DecimalFormat decimalFormat = new DecimalFormat("#.##");
        for (int i = 1; i <= 6; i ++){
            StateContext stateContext = new StateContext(i);
            names.add(stateContext.getStateMsg());

            Integer value = timeValue.get(i);
            if (value == null){
                timeLength.add(0.0);
            } else {
                String tempValue = decimalFormat.format(value*100/total);
                timeLength.add(Double.valueOf(tempValue));
            }
        }

        UserMakeUsingTime userMakeUsingTime = new UserMakeUsingTime();
        userMakeUsingTime.setTimeScope(names);
        userMakeUsingTime.setTimeLength(timeLength);
        return userMakeUsingTime;
    }

    public List<Integer> listPeriod(String start, String end) {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        List<Date> dates = DateUtil.getDatesBetweenTwoDateParamString(start, end);
        HbaseTemple hbaseTemple = userMakeDAO.getHbaseTemple();
        Map<Integer, Integer> timeValue = new HashMap<>();
        double total = 0;
        for (Date date : dates){
            String dateString = sdf.format(date);

            Result result = hbaseTemple.listOneFamily(UserGroupFamiles.TABLE_NAME, dateString,
                    UserGroupFamiles.PERIOD);
            if (result == null || result.list() == null || result.list().size() == 0){
                continue;
            }
            for (KeyValue kv : result.list()){
                int column = Integer.valueOf(Bytes.toString(kv.getQualifier()));
                int value = Integer.valueOf(Bytes.toString(kv.getValue()));
                //total += value;
                if (timeValue.get(column) == null){
                    timeValue.put(column, value);
                } else {
                    int before = timeValue.get(column);
                    timeValue.put(column, before + value);
                }
            }
        }
        List<Integer> period = new ArrayList<>();
        for (int i = 0; i < 24; i ++){
            Integer value = timeValue.get(i);
            if (value == null){
                period.add(0);
            } else {
                period.add(value);
            }
        }
        return period;
    }
}
