package spring.datasimulate.datasimulate.createdata;

import jdk.nashorn.internal.codegen.CompilerConstants;
import org.omg.CORBA.PRIVATE_MEMBER;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import spring.datasimulate.datasimulate.DataUnit;
import spring.datasimulate.datasimulate.Transform;
import spring.datasimulate.datasimulate.dao.AppDao;
import spring.datasimulate.datasimulate.dao.LastTimeDao;
import spring.datasimulate.datasimulate.dao.UserDao;
import spring.datasimulate.datasimulate.po.App;
import spring.datasimulate.datasimulate.po.LastTimePO;
import spring.datasimulate.datasimulate.po.UserPO;
import spring.datasimulate.datasimulate.service.LastTimeService;

import java.lang.ref.PhantomReference;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Random;
import java.util.concurrent.Callable;

@Service
public class
CallSimulate implements Callable<DataUnit> {
    private Logger logger = LoggerFactory.getLogger(CallSimulate.class);
    @Autowired
    private AppDao appDao;
    @Autowired
    private UserDao userDao;
    @Autowired
    private LastTimeService lastTimeService;

    private UserPO userPO;


    public void setUserPO(UserPO userPO) {
        this.userPO = userPO;
    }

    @Override
    public DataUnit call() throws Exception {
        List<App> appList = new ArrayList<>();
        App systemUI = appDao.selectAppByName("System UI").get(0);
        Random random = new Random();


        logger.info((userDao==null)+"");
        DataUnit dataUnit = Transform.transitionUserPOToDataUtil(userPO);
        List<String> appNames = appDao.selectAllAppNameDistinct();
        List<LastTimePO> readLastTimePOs = lastTimeService.selectByPhoneID(dataUnit.getId());
        long endTime = 0;
        if (readLastTimePOs==null || readLastTimePOs.size() ==0){
            endTime = System.currentTimeMillis();
        }else {
            endTime = readLastTimePOs.get(0).getTimestamp() + 1;
        }
        long startTime = 0L;// 不要用包装类，避免不变模式
        int useAppCnt = random.nextInt(70) + 21;
        for (int i = 0 ; i < useAppCnt ; i ++ ){
            App system = new App();
            system.setAppName(systemUI.getAppName());
            system.setPackageName(systemUI.getPackageName());
            int stopUITime = random.nextInt(5) + 3;
            startTime = endTime;
            endTime = startTime + stopUITime;
            system.setStartTime(startTime+"");
            system.setEndTime(endTime+"");
            appList.add(system);

            Integer appIndex = random.nextInt(appNames.size()); //随机名字
            int appTime = random.nextInt(599) + 1; //停留在app上一次的时间
            startTime = endTime;
            endTime = startTime + appTime;
            String curAppName = appNames.get(appIndex);
            App curApp = appDao.selectAppByName(curAppName).get(0);
            curApp.setEndTime(endTime+"");
            curApp.setStartTime(startTime+"");
            appList.add(curApp);

        }
        dataUnit.setDate(new Date().toString());
        dataUnit.setUsage(appList);

        String userLastTime = appList.get(appList.size()-1).getEndTime();
        logger.info("最后时间为  " + userLastTime);
        LastTimePO saveLastTimePO = new LastTimePO(dataUnit.getId(),Long.valueOf(userLastTime));
        lastTimeService.save(saveLastTimePO);
        return dataUnit;
    }
}
