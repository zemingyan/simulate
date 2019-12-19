package spring.datasimulate.datasimulate.hbase.mongo.bo;

import com.mongodb.MongoTimeoutException;
import org.apache.hadoop.yarn.webapp.hamlet.Hamlet;
import org.omg.CORBA.INTERNAL;
import org.omg.PortableInterceptor.HOLDING;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import spring.datasimulate.datasimulate.hbase.mongo.dao.MongoResponseTimeDAO;
import spring.datasimulate.datasimulate.hbase.mongo.dto.RoughResponseTimeDTO;
import spring.datasimulate.datasimulate.hbase.mongo.mongodbdo.MongoResponseTimeDO;
import spring.datasimulate.datasimulate.hbase.mongo.util.MongoTimeUtil;

import java.sql.Timestamp;
import java.text.DecimalFormat;
import java.text.SimpleDateFormat;
import java.util.*;

@Service
public class MongoResponseTimeBO {
    @Autowired
    private MongoResponseTimeDAO mongoResponseTimeDAO;

    public void save(MongoResponseTimeDO mongoResponseTimeDO){
        mongoResponseTimeDAO.save(mongoResponseTimeDO);
    }

    public RoughResponseTimeDTO getHourByDateAndApiPath(String start, String end, String apiPath) {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH");
        RoughResponseTimeDTO roughResponseTimeDTO = new RoughResponseTimeDTO();
        Timestamp startTime = Timestamp.valueOf(start + " 00:00:00");
        Timestamp endTime = Timestamp.valueOf(end  + " 00:00:00");
        long first  = startTime.getTime();
        long standard = first;
        long distant = endTime.getTime() - startTime.getTime();
        int length = (int) (distant/ MongoTimeUtil.HOUR);
        List<String> date = new ArrayList<>(length);
        List<Double> avgTime = new ArrayList<>(length);
        List<Integer> count = new ArrayList<>();
        for (int i = 0; i < length; i ++){
            String tempDate = sdf.format(first);
            date.add(i, tempDate);
            avgTime.add(i, 0.0);
            count.add(0);
            first +=  MongoTimeUtil.HOUR;
        }
        Set<Integer> indexToCnt = new TreeSet<>();
        List<MongoResponseTimeDO> rts = mongoResponseTimeDAO.listByApiAndDate(startTime.getTime(),
            endTime.getTime(), apiPath);
        double allTotalTime = 0D;
        int allCnt = 0;
        for (MongoResponseTimeDO rt : rts) {
            long apiStartTime = Long.valueOf(rt.getStartTime());
            long gap = apiStartTime - standard;
            int index = (int) (gap /  MongoTimeUtil.HOUR); // 对应的下标
            double before = avgTime.get(index);
            double dealTime = Double.valueOf(rt.getDealTime());


            if (!indexToCnt.contains(index)){
                indexToCnt.add(index);
                avgTime.set(index, dealTime);
                count.set(index, 1);
            } else {
                /*double beforeTotal = beforeCnt * before;
                indexToCnt.put(index, beforeCnt + 1);
                avgTime.set(index, (beforeTotal + dealTime) / (beforeCnt +1)); */ //每次都算平均值
                count.set(index, count.get(index) + 1);
                double beforeIndexTime = avgTime.get(index);
                avgTime.set(index, beforeIndexTime + dealTime);//此时存进去的是总时长
            }

            allTotalTime += dealTime;
            allCnt ++;
        }

        DecimalFormat decimalFormat = new DecimalFormat("#.##");
        for (Integer i : indexToCnt){
            double minuteValue = avgTime.get(i)/count.get(i);
            String temp = decimalFormat.format(minuteValue);
            avgTime.set(i, Double.valueOf(temp));
        }//重新算出平均值
        roughResponseTimeDTO.setAvgTime(avgTime);
        roughResponseTimeDTO.setDate(date);
        double finalAvg = 0;
        if (allCnt == 0){
            finalAvg = 0D;
        } else {
            String tempAvg = decimalFormat.format(allTotalTime/allCnt);
            System.out.println(allTotalTime/allCnt + "   " + tempAvg);
            finalAvg = Double.valueOf(tempAvg);
        }
        roughResponseTimeDTO.setAllAvg(finalAvg);
        roughResponseTimeDTO.setConut(count);
        return roughResponseTimeDTO;
    }
}
