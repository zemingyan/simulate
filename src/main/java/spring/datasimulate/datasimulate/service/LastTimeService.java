package spring.datasimulate.datasimulate.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import spring.datasimulate.datasimulate.dao.LastTimeDao;
import spring.datasimulate.datasimulate.po.LastTimePO;

import java.util.List;

@Service
public class LastTimeService {
    @Autowired
    private LastTimeDao lastTimeDao;

    @Transactional
    public boolean save(LastTimePO lastTimePO){
        lastTimeDao.deleteByPhoneID(lastTimePO.getPhoneID()); // 更新内部也是先删除后创建
        return lastTimeDao.save(lastTimePO);
    }

    public List<LastTimePO> selectByPhoneID(String phoneID) {
        return lastTimeDao.selectByPhoneID(phoneID);
    }
}
