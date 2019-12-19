package spring.datasimulate.datasimulate.statistics_aop;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class UITransition {
    private static Logger logger = LoggerFactory.getLogger(UITransition.class);

    @RequestMapping(value = "/date", method = RequestMethod.GET)
    //@ResponseBody
    public String date(){
        logger.info("进入");
        return "date";
    }
}
