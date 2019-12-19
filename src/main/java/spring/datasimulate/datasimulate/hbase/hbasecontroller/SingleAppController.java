package spring.datasimulate.datasimulate.hbase.hbasecontroller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import redis.clients.jedis.Jedis;
import spring.datasimulate.datasimulate.exceptions.SelfParamErrorException;
import spring.datasimulate.datasimulate.hbase.HbaseConstant;
import spring.datasimulate.datasimulate.hbase.hbase.dto.vo.*;
import spring.datasimulate.datasimulate.hbase.hbasebo.SingleAppBO;
import spring.datasimulate.datasimulate.hbase.hbaseutils.RedisOpearObject;
import spring.datasimulate.datasimulate.hbase.mysql.bo.ShowAppBO;
import spring.datasimulate.datasimulate.hbase.mysql.dataooject.ShowAppDO;
import spring.datasimulate.datasimulate.redis.SerializeUtil;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Api(description = "单个app使用情况查询")
@RestController
public class SingleAppController {
    private Pattern pattern = Pattern.compile("(\\d){4}-(\\d){2}-(\\d){2}");
    @Autowired
    private SingleAppBO singleAppBO;
    @Autowired
    private ShowAppBO showAppBO;


    @ApiOperation(value = "某个app一天的使用情况", notes = "根据app的名称,以及要查询的日期")
    @RequestMapping(value = "getSingleAppOnceHourCountByPacketAndDate", method = RequestMethod.GET)
    public SingleAppOnceHourUseCountDTO getSingleAppOnceHourCountByPacketAndDate(
        HttpServletRequest request, @ApiParam(value
        = "日期,格式是yyyy-MM-dd", required = true, defaultValue = "2018-01-23")
        @RequestParam("day")String day, @ApiParam(value = "应用名称", required = true,
        defaultValue = "王者荣耀")@RequestParam("appName")String appName){
        Matcher matcher = pattern.matcher(day);
        if (!matcher.matches()){
            throw new SelfParamErrorException("日期格式错误");
        }

        Object cache = RedisOpearObject.getDataInRedis(request.getRequestURI(), day, appName);
        if (cache != null){
            return (SingleAppOnceHourUseCountDTO) cache;
        }

        List<String> appPackets = showAppBO.listAppPacketByAppName(appName);
        if (appPackets == null || appPackets.size() ==0){
            throw new SelfParamErrorException("不存在该应用,请检查应用名称是否输入正确");
        }

        SingleAppOnceHourUseCountDTO singleAppOnceHourUseCountDTO = singleAppBO
                .getSingleAppOnceHourCountByPacketAndDate(day, appPackets.get(0));

        RedisOpearObject.setDataToRedis(singleAppOnceHourUseCountDTO, request.getRequestURI(),
                day, appName);

        return singleAppOnceHourUseCountDTO;
    }


    @ApiOperation(value = "查询App新老用户人数变化", notes = "根据app的名称,以及要查询的日期")
    @RequestMapping(value = "listSingleAppUserChange", method = RequestMethod.GET)
    public SingleAppUserChangeDTO listSingleAppUserChange(
         HttpServletRequest request, @ApiParam(value
         = "开始日期,格式是yyyy-MM-dd", required = true, defaultValue = "2018-01-23")
         @RequestParam("day")String start, @ApiParam(value = "截止日期,格式yyyy-MM-dd", required = true,
         defaultValue = "2018-02-04") @RequestParam(value = "end")String end,
        @ApiParam(value = "应用名称", required = true, defaultValue = "王者荣耀")
        @RequestParam("appName")String appName){
        Matcher startMatcher = pattern.matcher(start);
        Matcher endMatcher = pattern.matcher(end);
        if (!startMatcher.matches() || !endMatcher.matches()){
            throw new SelfParamErrorException("日期格式错误");
        }

       Object cache = RedisOpearObject.getDataInRedis(request.getRequestURI(), start, end, appName);
        if (cache != null){
            return (SingleAppUserChangeDTO) cache;
        }
        List<String> appPackets = showAppBO.listAppPacketByAppName(appName);
        if (appPackets == null || appPackets.size() ==0){
            throw new SelfParamErrorException("不存在该应用,请检查应用名称是否输入正确");
        }

        SingleAppUserChangeDTO singleAppUserChangeDTO = singleAppBO.listSingleAppUserChange(appPackets
            .get(0), start, end);
        RedisOpearObject.setDataToRedis(singleAppUserChangeDTO, request.getRequestURI(),
                start, end, appName);

        return singleAppUserChangeDTO;
    }


    @ApiOperation(value = "app活跃度", notes = "根据app应用名称和起始时间段查询app每天的点击率")
    @RequestMapping(value = "listLivenessByAppAndDate", method = RequestMethod.GET)
    public AppClickNumVO listLivenessByAppAndDate(HttpServletRequest request,
        @ApiParam(value = "应用名", required = true,
        defaultValue = "王者荣耀")@RequestParam("appName")String appName, @ApiParam(value
        = "开始日期,格式为yyyy-MM-dd", required = true, defaultValue = "2017-11-04")
        @RequestParam("start")String start, @ApiParam(value = "结束日期,格式为yyyy-MM-dd",
        required = true, defaultValue = "2018-03-10") @RequestParam("end")String end){
        Matcher startMatcher = pattern.matcher(start);
        Matcher endMatcher = pattern.matcher(end);
        if (!startMatcher.matches() || !endMatcher.matches()){
            throw new SelfParamErrorException("日期格式错误");
        }
        if (start.compareTo(end) > 0){
            throw new SelfParamErrorException("开始时间大于截至时间");
        }

        Object cache = RedisOpearObject.getDataInRedis(request.getRequestURI(), appName, start, end);
        if (cache != null){
            return (AppClickNumVO) cache;
        }


        List<String> appPackets = showAppBO.listAppPacketByAppName(appName);
        if (appPackets == null || appPackets.size() ==0){
            throw new SelfParamErrorException("不存在该应用,请检查应用名称是否输入正确");
        }

        AppClickNumVO appClickNumVO = singleAppBO.listLivenessByAppPacketAndDate(appPackets.get(0),
                start, end);

        RedisOpearObject.setDataToRedis(appClickNumVO, request.getRequestURI(), appName, start, end);

        return appClickNumVO;
    }


    @ApiOperation(value = "保留率", notes = "根据app应用名称和起始时间段查询app每天的保留率")
    @RequestMapping(value = "listAppRestoreRateByAppAndDate", method = RequestMethod.GET)
    public SingleAppReserveDTO listAppRestoreRateByAppAndDate(HttpServletRequest request,
         @ApiParam(value = "应用名", required = true, defaultValue = "王者荣耀")
        @RequestParam("appName")String appName, @ApiParam(value = "开始日期,格式为yyyy-MM-dd",
        required = true, defaultValue = "2017-11-04") @RequestParam("start")String start,
        @ApiParam(value = "结束日期,格式为yyyy-MM-dd", required = true, defaultValue = "2018-01-10")
        @RequestParam("end")String end) {
        Matcher startMatcher = pattern.matcher(start);
        Matcher endMatcher = pattern.matcher(end);
        if (!startMatcher.matches() || ! endMatcher.matches()){
            throw new SelfParamErrorException("日期格式错误");
        }
        List<ShowAppDO> showAppDOS = showAppBO.listAppsByAppName(appName);
        if (showAppDOS == null || showAppDOS.size() == 0){
            throw new SelfParamErrorException("不存在该APP");
        }
        return singleAppBO.listAppRestoreRateByAppAndDate(showAppDOS.get(0).getPackageName(), start, end);
    }

}

