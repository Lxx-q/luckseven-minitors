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

public class Comment {
    
    private String id = null;
    
    private String userId = null;
    
    private String content = null;
    
    private String createTime = null;
    
    private String belongto = null;
    
    public void setId(String id){
        this.id = id;
    }
    
    public String getId(){
        return this.id;
    }
    
    public void setUserId( String userId ){
        this.userId = userId;
    }
    
    public String getUserId(){
        return this.userId;
    }
    
    public void setContent( String content ){
        this.content = content;
    }
    
    public String getContent(){
        return this.content;
    }
    
    public void setCreateTime( String createTime ){
        this.createTime = createTime;
    }
    
    public String getCreateTime(){
        return this.createTime;
    }
    
    public void setBelongto( String belongto ){
        this.belongto = belongto;
    }
    
    public String getBelongto(){
        return this.belongto;
    }
    
}
