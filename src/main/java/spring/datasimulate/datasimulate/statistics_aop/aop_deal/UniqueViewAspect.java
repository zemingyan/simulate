package spring.datasimulate.datasimulate.statistics_aop.aop_deal;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import spring.datasimulate.datasimulate.statistics_aop.AnalysisIP;
import spring.datasimulate.datasimulate.statistics_aop.persistentdao.UniqueViemDao;
import spring.datasimulate.datasimulate.statistics_aop.persistentobject.UniqueViemPO;


import javax.servlet.http.HttpServletRequest;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;

@Aspect
@Component
@RestController
public class UniqueViewAspect {
    private static Logger logger = LoggerFactory.getLogger(UniqueViewAspect.class);

    @Autowired
    private UniqueViemDao uniqueViemDao;
    @Autowired
    private AnalysisIP analysisIP;
    ConcurrentHashMap<String,Long> uvNumber = new ConcurrentHashMap<>();
    List<UniqueViemPO> list = Collections.synchronizedList(new ArrayList());

    @Pointcut("execution(public * spring.datasimulate.datasimulate.createdata.ManyMakeData.simulate(..))")
    public void uv(){}


    @Before("uv()")
    public void deAddOneIPViem(JoinPoint joinPoint){
        //logger.info("进入  ip  去重函数");
        Object[] args = joinPoint.getArgs();
        logger.info("长度  " + args.length);
        HttpServletRequest request = (HttpServletRequest) args[0];
        String IP = analysisIP.getIpAddr(request);
        //logger.info("将 ip 写入map  " + IP);
        Long cnt = uvNumber.get(IP);
        UniqueViemPO uniqueViemPO = new UniqueViemPO();
        uniqueViemPO.setIPAddress(IP);
        uniqueViemPO.setTimeStamp(System.currentTimeMillis());
        list.add(uniqueViemPO);
        /*if (cnt == null || cnt == 0){
            uvNumber.put(IP,Long.valueOf(1));
        }else {
            uvNumber.put(IP,cnt + 1);
        }*/
    }

    @Scheduled(fixedRate = 1000*10)
    public void writeUniqueViem(){
        //logger.info("批次写入的长度是  " + list.size());
        for (int i = list.size() - 1 ; i >= 0 ; i -- ){
            uniqueViemDao.save(list.get(i));
            list.remove(i);
        }
    }
    @RequestMapping(value = "/getMap", method = RequestMethod.GET)
    public String getMap(){
        Set<Map.Entry<String,Long>> entry = uvNumber.entrySet();
        for (Map.Entry<String,Long> entrySet : entry){
            logger.info(entrySet.getKey() + "   " + entrySet.getValue());
        }
        return entry.toString();
    }
}
