package spring.datasimulate.datasimulate.hbase.hbasecontroller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import io.swagger.models.auth.In;
import org.apache.hadoop.hbase.shaded.org.apache.commons.math.exception.MathInternalError;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import spring.datasimulate.datasimulate.exceptions.SelfParamErrorException;
import spring.datasimulate.datasimulate.hbase.hbase.dto.vo.UserMakeHobbyDTO;
import spring.datasimulate.datasimulate.hbase.hbase.dto.vo.UserMakeLocationDTO;
import spring.datasimulate.datasimulate.hbase.hbase.dto.vo.UserMakeUsingTime;
import spring.datasimulate.datasimulate.hbase.hbasebo.UserMakeBO;
import spring.datasimulate.datasimulate.hbase.hbaseutils.RedisOpearObject;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Api(description = "用户构成")
@RestController()
@RequestMapping(value = "/userMake")
public class UserMakeController {
    private Pattern pattern = Pattern.compile("(\\d){4}-(\\d){2}-(\\d){2}");

    @Autowired
    private UserMakeBO userMakeBO;

    @ApiOperation(value = "用户兴趣", notes = "根据起始时间,获取用户兴趣比")
    @RequestMapping(value = "getUserMakeHobbyByDate", method = RequestMethod.GET)
    public UserMakeHobbyDTO getUserMakeHobbyByDate(HttpServletRequest request, @ApiParam(value
        = "开始时间,格式是yyyy-MM-dd", required = true, defaultValue = "2017-11-10")
        @RequestParam("start")String start, @ApiParam(value = "截止时间,格式是yyyy-MM-dd",
        required = true, defaultValue = "2017-11-17" )
        @RequestParam("end")String end){
        checkInput(start, end);

        Object cache = RedisOpearObject.getDataInRedis(request.getRequestURI(), start, end);
        if (cache != null){
            return (UserMakeHobbyDTO) cache;
        }

        UserMakeHobbyDTO userMakeHobbyDTO =  userMakeBO.getUserMakeHobbyByDate(start, end);

        RedisOpearObject.setDataToRedis(userMakeHobbyDTO, request.getRequestURI(), start, end);

        return userMakeHobbyDTO;
    }

    @ApiOperation(value = "用户地域分布", notes = "根据时间段,查询用户地域分布,逆序")
    @RequestMapping(value = "listLocation", method = RequestMethod.GET)
    public List<UserMakeLocationDTO> listLocation(HttpServletRequest request,
        @ApiParam(value = "开始时间,格式yyyy-MM-dd", defaultValue = "2017-11-06", required = true)
        @RequestParam("start")String start, @ApiParam(value = "截至时间,格式是yyyy-MM-dd",
        defaultValue = "2017-11-16", required = true)@RequestParam("end")String end) {
        checkInput(start, end);

        Object cache = RedisOpearObject.getDataInRedis(request.getRequestURI(), start, end);
        if (cache != null ){
            return (List<UserMakeLocationDTO>) cache;
        }
        List<UserMakeLocationDTO> list = userMakeBO.listLocation(start, end);
        RedisOpearObject.setDataToRedis(list, request.getRequestURI(), start, end);

        return list;
    }

    @ApiOperation(value = "用户使用时长", notes = "根据时间段,查询用户使用时长")
    @RequestMapping(value = "getUsingTimeLength", method = RequestMethod.GET)
    public UserMakeUsingTime getUsingTimeLength(HttpServletRequest request,
        @ApiParam(value = "开始时间,格式yyyy-MM-dd", defaultValue = "2017-11-06", required = true)
        @RequestParam("start")String start, @ApiParam(value = "截至时间,格式是yyyy-MM-dd",
        defaultValue = "2017-11-16", required = true)@RequestParam("end")String end) {
        checkInput(start, end);

        Object cache = RedisOpearObject.getDataInRedis(request.getRequestURI(), start, end);
        if (cache != null ){
            return (UserMakeUsingTime) cache;
        }

        UserMakeUsingTime userMakeUsingTime = userMakeBO.getUsingTimeLength(start, end);

        RedisOpearObject.setDataToRedis(userMakeUsingTime, request.getRequestURI(), start, end);

        return userMakeUsingTime;
    }

    @ApiOperation(value = "不同时段数据", notes = "根据起止时间,用户在一天24小时使用手机app的情况")
    @RequestMapping(value = "listPeriod", method = RequestMethod.GET)
    public List<Integer> listPeriod(HttpServletRequest request, @ApiParam(value =
        "开始时间,格式是yyyy-MM-dd", required = true, defaultValue = "2017-11-06")
        @RequestParam("start")String start, @ApiParam(required = true, value =
        "截止时间,格式是yyyy-MM-dd", defaultValue = "2017-11-16")@RequestParam("end") String end) {

        checkInput(start, end);

        Object cache = RedisOpearObject.getDataInRedis(request.getRequestURI(), start, end);
        if (cache != null) {
            return (List<Integer>) cache;
        }

        List<Integer> userList = userMakeBO.listPeriod(start, end);

        RedisOpearObject.setDataToRedis(userList,request.getRequestURI(), start, end);

        return userList;
    }
    public void checkInput(String start, String end){
        Matcher startMatcher = pattern.matcher(start);
        Matcher endMatcher = pattern.matcher(end);
        if (!startMatcher.matches() || !endMatcher.matches()){
            throw new SelfParamErrorException("日期格式错误");
        }
    }
}
