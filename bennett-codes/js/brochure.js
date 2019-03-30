var $initializer = function() {
        $activeSpread = $('.active'),
        $spread = $('.spread'),
        $firstSpread = $('.spread:first'),
        $lastSpread = $('.spread:last');
};

$initializer();
    
var page = {
    front:$('.spread').eq(0),
    inside1:$('.spread').eq(1),
    inside2:$('.spread').eq(2),
    inside3:$('.spread').eq(3),
    back:$('.spread').eq(4),
    image : {
        front:'url(images/work/print/cbu/financial-aid-brochure/front.jpg)',
        inside1:'url(images/work/print/cbu/financial-aid-brochure/inside1.jpg)',
        inside2:'url(images/work/print/cbu/financial-aid-brochure/inside2.jpg)',
        inside3:'url(images/work/print/cbu/financial-aid-brochure/inside3.jpg)',
        back:'url(images/work/print/cbu/financial-aid-brochure/back.jpg)',
    }
}

page.front.css('backgroundImage',page.image.front).addClass('active'),
page.inside1.css('backgroundImage',page.image.inside1).addClass('back'),
page.inside2.css('backgroundImage',page.image.inside2),
page.inside3.css('backgroundImage',page.image.inside3),
page.back.css('backgroundImage',page.image.back);


        var $rightClick = function() {
            
            $(document).on("contextmenu", '.spread', function(e){
            
            $activeSpread.stop(true, true);
            
            $firstSpread.stop(true, true);
            
            $lastSpread.stop(true, true);
            
            $spread.stop(true, true);
            
            $initializer();
            
            if ($firstSpread.hasClass('last')) {
                null;
            } else {
            $firstSpread
            .css('zIndex','902')
            .animate ({
                width:'80%',
                height:'80%',
                opacity:'0',
                top:'10%',
                left:'10%'
            },500,'easeInOutQuart',function(){
                $(this)
                .css('zIndex','900')
                .removeClass('active')
                .next($spread)
                .css('zIndex','902')
                    .removeClass('back')
                    .addClass('active')
                    .next($spread)
                        .css('zIndex','901')
                        .addClass('back')
                $firstSpread
                .insertAfter($lastSpread);
                
                $initializer();
            })
            };
            
        return false;
    });
            
        };

    var $leftClick = function() {

        $spread.click(function() {
            
            $activeSpread.stop(true, true);
            
            $firstSpread.stop(true, true);
            
            $lastSpread.stop(true, true);
            
            $spread.stop(true, true);
            
            $initializer();
            
            if ($spread.eq(0).hasClass('first')) { 
                null;
            } else {
            $lastSpread
            .css({'width':'120%','height':'120%','opacity':'0','top':'-10%','left':'-10%','zIndex':'910'})
            .animate ({
                width:'100%',
                height:'100%',
                opacity:'1',
                top:'0',
                left:'0'
            },500,'easeInOutQuart',function(){
            $(this)
            .css('zIndex','902')
            .insertBefore($firstSpread)
            .addClass('active')
            .next($spread)
                .css('zIndex','901')
                .removeClass('active')
                .addClass('back')
                .next($spread)
                    .css('zIndex','900')
                    .removeClass('back');
                
                $initializer();
            });
            }
    });
    };

$leftClick();

$rightClick();