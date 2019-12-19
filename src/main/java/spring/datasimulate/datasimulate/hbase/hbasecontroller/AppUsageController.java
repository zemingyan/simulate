package spring.datasimulate.datasimulate.hbase.hbasecontroller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import redis.clients.jedis.Jedis;
import spring.datasimulate.datasimulate.exceptions.SelfParamErrorException;
import spring.datasimulate.datasimulate.hbase.HbaseConstant;
import spring.datasimulate.datasimulate.hbase.hbase.dto.vo.AppUsageFrequencyVO;
import spring.datasimulate.datasimulate.hbase.hbasebo.AppUsageBO;
import spring.datasimulate.datasimulate.hbase.hbaseutils.RedisOpearObject;
import spring.datasimulate.datasimulate.hbase.mysql.bo.ShowAppBO;
import spring.datasimulate.datasimulate.hbase.mysql.dataooject.ShowAppDO;
import spring.datasimulate.datasimulate.redis.SerializeUtil;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Api(description = "单个app处理")
@RestController
public class AppUsageController {
    private Pattern pattern = Pattern.compile("(\\d){4}-(\\d){2}-(\\d){2}");
    @Autowired
    private AppUsageBO singleAppService;
    @Autowired
    private ShowAppBO showAppBO;
    private Jedis jedis = new Jedis(HbaseConstant.REDIS_HOST, HbaseConstant.REDIS_PORT);

    @ApiOperation(value = "获取日使用频率", notes = "根据app的名字,获取单个APP的日使用频率")
    @RequestMapping(value = "listDayUseFrequencyByApp", method = RequestMethod.GET)
    public ResponseEntity<AppUsageFrequencyVO> listDayUseFrequencyByApp(HttpServletRequest
        request, @ApiParam(value = "APP名字", defaultValue = "王者荣耀", required = true)
        @RequestParam("appName") String appName, @ApiParam(value = "日期格式为yyyy-MM-dd",
        required = true, defaultValue = "2017-12-15")@RequestParam("day") String day){
        Matcher matcher = pattern.matcher(day);
        if (!matcher.matches()){
            throw new SelfParamErrorException("日期格式错误");
        }
        List<ShowAppDO> apps = showAppBO.listAppsByAppName(appName);
        if (apps == null || apps.size() ==0) {
            throw new SelfParamErrorException("该应用不存在");
        }
        String appPacketName = apps.get(0).getPackageName();


        Object cache = RedisOpearObject.getDataInRedis(request.getRequestURI(), appPacketName, day);
        if (cache != null){
            AppUsageFrequencyVO singleAppUseFrequencyDTO = (AppUsageFrequencyVO) cache;
            return  new ResponseEntity<AppUsageFrequencyVO>(singleAppUseFrequencyDTO, HttpStatus.OK);
        }
        AppUsageFrequencyVO singleAppUseFrequencyDTO = singleAppService.
            listDayUseFrequencyByApp(appPacketName, day);
        RedisOpearObject.setDataToRedis(singleAppUseFrequencyDTO, request.getRequestURI(), appPacketName, day);
        return new ResponseEntity<AppUsageFrequencyVO>(singleAppUseFrequencyDTO, HttpStatus.OK);
    }
}
