var width = 720,
    negativeWidth = -720,
    animatedSpeed = 1500,
    pause = 3000,
    currentSlide = 1;
	
	var $slider = $('#slider');
    
	//texts
	var $slideTextContainer = $slider.find('.slide-texts');
    var $texts = $slideTextContainer.find('.slide-text');
	
	//slides
    var $slideContainer = $slider.find('.slides');
    var $slides = $slideContainer.find('.slide');
    var $sliderWidth = (width * $slides.length) - width;
    var $lastSlidePosition = ($sliderWidth) - ($sliderWidth * 2);
    var $lastSlideIndexPosition = $slides.length - 1;
    var $leftArrow = $('#left-arrow');
    var $rightArrow = $('#right-arrow');
	var $amountToGoBack = (currentSlide * width * -1) + width;
	var $leftArrowMarginLeft = (width * currentSlide) - ((width * currentSlide) + (width * currentSlide));
    var $currentPosition = $slideContainer.css('marginLeft');
    var $currentTextPosition = $slideTextContainer.css('marginLeft');
    var $leftArrowMargin = $currentPosition - width;
	var $backSlide = $currentPosition = width;
	var $lastMarginLeft = ($slides.length - ($slides.length * 2) + 1) * width;
	var $existingPlace = currentSlide * negativeWidth;
	var $slideText = $('.slide-text');
	
	//arrows
	var $arrowButtonWidthMobile = ($('#container').width - width) / 2;
    
    var interval;
    var currentMargin;
    
    function startSlider(){
        interval = setInterval(function() {
			console.log(currentSlide);
			console.log($currentPosition+" - "+width+"px");
            $slideTextContainer.animate({marginLeft:'-='+width}, animatedSpeed, "easeInOutQuint", function(){
				$currentTextPosition = $slideTextContainer.css('marginLeft');
                });
            $slideContainer.animate({marginLeft:'-='+width}, animatedSpeed, "easeInOutQuad", function(){
                currentSlide++;
				$currentPosition = $slideContainer.css('marginLeft');
                if(currentSlide === 5) {
                 currentSlide = 1;
                 $slideTextContainer.css('marginLeft','0');
				 $currentTextPosition = $slideTextContainer.css('marginLeft');
                 $slideContainer.css('marginLeft','0');
				 $currentPosition = $slideContainer.css('marginLeft');
                }
                });
                }, pause);
    }
	
    function stopSlider (){
        clearInterval(interval);
    };
    
    function stopMarginLog (){
        clearInterval(currentMargin);
    };
	
    /*
    $slider.hover(function() {
		stopSlider();
	}, function() {
		startSlider();
	});
	*/
	
    startSlider();
	
	/* 
	$rightArrow.click(function() {
		
		
			stopSlider();
			console.log(currentSlide);
			console.log($currentPosition+" - "+width+"px");
            $slideContainer.animate({marginLeft:'-='+width}, animatedSpeed, "easeInOutQuart", function(){
                currentSlide++;
				$currentPosition = $slideContainer.css('marginLeft');
                if(currentSlide === $slides.length) {
                currentSlide = 1;
                $slideContainer.css('marginLeft','0');
				$currentPosition = $slideContainer.css('marginLeft');
                }
                });
                
		startSlider();
	});
	 */
	
	$leftArrow.click(function() {
		
		
			stopSlider();
                if(currentSlide === 1) {
                currentSlide = $slides.length;
				/*
			console.log(currentSlide);
			console.log($currentPosition+" + "+width+"px");
			*/
                $slideTextContainer.stop().css("marginLeft", $lastMarginLeft);
            	$slideTextContainer.animate({marginLeft:"+="+width}, animatedSpeed, "easeInOutQuint", function(){
                $slideTextContainer.stop().css("marginLeft", $lastMarginLeft + width); 
				});
                $slideContainer.stop().css("marginLeft", $lastMarginLeft);
            	$slideContainer.animate({marginLeft:"+="+width}, animatedSpeed, "easeInOutQuad", function(){
                $slideContainer.stop().css("marginLeft", $lastMarginLeft + width);
				/*
			console.log(currentSlide);
			console.log($currentPosition+" + "+width+"px");
			*/
				});
                } else {
				/*
			console.log(currentSlide);
			console.log($currentPosition+" + "+width+"px");
			*/
				$slideTextContainer.stop().css('marginLeft', (currentSlide - 1) * negativeWidth);
            	$slideTextContainer.animate({marginLeft:"+="+width}, animatedSpeed, "easeInOutQuint", function(){});
					
				$slideContainer.stop().css('marginLeft', (currentSlide - 1) * negativeWidth);
            	$slideContainer.animate({marginLeft:"+="+width}, animatedSpeed, "easeInOutQuad", function(){
				/*
			console.log(currentSlide);
			console.log($currentPosition+" + "+width+"px");
			*/
				});
					
				}
        currentSlide--;        
		startSlider();
	});
	
	$rightArrow.click(function() {
		
		
			stopSlider();
                if(currentSlide === $slides.length - 1) {
				currentSlide = 0;
				/*
			console.log(currentSlide);
			console.log($currentPosition+" - "+width+"px");
			*/
                $slideTextContainer.stop().css("marginLeft", $lastMarginLeft + width);
            	$slideTextContainer.animate({marginLeft:"-="+width}, animatedSpeed, "easeInOutQuint", function(){
                $slideTextContainer.stop().css("marginLeft", "0"); 
				});
                $slideContainer.stop().css("marginLeft", $lastMarginLeft + width);
            	$slideContainer.animate({marginLeft:"-="+width}, animatedSpeed, "easeInOutQuad", function(){
                $slideContainer.stop().css("marginLeft", "0"); 
				/* 
			console.log(currentSlide);
			console.log($currentPosition+" - "+width+"px");
			*/
				});
                } else {
				/*
			console.log(currentSlide);
			console.log($currentPosition+" - "+width+"px");
			*/
				$slideTextContainer.stop().css('marginLeft', (currentSlide - 1) * negativeWidth);
            	$slideTextContainer.animate({marginLeft:"-="+width}, animatedSpeed, "easeInOutQuint", function(){});
					
				$slideContainer.stop().css('marginLeft', (currentSlide - 1) * negativeWidth);
            	$slideContainer.animate({marginLeft:"-="+width}, animatedSpeed, "easeInOutQuad", function(){
				/*
			console.log(currentSlide);
			console.log($currentPosition+" - "+width+"px");
			*/
				});
					
				}  
		currentSlide++; 
		startSlider();
	});
	
	//arrows
	
	//arrow left hover
	$('.arrow').eq(0).hover(function() {
		
		if ($('#left-arrow').css('z-index') != 100) {
		$(this).parents().find('.arrow').eq(0).stop().animate({
			color:'#ffffff',
			fontSize:'60px'
		}, 250, function(){});
		$('#left-arrow').stop().animate({
			backgroundColor:'#808080'
		}, 250, function(){});
		}
	}, function() {
		
		if ($('#left-arrow').css('z-index') != 100) {
		$(this).parents().find('.arrow').eq(0).stop().animate({
			color:'#b1afaf',
			fontSize:'50px'
		}, 250, function(){});
		$('#left-arrow').stop().animate({
			backgroundColor:'#efefef'
		}, 250, function(){});
		
		
		}
		
	});
	
	//arrow right hover
	$('.arrow').eq(1).hover(function() {
		
		if ($('#right-arrow').css('z-index') != 100) {
		$(this).parents().find('.arrow').eq(1).stop().animate({
			color:'#ffffff',
			fontSize:'60px'
		}, 250, function(){});
		$('#right-arrow').stop().animate({
			backgroundColor:'#808080'
		}, 250, function(){});
		}
	}, function() {
		
		if ($('#right-arrow').css('z-index') != 100) {
		$(this).parents().find('.arrow').eq(1).stop().animate({
			color:'#b1afaf',
			fontSize:'50px'
		}, 250, function(){});
		$('#right-arrow').stop().animate({
			backgroundColor:'#efefef'
		}, 250, function(){});
		
		
		}
		
	});
	
	if ($('#left-arrow').css('left') === 0) {
	$(this).width = $arrowButtonWidthMobile;
	}
	
	//arrow left click
	$('.arrow').eq(0).click(function() {
		
		if ($('#left-arrow').css('z-index') != 100) {
		$(this).parents().find('.arrow').eq(0).stop().animate({
			color:'#ffffff',
			fontSize:'60px'
		}, 250, function(){
		$(this).animate({
			color:'#b1afaf',
			fontSize:'50px'
		}, 250, function(){});});
		$('#left-arrow').stop().animate({
			backgroundColor:'#808080'
		}, 250, function(){
		$(this).animate({
			backgroundColor:'#efefef'
		}, 250, function(){});});
		}
	}); 
	
	//arrow right click
	$('.arrow').eq(1).click(function() {
		
		if ($('#right-arrow').css('z-index') != 100) {
		$(this).parents().find('.arrow').eq(1).stop().animate({
			color:'#ffffff',
			fontSize:'60px'
		}, 250, function(){
		$(this).animate({
			color:'#b1afaf',
			fontSize:'50px'
		}, 250, function(){});});
		$('#right-arrow').stop().animate({
			backgroundColor:'#808080'
		}, 250, function(){
		$(this).animate({
			backgroundColor:'#efefef'
		}, 250, function(){});});
		}
	}); 
    

    //Parallax
	var all = $("*");
	  all.mousemove(function(e){
	var slide = $(".slide");
    var x = -(e.pageX + this.offsetLeft) / 30;
    var y = -(e.pageY + this.offsetTop) / 30;
    slide.css('background-position', x + 'px ' + y + 'px');
  });    

$('#slider-overlay').fadeIn(1000);