package spring.datasimulate.datasimulate.hbase.hbase.dto.vo.rankzz;

import spring.datasimulate.datasimulate.hbase.hbase.dto.vo.MultipleAppVisitUserDTO;
import spring.datasimulate.datasimulate.hbase.hbase.dto.vo.innerunit.MultipleInnerRank;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class RankRate extends RankZzInterface implements Serializable {
    private List<MultipleInnerRank> multipleInnerRanks = new ArrayList<>();
    private MultipleAppVisitUserDTO multipleAppVisitUserDTO = new MultipleAppVisitUserDTO();

    @Override
    public String toString() {
        return "RankRate{" +
                "multipleInnerRanks=" + multipleInnerRanks +
                ", multipleAppVisitUserDTO=" + multipleAppVisitUserDTO +
                '}';
    }

    public List<MultipleInnerRank> getMultipleInnerRanks() {
        return multipleInnerRanks;
    }

    public void setMultipleInnerRanks(List<MultipleInnerRank> multipleInnerRanks) {
        this.multipleInnerRanks = multipleInnerRanks;
    }

    public MultipleAppVisitUserDTO getMultipleAppVisitUserDTO() {
        return multipleAppVisitUserDTO;
    }

    public void setMultipleAppVisitUserDTO(MultipleAppVisitUserDTO multipleAppVisitUserDTO) {
        this.multipleAppVisitUserDTO = multipleAppVisitUserDTO;
    }
}
