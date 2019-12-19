package spring.datasimulate.datasimulate.controller;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import spring.datasimulate.datasimulate.DataUnit;
import spring.datasimulate.datasimulate.Transform;
import spring.datasimulate.datasimulate.po.App;
import spring.datasimulate.datasimulate.po.UserPO;
import spring.datasimulate.datasimulate.service.AppService;
import spring.datasimulate.datasimulate.service.UserService;

import javax.jws.soap.SOAPBinding;
import java.io.*;
import java.util.List;

@RestController
public class AppController {
    private static Logger logger = LoggerFactory.getLogger(AppController.class);
    @Autowired
    private AppService appService;
    @Autowired
    private UserService userService;


    @RequestMapping(value = "/selectAllAppNameDistict", method = RequestMethod.GET)
    public List<String> selectAllAppNameDistict(){
        return appService.selectAllAppNameDistict();
    }
    @RequestMapping(value = "/insertApp", method = RequestMethod.GET)
    public String insertApp(App app){
        appService.save(app);
        return "掺入";
    }
    @RequestMapping(value = "/selectApp", method = RequestMethod.GET)
    public List<App> selectApp(@RequestParam("name")String name){
        return appService.selectAppByName(name);
    }
    @RequestMapping(value = "/insertAppByFilePath", method = RequestMethod.GET)
    public String insertAppByFileUrl(@RequestParam(value = "filePath",defaultValue ="") String path){
        int addCnt = 0; //无重复的添加的数目
        if (path == null || path.equals("")) path = "/home/yanzeming/temp/test";
        InputStream inputStream = null ;
        try {
            inputStream = new FileInputStream(path);
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
        StringBuffer stringBuffer = new StringBuffer();
        String line="";
        BufferedReader bufferedReader=new BufferedReader(new InputStreamReader(inputStream));
        try {
            line = bufferedReader.readLine();
            while (line != null) {
                stringBuffer.append(line);
                line = bufferedReader.readLine();
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        String msg = stringBuffer.toString();
        System.out.println(msg);

        JSONObject jsonObject=JSONObject.fromObject(msg);
        DataUnit dataUnit=(DataUnit)JSONObject.toBean(jsonObject, DataUnit.class);
        System.out.println(dataUnit);

        List<App> apps=dataUnit.getUsage();//里面不是对象，不能直接调用
        JSONArray jsonArrayData = JSONArray.fromObject(apps);

        List list = (List)JSONArray.toList(jsonArrayData, App.class);
        System.out.println(list.size()+ "   " + "长度");
        for (int i = 0 ; i < list.size() ; i ++){
            App app = (App)list.get(i);
           // System.out.println(app.getAppName()+"  "+app.getPackageName());
            if (appService.save(app)){
                addCnt ++;
            }
        }
        JSONObject json = JSONObject.fromObject(dataUnit);
        System.out.println(json.toString());
        UserPO userPO = Transform.transitionDataUtiltoUserPO(dataUnit);
        userService.insertUser(userPO);
        return "app保存成功,一共添加  "+addCnt;
    }
}
