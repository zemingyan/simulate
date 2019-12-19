package spring.datasimulate.datasimulate.statistics_aop.persistentdao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import spring.datasimulate.datasimulate.statistics_aop.persistentobject.PageViemPO;
import spring.datasimulate.datasimulate.statistics_aop.persistentobject.ResponseTimePO;

import java.util.List;
@Repository
public class PageViemDao {
    @Autowired
    private MongoTemplate mongoTemplate;


    public void save(PageViemPO pageViemPO) {
        mongoTemplate.save(pageViemPO);
    }
    public List<PageViemPO> selectByTimeStamp(Long less , Long greater ){
        Criteria criteria = new Criteria();
        criteria.andOperator(Criteria.where("timestamp").gte(less).lte(greater));
        return mongoTemplate.find(new Query(criteria),PageViemPO.class);
    }


}
