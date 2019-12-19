package spring.datasimulate.datasimulate.hbase.mysql.bo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import spring.datasimulate.datasimulate.hbase.mysql.NumUtil;
import spring.datasimulate.datasimulate.hbase.mysql.dao.ShowUserDAO;
import spring.datasimulate.datasimulate.hbase.mysql.dataooject.ShowUserDO;

import java.util.List;

@Service
public class ShowUserBO {
    @Autowired
    private ShowUserDAO showUserDAO;

    public Page<ShowUserDO> listUserByPage(int page) {
        PageRequest pageable = new PageRequest(page, NumUtil.TEN);
        return showUserDAO.listUserByPage(pageable);
    }

    public List<ShowUserDO> listAll() {
        return showUserDAO.listAll();
    }


}
