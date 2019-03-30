var width = $('.slide').width(),
    sliderContainer = $('#slider-container'),
    slider = $('.slider'),
    slides = $('.slides'),
    slide = $('slide'),
    moveLeft = '-='+width,
    moveRight = '+='+width;

setInterval(function() {
 
    slide.animate({
        opacity:'0'
    },500,'swing',function(){});
    
},1000);