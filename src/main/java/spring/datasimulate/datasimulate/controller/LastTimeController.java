package spring.datasimulate.datasimulate.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import spring.datasimulate.datasimulate.po.LastTimePO;
import spring.datasimulate.datasimulate.service.LastTimeService;

@RestController
public class LastTimeController {
    @Autowired
    private LastTimeService lastTimeService;

    @RequestMapping(value = "/saveLastTime", method = RequestMethod.GET)
    public String save(LastTimePO lastTimePO){
        lastTimeService.save(lastTimePO);
        return "保存成功";
    }
}
