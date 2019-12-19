package spring.datasimulate.datasimulate.hbase.hbasecontroller;



import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import redis.clients.jedis.Jedis;
import spring.datasimulate.datasimulate.hbase.HbaseConstant;
import spring.datasimulate.datasimulate.hbase.angularpacket.phonebrand.PhoneBrandVO;
import spring.datasimulate.datasimulate.hbase.hbasedao.DealMonthDataBoot;
import spring.datasimulate.datasimulate.hbase.hbase.dto.vo.HbaseVO;
import spring.datasimulate.datasimulate.hbase.hbasedealdata.MapDataToAngularPhoneBrand;
import spring.datasimulate.datasimulate.exceptions.ParamErrorException;
import spring.datasimulate.datasimulate.hbase.hbaseutils.RedisOpearObject;
import spring.datasimulate.datasimulate.redis.SerializeUtil;

import javax.servlet.http.HttpServletRequest;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * 此类的所有的http请求都需要在第一个参数设置为request,
 * 因为拦截的时候需要获取到request，在获取ip地址
 */
@RestController
@Api(description = "Hbase控制类,读取hbase中的所有数据" )
public class HbaseController {
    private  SimpleDateFormat format = new SimpleDateFormat("yyyy-MM");
    @Autowired
    private MapDataToAngularPhoneBrand mapDataToAngularPhoneBrand;
    @Autowired
    private DealMonthDataBoot dealMonthDataBoot;
    private Jedis jedis = new Jedis(HbaseConstant.REDIS_HOST, HbaseConstant.REDIS_PORT);
    private static Logger logger = LoggerFactory.getLogger(HbaseController.class);

    @ApiOperation(value = "描述，获取单个列族" , notes = "具体描述，参数0,1,2,3,4,5获取列族,brand，"
        + " model, system_version,ISP,net_status,resolution传递截止的时间,开始时间默认是一年前")
    @RequestMapping(method = RequestMethod.GET, value = "getOneYearHbaseVO")
    public PhoneBrandVO getOneYearHbaseVO(HttpServletRequest request, @ApiParam(value = "列族下标,"
        + "默认为0", required = false) @RequestParam(value = "column", defaultValue = "0")
        Integer column, @ApiParam(value = "截止年月 格式yyyy-MM", required = false)@RequestParam(
        value = "end", defaultValue = "2018-03") String end)throws ParamErrorException{
        Pattern pattern = Pattern.compile("\\d{4}-\\d{2}");
        Matcher matcher = pattern.matcher(end);
        if (!matcher.matches()){
            throw new ParamErrorException("参数格式异常");
        }

        Object cache = RedisOpearObject.getDataInRedis(request.getRequestURI(), column + "", end);
        if (cache != null){
            return (PhoneBrandVO) cache;
        }

        String [] yearMonth = end.split("-");
        Integer year = Integer.valueOf(yearMonth[0]) - 1;
        String start = new StringBuffer(year + "-" + yearMonth[1]).toString();
        Long startTimeStamp = 0L;
        Long endTimeStamp = 0L;
        try {
            startTimeStamp = format.parse(start).getTime();
            endTimeStamp = format.parse(end).getTime();
        } catch (ParseException e) {
            e.printStackTrace();
        } // 1488297600000   1519833600000
        logger.info("时间戳  " + startTimeStamp + "   " + endTimeStamp);
        List<HbaseVO> list = dealMonthDataBoot.getOneFamilyDataByMonth(startTimeStamp,
            endTimeStamp, column);
        logger.info("月份数目  " + list.size());

        PhoneBrandVO phoneBrandVO = mapDataToAngularPhoneBrand.beforeDataToAngular(list);

        RedisOpearObject.setDataToRedis(phoneBrandVO, request.getRequestURI(), column+"", end);

        return phoneBrandVO;
    }

    @Deprecated
    @ApiOperation(value = "粗略描述，获取单个列族" , notes = "具体描述，参数0,1,2获取列族,brand，"
        + " model, system_version  起始的时间戳为了方便测试设置了默认值，实际调用中需要传")
    @RequestMapping(method = RequestMethod.GET, value = "getHbaseVO")
    public PhoneBrandVO getHbaseVO(HttpServletRequest request, @ApiParam(value = "列族下标,默认为0",
        required = false) @RequestParam(value = "column", defaultValue = "0")Integer column,
                                         @ApiParam(value = "开始时间戳", required = false)
        @RequestParam(value = "start", defaultValue = "1510220208014")Long start, @ApiParam(value = "结束时间戳",
        required = false)@RequestParam(value = "end", defaultValue = "1520421228014") Long end){

        /* Long start = 1510220208014L;
        Long end = 1520421228014L;*/
        List<HbaseVO> list = dealMonthDataBoot.getOneFamilyDataByMonth(start, end, column);
            //ColumnFamilyEnum.SYSTEM_VERSION.getValue());    //这里是测试的时候设置
        logger.info("月份数目  " + list.size());
        return mapDataToAngularPhoneBrand.beforeDataToAngular(list);
    }

    @Deprecated
    @ApiOperation(value = "获取app的所有数据", notes = "全表扫描,hbase中scan,再将数据封装")
    @RequestMapping(method = RequestMethod.GET, value = "/getAllAppData")
    public List<HbaseVO> getAllAppData(HttpServletRequest request, @ApiParam(value = "开始时间戳",
        required = false)@RequestParam(value = "start", defaultValue = "1510220208014")Long start,
        @ApiParam(value = "截止时间戳", required = false)@RequestParam(value = "end",defaultValue
        = "1520421228014")Long end){

        /*Long start = 1510220208014L;
        Long end = 1520421228014L;*/
        return dealMonthDataBoot.getDataByMonth(start, end);
    }


    @RequestMapping(value = "test", method = RequestMethod.GET)
    public void theTest(HttpServletRequest request){
        logger.info("切面是否生效");
    }
}
