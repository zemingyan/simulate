package spring.datasimulate.datasimulate.hbase.mysql.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import spring.datasimulate.datasimulate.hbase.mysql.dataooject.ShowAppTypeDO;

@Repository
public interface ShowAppTypeDAO extends JpaRepository<ShowAppTypeDO, Integer>{

}
