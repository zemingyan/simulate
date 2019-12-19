package spring.datasimulate.datasimulate.hbase.mysql.dao;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import spring.datasimulate.datasimulate.hbase.mysql.dataooject.ShowAppDO;

import java.util.List;

@Repository
public interface ShowAppDAO extends JpaRepository<ShowAppDO, Integer> {

    @Query("select app from ShowAppDO app")
    Page<ShowAppDO> selectAppByPage(Pageable pageable);
    List<ShowAppDO> findAllByAppName(String name);

    @Query("select app.packageName from ShowAppDO app where app.appName =:appName")
    List<String> listAppPacketByAppName(@Param("appName") String appName);
    @Query("select app.packageName from ShowAppDO app")
    List<String> listAllAppPacket();
    @Query("select app.appName from ShowAppDO  app order by app.count desc")
    List<String> listAllAppName();

    @Query("select app.appName from ShowAppDO  app where app.packageName =:package")
    List<String> listAppNameByPackage(@Param("package") String packageName);

    @Query("select app from ShowAppDO app order by app.count desc ")
    List<ShowAppDO> listAll();

    @Query("select app from ShowAppDO app where app.id =:id")
    List<ShowAppDO> listById(@Param("id") Integer integer);

    @Query("select distinct app.appType from ShowAppDO app ")
    List<String> listAppType();

    @Query("select count(app) from ShowAppDO app  where app.appType =:appType")
    Integer countOneAppTypeNum(@Param("appType") String appType);

    @Query("select app from ShowAppDO  app where app.appType =:theType order by app.count desc")
    Page<ShowAppDO> listAppByType(Pageable pageable, @Param("theType") String type);

    @Query("SELECT app from ShowAppDO  app order by app.count desc ")
    Page<ShowAppDO> listAllAppOrderCount(Pageable pageable);
}
