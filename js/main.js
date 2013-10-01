
// run isotope
/*
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

}); 
*/
// end isotope


$(window).load(function() { // load the DOM then animate pages in

	// animate page borders
	$('#left, #right, #top, #bottom').addClass('animate');

});


