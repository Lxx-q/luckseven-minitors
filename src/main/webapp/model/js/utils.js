

function append(element , another_element){
	element.append(another_element);
	return element;
}


//根据 相对应的 方法 进行 获取 url
function url(string){
	var base = "http://localhost:8084/minitors/zuul/assembler/assembler/";
	var _string = base + string;
	return _string;
}

function model_url(string){
	var base = "http://localhost:8084/minitors/model/";
	return base + string;
}


/*
function getParameter(key){

	// 获取 相对应的 值
	var string = window.location.search;

	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = string.substr(1).match(reg);//search,查询？后面的参数，并匹配正则
    if(r!=null){
    	return  unescape(r[2]);
    }
    // 如果 为否  
  	return null;
}
*/
//获取 相对应的 值
function getParameter(variable)
{
       var query = window.location.href.toString().split("?")[1];//截取url中？后的字符串
       
       if( query == undefined ){
       	 return undefined;
       }

       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       
       return undefined;
}


function getQueryVariable(variable)
{
       var query = window.location.href.toString().split("?")[1];//截取url中？后的字符串
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}

function requestText(header_tag , url_string){

	var _url = url(url_string);


	requestByCache(_url , {} , "text" , function(data){
		// 获取 相对应的 信息
		header_tag.append(data);
	});
}


// 完成 相对应的 搜索页面功能
/**

	string : 相对应搜索的 关键字
	limit : 一次输出的 大小
	limit
*/


