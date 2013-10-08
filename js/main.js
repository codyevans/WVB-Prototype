
// center isotope
$.Isotope.prototype._getCenteredMasonryColumns = function() {
this.width = this.element.width();

var parentWidth = this.element.parent().width();

              // i.e. options.masonry && options.masonry.columnWidth
var colW = this.options.masonry && this.options.masonry.columnWidth ||
              // or use the size of the first item
              this.$filteredAtoms.outerWidth(true) ||
              // if there's no items, use size of container
              parentWidth;

var cols = Math.floor( parentWidth / colW );
cols = Math.max( cols, 1 );

// i.e. this.masonry.cols = ....
this.masonry.cols = cols;
// i.e. this.masonry.columnWidth = ...
this.masonry.columnWidth = colW;
};

$.Isotope.prototype._masonryReset = function() {
// layout-specific props
this.masonry = {};
// FIXME shouldn't have to call this again
this._getCenteredMasonryColumns();
var i = this.masonry.cols;
this.masonry.colYs = [];
while (i--) {
  this.masonry.colYs.push( 0 );
}
};

$.Isotope.prototype._masonryResizeChanged = function() {
var prevColCount = this.masonry.cols;
// get updated colCount
this._getCenteredMasonryColumns();
return ( this.masonry.cols !== prevColCount );
};

$.Isotope.prototype._masonryGetContainerSize = function() {
var unusedCols = 0,
    i = this.masonry.cols;
// count unused columns
while ( --i ) {
  if ( this.masonry.colYs[i] !== 0 ) {
    break;
  }
  unusedCols++;
}

return {
      height : Math.max.apply( Math, this.masonry.colYs ),
      // fit container to columns that have been used;
      width : (this.masonry.cols - unusedCols) * this.masonry.columnWidth
    };
};


 $(function(){

  	// // run isotope
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
    
 });  // end isotope


// animations after load
$(window).load(function() { // load the DOM then animate pages in

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













