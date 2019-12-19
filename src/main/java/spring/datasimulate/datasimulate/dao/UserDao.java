package spring.datasimulate.datasimulate.dao;

import com.mongodb.DBCursor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;
import spring.datasimulate.datasimulate.po.UserPO;

import java.util.ArrayList;
import java.util.List;

@Repository
public class UserDao {
    @Autowired
    private MongoTemplate mongoTemplate;

    public void save(UserPO userPO){
        mongoTemplate.save(userPO);
    }

    public List<UserPO> selectUserById(String id){
        return null;
        //mongoTemplate.
    }

    public List<UserPO> selectAll() {
        List<UserPO> userPOs = new ArrayList<>();

        /*DBCursor dbCursor = mongoTemplate.getCollection("userPO").find();
        while (dbCursor.hasNext()){
            userPOs.add((UserPO)dbCursor.next());
        }*/
        Criteria criteria = new Criteria();
        return mongoTemplate.find(new Query(criteria),UserPO.class);
        //return userPOs;
    }
}
