package spring.datasimulate.datasimulate.hbase.mongo.dao;

import ch.qos.logback.core.joran.action.TimestampAction;
import com.mongodb.*;
import com.mongodb.client.model.DBCollectionCountOptions;
import net.sf.json.JSONObject;
import org.apache.hadoop.hbase.shaded.com.google.gson.JsonObject;
import org.apache.hadoop.hbase.shaded.org.apache.commons.net.ntp.TimeStamp;
import org.apache.hadoop.yarn.util.Times;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Repository;
import spring.datasimulate.datasimulate.hbase.mongo.bo.MongoResponseTimeBO;
import spring.datasimulate.datasimulate.hbase.mongo.dto.RoughResponseTimeDTO;
import spring.datasimulate.datasimulate.hbase.mongo.mongodbdo.MongoResponseTimeDO;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.TimerTask;

@Repository
public class MongoResponseTimeDAO {
    @Autowired
    private MongoTemplate mongoTemplate;
    private DBObject dbObject;

    public void save(MongoResponseTimeDO mongoResponseTimeDO) {
        mongoTemplate.save(mongoResponseTimeDO);
    }

    public List<MongoResponseTimeDO> listByApiAndDate(Long start, Long end, String apiPath) {
        DBObject cond = new BasicDBObject();
        cond.put("startTime", new BasicDBObject(QueryOperators.GTE, String.valueOf(start))
                .append(QueryOperators.LT, String.valueOf(end)));
        cond.put("apiName", apiPath);
        System.out.println(start + "   " + end);
        DBCollection dbCollection = mongoTemplate.getCollection(
                "mongoResponseTimeDO");
         DBCursor dbCursor = dbCollection.find(cond);
        ///System.out.println("长度是   " + dbCursor.size() + "    " + apiPath);
        List<MongoResponseTimeDO> rts = new ArrayList<>(dbCursor.size());
        while (dbCursor.hasNext()){
            MongoResponseTimeDO mongoResponseTimeDO = new MongoResponseTimeDO();
            DBObject dbObject = dbCursor.next();
            JSONObject jsonObject = JSONObject.fromObject(dbObject);
            mongoResponseTimeDO.setApiName(jsonObject.get("apiName").toString());
            mongoResponseTimeDO.setDealTime(Integer.valueOf(jsonObject.getString("dealTime")));
            mongoResponseTimeDO.setStartTime(jsonObject.get("startTime").toString());

            rts.add(mongoResponseTimeDO);
            //System.out.println(dbObject.toString());
            //System.out.println(jsonStu.get("dealTime"));

           // System.out.println();
        }
        return rts;
    }
}
