work.click(function() {
	
	window.location.hash = "work";
	$.ajax({
	type: 'GET',
	url:'work.html',
	success:function(work) {
		$('#page-body').empty().html(work, function(){});
	
	},
	cache: false,
	complete: function(){
	
	$('.image-precache').html(window.portfolioWebsitesArray);
	
	$('.image-precache').html(window.portfolioBannersArray);
	
	$('.image-precache').html(window.portfolioEblastsArray);
	
	$('.image-precache').html(window.portfolioFlyersArray);
	
	$('.image-precache').html(window.portfolioBrochuresArray);
	
	$('.image-precache').html(window.portfolioBillboardsArray);

var workIntroFirst = function() {

	//header fly-in
		$("#header").stop().delay(1000).animate({
					opacity:"1",
					marginTop:"-=100px"
					}, {
						duration: 2000,
						easing: "easeOutQuint",
						queue: true,
						complete: function(){}
					});
			
		//body fly-in		
	$("#content-body").stop().delay(1250).animate({
					opacity:"1",
					marginTop:"-=100px"
					}, {
						duration: 2000,
						easing: "easeOutQuint",
						queue: true,
						complete: function(){}
					});
    
    			//Portfolio actions
    $('#portfolio-web-sites').stop().css('backgroundColor','rgba(0,0,0,0)').delay(750).animate({
        backgroundColor:'rgba(0,0,0,0.5)',
        opacity:'1'
    },1000,'swing',function(){});
    $('#portfolio-web-banners').stop().css('backgroundColor','rgba(0,0,0,0)').delay(1500).animate({
        backgroundColor:'rgba(0,0,0,0.3)',
        opacity:'1'
    },1000,'swing',function(){});
    $('#portfolio-web-eblasts').stop().css('backgroundColor','rgba(0,0,0,0)').delay(1000).animate({
        backgroundColor:'rgba(0,0,0,0.5)',
        opacity:'1'
    },1000,'swing',function(){});
    $('#portfolio-print-flyers').stop().css('backgroundColor','rgba(0,0,0,0)').delay(1750).animate({
        backgroundColor:'rgba(0,0,0,0.3)',
        opacity:'1'
    },1000,'swing',function(){});
    $('#portfolio-print-brochures').stop().css('backgroundColor','rgba(0,0,0,0)').delay(1250).animate({
        backgroundColor:'rgba(0,0,0,0.5)',
        opacity:'1'
    },1000,'swing',function(){});
    $('#portfolio-print-billboards').stop().css('backgroundColor','rgba(0,0,0,0)').delay(2000).animate({
        backgroundColor:'rgba(0,0,0,0.3)',
        opacity:'1'
    },1000,'swing',function(){});
    
    var $correctBlackBackgroundImage = function() {
        if ($(this).find('.portfolio-item-title').eq(0)) {
            return 'url(./images/globe-black.png)'
        }
    },
    $correctWhiteBackgroundImage = function() {
        if ($(this).find('.portfolio-item-title').eq(0)) {
            return 'url(./images/globe-white.png)'
        }
    };


};
		
var workIntro = function() {

	//header fly-in
		$("#header").stop().animate({
					opacity:"1",
					marginTop:"-=100px"
					}, {
						duration: 2000,
						easing: "easeOutQuint",
						queue: true,
						complete: function(){}
					});
			
		//body fly-in		
	$("#content-body").stop().delay(250).animate({
					opacity:"1",
					marginTop:"-=100px"
					}, {
						duration: 2000,
						easing: "easeOutQuint",
						queue: true,
						complete: function(){}
					});
    
    			//Portfolio actions
    $('#portfolio-web-sites').stop().css('backgroundColor','rgba(0,0,0,0)').delay(250).animate({
        backgroundColor:'rgba(0,0,0,0.5)',
        opacity:'1'
    },1000,'swing',function(){});
    $('#portfolio-web-banners').stop().css('backgroundColor','rgba(0,0,0,0)').delay(1000).animate({
        backgroundColor:'rgba(0,0,0,0.3)',
        opacity:'1'
    },1000,'swing',function(){});
    $('#portfolio-web-eblasts').stop().css('backgroundColor','rgba(0,0,0,0)').delay(500).animate({
        backgroundColor:'rgba(0,0,0,0.5)',
        opacity:'1'
    },1000,'swing',function(){});
    $('#portfolio-print-flyers').stop().css('backgroundColor','rgba(0,0,0,0)').delay(1250).animate({
        backgroundColor:'rgba(0,0,0,0.3)',
        opacity:'1'
    },1000,'swing',function(){});
    $('#portfolio-print-brochures').stop().css('backgroundColor','rgba(0,0,0,0)').delay(750).animate({
        backgroundColor:'rgba(0,0,0,0.5)',
        opacity:'1'
    },1000,'swing',function(){});
    $('#portfolio-print-billboards').stop().css('backgroundColor','rgba(0,0,0,0)').delay(1500).animate({
        backgroundColor:'rgba(0,0,0,0.3)',
        opacity:'1'
    },1000,'swing',function(){});
    
    var $correctBlackBackgroundImage = function() {
        if ($(this).find('.portfolio-item-title').eq(0)) {
            return 'url(./images/globe-black.png)'
        }
    },
    $correctWhiteBackgroundImage = function() {
        if ($(this).find('.portfolio-item-title').eq(0)) {
            return 'url(./images/globe-white.png)'
        }
    };


};


	if (!$(".navitem-text").hasClass("navitem-active")) {
		
		
			$(".navitem").eq(1).find(".navitem-text").addClass("navitem-active");	
			
			workIntroFirst();
		
	} else 	if ($(".navitem-text").hasClass("navitem-active")) {
		
		$(".navitem-text").removeClass("navitem-active");
		
		$(".navitem").eq(1).find(".navitem-text").addClass("navitem-active");
		
		workIntro();
		
		
		
			

	}


	
	var activeWidth = $(".header-text").eq(0).width();
	
	var activeWidthPlusFive = $(".header-text").eq(0).width() + 5;
	
	var inactiveWidth = $(".header-text").eq(1).width();


		
		
        
        var portfolioContainer = $('#portfolio-container'),
        portfolioItems = $('.portfolio-items'),
        portfolioItemsWidth = $('.portfolio-items').width(),
        portfolioItemsHeight = portfolioItemsWidth * 0.66;


        $('#portfolio-items').css('height','500px');
        
        
//PORTFOLIO HOVER EVENTS

$('#portfolio-web-sites').mouseover(function() {
	$(this).css({'background-image':'url(./images/site-black.png)','background-position':'50% 40%'}).animate({
		backgroundColor:'rgba(255,255,255,1)',
		backgroundSize:'45%',
        backgroundPosition:'50% 50%'
	},{
        duration:500,
        easing:'easeOutExpo',
        queue:false,
        complete:function(){}
    })
    .find('.portfolio-item-title').css('opacity','1').animate({
		opacity:'0'
	},{
        duration:500,
        easing:'easeOutExpo',
        queue:false,
        complete:function(){}
    });
});
                                    
$('#portfolio-web-sites').mouseleave(function(){
	$(this).css({'background-image':'url(./images/site-white.png)','background-position':'50% 50%'}).animate({
		backgroundColor:'rgba(0,0,0,0.5)',
		backgroundSize:'30%',
        backgroundPosition:'50% 40%'
	},{
        duration:500,
        easing:'easeOutExpo',
        queue:false,
        complete:function(){}
    })
    .find('.portfolio-item-title').css('opacity','0').animate({
		opacity:'1'
	},{
        duration:500,
        easing:'easeOutExpo',
        queue:false,
        complete:function(){}
    });
});

function itemOneHover() {
    $('#portfolio-web-banners').hover(function() {
	$(this).css({'background-image':'url(./images/banner-black.png)','background-position':'50% 40%'}).animate({
		backgroundColor:'rgba(255,255,255,1)',
		backgroundSize:'45%',
        backgroundPosition:'50% 50%'
	},{
        duration:500,
        easing:'easeOutExpo',
        queue:false,
        complete:function(){}
    })
    .find('.portfolio-item-title').css('opacity','1').animate({
		opacity:'0'
	},{
        duration:500,
        easing:'easeOutExpo',
        queue:false,
        complete:function(){}
    });
}, function(){
	$(this).css({'background-image':'url(./images/banner-white.png)','background-position':'50% 50%'}).animate({
		backgroundColor:'rgba(0,0,0,0.3)',
		backgroundSize:'30%',
        backgroundPosition:'50% 40%'
	},{
        duration:500,
        easing:'easeOutExpo',
        queue:false,
        complete:function(){}
    })
    .find('.portfolio-item-title').css('opacity','0').animate({
		opacity:'1'
	},{
        duration:500,
        easing:'easeOutExpo',
        queue:false,
        complete:function(){}
    });
});
};
        
itemOneHover();

$('#portfolio-web-eblasts').mouseover(function() {
	$(this).css({'background-image':'url(./images/eblast-black.png)','background-position':'50% 40%'}).animate({
		backgroundColor:'rgba(255,255,255,1)',
		backgroundSize:'45%',
        backgroundPosition:'50% 50%'
	},{
        duration:500,
        easing:'easeOutExpo',
        queue:false,
        complete:function(){}
    })
    .find('.portfolio-item-title').css('opacity','1').animate({
		opacity:'0'
	},{
        duration:500,
        easing:'easeOutExpo',
        queue:false,
        complete:function(){}
    });
});
                                    
$('#portfolio-web-eblasts').mouseleave(function(){
	$(this).css({'background-image':'url(./images/eblast-white.png)','background-position':'50% 50%'}).animate({
		backgroundColor:'rgba(0,0,0,0.5)',
		backgroundSize:'30%',
        backgroundPosition:'50% 40%'
	},{
        duration:500,
        easing:'easeOutExpo',
        queue:false,
        complete:function(){}
    })
    .find('.portfolio-item-title').css('opacity','0').animate({
		opacity:'1'
	},{
        duration:500,
        easing:'easeOutExpo',
        queue:false,
        complete:function(){}
    });
});

$('#portfolio-print-flyers').mouseover(function() {
	$(this).css({'background-image':'url(./images/flyer-black.png)','background-position':'50% 40%'}).animate({
		backgroundColor:'rgba(255,255,255,1)',
		backgroundSize:'45%',
        backgroundPosition:'50% 50%'
	},{
        duration:500,
        easing:'easeOutExpo',
        queue:false,
        complete:function(){}
    })
    .find('.portfolio-item-title').css('opacity','1').animate({
		opacity:'0'
	},{
        duration:500,
        easing:'easeOutExpo',
        queue:false,
        complete:function(){}
    });
});
                                    
$('#portfolio-print-flyers').mouseleave(function(){
	$(this).css({'background-image':'url(./images/flyer-white.png)','background-position':'50% 50%'}).animate({
		backgroundColor:'rgba(0,0,0,0.3)',
		backgroundSize:'30%',
        backgroundPosition:'50% 40%'
	},{
        duration:500,
        easing:'easeOutExpo',
        queue:false,
        complete:function(){}
    })
    .find('.portfolio-item-title').css('opacity','0').animate({
		opacity:'1'
	},{
        duration:500,
        easing:'easeOutExpo',
        queue:false,
        complete:function(){}
    });
});

$('#portfolio-print-brochures').mouseover(function() {
	$(this).css({'background-image':'url(./images/brochure-black.png)','background-position':'50% 40%'}).animate({
		backgroundColor:'rgba(255,255,255,1)',
		backgroundSize:'45%',
        backgroundPosition:'50% 50%'
	},{
        duration:500,
        easing:'easeOutExpo',
        queue:false,
        complete:function(){}
    })
    .find('.portfolio-item-title').css('opacity','1').animate({
		opacity:'0'
	},{
        duration:500,
        easing:'easeOutExpo',
        queue:false,
        complete:function(){}
    });
});
                                    
$('#portfolio-print-brochures').mouseleave(function(){
	$(this).css({'background-image':'url(./images/brochure-white.png)','background-position':'50% 50%'}).animate({
		backgroundColor:'rgba(0,0,0,0.5)',
		backgroundSize:'30%',
        backgroundPosition:'50% 40%'
	},{
        duration:500,
        easing:'easeOutExpo',
        queue:false,
        complete:function(){}
    })
    .find('.portfolio-item-title').css('opacity','0').animate({
		opacity:'1'
	},{
        duration:500,
        easing:'easeOutExpo',
        queue:false,
        complete:function(){}
    });
});

$('#portfolio-print-billboards').mouseover(function() {
	$(this).css({'background-image':'url(./images/billboard-black.png)','background-position':'50% 40%'}).animate({
		backgroundColor:'rgba(255,255,255,1)',
		backgroundSize:'45%',
        backgroundPosition:'50% 50%'
	},{
        duration:500,
        easing:'easeOutExpo',
        queue:false,
        complete:function(){}
    })
    .find('.portfolio-item-title').css('opacity','1').animate({
		opacity:'0'
	},{
        duration:500,
        easing:'easeOutExpo',
        queue:false,
        complete:function(){}
    });
});
                                    
$('#portfolio-print-billboards').mouseleave(function(){
	$(this).css({'background-image':'url(./images/billboard-white.png)','background-position':'50% 50%'}).animate({
		backgroundColor:'rgba(0,0,0,0.3)',
		backgroundSize:'30%',
        backgroundPosition:'50% 40%'
	},{
        duration:500,
        easing:'easeOutExpo',
        queue:false,
        complete:function(){}
    })
    .find('.portfolio-item-title').css('opacity','0').animate({
		opacity:'1'
	},{
        duration:500,
        easing:'easeOutExpo',
        queue:false,
        complete:function(){}
    });
});
        
$('#portfolio-web-sites').click(function() {
    
    window.location.hash = "work/web-sites";
    
})
        
$('#portfolio-web-banners').click(function() {
    
    window.location.hash = "work/web-banners";
    
})
        
$('#portfolio-web-eblasts').click(function() {
    
    window.location.hash = "work/web-eblasts";
    
})
        
$('#portfolio-print-flyers').click(function() {
    
    window.location.hash = "work/print-flyers";
    
})
        
$('#portfolio-print-brochures').click(function() {
    
    window.location.hash = "work/print-brochures";
    
})
        
$('#portfolio-print-billboards').click(function() {
    
    window.location.hash = "work/print-billboards";
    
})
        
$('.portfolio-item').click(function(){
    
    var currentItem = $(this);
    
    function correctURL() {
        if (currentItem.hasClass('web1')) {
        return 'web-sites';
    };
        if (currentItem.hasClass('web2')) {
        return 'web-banners';
    };
        if (currentItem.hasClass('web3')) {
        return 'web-eblasts';
    };
        if (currentItem.hasClass('print1')) {
        return 'print-flyers';
    };
        if (currentItem.hasClass('print2')) {
        return 'print-brochures';
    };
        if (currentItem.hasClass('print3')) {
        return 'print-billboards';
    }
    };
    
    console.log(correctURL());
    
	$(this).stop().find('.portfolio-item-title').stop();
            
	$.ajax({
	type: 'GET',
	url:correctURL() + '.html',
	success:function(tiles) {
	
	if (!$('#wrapper').css('display','none')) {
    $('#wrapper').fadeToggle(); // hide/show toggle
	}

$('#portfolio-tile-container-outer').css('display','block').html(tiles, function(){  });

    },
	cache: false,
	complete: function(){
        
        function tileFlyIn(){
            		    $('.portfolio-tile')
    .css({
        'left':'100px'
    });

       var delayNumber = 250;
	   var i;
        for (i = 0; i < $('.portfolio-tile').length; i++) {

        $('.portfolio-tile').eq(i)
    .delay(delayNumber)
    .animate({
        opacity:'1',
        left:'0'
    }, {
        duration:1000,
        easing:'easeOutBack',
        queue:true,
        complete:function(){
			//Tile Hover
$('.portfolio-tile img').hover(function() {
    
        if ($(this).hasClass('square-tile')) {
     $(this).animate({
         width:'24vw',
         height:'24vw',
         margin:'0'
     },{
         duration:250,
         easing:'easeOutExpo',
         queue:false,
         complete:function(){}
     });
        }
    
        if ($(this).hasClass('billboard-tile')) {
     $(this).animate({
         width:'24vw',
         height:'24vw',
         margin:'0',
         opacity:'0.5'
     },{
         duration:250,
         easing:'easeOutExpo',
         queue:false,
         complete:function(){}
     });
        }
    
        if ($(this).hasClass('ims-billboard-tile')) {
     $(this).animate({
         width:'24vw',
         height:'24vw',
         margin:'0',
         opacity:'0'
     },{
         duration:250,
         easing:'easeOutExpo',
         queue:false,
         complete:function(){}
     });
        }
    
}, function() {
    
        if ($(this).hasClass('square-tile')) {
     $(this).animate({
         width:'20vw',
         height:'20vw',
         margin:'2vw'
     },{
         duration:250,
         easing:'easeOutExpo',
         queue:false,
         complete:function(){}
     });
        }
    
        if ($(this).hasClass('billboard-tile')) {
     $(this).animate({
         width:'24vw',
         height:'24vw',
         margin:'0',
         opacity:'1'
     },{
         duration:250,
         easing:'easeOutExpo',
         queue:false,
         complete:function(){}
     });
        }
    
        if ($(this).hasClass('ims-billboard-tile')) {
     $(this).animate({
         width:'24vw',
         height:'24vw',
         margin:'0',
         opacity:'1'
     },{
         duration:250,
         easing:'easeOutExpo',
         queue:false,
         complete:function(){}
     });
        }
    
    
});
        
        delayNumber = delayNumber + 100;
        };
        
        
        $('#portfolio-overlay').fadeIn(1000,'easeOutCirc');
        $('.portfolio-tile-header').fadeIn(1000,'easeOutCirc');
        $('.close-btn').fadeIn(1000,'easeOutCirc');
        }
		
        tileFlyIn();
        
        var portfolioTile = $('.portfolio-tile img');



		

        
$('.close-btn').click(function(){
            
    window.location.hash = "work";
	
		if ($('#wrapper').css('display','none')) {
    $('#wrapper').fadeToggle(); // hide/show toggle
	}
    
	$(this).stop().animate({
       fontSize:'100px',
       right:'65px',
       top:'37px'
   }, {
       duration:500,
       easing:'easeOutExpo',
       queue:false,
       complete:function(){}
   }).fadeOut(500,'easeOutCirc');
    
    $(this).parents().find('#portfolio-tile-container-outer').fadeOut(500,'easeOutCirc',function(){$(this).empty();});
    
    $(this).parents().find('#portfolio-overlay').stop().fadeOut(500,'easeOutCirc');
    
});
        
$('.close-btn').hover(function() {
   $(this).animate({
       fontSize:'125px',
       right:'58px',
       top:'22px'
   }, {
       duration:500,
       easing:'easeOutExpo',
       queue:false,
       complete:function(){}
   });
}, function() {
   $(this).animate({
       fontSize:'100px',
       right:'65px',
       top:'37px'
   }, {
       duration:500,
       easing:'easeOutExpo',
       queue:false,
       complete:function(){}
   });
});   
        
        
        
        
    }});
    
    
});
        


	


					
					
	








		}});
    
});

