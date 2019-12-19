package spring.datasimulate.datasimulate.hbase.mysql.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import spring.datasimulate.datasimulate.hbase.hbasedao.HbaseOperate;
import spring.datasimulate.datasimulate.hbase.hbaseutils.family.SingleAppFamilies;
import spring.datasimulate.datasimulate.hbase.mysql.bo.ShowAppBO;
import spring.datasimulate.datasimulate.hbase.mysql.bo.ShowAppVersionBO;
import spring.datasimulate.datasimulate.hbase.mysql.dataooject.ShowAppVersionDO;

import java.util.List;

@Api(description = "mysql中app版本处理")
@RestController
public class ShowAppVersionController {
    @Autowired
    private HbaseOperate hbaseOperate;
    @Autowired
    private ShowAppBO showAppBO;

    @Autowired
    private ShowAppVersionBO showAppVersionBO;

    @ApiOperation(value = "存储app和其版本", notes = "传入app_版本字符串,出入数据库")
    @RequestMapping(value = "saveAppVersion", method = RequestMethod.GET)
    public ShowAppVersionDO saveAppVersion(@ApiParam(value = "版本字符串,格式为 packet_1.1",
        required = true, defaultValue = "xsky.txvpn_4.0")@RequestParam("packetVersion")
        String packetVersion){
        String [] value = packetVersion.split("_");
        ShowAppVersionDO  showAppVersionDO = new ShowAppVersionDO();
        showAppVersionDO.setPacketName(value[0]);
        showAppVersionDO.setVersion(value[1]);
        return showAppVersionBO.saveAppVersion(showAppVersionDO);
    }
    @ApiOperation(value = "将所有app和版本分离开存储", notes = "传入app_版本字符串,出入数据库")
    @RequestMapping(value = "dealAppVersion", method = RequestMethod.GET)
    public String dealAppVersion(){
       /*List<String> packets = showAppBO.listAllAppPacket();
        for (String packet : packets){
            List<ShowAppVersionDO> showAppVersionDOS = hbaseOperate
                .getShowAppVersionByFamily(SingleAppFamilies.tableName,
                packets.get(0), "version");
            for (ShowAppVersionDO sav : showAppVersionDOS){
                showAppVersionBO.saveAppVersion(sav);
            }
        }*/
        return "存储成功";
    }
    @ApiOperation(value = "根据包名查询版本", notes = "根据包名,返回版本的结果集")
    @RequestMapping(value = "listVersionByPacket", method = RequestMethod.GET)
    public List<String> listVersionByPacket(@ApiParam(value = "包名", required = true,
        defaultValue = "ctrip.android.view")@RequestParam("packet") String packet){
        List<String> versions = showAppVersionBO.listVersionByPacket(packet);
        return versions;
    }
}
