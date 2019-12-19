package spring.datasimulate.datasimulate.statistics_aop;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.net.InetAddress;
import java.net.UnknownHostException;

@Service
@RestController
public class AnalysisIP {
    private static Logger logger = LoggerFactory.getLogger(AnalysisIP.class);
    @RequestMapping(value = "/getIP", method = RequestMethod.GET)
    public String getIP(HttpServletRequest request){
        return getIpAddr(request);
    }
    public  String getIpAddr(HttpServletRequest request) {
        String ip = request.getHeader("x-forwarded-for");
        logger.info("x-forwarded-for   " + ip );
        if(ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getHeader("Proxy-Client-IP");
            logger.info("Proxy-Client-IP   " + ip );
        }
        if(ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getHeader("WL-Proxy-Client-IP");
            logger.info( "WL-Proxy-Client-IP  " + ip);
        }
        if(ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getHeader("X-Real-IP");
            logger.info( "X-Real-IP  " + ip);
        }
        if(ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
            logger.info("ip 地址测试 " + ip);
            ip = request.getRemoteAddr();
            logger.info( "获取远程地址  " + ip);
            if(ip.equals("127.0.0.1")){
                //根据网卡取本机配置的IP
                InetAddress inet=null;
                try {
                    inet = InetAddress.getLocalHost();
                } catch (UnknownHostException e) {
                    e.printStackTrace();
                }
                ip= inet.getHostAddress();
                logger.info("最终获取本机ip " + ip);
            }
        }//http://localhost:8000/getIP
        logger.info("IP地址  " + ip);
        // 对于通过多个代理的情况，第一个IP为客户端真实IP,多个IP按照','分割
        if(ip != null && ip.length() > 15){
            if(ip.indexOf(",")>0){
                ip = ip.substring(0,ip.indexOf(","));
            }
        }
        logger.info("检测是否获取的是ip6    " + ip);
        if (ip.equals("0:0:0:0:0:0:0:1")){
            ip = "127.0.0.1";
        }
        logger.info("最终的ip地址是   " + ip);
        return ip;
    }
}
