package spring.datasimulate.datasimulate.hbase.mongo.bo;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import spring.datasimulate.datasimulate.hbase.mongo.dao.MongoUniqueViemDAO;
import spring.datasimulate.datasimulate.exceptions.ParamErrorException;
import spring.datasimulate.datasimulate.hbase.mongo.dto.RoughPageViemDTO;
import spring.datasimulate.datasimulate.hbase.mongo.dto.RoughUniqueViemDTO;
import spring.datasimulate.datasimulate.hbase.mongo.mongodbdo.MongoPageViemDO;
import spring.datasimulate.datasimulate.hbase.mongo.mongodbdo.MongoUniqueViemDO;
import spring.datasimulate.datasimulate.hbase.mongo.util.MongoApiList;
import spring.datasimulate.datasimulate.hbase.mongo.util.MongoTimeUtil;

import java.sql.Timestamp;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

@Service
public class MongoUniqueViemBO {
    private static Logger logger = LoggerFactory.getLogger(MongoUniqueViemBO.class);
    @Autowired
    private MongoUniqueViemDAO mongoUniqueViemDAO;

    public void save(MongoUniqueViemDO mongoUniqueViemDO){
        mongoUniqueViemDAO.save(mongoUniqueViemDO);
    }

    public List<String> listDistinctIPByTimeStamp(Long startTime, Long endTime, Integer flag) {
        String field = MongoApiList.fieldIndex.get(flag);
        if (field == null){
            throw new ParamErrorException("参数错误,不存在该字段");
        }
        return mongoUniqueViemDAO.listDistinctIPByTimeStamp(startTime, endTime, field);
    }

    public List<String> listDistinctIPByTimeStampAndApi(Long startTime, Long endTime,
                                                        Integer apiId) {
        /*logger.info("长度是   " + MongoApiList.idToApi.size());
        for (Map.Entry<Integer, String> entry : MongoApiList.idToApi.entrySet()){
            logger.info("集合中的数据是   " + entry.getKey() + " " + entry.getValue());
        }*/
        String apiName = MongoApiList.idToApi.get(apiId);
        if ( apiName == null){
            throw new ParamErrorException("不存在该接口");
        }
        return mongoUniqueViemDAO.listDistinctIPByTimeStampAndApi(startTime, endTime, apiName);
    }



    public RoughUniqueViemDTO getRoughUVByDateAndApiAndType(String start, String end, String
        apiPath, Integer timeLong, Integer type) {

        SimpleDateFormat daySdf = new SimpleDateFormat("yyyy-MM-dd");
        RoughUniqueViemDTO roughUniqueViemDTO = new RoughUniqueViemDTO();
        Timestamp startTimeStamp = Timestamp.valueOf(start + " 00:00:00");
        Timestamp endTimeStamp = Timestamp.valueOf(end + " 00:00:00");
        int length = (int) ((endTimeStamp.getTime() - startTimeStamp.getTime()) / timeLong);
        long first = startTimeStamp.getTime();
        long standard = first;

        List<String > date = new ArrayList<>(length);
        List<Integer> count = new ArrayList<>(length);
        List<Set<String>>  setList = new ArrayList<>();
        // 初始化纵坐标为0 和横坐标的值
        if (type == 1){ // 横坐标的时间单位是小时
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            for (int i = 0; i < length; i ++){
                String dateString = sdf.format(first);
                count.add(i, 0);
                date.add(i, dateString);
                first += timeLong;
                setList.add(i, new HashSet<>());
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
                setList.add(i, new HashSet<>());
            }
        }else if (type == 3){ // 时间单位是天
            for (int i = 0; i < length; i ++){
                count.add(i, 0);
                date.add(i, daySdf.format(first));
                first += timeLong;
                setList.add(i, new HashSet<>());
            }
        }
        List<MongoUniqueViemDO> uvs = mongoUniqueViemDAO.listByDateAndApi(standard, endTimeStamp
                .getTime(), apiPath);
        for (MongoUniqueViemDO uv : uvs){
            long pvStart = Long.valueOf(uv.getTimeStamp());
            int index = (int) ((pvStart - standard)/timeLong);
            Set<String> set = setList.get(index);
            set.add(uv.getApiName());
            count.set(index, set.size());
        }
        roughUniqueViemDTO.setCount(count);
        roughUniqueViemDTO.setDate(date);
        return  roughUniqueViemDTO;
    }
}
