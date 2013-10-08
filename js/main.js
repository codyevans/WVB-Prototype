
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

	// animate intro container
	$('#intro-fade').addClass('animate');

	// animate artwork container
	$('#artwork-container').addClass('animate');

	// add remove scroll on header
	$('.page-background').scroll(function() {

		if($('.page-background').scrollTop() <= 20) {
			$('#header').removeClass('active');
		}else{
			$('#header').addClass('active');
		}

	});

	// artwork fade hovers
	$('#artwork-hover').hover(function() {

		$('.wren-logo').addClass('fadeOut');
		$('.artwork-circle').addClass('hoverIn');

	}, function() {

		$('.wren-logo').removeClass('fadeOut');
		$('.artwork-circle').removeClass('hoverIn');

	});

	// about fade hovers
	$('#about-hover').hover(function() {

		$('.wren-logo').addClass('fadeOut');
		$('.about-circle').addClass('hoverIn');

	}, function() {

		$('.wren-logo').removeClass('fadeOut');
		$('.about-circle').removeClass('hoverIn');

	});

	// connect fade hovers
	$('#connect-hover').hover(function() {

		$('.wren-logo').addClass('fadeOut');
		$('.connect-circle').addClass('hoverIn');

	}, function() {

		$('.wren-logo').removeClass('fadeOut');
		$('.connect-circle').removeClass('hoverIn');

	});



}); // end DOM load stuff













