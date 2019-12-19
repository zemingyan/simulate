package spring.datasimulate.datasimulate.hbase.hbasebo;

import io.swagger.annotations.ApiParam;
import io.swagger.models.auth.In;
import org.apache.commons.beanutils.converters.StringArrayConverter;
import org.apache.hadoop.yarn.webapp.hamlet.Hamlet;
import org.omg.CORBA.INTERNAL;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.AutoPopulatingList;
import spring.datasimulate.datasimulate.hbase.hbase.dto.vo.MultipleAppMarketRateDTO;
import spring.datasimulate.datasimulate.hbase.hbase.dto.vo.MultipleAppTypeRate;
import spring.datasimulate.datasimulate.hbase.hbase.dto.vo.MultipleAppVisitDTO;
import spring.datasimulate.datasimulate.hbase.hbase.dto.vo.MultipleAppVisitUserDTO;
import spring.datasimulate.datasimulate.hbase.hbase.dto.vo.innerunit.MultipleDataVO;
import spring.datasimulate.datasimulate.hbase.hbase.dto.vo.innerunit.MultipleInnerRank;
import spring.datasimulate.datasimulate.hbase.hbase.dto.vo.innerunit.MultipleNameAndCnt;
import spring.datasimulate.datasimulate.hbase.hbase.dto.vo.rankzz.RankMarket;
import spring.datasimulate.datasimulate.hbase.hbase.dto.vo.rankzz.RankRate;
import spring.datasimulate.datasimulate.hbase.hbase.dto.vo.rankzz.RankVisit;
import spring.datasimulate.datasimulate.hbase.hbase.dto.vo.rankzz.RankZzInterface;
import spring.datasimulate.datasimulate.hbase.hbasedao.MultipleAppDAO;
import spring.datasimulate.datasimulate.hbase.hbaseutils.DateUtil;
import spring.datasimulate.datasimulate.hbase.hbaseutils.family.SingleAppFamilies;
import spring.datasimulate.datasimulate.hbase.mysql.bo.ShowAppBO;
import spring.datasimulate.datasimulate.hbase.mysql.bo.ShowAppTypeBO;
import spring.datasimulate.datasimulate.hbase.mysql.dao.ShowAppDAO;
import spring.datasimulate.datasimulate.hbase.mysql.dataooject.ShowAppDO;
import sun.security.provider.SHA;
import sun.util.calendar.LocalGregorianCalendar;

import java.io.Serializable;
import java.text.DecimalFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Date;
@Service
public class MultipleAppBO {
    @Autowired
    private MultipleAppDAO multipleAppDAO;
    @Autowired
    private ShowAppBO showAppBO;
    @Autowired
    private ShowAppDAO showAppDAO;

    // App访问量
    public List<MultipleNameAndCnt> listAppVisitByAppNames(String start, String end, List<Integer> appId) {
        List<MultipleNameAndCnt> multipleNameAndCnts = new ArrayList<>();
        for (int i = 0; i < appId.size(); i ++){
            //List<String> packetNames = showAppDAO.listAppPacketByAppName(appNames.get(i));
            List<ShowAppDO> showAppDOS = showAppDAO.listById(appId.get(i));
            if (showAppDOS == null || showAppDOS.size() == 0){
                continue;
            }
            int visitCnt = multipleAppDAO.getAppVisitByAppNameAndDate(showAppDOS.get(0).getPackageName(),
                start, end);
            System.out.println("数目是  " + visitCnt + "  " + start + "   " + end);
            MultipleNameAndCnt multipleNameAndCnt = new MultipleNameAndCnt();
            multipleNameAndCnt.setName(showAppDOS.get(0).getAppName());
            multipleNameAndCnt.setValue(visitCnt);
            multipleNameAndCnts.add(multipleNameAndCnt);
        }
        Collections.sort(multipleNameAndCnts);
        return multipleNameAndCnts;
    }

