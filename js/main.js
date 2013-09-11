
// run isotope
$(window).load(function() {

	$('#container').isotope({
	  // options
	  itemSelector : '.item',
	  layoutMode : 'masonry'
	});

});


// filter nav
$('#artwork-nav').click(function() {

	$(this).toggleClass('active');
	$('#filter-nav').toggleClass('open');
	$('#arrow').toggleClass('open-arrow');

});

// remove active state on arwtork-nav
$('#about, #connect').click(function() {

	$('#filter-nav').removeClass('open');
	$('#artwork-nav').removeClass('active');
	$('#arrow').removeClass('open-arrow');

});