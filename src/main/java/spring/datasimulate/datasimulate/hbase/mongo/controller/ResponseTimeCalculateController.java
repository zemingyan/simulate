package spring.datasimulate.datasimulate.hbase.mongo.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.apache.xerces.impl.xpath.regex.Match;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import spring.datasimulate.datasimulate.exceptions.SelfParamErrorException;
import spring.datasimulate.datasimulate.hbase.mongo.bo.MongoResponseTimeBO;
import spring.datasimulate.datasimulate.hbase.mongo.dao.MongoResponseTimeDAO;
import spring.datasimulate.datasimulate.hbase.mongo.dto.RoughResponseTimeDTO;
import spring.datasimulate.datasimulate.hbase.mongo.util.DateCheckFactory;
import spring.datasimulate.datasimulate.hbase.mongo.util.MongoApiList;

import java.text.ParseException;
import java.util.Date;
import java.text.SimpleDateFormat;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Api(description = "mongodb中读取API响应时间")
@RestController
@RequestMapping(value = "mongo/responseTime/")
public class ResponseTimeCalculateController {
    private Pattern pattern = Pattern.compile("(\\d){4}-(\\d){2}-(\\d){2}");
    @Autowired
    private MongoResponseTimeDAO mongoResponseTimeDAO;
    @Autowired
    private MongoResponseTimeBO mongoResponseTimeBO;

    @Deprecated
    @ApiOperation(value = "获取某个接口的响应时间", notes = "根据接口id,起始时间,获取该接口" +
        "在时间段内的每一分钟内请求的响应时间和平均响应时间")
    @RequestMapping(value = "getHourByDateAndApiId", method = RequestMethod.GET)
    public RoughResponseTimeDTO getHourByDateAndApiId(@ApiParam(value = "开始日期,格式yyyy-MM-dd",
        required = true, defaultValue = "2018-04-06")@RequestParam("start")String start,
        @ApiParam(value = "截至日期,格式yyyy-MM-dd", defaultValue = "2018-04-06", required = true)
        @RequestParam("end")String end, @ApiParam(value = "api对应的序号下标", required = true,
        defaultValue = "1")@RequestParam("index")Integer index) {
        checkDateFormat(start, end);
        String apiPath = checkIndexAndGetApiPath(index);
        if (apiPath == null) {
            return null;
        }
        return mongoResponseTimeBO.getHourByDateAndApiPath(start, end, apiPath);
    }
    @ApiOperation(value = "获取某个接口的响应时间", notes = "根据接口id,截止时间,类型获取" +
        "昨天,一周前,一月前,某个接口的响应时间情况,类型1,2,3分别表示1天.周.月前")
    @RequestMapping(value = "getHourRTByDateAndApiId", method = RequestMethod.GET)
    public RoughResponseTimeDTO getHourRTByDateAndApiId(@ApiParam(value = "截至日期," +
        "格式yyyy-MM-dd", defaultValue = "2018-04-06", required = true)
        @RequestParam("end")String end, @ApiParam(value = "类型,值是1,2,3", defaultValue = "1",
        required = true)@RequestParam("type")Integer type, @ApiParam(value =
        "api对应的序号下标", required = true,
        defaultValue = "4")@RequestParam("index")Integer index) {
        checkOneDateFormat(end);
        String apiPath = checkIndexAndGetApiPath(index);
        if (apiPath == null) {
            return null;
        }
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        Date endDate = null;
        try {
            endDate = sdf.parse(end);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        Date startDate = DateCheckFactory.getBeforeDate(type, endDate);
        return mongoResponseTimeBO.getHourByDateAndApiPath(sdf.format(startDate), end, apiPath);
    }


    public void checkOneDateFormat(String start){
        Matcher startMatcher = pattern.matcher(start);
        if (!startMatcher.matches()){
            throw new SelfParamErrorException("日期格式错误");
        }
    }
    public void checkDateFormat(String start, String  end){
        Matcher startMatcher = pattern.matcher(start);
        Matcher endMatcher = pattern.matcher(end);
        if (!startMatcher.matches() || !endMatcher.matches()){
            throw new SelfParamErrorException("日期格式错误");
        }
    }
    public String checkIndexAndGetApiPath(Integer index){
        String apiPath = MongoApiList.idToApi.get(index);
        if (apiPath == null){
            throw new SelfParamErrorException("下标错误,不存在该下标对应的api");
        }
        return apiPath;
    }
}
