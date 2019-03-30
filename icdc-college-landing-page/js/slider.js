  	if ($(window).width() > 700) {

      $('.slider').css({
        "width":"622",
        "height":"676",
        "position":"relative",
        "float":"left"
    });

    $('.slide').css({
      "opacity":"1",
      "position":"absolute",
      "top":"0",
      "left":"0"
    });

    var resetIndex = function() {
        $('.slide').eq(0).css({
      "zIndex":"3",
    });

    $('.slide').eq(1).css({
      "zIndex":"2",
    });

    $('.slide').eq(2).css({
      "zIndex":"1",
    });

    $('.slide').eq(3).css({
      "zIndex":"0",
    });
    };

resetIndex();

setInterval(function() {
    $('.slide').eq(0).css('opacity','1').animate({
        opacity:'0'
    },1000,'linear',function(){
    
             $(".slider img:first").insertAfter($(".slider img:last")).css('opacity','1');
             
             resetIndex();
    
    });
},5000);
  
  
  }