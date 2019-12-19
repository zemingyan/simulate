package spring.datasimulate.datasimulate;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import spring.datasimulate.datasimulate.po.UserPO;

import java.lang.ref.PhantomReference;

public class Transform {
    private static Logger logger = LoggerFactory.getLogger(Transform.class);
    public static UserPO transitionDataUtiltoUserPO(DataUnit dataUnit){
        UserPO userPO = new UserPO();
        userPO.setBrand(dataUnit.getBrand());
        userPO.setDate(dataUnit.getDate());
        userPO.setId(dataUnit.getId());
        userPO.setLanguage(dataUnit.getLanguage());
        userPO.setSystem_version(dataUnit.getSystem_version());
        userPO.setModel(dataUnit.getModel());
        logger.info("model     " + dataUnit.getModel());
        return userPO;
    }
    public static DataUnit transitionUserPOToDataUtil(UserPO userPO){
        DataUnit dataUnit = new DataUnit();

        dataUnit.setBrand(userPO.getBrand());
        dataUnit.setId(userPO.getId());
        dataUnit.setLanguage(userPO.getLanguage());
        dataUnit.setModel(userPO.getModel());
        dataUnit.setSystem_version(userPO.getSystem_version());

        return dataUnit;
    }
}
