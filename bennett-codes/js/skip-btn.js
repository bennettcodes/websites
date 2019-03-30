$("#skip-btn").click(function() {
	$("#profile-circle").finish().css({"bottom":"50%","left":"50%","marginBottom":"-200px","marginLeft":"-200px"});
});

$("#skip-btn").click(function() {
if ($(window).width() > 1024) {	
	$("#logo").finish().css({"left":"150px","opacity":"1","display":"inline"});
}
if ($(window).width() < 1024) {	
	$("#logo").finish().css({"left":"50px","opacity":"1","display":"inline"});
}
});

$("#skip-btn").click(function() {
	$("#subtext1").finish().css("display","none");
});

$("#skip-btn").click(function() {
	$("#subtext2").finish().css("display","none");
});

$("#skip-btn").click(function() {
	$("#subtext3").finish().css("display","none");
});

$("#skip-btn").click(function() {
	$("#name").finish().css("display","none");
});

$("#skip-btn").click(function() {
	$("#wrapper-overlay").finish().css("backgroundColor","#525252");
});

$("#skip-btn").click(function() {
	$(".navitem").finish().css({"top":"+=100","opacity":"1"});
});

$("#skip-btn").click(function() {
if ($(window).width() > 1024) {	
	$("#navitems").finish().css({"opacity":"1","display":"inline","right":"100px"});
}
if ($(window).width() < 1024) {	
	$("#navitems").finish().css({"opacity":"1","display":"inline","right":"0"});
}
});

$("#skip-btn").click(function() {
	$("#nav-bg").finish().css({"opacity":"1","display":"inline"});
});

$("#skip-btn").click(function() {
	$("#copyright").finish().css({"opacity":"1","display":"inline"});
});

$("#skip-btn").hover(function() {
	$(this).stop().animate({
		color:"#000000",
		backgroundColor:"rgba(255,255,255,0.8)"
	},"fast","linear",function(){});
},function() {
	$(this).stop().animate({
		color:"#ffffff",
		backgroundColor:"rgba(255,255,255,0.3)"
	},"fast","linear",function(){});
	
});

$("#skip-btn").click(function() {
	$(this).fadeOut(500);
});