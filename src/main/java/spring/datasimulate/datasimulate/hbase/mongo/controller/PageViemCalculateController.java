package spring.datasimulate.datasimulate.hbase.mongo.controller;

import java.text.ParseException;
import java.util.Date;
import com.mongodb.MongoTimeoutException;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import spring.datasimulate.datasimulate.exceptions.SelfParamErrorException;
import spring.datasimulate.datasimulate.hbase.mongo.bo.MongoPageViemBO;
import spring.datasimulate.datasimulate.hbase.mongo.dto.PageViemDTO;
import spring.datasimulate.datasimulate.hbase.mongo.dto.RoughPageViemDTO;
import spring.datasimulate.datasimulate.hbase.mongo.util.DateCheckFactory;
import spring.datasimulate.datasimulate.hbase.mongo.util.MongoApiList;
import spring.datasimulate.datasimulate.hbase.mongo.util.MongoTimeUtil;

import java.text.SimpleDateFormat;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@RestController
@Api(description = "该类中的接口负责从mongodb中获取存储的PV(page viem)数据")
public class PageViemCalculateController {
    private Pattern pattern = Pattern.compile("(\\d){4}-(\\d){2}-(\\d){2}");
    @Autowired
    private MongoPageViemBO mongoPageViemBO;
    @ApiOperation(value = "查询单个api在某一时间段内的访问量", notes = "传入起始时间戳和api"
        + ",以及单位值,1,2,3分别表示以小时,天,周为单位, 返回访问数量")
    @RequestMapping(value = "getPVByTimeStamp", method = RequestMethod.GET)
    public RoughPageViemDTO getRoughPVByDateAndApiAndType(
        @ApiParam(value = "截至日期,格式yyyy-MM-dd,设置默认", defaultValue = "2018-04-06", required = true)
        @RequestParam("end") String end, @ApiParam(value = "api编号", defaultValue = "4",
        required = true)@RequestParam Integer apiIndex, @ApiParam(value = "开始时间," +
        "1,2,3分别标示一天,一周,一月前", defaultValue = "1", required = true)
        @RequestParam("type") Integer type){
        checkDateFormat(end);
        // 单位时长,  小时,天, 没有周
        Integer timeLong = MongoTimeUtil.timeType.get(type);
        if (timeLong == null){
            throw new SelfParamErrorException("没有该指定日期");
        }
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        Date startDate = null;
        try {
            startDate = DateCheckFactory.getBeforeDate(type, sdf.parse(end));
        } catch (ParseException e) {
            e.printStackTrace();
        }
        String apiPath = checkIndexAndGetApiPath(apiIndex);
        return mongoPageViemBO.getRoughPVByDateAndApiAndType(sdf.format(startDate), end, apiPath,
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

    /*@ApiOperation(value = "查询所有api在某一时间段内的访问量", notes = "返回各api在某段时间内"
        + "")*/
}
