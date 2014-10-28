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
		$(".fa-check-square-o").on("click", function() {
			if ($(this).closest("div").find("p").hasClass("checked")) {
				$(this).closest("div").find("p").removeClass("checked");
			} else {
			$(this).closest("div").find("p").addClass("checked");
			}
		});
		$(".fa-minus-square-o").on("click", function() {
			$(this).closest("div").remove();
		});
	});
})