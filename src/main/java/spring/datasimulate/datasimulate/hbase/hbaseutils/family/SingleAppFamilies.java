package spring.datasimulate.datasimulate.hbase.hbaseutils.family;

import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;

/**
 *  create 'SINGLE_APP','duration','week_period','click_num','day_period','user','version'
 */
public class SingleAppFamilies {
    public static ConcurrentMap<String, Integer> familyIndex = null;
    public static final String tableName = "SINGLE_APP";
    public static final String USER = "user";
    public static final String CLICK_NUM = "click_num";
    public static final String DURATION = "duration";
    static {
        familyIndex = new ConcurrentHashMap<>(10);
        familyIndex.put("duration", 0);
        familyIndex.put("week_period", 1);
        familyIndex.put("click_num", 2);
        familyIndex.put("day_period", 3);
        familyIndex.put("user", 4);
        familyIndex.put("version", 5);
    }

}