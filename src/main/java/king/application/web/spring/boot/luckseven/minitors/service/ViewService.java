/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package king.application.web.spring.boot.luckseven.minitors.service;

import king.application.web.spring.boot.luckseven.minitors.controller.PageController;
import org.springframework.stereotype.Service;

/**
 *
 * @author king
 */
@Service
public class ViewService {
    
    private final String REDIREC_PATH = "redirect:";
    
    public String getViewPath(Object controller ,String path){
        Class controller_class = controller.getClass();
        StringBuilder builder = new StringBuilder();
        return controller_class.equals(PageController.class) ? builder.append("/jsp/").append(path).append(".jsp").toString():
                builder.append("/model/").append(path).append(".html").toString();
    }
    
    public String redirect(String path){
        return new StringBuilder().append(this.REDIREC_PATH).append(path).toString();
    }
    
    public String model(String path){
        return new StringBuilder().append("/model").append(path).toString();
    }
    
}
