package spring.datasimulate.datasimulate.hbase.mysql.bo;

import org.omg.Messaging.SYNC_WITH_TRANSPORT;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import spring.datasimulate.datasimulate.hbase.mysql.NumUtil;
import spring.datasimulate.datasimulate.hbase.mysql.dao.ShowAppDAO;
import spring.datasimulate.datasimulate.hbase.mysql.dataooject.ShowAppDO;
import spring.datasimulate.datasimulate.hbase.mysql.dto.ShowAppMultipleDTO;

import java.util.ArrayList;
import java.util.List;

@Service
public class ShowAppBO {
    @Autowired
    private ShowAppDAO showAppDAO;

    public Page<ShowAppDO> listAppByPage(int page) {
       /* Sort.Order order=new Sort.Order(Sort.Direction.DESC,"packet_name");
        Sort sort=new Sort(order);*/
        PageRequest pageable = new PageRequest(page, NumUtil.TEN);
         List<ShowAppDO> list = showAppDAO.findAllByAppName("Shadowsocks");
        System.out.println(list.size() + list.get(0).toString());
        //return null;
        return showAppDAO.selectAppByPage(pageable);
    }

    public List<ShowAppDO> listAppsByAppName(String appName) {
        return showAppDAO.findAllByAppName(appName);
    }

    public List<String> listAppPacketByAppName(String appName) {
        return showAppDAO.listAppPacketByAppName(appName);
    }

    public List<String> listAllAppPacket() {
        return showAppDAO.listAllAppPacket();
    }

    public List<String> listAllAppName() {
        return showAppDAO.listAllAppName();
    }

    public List<ShowAppMultipleDTO> listAllAppNameAndId() {
        List<ShowAppDO> showAppDOS = showAppDAO.listAll();
        System.out.println(showAppDOS.size() + "    长度");
        List<ShowAppMultipleDTO> lists = new ArrayList<>(showAppDOS.size());
        for (ShowAppDO sa : showAppDOS){
            ShowAppMultipleDTO showAppMultipleDTO = new ShowAppMultipleDTO();
            showAppMultipleDTO.setId(sa.getId());
            showAppMultipleDTO.setItemName(sa.getAppName());
            lists.add(showAppMultipleDTO);
        }
        return lists;
    }

    public List<String> listAppType() {
        return showAppDAO.listAppType();
    }

    public List<ShowAppDO> listAppByType(String type, int page) {
        PageRequest pageable = new PageRequest(page, NumUtil.TEN);
        Page<ShowAppDO> appPage = showAppDAO.listAppByType(pageable, type);
        List<ShowAppDO> showAppDOS = appPage.getContent();
        return showAppDOS;
    }

    public List<ShowAppDO> listAllAppRank(int page) {
        PageRequest pageable = new PageRequest(page, NumUtil.TEN);
        Page<ShowAppDO> appPage = showAppDAO.listAllAppOrderCount(pageable);
        List<ShowAppDO> showAppDOS = appPage.getContent();
        return showAppDOS;
    }
}
