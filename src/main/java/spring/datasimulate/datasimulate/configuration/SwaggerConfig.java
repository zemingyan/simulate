package spring.datasimulate.datasimulate.configuration;



import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.context.request.async.DeferredResult;
import spring.datasimulate.datasimulate.annotation.SwaggerIgnore;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;

import static com.google.common.base.Predicates.not;
import static com.google.common.base.Predicates.or;
import static springfox.documentation.builders.PathSelectors.regex;
import static springfox.documentation.builders.RequestHandlerSelectors.withClassAnnotation;

/**
 * Created by Daniel on 16/10/2016.
 */
@Configuration
public class SwaggerConfig {

    @Bean
    public Docket merchantStoreApi() {
        return new Docket(DocumentationType.SWAGGER_2)
                .groupName("internal-api")
                .genericModelSubstitutes(DeferredResult.class)
                .useDefaultResponseMessages(false)
                .forCodeGeneration(true)
                .pathMapping("/")// base，最终调用接口后会和paths拼接在一起
                .select()
                .apis(not(withClassAnnotation(SwaggerIgnore.class))) //SwaggerIngore的注解的controller将会被忽略
                .paths(or(regex("/.*")))
                .build()
                .apiInfo(testApiInfo());
    }


    private ApiInfo testApiInfo() {
        ApiInfo apiInfo = new ApiInfo("项目API",//大标题
                "api介绍",//小标题
                "1.1",//版本
                "NO terms of service",
                "me",//作者
                "点击进入网站界面",//链接显示文字
                "/"//"https://www.baidu.com"//"http://10.0.0.35:4200"//网站链接
        );

        return apiInfo;
    }

}
