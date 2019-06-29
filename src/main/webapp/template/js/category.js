
$(document).ready(function(){

	//相对应的 我们使用这个区调用相对应的 
	var url_search_peridocial = url(SEARCH_ALL_PERIDOCIAL) ;
	searchAll(url_search_peridocial , {
		string:"a123"
	} , 0 , 10 ,drawPeridocialBridge);

});


function searchAll(url,data, page_index,page_size , success_function){

	//获取 相对应的 两个部分 的 值 

	data["page_index"] = page_index;
	data["page_size"]  = page_size;

	request(url,data,success_function,function(status , error){
		//倘若错误怎么样渲染下面的页面
		// 输出 错误的 信息 
		// 我们 设置 相对应的 信息 内容
		alert("this is a error :\t" + error)
	});

}

//相对应的 periodical
var PERIDOCIAL_DATA = null;

//相对应的 最喜欢的 星号
var FAVORITES_DATA = null;

//相对应的 近期 信息
var RECENT_DATA = null;

var PAGE_SIZE = 5 ;

function drawPeridocialBridge(data){
		//分配相对应的 数据 给予下

		PERIDOCIAL_DATA = data;

		var article_container = $(".category > .container .article_container");

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

		// 得到 相对应的 pagaintation 
		drawPagaination(10);
		//之后 向 相对应的 容器 添加 相对应的 周长之内的 
		article_container.append(controller_pagination);
	}



	var peridocial_page = 0 ;

	var now_peridocial_page = 0;

	var max_peridocial_button = 5;

	//进行 配置 相对应的 page

	var controller_pagination = null;

	function drawPagaination(_peridocial_page){
		//相对应的 数据 页数
		peridocial_page = _peridocial_page
		//初始化 当前页数 
		now_peridocial_page = 0;

		//然后我们获取 相对应的数据

		//相对应的 数据
		var div = $("<div class='col-md-12 text-center'></div>");

		//我们的 相对应的 数据

		var pagination = $("<ul class='pagination'></ul>");

		var pagination_prev = $("<li class='prev'><a href='#'><i class='ion-ios-arrow-left'></i></a></li>");
		pagination.append(pagination_prev);

		var size = peridocial_page < max_peridocial_button ? peridocial_page :max_peridocial_button;
		var zhengzhenghao = peridocial_page < max_peridocial_button;
		//进行 相对应的 循环
		for(var index = 0  ; index < size ; index++ ){
			var pagination_li = $("<li></li>");
			if( index ==0 ){
				pagination_li.attr("class","active");
			}

			var pagination_li_a = $("<a href='#'></a>");
			// 倘若 情况 为 相对应的 max

			var pagination_li_a_text = index ; 

			if( !zhengzhenghao & index == ( size - 2 )){
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

		controller_pagination = div;
	}

	function controllPagination(control_function){

		// 相对应的 数据 

		//获取 相对应 仪表板的 标签

		//相对应的 帮助页面
		var pagination_help_text = $(".pagination-help-text");



		//然后 我们就开始 进行 相对应的 控制 
		//然后 我们 就开始 进行 相对应的 进行 控制

	}