// Check Off Specific Todos By Clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//Click on X to delete Todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		AddTodo(this);
	}
});

$(".fa-plus").click(function(){
	$("#AddNew").fadeToggle()
});

$("#AddNew > button").click(function(){
	AddTodo($("#AddNew > input"));
});

function AddTodo(input){
	var todoText = $(input).val();
	$(input).val("");
	$("ul").append("<li><span><i class='fa fa-trash'></i></span> " 
		+ todoText 
		+ "</li>");
}