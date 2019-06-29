
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


