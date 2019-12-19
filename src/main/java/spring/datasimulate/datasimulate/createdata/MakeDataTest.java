package spring.datasimulate.datasimulate.createdata;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

@RestController
public class MakeDataTest {
    @Autowired
    private MakeDataCAS makeDataCAS;
    @RequestMapping(value = "/simulate", method = RequestMethod.GET)
    public void simulate(){
        ExecutorService executorService = Executors.newCachedThreadPool();
        for (int i = 0; i < 40; i++){
            executorService.execute(makeDataCAS);
            System.out.println("************* a" + i + " *************");
        }
        executorService.shutdown();
    }
}
