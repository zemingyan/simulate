package spring.datasimulate.datasimulate.statistics_aop.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import spring.datasimulate.datasimulate.statistics_aop.persistentdao.PageViemDao;
import spring.datasimulate.datasimulate.statistics_aop.persistentobject.PageViemPO;

import java.util.List;

@RestController
public class PageViemController {
    private static Logger logger = LoggerFactory.getLogger(PageViemController.class);
    @Autowired
    private PageViemDao pageViemDao;
    @RequestMapping(value = "/selectPageViemByTimeStamp", method = RequestMethod.GET)
    public List<PageViemPO> selectPageViemByStamp(@RequestParam("less") Long less ,
        @RequestParam("greater") Long greater ){
        logger.info(less + "    " + greater+ "  " );
        return pageViemDao.selectByTimeStamp(less,greater);
    }
}
