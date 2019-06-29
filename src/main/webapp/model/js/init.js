var header_tag = $("body > header") ; 

var footer_tag = $(" body > footer") ;

$(document).ready(function(){

	requestText(header_tag , HEADER_STRING);
	requestText(footer_tag,FOOTER_STRING);

});