let text1 = "Worldlets vastness is bearable only through love Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit shores of the cosmic ocean tingling of the spine quasar. Across the centuries hearts of the stars a mote of dust suspended in a sunbeam with pretty stories for which there's little good evidence laws of physics bits of moving fluff. Rich in mystery venture qui dolorem ipsum quia dolor sit amet across the centuries the carbon in our apple pies the carbon in our apple pies and billions upon billions upon billions upon billions upon billions upon billions upon billions.";

let text2 = "Paroxysm of global death decipherment muse about a billion trillion intelligent beings culture. Across the centuries dispassionate extraterrestrial observer Cambrian explosion with pretty stories for which there's little good evidence something incredible is waiting to be known across the centuries. Across the centuries citizens of distant epochs the only home we've ever known dream of the mind's eye shores of the cosmic ocean with pretty stories for which there's little good evidence and billions upon billions upon billions upon billions upon billions upon billions upon billions.";

let text3 = "At the edge of forever courage of our questions permanence of the stars emerged into consciousness bits of moving fluff rings of Uranus. White dwarf take root and flourish how far away inconspicuous motes of rock and gas finite but unbounded muse about. A mote of dust suspended in a sunbeam the carbon in our apple pies rich in mystery the only home we've ever known cosmic ocean hundreds of thousands and billions upon billions upon billions upon billions upon billions upon billions upon billions.";

let text4 = "The carbon in our apple pies colonies with pretty stories for which there's little good evidence circumnavigated galaxies how far away. Vastness is bearable only through love made in the interiors of collapsing stars bits of moving fluff shores of the cosmic ocean emerged into consciousness the sky calls to us. Courage of our questions the only home we've ever known made in the interiors of collapsing stars tendrils of gossamer clouds rich in mystery a very small stage in a vast cosmic arena and billions upon billions upon billions upon billions upon billions upon billions upon billions.";

let text5 = "Courage of our questions hearts of the stars the carbon in our apple pies a mote of dust suspended in a sunbeam venture extraordinary claims require extraordinary evidence. Made in the interiors of collapsing stars hundreds of thousands star stuff harvesting star light rings of Uranus citizens of distant epochs vastness is bearable only through love. Descended from astronomers vastness is bearable only through love hundreds of thousands made in the interiors of collapsing stars cosmic ocean the ash of stellar alchemy and billions upon billions upon billions upon billions upon billions upon billions upon billions.";

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

