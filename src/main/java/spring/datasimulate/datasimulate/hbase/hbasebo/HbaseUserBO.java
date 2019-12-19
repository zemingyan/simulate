package spring.datasimulate.datasimulate.hbase.hbasebo;

import io.swagger.models.auth.In;
import org.apache.hadoop.hbase.KeyValue;
import org.apache.hadoop.hbase.client.Result;
import org.apache.hadoop.hbase.util.Bytes;
import org.omg.CORBA.INTERNAL;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import spring.datasimulate.datasimulate.hbase.hbase.dto.vo.UseTimeLength;
import spring.datasimulate.datasimulate.hbase.hbase.dto.vo.UserHistoryAppDTO;
import spring.datasimulate.datasimulate.hbase.hbase.dto.vo.UserHobbyDTO;
import spring.datasimulate.datasimulate.hbase.hbasedao.HbaseUserDAO;
import spring.datasimulate.datasimulate.hbase.hbaseutils.DateUtil;
import spring.datasimulate.datasimulate.hbase.hbaseutils.family.UserFamilies;
import spring.datasimulate.datasimulate.hbase.mysql.dao.ShowAppDAO;

import java.util.*;
import java.text.SimpleDateFormat;

@Service
public class HbaseUserBO {
    @Autowired
    private HbaseUserDAO hbaseUserDAO;
    @Autowired
    private ShowAppDAO showAppDAO;

    public List<UserHobbyDTO> listUserHobbyByUserId(String userId) {
        Result result = hbaseUserDAO.getHbaseTemple().listOneFamily(UserFamilies.TABLE_NAME,
            userId, UserFamilies.USAGE_HOBBY);
        List<UserHobbyDTO> userHobbyDTOList = new ArrayList<>();
        if (result == null || result.list() == null || result.list().size() == 0) {
            return userHobbyDTOList;
        }
        for (KeyValue kv : result.list()) {
            String column = Bytes.toString(kv.getQualifier()).trim();
            int value = Integer.valueOf(Bytes.toString(kv.getValue()).trim());
            UserHobbyDTO uhb = new UserHobbyDTO();
            uhb.setName(column);
            uhb.setValue(value);
            userHobbyDTOList.add(uhb);
        }
        Collections.sort(userHobbyDTOList);
        return userHobbyDTOList;
    }

    public List<UserHistoryAppDTO> listUseHistoryAppTimeByUserId(String userId, String date) {
        List<UserHistoryAppDTO> userHistoryAppDTOS = new ArrayList<>();
        Result result = hbaseUserDAO.getHbaseTemple().getCellData(UserFamilies.TABLE_NAME,
            userId, UserFamilies.USAGE_HISTORY, date);
        if (result == null || result.list() == null || result.list().size() == 0){
            return userHistoryAppDTOS;
        }
        SimpleDateFormat sdf = new SimpleDateFormat("HH:mm");
        for (KeyValue kv : result.list()){ // 查询到了四维, 具体的单元格
            String value = Bytes.toString(kv.getValue());
            String [] packetAndTime = value.split(",");
            int length = packetAndTime.length;
            for (int i = 0; i < length - 1;  i ++){
                if (packetAndTime[i] == null || packetAndTime[i].equals("")){
                    continue;
                }
                //第一个是包名， 第二个是时间戳
                String[] first = packetAndTime[i].split(":");
                String[] second = packetAndTime[i + 1].split(":");
                long startTimeStamp = Long.valueOf(first[1]);
                long endTimeStamp = Long.valueOf(second[1]);
                String packageName = first[0];

                List<String> appNames = showAppDAO.listAppNameByPackage(packageName);
                String startDate = sdf.format(startTimeStamp);
                int useTime =(int) (endTimeStamp - startTimeStamp)/(1000 * 60);


                UserHistoryAppDTO userHistoryAppDTO = new UserHistoryAppDTO();
                userHistoryAppDTO.setAppName(appNames.get(0));
                userHistoryAppDTO.setAppUseTime(startDate);
                userHistoryAppDTO.setAppUselen(useTime);
                userHistoryAppDTOS.add(userHistoryAppDTO);
            }
        }
        return userHistoryAppDTOS;
    }

    public UseTimeLength listUseTimeLength(String userid, String start, String end) {
        UseTimeLength useTimeLength = new UseTimeLength();
        List<Date> dates = DateUtil.getDatesBetweenTwoDateParamString(start, end);
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        Result result = hbaseUserDAO.listOneFamily(UserFamilies.TABLE_NAME, userid, UserFamilies.USAGE_DURATION);
        if (result == null || result.list() == null || result.list().size() == 0){
            return useTimeLength;
        }
        Map<String, Integer> dayValue = new HashMap<>();
        for (KeyValue kv : result.list()){
            String column = Bytes.toString(kv.getQualifier());
            boolean between  = column.compareTo(start) >= 0 & column.compareTo(end) <= 0;
            if (between){
                int value = Integer.valueOf(Bytes.toString(kv.getValue()));
                dayValue.put(column, value);
            }
        }
        List<String> xTime = new ArrayList<>();
        List<Integer> aPPtime = new ArrayList<>();
        for (Date date : dates){
            String dateString = sdf.format(date);
            xTime.add(dateString);
            Integer time = dayValue.get(dateString);
            if (time == null){
                aPPtime.add(0);
            }else {
                aPPtime.add(time/(1000 * 60));
            }
        }
        useTimeLength.setaPPtime(aPPtime);
        useTimeLength.setxTime(xTime);
        return useTimeLength;
    }
}
