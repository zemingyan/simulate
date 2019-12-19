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
import spring.datasimulate.datasimulate.hbase.mongo.dao.MongoUniqueViemDAO;
import spring.datasimulate.datasimulate.hbase.mongo.mongodbdo.CancelRepeatUV;
import spring.datasimulate.datasimulate.hbase.mongo.mongodbdo.MongoUniqueViemDO;
import spring.datasimulate.datasimulate.statistics_aop.AnalysisIP;

import javax.servlet.http.HttpServletRequest;
import java.text.SimpleDateFormat;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;
import java.util.concurrent.locks.ReentrantLock;

@Aspect
@Component
public class HbaseUniqueAspect {
    private SimpleDateFormat dayFormat = new SimpleDateFormat("yyyy-MM-dd");
    private SimpleDateFormat timeFormat = new SimpleDateFormat("HH-mm");
    private Logger logger = LoggerFactory.getLogger(HbaseUniqueAspect.class);
    private ReentrantLock lock = new ReentrantLock();
    private ConcurrentMap<CancelRepeatUV, Integer> ipAndAddress = new ConcurrentHashMap<>(100);

    @Autowired
    private AnalysisIP analysisIP;
    @Autowired
    private MongoUniqueViemDAO mongoUniqueViemDAO;

    @Pointcut("execution(public * spring.datasimulate.datasimulate.hbase.hbasecontroller"
        + ".*.*(..))")
    public void uv(){}

    @Before("uv()")
    public void recordUV(JoinPoint joinPoint){
        String apiPath = joinPoint.getTarget().getClass().toString() + joinPoint.getSignature().getName();
        Object[] args = joinPoint.getArgs();
        HttpServletRequest request = (HttpServletRequest) args[0];
        String IP = analysisIP.getIpAddr(request);
        logger.info("获取到的ip是   " + IP + "\n" + "类路径  :" + apiPath);
        CancelRepeatUV cancelRepeatUV = new CancelRepeatUV();
        cancelRepeatUV.setApiName(apiPath);
        cancelRepeatUV.setIPAddress(IP);
        // 新的ip 和访问接口
        Integer oldCount = ipAndAddress.get(cancelRepeatUV);
        if (oldCount == null) {
            ipAndAddress.put(cancelRepeatUV, 1);
        } else {
            ipAndAddress.put(cancelRepeatUV, oldCount + 1);
        }
    }

    @Scheduled(fixedRate = 10*1000)
    public void writerData(){
        Long timeStamp = HbaseConstant.getTime();//System.currentTimeMillis() - HbaseConstant.ONE_DAY;
        String curTimeStamp = timeStamp + "";
        String curDate = dayFormat.format(timeStamp);
        String curTime = timeFormat.format(timeStamp);
        MongoUniqueViemDO mongoUniqueViemDO = new MongoUniqueViemDO();
        mongoUniqueViemDO.setTimeStamp(curTimeStamp);
        mongoUniqueViemDO.setDay(curDate);
        mongoUniqueViemDO.setTime(curTime);
        for (Map.Entry entry : ipAndAddress.entrySet()){
            if (entry.getValue().toString().equals("0")){
                continue;
            }
            CancelRepeatUV cancelRepeatUV = (CancelRepeatUV) entry.getKey();
            mongoUniqueViemDO.setApiName(cancelRepeatUV.getApiName());
            mongoUniqueViemDO.setIPAddress(cancelRepeatUV.getIPAddress());
            mongoUniqueViemDO.setCount((Integer) entry.getValue());
            mongoUniqueViemDAO.save(mongoUniqueViemDO);

            System.out.println(mongoUniqueViemDO.toString());

            entry.setValue(0);

        }

    }
}