/*

//目前 暂时 停止 ， 相对应的 功能


// 用来得到 相对应的 文章页面

function drawPeridocialBlock(data){
		//分配相对应的 数据 给予下
		var article_container = [] ; 

		data.forEach(function(item,index){
			//我们设计为相对应的 page/{id} , id 获取 相对应的 值 ， 来得到 相对应的 值
			var article_href = model_url("single/page/" + item.id);
			//最开始的 主要输出点
			var article = $("<article class='col-md-12 article-list'></article>");
			var div_inner = $("<div class='inner'></div>");

			var div_inner_figure = $("<figure></figure>");
			var div_inner_figure_a = $("<a></a>");
			
			//这个地址 应该 使用相对应的 文章传向 地址
			//给 相对应的 a 加上 相对应的 a加上 ， 我们希望设计的 href ，但是 目前 ， 我们还是不太清楚我们会希望加上什么
			div_inner_figure_a.attr("href",article_href);

			var div_inner_figure_a_image = $("<img></img>");

			//为 该图片设计 相对应的 地址
			div_inner_figure_a_image.attr("src" , item.image);

			div_inner_figure_a.append(div_inner_figure_a_image);
			div_inner_figure.append(div_inner_figure_a);
			div_inner.append(div_inner_figure);
			article.append(div_inner);
			//成功添加相对应的值

			var div_details = $("<div class='details'></div>");
			
			var div_detail = $("<div class='detail'></div>");
			var div_detail_category = $("<div class='category'></div>");
			var div_detail_category_a = $("<a></a>");
			//设置相对应的 category_a 设置相对应的 标签文字 ，以及相对应的 连接
			div_detail_category_a.attr("href",article_href);
			div_detail_category_a.text("Happy")
			
			div_detail_category.append(div_detail_category_a);
			div_detail.append(div_detail_category);

			var div_detail_time = $("<div class='time'></div>");
			//设置相对应的 时间信息
			div_detail_time.text(item.date);

			div_detail.append(div_detail_time);
			//将 相对应的 信息进行输入

			div_details.append(div_detail);

			var div_details_h1 = $("<h1></h1>");
			var div_details_h1_a = $("<a></a>");

			//设置 相对应的 a 
			div_details_h1_a.attr("href",article_href);
			div_details_h1_a.text(item.name);

			div_details_h1.append(div_details_h1_a);
			div_details.append(div_details_h1);

			var div_details_p = $("<p></p>");
			//设置 相对应的 p 
			div_details_p.text(item.describe);

			div_details.append(div_details_p);

			var div_details_footer = $("<footer></footer>");

			var div_details_footer_love = $("<a class='love' >")

			//设置 相对应love
			div_details_footer_love.attr("href",100);

			var div_details_footer_love_i = $("<i class='ion-android-favorite-outline'></i>");
			var div_details_footer_love_div = $("<div></div>");
			//设置 相对应的 zhi
			div_details_footer_love_div.text(100);

			//设置 相对应的 zhi 

			div_details_footer_love.append(div_details_footer_love_i);
			div_details_footer_love.append(div_details_footer_love_div);

			div_details_footer.append(div_details_footer_love);

			var div_details_footer_more = $("<a class='btn btn-primary more'></a>");
			// 设置 相对应 href
			div_details_footer_more.attr("href",article_href);

			//可能这个 比较 相对应的 内容 的 内容
			var div_details_footer_more_div = $("<div>More</div>");
			//设置 相对应的 内容

			var div_details_footer_more_div_another = $("<div><i class='on-ios-arrow-thin-right'></i></div>");

			div_details_footer_more.append(div_details_footer_more_div);
			div_details_footer_more.append(div_details_footer_more_div_another);

			div_details_footer.append(div_details_footer_more);
			div_details.append(div_details_footer);

			//设置 相对应的 信息
			div_inner.append(div_details);
			//获取 相对应的 信息
			article.append(div_inner);
			
			article_container.append(article);

		});

		//得到 相对应的 文章 容器 
		return article_container;
	}


//我们 需要的 "一个页面的 大小" ，"我们的页面数量" ，" 我们最大的数量"
function drawPagaination(peridocial_page , max_peridocial_button){
		//相对应的 数据 页数

		//然后我们获取 相对应的数据

		//相对应的 数据
		var div = $("<div class='col-md-12 text-center'></div>");

		//我们的 相对应的 数据

		var pagination = $("<ul class='pagination'></ul>");

		var pagination_prev = $("<li class='prev'><a href='#'><i class='ion-ios-arrow-left'></i></a></li>");
		pagination.append(pagination_prev);

		var size = peridocial_page < max_peridocial_button ? peridocial_page :max_peridocial_button;
		var _boolean = peridocial_page < max_peridocial_button;
		//进行 相对应的 循环
		for(var index = 0  ; index < size ; index++ ){
			var pagination_li = $("<li></li>");
			if( index ==0 ){
				pagination_li.attr("class","active");
			}

			var pagination_li_a = $("<a href='#'></a>");
			// 倘若 情况 为 相对应的 max

			var pagination_li_a_text = index ; 

			if( !_boolean & index == ( size - 2 )){
				pagination_li_a_text = "...";
			}else if( index === ( size - 1 ) ){
				pagination_li_a_text = peridocial_page;
			}else{
				pagination_li_a_text = pagination_li_a_text + 1;
			}

			pagination_li_a.text(pagination_li_a_text);

			pagination_li.append(pagination_li_a);
			pagination.append(pagination_li);
		}

		var pagination_next = $("<li class='next'><a href='#'><i class='ion-ios-arrow-right'></i></a></li>")

		pagination.append(pagination_next);
		div.append(pagination);

		var pagination_help_text_div = $("<div class='pagination-help-text'></div>");

		//设置 相对应的 text
		var pagination_help_text = "hello , word";

		pagination_help_text_div.text(pagination_help_text);
		//输入相对应的 数据
		div.append(pagination_help_text_div);

		return div;
	}

	//得到 相对应的 信息
	//参数只是 传输过来的 一条数据 而已
function drawArticleFW(item){

		//获取 相对应的 主题
		var article_fw = $("<div class='article-fw'></div>");

		var article_fw_inner = $("<div class='inner'></div>");
		//得到 相对应的 figure
		var article_fw_inner_figure = $("<figure></figure>");
		var article_fw_inner_figure_a = $("<a></a>");
		//获取 相对应的 数值
		article_fw_inner_figure_a.attr("href" , item.href);
		
		//获取 相对应的的 figure
		article_fw_inner_figure.append(article_fw_inner_figure_a);
		article_fw_inner.append(article_fw_inner_figure);

		var article_fw_details = $("<div class='details'></div>");
		
		var article_fw_details_h1 = $("<h1></h1>");
		var article_fw_details_h1_a = $("<a></a>");

		//配置 相对应的 链接 与 文档

		article_fw_details_h1_a.attr("href",item.href);
		article_fw_details_h1_a.text(item.name);

		article_fw_details_h1.append(article_fw_details_h1_a);

		article_fw_details_p = $("<p></p>");
		//设置 p 的 相对应的 内容

		article_fw_details_p.text(item.describle);
		article_fw_details.append(article_fw_details_p);
		
		var article_fw_details_detail = $("<div class='detail'></div>");

		var article_fw_details_detail_time = $("<div class='time'></div>");
		article_fw_details_detail_time.text(item.time);

		article_fw_details_detail.append(article_fw_details_detail_time);

		//成功 添加 相对应的 时间
		var article_fw_details_detail_category = $("<div class='category'></div>");
		var article_fw_details_detail_category_a = $("<a></a>");

		article_fw_details_detail_category_a.attr("href",item.href);
		article_fw_details_detail_category_a.text("Happy");
		article_fw_details_detail_category.append(article_fw_details_detail_category_a);

		article_fw_details_detail.append(article_fw_details_detail_category);

		//第三层 添加 已经完成
		article_fw_details.append(article_fw_details_detail);

		article_fw_inner.append(article_fw_details);
		article_fw.append(article_fw_inner);

		//输出 相对应的 信息 
		return article_fw;
	}

	*/