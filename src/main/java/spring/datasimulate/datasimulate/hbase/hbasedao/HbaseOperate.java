package spring.datasimulate.datasimulate.hbase.hbasedao;

import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.hbase.*;
import org.apache.hadoop.hbase.client.*;
import org.apache.hadoop.hbase.util.Bytes;
import org.junit.jupiter.api.Test;
import spring.datasimulate.datasimulate.annotation.MyComponent;
import spring.datasimulate.datasimulate.hbase.mysql.NumUtil;
import spring.datasimulate.datasimulate.hbase.mysql.dao.ShowAppVersionDAO;
import spring.datasimulate.datasimulate.hbase.mysql.dataooject.ShowAppDO;
import spring.datasimulate.datasimulate.hbase.mysql.dataooject.ShowAppVersionDO;
import sun.reflect.generics.tree.BaseType;


import java.io.IOException;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.concurrent.*;

@MyComponent
public class HbaseOperate {
    // 根据path中的hadoop_home去寻找核心文件，如果没有配置就要去classpath下手动加入
    private static Configuration conf = HBaseConfiguration.create();
    private static Admin admin;
    private static ExecutorService executorService = null;

    static {
       /* conf.set("hbase.rootdir", "hdfs://localhost:8020/hbase");//本地单节点的测试
        conf.set("hbase.zookeeper.quorum", "localhost");
*/
        conf.set("hbase.rootdir","hdfs://linux:8020/hbase");
        conf.set("hbase.zookeeper.quorum", "linux:2181"); // hbase集群链接

        /*conf.setInt("hbase.rpc.timeout", NumUtil.CONNECTION_TIME);
        conf.setInt("hbase.client.operation.timeout", NumUtil.CONNECTION_TIME);
        conf.setInt("hbase.client.scanner.timeout.period", NumUtil.CONNECTION_TIME);*/

        try {
            executorService = new ThreadPoolExecutor(200, 5000,
                    10, TimeUnit.MINUTES, new LinkedBlockingDeque<Runnable>());
            Connection connection = ConnectionFactory.createConnection(conf);
            admin = connection.getAdmin();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }


    public void createTable(String tableName, String... columnFamily) {
        TableName tableNameObj = TableName.valueOf(tableName);
        try {
            if (this.admin.tableExists(tableNameObj)) {
                System.out.println("Table : " + tableName + " already exists !");
            } else {
                HTableDescriptor td = new HTableDescriptor(tableNameObj);
                int len = columnFamily.length;
                for (int i = 0; i < len; i++) {
                    HColumnDescriptor family = new HColumnDescriptor(columnFamily[i]);
                    td.addFamily(family);
                }
                admin.createTable(td);
                System.out.println(tableName + " 表创建成功！");
            }
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println(tableName + " 表创建失败！");
        }
    }

    @Test
    public void testCreateTable() {
        createTable("cross_history", "carinfo", "parkInfo", "deviceInfo");
    }

    public void delTable(String tableName) {
        TableName tableNameObj = TableName.valueOf(tableName);
        try {
            if (this.admin.tableExists(tableNameObj)) {
                admin.disableTable(tableNameObj);
                admin.deleteTable(tableNameObj);
                System.out.println(tableName + " 表删除成功！");
            } else {
                System.out.println(tableName + " 表不存在！");
            }
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println(tableName + " 表删除失败！");
        }
    }

    @Test
    public void testDelTable() {
        delTable("mytable");
    }

    public void insertRecord(String tableName, String rowKey, String columnFamily, String qualifier, String value) {
        try {
            Connection connection = ConnectionFactory.createConnection(conf);
            Table table = connection.getTable(TableName.valueOf(tableName));
            Put put = new Put(rowKey.getBytes());

            put.addColumn(Bytes.toBytes(columnFamily), Bytes.toBytes(qualifier), Bytes.toBytes(value));
            put.addColumn(Bytes.toBytes(columnFamily), Bytes.toBytes(qualifier), Bytes.toBytes(value));
            table.put(put);
            table.close();
            connection.close();
            System.out.println(tableName + " 表插入数据成功！");
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println(tableName + " 表插入数据失败！");
        }
    }

    @Test
    public void testInsertRecord() {
        ArrayList arrayList = null;
        insertRecord("cross_history", "001", "carinfo", "plateNo", "浙A12345");
        insertRecord("cross_history", "002", "carinfo", "plateNo", "浙A12345");
        insertRecord("cross_history", "003", "carinfo", "plateNo", "浙A12345");
        insertRecord("cross_history", "001", "parkInfo", "parkName", "中兴花园");
        insertRecord("cross_history", "002", "parkInfo", "parkName", "中兴花园");
        insertRecord("cross_history", "003", "parkInfo", "parkName", "中兴花园");
        insertRecord("cross_history", "001", "deviceInfo", "deviceInfo", "道闸");
        insertRecord("cross_history", "002", "deviceInfo", "deviceInfo", "道闸");
        insertRecord("cross_history", "003", "deviceInfo", "deviceInfo", "道闸");
    }

    public void deleteRecord(String tableName, String rowKey) {
        try {
            Connection connection = ConnectionFactory.createConnection(conf);
            Table table = connection.getTable(TableName.valueOf(tableName));
            Delete del = new Delete(rowKey.getBytes());
            table.delete(del);
            System.out.println(tableName + " 表删除数据成功！");
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println(tableName + " 表删除数据失败！");
        }
    }

    @Test
    public void testDeleteRecord() {
        deleteRecord("cross_history", "001");
    }

    public Result getOneRecord(String tableName, String rowKey) {
        try {
            HashSet<String> family = new HashSet<>(10);
            Connection connection = ConnectionFactory.createConnection(conf);
            Table table = connection.getTable(TableName.valueOf(tableName));
            Get get = new Get(rowKey.getBytes());
            Result rs = table.get(get);
            System.out.println(tableName + " 表获取数据成功！");

            System.out.println("rowkey为:" + rowKey);
            List<Cell> cells = rs.listCells();
            if (cells != null) {
                for (Cell cell : cells) {
                    family.add(new String(cell.getFamily()));
                    System.out.println(new String(cell.getFamily()) + " : " + new String(cell.getQualifier()) + " : " + new String(cell.getValue()));
                }
            }
            for (String msg : family){
                System.out.println(msg);
            }
            return rs;
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }
    }

    @Test
    public void testGetOneRecord() {
        getOneRecord("cross_history", "2332");
    }

    public Set<String> getAll(String tableName) {
        try {
            HashSet<String> hashSet = new HashSet();
            Long linkTime = System.currentTimeMillis();
            Connection connection = ConnectionFactory.createConnection(conf);
            Long start = System.currentTimeMillis();
            Table table = connection.getTable(TableName.valueOf(tableName));
            Scan scan = new Scan();
            ResultScanner scanner = table.getScanner(scan);
            List<Result> list = new ArrayList<Result>();
            for (Result r : scanner) {
                //System.out.println(r.toString());
                list.add(r);
                //System.out.println("查看逐渐   "+);
                List<Cell> cells = r.listCells();
                if (cells != null) {
                    for (Cell cell : cells) {
                        hashSet.add(new String(r.getRow()));
                        System.out.println(new String(r.getRow())+" : "+new String(cell.getFamily()) + " : " + new String(cell.getQualifier()) + " : " + new String(cell.getValue()));
                    }
                }
            }
            /*if (list != null && list.size() != 0){
                List<Cell> cells = list.get(0).listCells();
                if (cells != null) {
                    for (Cell cell : cells) {
                        System.out.println(new String(cell.getFamily()) + " : " + new String(cell.getQualifier()) + " : " + new String(cell.getValue()));
                    }
                }
            }*/
            scanner.close();
            Long end = System.currentTimeMillis();
            System.out.println(tableName + " 表获取所有记录成功！ 连接时间" + (start - linkTime)
                + "查询时间 " + (end - start));

            System.out.println();
            for (String msg : hashSet){
                System.out.println(msg);
            }
            return hashSet;
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }
    }

    @Test
    public void testGetAll() {
        System.out.println(getAll("AIV"));
        //System.out.println(getAll("cross_history"));

    }

    // 创建表
    public static void createTable(String tablename, String columnFamily) throws Exception {
        Connection connection = ConnectionFactory.createConnection(conf);
        Admin admin = connection.getAdmin();

        TableName tableNameObj = TableName.valueOf(tablename);

        if (admin.tableExists(tableNameObj)) {
            System.out.println("Table exists!");
            System.exit(0);
        } else {
            HTableDescriptor tableDesc = new HTableDescriptor(TableName.valueOf(tablename));
            tableDesc.addFamily(new HColumnDescriptor(columnFamily));
            admin.createTable(tableDesc);
            System.out.println("create table success!");
        }
        admin.close();
        connection.close();
    }

    // 删除表
    public static void deleteTable(String tableName) {
        try {
            Connection connection = ConnectionFactory.createConnection(conf);
            Admin admin = connection.getAdmin();
            TableName table = TableName.valueOf(tableName);
            admin.disableTable(table);
            admin.deleteTable(table);
            System.out.println("delete table " + tableName + " ok.");
        } catch (IOException e) {
            e.printStackTrace();
        }

    }

    // 插入一行记录
    public  void addRecord(String tableName, String rowKey, String family, String qualifier, String value) {
        try {
            Connection connection = ConnectionFactory.createConnection(conf);
            Table table = connection.getTable(TableName.valueOf(tableName));
            Put put = new Put(Bytes.toBytes(rowKey));
            put.addColumn(Bytes.toBytes(family), Bytes.toBytes(qualifier), Bytes.toBytes(value));
            put.addColumn(Bytes.toBytes(family), Bytes.toBytes(qualifier), Bytes.toBytes(value));
            table.put(put);
            table.close();
            connection.close();
            System.out.println("insert recored " + rowKey + " to table " + tableName + " ok.");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }//hbase.regionserver.lease.period
    public void getResultByFamily(String tableName, String rowKey,
        String familyName) throws IOException {
        Long linkTime = System.currentTimeMillis();
        Connection connection = ConnectionFactory.createConnection(conf);
        Table table = connection.getTable(TableName.valueOf(tableName));
        Long start = System.currentTimeMillis();
        Get get = new Get(Bytes.toBytes(rowKey));
        get.addFamily(Bytes.toBytes(familyName));
       // get.addColumn(Bytes.toBytes(familyName), Bytes.toBytes(columnName)); // 获取指定列族和列修饰符对应的列
        Result result = table.get(get);
        for (KeyValue kv : result.list()) {
            System.out.println("family:" + Bytes.toString(kv.getFamily()));
            System.out
                    .println("qualifier:" + Bytes.toString(kv.getQualifier()));
            System.out.println("value:" + Bytes.toString(kv.getValue()));
            System.out.println("Timestamp:" + kv.getTimestamp());
            System.out.println("-------------------------------------------");
        }
        Long end = System.currentTimeMillis();
        System.out.println("链接时间 " + (start - linkTime) + "查询时间 " + (end - start));
    }

    public List<ShowAppVersionDO> getShowAppVersionByFamily(String tableName, String rowKey,
                                                            String familyName) {
        Get get = new Get(Bytes.toBytes(rowKey));
        get.addFamily(Bytes.toBytes(familyName));
        Result result = null;
        Connection connection = null;
        Table table = null;
        try {
            connection = ConnectionFactory.createConnection(conf);
            table = connection.getTable(TableName.valueOf(tableName));
        } catch (IOException e) {
            e.printStackTrace();
        }
        try {
            result = table.get(get);
        } catch (IOException e) {
            e.printStackTrace();
        }
        List<ShowAppVersionDO> showAppVersionDOS = new ArrayList<>();
        for (KeyValue kv : result.list()) {
            String column = Bytes.toString(kv.getQualifier());
            String version = Bytes.toString(kv.getValue());
            ShowAppVersionDO showAppVersionDO = new ShowAppVersionDO();
            showAppVersionDO.setPacketName(rowKey);
            showAppVersionDO.setVersion(version);
            showAppVersionDOS.add(showAppVersionDO);
        }
        return showAppVersionDOS;
    }



    public static void main(String[] args) throws Exception {
        //HbaseOperate.createTable("hadooptesttable", "info");
        //HbaseTest.deleteTable("cross_history");
       /* Long start = System.currentTimeMillis();
        new HbaseOperate().getAll("APP_VERSION");
        Long end = System.currentTimeMillis();
        System.out.println("耗时  " + (end - start));*/
      /* new HbaseOperate().getResultByFamily("SINGLE_APP", "tv.danmaku.bili",
                "duration");*/
     /*  new HbaseOperate().getOneRecord("USER_GROUP",
               "2017-05-30");
       */
      //  new HbaseOperate().getOneRecord("APP_USAGE", "com.tencent.reading");
        new HbaseOperate().getResultByFamily("USER",
                "8327623e610445b1", "usage_duration");
      // new HbaseOperate().getOneRecord("SINGLE_APP", "com.tencent.reading");
       // new HbaseOperate().getOneRecord("AIV", "2018-02-23");
        //new HbaseOperate().getAll("SINGLE_APP");
        //new HbaseOperate().getOneRe
        // cord("USER", "b7764f1763caa497");
      // new HbaseOperate().getOneRecord("SINGLE_APP", "tv.danmaku.bili");
/*
     new HbaseOperate().getResultByFamily("SINGLE_APP", "tv.danmaku.bili"
                , "version");*/
       // new HbaseOperate().getOneRecord("APP_VERSION", "tv.danmaku.bili_2.0");

        //new HbaseOperate().getAll("APP_VERSION");
    }

}

// [HbaseVO{month='2018-03', hbaseDTO=HbaseDTO{columuFamilies=[{brand=1000},
// {model=1000}, {system_version=1000}]}}]
