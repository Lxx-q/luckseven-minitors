<%-- 
    Document   : list
    Created on : 2019-5-12, 20:23:02
    Author     : king
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
        <link rel="stylesheet" type="text/css" href="http://localhost:8084/minitors/css/list.css">
    </head>
    <body>

        <div class="search_content">
            <div class="head"></div>
            <div class="content">
                <!-- 相对应的 输入 -->
                <input class ="search_input" type="text"/>
            </div>
            <div class="total">
                
            </div>
        </div>

        <!-- 显示效果的目的地 -->
        <div class="content">
            <!--  开始使用循环 ， 来获取 相对应的 页面效果  ，从这里渲染 相对应 的结果 , 并且 可以从 这里 开始循环-->
            <c:forEach items="${ peridocials }" var ="item">
                <div class="item">
                    <div class="image"><img class="image" src="${ item.image }"></img></div>
                    <div class="name"> ${ item.name }</div>
                    <div class="describe"> ${ item.describe }</div>
                    <div class="number"> ${  item.number } </div>
                    <div class="count"> ${ item.count }</div>
                    <div class="time"> ${ item.date }</div>   
                </div>
            </c:forEach>
        </div>

    </body>
</html>
