package spring.datasimulate.datasimulate.hbase.hbasedao;

import org.apache.hadoop.hbase.KeyValue;
import org.apache.hadoop.hbase.TableName;
import org.apache.hadoop.hbase.client.*;
import org.apache.hadoop.hbase.util.Bytes;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Repository
public class AppVersionDAO {
    @Autowired
    private HbaseTemple hbaseTemple;

    public Result listOneFamily(String tableName, String rowKey,
                                String family) {
        Connection connection = hbaseTemple.getConnection();
        Table table = null;
        Get get = new Get(rowKey.getBytes());
        get.addFamily(family.getBytes());
        Result result = null;
        try {
            table = connection.getTable(TableName.valueOf(tableName));
            result = table.get(get);
            System.out.println(result.size());
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

    public List<String> listVersionByPacket(String tableName, String rowKey, String familyName) {
        Get get = new Get(Bytes.toBytes(rowKey));
        get.addFamily(Bytes.toBytes(familyName));
        Result result = null;
        Connection connection = null;
        Table table = null;
        try {
            connection = hbaseTemple.getConnection();
            table = connection.getTable(TableName.valueOf(tableName));
        } catch (IOException e) {
            e.printStackTrace();
        }
        try {
            result = table.get(get);
        } catch (IOException e) {
            e.printStackTrace();
        }
        List<String> appVersion = new ArrayList<>();
        if (result == null || result.list() == null || result.list().size() == 0) {
            return appVersion;
        }
        for (KeyValue kv : result.list()) {
            String version = Bytes.toString(kv.getValue());

            appVersion.add(version);
        }
        try {
            table.close();
            connection.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return appVersion;
    }
}
