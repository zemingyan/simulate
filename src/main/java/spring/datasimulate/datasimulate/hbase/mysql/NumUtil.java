package spring.datasimulate.datasimulate.hbase.mysql;

import java.util.ArrayList;
import java.util.List;

public class NumUtil {
    public static final Integer TEN = 10;
    public static final Integer CONNECTION_TIME = 1000 * 2000;


    public static List<Integer> apps = new ArrayList<>(30);
    static {
        String ids = "8 12 16 30 35 40 51 58 55  61 68 73 72 80 84 87" +
                " 92 98 115 127 143 144 145 146 155 156 186 213  299";
        String[] allId = ids.split(" ");
        for (String id: allId){
            if (id != null && !id.equals("")){
                apps.add(Integer.valueOf(id));
            }
        }
    }
}
