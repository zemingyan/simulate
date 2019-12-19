package spring.datasimulate.datasimulate.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import spring.datasimulate.datasimulate.po.UserPO;
import spring.datasimulate.datasimulate.service.UserService;

import java.util.List;

@RestController
public class UserController {
    private static Logger logger = LoggerFactory.getLogger(UserController.class);

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/selectAllUser", method = RequestMethod.GET)
    public List<UserPO> selectAll(){
        return userService.selectAll();
    }
}
