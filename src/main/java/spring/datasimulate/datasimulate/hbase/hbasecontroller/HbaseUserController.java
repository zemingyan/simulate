package spring.datasimulate.datasimulate.hbase.hbasecontroller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.elasticsearch.common.recycler.Recycler;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import redis.clients.jedis.Jedis;
import spring.datasimulate.datasimulate.exceptions.SelfParamErrorException;
import spring.datasimulate.datasimulate.hbase.HbaseConstant;
import spring.datasimulate.datasimulate.hbase.hbase.dto.vo.UseTimeLength;
import spring.datasimulate.datasimulate.hbase.hbase.dto.vo.UserHistoryAppDTO;
import spring.datasimulate.datasimulate.hbase.hbase.dto.vo.UserHobbyDTO;
import spring.datasimulate.datasimulate.hbase.hbasebo.HbaseUserBO;
import spring.datasimulate.datasimulate.redis.SerializeUtil;
import spring.datasimulate.datasimulate.startintialize.HbaseUserInfo;

import javax.servlet.http.HttpServletRequest;
import java.io.Serializable;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.Date;
@Api(description = "关于hbase中存储用户信息的处理")
@RestController
public class HbaseUserController {
    private static Logger logger = LoggerFactory.getLogger(HbaseUserController.class);
    private Pattern pattern = Pattern.compile("(\\d){4}-(\\d){2}-(\\d){2}");
    private Jedis jedis = new Jedis(HbaseConstant.REDIS_HOST, HbaseConstant.REDIS_PORT);

    @Autowired
    private HbaseUserBO hbaseUserBO;

    @ApiOperation(value = "用户爱好", notes = "根据用户id,获取用户爱好并排序")
    @RequestMapping(value = "listUserHobbyByUserId", method = RequestMethod.GET)
    public List<UserHobbyDTO> listUserHobbyByUserId(HttpServletRequest request,
        @ApiParam(value = "用户ID", required = true,
        defaultValue = "8327623e610445b1")@RequestParam("userId")String userId){
        logger.info("用户id是  " + userId);
        //logger.info(HbaseUserInfo.allUserId.toString());
        // 后期在此处判断用户是否存在,在mysql中唯一索引查询,
        if (!HbaseUserInfo.allUserId.contains(userId)){ // 用户id不存在
            throw new SelfParamErrorException("用户id不存在,请检查是否输入错误");
        }
        String redisKey = request.getRequestURI() + userId;
        byte[] cache = jedis.get(redisKey.getBytes());
        if (cache != null ){
            return (List<UserHobbyDTO>) SerializeUtil.unserialize(cache);
        }
        List<UserHobbyDTO> lists =  hbaseUserBO.listUserHobbyByUserId(userId);
        jedis.set(redisKey.getBytes(), SerializeUtil.serialize(lists));

        return lists;
    }

    @ApiOperation(value = "用户使用app时长", notes = "根据用户id,日期 获取他使用过的app,以及" +
        "使用的开始时间, 使用时长")
    @RequestMapping(value = "listUseHistoryAppTimeByUserId", method = RequestMethod.GET)
    public List<UserHistoryAppDTO> listUseHistoryAppTimeByUserId(HttpServletRequest request,
        @ApiParam(value = "用户id", required = true, defaultValue = "8327623e610445b1")
        @RequestParam String userId, @ApiParam(value = "日期,格式为yyyy-MM-dd", required = true,
        defaultValue = "2018-04-30")@RequestParam("date")String date){
        Matcher matcher = pattern.matcher(date);
        if (!matcher.matches()){
            throw new SelfParamErrorException("日期格式错误");
        }
        if (!HbaseUserInfo.allUserId.contains(userId)){
            throw new SelfParamErrorException("用户id不存在,请检查是否输入错误");
        }
        return hbaseUserBO.listUseHistoryAppTimeByUserId(userId, date);
    }

    @ApiOperation(value = "根据截至日期,查看用户最近一星期使用收集的时长状况", notes
            = " 参数是日期格式和用户id" )
    @RequestMapping(value = "listUseTimeLength", method = RequestMethod.GET)
    public UseTimeLength listUseTimeLength(HttpServletRequest request,
            @ApiParam(value = "截至日期,格式是yyyy-MM-dd",
        required = true, defaultValue = "2018-02-10")@RequestParam("end")String end,
        @ApiParam(value = "用户id", required = true, defaultValue = "e3c0773a9de4d3a8")
        @RequestParam("userid") String userid){
        Matcher matcher = pattern.matcher(end);
        if (!matcher.matches()){
            throw new SelfParamErrorException("日期格式错误");
        }
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        Calendar calendar = Calendar.getInstance();
        Date date = null;
        try {
            date = sdf.parse(end);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        calendar.setTime(date);
        calendar.add(Calendar.DAY_OF_MONTH, -7);
        return hbaseUserBO.listUseTimeLength(userid, sdf.format(calendar.getTime()), end);
    }
    //@ApiOperation(value = "分页查询所有用户信息", notes = "分页查询所有用户信息")

}
