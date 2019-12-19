package spring.datasimulate.datasimulate.createdata;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import spring.datasimulate.datasimulate.DataUnit;
import spring.datasimulate.datasimulate.Transform;
import spring.datasimulate.datasimulate.dao.AppDao;
import spring.datasimulate.datasimulate.dao.LastTimeDao;
import spring.datasimulate.datasimulate.dao.UserDao;
import spring.datasimulate.datasimulate.po.App;
import spring.datasimulate.datasimulate.po.LastTimePO;
import spring.datasimulate.datasimulate.po.UserPO;

import javax.servlet.http.HttpServletRequest;
import javax.xml.crypto.Data;
import java.rmi.activation.ActivationGroup_Stub;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Random;
import java.util.concurrent.*;

@RestController
@Service
public class ManyMakeData {
    private Logger logger = LoggerFactory.getLogger(ManyMakeData.class);

    @Autowired
    private UserDao userDao;
    @Autowired
    private CallSimulate callSimulate;

    @RequestMapping(value = "/manySimulate", method = RequestMethod.GET)
    public List<DataUnit> simulate(HttpServletRequest request) throws ExecutionException, InterruptedException {
        List<DataUnit> list = new ArrayList<>();
        List<UserPO> userList = userDao.selectAll();
        ExecutorService executorService = Executors.newCachedThreadPool();

        List<FutureTask<DataUnit>> futureTasks = new ArrayList<>(userList.size());
        for (int i = 0; i < userList.size(); i++){
            callSimulate.setUserPO(userList.get(i));
            FutureTask<DataUnit> futureTask = new FutureTask<>(callSimulate);
            futureTasks.add(futureTask);
            executorService.execute(futureTask);
        }
        executorService.shutdown();
        for (int i = 0 ; i < futureTasks.size() ; i ++ ) {
            FutureTask<DataUnit>  ft = futureTasks.get(i);
            list.add(ft.get());
        }

        return list;
    }

}
