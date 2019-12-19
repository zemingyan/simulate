package spring.datasimulate.datasimulate.statistics_aop.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import spring.datasimulate.datasimulate.statistics_aop.persistentdao.ResponseTimeDao;
import spring.datasimulate.datasimulate.statistics_aop.persistentobject.ResponseTimePO;

import java.sql.Timestamp;
import java.util.List;

@RestController
public class ResponseTimeController {
    @Autowired
    private ResponseTimeDao responseTimeDao;

    @RequestMapping(value = "/responseTime/selectByTimeStamp", method = RequestMethod.GET) //一个时间段的响应
    public List<ResponseTimePO> selectByTimeStamp(@RequestParam Long less , @RequestParam Long greater){
        return responseTimeDao.selectByTimeStamp(less , greater);
    }

    @RequestMapping(value = "/dealDate", method = RequestMethod.GET)
    @ResponseBody  //返回一段时间内的请求
    public List<ResponseTimePO> dealDate(@RequestParam String start , @RequestParam String end){
        Timestamp timestamp =Timestamp.valueOf(start);
        Long less = timestamp.getTime();
        timestamp = Timestamp.valueOf(end);
        Long greater = timestamp.getTime();
        return responseTimeDao.selectByTimeStamp(less , greater);
    }
}
