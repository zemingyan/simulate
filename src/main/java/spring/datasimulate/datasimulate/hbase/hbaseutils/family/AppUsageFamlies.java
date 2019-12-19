package spring.datasimulate.datasimulate.hbase.hbaseutils.family;

import java.util.HashMap;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;

/**
 * create 'APP_USAGE','1','2','3','4','5'
 */
public class AppUsageFamlies {
    public static ConcurrentMap<String, Integer> familyToIndex = null;
    public static String tableName = "APP_USAGE";
    static {
        familyToIndex = new ConcurrentHashMap<>(10);

        familyToIndex.put("1", 0);
        familyToIndex.put("2", 1);
        familyToIndex.put("3", 2);
        familyToIndex.put("4", 3);
        familyToIndex.put("5", 4);

    }

}
