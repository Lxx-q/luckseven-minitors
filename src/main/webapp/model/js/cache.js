/*
class item{

	content:{},
	end:"sss",

}
*/

//获取 当前的 缓存引擎
var CACHE_ENGINE = window.localStorage;


function allowCache(){

	//判断缓存 是否 可用
	return CACHE_ENGINE != null ;
}


function save(key , item){

	//设置 过期 时间 ， 为 5 分钟
	var element = {};

	element.content = item;

	//计算 公式含义为 1000 毫秒 = 1 秒 * 60 * 5 = 5 分钟
	var end = new Date().getTime() + (1000 * 60 * 5);

	element.end = end;

	console.log(element);


	//然后 存入 相对应的 引擎之中

	//将相对应的 js 对象 ， 转化为 json  信息 对象

	var element_string = JSON.stringify(element);

	CACHE_ENGINE.setItem(key,element_string);
	//返回相对应的 引擎中的 内容包
	return element;
}

function load(key){

	var element_string = CACHE_ENGINE.getItem(key);

	//由于存储的 是 json 语句 ， 因此 ， 需要 进行 相对应的 转化 

	var element = JSON.parse(element_string);
	//查看 是否 相对应的 element 是否为空

	//若果为空 返回值 ， 如果不为空 ， 返回 相对应的 数值
	//获取当前时间


	var now_time = new Date().getTime();

	console.log(element == null || now_time > element.end);

	if(element == null || now_time > element.end){
		return null;
	}

	//保留相对应的 element ， 来进行 相对应的 维护
	console.log(element);
	return element.content;

	//倘若 为 相对应的 数值 为真 ， 并且 ， 相对应的 end ， 并没有超过 相对应的 element的时间的话
	//才能输出	
}

function getCacheId( url , data ){

	//然后 我们 输出 相对应的 信息
	var id = url ; 
        
	return id;
}