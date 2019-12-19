package spring.datasimulate.datasimulate.hbase.hbaseutils;

import org.omg.PortableInterceptor.SYSTEM_EXCEPTION;
import redis.clients.jedis.Jedis;
import spring.datasimulate.datasimulate.hbase.HbaseConstant;
import spring.datasimulate.datasimulate.redis.SerializeUtil;

import java.util.concurrent.locks.ReentrantLock;

public class RedisOpearObject {
    private static Jedis jedis = new Jedis(HbaseConstant.REDIS_HOST, HbaseConstant.REDIS_PORT);
    private static ReentrantLock lock = new ReentrantLock();

    public static Object getDataInRedis(String...  methodAllParam){
        // 所有的参数组成字符串作为redis的主键
        StringBuffer buffer = new StringBuffer();
        for (String param : methodAllParam){
            buffer.append(param);
        }

        lock.lock();
        byte[] cache = jedis.get(buffer.toString().getBytes());
        lock.unlock();

        //System.out.println("redis  的key 是   "  + buffer.toString());
        if (cache == null) return null;
        return SerializeUtil.unserialize(cache);
    }
    public static void setDataToRedis(Object object, String... allParam){
        StringBuffer buffer = new StringBuffer();
        for (String param : allParam){
            System.out.println(param);
            buffer.append(param);
        }
        /*System.out.println(buffer.toString());
        System.out.println(jedis == null);
        System.out.println(object.toString());
        System.out.println(buffer.toString().getBytes());
        System.out.println(SerializeUtil.serialize(object));*/
        byte[] objectByte = SerializeUtil.serialize(object);
        if (object != null ){
            lock.lock();
            jedis.set(buffer.toString().getBytes(), objectByte);
            lock.unlock();
        }
    }
}
