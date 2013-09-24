
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

	// hide intro page for better filtering of artwork
	//$('#intro-page').hide();
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
$('#abouts, #connect').click(function() {
	$('#filter-nav').removeClass('open');
	$('#artwork-nav').removeClass('active');
	$('#arrow').removeClass('open-arrow');
});



// full page horizontal scrolling
/* javascript modeled after http://http://imakewebthings.com/jquery-waypoints/ */
(function() {
  // http://www.zachstronaut.com/posts/2009/01/18/jquery-smooth-scroll-bugs.html
  var scrollElement = 'html, body';
  var $scrollElement;

  $(function() {
    $('html, body').each(function () {
      var initScrollLeft = $(this).attr('scrollLeft');
      
      $(this).attr('scrollLeft', initScrollLeft + 1);
      if ($(this).attr('scrollLeft') == initScrollLeft + 1) {
        scrollElement = this.nodeName.toLowerCase();
        $(this).attr('scrollLeft', initScrollLeft);
        return false;
      }    
    });
    $scrollElement = $(scrollElement);
  });


  /* Smooth scrolling of links between panels */
  $(function() {
    var $panels = $('.panel');

    $panels.each(function() {
      var $panel = $(this);
      var hash = '#' + this.id;

      $('a[href="' + hash + '"]').click(function(event) {
        $scrollElement.stop().animate({
          scrollLeft: $panel.offset().left
        }, 500, 'swing', function() {
          window.location.hash = hash;
        });

        event.preventDefault();
      });
    });
  });


  /* Force snap to panel on resize. */
  $(function() {
    var $window = $(window);
    var timer;

    $window.resize(function() {
      window.clearTimeout(timer);
      timer = window.setTimeout(function() {
        var hash = window.location.hash ? window.location.hash : '#about';

        $scrollElement.stop().animate({
          scrollLeft: $(hash).offset().left
        }, 200);
      }, 100);
    });
  });


  /* Fix scroll snapping during browser finds */
  $(function() {
    var $window = $(window);
    var timer;

    /* Most finds will scroll a single panel. */
    var scrollToPanel = function(panel) {
      $scrollElement.scrollLeft($(panel).offset().left);
    };

    /* Others will scroll between panels but not cause a panel scroll */
    var scrollToClosestPanel = function() {
      var currentScroll = $window.scrollLeft();
      var panelOffsets = $.map($('.panel').get(), function(el) {
        return $(el).offset().left;
      });
      var closestOffset = 0;
      var closestDistance = 99999999;

      $.each(panelOffsets, function(i, offset) {
        var offsetDistance = Math.abs(currentScroll - offset);
        if(offsetDistance < closestDistance) {
          closestDistance = offsetDistance;
          closestOffset = offset;
        }
      });
      $scrollElement.scrollLeft(closestOffset);
    };

    $('.panel').scroll(function() {
      window.clearTimeout(timer);
      timer = window.setTimeout(scrollToPanel, 50, this);
    });

    /* 50ms is enough time to let the animation between panels do its
       thing without triggering this debounced panel snap. */
    $window.scroll(function() {
      window.clearTimeout(timer);
      timer = window.setTimeout(scrollToClosestPanel, 50);
    });
  });

})();




