package spring.datasimulate.datasimulate.statistics_aop.aop_deal;

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
import spring.datasimulate.datasimulate.statistics_aop.persistentdao.PageViemDao;
import spring.datasimulate.datasimulate.statistics_aop.persistentobject.PageViemPO;

import java.util.concurrent.locks.ReentrantLock;

@RestController
@Aspect
@Component
public class PageViemAspect {
    private static Logger logger = LoggerFactory.getLogger(PageViemAspect.class);
    @Autowired
    private PageViemDao pageViemDao;
    private long pvCnt = 0;
    private ReentrantLock lock = new ReentrantLock();

    @Pointcut("execution(public * spring.datasimulate.datasimulate.createdata.ManyMakeData.simulate(..))")
    public void pv(){}

    @RequestMapping(value = "/getPVNumber", method = RequestMethod.GET)
    public long getPVNumber(){
        return pvCnt ;
    }

    @Scheduled(fixedRate = 1000*10)
    public void writerData(){
        PageViemPO pageViemPO = new PageViemPO();
        pageViemPO.setTimestamp(System.currentTimeMillis());
        pageViemPO.setPageViemCnt(pvCnt);
        //logger.info("十秒钟写一次数据");

        //如果要求高就在次if前后加重入锁
        if (pvCnt != 0){
            pageViemDao.save(pageViemPO);
            pvCnt = 0;
        }
    }

    @Before("pv()")
    public void addPVCount(){
        lock.lock();
        pvCnt ++;
        lock.unlock();
        logger.info(pvCnt + "");
    }



}
