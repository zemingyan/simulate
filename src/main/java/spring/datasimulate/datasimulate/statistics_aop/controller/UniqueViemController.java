package spring.datasimulate.datasimulate.statistics_aop.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import spring.datasimulate.datasimulate.statistics_aop.persistentdao.UniqueViemDao;
import spring.datasimulate.datasimulate.statistics_aop.persistentobject.UniqueViemPO;

import java.util.Collections;
import java.util.List;

@RestController
public class UniqueViemController {
    @Autowired
    private UniqueViemDao uniqueViemDao;

    @RequestMapping(value = "/uniqueViem/selectByTimeStamp", method = RequestMethod.GET) //
    public List<UniqueViemPO> selectByTimeStamp(@RequestParam Long less , @RequestParam Long greater){
        return uniqueViemDao.selectByTimeStamp(less,greater);
    }
    @RequestMapping(value = "/uniqueViem/selectIPAddressDistinct", method = RequestMethod.GET)  // 返回所有的ip地址
    public List<String> selectIPAddressDistinct(){
        return uniqueViemDao.selectIPAddressDistinct();
    }
}
