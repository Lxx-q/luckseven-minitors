/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package king.application.web.spring.boot.luckseven.minitors.controller;

import king.application.web.spring.boot.luckseven.minitors.configuration.bean.Article;
import king.application.web.spring.boot.luckseven.minitors.service.ViewService;
import king.application.web.spring.boot.luckseven.minitors.service.feign.CalculatorFeignClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

/**
 *
 * @author king
 */
@RequestMapping("model")
@Controller
public class ViewController {

    @Autowired
    private ViewService view;

    @Autowired
    private CalculatorFeignClient calculator;

    @RequestMapping("/")
    public Object index() {
        //从相对应的 application 的 信息 可以 获取 相对应的 信息
        return this.view.redirect(this.view.model("/index"));
    }
    
    @RequestMapping("/another_index")
    public Object another_index(){
        return this.view.getViewPath(this, "_index");
    }

    //我们就简单的设计一个相对应的 page , 但是 ， 后期我们必须 见他们进行消除 ， 因为可能在各个场景中我们需要不同的加法
    @RequestMapping("403")
    public Object _403() {
        return this.view.getViewPath(this, "403");
    }

    @RequestMapping("404")
    public Object _404() {
        return this.view.getViewPath(this, "404");
    }

    @RequestMapping("500")
    public Object _500() {
        return this.view.getViewPath(this, "500");
    }

    @RequestMapping("category")
    public Object category() {
        // 我们提供 一下 相对应的 信息
        return new ModelAndView(this.view.getViewPath(this, "category"));
    }

    @RequestMapping("contact")
    public Object contact() {
        return this.view.getViewPath(this, "contact");
    }

    @RequestMapping("element")
    public Object element() {
        return this.view.getViewPath(this, "element");
    }

    @RequestMapping("forgot")
    public Object forgot() {
        return this.view.getViewPath(this, "forgot");
    }

    @RequestMapping("page")
    public Object page() {
        return this.view.getViewPath(this, "page");
    }

    @RequestMapping("reset")
    public Object reset() {
        return this.view.getViewPath(this, "reset");
    }

    @RequestMapping("/index")
    public Object _index() {
        return this.view.getViewPath(this, "index");
    }

    @RequestMapping("login")
    public Object login() {
        return new ModelAndView(this.view.getViewPath(this, "login"));
    }

    @RequestMapping("register")
    public Object register() {
        return new ModelAndView(this.view.getViewPath(this, "register"));
    }

    @RequestMapping("single")
    public Object single_id( String id ) {

        //我们目前 设计为 相对应的 设计 ， 
        //根据 id 的 值 进行 判断 ， 根据 id 的不同获取不同的 值 ， 当然 也会遇见 id 无的 页面 ， 那么 我们 应该跳转到 404 页面， 或者说
        //当前 我们 并未简单 相对应的 
        //倘若 相对应的 peridocial  如果为 空
        //获取 相对应的 值
        //我们要判断 ，  如果 id 为 文件 
        if (id == null) {
            return this.view.redirect(this.view.model("/404"));
        }
        
        //假设 ， 我们在这里设置 相对应
        //在这里 ， 我们 暂时 先用 相对应的 jsp 方法 来进行操作
        
        
        
        /*if (article == null) {
            //如果 该 article 为 空 ， 那么 就会被 转移到404 页面
            return this.view.redirect(this.view.model("/404"));
        }*/
        //倘若能成功 那么 就会返回相对应的 页面
        return this.view.getViewPath(this, "single");
    }

    @RequestMapping("single/page/{id}")
    public Object single_page(@PathVariable("id") String id) {
        return this.view.redirect(new StringBuilder().append("/model/single").append("?id=").append(id).toString());
    }

    @RequestMapping("starter")
    public Object starter() {
        return this.view.getViewPath(this, "starter");
    }

    @RequestMapping("jsp")
    public Object joke(String string) {
        return new ModelAndView("/jsp/magazine.jsp", "string", string);
    }
}
