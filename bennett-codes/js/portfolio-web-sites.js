$('.portfolio-item').click(function() {
	window.location.hash = "website";
	$.ajax({
	type: 'GET',
	url:'web-sites.html',
	success:function(tiles) {
		$('#portfolio-overlay').html(tiles, function(){});
	},
	cache: false,
	complete: function(){
        
    }});
    });