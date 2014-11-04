$(document).ready(function() {
	$("#addbutton").on("click", function() {
		var value = $("#newitem").val();
		var listItem = $("<div class='item'>" + 
							"<p>"+value+"</p>" +				
							"<i class='fa fa-minus-square-o'></i>" +
							"<i class='fa fa-check-square-o'></i>" +
						"</div>");
		if (value.length > 0) {
			$(".list").prepend(listItem);
		} 
		$(listItem).children(".fa-check-square-o").on("click", function() {
			$(this).closest("div").find("p").toggleClass("checked");
		});
		$(listItem).children(".fa-minus-square-o").on("click", function() {
			$(this).closest("div").remove();
		});
	});
})