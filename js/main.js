AOS.init();

// open the side bar.
function openNav() {
	document.getElementById("right-sidebar").style.width = "250px";
	document.getElementById("main").style.marginLeft = "250px";
}

// close the side bar.
function closeNav() {
	document.getElementById("right-sidebar").style.width = "0";
	document.getElementById("main").style.marginLeft = "0";
}

// scroll to the chosen section and close the sidebar
$('.navbar-link').click(function () {
	var href = $(this).attr("href");
	$('html, body').animate({
		scrollTop: $(href).offset().top
	}, 700);
	closeNav();
	return false;
});

$('#right-sidebar').mouseleave(function() {
	closeNav();
});

// redirect the user to the news page and open the correct news item
function showExpandedView(id) {
	location.href = "news.html#" + id;
}


// expand the section when read more button is clicked
$("#read-more-button").click(function() {
	$("#expanded-text").css('display', 'block');
  $(".benefits-text").css('height', 'auto');
	$("#read-more-button").css('display', 'none');
	$("#read-less-button").css('display', 'block');
});

// make the section smaller when read less button is clicked
$("#read-less-button").click(function() {
	$("#expanded-text").css('display', 'none');
  $(".benefits-text").css('height', '300px');
	$("#read-more-button").css('display', 'block');
		$("#read-less-button").css('display', 'none');
});

// activate scroll spy
  $(document).ready(function(){
    $('.scrollspy').scrollSpy();
  });
