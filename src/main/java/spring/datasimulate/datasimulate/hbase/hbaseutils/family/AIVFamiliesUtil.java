package spring.datasimulate.datasimulate.hbase.hbaseutils.family;

import org.apache.hadoop.util.hash.Hash;

import java.util.HashMap;
import java.util.TreeMap;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;

/**
 * create 'AIV','brand','model','system_version','ISP','net_status','resolution'
 */
public class  AIVFamiliesUtil { //  AIV
    public static ConcurrentMap<String, Integer> columnFamilys =
        new ConcurrentHashMap<>(10);
    public static Integer columnLength = 0;
    static {
        columnFamilys.put("brand",0);
        columnFamilys.put("model",1);
        columnFamilys.put("system_version",2);
        columnFamilys.put("ISP", 3);
        columnFamilys.put("net_status", 4);
        columnFamilys.put("resolution", 5);

        columnLength = columnFamilys.size();
    }
}
