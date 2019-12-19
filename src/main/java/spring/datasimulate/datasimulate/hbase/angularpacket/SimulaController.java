package spring.datasimulate.datasimulate.hbase.angularpacket;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import spring.datasimulate.datasimulate.hbase.hbaseutils.DateUtil;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.*;
import java.util.List;

@Api(description = "月份时间段获取")
@RestController
public class SimulaController {
    private static SimpleDateFormat format = new SimpleDateFormat("yyyy-MM");
    @RequestMapping(value = "/listAllMonths" ,method = RequestMethod.GET)
    @ApiOperation(value = "获取有数据的月份", notes = "读取hbase中有数据的月份")
    public List<String> listAllMonths() throws ParseException {
       /* Long curTimeStamp = System.currentTimeMillis();
        String end = format.format(curTimeStamp);
        String [] yearMonth = end.split("-");
        int year = Integer.valueOf(yearMonth[0]) - 1;
        String start = year + "-" + yearMonth[1];
        List<java.util.Date> dates = null;
        try {
            dates = DateUtil.getDatesBetweenTwoDate(format.parse(start), format.parse(end));
        } catch (ParseException e) {
            e.printStackTrace();
        }
        System.out.println(start + "   " + dates.size());
        List<String> months = new ArrayList<>();
        for (int i = 0; i < dates.size(); i ++){
            months.add(format.format(dates.get(i)));
        }
*/
        Calendar calendar = Calendar.getInstance();
        List<String> list = new ArrayList<>();
        for (int i = 0; i < 13; i++) {
            calendar.add(Calendar.MONTH, -1);
            String month;
            if (calendar.get(Calendar.MONTH) > 8)
                month = calendar.get(Calendar.MONTH) + 1 + "";
            else
                month = "0" + (calendar.get(Calendar.MONTH) + 1);
            String s = calendar.get(Calendar.YEAR) + "-" + month;
            list.add(s);
        }
       // list.forEach(System.out::println);
        return list;
    }
}
