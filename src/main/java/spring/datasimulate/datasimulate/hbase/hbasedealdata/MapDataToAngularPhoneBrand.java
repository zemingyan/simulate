package spring.datasimulate.datasimulate.hbase.hbasedealdata;

import org.codehaus.groovy.util.HashCodeHelper;
import org.omg.CORBA.INTERNAL;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import spring.datasimulate.datasimulate.hbase.angularpacket.phonebrand.PhoneBrandVO;
import spring.datasimulate.datasimulate.hbase.angularpacket.phonebrand.PhoneBrandDTO;
import spring.datasimulate.datasimulate.hbase.hbase.dto.vo.HbaseDTO;
import spring.datasimulate.datasimulate.hbase.hbase.dto.vo.HbaseVO;

import java.text.DecimalFormat;
import java.util.*;

@Component
public class MapDataToAngularPhoneBrand {
    private static Logger logger = LoggerFactory.getLogger(MapDataToAngularPhoneBrand.class);
    public PhoneBrandVO beforeDataToAngular(List<HbaseVO> beforeList){
        PhoneBrandVO phoneBrandVO = new PhoneBrandVO();
        List<String> months = new ArrayList<>(13);
        List<PhoneBrandDTO> phoneBrandDTOS = new ArrayList<>(13);
        TreeSet<String> phoneName = new TreeSet<>();
        //一年的数据总和
        double oneYearCount = 0D;
        HashMap<String, Integer> brandNameToGetOneYearCount = new HashMap<>();
        // 保留两位有效的小数点
        DecimalFormat decimalFormat = new DecimalFormat("#.##");
        HashMap<String, Integer> nameToIndex = new HashMap<>(10);
        int index = 0;
        for (int i = 0; i < beforeList.size(); i ++){
            HbaseDTO hbaseDTO = beforeList.get(i).getHbaseDTO();
            // 空数据的时候不记录
            List<HashMap<String, Integer>> famies = hbaseDTO.getColumuFamilies();
            if (famies.get(0).entrySet().size() == 0){
                continue;
            }
            // 将每一个月的总数加起来
            oneYearCount += beforeList.get(i).getHbaseDTO().getOneFamilyCount();
            // 将月份放入一个数组
            months.add(beforeList.get(i).getMonth());
            double oneMonthCount = hbaseDTO.getOneFamilyCount();
            HashMap<String, Integer> columnValue = hbaseDTO.getColumuFamilies().get(0);
            for (Map.Entry<String, Integer> entry : columnValue.entrySet()){
                // 将每一个brand的数据加到存储数量的map中
                Integer beforeOneBrandTotal = brandNameToGetOneYearCount.get(entry.getKey());
                if (beforeOneBrandTotal == null){
                    brandNameToGetOneYearCount.put(entry.getKey(), entry.getValue());
                } else {
                    brandNameToGetOneYearCount.put(entry.getKey(), beforeOneBrandTotal
                        + entry.getValue());
                }
                // 该品牌所占的比例  化成%s 数，再乘以100
                double percent = (entry.getValue() / oneMonthCount) * 100;
                String towDigitAverage = decimalFormat.format(percent);
                //logger.info("map中的数据 " + entry.getKey() + "  " + entry.getValue());
                // 该实例还不存在，则新建
                Integer indexInMap = nameToIndex.get(entry.getKey());
                // 处理没有创建List中数组的情况
                if (indexInMap == null){
                    PhoneBrandDTO phoneBrandDTO = new PhoneBrandDTO();
                    phoneBrandDTO.setName(entry.getKey());
                    // averager 表示一年的平均数
                    // phoneBrandDTO.setAverage(towDigitAverage);
                    List<Float> degrees = new ArrayList<>(12);
                    degrees.add(Float.valueOf(towDigitAverage));
                    nameToIndex.put(entry.getKey(), Integer.valueOf(index));
                    index ++; //下一个下标改变
                    phoneBrandDTO.setDegree(degrees);
                    phoneBrandDTOS.add(phoneBrandDTO);
                } else {
                    PhoneBrandDTO phoneBrandDTO = phoneBrandDTOS.get(indexInMap);
                    List<Float> degrees = phoneBrandDTO.getDegree();
                    degrees.add(Float.valueOf(towDigitAverage));
                }
            }
        }
        phoneBrandVO.setDate(months);

        for (int i = 0; i < phoneBrandDTOS.size(); i ++){
            String brandName = phoneBrandDTOS.get(i).getName();
            double brandCount = brandNameToGetOneYearCount.get(brandName);
            double percent =  (brandCount / oneYearCount) * 100;
            String oneYearAverage = decimalFormat.format(percent);
            phoneBrandDTOS.get(i).setAverage(oneYearAverage);
        }
        Collections.sort(phoneBrandDTOS);
        double maxPercent = Double.valueOf(phoneBrandDTOS.get(0).getAverage());
        for (int i = 0; i < phoneBrandDTOS.size(); i ++){
            Double curPercent = Double.valueOf(phoneBrandDTOS.get(i).getAverage());
            double showPercent = (curPercent / maxPercent) * 100;
            String stringShowPercent = decimalFormat.format(showPercent);
            phoneBrandDTOS.get(i).setShow(stringShowPercent);
        }
        phoneBrandVO.setPhoneBrandDTOS(phoneBrandDTOS);
        return phoneBrandVO;
    }
}
