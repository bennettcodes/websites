var portfolioTile = $('.portfolio-tile');


//Tile Hover
$('.portfolio-tile').hover(function() {
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
},function() {
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
})