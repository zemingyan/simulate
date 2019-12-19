package spring.datasimulate;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@EnableScheduling
@SpringBootApplication
@EnableSwagger2  // 生成api文档的标签
public class DatasimulateApplication {
	public static void main(String[] args)  {
		SpringApplication.run(DatasimulateApplication.class, args);
	}
}
// 30  24
// yyyy-MM-dd
/*
usesHistorys: {
		UsesHistoryDatas: [
		{appUseTime: '00:00', appUselen: 1, appName: 'Australia'},
		{appUseTime: '01:15', appUselen: 2, appName: 'Canada'},
		{appUseTime: '02:30', appUselen: 1, appName: 'China'},
		{appUseTime: '03:45', appUselen: 4, appName: 'Cuba'},
		{appUseTime: '05:00', appUselen: 8, appName: 'Finland'},
		{appUseTime: '06:15', appUselen: 54, appName: 'France'},
		{appUseTime: '07:30', appUselen: 2, appName: 'Germany'},
		{appUseTime: '08:45', appUselen: 6, appName: 'Iceland'},
		{appUseTime: '10:00', appUselen: 9, appName: 'India'},
		],
		historyXtime: ['00:00', '01:15', '02:30', '03:45', '05:00', '06:15', '07:30', '08:45', '10:00'],
		}*/
