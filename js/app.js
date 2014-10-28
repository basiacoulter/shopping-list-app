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
	});
})