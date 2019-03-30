function gradientRollover() {
    
messageContent.mouseover(function() {
    messageBackground.velocity({
            opacity:'0.1' 
    }, {
            duration:250,
            easing:'swing',
            queue:false
    });
});
    
messageContent.mouseout(function() {
    messageBackground.velocity({
            opacity:'0.3'
    }, {
            duration:250,
            easing:'swing',
            queue:false
    });
});

};

$(window).load(function() {
    
    loadingText.velocity({
        opacity:'0'
    }, {
        duration:1000,
        complete:function() {

                vid0.hide(0);
            
            loading.velocity({
                opacity:'0'
            }, {
                duration:1000,
                complete:function() {
                    $(this).fadeOut(0);
                }
            });
        }
    });
    
    /*gradientRollover();*/
    
   $('.container').velocity({
    opacity:'1'
}, {
    duration:1000
});
    
});