package spring.datasimulate.datasimulate.hbase.hbasecontroller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.apache.hadoop.yarn.exceptions.NMNotYetReadyException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import spring.datasimulate.datasimulate.exceptions.SelfParamErrorException;
import spring.datasimulate.datasimulate.hbase.hbase.dto.vo.MultipleAppMarketRateDTO;
import spring.datasimulate.datasimulate.hbase.hbase.dto.vo.MultipleAppTypeRate;
import spring.datasimulate.datasimulate.hbase.hbase.dto.vo.MultipleAppVisitUserDTO;
import spring.datasimulate.datasimulate.hbase.hbase.dto.vo.innerunit.MultipleDataVO;
import spring.datasimulate.datasimulate.hbase.hbase.dto.vo.innerunit.MultipleInnerRank;
import spring.datasimulate.datasimulate.hbase.hbase.dto.vo.innerunit.MultipleNameAndCnt;
import spring.datasimulate.datasimulate.hbase.hbase.dto.vo.rankzz.RankZzInterface;
import spring.datasimulate.datasimulate.hbase.hbasebo.MultipleAppBO;
import spring.datasimulate.datasimulate.hbase.hbaseutils.RedisOpearObject;
import spring.datasimulate.datasimulate.hbase.mysql.NumUtil;
import spring.datasimulate.datasimulate.hbase.mysql.bo.ShowAppBO;

import javax.servlet.http.HttpServletRequest;
import java.text.DecimalFormat;
import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * 此处缓存最好是针对某一个app的时间段，但是这里效率并不高，
 * 因为只有日期一样的时候，缓存的数据才有可能命中
 */
@Api(description = "hbase中查询多个app数据")
@RestController
@RequestMapping(value = "/multiple")
public class MultipleAppController {
    @Autowired
    private ShowAppBO showAppBO;
    @Autowired
    private MultipleAppBO multipleAppBO;
    private Pattern pattern = Pattern.compile("(\\d){4}-(\\d){2}-(\\d){2}");


    @ApiOperation(value = "根据多个app的名字,查询出每个app的访问量", notes = "参数是一个数组" +
            "里面装的是app名字的数组,  在某个时间戳内的访问量")
    @RequestMapping(value = "listAppVisitByAppNames", method = RequestMethod.GET)
    public MultipleDataVO listAppVisitByAppNames(HttpServletRequest request,
        @ApiParam(value = "app名字的数组,格式是 Integer,Integer,Integer",
        defaultValue = "1,2", required = true) @RequestParam(value = "appNames")
        List<Integer> appId, @ApiParam(value = "开始时间,格式yyyy-MM-dd", defaultValue = "2018-01-03",
            required = true) @RequestParam("start") String start, @ApiParam(value = "截止时间",
            required = true, defaultValue = "2018-02-10") @RequestParam("end") String end) {
        if (!checkDateFormat(start) || !checkDateFormat(end)) {
            throw new SelfParamErrorException("日期格式错误");
        }
        if (appId.size() == 0) {
            return new MultipleDataVO();
        }

        System.out.println("request的请求方法是   " + request.getRequestURI());

       /* Object cache = RedisOpearObject.getDataInRedis(request.getRequestURI(), appId.toString(), start, end);
        if (cache != null){
            return (MultipleDataVO) cache;
        }
*/

        List<MultipleNameAndCnt> multipleNameAndCnts = multipleAppBO
                .listAppVisitByAppNames(start, end, appId);
        MultipleDataVO multipleDataVO = new MultipleDataVO();
        for (int i = 0; i < multipleNameAndCnts.size(); i++) {
            multipleDataVO.getAppNames().add(multipleNameAndCnts.get(i).getName());
            multipleDataVO.getCount().add(multipleNameAndCnts.get(i).getValue());
        }

        //RedisOpearObject.setDataToRedis(multipleDataVO, request.getRequestURI(), appId.toString(), start, end);

        return multipleDataVO;
    }