    //市场占有率
    public MultipleAppMarketRateDTO listAppsMarketRateByDateAndAppName(List<Integer> appIds,
        String start, String end) {   //暂定为人数和时长 访问数
        List<String> firstData = new ArrayList<>(2);
        List<String> xdata = new ArrayList<>(appIds.size());
        xdata.add("date");
        List<MultipleNameAndCnt> data = new ArrayList<>(appIds.size()); // 暂时只是记录中访问数

        MultipleAppMarketRateDTO multipleAppMarketRateDTO = new MultipleAppMarketRateDTO();
        List<ShowAppDO> showAppDOS = new ArrayList<>();
        for (Integer id :appIds){
            ShowAppDO showAppDO = showAppDAO.findOne(id);
            if (showAppDO != null){
                showAppDOS.add(showAppDO);
            }
        }
        List<Date> dates = DateUtil.getDatesBetweenTwoDateParamString(start, end);
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        for (Date date : dates){
            xdata.add(sdf.format(date));
        }
        firstData.add("date");
        firstData.add(sdf.format(dates.get(0)));


        // 三个二位数组，分别用来存每个app的访问量，人数，使用时长
        List<List<Integer>> appAndVisitNum = new ArrayList<>(dates.size());
        List<List<Integer>> appAndPeople = new ArrayList<>(dates.size());
        List<List<Integer>> appAndUserTime = new ArrayList<>(dates.size());

        for (int i = 0; i < showAppDOS.size() ; i ++){ //app的循环
            ShowAppDO showAppDO = showAppDOS.get(i);
            List<Integer> visitNums = multipleAppDAO.listAppVisitByAppNameAndDate(showAppDO.getPackageName(),
                    start, end, dates);
            List<Integer> peoples = multipleAppDAO.listAppUserNumberByNameAndDate(
                    showAppDO.getPackageName(), start, end, dates);
            List<Integer> userTimes = multipleAppDAO.listAppUseTimeLengthByNameAndDate(showAppDO
                    .getPackageName(), start,end, dates);
            appAndVisitNum.add(visitNums);
            appAndPeople.add(peoples);
            appAndUserTime.add(userTimes);
        }
        // 三个一位数组，分别用来记录每个app每天的总值
        List<Double> totalVisitNums = new ArrayList<>(dates.size());
        List<Double> totalPeoples = new ArrayList<>(dates.size());
        List<Double> totalUserTimes = new ArrayList<>(dates.size());


        for (int i = 0; i < dates.size(); i ++) { // 天数
            double totalPeople = 0D;
            double totalUserTime = 0D;
            double totalVisitNum = 0D;
            for (int j = 0; j < appAndVisitNum.size(); j ++){ // app数目
                totalPeople += appAndPeople.get(j).get(i);
                totalUserTime += appAndUserTime.get(j).get(i);
                System.out.print(appAndUserTime.get(j).get(i) + "  ");
                totalVisitNum += appAndVisitNum.get(j).get(i);
            }
            System.out.println("结果是  " + totalUserTime);
            totalPeoples.add(totalPeople);
            totalUserTimes.add(totalUserTime);
            totalVisitNums.add(totalVisitNum);
        }


        List<List<String>> detailData = new ArrayList<>(appAndPeople.size() + 1);
        detailData.add(0, xdata);
        for (int i = 0; i < appAndPeople.size(); i ++){ //app
            List<String> oneAppRate = new ArrayList<>(dates.size() + 3);
            oneAppRate.add(showAppDOS.get(i).getAppName());
            MultipleNameAndCnt multipleNameAndCnt = new MultipleNameAndCnt();
            multipleNameAndCnt.setName(showAppDOS.get(i).getAppName());
            int oneAppVisitTotal = 0;
            for (int j = 0; j < appAndPeople.get(i).size(); j ++){ //天数

                String rate = MarketRate.getAppMarketRate(appAndPeople.get(i).get(j),appAndUserTime
                        .get(i).get(j), appAndVisitNum.get(i).get(j), totalPeoples.get(j),
                        totalUserTimes.get(j), totalVisitNums.get(j));
                oneAppRate.add(rate);
                oneAppVisitTotal += appAndVisitNum.get(i).get(j);
            }
            detailData.add(oneAppRate);
            multipleNameAndCnt.setValue(oneAppVisitTotal);
            data.add(multipleNameAndCnt);
        }

        multipleAppMarketRateDTO.setDetailData(detailData);
        multipleAppMarketRateDTO.setData(data);
        multipleAppMarketRateDTO.setFirstData(firstData);
        return multipleAppMarketRateDTO;
    }

    public MultipleAppTypeRate listAppsTypeRate(){
        MultipleAppTypeRate multipleAppTypeRate = new MultipleAppTypeRate();
        List<String> appAllType = showAppDAO.listAppType();
        List<MultipleNameAndCnt> detailData = new ArrayList<>(appAllType.size());
        for (String appType : appAllType){
            int oneTypeCnt = showAppDAO.countOneAppTypeNum(appType);
            MultipleNameAndCnt multipleNameAndCnt = new MultipleNameAndCnt();
            multipleNameAndCnt.setValue(oneTypeCnt);
            multipleNameAndCnt.setName(appType);
            detailData.add(multipleNameAndCnt);
        }

        multipleAppTypeRate.setDetailData(detailData);
        multipleAppTypeRate.setData(appAllType);
        return multipleAppTypeRate;
    }

