package spring.datasimulate.datasimulate.hbase.hbasedao;

import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.hbase.Cell;
import org.apache.hadoop.hbase.HBaseConfiguration;
import org.apache.hadoop.hbase.TableName;
import org.apache.hadoop.hbase.client.*;
import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Service;
import spring.datasimulate.datasimulate.hbase.hbase.dto.vo.HbaseDTO;
import spring.datasimulate.datasimulate.hbase.hbase.dto.vo.HbaseVO;
import spring.datasimulate.datasimulate.hbase.hbaseutils.DateUtil;
import spring.datasimulate.datasimulate.hbase.hbaseutils.family.AIVFamiliesUtil;
import spring.datasimulate.datasimulate.hbase.mysql.NumUtil;
import spring.datasimulate.datasimulate.hbase.mysql.dao.ShowUserDAO;
import spring.datasimulate.datasimulate.startintialize.HbaseUserInfo;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.*;
import java.util.concurrent.*;

@Service
public class DealMonthDataBoot implements CommandLineRunner{
    private static Logger log = LoggerFactory.getLogger(DealMonthDataBoot.class);

    @Autowired
    private HbaseTemple hbaseTemple;

    public  SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");

    // 项目启动的时候加载静态资源,否则会造成第一次访问的时候速度慢
    @Override
    public void run(String... strings) throws Exception {

    }
    public  List<HbaseVO> getDataByMonth(Long start, Long end){
        List<HbaseVO> voList = new ArrayList<>(12);
        Date startDate = DateUtil.timeStampToDate(start);
        Date endDate = DateUtil.timeStampToDate(end);
        List<Date> dateList = DateUtil.getDatesBetweenTwoDate(startDate, endDate);

        // 只使用这一个 去加一个月的数据
        HbaseDTO oneRowKey =new HbaseDTO(true);
        int beforeMonth = -1;
        System.out.println("月份");
        /*for (int i = 0; i < dateList.size(); i ++){
            System.out.println(sdf.format(dateList.get(i)));
        }*/
        log.info(sdf.format(dateList.get(0)) +" 截至到 " + sdf.format(dateList.get(dateList.size() - 1)));
        for (int i = 0; i < dateList.size(); i ++){
            String dateString = sdf.format(dateList.get(i));
            String[] yearMonth =dateString.split("-");
            int curMonth = Integer.valueOf(yearMonth[1]);
            //System.out.println("年份是" + yearMonth[0] + "    月份是" +
            //    yearMonth[1] + "   initMonth=" + beforeMonth + "    curMonth=" + curMonth);
            if ((curMonth != beforeMonth && beforeMonth != -1) || (i == dateList.size() - 1)){
                // 处理一个月的数据
                StringBuffer stringBuffer = new StringBuffer(yearMonth[0]);
                stringBuffer.append("-").append(beforeMonth);
                HbaseVO hbaseVO =new HbaseVO(stringBuffer.toString(),oneRowKey);
                log.info("一个月的数据获取完毕 " + yearMonth[0] + "-" + beforeMonth);
                voList.add(hbaseVO);
                //开始新的一个月的计算
                oneRowKey =new HbaseDTO(true);
            }
            beforeMonth = curMonth;
            oneRowKey = getDataByRowKey("AIV",dateString, oneRowKey);
        }
        return voList;
    }

