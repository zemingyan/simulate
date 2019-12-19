package spring.datasimulate.datasimulate.hbase.mongo.dao;

import com.mongodb.BasicDBObject;
import com.mongodb.DBCursor;
import com.mongodb.DBObject;
import com.mongodb.QueryOperators;
import com.mongodb.client.model.DBCollectionCountOptions;
import net.sf.json.JSONObject;
import org.elasticsearch.common.recycler.Recycler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;
import spring.datasimulate.datasimulate.hbase.mongo.mongodbdo.MongoPageViemDO;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import static org.springframework.data.mongodb.core.aggregation.Aggregation.match;

@Repository
public class MongoPageViemDAO {
    @Autowired
    private MongoTemplate mongoTemplate;

    public void save(MongoPageViemDO mongoPageViemDO) {
        mongoTemplate.save(mongoPageViemDO);
    }




    public Long getPVCountByOneDayAndApi(String stringDate, String apiName) {
        DBObject cond = new BasicDBObject();
        cond.put("apiName", apiName);
        cond.put("day", stringDate);

        Long total = 0L;
        // 利用mongodb的mapreduce
        String reduce = "function(doc, aggr){" +
            "                aggr.total += doc.count;" +
            "            }";
        Query query = Query.query(Criteria.where("apiName").is(apiName).and("day").is(stringDate));
        DBObject result = mongoTemplate.getCollection("mongoPageViemDO").
                group(new BasicDBObject("day", 1),
                query.getQueryObject(),
                new BasicDBObject("total", total),
                reduce);

        Map<String,BasicDBObject> map = result.toMap();
        if(map.size() > 0){
            BasicDBObject bdbo = map.get("0");
            if(bdbo != null && bdbo.get("total") != null)
                total = bdbo.getLong("total");
        }
        return total;
    }

    public List<MongoPageViemDO> listByDateAndApi(long start, long end, String apiPath) {
        DBObject cond = new BasicDBObject();
        cond.put("timeStamp", new BasicDBObject(QueryOperators.GTE, String.valueOf(start))
                .append(QueryOperators.LT, String.valueOf(end)));
        cond.put("apiName", apiPath);

        DBCursor dbCursor = mongoTemplate.getCollection("mongoPageViemDO")
            .find(cond);
        List<MongoPageViemDO> pvs = new ArrayList<>(dbCursor.size());
        //System.out.println(dbCursor.size() + "   数据库中的数据" );
        while (dbCursor.hasNext()){
            DBObject dbObject = dbCursor.next();
            MongoPageViemDO mongoPageViemDO = new MongoPageViemDO();
            JSONObject jsonObject = JSONObject.fromObject(dbObject);
            /*if (jsonObject.get("timeStamp") == null || jsonObject.get("count") == null){
                continue;
            }*/
            mongoPageViemDO.setApiName(jsonObject.get("apiName").toString());
            mongoPageViemDO.setCount((int)jsonObject.get("count"));
            mongoPageViemDO.setTimeStamp(jsonObject.get("timeStamp").toString());
            pvs.add(mongoPageViemDO);
        }
        return pvs;
    }
   public Long getPVCountByOneHourAndApi(String stringDate, String apiName, String hour) {
        DBObject cond = new BasicDBObject();
        Long total = 0L;
        // 利用mongodb的mapreduce
        String reduce = "function(doc, aggr){" +
                "                aggr.total += doc.count;" +
                "            }";
        Query query = Query.query(Criteria.where("apiName").is(apiName).and("day").
            is(stringDate).and("time").gt("16:00").lt("17:00"));

        DBObject result = mongoTemplate.getCollection("mongoPageViemDO").
                group(new BasicDBObject("day", 1),
                        query.getQueryObject(),
                        new BasicDBObject("total", total),
                        reduce);

        Map<String,BasicDBObject> map = result.toMap();
        if(map.size() > 0){
            BasicDBObject bdbo = map.get("0");
            if(bdbo != null && bdbo.get("total") != null)
                total = bdbo.getLong("total");
        }
        return total;
    }
}
