package spring.datasimulate.datasimulate.hbase.mysql.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import spring.datasimulate.datasimulate.hbase.mysql.bo.ShowAppBO;
import spring.datasimulate.datasimulate.hbase.mysql.bo.ShowUserBO;
import spring.datasimulate.datasimulate.hbase.mysql.dataooject.ShowUserDO;

import java.util.List;

@Api(description = "分页查询用户")
@RestController
public class ShowUserController {
    @Autowired
    private ShowUserBO showUserBO;
    @ApiOperation(value = "", notes = "根据页数,分页获取用户")
    @RequestMapping(value = "listUserByPage", method = RequestMethod.GET)
    public Page<ShowUserDO> listUserByPage(@ApiParam(value = "页数", defaultValue = "1",
        required = true)@RequestParam("page")Integer page){
        return showUserBO.listUserByPage(page - 1);
    }
    @Deprecated
    @ApiOperation(value = "", notes = "展示所有省份")
    @RequestMapping(value = "listAll", method = RequestMethod.GET)
    public List<ShowUserDO>  listAll(){
        return showUserBO.listAll();
    }
}
