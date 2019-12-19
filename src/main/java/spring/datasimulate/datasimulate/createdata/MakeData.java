package spring.datasimulate.datasimulate.createdata;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import spring.datasimulate.datasimulate.DataUnit;
import spring.datasimulate.datasimulate.Transform;
import spring.datasimulate.datasimulate.dao.AppDao;
import spring.datasimulate.datasimulate.dao.UserDao;
import spring.datasimulate.datasimulate.po.App;
import spring.datasimulate.datasimulate.po.LastTimePO;
import spring.datasimulate.datasimulate.po.UserPO;
import spring.datasimulate.datasimulate.service.LastTimeService;

import java.util.*;
import java.util.List;
import java.util.Random;

@RestController
@Service
public class MakeData {
    private static Logger logger = LoggerFactory.getLogger(MakeData.class);
    @Autowired
    private UserDao userDao;
    @Autowired
    private AppDao appDao;
    @Autowired
    private LastTimeService lastTimeService;

    @RequestMapping(value = "/createData", method = RequestMethod.GET)
    public DataUnit createData(){
        List<App> appList = new ArrayList<>();
        App systemUI = appDao.selectAppByName("System UI").get(0);
        List<String> appNames = appDao.selectAllAppNameDistinct();
        Random random = new Random();
        logger.info(systemUI.toString());
        // 模拟某个用户  随机选择一个
        List<UserPO> userPOs=userDao.selectAll();
        int userIndex = random.nextInt(userPOs.size());
        UserPO userPO = userDao.selectAll().get(userIndex);
        DataUnit dataUnit = Transform.transitionUserPOToDataUtil(userPO);

        List<LastTimePO> readLastTimePOs = lastTimeService.selectByPhoneID(dataUnit.getId());
        long endTime = 0;
        if (readLastTimePOs==null || readLastTimePOs.size() ==0){
             endTime = System.currentTimeMillis();
        }else {
             endTime = readLastTimePOs.get(0).getTimestamp() + 1;
            logger.info("读取之前的时间  " + endTime);
        }
        // 登录系统的时间
        // 防止时间重叠的时候只需要在这里把上次最后的时候存入数据库读取出来即可
        //logger.info("开始时间   "+logSystemTime + " " + readLastTimePO.toString());

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
            if (i == 0) logger.info(startTime + "   "  + endTime);
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
        // 记录最后一次数据提交的时间
        String userLastTime = appList.get(appList.size()-1).getEndTime();
        logger.info("最后时间为  " + userLastTime);
        LastTimePO saveLastTimePO = new LastTimePO(dataUnit.getId(),Long.valueOf(userLastTime));
        lastTimeService.save(saveLastTimePO);
        return dataUnit;
    }




    public static void main(String[] args){
        Date date = new Date();
        System.out.println(date.toString());
        Random random = new Random();
        for (int i = 0 ; i < 10 ; i ++ ){
            System.out.println(random.nextInt(1));
        }

    }
}
