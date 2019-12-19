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
import spring.datasimulate.datasimulate.exceptions.SelfParamErrorException;
import spring.datasimulate.datasimulate.hbase.mysql.bo.ShowAppBO;
import spring.datasimulate.datasimulate.hbase.mysql.dataooject.ShowAppDO;
import spring.datasimulate.datasimulate.hbase.mysql.dto.ShowAppMultipleDTO;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@RestController
@Api(description = "获取app， 包名和应用名称,作为hbase的rowkey")
public class ShowAppController {
    @Autowired
    private ShowAppBO showAppBO;

    @ApiOperation(value = "分页查询app", notes = "传入页数,默认是第一页")
    @RequestMapping(value = "listAppByPage", method = RequestMethod.GET)
    public Page<ShowAppDO> listAppByPage(@ApiParam(value = "页数", defaultValue = "1",
        required = true)@RequestParam("page")Integer page){
        return showAppBO.listAppByPage(page -1);
    }
    @ApiOperation(value = "查询所有用户", notes = "查询所有用户")
    @RequestMapping(value = "list", method = RequestMethod.GET)
    public List<List<HashMap<String, Integer>>> list(){
        List<List<HashMap<String, Integer>>> lists = new ArrayList<>();
        for (int i = 0; i < 10; i ++){
            List<HashMap<String, Integer>> first = new ArrayList<>();
            HashMap<String, Integer> hashMap = new HashMap<>();
            hashMap.put("first" + i, i);
            hashMap.put("second" + i, i);
            first.add(hashMap);
            lists.add(first);
        }
        return lists;
    }

    @ApiOperation(value = "查询包名", notes = "输入应用名称,查询包名")
    @RequestMapping(value = "getAppPacketByAppName", method = RequestMethod.GET)
    public String getAppPacketByAppName(@ApiParam(value = "app名称", required = true,
        defaultValue = "王者荣耀")@RequestParam("appName")String appName){
        List<String> appNames = showAppBO.listAppPacketByAppName(appName);
        if (appNames == null || appNames.size() == 0){
            throw new SelfParamErrorException("应用不存在");
        }
        return appNames.get(0);
    }
    @ApiOperation(value = "查询所有app名字", notes = "")
    @RequestMapping(value = "listAllAppName", method = RequestMethod.GET)
    public List<String> listAllApp(){
        return showAppBO.listAllAppName();
    }


    @ApiOperation(value = "查询所有app类型", notes = "")
    @RequestMapping(value = "listAppType", method = RequestMethod.GET)
    public List<String> listAppType(){

        List<String> list = showAppBO.listAppType();
        List<String> all = new ArrayList<>(list.size() + 1);
        all.add("全部");
        all.addAll(list);
        return all;
    }

    @ApiOperation(value = "查询所有app名字,返回对象list", notes = "")
    @RequestMapping(value = "listAllAppNameAndId", method = RequestMethod.GET)
    public List<ShowAppMultipleDTO> listAllAppNameAndId(){
        return showAppBO.listAllAppNameAndId();
    }

}
