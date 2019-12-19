package spring.datasimulate.datasimulate.hbase.mysql.dao;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RestController;
import spring.datasimulate.datasimulate.hbase.mysql.dataooject.ShowAppDO;
import spring.datasimulate.datasimulate.hbase.mysql.dataooject.ShowUserDO;

import java.util.List;

@Repository
public interface ShowUserDAO extends JpaRepository<ShowUserDO, String>{

    @Query("select user from ShowUserDO user")
    Page<ShowUserDO> listUserByPage(Pageable pageable);

    @Query("select user from ShowUserDO user")
    List<ShowUserDO> listAll();

    @Query("select user.id from ShowUserDO user")
    List<String> listAllUserID();
}
