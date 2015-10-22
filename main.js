$(document).ready(function(){
	$("#orange").mouseover(function(){
		$('#box').html('Orange area: Unprotected');
		});
	$("#purple").mouseover(function(){
		$('#box').html('Purple area: Protected');
		});
	$("#yellow").mouseover(function(){
		$('#box').html('Yellow area: Seasonally protected');
		});
});
