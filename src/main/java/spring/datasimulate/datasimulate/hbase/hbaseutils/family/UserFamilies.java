package spring.datasimulate.datasimulate.hbase.hbaseutils.family;

import org.omg.CORBA.PUBLIC_MEMBER;
import org.springframework.data.domain.PageRequest;

import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;

/**
 * hbase org.apache.hadoop.hbase.mapreduce.Driver import stu1  file://本地路径
 * create 'USER','usage_history','usage_statistics','usage_duration','hobby'
 */
public class UserFamilies {
    public static ConcurrentMap<String, Integer> familyIndex = null;
    public static final String TABLE_NAME = "USER";
    public static final String USAGE_HISTORY = "usage_history";
    public static final String USAGE_STATISTICS = "usage_statistics";
    public static final String USAGE_DURATION = "usage_duration";
    public static final String USAGE_HOBBY= "hobby";
    static {
        familyIndex = new ConcurrentHashMap<>(10);
        familyIndex.put("usage_history", 0);
        familyIndex.put("usage_statistics", 1);
        familyIndex.put("usage_duration", 2);
        familyIndex.put("hobby", 3);
    }
}
