package spring.datasimulate.datasimulate.hbase.hbasecontroller;

import com.sun.org.apache.regexp.internal.RE;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import redis.clients.jedis.Jedis;
import spring.datasimulate.datasimulate.exceptions.SelfParamErrorException;
import spring.datasimulate.datasimulate.hbase.HbaseConstant;
import spring.datasimulate.datasimulate.hbase.hbase.dto.vo.AppVersionVO;
import spring.datasimulate.datasimulate.hbase.hbasebo.AppVersionBO;
import spring.datasimulate.datasimulate.hbase.hbaseutils.RedisOpearObject;
import spring.datasimulate.datasimulate.hbase.mysql.bo.ShowAppBO;
import spring.datasimulate.datasimulate.redis.SerializeUtil;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Api(description = "hbase中app版本数据处理")
@RestController
public class AppVersionController {
    private Pattern pattern = Pattern.compile("(\\d){4}-(\\d){2}-(\\d){2}");
    @Autowired
    private AppVersionBO appVersionBO;
    @Autowired
    private ShowAppBO showAppBO;
    private Jedis jedis = new Jedis(HbaseConstant.REDIS_HOST, HbaseConstant.REDIS_PORT);

    @ApiOperation(value = "获取app版本", notes = "根据app应用全名,起始日期," +
            "得到app历史版本,每个版本下载数,以及每个版本在某一天的使用数")
    @RequestMapping(value = "getAppVersionMsgByAppAndDate", method = RequestMethod.GET)
    public AppVersionVO getAppVersionMsgByAppAndDate(HttpServletRequest request,
        @ApiParam(value = "app全名", required = true, defaultValue = "王者荣耀")
        @RequestParam("appName")String appName, @ApiParam(value = "开始日期,格式为yyyy-MM-dd",
        required = true, defaultValue = "2018-01-01")@RequestParam("start")String start,
        @ApiParam(value = "截至日期,格式为yyyy-MM-dd", required = true, defaultValue = "2018-01-20")
         @RequestParam("end") String end){
        if (!checkDateFormat(start) || !checkDateFormat(end)){
            throw new SelfParamErrorException("日期格式错误");
        }
        if (start.compareTo(end) > 0){
            throw new SelfParamErrorException("开始日期大于截至日期");
        }
        List<String> packets = showAppBO.listAppPacketByAppName(appName);
        System.out.println(appName + "  获取到的包名  " + packets.get(0));
        if (packets == null || packets.size() == 0){
            throw new SelfParamErrorException("该应用不存在,请检查应用名是否正确");
        }

        /*Object cache = RedisOpearObject.getDataInRedis(request.getRequestURI(), appName, start, end);
        if (cache != null){
            return (AppVersionVO) (cache);
        }*/
        AppVersionVO appVersionVO = appVersionBO.getAppVersionMsgByAppAndDate(packets.get(0), start, end);

        RedisOpearObject.setDataToRedis(appVersionVO, request.getRequestURI(), appName, start, end);
        return appVersionVO;
    }


    private boolean checkDateFormat(String dateString){
        Matcher matcher = pattern.matcher(dateString);
        return matcher.matches();
    }
}