    //  数据比对
    public MultipleAppVisitUserDTO listAppUserNumberByAppIds(List<Integer> appId, String start, String end) {
        MultipleAppVisitUserDTO multipleAppVisitUserDTO = new MultipleAppVisitUserDTO();
        List<Date> dates = DateUtil.getDatesBetweenTwoDateParamString(start, end);
        List<ShowAppDO> showAppDOS = new ArrayList<>(appId.size());

        List<String> data = new ArrayList<>(appId.size());
        List<List<Integer>> detailData = new ArrayList<>(showAppDOS.size());
        List<String> xdata = new ArrayList<>(dates.size());

        for (Integer id : appId){
            ShowAppDO  showAppDO = showAppDAO.findOne(id);
            if (showAppDO != null ){
                showAppDOS.add(showAppDO);
                xdata.add(showAppDO.getAppName());
            }
        }
        for (int i = 0; i < showAppDOS.size(); i ++){
            List<Integer> oneAppData = multipleAppDAO.listAppVisitByAppNameAndDate(showAppDOS.get(i)
                .getPackageName(), start, end, dates);
            detailData.add(oneAppData);
        }
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        for (Date date : dates){
            data.add(sdf.format(date));
        }

        multipleAppVisitUserDTO.setData(data);
        multipleAppVisitUserDTO.setXdata(xdata);
        multipleAppVisitUserDTO.setDetailData(detailData);
        return multipleAppVisitUserDTO;
    }

    @Deprecated
    public  List<MultipleInnerRank> listAppRankByType(String type, int page) {
        DecimalFormat decimalFormat = new DecimalFormat("#.##");
        List<ShowAppDO> showAppDOS = showAppBO.listAppByType(type, 0);
        List<MultipleInnerRank> multipleInnerRanks = new ArrayList<>(showAppDOS.size());
        double total  = 0D;
        for (ShowAppDO showAppDO : showAppDOS){
            total += showAppDO.getCount();
        }


        int index = 1;
        for (ShowAppDO showAppDO : showAppDOS){
            MultipleInnerRank multipleInnerRank = new MultipleInnerRank();
            multipleInnerRank.setId(index ++);
            multipleInnerRank.setName(showAppDO.getAppName());
            String rate = decimalFormat.format(showAppDO.getCount() * 100/total);
            multipleInnerRank.setAvg(rate + "%");
            multipleInnerRanks.add(multipleInnerRank);
        }
        return multipleInnerRanks;
    }

    public List<MultipleInnerRank> listAllAppRank(int page) {
        List<ShowAppDO> showAppDOS = showAppBO.listAllAppRank(0);
        List<MultipleInnerRank> multipleInnerRanks = new ArrayList<>(showAppDOS.size());
        double total  = 0D;
        for (ShowAppDO showAppDO : showAppDOS){
            total += showAppDO.getCount();
        }

        DecimalFormat decimalFormat = new DecimalFormat("#.##");
        int index = 1;
        for (ShowAppDO showAppDO : showAppDOS){
            MultipleInnerRank multipleInnerRank = new MultipleInnerRank();
            multipleInnerRank.setId(index ++);
            multipleInnerRank.setName(showAppDO.getAppName());
            String rate = decimalFormat.format(showAppDO.getCount() * 100/total);
            multipleInnerRank.setAvg(rate + "%");
            multipleInnerRanks.add(multipleInnerRank);
        }
        return multipleInnerRanks;
    }

