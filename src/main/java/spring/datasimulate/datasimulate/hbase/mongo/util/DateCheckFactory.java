package spring.datasimulate.datasimulate.hbase.mongo.util;
import spring.datasimulate.datasimulate.exceptions.SelfParamErrorException;

import java.util.Date;
public class DateCheckFactory {
    // 1,2,3分别表示一天,一周,一月前
    public static Date getBeforeDate(Integer flag, Date curDate){
        if (flag == 1){
            return MongoTimeUtil.getOneDayBeforeDate(curDate);
        }
        if (flag == 2){
            return MongoTimeUtil.getOneWeekBeforeDate(curDate);
        }
        if (flag == 3){
            return MongoTimeUtil.getOneMonthBeforeDate(curDate);
        }
        throw new SelfParamErrorException("没有指定的日期");
    }
}
