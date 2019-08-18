/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package king.application.web.spring.boot.luckseven.minitors.service.feign;

import king.application.web.spring.boot.luckseven.minitors.configuration.bean.User;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

/**
 *
 * @author king
 */
@FeignClient(name = "calculator")
public interface CalculatorFeignClient {
     
    /**
     * 
     * 大家 可能 会在这里 有些 疑问 ， 为什么 不使用 相对应的 login 方法 ， 来获取 相对应的 方法 呢？？
     * 
     * 这个 方法 ， 来获取 相对应的 登录后的 信息 ， 
     * return 的值 我们 可以 随意调整
     * @param id
     * @param password
     * @return 
     */
    
    
    @RequestMapping("/calculator/show/login")
    public User login(@RequestParam("id") String id , @RequestParam("password") String password );
    
    /**
     * 由于 相对应的 user 才是 我们 输入 信息的 主要 信息体，因此 ， 我们要将 相对应的 信息 输入
     * @param username
     * @param password
     * @param user
     * @return 
     */
    @RequestMapping("/calculator/insert/register")
    public User register(@RequestParam("username") String username , @RequestParam("password") String password ,@RequestBody User user);
    
}
