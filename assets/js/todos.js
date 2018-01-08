$("li").click(function(){

	$(this).toggleClass("completed");

	});

$("span").click(function(event){
	$(this).parent().fadeOut(2000,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

