package spring.datasimulate.datasimulate.hbase.hbasebo;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import spring.datasimulate.datasimulate.hbase.appusage.state.StateContext;
import spring.datasimulate.datasimulate.hbase.hbase.dto.vo.AppUsageFrequencyDTO;
import spring.datasimulate.datasimulate.hbase.hbase.dto.vo.AppUsageFrequencyVO;
import spring.datasimulate.datasimulate.hbase.hbasedao.AppUsageDAO;
import spring.datasimulate.datasimulate.hbase.hbaseutils.family.AppUsageFamlies;

import java.util.*;

@Service
public class AppUsageBO {
    private static Logger logger = LoggerFactory.getLogger(AppUsageBO.class);
    @Autowired
    private AppUsageDAO appUsageDAO;
    public AppUsageFrequencyVO listDayUseFrequencyByApp(String packetName, String day) {
        AppUsageFrequencyVO asuf = new AppUsageFrequencyVO();
        List<List<AppUsageFrequencyDTO>> datas = new ArrayList<>();
        HashMap<String, Integer> appAndCnt = new HashMap<>();
        double total = 0;
        for (Map.Entry<String, Integer> entry : AppUsageFamlies.familyToIndex.entrySet()){
            // 获取一个单元格数据，一个app某一天在不同时间段的使用次数
            int cnt = appUsageDAO.getCellData(packetName, entry.getKey(), day);
            total += cnt;
            // 列族类型和数目
            appAndCnt.put(entry.getKey(), cnt);
        }
        logger.info("总数是: {}", total);
        List<AppUsageFrequencyDTO> appTime = new ArrayList<>();
        List<String> time = new ArrayList<>(); //时间轴
        StateContext stateContext = new StateContext(); // 状态模式
        for (Map.Entry<String, Integer> entry : appAndCnt.entrySet()){
            List<AppUsageFrequencyDTO> oneDayData = new ArrayList<>();
            stateContext.setState(Integer.valueOf(entry.getKey()));

            int cur = entry.getValue();
            logger.info("当前比例是  :{}" , cur);
            int curCute = (int) ((cur/total)*100);
            //存数目
            AppUsageFrequencyDTO aufDTONum = new AppUsageFrequencyDTO();
            aufDTONum.setName(stateContext.getStateMsg());
            aufDTONum.setValue(cur);
            appTime.add(aufDTONum);

            // 将当前比例和其他比例存入
            AppUsageFrequencyDTO aufDTO = new AppUsageFrequencyDTO();
            aufDTO.setName(stateContext.getStateMsg());
            aufDTO.setValue(curCute);
            oneDayData.add(aufDTO);
            AppUsageFrequencyDTO auf2DTO = new AppUsageFrequencyDTO();
            auf2DTO.setName("其他比例");
            auf2DTO.setValue(100 - curCute);
            oneDayData.add(auf2DTO);
            datas.add(oneDayData);

            // 添加时间轴
            time.add(stateContext.getStateMsg());
        }
        asuf.setData(datas);
        asuf.setTime(time);
        asuf.setAppTime(appTime);
        return asuf;
    }
}
