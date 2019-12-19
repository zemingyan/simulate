package spring.datasimulate.datasimulate.hbase.hbasedao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class UserMakeDAO {
    @Autowired
    private HbaseTemple hbaseTemple;

    public HbaseTemple getHbaseTemple() {
        return hbaseTemple;
    }
}
