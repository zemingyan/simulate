package spring.datasimulate.datasimulate.statistics_aop.persistentdao;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;
import spring.datasimulate.datasimulate.statistics_aop.persistentobject.UniqueViemPO;

import java.util.List;

@Repository
public class UniqueViemDao {
    @Autowired
    private MongoTemplate mongoTemplate;

    public void save(UniqueViemPO uniqueViemPO) {
        mongoTemplate.save(uniqueViemPO);
    }

    public List<UniqueViemPO> selectByTimeStamp(Long less, Long greater) {
        Criteria criteria = new Criteria();
        criteria.andOperator(Criteria.where("timeStamp").gte(less).lte(greater));
        return mongoTemplate.find(new Query(criteria) , UniqueViemPO.class);
    }
    public List<String> selectIPAddressDistinct(){
        return mongoTemplate.getCollection("uniqueViemPO").distinct("IPAddress");
    }
}
