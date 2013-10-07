
// animations after load
$(window).load(function() { // load the DOM then animate pages in


	// run isotope
	function isotope() {

		var $container = $('#artwork-container');

		$container.isotope({
		  // options
		  itemSelector : '.item',
		  layoutMode : 'masonry'
		});

		// filter items when filter link is clicked
		// $('#filter-nav a').click(function(){
		//   var selector = $(this).attr('data-filter');
		//   $container.isotope({ filter: selector });
		//   return false;
		// });

	};

	isotope();



	// preload this thing
	$(".preloader").delay(350).fadeOut("slow");


	// animate page borders
	$('#left, #right, #top, #bottom').addClass('animate');


	// add remove scroll on header
	$('.page-background').scroll(function() {

		if($('.page-background').scrollTop() <= 20) {
			$('#header').removeClass('active');
		}else{
			$('#header').addClass('active');
		}

	});


	
	// fade hovers
	// $('#artwork-hover').hover(function() {
	// 	$('.faded-hover-one').addClass('animate');
	// }, function() {
	// 	$('.faded-hover-one').removeClass('animate');
	// });



}); // end DOM load stuff













