package spring.datasimulate.datasimulate.hbase.hbasedao;

import org.apache.hadoop.hbase.TableName;
import org.apache.hadoop.hbase.client.Connection;
import org.apache.hadoop.hbase.client.Get;
import org.apache.hadoop.hbase.client.Result;
import org.apache.hadoop.hbase.client.Table;
import org.apache.hadoop.hbase.util.Bytes;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.io.IOException;

@Repository
public class HbaseUserDAO {
    @Autowired
    private HbaseTemple hbaseTemple;
    public HbaseTemple getHbaseTemple(){
        return hbaseTemple;
    }

    public Result listOneFamily(String tableName, String rowKey,
                                String family) {
        Connection connection = getHbaseTemple().getConnection();
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
