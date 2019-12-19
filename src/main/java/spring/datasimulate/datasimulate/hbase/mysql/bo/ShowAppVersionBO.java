package spring.datasimulate.datasimulate.hbase.mysql.bo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import spring.datasimulate.datasimulate.hbase.mysql.dao.ShowAppVersionDAO;
import spring.datasimulate.datasimulate.hbase.mysql.dataooject.ShowAppVersionDO;

import java.util.List;

@Service
public class ShowAppVersionBO {
    @Autowired
    private ShowAppVersionDAO showAppVersionDAO;

    public ShowAppVersionDO saveAppVersion(ShowAppVersionDO showAppVersionDO) {
        return showAppVersionDAO.save(showAppVersionDO);
    }

    public List<String> listVersionByPacket(String packet) {
        return showAppVersionDAO.listVersionByPacket(packet);
    }
}
