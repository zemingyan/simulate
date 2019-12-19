package spring.datasimulate.datasimulate.hbase.mongo.aspect;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import spring.datasimulate.datasimulate.hbase.HbaseConstant;
import spring.datasimulate.datasimulate.hbase.mongo.dao.MongoPageViemDAO;
import spring.datasimulate.datasimulate.hbase.mongo.mongodbdo.MongoPageViemDO;

import java.text.SimpleDateFormat;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.TimeUnit;

@Aspect
@Component
public class HbasePageViemAspect {
    public static SimpleDateFormat dayFormat = new SimpleDateFormat("yyyy-MM-dd");
    public static SimpleDateFormat timeFormat = new SimpleDateFormat("HH:mm");
    private static Logger logger = LoggerFactory.getLogger(HbasePageViemAspect.class);

    //该同步map的key是class 方法的全路径
    private ConcurrentHashMap<String, Integer> record = new ConcurrentHashMap<>
        (HbaseConstant.HBASE_REQUEST_METHOD_COUNT);
    @Autowired
    private MongoPageViemDAO mongoPageViemDAO;
    //拦截整个hbasecontroller包下所有类的请求方法， 并且改变pv
    @Pointcut("execution(public * spring.datasimulate.datasimulate.hbase.hbasecontroller.*"
        + ".*(..))")
    public void pv(){}

    @Before("pv()")
    public void addCnt(JoinPoint joinPoint){
        // class 方法的全路径  = class
        String apiPath = joinPoint.getTarget().getClass().toString() + joinPoint.getSignature().getName();
        if (record.get(apiPath) == null){
            record.put(apiPath, 1);
        }else {
            int beforeCnt = record.get(apiPath);
            record.put(apiPath, beforeCnt + 1);
        }
        logger.info("浏览数量加1   拦截的方法是  " + joinPoint.getSignature().getName());
        /*logger.info(joinPoint.getClass().toString());
        logger.info(joinPoint.getTarget().getClass().toString());*/

    }

    @Scheduled(fixedRate = 1000*10)
    public void writerData(){
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        MongoPageViemDO mongoPageViemDO = new MongoPageViemDO();
        Long timeStamp = HbaseConstant.getTime();//System.currentTimeMillis() - HbaseConstant.ONE_DAY;
        String curTimeStamp = timeStamp + "";
        String curDate = dayFormat.format(timeStamp);
        String curTime = timeFormat.format(timeStamp);
        for (Map.Entry<String, Integer> entry : record.entrySet()){
            if (entry.getValue().toString().equals("0")){
                //logger.info(entry.getValue().toString() + "  写入的长度 ");
                continue;
            }
            mongoPageViemDO.setTimeStamp(curTimeStamp);
            mongoPageViemDO.setApiName(entry.getKey());
            mongoPageViemDO.setCount(entry.getValue());
            mongoPageViemDO.setDay(curDate);
            mongoPageViemDO.setTime(curTime);

           // System.out.println("时间是    " + sdf.format(Long.valueOf(mongoPageViemDO.getTimeStamp())));

            mongoPageViemDAO.save(mongoPageViemDO);
            System.out.println(mongoPageViemDO.toString());
            record.put(entry.getKey(), 0);
        }
    }
}
