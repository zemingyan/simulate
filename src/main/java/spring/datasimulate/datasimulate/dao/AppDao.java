package spring.datasimulate.datasimulate.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import spring.datasimulate.datasimulate.po.App;

import java.util.List;

@RestController
@Repository
public class AppDao {
    @Autowired
    private MongoTemplate mongoTemplate;

    @RequestMapping(value = "/create", method = RequestMethod.GET)
    public String create(){
        mongoTemplate.createCollection("first");
        return "创建";
    }
    public void save(App app){
        mongoTemplate.save(app);
    }

    public List<String > selectAllAppNameDistinct(){
        return mongoTemplate.getCollection("app").distinct("appName");
    }

    public List<App> selectAppByName(String name) {
        Criteria criteria = new Criteria();
        criteria.andOperator(Criteria.where("appName").is(name));
        return mongoTemplate.find(new Query(criteria),App.class);
    }
}
