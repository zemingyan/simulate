package spring.datasimulate.datasimulate.createdata;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import spring.datasimulate.datasimulate.DataUnit;
import spring.datasimulate.datasimulate.Transform;
import spring.datasimulate.datasimulate.dao.AppDao;
import spring.datasimulate.datasimulate.dao.UserDao;
import spring.datasimulate.datasimulate.po.App;
import spring.datasimulate.datasimulate.po.LastTimePO;
import spring.datasimulate.datasimulate.po.UserPO;
import spring.datasimulate.datasimulate.service.LastTimeService;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Random;

@RestController
@Service
public class MakeDataCAS implements Runnable {
    private static Logger logger = LoggerFactory.getLogger(MakeData.class);
    @Autowired
    private UserDao userDao;
    @Autowired
    private AppDao appDao;
    @Autowired
    private LastTimeService lastTimeService;

    //@RequestMapping("/createDataCAS")
    //public DataUnit createData(){
    @Override
    public void run(){
        List<App> appList = new ArrayList<>();
        App systemUI = appDao.selectAppByName("System UI").get(0);
        List<String> appNames = appDao.selectAllAppNameDistinct();
        Random random = new Random();
        //logger.info(systemUI.toString());
        List<UserPO> userPOs=userDao.selectAll();
        int userIndex = random.nextInt(userPOs.size());
        UserPO userPO = userDao.selectAll().get(userIndex);
        DataUnit dataUnit = Transform.transitionUserPOToDataUtil(userPO);
        List<LastTimePO> readLastTimePOs = lastTimeService.selectByPhoneID(dataUnit.getId());
        long endTime = 0;
        long beforeExecValue = -1;
        if (readLastTimePOs==null || readLastTimePOs.size() ==0){
            endTime = System.currentTimeMillis();
        }else {
            endTime = readLastTimePOs.get(0).getTimestamp() + 1;
            beforeExecValue = endTime; //在数据库中读取了该值
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
        // 记录最后一次数据提交的时间
        String userLastTime = appList.get(appList.size()-1).getEndTime();
        //logger.info("最后时间为  " + userLastTime);
        LastTimePO saveLastTimePO = new LastTimePO(dataUnit.getId(),Long.valueOf(userLastTime));

        //if (beforeExecValue != -1){ //说明时间戳是在数据库中读取的
        List<LastTimePO> afterLastTimePOs = lastTimeService.selectByPhoneID(dataUnit.getId());
        if (afterLastTimePOs == null || afterLastTimePOs.size() == 0){
            if (beforeExecValue == -1) {
                logger.info("模拟数据成功");//第一次添加数据
                lastTimeService.save(saveLastTimePO);
                return;
            }
            logger.info("在更新的时候读取了数据，脏读, 失败");
            return;
        }
        if (afterLastTimePOs.size() == 1){
            long afterExecValue = afterLastTimePOs.get(0).getTimestamp();
            if (afterExecValue != beforeExecValue - 1){ //不相等，已经被修改 减1是因为之前加了
                logger.info("资源竞争失败 放弃");
                return ;//null;
            }else if (afterExecValue == beforeExecValue - 1) {
                logger.info("模拟数据成功");
                lastTimeService.save(saveLastTimePO);
                return;// dataUnit;
            }
        }
        logger.info("长度  读取数据，脏读, 失败");
        return;
    }
    public static void main(String[] args){

    }


}
