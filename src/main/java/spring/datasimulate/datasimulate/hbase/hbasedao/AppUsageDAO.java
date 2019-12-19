package spring.datasimulate.datasimulate.hbase.hbasedao;

import org.apache.hadoop.hbase.KeyValue;
import org.apache.hadoop.hbase.TableName;
import org.apache.hadoop.hbase.client.*;
import org.apache.hadoop.hbase.util.Bytes;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import spring.datasimulate.datasimulate.hbase.hbaseutils.family.AppUsageFamlies;

import java.io.IOException;

@Repository
public class AppUsageDAO {
    @Autowired
    private HbaseTemple hbaseTemple;
    public Integer getCellData(String rowKey, String familyName, String columnName) {
        Connection connection = hbaseTemple.getConnection();
        Table table = null;
        try {
            table = connection.getTable(TableName.valueOf(AppUsageFamlies.tableName));
        } catch (IOException e) {
            e.printStackTrace();
        }
        Get get = new Get(Bytes.toBytes(rowKey));
        //get.addFamily(Bytes.toBytes(familyName));
        get.addColumn(Bytes.toBytes(familyName), Bytes.toBytes(columnName)); // 获取指定列族和列修饰符对应的列
        Result result = null;
        try {
            result = table.get(get);
        } catch (IOException e) {
            e.printStackTrace();
        }
        Integer cnt = 0;
        if (result.list() == null || result.list().size() == 0) return cnt;
        for (KeyValue kv : result.list()) {
            System.out.println("family:" + Bytes.toString(kv.getFamily()));
            System.out.println("qualifier:" + Bytes.toString(kv.getQualifier()));
            System.out.println("value:" + Bytes.toString(kv.getValue()));
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
}
