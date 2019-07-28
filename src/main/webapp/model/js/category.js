
//搜索页面的 相对应的 信息框 
var article_container = $(".category > .container .article_container");

//相对应的 .sidebar 的 数据
var article_mini_container = $(".article_mini_container > .aside-body");

// 这里 填充的 是 相对应的 内部 信息
var article_fw_container = $(".article_fw_container > .aside-body");

var header_tag = $("header") ; 

var footer_tag = $("footer") ;


//相对应的 信息框 的 下面 页数栏的 信息

var article_pagination = null;

// 相对应的 边边框款的 信息， 我们可以确定他为 相对应的 输出 周边信息 
//这个信息 可以 在很大程度上 跟 用户 相关
var aside = null;


$(document).ready(function(){

	//因为  我们使用 js 来进行 主动的 信息 输出 
	//因此 我们 就要 不得不 主动的 进行输出 信息
	//但是 js 在 一般情况 下 必须 被动输出 ， 我们需要声明 信息才能使
	//他 进行 相对应的 工作

	// 如果 一张 页面 进行 刷新的 话 ， 那么 这个 值 就会被 赋值 ， 并且 这个值
	//也是 倘若 用户 进行相对应的 搜索的话 ， 我们 应该 如何 进行处理的 方式
	var string = getParameter("string");

	// 然后 我们 开始 相对应的 工作
	// 初始化 ， 进行 相对应的 进行 获取 相对应的 信息
	
	//主页面的 信息

	// 获取 到 相对应 url 中的 string ， 

	//倘若 该值 ， 为空 ， 就设置 默认的值 ， 进行 相对应的 查询

	//进行 获取 相对应的 值 ， 倘若 输出 为空 ， 那么 
	string = string != undefined? string : "a1";
	drawArticle(string); 	
	drawArticleMini();
	drawArticleFw();



	//写入 周边的 边缘 xinxi 

});

function drawArticle(string){

	//获取 相对应的 信息
	var _url = url(SEARCH_ALL_PERIDOCIAL);

	request(_url,{
		string:string,
		page_index:0,
		page_size:10
	},"text",function(data){
		//获取 相对应的 信息 进行 输出
		article_container.append(data);
	},error);

}


function drawArticleMini(){

	var _url = url(ARTICLE_MINI_MOST) ; 

	request(_url , {} , "text",function(data){

		article_mini_container.append(data);

	},error)

}

function drawArticleFw(){
	var _url = url(ARTICLE_FW_MOST);

	request(_url , {} ,"text",function(data){
		//获取 相对应的 信息
		article_fw_container.append(data);
	},error);
}


function error(request , error , exception){
	alert("this is a error");
}
