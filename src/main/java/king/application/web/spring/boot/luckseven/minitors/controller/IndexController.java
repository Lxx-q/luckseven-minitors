/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package king.application.web.spring.boot.luckseven.minitors.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 *
 * @author king
 */
@RequestMapping("/")
@Controller
public class IndexController {
    
    @RequestMapping("/")
    public Object index(){
            return "redirect:/model/";
    }
    
    
}
