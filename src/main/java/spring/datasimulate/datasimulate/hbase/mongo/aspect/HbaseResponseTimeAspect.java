package spring.datasimulate.datasimulate.hbase.mongo.aspect;

import java.text.ParseException;
import java.util.Date;

import org.apache.hadoop.hbase.exceptions.HBaseException;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import spring.datasimulate.datasimulate.hbase.HbaseConstant;
import spring.datasimulate.datasimulate.hbase.mongo.dao.MongoResponseTimeDAO;
import spring.datasimulate.datasimulate.hbase.mongo.mongodbdo.MongoResponseTimeDO;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Aspect
@Component
public class HbaseResponseTimeAspect {
    private SimpleDateFormat dayFormat = new SimpleDateFormat("yyyy-MM-dd");
    private SimpleDateFormat timeFormat = new SimpleDateFormat("HH-mm");

    private Logger logger = LoggerFactory.getLogger(HbaseResponseTimeAspect.class);

    @Autowired
    private MongoResponseTimeDAO mongoResponseTimeDAO;
    private List<MongoResponseTimeDO> responseTimelist = Collections.synchronizedList(new ArrayList<>(200));
    private ThreadLocal<Long> startTime = new ThreadLocal<>();

    @Pointcut("execution(public * spring.datasimulate.datasimulate.hbase.hbasecontroller"
        + ".*.*(..))")
    public void entryPoint(){}

    @Before("entryPoint()")
    public void doBefore(JoinPoint joinPoint){
        startTime.set(System.currentTimeMillis() - HbaseConstant.ONE_DAY);
        logger.info("请求的时间戳为 " + startTime.get());
    }
    @After("entryPoint()")
    public void doAfter(JoinPoint joinPoint){
        Long moniTime = HbaseConstant.getTime();

         SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");


        Long endTime = System.currentTimeMillis() - HbaseConstant.ONE_DAY;
        Long dealTime = endTime - startTime.get();
        String apiPath = joinPoint.getTarget().getClass().toString() + joinPoint.getSignature().getName();
        logger.info("响应时间是 " + dealTime);
        // 封装到内存list中，定时写入数据库
        String curDate = dayFormat.format(moniTime);//startTime.get());
        String curTime = timeFormat.format(moniTime);//startTime.get());
        MongoResponseTimeDO mongoResponseTimeDO = new MongoResponseTimeDO();
        mongoResponseTimeDO.setStartTime(moniTime + "");//startTime.get() + "");
        mongoResponseTimeDO.setEndTime(moniTime + dealTime + "");//endTime + "");
        mongoResponseTimeDO.setDealTime((int) (dealTime + 1));
        mongoResponseTimeDO.setApiName(apiPath);
        mongoResponseTimeDO.setDay(curDate);
        mongoResponseTimeDO.setTime(curTime);

        //System.out.println("时间是   " + sdf.format(startTime.get()));

        responseTimelist.add(mongoResponseTimeDO);
    }

    @Scheduled(fixedRate = 1000*10)
    public void writeResponseTimeToMonge(){
        //logger.info("十秒记录一次响应时间");
        for (int i = responseTimelist.size() - 1 ; i >= 0 ; i --) {
            mongoResponseTimeDAO.save(responseTimelist.get(i));
           // System.out.println(responseTimelist.get(i).toString());
            responseTimelist.remove(i);
        }
    }
}
