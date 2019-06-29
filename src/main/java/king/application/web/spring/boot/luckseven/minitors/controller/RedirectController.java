/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package king.application.web.spring.boot.luckseven.minitors.controller;

import javax.servlet.http.HttpServletRequest;
import king.application.web.spring.boot.luckseven.minitors.configuration.bean.Login;
import king.application.web.spring.boot.luckseven.minitors.configuration.bean.User;
import king.application.web.spring.boot.luckseven.minitors.service.ApplicationService;
import king.application.web.spring.boot.luckseven.minitors.service.ViewService;
import king.application.web.spring.boot.luckseven.minitors.service.feign.CalculatorFeignClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 *
 * @author king
 */
@RequestMapping("redirect")
@Controller
public class RedirectController {
    
    @Autowired
    private CalculatorFeignClient calculator ;
    
    @Autowired
    private ViewService view;
    
    @Autowired
    private ApplicationService application;
    
    @RequestMapping("login")
    public String login(Login login , User user){
        
        //可能 在calculator 中 有相对应的 不同的便是 ，我们 需要 对 Login 中的 属性 进行 过滤， 
        //防止 出现 只有 一个账号或者 密码 ， 便开始 计算的 问题
        
        if(login.getId() ==null || login.getPassword() == null || login.getId().isEmpty() || login.getPassword().isEmpty()){
            //倘若如此 ， 则操作失败 ， 并且 返回 之前的 距离位置
            return this.view.redirect("/model/login");
        }
        
        User _user = this.calculator.login(login.getId(),login.getPassword());
        
        //之后 ， 我们 可能 需要对 相对应的 calculator， 进行 一次 相对应的 操作
        
        // 然后 ， 我们 就可以 返回 到相对应的 页面
        
        //之后 相对应的 Session 中 注册 相对应的 request
        
        System.out.println(this.application.json(_user));
        
        return _user != null ? this.view.redirect("/model/") : this.view.redirect("/model/login");
        
    }
    
    @RequestMapping("register")
    public String register(Login login, User user , HttpServletRequest request){
        
        //首先 ， 判断 相对应的 信息 是否 有错误
        
        //根据 目标 用户 信息 输入 ， 然后 我们 便可以 确定 相对应的 值 
        User _user = this.calculator.register(user.getUsername(),login.getPassword());
        
        //倘若 结果 为 真 ， 那么 返回 到 相对应的 地址  , 个人 认为 真 则 返回 到 个人 中心 页（但是 现在没有， 错误
        //，则 返回 相对应的  原本的 地址 , 
        return _user != null ? this.view.redirect(this.view.model("/")) : this.view.redirect(this.view.model("/register"));
        
    }
    
}
