package spring.datasimulate.datasimulate.hbase.hbase.dto.vo;

import spring.datasimulate.datasimulate.hbase.hbaseutils.family.AIVFamiliesUtil;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 后期需要将他分开成两个包装类
 */
public class HbaseDTO {

    //ApplicationContext applicationContext = null;
    public List<HashMap<String, Integer>> columuFamilies = null;
    private Long oneFamilyCount ;
    public HbaseDTO(){
        columuFamilies = new ArrayList<>(AIVFamiliesUtil.columnLength);
    }
    public HbaseDTO(boolean allFamilies) {
        this();
        if (allFamilies) {
            initAll();
        } else {
            initOne();
        }
    }
    public void initAll(){
        for (int i = 0; i < AIVFamiliesUtil.columnFamilys.size(); i ++){
            columuFamilies.add(new HashMap<String, Integer>());
        }
        // 此处的map里面封装的是  列名, 对应在List的下标
        for (Map.Entry entry : AIVFamiliesUtil.columnFamilys.entrySet()){
            String columnName = (String) entry.getKey();
            Integer index = (Integer) entry.getValue();
            HashMap<String, Integer> temp = new HashMap<>(20);
            columuFamilies.set(index, temp); //entry.getKey()
        }
        System.out.println("列族map的长度是.. " + columuFamilies.size());
    }

    public void initOne(){
        columuFamilies.add(new HashMap<String, Integer>());
    }



    public List<HashMap<String, Integer>> getColumuFamilies() {
        return columuFamilies;
    }

    public Long getOneFamilyCount() {
        return oneFamilyCount;
    }

    public void setOneFamilyCount(Long oneFamilyCount) {
        this.oneFamilyCount = oneFamilyCount;
    }

    public void setColumuFamilies(List<HashMap<String, Integer>> columuFamilies) {
        this.columuFamilies = columuFamilies;
    }

    @Override
    public String toString() {
        return "HbaseDTO{" +
                "columuFamilies=" + columuFamilies +
                "oneFamilyCount=" + oneFamilyCount +
                '}';
    }
}