    public RankZzInterface listAppAppointRankByType(List<Integer> appIds, String start,
                                                    String end, Integer flag) {
        List<MultipleInnerRank> multipleInnerRanks = new ArrayList<>(appIds.size());
        List<MultipleNameAndCnt> nameAndCnts = new ArrayList<>();
        DecimalFormat decimalFormat = new DecimalFormat("#.##");
        List<ShowAppDO> showAppDOS = new ArrayList<>(appIds.size());
        for (Integer id : appIds){
            showAppDOS.add(showAppDAO.findOne(id));
        }
        List<Date> dates = DateUtil.getDatesBetweenTwoDateParamString(start, end);
        if (flag == 1){ // app访问量

            List<MultipleNameAndCnt> multipleNameAndCnts = this
                    .listAppVisitByAppNames(start, end, appIds);
            MultipleDataVO multipleDataVO = new MultipleDataVO();
            for (int i = 0; i < multipleNameAndCnts.size() && i < 5; i++) {
                multipleDataVO.getAppNames().add(multipleNameAndCnts.get(i).getName());
                multipleDataVO.getCount().add(multipleNameAndCnts.get(i).getValue());
            }
            multipleInnerRanks = getTotal(multipleNameAndCnts);
            System.out.println(multipleInnerRanks.toString());
            RankVisit rankVisit = new RankVisit();
            rankVisit.setRank(multipleInnerRanks);
            int length = multipleDataVO.getAppNames().size();
            for (int i = length - 1; i >= 5; i --){
                multipleDataVO.getAppNames().remove(i);
                multipleDataVO.getCount().remove(i);
            }
            rankVisit.setMultipleDataVO(multipleDataVO);
            return rankVisit;
        } else if (flag == 2){ // 市场占有率
            MultipleAppMarketRateDTO market = this.listAppsMarketRateByDateAndAppName(appIds, start, end);
            nameAndCnts = market.getData();

            multipleInnerRanks = getTotal(nameAndCnts);
            RankMarket rankMarket = new RankMarket();
            int length = market.getData().size();
            for (int i = length - 1; i >=5; i --){
                market.getData().remove(i);
                market.getDetailData().remove(i);
               // market.getFirstData()
            }
            rankMarket.setMultipleAppMarketRateDTO(market);
            rankMarket.setMultipleInnerRankList(multipleInnerRanks);
            return rankMarket;
        } else  if (flag == 3){ // app数据比对
            MultipleAppVisitUserDTO visitUserDTO = this.listAppUserNumberByAppIds(appIds, start, end);
            List<String> appNames = visitUserDTO.getXdata();
            List<Integer> oneAppNumber = new ArrayList<>(appNames.size());
            List<List<Integer>> detailData = visitUserDTO.getDetailData();
            double total = 0D;
            for (int i = 0; i < detailData.size(); i ++){
                int oneAppCnt = 0;
                for (int j = 0; j < detailData.get(i).size(); j ++){
                    oneAppCnt += detailData.get(i).get(j);
                }
                total += oneAppCnt;
                oneAppNumber.add(oneAppCnt);
            }
            for (int i = 0; i < appNames.size(); i ++){
                MultipleInnerRank multipleInnerRank = new MultipleInnerRank();
                multipleInnerRank.setName(appNames.get(i));
                multipleInnerRank.setId(1 + i);
                String rate = decimalFormat.format(oneAppNumber.get(i)/total * 100);
                multipleInnerRank.setAvg(rate + "%");
                multipleInnerRanks.add(multipleInnerRank);
            }
            int length = visitUserDTO.getDetailData().size();
            for (int i = length - 1; i >= 5; i --){
                visitUserDTO.getXdata().remove(i);
                visitUserDTO.getDetailData().remove(i);
                //visitUserDTO.getData().remove(i);
            }
            RankRate rankRate = new RankRate();
            rankRate.setMultipleAppVisitUserDTO(visitUserDTO);
            rankRate.setMultipleInnerRanks(multipleInnerRanks);
            return rankRate;
        }
        return null;
    }

    public List<MultipleInnerRank> getTotal(List<MultipleNameAndCnt> nameAndCnts){
        List<MultipleInnerRank> multipleInnerRanks = new ArrayList<>(nameAndCnts.size());
        double total = 0D;
        for (MultipleNameAndCnt visit : nameAndCnts){
            total  += visit.getValue();
        }
        DecimalFormat decimalFormat = new DecimalFormat("#.##");
        for (int i = 0; i < nameAndCnts.size(); i ++){
            MultipleInnerRank multipleInnerRank = new MultipleInnerRank();
            multipleInnerRank.setId(i + 1);
            multipleInnerRank.setName(nameAndCnts.get(i).getName());
            String rate = decimalFormat.format(nameAndCnts.get(i).getValue()/total * 100);
            multipleInnerRank.setAvg(rate + "%");
            multipleInnerRanks.add(multipleInnerRank);
        }
        return multipleInnerRanks;
    }

    static class MarketRate{

        private static Double peopleRate = 0.3D;
        private  static Double useTimeRate = 0.3D;
        private static Double visitNumRate = 0.4D;


      public static String getAppMarketRate(Integer people, Integer useTime, Integer visitNum,
         Double totalPeople, Double totalUserTime, Double totalVisitNum) {
          double peopleValue = 0D;
          double visitValue = 0D;
          double useTimeValue = 0D;
          double rate = 0D;
          if (totalPeople != 0){
              peopleValue = (people/totalPeople) ;
              rate += peopleValue;
          }
          if (totalUserTime != 0 ){

              useTimeValue = (useTime/totalUserTime) ;
              rate += useTimeValue;
          }
          if (totalVisitNum != 0 ){
              visitValue = (visitNum/totalVisitNum) ;
              rate += visitValue;
          }
          DecimalFormat decimalFormat = new DecimalFormat("#.##");
          return decimalFormat.format(rate/3 * 100);
      }
  }
}
