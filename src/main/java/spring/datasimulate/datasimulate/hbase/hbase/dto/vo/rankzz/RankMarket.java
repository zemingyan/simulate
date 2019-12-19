package spring.datasimulate.datasimulate.hbase.hbase.dto.vo.rankzz;

import spring.datasimulate.datasimulate.hbase.hbase.dto.vo.MultipleAppMarketRateDTO;
import spring.datasimulate.datasimulate.hbase.hbase.dto.vo.innerunit.MultipleInnerRank;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class RankMarket extends RankZzInterface implements Serializable {
    private List<MultipleInnerRank> multipleInnerRankList = new ArrayList<>();
    private MultipleAppMarketRateDTO multipleAppMarketRateDTO = new MultipleAppMarketRateDTO();


    @Override
    public String toString() {
        return "RankMarket{" +
                "multipleInnerRankList=" + multipleInnerRankList +
                ", multipleAppMarketRateDTO=" + multipleAppMarketRateDTO +
                '}';
    }

    public List<MultipleInnerRank> getMultipleInnerRankList() {
        return multipleInnerRankList;
    }

    public void setMultipleInnerRankList(List<MultipleInnerRank> multipleInnerRankList) {
        this.multipleInnerRankList = multipleInnerRankList;
    }

    public MultipleAppMarketRateDTO getMultipleAppMarketRateDTO() {
        return multipleAppMarketRateDTO;
    }

    public void setMultipleAppMarketRateDTO(MultipleAppMarketRateDTO multipleAppMarketRateDTO) {
        this.multipleAppMarketRateDTO = multipleAppMarketRateDTO;
    }
}
