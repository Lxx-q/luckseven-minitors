

function request(url,data,success_function,error_function){
	$.ajax({
		url:url,
		data:data,
		success:success_function,
		error:error_function,
		dataType:"json",
		type:"post",
		async:false
	});
}