    @ApiOperation(notes = "多个app查看市场占比", value = "参数是一个app名字的list,还有起止日期")
    @RequestMapping(value = "listAppsMarketRateByDateAndAppName", method = RequestMethod.GET)
    public MultipleAppMarketRateDTO listAppsMarketRateByDateAndAppName(HttpServletRequest request,
        @ApiParam(value = "接口id组成的数组", defaultValue = "30,68,87", required = true)
        @RequestParam("appIds")List<Integer> appIds, @ApiParam(value = "开始时间,格式yyyy-MM-dd",
        defaultValue = "2018-01-03", required = true) @RequestParam("start") String start,
         @ApiParam(value = "截止时间", required = true, defaultValue = "2018-02-10")
         @RequestParam("end") String end){
        if (!checkDateFormat(start) || !checkDateFormat(end)){
            throw new SelfParamErrorException("日期格式错误");
        }
        System.out.println("request的请求方法是   " + request.getRequestURI());
        Object cache = RedisOpearObject.getDataInRedis(request.getRequestURI(), appIds.toString(), start, end);
        if (cache != null){
            return (MultipleAppMarketRateDTO) (cache);
        }
        MultipleAppMarketRateDTO multipleAppMarketRateDTO =  multipleAppBO
                .listAppsMarketRateByDateAndAppName(appIds, start, end);

        RedisOpearObject.setDataToRedis(multipleAppMarketRateDTO, request.getRequestURI(), appIds.toString(),
                start, end);
        return multipleAppMarketRateDTO;
    }
    @ApiOperation(notes = "查看多个app类型数目", value = "查看app类型数目")
    @RequestMapping(value = "listAppsTypeRate", method = RequestMethod.GET)
    public MultipleAppTypeRate listAppsTypeRate(HttpServletRequest request){

        Object cache = RedisOpearObject.getDataInRedis(request.getRequestURI());
        if (cache != null){
            return (MultipleAppTypeRate) cache;
        }

        MultipleAppTypeRate multipleAppTypeRate = multipleAppBO.listAppsTypeRate();
        RedisOpearObject.setDataToRedis(multipleAppTypeRate, request.getRequestURI());

        return multipleAppTypeRate;
    }
    @ApiOperation(notes = "查看多个app类型比例", value = "查看app类型比例")
    @RequestMapping(value = "listAppsTypeNumberRate", method = RequestMethod.GET)
    public List<MultipleInnerRank> listAppsTypeNumberRate(HttpServletRequest request){

        MultipleAppTypeRate multipleAppTypeRate = multipleAppBO.listAppsTypeRate();
        List<MultipleNameAndCnt> lists = multipleAppTypeRate.getDetailData();
        List<MultipleInnerRank> ranks = new ArrayList<>(lists.size());
        double total = 0D;
        for (MultipleNameAndCnt mna : lists){
            total += mna.getValue();
        }
        DecimalFormat decimalFormat = new DecimalFormat("#.##");
        for (int i = 0; i < lists.size(); i ++){
            MultipleInnerRank multipleInnerRank = new MultipleInnerRank();
            multipleInnerRank.setId( i + 1);
            multipleInnerRank.setName(lists.get(i).getName());
            String rate = decimalFormat.format(lists.get(i).getValue() * 100/total);
            multipleInnerRank.setAvg(rate + "%");
            ranks.add(multipleInnerRank);
        }
        return ranks;
    }


    @ApiOperation(value = "数据比对接口，根据多个app的名字和时间段,查询出每个app的访问量", notes = "参数是一个数组" +
            "里面装的是app id的数组,  在某个时间戳内的访问量")
    @RequestMapping(value = "listAppUserNumberByAppIds", method = RequestMethod.GET)
    public MultipleAppVisitUserDTO listAppUserNumberByAppIds(HttpServletRequest request,
       @ApiParam(value = "app名字的数组,格式是 Integer,Integer,Integer",
       defaultValue = "1,2", required = true) @RequestParam(value = "appNames")
       List<Integer> appId, @ApiParam(value = "开始时间,格式yyyy-MM-dd", defaultValue = "2018-01-03",
            required = true) @RequestParam("start") String start, @ApiParam(value = "截止时间",
            required = true, defaultValue = "2018-02-10") @RequestParam("end") String end) {
        if (!checkDateFormat(start) || !checkDateFormat(end)) {
            throw new SelfParamErrorException("日期格式错误");
        }
        if (appId.size() == 0) {
            return new MultipleAppVisitUserDTO();
        }
        System.out.println("request的请求方法是   " + request.getRequestURI());
        Object cache = RedisOpearObject.getDataInRedis(request.getRequestURI(), appId.toString(), start, end);
        if (cache != null){
            return (MultipleAppVisitUserDTO) cache;
        }

        MultipleAppVisitUserDTO multipleAppVisitUserDTO = multipleAppBO.
                listAppUserNumberByAppIds(appId, start, end);

        RedisOpearObject.setDataToRedis(multipleAppVisitUserDTO, request.getRequestURI(), appId.toString(),
                start, end);

        return multipleAppVisitUserDTO;
    }


