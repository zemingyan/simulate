package spring.datasimulate.datasimulate.hbase.mysql.bo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import spring.datasimulate.datasimulate.hbase.mysql.dao.ShowAppTypeDAO;

@Service
public class ShowAppTypeBO {
    @Autowired
    private ShowAppTypeDAO showAppTypeDAO;

}
