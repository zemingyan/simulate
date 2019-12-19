package spring.datasimulate.datasimulate.hbase.hbasebo;

import org.apache.hadoop.hbase.KeyValue;
import org.apache.hadoop.hbase.client.Result;
import org.apache.hadoop.hbase.util.Bytes;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import spring.datasimulate.datasimulate.hbase.hbase.dto.vo.AppVersionNumDTO;
import spring.datasimulate.datasimulate.hbase.hbase.dto.vo.AppVersionVO;
import spring.datasimulate.datasimulate.hbase.hbasedao.AppVersionDAO;
import spring.datasimulate.datasimulate.hbase.hbaseutils.DateUtil;
import spring.datasimulate.datasimulate.hbase.hbaseutils.family.AppVersionFamilies;
import spring.datasimulate.datasimulate.hbase.hbaseutils.family.SingleAppFamilies;
import spring.datasimulate.datasimulate.hbase.mysql.dao.ShowAppVersionDAO;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Collections;
import java.util.Date;
import java.text.DateFormat;
import java.util.ArrayList;
import java.util.List;

@Service
public class AppVersionBO {
    @Autowired
    private AppVersionDAO appVersionDAO;


    public AppVersionVO getAppVersionMsgByAppAndDate(String packet, String start, String end) {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        AppVersionVO appVersionVO = new AppVersionVO();
        List<String>  allVersion= appVersionDAO.listVersionByPacket(SingleAppFamilies.tableName,
            packet, "version");
        Collections.sort(allVersion);
        List<AppVersionNumDTO> versionNumber = new ArrayList<>();
        List<String> allVersionString = new ArrayList<>();
        List<String> date = new ArrayList<>();
        List<List<Integer>> allDayData = new ArrayList<>(allVersion.size());
        List<Date> dayList = DateUtil.getDatesBetweenTwoDateParamString(start, end);
        Date firstDay = dayList.get(0);
        int sToHour = 1000*60*60*24;
        for (int i = 0; i < allVersion.size(); i ++){ // 先将数组赋值
            List<Integer> oneVersionData = new ArrayList<>(dayList.size());
            for (int j = 0; j < dayList.size(); j ++){
                oneVersionData.add(0);
                if (i == 0){
                    String stringDate = sdf.format(dayList.get(j));
                    date.add( stringDate.replaceAll("-","/"));
                }
            }
            allDayData.add(oneVersionData);
        }
        int dateFlag = 0;
        for (int i = 0; i < allVersion.size(); i ++){
            String s = allVersion.get(i);
            allVersionString.add("版本" + s);
            String packetAndVersion = packet + "_" + s;
            System.out.println("包名和版本名   " + packetAndVersion);
            // 获取到该版本的数据
            Result result = appVersionDAO.listOneFamily(SingleAppFamilies.tableName,
                packetAndVersion, AppVersionFamilies.CLICK_NUM);
            System.out.println("app版本  " + packetAndVersion + "数目 " + result.size());
            if (result == null || result.size() == 0){
                continue;
            }

            AppVersionNumDTO appVersionNumDTO = new AppVersionNumDTO();
            appVersionNumDTO.setName("版本" + s);
            int oneVersiontotal = 0;


            //判断该版本的数据是否在日期内，并且没有的置0
            for (KeyValue kv : result.list()){
                String column = Bytes.toString(kv.getQualifier());
                boolean betweenStartToEnd = column.compareTo(start) >=0 && column.compareTo(end) <= 0;
                if (betweenStartToEnd){
                    Date curDay = null;
                    try {
                        curDay = sdf.parse(column);
                    } catch (ParseException e) {
                        e.printStackTrace();
                    }
                    // 根据相差的天数得到下标
                    int index = (int) ((curDay.getTime() - firstDay.getTime())/sToHour);
                    int oneDayNumber = Integer.valueOf(Bytes.toString(kv.getValue()));
                    allDayData.get(i).set(index, oneDayNumber);
                    oneVersiontotal += oneDayNumber;
                }
            }
            appVersionNumDTO.setValue(oneVersiontotal);
            versionNumber.add(appVersionNumDTO);
        }
        appVersionVO.setAllVersion(allVersion);
        appVersionVO.setAllVersionString(allVersionString);
        appVersionVO.setDate(date);
        appVersionVO.setEveryDayVersion(allDayData);
        appVersionVO.setVersionNumber(versionNumber);
        return  appVersionVO;
    }
}
