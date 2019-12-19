package spring.datasimulate.datasimulate.hbase.mongo.dao;


import com.mongodb.BasicDBObject;
import com.mongodb.DBCursor;
import com.mongodb.DBObject;
import com.mongodb.QueryOperators;
import net.sf.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Repository;
import spring.datasimulate.datasimulate.hbase.mongo.bo.MongoUniqueViemBO;
import spring.datasimulate.datasimulate.hbase.mongo.dto.RoughUniqueViemDTO;
import spring.datasimulate.datasimulate.hbase.mongo.mongodbdo.MongoPageViemDO;
import spring.datasimulate.datasimulate.hbase.mongo.mongodbdo.MongoUniqueViemDO;

import java.util.ArrayList;
import java.util.List;

@Repository
public class MongoUniqueViemDAO {
    private static Logger logger = LoggerFactory.getLogger(MongoUniqueViemDAO.class);
    @Autowired
    private MongoTemplate mongoTemplate;

    public void save(MongoUniqueViemDO mongoUniqueViemDO) {
        mongoTemplate.save(mongoUniqueViemDO);
    }


    public List<String> listDistinctIPByTimeStamp(Long startTime, Long endTime, String field) {
        DBObject cond = new BasicDBObject();
        // 这种范围限定必须放在一条语句内，否则只有一条用效果， 而且此处的string要自己强制转,不要自动转
        cond.put("timeStamp", new BasicDBObject(QueryOperators.GTE, String.valueOf(startTime))
            .append(QueryOperators.LT, String.valueOf(endTime)));
        List<String> list = mongoTemplate.getCollection("mongoUniqueViemDO")
                .distinct(field,cond);
        return list;
    }

    public List<String> listDistinctIPByTimeStampAndApi(Long startTime, Long endTime,
        String apiName) {
        DBObject cond = new BasicDBObject();
        logger.info("持久的时间" + startTime + "   " + endTime);
        cond.put("timeStamp", new BasicDBObject(QueryOperators.GTE, String.valueOf(startTime))
            .append(QueryOperators.LT, String.valueOf(endTime)));
        cond.put("apiName", apiName);
        List<String> list = mongoTemplate.getCollection("mongoUniqueViemDO")
                .distinct("IPAddress",cond);
        return list;
    }

    public List<MongoUniqueViemDO> listByDateAndApi(long standard, long end, String apiPath) {
        DBObject cond = new BasicDBObject();
        cond.put("timeStamp", new BasicDBObject(QueryOperators.GTE, String.valueOf(standard))
                .append(QueryOperators.LT, String.valueOf(end)));
        cond.put("apiName", apiPath);

        DBCursor dbCursor = mongoTemplate.getCollection("mongoUniqueViemDO")
                .find(cond);
        List<MongoUniqueViemDO> pvs = new ArrayList<>(dbCursor.size());
        //System.out.println(dbCursor.size() + "   数据库中的数据" );
        while (dbCursor.hasNext()){
            DBObject dbObject = dbCursor.next();
            MongoUniqueViemDO mongoPageViemDO = new MongoUniqueViemDO();
            JSONObject jsonObject = JSONObject.fromObject(dbObject);
            mongoPageViemDO.setApiName(jsonObject.get("apiName").toString());
            mongoPageViemDO.setCount((int)jsonObject.get("count"));
            mongoPageViemDO.setTimeStamp(jsonObject.get("timeStamp").toString());
            pvs.add(mongoPageViemDO);
        }
        return pvs;
    }
}
