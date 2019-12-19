package spring.datasimulate.datasimulate.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;
import spring.datasimulate.datasimulate.po.LastTimePO;

import java.util.List;
import java.util.Queue;

@Repository
public class LastTimeDao {
    @Autowired
    private MongoTemplate mongoTemplate;

    public boolean save(LastTimePO lastTimePO){
        mongoTemplate.save(lastTimePO);
        return true;
    }

    public void deleteByPhoneID(String phoneID) {
        Criteria criteria = new Criteria();
        criteria.andOperator(Criteria.where("phoneID").is(phoneID));
        mongoTemplate.remove(new Query(criteria),LastTimePO.class);
    }

    public List<LastTimePO> selectByPhoneID(String phoneID) {
        Criteria criteria = new Criteria();
        criteria.andOperator(Criteria.where("phoneID").is(phoneID));
        Query query = new Query(criteria);
        query.skip(0).limit(1);
        List<LastTimePO> lastTimePOList = mongoTemplate.find(query,LastTimePO.class);
        return lastTimePOList;
    }
}
