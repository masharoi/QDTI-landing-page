
// change the appearance of the clicked items in benefits list
$(".benefits_list li").click(function() {
	$(".benefits_list li").removeClass();
	$(".benefits_list li img").attr("src", "images/plus.png");
	
	$(this).addClass("more");
	$(this).find("img").attr("src", "images/minus.png");
})