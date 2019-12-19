package spring.datasimulate.datasimulate.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import spring.datasimulate.datasimulate.po.App;
import spring.datasimulate.datasimulate.dao.AppDao;

import java.util.List;

@Service
public class AppService {
    @Autowired
    private AppDao appDao ;

    public boolean save(App app){
        String appName = app.getAppName();
        List<App> apps = this.selectAppByName(appName);
        if (apps == null || apps.size() == 0) { //去重
            appDao.save(app);
            return true; //添加进去
        }
        return false;
    }

    public List<String> selectAllAppNameDistict(){
        return appDao.selectAllAppNameDistinct();
    }
    public List<App> selectAppByName(String name) {
        return appDao.selectAppByName(name);
    }
}
