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