package spring.datasimulate.datasimulate.statistics_aop.aop_deal;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RestController;
import spring.datasimulate.datasimulate.statistics_aop.persistentdao.ResponseTimeDao;
import spring.datasimulate.datasimulate.statistics_aop.persistentobject.ResponseTimePO;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Aspect
@Component
@RestController
public class ResponseTimeAspect {
    @Autowired
    private ResponseTimeDao responseTimeDao;
    private static Logger logger = LoggerFactory.getLogger(ResponseTimeAspect.class);
    private List<ResponseTimePO> responseList = Collections.synchronizedList(new ArrayList<>());

    ThreadLocal<Long> startTime = new ThreadLocal<>(); // 线程安全
    @Pointcut("execution(public * spring.datasimulate.datasimulate.createdata.ManyMakeData.simulate(..))")
    public void position(){} //监控某一个方法

    @Scheduled(fixedRate = 1000*10)
    public void writeResponseTimeToMonge(){
        //logger.info("十秒记录一次响应时间");
        for (int i = responseList.size() - 1 ; i >= 0 ; i --) {
            responseTimeDao.save(responseList.get(i));
            responseList.remove(i);
        }
    }

    @Before("position()")
    public void doBeofre(JoinPoint joinPoint){
        startTime.set(System.currentTimeMillis());
        logger.info("请求的时间戳为 " + startTime.get());
    }

    @AfterReturning(returning = "ret" ,pointcut = "position()")
    public void doAfterReturing(Object ret){
        Long endTime = System.currentTimeMillis();
        Long dealTime = endTime - startTime.get();
        logger.info("响应时间是 " + dealTime);
        ResponseTimePO responseTimePO = new ResponseTimePO();
        responseTimePO.setStartTime(startTime.get());
        responseTimePO.setEndTime(endTime);
        responseTimePO.setDealTime(dealTime);
        responseList.add(responseTimePO);
    }
}