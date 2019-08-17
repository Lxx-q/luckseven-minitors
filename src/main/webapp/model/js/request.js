
const REQUEST_DATATYPE_JSON = "json";

const REQUEST_DATATYPE_TEXT = "text";

function request(url,data,dataType,success_function,error_function){
	$.ajax({
		url:url,
		data:data,
		success:success_function,
		error:error_function,
		dataType:dataType,
		type:"post",
		async:false
	});
}


//下面 ， 我们 编写 一个 拥有 相对应 缓存功能的 request 请求 函数

function  requestByCache( url , data , dataType , success_function , error_function ){

	//下面 我开始 使用 相对应的 url

	//根据 相对应的 信息 获取 相对应key

	var key = getCacheId( url , data );

	var item = load( key );

	console.log(item);
	//倘若 相对应的 结果 为空  ， 便是 含义 ， 便是 无缓存 
	if( item == null || item == undefined ){
		//那么 下面 我们便要 生成 相对应的 缓存 结果
		request(url , data , dataType , function(data){
			//正常的 运行结果
			success_function(data);
			//之后对结果进行缓存
			save(key,data);
		} , error_function);

		//并且 保存相对应的 结果 
	}else{
		//倘若缓存存在 ， 那么变运行 相对应的 结果
		success_function(item);
	}


}
