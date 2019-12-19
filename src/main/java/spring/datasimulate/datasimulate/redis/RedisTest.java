package spring.datasimulate.datasimulate.redis;

import redis.clients.jedis.Jedis;

public class RedisTest {

    public static void main(String[] args){

        Jedis jedis = new Jedis("esip", 6379);
        jedis.set("abc", "abc");
        Person p= new Person(1, "zhangsan");
        jedis.set("zs".getBytes(), SerializeUtil.serialize(p));
        System.out.println(new String(jedis.get("abc")));

        System.out.println(jedis.get("zss".getBytes()) == null);
    }
}
