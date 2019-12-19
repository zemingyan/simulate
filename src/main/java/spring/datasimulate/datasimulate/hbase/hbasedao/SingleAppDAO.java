package spring.datasimulate.datasimulate.hbase.hbasedao;

import org.apache.hadoop.hbase.KeyValue;
import org.apache.hadoop.hbase.TableName;
import org.apache.hadoop.hbase.client.Connection;
import org.apache.hadoop.hbase.client.Get;
import org.apache.hadoop.hbase.client.Result;
import org.apache.hadoop.hbase.client.Table;
import org.apache.hadoop.hbase.util.Bytes;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import spring.datasimulate.datasimulate.hbase.hbase.dto.vo.AppClickNumVO;
import spring.datasimulate.datasimulate.hbase.hbaseutils.family.AppUsageFamlies;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * 可以返回一个结果集合，提高代码的利用率
 */
@Repository
public class SingleAppDAO {
    @Autowired
    private HbaseTemple hbaseTemple;

    public Integer getDayPeriodCountByHour(String tableName, String rowKey, String familyName,
        String columnName) {
        Connection connection = hbaseTemple.getConnection();
        Table table = null;
        try {
            table = connection.getTable(TableName.valueOf(tableName));
        } catch (IOException e) {
            e.printStackTrace();
        }
        Get get = new Get(Bytes.toBytes(rowKey));
        // 获取指定列族和列修饰符对应的列
        get.addColumn(Bytes.toBytes(familyName), Bytes.toBytes(columnName));
        Result result = null;
        try {
            result = table.get(get);
        } catch (IOException e) {
            e.printStackTrace();
        }
        Integer cnt = 0;
        if (result.list() == null || result.list().size() == 0) return cnt;
        for (KeyValue kv : result.list()) {
           /* System.out.println("family:" + Bytes.toString(kv.getFamily()));
            System.out.println("qualifier:" + Bytes.toString(kv.getQualifier()));
            System.out.println("value:" + Bytes.toString(kv.getValue()));*/
            cnt = Integer.valueOf(Bytes.toString(kv.getValue()));
        }
        try {
            table.close();
            connection.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return cnt;
    }

    public Result listOneFamily(String tableName, String rowKey,
        String family) {
        Connection connection = hbaseTemple.getConnection();
        Table table = null;
        try {
            table = connection.getTable(TableName.valueOf(tableName));
        } catch (IOException e) {
            e.printStackTrace();
        }
        Get get = new Get(Bytes.toBytes(rowKey));
        get.addFamily(family.getBytes());
        Result result = null;
        try {
            result = table.get(get);
        } catch (IOException e) {
            e.printStackTrace();
        }
        try {
            table.close();
            connection.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return result;
    }
}
