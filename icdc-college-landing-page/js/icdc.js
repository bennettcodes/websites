$(function() {
  
$(window).bind('load', function()
{
	$(".program-title").hover(function() {
		$(this).find(".program-expand").fadeIn(0,"linear");
	},function() {
		$(this).find(".program-expand").fadeOut(0,"linear");
	});
	
	$(".program-expand").hover(function() {
      $(this).parent(".program-title").find(".program-description").fadeIn(500);
	},function() {
      $(this).parent(".program-title").find(".program-description").fadeOut(500);
	});
	
	$("span.question").hover(function() {
		$("#disclaimer-popup").css("display","inline");
	}, function() {
		$("#disclaimer-popup").css("display","none");
	});
	
	$( "#commercial-thumb1" ).hover(function() {
	$(this).animate({
		opacity: "0",
		width: "508px",
		height: "287px",
		left: "-25px",
		top: "-14px"
	}, {
      duration:500,
      easing:"swing",
      queue:false,
      complete:function(){}
    });
    }, function() {
	$(this).animate({
		opacity: "1",
		width: "458px",
		height: "259px",
		left: "0px",
		top: "0px"
	}, {
      duration:500,
      easing:"swing",
      queue:false,
      complete:function(){}
    });
	});
	
	$( "#commercial-thumb1" ).hover(function() {
	$( '#commercial-thumb-red-glow' ).animate({
		opacity: "1",
		width: "508px",
		height: "287px",
		left: "-25px",
		top: "-14px"
	}, {
      duration:500,
      easing:"swing",
      queue:false,
      complete:function(){}
    });
	}, function() {
	$( '#commercial-thumb-red-glow' ).animate({
		opacity: "0",
		width: "458px",
		height: "259px",
		left: "0px",
		top: "0px"
	}, {
      duration:500,
      easing:"swing",
      queue:false,
      complete:function(){}
    });
	});
	
	$( "#commercial-thumb1" ).hover(function() {
	$( "#commercial-thumb2" ).animate({
		width: "508px",
		height: "287px",
		left: "-25px",
		top: "-14px"
	}, {
      duration:500,
      easing:"swing",
      queue:false,
      complete:function(){}
    });
	}, function() {
	$( "#commercial-thumb2" ).animate({
		width: "458px",
		height: "259px",
		left: "0px",
		top: "0px"
	}, {
      duration:500,
      easing:"swing",
      queue:false,
      complete:function(){}
    });
	});
	
	$( "#commercial-thumb-container" ).click(function() {
	$( "#commercial-player-bg" ).show().animate({
		opacity: "1"
	}, {
      duration:500,
      easing:"swing",
      queue:false,
      complete:function(){}
    });
	});
	
	$( ".story1" ).click(function() {
	$( "#commercial-player-bg" ).show().animate({
		opacity: "1"
	},500,"swing",function(){});
	});
	
	$( ".story2" ).click(function() {
	$( "#commercial-player-bg" ).show().animate({
		opacity: "1"
	},500,"swing",function(){});
	});
	
	$( ".story3" ).click(function() {
	$( "#commercial-player-bg" ).show().animate({
		opacity: "1"
	},500,"swing",function(){});
	});
	
	$( "#commercial-player-bg" ).click(function() {
	$( this ).fadeOut(500);
	});
	
	$( "#commercial-player-bg" ).click(function() {
	$( "#commercial-player" ).fadeOut(500);
	});
	
	$( "#commercial-player-bg" ).click(function() {
	$( "#story-player1" ).fadeOut(500);
	});
	
	$( "#commercial-player-bg" ).click(function() {
	$( "#story-player2" ).fadeOut(500);
	});
	
	$( "#commercial-player-bg" ).click(function() {
	$( "#story-player3" ).fadeOut(500);
	});
	
	$( "#commercial-thumb1" ).click(function() {
	$( "#commercial-player" ).animate({
		
	},500,"swing",function() {
		//
	}).show(500);
	});
	
	$( ".story1" ).click(function() {
	$( "#story-player1" ).animate({
		
	},500,"swing",function() {
		//
	}).show(500);
	});
	
	$( ".story2" ).click(function() {
	$( "#story-player2" ).animate({
		
	},500,"swing",function() {
		//
	}).show(500);
	});
	
	$( ".story3" ).click(function() {
	$( "#story-player3" ).animate({
		
	},500,"swing",function() {
		//
	}).show(500);
	});
	
	$( "#commercial-thumb1" ).click(function() {
	$( this ).animate({
		width: "458px",
		height: "259px",
		left: "0px",
		top: "0px"
	}, {
      duration:500,
      easing:"swing",
      queue:false,
      complete:function(){}
    });
	});
	
	$( "#commercial-thumb1" ).click(function() {
	$( "#commercial-thumb2" ).animate({
		width: "458px",
		height: "259px",
		left: "0px",
		top: "0px"
	}, {
      duration:500,
      easing:"swing",
      queue:false,
      complete:function(){}
    });
	});
	
	$( "#commercial-thumb1" ).click(function() {
	$( "#commercial-thumb-red-glow" ).animate({
		width: "458px",
		height: "259px",
		left: "0px",
		top: "0px",
		opacity: "0"
	}, {
      duration:500,
      easing:"swing",
      queue:false,
      complete:function(){}
    });
	});
	
$( ".success-stories-thumb" ).hover(function() {
		$( this ).stop().animate({
			marginTop: "-30px",
			height: "232px"
		}, 500, "easeOutCirc", function() {
		});
}, function() {
		$( this ).stop().animate({
			marginTop: "0px",
			height: "202px"
		}, 500, "easeOutCirc", function() {
			$(this).stop(500);
		});
		});
	
	$( "img.thumb1" ).hover(function() {
		$( this ).stop().fadeTo( 500, 0, function() {
		});
		
}, function() {
	
		$( this ).stop().fadeTo( 500, 1, function() {
			$(this);	
		});
		});
		
$('.cell-long:first').hover(function(){
  $(this).prev('div').addClass('topZ').animate({
    'width': '430px',
    'height': '225px',
    'left': '-10px',
    'top': '-10px'
  },{
      duration:200,
      easing:'swing',
      queue:false,
      complete:function(){}
  });
  },function(){
  $(this).prev('div').animate({
    'width': '410px',
    'height': '205px',
    'left': '0',
    'top': '0'
  },{
      duration:200,
      easing:'swing',
      queue:true,
      complete:function(){$(this).removeClass('topZ');}
      
  });
});
    
    $('.cell-long:last').hover(function(){
  $(this).prev('div').addClass('topZ').animate({
    'width': '430px',
    'height': '225px',
    'left': '402px',
    'top': '197px'
  },{
      duration:200,
      easing:'swing',
      queue:false,
      complete:function(){}
  });
  },function(){
  $(this).prev('div').animate({
    'width': '410px',
    'height': '205px',
    'left': '412',
    'top': '207px'
  },{
      duration:200,
      easing:'swing',
      queue:true,
      complete:function(){$(this).removeClass('topZ');}
      
  });
});
		
$('.cell-short').eq(0).hover(function(){
  $(this).prev('div').addClass('topZ').animate({
    'width': '224px',
    'height': '225px',
    'left': '402px',
    'top': '-10px'
  },{
      duration:200,
      easing:'swing',
      queue:false,
      complete:function(){}
  });
  },function(){
  $(this).prev('div').animate({
    'width': '204px',
    'height': '205px',
    'left': '412px',
    'top': '0'
  },{
      duration:200,
      easing:'swing',
      queue:true,
      complete:function(){$(this).removeClass('topZ');}
      
  });
});
		
$('.cell-short').eq(1).hover(function(){
  $(this).prev('div').addClass('topZ').animate({
    'width': '224px',
    'height': '225px',
    'left': '608px',
    'top': '-10px'
  },{
      duration:200,
      easing:'swing',
      queue:false,
      complete:function(){}
  });
  },function(){
  $(this).prev('div').animate({
    'width': '204px',
    'height': '205px',
    'left': '618px',
    'top': '0'
  },{
      duration:200,
      easing:'swing',
      queue:true,
      complete:function(){$(this).removeClass('topZ');}
      
  });
});
		
$('.cell-short').eq(2).hover(function(){
  $(this).prev('div').addClass('topZ').animate({
    'width': '224px',
    'height': '225px',
    'left': '-10px',
    'top': '197px'
  },{
      duration:200,
      easing:'swing',
      queue:false,
      complete:function(){}
  });
  },function(){
  $(this).prev('div').animate({
    'width': '204px',
    'height': '205px',
    'left': '0',
    'top': '207px'
  },{
      duration:200,
      easing:'swing',
      queue:true,
      complete:function(){$(this).removeClass('topZ');}
      
  });
});
	
	$("#click-here-stories").hover(function() {
		$(this).stop()
  .css({
    borderTopLeftRadius: 20, 
    borderTopRightRadius: 0, 
    borderBottomLeftRadius: 0, 
    borderBottomRightRadius: 20 })
  .animate({
    borderTopLeftRadius: 0, 
    borderTopRightRadius: 20, 
    borderBottomLeftRadius: 20, 
    borderBottomRightRadius: 0}, 500,"swing");
	},function() {
		$(this).stop()
  .css({
    borderTopLeftRadius: 0, 
    borderTopRightRadius: 20, 
    borderBottomLeftRadius: 20, 
    borderBottomRightRadius: 0 })
  .animate({
    borderTopLeftRadius: 20, 
    borderTopRightRadius: 0, 
    borderBottomLeftRadius: 0, 
    borderBottomRightRadius: 20}, 500,"swing");
	});
	
	$(function() {
    $('#click-here-stories').click(function() {
        $('html, body').animate({
    scrollTop: $("#success-stories").offset().top
}, 1000,"easeInQuint");
    });
});
		
$('.cell-short').eq(3).hover(function(){
  $(this).prev('div').addClass('topZ').animate({
    'width': '224px',
    'height': '225px',
    'left': '196px',
    'top': '197px'
  },{
      duration:200,
      easing:'swing',
      queue:false,
      complete:function(){}
  });
  },function(){
  $(this).prev('div').animate({
    'width': '204px',
    'height': '205px',
    'left': '206px',
    'top': '207px'
  },{
      duration:200,
      easing:'swing',
      queue:true,
      complete:function(){$(this).removeClass('topZ');}
      
  });
});

(function($) {
    $.fn.clickToggle = function(func1, func2) {
        var funcs = [func1, func2];
        this.data('toggleclicked', 0);
        this.click(function() {
            var data = $(this).data();
            var tc = data.toggleclicked;
            $.proxy(funcs[tc], this)();
            data.toggleclicked = (tc + 1) % 2;
        });
        return this;
    };
}(jQuery));
		
$('#map-img2').click(function(){
  $('#location').animate({
    'width': '948px'
  },1000, "easeInOutCubic", function() {
  });
  });
		
$('#map-img2').click(function(){
  $('#gmap').animate({
    'margin-left': '0'
  },1000, "easeInOutCubic", function() {
  });
  });
		
$( "#map-img2" ).click(function() {
  $( "#map-close" ).fadeTo( 500 , 1, function() {
    $("#map-close").css("display","inline");
  });
});
		
$( "#map-img2" ).click(function() {
  $( this ).fadeTo( 500 , 0, function() {
    $(this).css("display","none");
  });
});
		
$( "#map-img2" ).click(function() {
  $( "#fields" ).fadeTo( 1000 , 0.5, function() {
    //
  });
});
		
$('#map-img2').click(function(){
  $('#fields-header').animate({
    'margin-left': '50px'
  },1000, "easeInOutCubic", function() {
  });
  });
		
$('#map-img2').click(function(){
  $('#fields-bullets').animate({
    'margin-left': '50px'
  },1000, "easeInOutCubic", function() {
  });
  });
	
$('#map-close').click(function(){
  $('#location').animate({
    'width': '343px'
  },1000, "easeInOutCubic", function() {
  });
  });
		
$('#map-close').click(function(){
  $('#gmap').animate({
    'margin-left': '-50px'
  },1000, "easeInOutCubic", function(){
  });
  });
		
$( "#map-close" ).click(function() {
  $( "#map-img2" ).fadeTo( 500 , 1, function() {
    $("#map-img2").css("display","inline");
  });
});
		
$( "#map-close" ).click(function() {
  $( this ).fadeTo( 500 , 0, function() {
    $(this).css("display","none");
  });
});
		
$( "#map-close" ).click(function() {
  $( "#fields" ).fadeTo( 1000 , 1, function() {
	  //
  });
});
		
$('#map-close').click(function(){
  $('#fields-header').animate({
    'margin-left': '0px'
  },1000, "easeInOutCubic", function() {
  });
  });
		
$('#map-close').click(function(){
  $('#fields-bullets').animate({
    'margin-left': '0px'
  },1000, "easeInOutCubic", function() {
  });
  });
	
	$('#thank-you-message').delay(250).animate({
		width: "300",
		height: "220",
		left: "325",
		top: "142",
		paddingTop: "80",
		opacity: "1"
	},1000, "easeInOutBack", function() {
		//
	}).animate({
		width: "250",
		height: "195",
		left: "350",
		top: "167",
		paddingTop: "55",
		opacity: "1"
	},2000, "linear", function() {
		//
	}).animate({
		width: "0",
		height: "0",
		left: "475",
		top: "256",
		paddingTop: "0",
		opacity: "0"
	},1000, "easeInOutBack", function() {
		//
	});
	
	$('.thank-you').delay(3000).animate({
		opacity: "0"
	},1000, "easeInOutBack", function() {
		//
	});
	
	$('#thank-you-fade').animate({
		opacity: "1"
	},1000, "linear", function() {
		//
	}).delay(2000).animate({
		opacity: "0"
	},1000, "linear", function() {
		//
	});
	
	$('#thank-you-progress-bar').delay(1000).animate({
		width: "950px"
	},2000, "linear", function() {
		//
	}).animate({
		opacity: "0"
	},1000, "linear", function() {
		//
	});
	
	$('.fadein img:gt(0)').hide();
	setInterval(function(){$('.fadein :first-child').fadeOut(1000).next('img').fadeIn(1000).end().appendTo('.fadein');}, 5000);
	
});
  
  });