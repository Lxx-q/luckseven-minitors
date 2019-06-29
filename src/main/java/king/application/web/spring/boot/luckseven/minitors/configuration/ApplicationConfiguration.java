/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package king.application.web.spring.boot.luckseven.minitors.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

/**
 *
 * @author king
 */
@Configuration
public class ApplicationConfiguration {
    
    @Bean
    public RestTemplate rest_template(){
        return new RestTemplate();
    }
    
}
