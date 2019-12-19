package spring.datasimulate.datasimulate.hbase.mysql.dto;

import spring.datasimulate.datasimulate.hbase.mysql.dao.ShowUserDAO;
import spring.datasimulate.datasimulate.hbase.mysql.dataooject.ShowUserDO;

import javax.persistence.Id;

public class ShowUserPageDTO {
    private Integer number;
    private String id;
    private String province;
    private String city;
    private String name;

    public ShowUserPageDTO(){}
    public ShowUserPageDTO(ShowUserDO showUserDO){
        this.city = showUserDO.getCity();
        this.name = showUserDO.getName();
        this.id = showUserDO.getId();
        this.province = showUserDO.getProvince();
        this.number = showUserDO.getNumber();
    }


}
