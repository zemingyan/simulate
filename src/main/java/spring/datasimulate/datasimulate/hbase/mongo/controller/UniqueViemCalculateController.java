package spring.datasimulate.datasimulate.hbase.mongo.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import spring.datasimulate.datasimulate.exceptions.SelfParamErrorException;
import spring.datasimulate.datasimulate.hbase.mongo.bo.MongoUniqueViemBO;
import spring.datasimulate.datasimulate.hbase.mongo.dao.MongoUniqueViemDAO;
import spring.datasimulate.datasimulate.hbase.mongo.dto.RoughPageViemDTO;
import spring.datasimulate.datasimulate.hbase.mongo.dto.RoughUniqueViemDTO;
import spring.datasimulate.datasimulate.hbase.mongo.mongodbdo.MongoUniqueViemDO;
import spring.datasimulate.datasimulate.hbase.mongo.util.DateCheckFactory;
import spring.datasimulate.datasimulate.hbase.mongo.util.MongoApiList;
import spring.datasimulate.datasimulate.hbase.mongo.util.MongoTimeUtil;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Api(description = "该类中的接口负责从mongodb中获取存储的UV(unique viem)数据")
@RestController
public class UniqueViemCalculateController {
    private Pattern pattern = Pattern.compile("(\\d){4}-(\\d){2}-(\\d){2}");
    private static Logger logger = LoggerFactory.getLogger(UniqueViemCalculateController.class);
    @Autowired
    private MongoUniqueViemBO mongoUniqueViemBO;

    @Deprecated
    @ApiOperation(value = "读取某时间段内的ip", notes = "根据起止时间,读取这段时间内访问过"
        + "的所有接口的ip或者api, 0表示查ip, 1表示查api 默认查ip")
    @RequestMapping(value = "listDistinctIPByTimeStamp", method = RequestMethod.GET)
    public List<String> listDistinctIPByTimeStamp(@ApiParam(value = "开始时间戳", required = true,
        defaultValue = "1520667458603")@RequestParam("start")Long startTime, @ApiParam(value
        = "结束时间戳", defaultValue = "1520685201269" + "", required = true)@RequestParam("end")
        Long endTime, @ApiParam(value = "查询标志", defaultValue = "0", required = true)
        @RequestParam("name")Integer flag){
        logger.info("标记是  " + flag);
        return mongoUniqueViemBO.listDistinctIPByTimeStamp(startTime, endTime, flag);
    }
    @Deprecated
    @ApiOperation(value = "读取某时间段内访问某api的ip", notes = "根据起止时间,和规定的api,"
        + "读取这段时间内访问过接口的ip,此处的api名字根据编号即可")
    @RequestMapping(value = "listDistinctIPByTimeStampAndApi", method = RequestMethod.GET)
    public List<String> listDistinctIPByTimeStampAndApi(@ApiParam(value = "开始时间戳",
        required = true, defaultValue = "1520667458603")@RequestParam("start")Long startTime,
        @ApiParam(value = "结束时间戳", defaultValue = "1520685201269", required = true)
        @RequestParam("end") Long endTime, @ApiParam(value = "api的编号",defaultValue = "0",
        required = true)@RequestParam("apiID")Integer apiId){
        return mongoUniqueViemBO.listDistinctIPByTimeStampAndApi(startTime, endTime, apiId);
    }

    @ApiOperation(value = "查询单个api在某一时间段的用户数", notes = "传入起始时间戳和api"
            + ",以及单位值,1,2,3分别表示以小时,天,周为单位, 返回访问人数")
    @RequestMapping(value = "getUVByDateAndApiAndType", method = RequestMethod.GET)
    public RoughUniqueViemDTO getUVByDateAndApiAndType(
        @ApiParam(value = "截至日期,格式yyyy-MM-dd", defaultValue = "2018-04-06", required = true)
        @RequestParam("end") String end, @ApiParam(value = "api编号", defaultValue = "4",
        required = true)@RequestParam Integer apiIndex, @ApiParam(value = "开始时间," +
        "1,2,3分别标示一天,一周,一月前", defaultValue = "1", required = true)
        @RequestParam Integer type){
        checkDateFormat(end);
        Integer timeLong = MongoTimeUtil.timeType.get(type);
        if (timeLong == null){
            throw new SelfParamErrorException("没有时间单位类型");
        }
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        Date startDate = null;
        try {
            startDate = DateCheckFactory.getBeforeDate(type, sdf.parse(end));
        } catch (ParseException e) {
            e.printStackTrace();
        }
        String apiPath = checkIndexAndGetApiPath(apiIndex);
        return mongoUniqueViemBO.getRoughUVByDateAndApiAndType(sdf.format(startDate), end, apiPath,
                timeLong, type);
    }// 以小时为单位进行统计，   响应时间的，设置二级图


    public void checkDateFormat( String  end){

        Matcher endMatcher = pattern.matcher(end);
        if ( !endMatcher.matches()){
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
