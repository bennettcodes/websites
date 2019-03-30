    var portfolioCategoriesArray = [
        "./images/site-black.png",
        "./images/site-white.png",
        "./images/banner-black.png",
        "./images/banner-white.png",
        "./images/eblast-black.png",
        "./images/eblast-white.png",
        "./images/flyer-black.png",
        "./images/flyer-white.png",
        "./images/brochure-black.png",
        "./images/brochure-white.png",
        "./images/billboard-black.png",
        "./images/billboard-white.png"
    ];

    var navBackgroundArray = [
        "./images/about-tab-bg.jpg",
        "./images/portfolio-tab-bg.jpg",
        "./images/contact-tab-bg.jpg"
    ];

    function preCachePortfolioCategories() {
    $.each(portfolioCategoriesArray, function(){
        var img = new Image();
        img.src = this;
    });
    };

    function preCacheNavBackground() {
    $.each(navBackgroundArray, function(){
        var img = new Image();
        img.src = this;
    });
    };

/**
 * Trigger a callback when the selected images are loaded:
 * @param {String} selector
 * @param {Function} callback
 */
var onImgLoad = function(selector, callback) {
    $(selector).each(function() {
        if (this.complete || /*for IE 10-*/ $(this).height() > 0) {
            callback.apply(this);
        } else {
            $(this).on('load', function() {
                callback.apply(this);
            });
        }
    });
};

var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

var screenHalfWidth = w / 2,
    screenHalfHeight = h / 2;
    
var circle = $("#profile-circle");

circle.css({
    'width':screenHalfHeight,
    'height':screenHalfHeight
});

var circleWidth = circle.width(),
    circleHalfWidth = circleWidth / 2,
    circleHeight = circle.height(),
    circleHalfHeight = circleHeight / 2,
    circleWidthFirst = circleWidth * 0.6,
    circleHalfWidthFirst = circleWidthFirst / 2,
    circleHeightFirst = circleHeight * 0.6,
    circleHalfHeightFirst = circleHeightFirst / 2;
    
    circleHalfSizeFirst = h * 0.15,
    circleHalfSizeSecond = h * 0.25,
    circleLeftFirst = screenHalfWidth - circleHalfWidthFirst,
    circleLeftSecond = screenHalfWidth - circleHalfWidth;

$("#header").css("height", "0");

onImgLoad($('.initial'), function() {
    var circleLeftFirst = "50% - 15vh",
        circleLeftSecond = "50% - 25vh";
        
        $('.cache-icons').html(
        "<img src='../images/site-white.svg'>" +
        "<img src='../images/banner-white.svg'>" +
        "<img src='../images/eblast-white.svg'>" +
        "<img src='../images/flyer-white.svg'>" +
        "<img src='../images/brochure-white.svg'>" +
        "<img src='../images/billboard-white.svg'>" +
        "<img src='../images/site-black.svg'>" +
        "<img src='../images/banner-black.svg'>" +
        "<img src='../images/eblast-black.svg'>" +
        "<img src='../images/flyer-black.svg'>" +
        "<img src='../images/brochure-black.svg'>" +
        "<img src='../images/billboard-black.svg'>"
    );
   	$('#copyright').delay(1000).fadeIn(1000);
   	$('#download-resume').delay(500).fadeIn(1000);
    $(this).delay(1500).fadeIn(1000);
    $('#loading-container').delay(500).fadeOut(700);
	$("#content").delay(1500).fadeIn(1000, function(){});	
	$("#profile-circle").css({"opacity":"0","width":circleWidthFirst,"height":circleHeightFirst,"top":"70vh","left": screenHalfWidth - circleHalfHeightFirst}).animate({
		width:circleWidth,
		height:circleHeight,
		opacity:"1",
		top:"30vh",
        left: screenHalfWidth - circleHalfHeight
	},1000,"easeOutBack",function(){});	
	});


    $("#header").delay(1000).animate({
        height: "97px",
        opacity: "1"
    }, 1000, 'easeOutExpo', function() {});

var menuIconWidthNormal = "calc(7vw * 1.273)",
    menuIconWidthExpanded = "calc(14vw * 1.273)",
    navItemList = $("#nav"),
    content = $("#content"),
    navItemListHeight = h - 100,
    contentHeight = h,
    navItem = $("#nav li"),
    tabText = $(".tab-text"),
    portfolioOrb = $(".portfolio-orb"),
    navItemHeight = navItemListHeight / 3,
	logoWidth = $("#logo").width(),
	logoWidthExpanded = logoWidth * 1.25,
	logoHeight = $("#logo").height(),
	logoHeightExpanded = logoHeight * 1.25,
    tabBackgroundColor = $(".tab-bg-color"),
	navItemHeightLast = navItemHeight + 0.01;

    tabText.css('height',navItemHeight + "px");
    tabBackgroundColor.css('height',navItemHeight + "px");
    navItemList.css('height',navItemListHeight + "px");
    content.css('height',contentHeight + "px");
    navItem.eq(0).css('height',navItemHeight + "px");
    navItem.eq(1).css('height',navItemHeight + "px");
    navItem.eq(2).css('height',navItemHeightLast + "px");
    navItem.eq(0).css('lineHeight',navItemHeight + "px");
    navItem.eq(1).css('lineHeight',navItemHeight + "px");
    navItem.eq(2).css('lineHeight',navItemHeightLast + "px");
    navItem.eq(0).css('backgroundImage','url(./images/about-tab-bg.jpg)');
    navItem.eq(1).css('backgroundImage','url(./images/portfolio-tab-bg.jpg)');
    navItem.eq(2).css('backgroundImage','url(./images/contact-tab-bg.jpg)');
    tabBackgroundColor.eq(0).css('backgroundColor','rgba(0,0,0,0.7)');
    tabBackgroundColor.eq(1).css('backgroundColor','rgba(0,0,0,0.7)');
    tabBackgroundColor.eq(2).css('backgroundColor','rgba(0,0,0,0.7)');

