

function logoBounceDown() {
    if (($(window).width() > 1560) && (!logoTransitionActive)) {
        logoTransitionActive = true;
        frontSvgDelay = 0;
        currentLogoTranslateY = logoTranslateYFirst;
        for (i = 0; i < svgObject.length; i++) {
            currentSvgObject = svgObject.eq(i);

            currentSvgObject.velocity('stop',false).velocity({
            translateY:logoTranslateYFirst + 'px'
        }, {
            duration:1000,
            easing:'easeOutCirc',
            delay:frontSvgDelay+=100,
            complete:function() {
                if (i === svgObject.length) {
                    logoTransitionActive = false;
                    console.log('successful.');
                }
            if (i === svgObject.length) {
                currentSvgObject.find('#spade-black').velocity({
                    fill:'#000000'
                }, {
                    duration:1000,
                    easing:'swing'
                });
                }
        }
        });
        logoClickRegion.velocity({
            translateY:logoTranslateYFirst + 'px',
            translateX:'-100vw'
        }, {
            duration:1000,
            easing:'easeOutCirc',
            complete:function() {
                $(this).velocity({
                    translateX:'0vw'
                }, {
                    duration:0
                });
            }
    });
    }
}
};