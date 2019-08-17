var header_tag = $("body > header") ; 

var footer_tag = $(" body > footer") ;

$(document).ready(function(){

	requestText(header_tag , HEADER_STRING);

	//之前是由当妈直接生成 ， 但是 现在 需要一些变化
	//requestText(footer_tag , FOOTER_STRING);
	
	//下面 开始 设计 相对应的 绑定函数



	var footer_show_switch = true;


	$(window).on("scroll",function(){

		//当前 页面顶部的 高度 
		var scrollTop = $(this).scrollTop();

		// 获取 电脑屏幕的 高度
		var window_height = $(this).height();

		//整张网页的  高度 
		//之所以 不设置为 相对应的 全局 变量 ， 便是 为了 防止 相对应的 页面长度 变化的 情况 发生
		var document_height = $(document).height();


		/*
		 * 倘若在当前的 通讯开关 开启 
		 *  我们的 逻辑 便是 ，当前的高度， 不能低于  （0.8的 网页长度  - 
		 * 屏幕长度
		 */ 
		if( footer_show_switch && scrollTop >= 0.8 * document_height - window_height ){


			//s运行 相对应的 程序 
			requestText(footer_tag , FOOTER_STRING);
			//之后 关闭 相对应的 开关
			footer_show_switch = false;
		}
	});

});