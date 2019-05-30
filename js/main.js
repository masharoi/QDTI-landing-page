let simplePreparation = "Because biofluids are magnetically neutral, there is no background ‘noise’ to remove. Accordingly, the QDTI magnetic based assay requires minimal sample processing (2-steps only) before the sample is interrogated.";

let minimalInput = "Because the sample is not being repeatedly washed over and over again, there is zero loss of sample material. As such, only a few microliters of sample material is necessary to perform the assay – a critical benefit where sample material is in extremely short supply!";

let ultrasensitive = "Despite the dramatically reduced sample prep and sample input needs, the QDTI system is able to delivery ultrasensitive performance without the attendant complexity and costs.  The capability offers new diagnostic tools for improved clinical decisions and better patient health.";

let reducedCosts = "Existing high-sensitivity diagnostics require skilled technicians and laborious processing steps, which increase the time to result and the assay costs. The drastically simpler magnetic assay deliver similar results at lower cost.";

let flexibility = "QDTI is building an open platform right from the start, allowing users to develop assays for a wide range of target biomarkers.  Users can build their own homebrew capability.  Moreover, in contrast to all commercialized platform today, the QDTI system can provide detection for not only proteins, but nucleic acids and cells – all on the same detection platform.";

let benefitsList = [simplePreparation, minimalInput, ultrasensitive, reducedCosts, flexibility];

let news0 = "The MassVentures START program, a program of the Commonwealth of Massachusetts designed to support early-stage, high-growth companies in the state, has awarded QDTI a $100k grant in its 2018 program. The START program is designed to help Massachusetts technology startups to leverage their SBIR funding to grow and to continue to develop their critical technology.";
let news1 = "The National Science Foundation (NSF) has awarded QDTI a Phase I SBIR grant to support the development of a novel technology for transferring medical biofluid and other samples onto diamond magnetic imaging sensors. This technology will allow samples to be transferred quickly and cleanly onto an imaging sensor for a variety of high-throughput testing applications. NSF is a key federal science funding agency.";
let news2 = "Following a successful Phase I SBIR research program, the National Institute of Standards and Technology (NIST), a key federal science and technology agency, has awarded QDTI a Phase II SBIR contract to continue development of a platform for high-speed single magnetic nanoparticle analysis using the company’s quantum NV diamond sensing technology. Magnetic nanoparticles and beads are a key component of many biomedical diagnostics products, but the lack of a technology allowing individual magnetic particles to be tested quickly has hindered quality control and further technical development. QDTI’s technology allows the magnetic properties of thousands of magnetic particles to be tested in parallel.";
let news3 = "The National Institute of Standards and Technology (NIST) has awarded QDTI a Phase I SBIR contract to support the development of a NV imaging-based instrument for single magnetic nanoparticle analysis. Magnetic nanoparticles are used in a broad range of industries but find particularly valuable application to biomedical diagnostics and therapy. Magnetic bead products for immunoassays comprise a $1 billion market. A lack of cost-effective commercial technology for high-throughput single-particle analysis impedes robust quality control, which hinders reproducibility and novel innovative uses for magnetic particles. QDTI’s novel particle analysis system with low cost and high throughput will permit high quality, high value magnetic products to reach wider markets.";
let news4 = "The Defense Advanced Research Projects Agency (DARPA) has exercised its option to continue its support to QDTI for development of the company’s Nitrogen Vacancy (NV) diamond imaging technology. DARPA has been a major supporter of the development of NV technology through its QuASAR quantum sensing program. DARPA’s decision will increase its total support to QDTI for development of the technology through the agency’s SBIR program. QDTI is using the NV imaging technology to develop a new class of ultrasensitive biomedical diagnostics suitable for a wide range of protein, cellular and nucleic acid targets.";

let newsList = [news0, news1, news2, news3, news4];
var currentNewsListId = "news0";

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

// show the expanded view of the clicked item in the news list
$('#news-list li').click(function() {
	$('#news-list li').removeClass();
	$(this).addClass('selected-news-item');
	$('#expanded-view-body').text(newsList[parseInt($(this).attr("id").replace(/\D/g,''),10)]);
	$('#expanded-view-header').text($(this).find('h2').text());
	currentNewsListId = $(this).attr("id");
});

// show the next news expanded view by clicking on "Next" button
$("#expanded-view button").click(function() {
		$('#news-list li').removeClass();
		var currentIdx = parseInt(currentNewsListId.replace(/\D/g,''),10);
		var newIdx = 0;
		if (currentIdx < 4) {
			newIdx = currentIdx + 1;
		}
		currentNewsListId = '#news' + newIdx;
		$(currentNewsListId).addClass('selected-news-item');
		$('#expanded-view-body').text(newsList[parseInt($(currentNewsListId).attr("id").replace(/\D/g,''),10)]);
		$('#expanded-view-header').text($(currentNewsListId).find('h2').text());
});

// activate scroll spy
  $(document).ready(function(){
    $('.scrollspy').scrollSpy();
  });
