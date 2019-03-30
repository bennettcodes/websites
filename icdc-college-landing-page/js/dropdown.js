  $(function() {
	
    var dropdown = $('#smart-form').find('input[type=select]');
	var dropdownFirst = $("#interest").find("option:selected");
	var dropdownFirstHover = $("#interest").find("option:hover");
	var value = $(dropdownFirst).val();
	var text = $( "#interest option:selected" ).text();
	dropdownFirst.css("color","#b1afaf");
	
});