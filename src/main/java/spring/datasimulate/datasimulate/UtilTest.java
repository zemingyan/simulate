package spring.datasimulate.datasimulate;


import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import spring.datasimulate.datasimulate.po.App;

import java.io.*;
import java.util.List;

public class UtilTest {

    public static void main(String[] args) throws IOException {
        InputStream inputStream =new FileInputStream("/home/yanzeming/temp/test");
        StringBuffer stringBuffer = new StringBuffer();
        String line="";
        BufferedReader bufferedReader=new BufferedReader(new InputStreamReader(inputStream));
        line = bufferedReader.readLine();
        while (line != null) {
            stringBuffer.append(line);
            line = bufferedReader.readLine();
        }
        String msg = stringBuffer.toString();
        System.out.println(msg);

        JSONObject jsonObject=JSONObject.fromObject(msg);
        DataUnit dataUnit=(DataUnit)JSONObject.toBean(jsonObject, DataUnit.class);
        System.out.println(dataUnit);

        List<App> apps=dataUnit.getUsage();//里面不是对象，不能直接调用
        JSONArray jsonArrayData = JSONArray.fromObject(apps);

        List list = (List)JSONArray.toList(jsonArrayData, App.class);
        for (int i = 0 ; i < list.size() ; i ++){
            App app = (App)list.get(i);
            System.out.println(app.getAppName()+"  "+app.getPackageName());
        }

        JSONObject json = JSONObject.fromObject(dataUnit);
        System.out.println(json.toString());
    }
}
