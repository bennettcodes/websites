window.aboutLoad = function() {


	window.location.hash = "about";
	$.ajax({
	type: 'GET',
	url:'about.html',
	success:function(about) {
		$('#content').html(about, function(){});
	},
	cache: false,
	complete: function(){
        $('#content-body').fadeIn(0);
    	$('#loading-container').stop(true, true).fadeOut(500);
        $("#content-body").stop(true,false).delay(250).css("marginTop","50px").animate({
            marginTop:"0",
            opacity:"1"
        },1000,"easeOutQuart",function(){});
        
		}});

}