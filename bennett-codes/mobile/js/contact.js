contact.click(function() {
	window.location.hash = "contact";
	$.ajax({
	type: 'GET',
	url:'contact.php',
	success:function(contact) {
		$('#page-body').html(contact, function(){});
	},
	cache: false,
	complete: function(){

var contactIntroFirst = function() {

	//header fly-in
		$("#header").stop().delay(1000).animate({
					opacity:"1",
					marginTop:"-=100px"
					}, {
						duration: 2000,
						easing: "easeOutQuint",
						queue: true,
						complete: function(){}
					});
			
		//body fly-in		
	$("#content-body").stop().delay(1250).animate({
					opacity:"1",
					marginTop:"-=100px"
					}, {
						duration: 2000,
						easing: "easeOutQuint",
						queue: true,
						complete: function(){}
					});


};
		
var contactIntro = function() {

	//header fly-in
		$("#header").stop().animate({
					opacity:"1",
					marginTop:"-=100px"
					}, {
						duration: 2000,
						easing: "easeOutQuint",
						queue: true,
						complete: function(){}
					});
			
		//body fly-in		
	$("#content-body").stop().delay(250).animate({
					opacity:"1",
					marginTop:"-=100px"
					}, {
						duration: 2000,
						easing: "easeOutQuint",
						queue: true,
						complete: function(){}
					});


};


	if (!$(".navitem-text").hasClass("navitem-active")) {
		
		
			$(".navitem").eq(2).find(".navitem-text").addClass("navitem-active");	
			
			contactIntroFirst();
		
	} else 	if ($(".navitem-text").hasClass("navitem-active")) {
		
		$(".navitem-text").removeClass("navitem-active");
		
		$(".navitem").eq(2).find(".navitem-text").addClass("navitem-active");
		
		contactIntro();
		
		
		
		
window.contactForm();
			

	}
/*
$(".header-text").click(function() {
	
	
	var activeWidth = $(".header-text").eq(0).width();
	
	var activeWidthPlusFive = $(".header-text").eq(0).width() + 5;
	
	var inactiveWidth = $(".header-text").eq(1).width();
	
	if ($(this).hasClass("inactive")) {



		//header 1 move left
		$(this).prev(".header-text").eq(0).animate({
					opacity:"0",
					left:"-="+activeWidth
					}, {
						duration: 1000,
						easing: "easeInOutQuart",
						queue: true,
						complete: function(){$(this).removeClass("active").css({"width":"auto", "height":"80px", "opacity":"0", "left":"110px", "position":"relative", "float":"left"}).find("h1").css({"fontSize":"50px", "lineHeight":"160px"});$(this).animate({opacity:"0.5",left:"10px"},{duration:1000,easing:"easeInQuart",queue:false,complete:function(){$(this).addClass("inactive");}});}
					});
			
		//header 2 move left		
		$(this).removeClass("inactive").css({"width":"auto", "height":"80px", "opacity":"0.5", "left":"10px", "position":"relative", "float":"left"}).find("h1").css({"fontSize":"50px", "lineHeight":"160px"}).parent(".header-text").animate({
					opacity:"1",
					left:"-="+activeWidthPlusFive
					}, {
						duration: 1000,
						easing: "easeInOutQuart",
						queue: true,
						complete: function(){$(this).addClass("active").detach().insertBefore(".header-text").eq(0);$(this).css("left","5px");}
					});
			
		//header 2 h1 move left		
		$(this).find("h1").animate({
					fontSize:"100",
					lineHeight:"120"
					}, {
						duration: 1000,
						easing: "easeInOutQuart",
						queue: true,
						complete: function(){}
					});
			
		//paragraph 1 move left		
		$(this).parents().find(".text-active").animate({
					opacity:"0",
					right:"100%"
					}, {
						duration: 1250,
						easing: "easeOutQuart",
						queue: true,
						complete: function(){$(this).removeClass("text-active").addClass("text-inactive");$(this).css("right","-100%");}
					});
			
		//paragraph 2 move left		
		$(this).parents().find(".text-inactive").animate({
					opacity:"1",
					right:"0"
					}, {
						duration: 1250,
						easing: "easeOutQuart",
						queue: true,
						complete: function(){$(this).removeClass("text-inactive").addClass("text-active").detach().insertBefore(".content-text").eq(0);}
					});
					
					
	}
					
					
	
});
*/










		}});		
});
