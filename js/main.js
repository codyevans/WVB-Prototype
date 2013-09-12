
// run isotope
$(window).load(function() {
	
	function isotope() {

		var $container = $('#container');

		$container.isotope({
		  // options
		  itemSelector : '.item',
		  layoutMode : 'masonry'
		});

		// filter items when filter link is clicked
		$('#filter-nav a').click(function(){
		  var selector = $(this).attr('data-filter');
		  $container.isotope({ filter: selector });
		  return false;
		});

	};

	isotope();

}); // end isotope


// filter nav - opening
$('#artwork-nav').click(function() {
	$(this).toggleClass('active');
	$('#filter-nav').toggleClass('open');
	$('#arrow').toggleClass('open-arrow');
});


// add indicator lights
$('#filter-nav a.one').click(function() {
	$('a.two .indicator, a.three .indicator, a.four .indicator, a.five .indicator').removeClass('indicator-on');
});

$('#filter-nav a.two').click(function() {
	$('a.three .indicator, a.four .indicator, a.five .indicator').removeClass('indicator-on');
	$('a.two .indicator').addClass('indicator-on');
});

$('#filter-nav a.three').click(function() {
	$('a.two .indicator, a.four .indicator, a.five .indicator').removeClass('indicator-on');
	$('a.three .indicator').addClass('indicator-on');
});

$('#filter-nav a.four').click(function() {
	$('a.three .indicator, a.two .indicator, a.five .indicator').removeClass('indicator-on');
	$('a.four .indicator').addClass('indicator-on');
});

$('#filter-nav a.five').click(function() {
	$('a.three .indicator, a.four .indicator, a.two .indicator').removeClass('indicator-on');
	$('a.five .indicator').addClass('indicator-on');
});


// remove active state on arwtork-nav - filter nav closing
$('#about, #connect').click(function() {
	$('#filter-nav').removeClass('open');
	$('#artwork-nav').removeClass('active');
	$('#arrow').removeClass('open-arrow');
});