$('#menu-icon-container').on({
    'touchstart': function() {
        $('#menu-icon').stop(true, false).fadeIn(0).animate({
            width: "83.952px",
            height: "66px",
            top: "17px",
            right: "10px",
			opacity: "1"
        }, 250, 'easeOutCirc', function() {});
        $(this).parents().find("#menu-hover-shadow").stop(true, false).animate({
            opacity: "0.7",
            width: "500px",
            height: "500px",
            top: "-200px",
            right: "-230px"
        }, 250, 'easeOutCirc', function() {});
    }
});
$('#menu-icon-container').on({
    'touchend': function() {
        tabText.eq(0).stop(true, false).css({'opacity':'0','paddingTop':'50px'}).delay(500).animate({
            paddingTop:'0',
            opacity:'1'
        },1000,'easeOutExpo',function(){});
        tabText.eq(1).stop(true, false).css({'opacity':'0','paddingTop':'50px'}).delay(600).animate({
            paddingTop:'0',
            opacity:'1'
        },1000,'easeOutExpo',function(){});
        tabText.eq(2).stop(true, false).css({'opacity':'0','paddingTop':'50px'}).delay(700).animate({
            paddingTop:'0',
            opacity:'1'
        },1000,'easeOutExpo',function(){});
        $('#menu-icon').animate({
            width: "41.976px",
            height: "33px",
            top: "33.5px",
            right: "20px",
			opacity: "1"
        }, 250, 'easeInCirc', function() {});
        $(this).parents().find("#menu-hover-shadow").animate({
            opacity: "0",
            width: "0",
            height: "0",
            top: "50px",
            right: "20px",
        }, 250, 'easeInCirc', function() {});
        $("#nav").stop(true, true).css("bottom","0").fadeToggle(500);
    }
});
$('.page-bg').on({
    'touchstart': function() {
        $(this).parents().find("#container").stop(true, false).animate({
            backgroundColor: "#000000"
        }, 250, 'linear', function() {});
        $(this).parents().find("body").stop(true, false).animate({
            backgroundColor: "#4c4c4c"
        }, 250, 'linear', function() {});
    }
});
$('.page-bg').on({
    'touchend': function() {
        $(this).parents().find("#container").stop(true, false).animate({
            backgroundColor: "#2b2b2b"
        }, 250, 'linear', function() {});
        $(this).parents().find("body").stop(true, false).animate({
            backgroundColor: "#696969"
        }, 250, 'linear', function() {});
    }
});
$("#logo-container").on({
    'touchstart': function() {
   		$('#copyright').stop(true,true).fadeOut(0);
   		$('#download-resume').stop(true,true).fadeOut(0);
        $(this).next("#logo").stop(true, false).animate({
            width: logoWidthExpanded + "px",
            height: logoHeightExpanded + "px",
            top: "18.75px",
            left: "12.5px",
			opacity: "1"
        }, 250, 'easeOutCirc', function() {});
        $(this).parents().find("#container").stop(true, false).animate({
            backgroundColor: "#000000"
        }, 250, 'linear', function() {});
        $(this).parents().find("body").stop(true, false).animate({
            backgroundColor: "#4c4c4c"
        }, 250, 'linear', function() {});
        $(this).parents().find("#logo-hover-glow").stop(true, true).animate({
            opacity: "0.7",
            width: "500px",
            height: "500px",
            top: "-200px",
            left: "-230px"
        }, 250, 'easeOutCirc', function() {});
    }
});
$("#logo-container").on({
    'touchend': function() {
		$('#download-resume').stop(true,true).delay(500).fadeIn(1000);
   		$('#copyright').stop(true,true).delay(1000).fadeIn(1000);
	$("#profile-circle").stop(true, false).fadeIn(0).css({"opacity":"0","width":circleWidthFirst,"height":circleHeightFirst,"top":"70vh","left": screenHalfWidth - circleHalfHeightFirst}).animate({
		width:circleWidth,
		height:circleHeight,
		opacity:"1",
		top:"30vh",
        left: screenHalfWidth - circleHalfHeight
	},1000,"easeOutBack",function(){});	
        $(this).parents().find("#container").stop(true, true).animate({
            backgroundColor: "#2b2b2b"
        }, 250, 'linear', function() {});
        $(this).parents().find("body").stop(true, true).animate({
            backgroundColor: "#696969"
        }, 250, 'linear', function() {});
        $(this).next("#logo").animate({
            width: "163.95px",
            height: "50px",
            top: "25px",
            left: "20px",
			opacity: "1"
        }, 250, 'easeInCirc', function() {});
        $("#nav").stop(true, true).fadeOut(500);
        $("#content").fadeOut(500, function(){
            $(this).empty(0).fadeIn(0);
			});
        $(this).parents().find("#logo-hover-glow").animate({
            opacity: "0"
        }, 250, 'easeInCirc', function() {
            $(this).css({
                'top':'50',
                'left':'20',
                'width':'0',
                'height':'0'
            });
        });
    }
});
tabText.eq(0).on({
    'touchstart': function() {
   		$('#copyright').stop(true,true).fadeOut(0);
   		$('#download-resume').stop(true,true).fadeOut(0);
        $(this).next(tabBackgroundColor).stop(true, false).animate({
            backgroundColor: "rgba(95,240,173,1)"
        }, 250, 'swing', function() {});
        $("#content-body").animate({opacity:"0"},500,"linear",function(){});
        $("#profile-circle").stop(true, true).fadeOut(0);
		$(".portfolio-orb").stop(true, true).fadeOut(0);
    }
});
tabText.eq(0).on({
    'touchend': function() {
   		$('#copyright').stop(true,true).fadeOut(0);
   		$('#download-resume').stop(true,true).fadeOut(0);
        $(this).next(tabBackgroundColor).animate({
            backgroundColor: "rgba(0,0,0,0.7)"
        }, 250, 'swing', function() {
		$('#loading-container').fadeIn(500);
		});
        $("#nav").stop(true, false).delay(250).fadeToggle(500, function(){
        window.aboutLoad();
            });
    }
});
tabText.eq(1).on({
    'touchstart': function() {
   		$('#copyright').stop(true,true).fadeOut(0);
   		$('#download-resume').stop(true,true).fadeOut(0);
        preCachePortfolioCategories();
        $(this).next(tabBackgroundColor).stop(true, false).animate({
            backgroundColor: "rgba(161,161,255,1)"
        }, 250, 'swing', function() {});
        $("#content-body").animate({opacity:"0"},500,"linear",function(){});
        $("#profile-circle").stop(true, true).fadeOut(0);
		$(".portfolio-orb").stop(true, true).fadeOut(0);
    }
});
tabText.eq(1).on({
    'touchend': function() {
   		$('#copyright').stop(true,true).fadeOut(0);
   		$('#download-resume').stop(true,true).fadeOut(0);
        $(this).next(tabBackgroundColor).animate({
            backgroundColor: "rgba(0,0,0,0.7)"
        }, 250, 'swing', function() {
		$('#loading-container').fadeIn(500);
		});
        $("#nav").stop(true, false).delay(250).fadeToggle(500, function(){
        window.portfolioLoad();
            });
    }
});
tabText.eq(2).on({
    'touchstart': function() {
   		$('#copyright').stop(true,true).fadeOut(0);
   		$('#download-resume').stop(true,true).fadeOut(0);
        $(this).next(tabBackgroundColor).stop(true, false).animate({
            backgroundColor: "rgba(255,150,150,1)"
        }, 250, 'swing', function() {});
        $("#content-body").animate({opacity:"0"},500,"linear",function(){});
        $("#profile-circle").stop(true, true).fadeOut(0);
		$(".portfolio-orb").stop(true, true).fadeOut(0);
    }
});
tabText.eq(2).on({
    'touchend': function() {
   		$('#copyright').stop(true,true).fadeOut(0);
   		$('#download-resume').stop(true,true).fadeOut(0);
        $(this).next(tabBackgroundColor).animate({
            backgroundColor: "rgba(0,0,0,0.7)"
        }, 250, 'swing', function() {
		$('#loading-container').fadeIn(500);
		});
        $("#nav").stop(true, false).delay(250).fadeToggle(500, function(){
        window.contactLoad();
            });
    }
});

$('.portfolio-orb').on({
    'touchend': function(){
    
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
    
// $(this).stop().find('.portfolio-item-title').stop();
            
	$.ajax({
	type: 'GET',
	url:correctURL() + '.html',
	success:function(tiles) {
	
	//if (!$('#wrapper').css('display','none')) {
    //$('#wrapper').fadeToggle(); // hide/show toggle
	//}

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
$('.portfolio-tile').hover(function() {
     $(this).animate({
		 top:'-3vw'
     },{
         duration:500,
         easing:'easeOutExpo',
		 queue:false,
         complete:function(){}
     });
},function() {
     $(this).animate({
		 top:'0'
     },{
         duration:500,
         easing:'easeInQuart',
		 queue:false,
         complete:function(){}
     });
});
			}
    });
        delayNumber = delayNumber + 100;
        };
		
        $('.portfolio-tile-header-container').fadeIn(1000,'easeOutCirc');
        }
		
        tileFlyIn();
        
        var portfolioTile = $('.portfolio-tile img'); 
        
        
        
        
    }});
    
    
}
});