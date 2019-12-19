package spring.datasimulate.datasimulate.hbase.hbasedao;

import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.hbase.HBaseConfiguration;
import org.apache.hadoop.hbase.KeyValue;
import org.apache.hadoop.hbase.TableName;
import org.apache.hadoop.hbase.client.*;
import org.apache.hadoop.hbase.util.Bytes;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;
import spring.datasimulate.datasimulate.hbase.hbaseutils.family.AppUsageFamlies;
import spring.datasimulate.datasimulate.hbase.mysql.NumUtil;
import spring.datasimulate.datasimulate.hbase.mysql.dao.ShowUserDAO;
import spring.datasimulate.datasimulate.startintialize.HbaseUserInfo;

import java.io.IOException;
import java.util.List;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.LinkedBlockingDeque;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.TimeUnit;

@Component
public class HbaseTemple implements CommandLineRunner{
    private static Configuration conf = HBaseConfiguration.create();
    private static ExecutorService executorService = null;
    @Autowired
    private ShowUserDAO showUserDAO;

    @Override
    public void run(String... strings) throws Exception {
      /* conf.set("hbase.rootdir", "hdfs://localhost:8020/hbase");//本地单节点的测试
        conf.set("hbase.zookeeper.quorum", "localhost");
*/

       conf.set("hbase.rootdir","hdfs://linux:8020/hbase");
        conf.set("hbase.zookeeper.quorum", "linux:2181"); // hbase集群链接
        System.out.println("初始化配置");
       /* conf.setInt("hbase.rpc.timeout", NumUtil.CONNECTION_TIME);
        conf.setInt("hbase.client.operation.timeout", NumUtil.CONNECTION_TIME);
        conf.setInt("hbase.client.scanner.timeout.period", NumUtil.CONNECTION_TIME);
*/
        executorService = new ThreadPoolExecutor(200, 5000,
                10, TimeUnit.MINUTES, new LinkedBlockingDeque<Runnable>());


        List<String> userIds = showUserDAO.listAllUserID();
        HbaseUserInfo.allUserId.addAll(userIds);
        System.out.println("项目初始化mysql部分数据  userid");
        //System.out.println(HbaseUserInfo.allUserId.toString());
    }

    public Result listOneFamily(String tableName, String rowKey,
                                String family) {
        Connection connection = this.getConnection();
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
    public Result getCellData(String tableName, String rowKey, String familyName, String columnName) {
        Connection connection = this.getConnection();
        Table table = null;
        try {
            table = connection.getTable(TableName.valueOf(tableName));
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
        try {
            table.close();
            connection.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return result;
    }
    public Connection getConnection()   {
        Connection connection = null;
        try {
            connection = ConnectionFactory.createConnection(conf);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return connection;
    }
    public Admin getAdmin(){
        Connection connection = null;
        Admin admin = null;
        try {
            connection = ConnectionFactory.createConnection(conf, executorService);
            admin = connection.getAdmin();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return admin;
    }

}
