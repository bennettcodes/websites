window.contactLoad = function() {


	window.location.hash = "about";
	$.ajax({
	type: 'GET',
	url:'contact.php',
	success:function(contact) {
		$('#content').html(contact, function(){});
	},
	cache: false,
	complete: function(){
        $('#content-body').fadeIn(0);
    	$('#loading-container').stop(true, true).fadeOut(500);
		$('#download-resume').stop(true,true).delay(500).fadeIn(1000);
   		$('#copyright').stop(true,true).delay(1000).fadeIn(1000);
        $("#content-body").stop(true,false).delay(250).css("marginTop","50px").animate({
            marginTop:"0",
            opacity:"1"
        },1000,"easeOutQuart",function(){});
        
		}});

}