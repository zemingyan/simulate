package spring.datasimulate.datasimulate.statistics_aop.persistentdao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;
import spring.datasimulate.datasimulate.statistics_aop.persistentobject.ResponseTimePO;

import java.util.List;

@Repository
public class ResponseTimeDao {
    @Autowired
    private MongoTemplate mongoTemplate;


    public void save(ResponseTimePO responseTimePO) {
        mongoTemplate.save(responseTimePO);
    }

    public List<ResponseTimePO> selectByTimeStamp(Long less, Long greater) {
        Criteria criteria = new Criteria();
        criteria.andOperator(Criteria.where("startTime").gte(less) ,
            Criteria.where("endTime").lte(greater));
        return mongoTemplate.find(new Query(criteria) , ResponseTimePO.class);
    }
}
