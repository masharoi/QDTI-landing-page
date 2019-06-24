var simplePreparation = "The QDTI magnetic based assay requires minimal sample processing before the sample is measured.  Many existing systems have many steps that require technician time before the test can be run.";

var minimalInput = "Because the sample is not being repeatedly washed before reading, there is little loss of sample material. As such, the QDTI diagnostic protocol requires only a few microliters of sample to perform the assay – a critical benefit when sample availability is limited.";

var ultrasensitive = "Despite the dramatically reduced sample prep and sample input needs, the QDTI system can deliver ultrasensitive performance without the attendant complexity and costs.  The capability offers new diagnostic tools for improved clinical decisions and better patient health.";

var reducedCosts = "Existing high-sensitivity diagnostics require skilled technicians and many processing steps, which increase the time to result and the assay costs.  The simpler magnetic assay delivers similar results at lower total cost, and with much less biowaste and use of plastics.";

var flexibility = "QDTI is building an open platform right from the start.  Users will be able to use the QDTI technology platform to build their own assays for their own drug discovery, companion diagnostics, or other application needs. In addition to proteins, the QDTI system will also be able to provide detection for nucleic acids and cells – all on the same detection platform.";

var benefitsList = [simplePreparation, minimalInput, ultrasensitive, reducedCosts, flexibility];

var magneticAssayMoreText = "Detecting biomolecules, such as proteins or nucleic acids, present at low concentrations within blood or other biofluids represents a significant technical challenge.  Yet, recent biomedical and clinical research reveals that being able to quantify these low abundance biomolecules is becoming increasingly important to patient care, drug discovery and development efforts, and basic science investigation. Proteins themselves are tiny.  So in order to detect these biomolecules, tags (e.g., antibodies) that bind to a protein target of interest in a highly specific and high affinity manner are used to make tag-protein complexes.  These tags are also attached to labels that allow for optical signal based detection of the protein-tag complexes.  The presence of a certain protein, for example, can be quantified by measuring the optical signal strength resulting from a sample that has been treated with target specific tags. Unfortunately, biofluids such as blood, where clinicians would like to measure for certain proteins, are inherently “noisy” for optical measurements due to the presence of intrinsically auto-fluorescent contaminants.  As a result, optical based detection technologies need to be washed repeatedly (e.g., sample processing) in order to remove background and to enrich for protein-tag complexes before a true optical based signal can be observed. In contrast, blood and other biofluids have minimal magnetic background signal.  So an assay that utilizes a magnetic detection approach (versus optical detection approach) should provide ultrasensitive measurement capabilities coupled with minimal washing or sample preparation.  That is what the QDTI detection platform can deliver. First, QDTI leverages decades of immunoassay tool development (e.g., target specific tags, or antibodies) yet replaces the optical labels with novel magnetic labels that generate special, tiny magnetic fields. Second, the NV-center powered imaging platform is able to detect these novel magnetic tags rapidly, discretely and in a manner compatible with biological samples. The end result is an ultrasensitive detection platform that requires minimal sample processing and substantially reduced technician time.";

let magneticAssayLessText = "Detecting biomolecules, such as proteins or nucleic acids, present at low concentrations within blood or other biofluids represents a significant technical challenge.  Yet, recent biomedical and clinical research reveals that being able to quantify these low abundance biomolecules is becoming increasingly important to patient care, drug discovery and development efforts, and basic science investigation. Proteins themselves are tiny.  So in order to detect these biomolecules, tags (e.g., antibodies) that bind to a protein target of interest in a highly specific and high affinity manner are used to make tag-protein complexes.  These tags are also attached to labels that allow for optical signal based detection of the protein-tag complexes.  The presence of a certain protein, for example, can be quantified by measuring the optical signal strength resulting from a sample that has been treated with target specific tags.";

AOS.init();

// change the appearance of the clicked items in benefits list
$(".benefits-list li").click(function () {
	$(".benefits-list li").removeClass();
	$(".benefits-list li img").attr("src", "images/plus.png");

	$(".text-column-small").text("");
	$(this).find("div").text(benefitsList[$(this).attr("id")]);

	$(this).addClass("more");
	$(this).find("img").attr("src", "images/minus.png");
	$(".text-column").text(benefitsList[$(this).attr("id")]);
});

// open the side bar.
function openNav() {
	document.getElementById("right-sidebar").style.width = "250px";
	document.getElementById("main").style.marginLeft = "250px";
}

//close the side bar.
function closeNav() {
	document.getElementById("right-sidebar").style.width = "0";
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
		$('.text-row .more').text('Read Less');
	} else {
		$('#more-benefits-text').hide();
		$('.text-row .more').text('Read More');
	}

})

// hide the technology info and show the expanded magnetic imaging platform.
$('#magnetic-imaging-card button').click(function () {
	$('#default-technologies').hide();
	$('#technologies-imaging').css('display', 'flex');
});

// hide the expanded magnetic imaging platform and show the technology info.
$('#technologies-imaging .card .card-body a').click(function () {
	$('#default-technologies').show();
	$('#technologies-imaging').hide();
});

// hide the technology info and show the expanded quantum sensor
$('#sensor-tech-card button').click(function () {
	$('#default-technologies').hide();
	$('#technologies-sensor').css('display', 'flex');
});

// show the technology info and hide the expanded quantum sensor
$('#technologies-sensor .card .card-body a').click(function () {
	$('#default-technologies').show();
	$('#technologies-sensor').hide();
});

// redirect the user to the news page and open the correct news item
function showExpandedView(id) {
	location.href = "news.html#" + id;
}

// expand the text in the magnetic assay technology section
$(".more-technology").click(function() {
	if ($(".more-technology").text() == "Read More") {
		$("#assay-technology-background").css("height", "20vh");
		$("#assay-text").text(magneticAssayMoreText);
		$(".more-technology").text("Read Less");
	} else {
		$("#assay-technology-background").css("height", "40vh");
		$("#assay-text").text(magneticAssayLessText);
		$(".more-technology").text("Read More");
	}

});

// activate scroll spy
  $(document).ready(function(){
    $('.scrollspy').scrollSpy();
  });
