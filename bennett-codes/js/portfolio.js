portfolioContainer = $('#portfolio-container');
portfolioItem = $('.portfolio-item');


function checkPortfolio() { "use strict";
if ($('#portfolio-container').hasClass('text-active')) {
    $('.portfolio-item').eq(0).delay(3250).css('opacity','0').animate({
        opacity:'1'
    },1000,'swing',function(){});
    $('.portfolio-item').eq(1).delay(500).css('opacity','0').animate({
        opacity:'1'
    },1000,'swing',function(){});
    $('.portfolio-item').eq(2).delay(750).css('opacity','0').animate({
        opacity:'1'
    },1000,'swing',function(){});
    $('.portfolio-item').eq(3).delay(1000).css('opacity','0').animate({
        opacity:'1'
    },1000,'swing',function(){});
    $('.portfolio-item').eq(4).delay(1250).css('opacity','0').animate({
        opacity:'1'
    },1000,'swing',function(){});
    $('.portfolio-item').eq(5).delay(1500).css('opacity','0').animate({
        opacity:'1'
    },1000,'swing',function(){});
};
};