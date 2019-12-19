package spring.datasimulate.datasimulate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import spring.datasimulate.datasimulate.hbase.mongo.util.MongoApiList;
import spring.datasimulate.datasimulate.hbase.mysql.dao.ShowAppDAO;
import spring.datasimulate.datasimulate.hbase.mysql.dataooject.ShowAppDO;

import java.io.*;
import java.util.*;

@Controller
public class Index {
    @Autowired
    private ShowAppDAO showAppDAO;
    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String index(){
        return "index";
    }

    @RequestMapping(value = "/listApiName", method = RequestMethod.GET)
    @ResponseBody
    public List<ApiToId> listApiName(){
        List<ApiToId> apiToIds = new ArrayList<>(MongoApiList.nameToApiID.size());
        for (Map.Entry<String, Integer> entry : MongoApiList.nameToApiID.entrySet()){
            ApiToId apiToId  = new ApiToId();
            apiToId.setApiName(entry.getKey());
            apiToId.setId(entry.getValue());
            apiToIds.add(apiToId);
        }
        return apiToIds;
    }


    @RequestMapping(value = "/saveShowApp", method = RequestMethod.GET)
    @ResponseBody
    public String saveApp(){
        String encoding = "UTF-8";
        File file = new File("/home/yanzeming/temp/apptype.txt");
        Long filelength = file.length();
        byte[] filecontent = new byte[filelength.intValue()];
        try {
            FileInputStream in = new FileInputStream(file);
            in.read(filecontent);
            in.close();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        String msg = "";
        try {
            msg = new String(filecontent, encoding);
        } catch (UnsupportedEncodingException e) {
            System.err.println("The OS does not support " + encoding);
            e.printStackTrace();
        }
        String[] s = msg.split("\\)");
        List<ShowAppDO> lists = new ArrayList<>();
        int total = 1;
        for (int i = 0; i < s.length - 1; i ++){
            String[] ss = s[i].split(",");
            int index = 0;

            ShowAppDO showAppDO = new ShowAppDO();
            for (int j = 0; j < ss.length; j ++){
                if (ss[j] != null && !ss[j].equals("")){
                    String v = ss[j].replaceAll("'","");
                    if (index == 0){
                        showAppDO.setAppName(v.substring(1));
                    }else if (index == 1){
                        showAppDO.setPackageName(v);
                    }else if (index == 2){
                        showAppDO.setCount(Integer.valueOf(ss[j]));
                    }else if (index == 3){

                        String tmp = ss[j].replaceAll("'","");
                        System.out.println(tmp);
                        showAppDO.setAppType(tmp);
                    }
                    index ++;
                }
                showAppDO.setId(total);
                // System.out.print(ss[j] + "   ");
            }
            total ++;
            lists.add(showAppDO);

        }
        Set<String> set = new HashSet<>(600);
        for (int i = 0; i < lists.size(); i ++){
            if (!
                    set.contains(lists.get(i).getPackageName())){
                showAppDAO.save(lists.get(i));
            }
            set.add(lists.get(i).getPackageName());
            System.out.println(lists.get(i).toString());
        }
        return "保存成功";
    }


    public class ApiToId{
        private Integer id;
        private String apiName;
        @Override
        public String toString() {
            return "ApiToId{" +
                    "id=" + id +
                    ", apiName='" + apiName + '\'' +
                    '}';
        }
        public Integer getId() {
            return id;
        }
        public void setId(Integer id) {
            this.id = id;
        }
        public String getApiName() {
            return apiName;
        }
        public void setApiName(String apiName) {
            this.apiName = apiName;
        }
    }


}
