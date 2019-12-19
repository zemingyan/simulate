package spring.datasimulate.datasimulate.hbase.hbase.dto.vo.rankzz;

import spring.datasimulate.datasimulate.hbase.hbase.dto.vo.innerunit.MultipleDataVO;
import spring.datasimulate.datasimulate.hbase.hbase.dto.vo.innerunit.MultipleInnerRank;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class RankVisit extends RankZzInterface implements Serializable {
    private MultipleDataVO multipleDataVO = new MultipleDataVO();
    private List<MultipleInnerRank> rank = new ArrayList<>();


    @Override
    public String toString() {
        return "RankVisit{" +
                "multipleDataVO=" + multipleDataVO +
                ", rank=" + rank +
                '}';
    }

    public List<MultipleInnerRank> getRank() {
        return rank;
    }

    public void setRank(List<MultipleInnerRank> rank) {
        this.rank = rank;
    }

    public MultipleDataVO getMultipleDataVO() {
        return multipleDataVO;
    }

    public void setMultipleDataVO(MultipleDataVO multipleDataVO) {
        this.multipleDataVO = multipleDataVO;
    }
}
