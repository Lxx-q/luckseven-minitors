/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package king.application.web.spring.boot.luckseven.minitors.controller;

import java.util.List;
import king.application.web.spring.boot.luckseven.minitors.configuration.bean.Peridocial;
import king.application.web.spring.boot.luckseven.minitors.configuration.bean.PeridocialBrief;
import king.application.web.spring.boot.luckseven.minitors.service.RestTemplateService;
import king.application.web.spring.boot.luckseven.minitors.service.UrlService;
import king.application.web.spring.boot.luckseven.minitors.service.ViewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.ModelAndView;

/**
 *
 * @author king
 */
@Controller
@RequestMapping("page")
public class PageController {

    @Autowired(required = false)
    private RestTemplate template;

    @Autowired
    private UrlService url;
    
    @Autowired
    private RestTemplateService restTemplate;
    
    @Autowired
    private ViewService view;

    @Autowired
    private ApplicationContext applicationContext;

    @RequestMapping("hello")
    public Object hello() {
        return this.view.getViewPath(this,"hello");
    }
    
    @RequestMapping("show")
    public Object list(String string){
        return new ModelAndView(this.view.getViewPath(this,"show"));
    }

    @RequestMapping("list")
    public Object show(Peridocial peridocial) {
        MultiValueMap<String, Object> request = new LinkedMultiValueMap<>();
        this.restTemplate.add(request,peridocial);
        List<PeridocialBrief> peridocials = this.template.postForObject("http://localhost:8084/calculator/search/peridocial/brief", request, List.class);
        System.out.println(peridocials);
        return new ModelAndView(this.view.getViewPath(this,"list"),"peridocials",peridocials);
    }
    
}
