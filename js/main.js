let text1 = "Because biofluids are magnetically neutral, there is no background ‘noise’ to remove. Accordingly, the QDTI magnetic based assay requires minimal sample processing (2-steps only) before the sample is interrogated.";

let text2 = "Because the sample is not being repeatedly washed over and over again, there is zero loss of sample material. As such, only a few microliters of sample material is necessary to perform the assay – a critical benefit where sample material is in extremely short supply!";

let text3 = "Despite the dramatically reduced sample prep and sample input needs, the QDTI system is able to delivery ultrasensitive performance without the attendant complexity and costs.  The capability offers new diagnostic tools for improved clinical decisions and better patient health.";

let text4 = "Existing high-sensitivity diagnostics require skilled technicians and laborious processing steps, which increase the time to result and the assay costs. The drastically simpler magnetic assay deliver similar results at lower cost.";

let text5 = "QDTI is building an open platform right from the start, allowing users to develop assays for a wide range of target biomarkers.  Users can build their own homebrew capability.  Moreover, in contrast to all commercialized platform today, the QDTI system can provide detection for not only proteins, but nucleic acids and cells – all on the same detection platform.";

let benefitsList = [text1, text2, text3, text4, text5];


// change the appearance of the clicked items in benefits list
$(".benefits_list li").click(function () {
	$(".benefits_list li").removeClass();
	$(".benefits_list li img").attr("src", "images/plus.png");

	$(".text-column-small").text("");
	$(this).find("div").text(benefitsList[$(this).attr("id")]);

	$(this).addClass("more");
	$(this).find("img").attr("src", "images/minus.png");
	$(".text_column").text(benefitsList[$(this).attr("id")]);
});

// open the side bar.
function openNav() {
	document.getElementById("rightSidebar").style.width = "250px";
	document.getElementById("main").style.marginLeft = "250px";
}

//close the side bar.
function closeNav() {
	document.getElementById("rightSidebar").style.width = "0";
	document.getElementById("main").style.marginLeft = "0";
}

// scroll to the chosen section.
$('.navbar-link').click(function () {
	var href = $(this).attr("href");
	$('html, body').animate({
		scrollTop: $(href).offset().top
	}, 500);
	return false;
});

$('.text-row .more').click(function () {
	if ($('.text-row .more').text() == 'Read More') {
		$('#more-benefits-text').show();
		$('.text-row .more').text('Less');
	} else {
		$('#more-benefits-text').hide();
		$('.text-row .more').text('Read More');
	}

})

// hide the technology info and show the expanded magnetic imaging platform.
$('#magnetic-imaging-card button').click(function () {
	//$('.sensor-tech-card').show("hide", { direction: "right" }, 2000);
	$('#magnetic-imaging-card').hide();
	$('#sensor-tech-card').hide();

	$('#about-imaging').show();
});

// hide the expanded magnetic imaging platform and show the technology info.
$('#about-imaging .card .card-body a').click(function () {
	$('#magnetic-imaging-card').show();
	$('#sensor-tech-card').show();

	$('#about-imaging').hide();
});

// hide the technology info and show the expanded quantum sensor
$('#sensor-tech-card button').click(function () {
	$('#magnetic-imaging-card').hide();
	$('#sensor-tech-card').hide();

	$('#about-sensor').show();
});

// show the technology info and hide the expanded quantum sensor
$('#about-sensor .card .card-body a').click(function () {
	$('#magnetic-imaging-card').show();
	$('#sensor-tech-card').show();

	$('#about-sensor').hide();
});

// toggle core team/board view
$('#core-team').click(function() {
	if ($('#core-team-option').css('display') == 'none') {
		$('#core-team-option').show();
		$('#advisory-board-option').hide();
		$('#advisory-board').css('color', '#818181');
		$('#core-team').css('color', '#f1f1f1');
	}
});

$('#advisory-board').click(function() {
	if ($('#advisory-board-option').css('display') == 'none') {
		$('#advisory-board-option').show();
		$('#core-team-option').hide();
		$('#advisory-board').css('color', '#f1f1f1');
		$('#core-team').css('color', '#818181');
	}
});
  $(document).ready(function(){
    $('.scrollspy').scrollSpy();
  });
