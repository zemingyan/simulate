package spring.datasimulate.datasimulate.hbase.mongo.bo;

import org.elasticsearch.common.rounding.DateTimeUnit;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import spring.datasimulate.datasimulate.hbase.hbaseutils.DateUtil;
import spring.datasimulate.datasimulate.hbase.mongo.dao.MongoPageViemDAO;
import spring.datasimulate.datasimulate.hbase.mongo.dto.PageViemDTO;
import spring.datasimulate.datasimulate.exceptions.ParamErrorException;
import spring.datasimulate.datasimulate.hbase.mongo.dto.RoughPageViemDTO;
import spring.datasimulate.datasimulate.hbase.mongo.mongodbdo.MongoPageViemDO;
import spring.datasimulate.datasimulate.hbase.mongo.util.MongoApiList;
import spring.datasimulate.datasimulate.hbase.mongo.util.MongoTimeUtil;

import java.sql.Timestamp;
import java.text.ParseException;
import java.util.*;
import java.text.SimpleDateFormat;

@Service
public class MongoPageViemBO {
    private Logger logger = LoggerFactory.getLogger(MongoPageViemBO.class);
    @Autowired
    private MongoPageViemDAO mongoPageViemDAO;

    public void save(MongoPageViemDO mongoPageViemDO){
        mongoPageViemDAO.save(mongoPageViemDO);
    }

    // type 的作用是  时间轴的横坐标上的值
    public RoughPageViemDTO getRoughPVByDateAndApiAndType(String start, String end,
        String apiPath, Integer timeLong, Integer type) {
        SimpleDateFormat daySdf = new SimpleDateFormat("yyyy-MM-dd");
        RoughPageViemDTO roughPageViemDTO = new RoughPageViemDTO();
        Timestamp startTimeStamp = Timestamp.valueOf(start + " 00:00:00");
        Timestamp endTimeStamp = Timestamp.valueOf(end + " 00:00:00");
        int length = (int) ((endTimeStamp.getTime() - startTimeStamp.getTime()) / timeLong);

       /* System.out.println(timeLong + "   " + startTimeStamp.getTime() + "  " + endTimeStamp.getTime());
        System.out.println(timeLong + "   " + startTimeStamp.getTime() + "  " + endTimeStamp.getTime());
*/
        long first = startTimeStamp.getTime();
        long standard = first;

        List<String > date = new ArrayList<>(length);
        List<Integer> count = new ArrayList<>(length);
        // 初始化纵坐标为0 和横坐标的值
        if (type == 1){ // 横坐标的时间单位是小时
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            for (int i = 0; i < length; i ++){
                String dateString = sdf.format(first);
                count.add(i, 0);
                date.add(i, dateString);
                first += timeLong;
            }
        }else if (type == 2){ // 时间单位是周1 ~ 7
            Date startDate = null;
            try {
                startDate = daySdf.parse(start);
            } catch (ParseException e) {
                e.printStackTrace();
            }
            int num = MongoTimeUtil.getDayOfWeek(startDate);
            for (int i = 0; i < length; i ++){
                num = num % 7;
                if (num == 0){
                    date.add(i, "周日");
                } else {
                    date.add(i, "周" + num);
                }
                num ++;
                count.add(i, 0);
                first += timeLong;
            }
        }else if (type == 3){ // 时间单位是天
            for (int i = 0; i < length; i ++){
                count.add(i, 0);
                date.add(i, daySdf.format(first));
                first += timeLong;
            }
        }
        List<MongoPageViemDO> pvs = mongoPageViemDAO.listByDateAndApi(standard, endTimeStamp
                .getTime(), apiPath);
        for (MongoPageViemDO pv : pvs){
            long pvStart = Long.valueOf(pv.getTimeStamp());
            int index = (int) ((pvStart - standard)/timeLong);
            int beforeValue = count.get(index);
            count.set(index, beforeValue + pv.getCount());
        }
        roughPageViemDTO.setCount(count);
        roughPageViemDTO.setDate(date);
        return  roughPageViemDTO;
    }
}
