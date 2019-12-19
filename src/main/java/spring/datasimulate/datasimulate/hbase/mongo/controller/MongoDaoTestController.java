package spring.datasimulate.datasimulate.hbase.mongo.controller;

import com.mongodb.BasicDBObject;
import com.mongodb.DBObject;
import com.mongodb.QueryOperators;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import spring.datasimulate.datasimulate.hbase.mongo.dao.MongoPageViemDAO;
import spring.datasimulate.datasimulate.hbase.mongo.dto.RoughResponseTimeDTO;
import spring.datasimulate.datasimulate.hbase.mongo.util.MongoApiList;

import java.util.List;
@Api(description = "mongodb中的测试")
@RestController
public class MongoDaoTestController {
    private Logger logger = LoggerFactory.getLogger(MongoDaoTestController.class);
    @Autowired
    private MongoPageViemDAO mongoPageViemDAO;
    @Autowired
    private MongoTemplate mongoTemplate;

    @ApiOperation(value = "获取所有IP地址", notes = "获取所有IP地址")
    @RequestMapping(method = RequestMethod.GET, value = "/ipDistinct")
    public List<String> ipDistinct(){
        logger.info("jingru访问");
         DBObject cond = new BasicDBObject();
       /* cond.put("timeStamp", new BasicDBObject(QueryOperators.LT,"2540421228014"));
        cond.put("timeStamp", new BasicDBObject(QueryOperators.GTE, "10096"));*/
        List<String> list = mongoTemplate.getCollection("mongoUniqueViemDO")
            .distinct("IPAddress",cond);
        for (String s : list){
            System.out.println(s);
        }
        return list;
    }
    @ApiOperation(value = "获取所有API地址", notes = "获取所有API地址")
    @RequestMapping(method = RequestMethod.GET, value = "/apiDistinct")
    public List<String> apiDistinct(){
        logger.info("jingru访问");
        DBObject cond = new BasicDBObject();
        List<String> list = mongoTemplate.getCollection("mongoUniqueViemDO")
                .distinct("apiName",cond);
        for (String s : list){
            System.out.println(s);
        }
        return list;
    }

    @ApiOperation(value = "获取某个接口的响应时间", notes = "根据接口id,起始时间,获取该接口" +
            "在时间段内的每一分钟内请求的响应时间和平均响应时间")
    @RequestMapping(value = "getHourDao", method = RequestMethod.GET)
    public Long getHourDao( @ApiParam(value = "api对应的序号下标",
            required = true, defaultValue = "0")@RequestParam("index")Integer index) {
        String api = MongoApiList.idToApi.get(0);
        return mongoPageViemDAO.getPVCountByOneHourAndApi("2018-03-10", api, "");
    }
}