    @ApiOperation(value = "APP各类排名数目", notes = "参数一个STRING,表示类型, 以及一个指标的参数," +
            "1,2,3 分别表示app访问量,市场占有率,数据比对")
    @RequestMapping(value = "listAppAppointRankByType", method = RequestMethod.GET)
    public RankZzInterface listAppAppointRankByType(HttpServletRequest request,
                                                    @ApiParam(value = "app类型,一个字符串", defaultValue = "全部", required = true)
        @RequestParam("type") String type, @ApiParam(value = "开始时间,格式yyyy-MM-dd",
        defaultValue = "2018-01-03", required = true) @RequestParam("start") String start,
                                                    @ApiParam(value = "截止时间", required = true, defaultValue = "2018-01-10")
        @RequestParam("end") String end, @ApiParam(value = "查询指标的参数", required = true,
        defaultValue = "1")@RequestParam("flag")Integer flag){
        List<String> allType = showAppBO.listAppType();
        if (!allType.contains(type) && !"全部".equals(type)){
            throw new SelfParamErrorException("不存在该类型");
        }
        Matcher startMatcher = pattern.matcher(start);
        Matcher endMatcher = pattern.matcher(end);
        if (!startMatcher.matches() || !endMatcher.matches()){
            throw new SelfParamErrorException("日期格式错误");
        }


        Object cache = RedisOpearObject.getDataInRedis(request.getRequestURI(),
                flag + "", type, start, end);
        if (cache != null){
            return (RankZzInterface) cache;
        }

        List<Integer> appIds = new ArrayList<>(20);
        Random random  = new Random();
        Set<Integer> quitRepeat = new HashSet<>();
        int value = 0;
        int interval = 1;
        int length = NumUtil.apps.size();
        for (int i = 0; quitRepeat.size() < 10; i ++){
            value = random.nextInt(length);
            value += interval ++;

            value = NumUtil.apps.get(value % length);
            if (quitRepeat.contains(value)){
                continue;
            }
            appIds.add(value);
            quitRepeat.add(value);
        }

        RankZzInterface multipleInnerRanks = multipleAppBO.listAppAppointRankByType(appIds,
                start, end, flag);
       RedisOpearObject.setDataToRedis(multipleInnerRanks, request.getRequestURI(), type,
               flag + "",start, end);
        return multipleInnerRanks;
    }



    @Deprecated
    @ApiOperation(value = "类型中APP数目占比，排名", notes = "参数一个STRING,表示类型")
    @RequestMapping(value = "listAppRankByType", method = RequestMethod.GET)
    public List<MultipleInnerRank> listAppRankByType(HttpServletRequest request,
        @ApiParam(value = "app类型,一个字符串", defaultValue = "全部", required = true)
        @RequestParam("type") String type){

        List<String> allType = showAppBO.listAppType();
        if (!allType.contains(type) && !"全部".equals(type)){
            throw new SelfParamErrorException("不存在该类型");
        }
        if ("全部".equals(type)){
            return multipleAppBO.listAllAppRank(0);
        }
        return multipleAppBO.listAppRankByType(type, 0);
    }
    private boolean checkDateFormat(String date) {
        Matcher matcher = pattern.matcher(date);
        return matcher.matches();
    }


}
