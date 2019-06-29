/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package king.application.web.spring.boot.luckseven.minitors.service.feign;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

/**
 *
 * @author king
 */
@FeignClient(name = "assembler")
public interface AssemblerFeignClient {
    
    //相对应的 peizhi 
    @RequestMapping("assembler/leaf/article/fw/{id}")
    public String assemblyArticleFw(@PathVariable("id") String id);
    
    @RequestMapping("pagination")
    public String pagination(@RequestParam("peridocial_page") int peridocial_page , @RequestParam("button_number") int button_number);
    
    @RequestMapping("aside/title")
    public String assemblyAsideTitle(@RequestParam("id") String string);
    
    @RequestMapping("assembler/leaf/asider/line")
    public String assemblyAsiderLine();
    
    @RequestMapping("assembler/leaf/article/inner")
    public String article_inner(String string, Integer page_index, Integer page_size);
}