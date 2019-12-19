package spring.datasimulate.datasimulate.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import spring.datasimulate.datasimulate.dao.UserDao;
import spring.datasimulate.datasimulate.po.UserPO;

import java.util.List;


@Service
public class UserService {
    @Autowired
    private UserDao userDao;

    public boolean insertUser(UserPO userPO){
        userDao.save(userPO);
        return true;
    }

    public List<UserPO> selectAll() {
        return userDao.selectAll();
    }
}
