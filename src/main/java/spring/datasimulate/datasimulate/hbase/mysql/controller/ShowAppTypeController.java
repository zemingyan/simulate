package spring.datasimulate.datasimulate.hbase.mysql.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import spring.datasimulate.datasimulate.hbase.mysql.bo.ShowAppTypeBO;

@RestController
public class ShowAppTypeController {
    @Autowired
    private ShowAppTypeBO showAppTypeBO;

}
