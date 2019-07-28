/*
class item{

	context:{},
	end:"sss",

}
*/

function save(key , item){

	//设置 过期 时间 ， 为 5 分钟
	var element = {};

	element.context = item;
	var end = new Date();

	element.end = end;
}

function load(key){
	var element = null;

	//查看 是否 相对应的 element 是否为空

	//若果为空 返回值 ， 如果不为空 ， 返回 相对应的 数值

	if(element == null){
		return null;
	}

	//倘若 为 相对应的 数值 为真 ， 并且 ， 相对应的 end ， 并没有超过 相对应的 element的时间的话
	//才能输出
	
}