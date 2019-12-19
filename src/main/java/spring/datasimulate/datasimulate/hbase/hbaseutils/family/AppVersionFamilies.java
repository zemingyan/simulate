package spring.datasimulate.datasimulate.hbase.hbaseutils.family;

import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;

/**
 * create 'APP_VERSION','click_num'
 */
public class AppVersionFamilies {
    public static String tableName = "APP_VERSION";
    public static String CLICK_NUM = "click_num";
    public static ConcurrentMap<String, Integer> familyToIndex = null;
    static {
        familyToIndex = new ConcurrentHashMap<>();
        familyToIndex.put("click_num", 0);
    }
}