    public List<HbaseVO> getOneFamilyDataByMonth(Long start, Long end, Integer familyIndex){
        List<HbaseVO> voList = new ArrayList<>(12);
        Date startDate = DateUtil.timeStampToDate(start);
        Date endDate = DateUtil.timeStampToDate(end);
        List<Date> dateList = DateUtil.getDatesBetweenTwoDate(startDate, endDate);
        // 只使用这一个 去加一个月的数据
        HbaseDTO oneRowKey =new HbaseDTO(false);
        int beforeMonth = -1;
        String beforeYear = "";
        for (int i = 0; i < dateList.size(); i ++){
            String dateString = sdf.format(dateList.get(i));
            String[] yearMonth =dateString.split("-");
            String curYear = yearMonth[0];
            int curMonth = Integer.valueOf(yearMonth[1]);
            if ((curMonth != beforeMonth && beforeMonth != -1) || (i == dateList.size() - 1)){
                StringBuffer stringBuffer = new StringBuffer(beforeYear);
                stringBuffer.append("-").append(beforeMonth);
                HbaseVO hbaseVO =new HbaseVO(stringBuffer.toString(),oneRowKey);
                //log.info("一个月的数据获取完毕 " + yearMonth[0] + "-" + beforeMonth);
                voList.add(hbaseVO);
                //开始新的一个月的计算
                oneRowKey =new HbaseDTO(false);
            }
            beforeYear = curYear;
            beforeMonth = curMonth;
            oneRowKey = getOneFamilyDataByRowKey("AIV",dateString, oneRowKey, familyIndex);
        }
        return voList;

    }
    @Test
    public  void testRowKey(){
        getDataByRowKey("AIV", "2017-10-08" , new HbaseDTO());
    }
    public  HbaseDTO getDataByRowKey(String tableName, String rowKey , HbaseDTO oneRowKey){
        Table table = null;
        try {
            table = hbaseTemple.getConnection().getTable(TableName.valueOf(tableName));
        } catch (IOException e) {
            e.printStackTrace();
        }
        Get get = new Get(rowKey.getBytes());
        Result rs = null;
        try {
            rs = table.get(get);
        } catch (IOException e) {
            e.printStackTrace();
        }

        /*System.out.println(tableName + " 表 数据读取完毕！");
        System.out.println("rowkey为:" + rowKey);*/

        List<Cell> cells = rs.listCells();
        if (cells != null) {
            Integer columnFalilyIndex = 0;
            for (Cell cell : cells) {
                String family = new String(cell.getFamily());
                // 获取一个列族存在数组中对应的下标
                columnFalilyIndex = AIVFamiliesUtil.columnFamilys.get(family);
                //System.out.println("在map中的下标是 " + columnFalilyIndex);
                //获取键值对的 map
                HashMap<String, Integer> columnValue = oneRowKey.columuFamilies.get(columnFalilyIndex);
                String column = new String(cell.getQualifier());
                String value = new String(cell.getValue());
                // 获取旧的值，然后相加
                //System.out.println((columnValue == null) + "键值对是否为空  " + columnValue.get(column));
                if (columnValue.get(column) == null){
                    columnValue.put(column, Integer.valueOf(value));
                } else {
                    int old = columnValue.get(column);
                    columnValue.put(column, old + Integer.valueOf(value));
                }
                // System.out.println(new String(cell.getFamily()) + " : "
                //    + new String(cell.getQualifier()) + " : " + new String(cell.getValue()));
            }
        }
        return oneRowKey;
    }

    public HbaseDTO getOneFamilyDataByRowKey(String tableName, String rowKey, HbaseDTO oneRowKey,
        Integer familyIndex){
        Table table = null;
        Connection connection = hbaseTemple.getConnection();
        try {
            table = connection.getTable(TableName.valueOf(tableName));
        } catch (IOException e) {
            e.printStackTrace();
        }
        Get get = new Get(rowKey.getBytes());
        Result rs = null;
        try {
            rs = table.get(get);
        } catch (IOException e) {
            e.printStackTrace();
        }

        String selectFamily = "";
        ConcurrentMap<String, Integer> families = AIVFamiliesUtil.columnFamilys;
        for (Map.Entry entry : families.entrySet()){
            if (entry.getValue().toString().equals(familyIndex.toString())){
                selectFamily = entry.getKey().toString();
                break;
            }
        }

        List<Cell> cells = rs.listCells();
        if (cells != null) {
            for (Cell cell : cells) {
                //获取键值对的 map     此处只有一行数据，所有下标是0
                HashMap<String, Integer> columnValue = oneRowKey.columuFamilies.get(0);
                String column = new String(cell.getQualifier());
                String value = new String(cell.getValue());

                // 获取列族 判断是否和查询的那列在map中存的下标相同
                String cellFamily = new String(cell.getFamily());
                if (!cellFamily.equals(selectFamily)){
                    continue;
                }

                // 获取旧的值，然后相加
                if (columnValue.get(column) == null){
                    columnValue.put(column, Integer.valueOf(value));
                }else {
                    int old = columnValue.get(column);
                    columnValue.put(column, old + Integer.valueOf(value));
                }
                // System.out.println(new String(cell.getFamily()) + " : "
                //    + new String(cell.getQualifier()) + " : " + new String(cell.getValue()));
            }
        }
        long oneFamilyCount = 0L;
        HashMap<String, Integer> brandValue = oneRowKey.getColumuFamilies().get(0);
        for (Map.Entry<String, Integer> entry : brandValue.entrySet()){
            oneFamilyCount += entry.getValue();
        }
        //log.info("总长度  " + oneFamilyCount);
        oneRowKey.setOneFamilyCount(oneFamilyCount);
        try {
            table.close();
            connection.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return oneRowKey;
    }

}
