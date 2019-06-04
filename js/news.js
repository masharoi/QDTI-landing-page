let news0 = "The MassVentures START program, a program of the Commonwealth of Massachusetts designed to support early-stage, high-growth companies in the state, has awarded QDTI a $100k grant in its 2018 program. The START program is designed to help Massachusetts technology startups to leverage their SBIR funding to grow and to continue to develop their critical technology.";
let news1 = "The National Science Foundation (NSF) has awarded QDTI a Phase I SBIR grant to support the development of a novel technology for transferring medical biofluid and other samples onto diamond magnetic imaging sensors. This technology will allow samples to be transferred quickly and cleanly onto an imaging sensor for a variety of high-throughput testing applications. NSF is a key federal science funding agency.";
let news2 = "Following a successful Phase I SBIR research program, the National Institute of Standards and Technology (NIST), a key federal science and technology agency, has awarded QDTI a Phase II SBIR contract to continue development of a platform for high-speed single magnetic nanoparticle analysis using the company’s quantum NV diamond sensing technology. Magnetic nanoparticles and beads are a key component of many biomedical diagnostics products, but the lack of a technology allowing individual magnetic particles to be tested quickly has hindered quality control and further technical development. QDTI’s technology allows the magnetic properties of thousands of magnetic particles to be tested in parallel.";
let news3 = "The National Institute of Standards and Technology (NIST) has awarded QDTI a Phase I SBIR contract to support the development of a NV imaging-based instrument for single magnetic nanoparticle analysis. Magnetic nanoparticles are used in a broad range of industries but find particularly valuable application to biomedical diagnostics and therapy. Magnetic bead products for immunoassays comprise a $1 billion market. A lack of cost-effective commercial technology for high-throughput single-particle analysis impedes robust quality control, which hinders reproducibility and novel innovative uses for magnetic particles. QDTI’s novel particle analysis system with low cost and high throughput will permit high quality, high value magnetic products to reach wider markets.";
let news4 = "The Defense Advanced Research Projects Agency (DARPA) has exercised its option to continue its support to QDTI for development of the company’s Nitrogen Vacancy (NV) diamond imaging technology. DARPA has been a major supporter of the development of NV technology through its QuASAR quantum sensing program. DARPA’s decision will increase its total support to QDTI for development of the technology through the agency’s SBIR program. QDTI is using the NV imaging technology to develop a new class of ultrasensitive biomedical diagnostics suitable for a wide range of protein, cellular and nucleic acid targets.";

let newsList = [news0, news1, news2, news3, news4];
var currentNewsListId = "news0";
var currentLocation = location.href;

if (currentLocation.indexOf('#') != -1) {
  currentNewsListId = '#' + currentLocation.split('#')[1];
  changeNewsView($(currentNewsListId));
}

// show the expanded view of the clicked item in the news list
$('#news-list li').click(function() {
	changeNewsView($(this));
	currentNewsListId = $(this).attr("id");
});

// show the next news expanded view by clicking on "Next" button
$("#expanded-view button").click(function() {
		var currentIdx = parseInt(currentNewsListId.replace(/\D/g,''),10);
		var newIdx = 0;
		if (currentIdx < 4) {
			newIdx = currentIdx + 1;
		}
		currentNewsListId = '#news' + newIdx;
		changeNewsView($(currentNewsListId));
});

// change the appearance of expended news view
function changeNewsView(selectedElement) {
	$('#news-list li').removeClass();
	selectedElement.addClass('selected-news-item');

  $(".expanded-view-small").text("");
	selectedElement.find("div").text(newsList[parseInt(selectedElement.attr("id").replace(/\D/g,''),10)]);

	$('#expanded-view-body').text(newsList[parseInt(selectedElement.attr("id").replace(/\D/g,''),10)]);
	$('#expanded-view-header').text(selectedElement.find('h2').text());
}
