/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package king.application.web.spring.boot.luckseven.minitors.configuration.bean;


/**
 *
 * @author king
 */

//一般用户


public class User {

    
    private String id = null;
    
    private String username = null;
    
    /*
    
    下面便是 与用户 相关的一系列的信息
    
    */
    
    public void setId(String id){
        this.id = id ;
    }
    
    public String getId(){
        return this.id;
    }
    
    public void setUsername(String name){
        this.username = name;
    }
    
    public String getUsername(){
        return this.username;
    }
    
}
