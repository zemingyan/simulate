package spring.datasimulate.datasimulate.hbase.mysql.dao;

import org.omg.PortableInterceptor.INACTIVE;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import spring.datasimulate.datasimulate.hbase.mysql.dataooject.ShowAppVersionDO;

import java.util.List;

@Repository
public interface ShowAppVersionDAO extends JpaRepository<ShowAppVersionDO, Integer>{
    @Query("select app.version from ShowAppVersionDO app where app.packetName = :packet")
    List<String> listVersionByPacket(@Param("packet") String packet);
}
