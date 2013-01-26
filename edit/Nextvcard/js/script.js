jQuery(document).ready(function($) {

	jQuery.noConflict();

	/* ---------------------------------------------------------------------- */
	/*	Slider - [Flexslider]
	/* ---------------------------------------------------------------------- */
  	try {
		$('.flexslider').flexslider({
			animation: 'fade',
			controlsContainer: ".slider-wrapper"
		});
	} catch(err) {

	}

	/* ---------------------------------------------------------------------- */
	/*	Loading Effect
	/* ---------------------------------------------------------------------- */
  	try {
		$('#loading-container').css({'top': parseInt($('#container > header').height()) + parseInt($('#content').css('margin-top')) + 'px'});
	} catch(err) {

	}

	/* ---------------------------------------------------------------------- */
	/*	Input & Textarea Placeholder
	/* ---------------------------------------------------------------------- */ 
	$('input[type="text"], textarea').focus(function(){
		$(this).removeClass('error');
		if($(this).val() == $(this).attr('placeholder'))
			$(this).val('');
	}).blur( function(){ 
		if($(this).val() == '')
			$(this).val($(this).attr('placeholder'));
	});


	/* ---------------------------------------------------------------------- */
	/*	Fancybox Gallery Images
	/* ---------------------------------------------------------------------- */ 
	try {
		$('#portfolio-list a.image').fancybox({
			openEffect	: 'fade',
	    	closeEffect	: 'fade',
	          helpers: {
	              title : {
	                  type : 'float'
	              }
	          }
	      });

	    $('#portfolio-list a.video').fancybox({
			maxWidth	: 800,
			maxHeight	: 600,
			fitToView	: false,
			width		: '75%',
			height		: '75%',
			type 		: 'iframe',
			autoSize	: false,
			closeClick	: false,
			openEffect	: 'fade',
			closeEffect	: 'fade'
		});
	} catch(err) {

	}

	/* ---------------------------------------------------------------------- */
	/*	Social Media Effect
	/* ---------------------------------------------------------------------- */ 
	$('#social-media a').on('mouseenter', function(){
		$(this).children('img').css({'width': '12px', 'height': '12px'}).animate({'width': '16px', 'height': '16px'}, 200);
	});

	/* ---------------------------------------------------------------------- */
	/*	LavaLamp
	/* ---------------------------------------------------------------------- */ 
	$("#portfolio-filter").lavaLamp({
		speed: 300,
		click: function(event, menuItem) {
            return false;
        }
	});

	/* ---------------------------------------------------------------------- */
	/*	Portfolio
	/* ---------------------------------------------------------------------- */ 

	// Needed variables
	var $container	 	= $('#portfolio-list');
	var $filter 		= $('#portfolio-filter');
		
	// Run Isotope  
	$container.isotope({
		filter				: '*',
		layoutMode   		: 'masonry',
		animationOptions	: {
		duration			: 750,
		easing				: 'linear'
	   }
	});

	$(window).bind('resize', function(){
		var selector = $filter.find('a.active').attr('data-filter');
		$container.isotope({ 
			filter	: selector,
			animationOptions: {
				duration: 750,
				easing	: 'linear',
				queue	: false,
	   		}
		});
	  	return false;
	});
	
	// Isotope Filter 
	$filter.find('a').click(function(){
		var selector = $(this).attr('data-filter');
		$container.isotope({ 
			filter	: selector,
			animationOptions: {
				duration: 750,
				easing	: 'linear',
				queue	: false,
	   		}
		});
	  	return false;
	});

	//Append effect to portfolio image
	$('#portfolio-list li').each(function(){
		$(this).append('<a href="#" class="image-hover ' + $(this).find(' > a:first').attr('class') + '"></a>');
	});

	//Call click event [video or image]
	$('#portfolio-list li a.image-hover').live('click', function(){
		$(this).parent('li').find(' > a:first').trigger('click');
		return false;
	});
	
	//Image hover effect
	$('#portfolio-list li').on('mouseenter', function(){
		$(this).children('.image-hover').stop(true,true).fadeIn(200);
	}).on('mouseleave', function(){
		$(this).children('.image-hover').stop(true,true).fadeOut(200);
	});
	
	// Copy categories to item classes
	$filter.find('a').click(function() {
		var currentOption = $(this).attr('data-filter');
		$filter.find('a').removeClass('active');
		$(this).addClass('active');
	});

	$('#skills li').each(function(){
		$(this).append('<div class="progressbar"></div>');
	});

	var animate_sate = false;

	$('a.tabs-page').on('click', function(e){
		e.preventDefault();

		if(!$(this).hasClass('active') && animate_sate == false){
			$this = $(this);

			animate_sate = true;

			$('html').css({'overflow':'hidden'});

			var id_old_active = $('a.tabs-page.active').attr('href');
			$('a.tabs-page').removeClass('active');

			var id_active = $(this).attr('href');

			$(id_old_active).removeClass('active').stop().slideUp('slow', function(){
				$this.addClass('active');

				$('#loading-container').show();
				$('#loading').css({'width': '0px'}).animate({'width' : '100%'}, 700, function(){
					$('#loading-container').hide();
					$('#skills li div.progressbar').css({'width':'0px'});
					$(id_active).addClass('active').stop().slideDown('slow', function(){
						animate_sate = false;
						$('html').css({'overflow':'auto'});
						$('#skills li').each(function(){
							$(this).children('div.progressbar').css({'width':'0px'}).animate({'width': $(this).attr('data-value') + '%'}, 500);
						});
						create_map();
					});
				});
			});
		}
	});

	/* ---------------------------------------------------------------------- */
	/*	Contact Map
	/* ---------------------------------------------------------------------- */
	try {
		var create_map = function() {
			$('#map').remove();
			$('#map-container').append('<div id="map"></div>');

			$('#map').gmap3({
		        action: 'addMarker',
		        address: "1319 Stanley avenue, Glendale, Los Angeles, USA",
		        map:{
		        	center: true,
		        	zoom: 14
		       		},
		        },
		        {action: 'setOptions', args:[{scrollwheel:true}]}
			);
		}
	} catch(err) {

	}

	/* ---------------------------------------------------------------------- */
	/*	Contact Form
	/* ---------------------------------------------------------------------- */
	$('#submit').on('click', function(e){
		e.preventDefault();
		
		$this = $(this);
		
		$.ajax({
			type: "POST",
			url: "contact.php",
			dataType: 'json',
			cache: false,
			data: $('#contact-form').serialize(),
			success: function(data) {
				if(data.info != 'error'){
					$this.parents('form').find('input[type=text],textarea,select').filter(':visible').val('');
					$('#msg').hide().removeClass('success').removeClass('error').addClass('success').html(data.msg).fadeIn('slow').delay(5000).fadeOut('slow');
				} else {
					$('#msg').hide().removeClass('success').removeClass('error').addClass('error').html(data.msg).fadeIn('slow').delay(5000).fadeOut('slow');
				}
			}
		});
	});
	
	/* ---------------------------------------------------------------------- */
	/*	Others
	/* ---------------------------------------------------------------------- */ 
	$('#content > article').css({'display':'none'});
	$('#content').css({'visibility':'visible'});
	$('html').css({'overflow':'auto'});

	/* ---------------------------------------------------------------------- */
	/*	First slideDown Effect
	/* ---------------------------------------------------------------------- */ 
	var id_active = $('a.tabs-page.active').attr('href');
	$('#loading-container').show();
	$('#loading').css({'width': '0px'}).animate({'width' : '100%'}, 700, function(){
		$('#loading-container').hide();
		$(id_active).addClass('active').stop().slideDown('slow');
	});
});