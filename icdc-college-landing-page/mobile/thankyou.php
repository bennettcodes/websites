<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<meta name="format-detection" content="telephone=no">
<script src="https://code.jquery.com/jquery-1.10.2.js"></script>
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
 
  ga('create', 'UA-45730625-1', 'auto');
  ga('send', 'pageview');
 
</script>
<title>ICDC College - Local Branding</title>
<!--<script type="text/javascript">

if (screen.width <= 699) {
document.location = "mobile";
}

</script>//-->
<link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700,800' rel='stylesheet' type='text/css'>
<link href='https://fonts.googleapis.com/css?family=Lora:400,700|PT+Serif' rel='stylesheet' type='text/css'>
<link rel="stylesheet" type="text/css" href="css/style.css" />
<link rel="stylesheet" type="text/css"  href="css/smart-forms.css">
<link rel="stylesheet" type="text/css"  href="css/font-awesome.min.css">
<script>
$(function() {
	
	$( ".story1" ).click(function() {
	$( "#commercial-player-bg" ).show().animate({
		opacity: "1"
	},500,"swing",function() {
	});
	});
	
	$( ".story2" ).click(function() {
	$( "#commercial-player-bg" ).show().animate({
		opacity: "1"
	},500,"swing",function() {
	});
	});
	
	$( ".story3" ).click(function() {
	$( "#commercial-player-bg" ).show().animate({
		opacity: "1"
	},500,"swing",function() {
	});
	});
	
	$( "#commercial-player-bg" ).click(function() {
	$( this ).fadeOut(500);
	});
	
	$( "#commercial-player-bg" ).click(function() {
	$( "#commercial-player" ).fadeOut(500);
	});
	
	$( "#commercial-player-bg" ).click(function() {
	$( "#story-player1" ).fadeOut(500);
	});
	
	$( "#commercial-player-bg" ).click(function() {
	$( "#story-player2" ).fadeOut(500);
	});
	
	$( "#commercial-player-bg" ).click(function() {
	$( "#story-player3" ).fadeOut(500);
	});
	
	$( "#commercial-thumb1" ).click(function() {
	$( "#commercial-player" ).animate({
		
	},500,"swing",function() {
		//
	}).show(500);
	});
	
	$( ".story1" ).click(function() {
	$( "#story-player1" ).animate({
		
	},500,"swing",function() {
		//
	}).show(500);
	});
	
	$( ".story2" ).click(function() {
	$( "#story-player2" ).animate({
		
	},500,"swing",function() {
		//
	}).show(500);
	});
	
	$( ".story3" ).click(function() {
	$( "#story-player3" ).animate({
		
	},500,"swing",function() {
		//
	}).show(500);
	});
	
	$( ".success-stories-thumb" ).hover(function() {
		$( this ).animate({
			marginTop: "-30px",
			height: "232px"
		}, 500, "easeOutCirc", function() {
		});
}, function() {
		$( this ).animate({
			marginTop: "0px",
			height: "202px"
		}, 500, "easeOutCirc", function() {
			$(this).stop(500);
		});
		});
	
	$( "img.thumb1" ).hover(function() {
		$( this ).fadeTo( 500, 0, function() {
		});
		
}, function() {
	
		$( this ).fadeTo( 500, 1, function() {
			$(this).stop(500);	
		});
		});
		
$('.cell').hover(function(){
  $(this).prev('div').addClass('topZ').animate({
    'width': '+=20px',
    'height': '+=20',
    'left': '-=10px',
    'top': '-=10px'
  },200);
  },function(){
  $(this).prev('div').animate({
    'width': '-=20px',
    'height': '-=20px',
    'left': '+=10px',
    'top': '+=10px'
  },200).removeClass('topZ');
});

(function($) {
    $.fn.clickToggle = function(func1, func2) {
        var funcs = [func1, func2];
        this.data('toggleclicked', 0);
        this.click(function() {
            var data = $(this).data();
            var tc = data.toggleclicked;
            $.proxy(funcs[tc], this)();
            data.toggleclicked = (tc + 1) % 2;
        });
        return this;
    };
}(jQuery));
		

	
	$('#thank-you-message').delay(250).animate({
		width: "300",
		height: "220",
		left: "325",
		top: "142",
		paddingTop: "80",
		opacity: "1"
	},1000, "easeInOutBack", function() {
		//
	}).animate({
		width: "250",
		height: "195",
		left: "350",
		top: "167",
		paddingTop: "55",
		opacity: "1"
	},2000, "linear", function() {
		//
	}).animate({
		width: "0",
		height: "0",
		left: "475",
		top: "256",
		paddingTop: "0",
		opacity: "0"
	},1000, "easeInOutBack", function() {
		//
	});
	
	$('.thank-you').delay(3000).animate({
		opacity: "0"
	},1000, "easeInOutBack", function() {
		//
	});
	
	$('#thank-you-fade').animate({
		opacity: "1"
	},1000, "linear", function() {
		//
	}).delay(2000).animate({
		opacity: "0"
	},1000, "linear", function() {
		//
	});
	
	$('#thank-you-progress-bar').delay(1000).animate({
		width: "950px"
	},2000, "linear", function() {
		//
	}).animate({
		opacity: "0"
	},1000, "linear", function() {
		//
	});
	
	$('.fadein img:gt(0)').hide();
	setInterval(function(){$('.fadein :first-child').fadeOut(1000).next('img').fadeIn(1000).end().appendTo('.fadein');}, 5000);
	
	
	
});
</script>
<script type="text/javascript" src="js/jquery-1.9.1.min.js"></script>
<script type="text/javascript" src="js/jquery.form.min.js"></script>
<script type="text/javascript" src="js/jquery.validate.min.js"></script>
<script type="text/javascript" src="js/additional-methods.min.js"></script>
<script type="text/javascript" src="js/smart-form.js"></script>
<script type="text/javascript" src="js/jquery.easing.1.3.js"></script>
<script type="text/javascript" src="js/jquery.easing.compatibility.js"></script>
<script src="//cdn.jsdelivr.net/jquery.shadow-animation/1/mainfile"></script>
<style>
body, p, a, h1, h2, h3, h4, h5, h6, .smart-forms button, .smart-forms {
	font-family: 'Open Sans', sans-serif !important;
}
#smart-form > div.form-footer > button {
	font-family: 'Open Sans', sans-serif !important;
	font-weight: 800 !important;
}
.smart-forms {
	text-align: left;
!important;
	color: #000000 !important;
}

#phone-number-fixed { display:none; }

#smart-form > div.form-body > div:nth-child(6) > div > label {
	padding-right: 0 !important;
}
#general-info-row3-activitiesBullets-row2-col1 > ul, #general-info-row3-activitiesBullets-row2-col2 > ul, #general-info-row4-moreInfoBullets-row1-col1 > ul {
	padding-left: 10px !important;
}
#general-info-row4-moreInfoBullets-row1-col1 > ul > li:nth-child(1), #general-info-row3-activitiesBullets-row2-col1 > ul > li:nth-child(1), #general-info-row3-activitiesBullets-row2-col1 > ul > li:nth-child(2), #general-info-row3-activitiesBullets-row2-col2 > ul > li:nth-child(1), #general-info-row3-activitiesBullets-row2-col2 > ul > li:nth-child(2) {
	padding-bottom: 24px !important;
}
#general-info-row4-moreInfoBullets-row1-col1 > ul {
	margin: 0 !important;
}
#fields-bullets > ul {
	display: block;
	list-style-type: disc;
	-webkit-margin-before: 1em;
	-webkit-margin-after: 1em;
	-webkit-margin-start: 0px;
	-webkit-margin-end: 0px;
	-webkit-padding-start: 93px;
}
.fadein img { position:absolute; left:0; top:0; height:auto; }
#firstname-error,
#lastname-error,
#emailaddress-error,
#telephone-error,
#zip-error,
#signature-error { display:none !important; }
#firstname-error, #lastname-error, #emailaddress-error, #telephone-error, #zip-error, #signature-error {
	display: none !important;
}
    #interest {width:100% !important;
	font-size:5vw !important;
	font-weight:300 !important;
	height:12vw !important;
    margin: 0 !important;
    display: inline-block !important;
	background-image:url(images/down-arrow-300px.gif) !important;
	background-size:5%;
	background-color:#efefef !important;
	color:#817f81 !important;
	background-position:95% !important;
	background-repeat:no-repeat !important;
    -webkit-appearance:none !important;
    -moz-appearance:none !important;
    appearance:none !important;
    cursor:pointer !important;
	text-indent: 5% !important; }
	
	input { width:100%; height:12vw !important; font-size:5vw !important; font-weight:300 !important; text-indent:5% !important; }
	button, .smart-forms .form-footer .button { width:100%; height:24vw !important; font-size:12vw !important; font-weight:300 !important; text-align:center !important; background-size:cover !important; background-position:right !important; }
	
</style>
</head>

<body>
<div id="phone-number-fixed">CALL NOW! <span style="font-weight:800; color:#ffdb31;">888.265.8776</span>
</div>
<div id="top-img"><img src="images/romeo-bg2.jpg" />
</div>
<div id="top-img-blank-space">
</div>
<div id="container">
<div id="container-body">
  <div id="header">
        <div id="header-logo"><img src="images/icdc-logo-1000px-3.png" /></div>
      <div id="header-logo-subtext">CAMPUS and ONLINE CAREER COLLEGE<br>
        <div style="font-weight:400; font-size:5vw; color:#ffffff; margin-top:30px; line-height:5vw;">Providing Career Training for Over 20 Years</div></div>
  </div>
  <div id="content-middle-contact">
        <div id="content-middle-contact-form" style="width:100%;">
          <div id="content-middle-contact-form-header">Start<br>
            <span style="font-weight:200; font-size:25vw; text-align:left; letter-spacing:6px; text-transform:uppercase; font-style:normal; line-height:1em;">Today</span></div>
          <div class="smart-forms smart-container wrap-2"> 
            <!-- end .form-header section --> 
            
          </div>
        </div>
        <div id="content-middle-contact-form">
          <div class="smart-forms smart-container wrap-2"> 
            <!-- end .form-header section -->
            
            <form method="post" action="php/smartprocess.php" id="smart-form">
              <div class="form-body">
                <div class="section">
                  <div class="result"></div>
                  <label class="field prepend-icon">
                  <select id="interest" name="interest" size="1" class="gui-input">
            <option value="default" selected="true" disabled="disabled">Select Area of Interest*</option>
            <option value="Alcohol and Drug Counseling">Alcohol and Drug Counseling</option>
            <option value="Business Management and Accounting">Business Management and Accounting</option>
            <option value="Computerized Accounting">Computerized Accounting</option>
            <option value="Healthcare Management">Healthcare Management</option>
            <option value="Homeland Security and Investigation">Homeland Security and Investigation</option>
            <option value="Medical Assistant">Medical Assistant</option>
            <option value="Medical Office Management">Medical Office Management</option>
            <option value="Physical Therapy Aide">Physical Therapy Aide</option>
            <option value="Web Developer">Web Developer</option>
            <option value="Paralegal">Paralegal</option>
          </select>
                  </label>
                </div>
                <!-- end section -->
                
                <div class="section">
                  <div class="result"></div>
                  <label class="field prepend-icon">
                    <input type="text" name="firstname" id="firstname" class="gui-input" placeholder="First Name*">
                  </label>
                </div>
                <!-- end section -->
                
                <div class="section">
                  <label class="field prepend-icon">
                    <input type="text" name="lastname" id="lastname" class="gui-input" placeholder="Last Name*">
                  </label>
                </div>
                <!-- end section -->
                
                <div class="section">
                  <label class="field prepend-icon">
                    <input type="email" name="emailaddress" id="emailaddress" class="gui-input" placeholder="Email Address*">
                  </label>
                </div>
                <!-- end section -->
                
                <div class="section">
                  <label class="field prepend-icon">
                    <input type="text" name="telephone" id="telephone" class="gui-input" placeholder="Phone*">
                  </label>
                </div>
                <div class="section">
                  <label class="field prepend-icon">
                    <input type="text" name="zip" id="zip" class="gui-input" placeholder="Zip*">
                  </label>
                </div>
                <div class="section" style="float:left;">
                  <div class="option-group field">
                    <label class="option">
                    <input type="checkbox" name="signature" value="signature" id="signature" style="width:10%;">
                    <span class="checkbox" style="float:left;"></span>
                    <div style="width:85%; padding-left:2%; font-size:3vw; color:#000000; text-align:left; float:right;">By checking this box, I am providing my electronic signature and I am authorizing ICDC College to call me about its programs at the phone number above, including if it is a mobile number. I understand that consent is not a condition of receiving information or services. Message and data rates may apply.</div>
                    </label>
                  </div>
                  <!-- end .option-group section --> 
                </div>
                <!-- end section --> 
                
              </div>
              <!-- end .form-body section --><br>
              <div class="form-footer">
                <button type="submit" data-btntext-sending="Sending..." class="button btn-primary" style=" border-color:#000000;"><span style="font-weight:800; text-shadow:4px 4px 5px rgba(0,0,0,0.2);">Submit</span></button>
                <div style="margin-top:38px; font-size:4.1vw;">*Require information. For more information, please visit ICDC College’s Privacy Policy.</div>
              </div>
              <!-- end .form-footer section -->
            </form>
          </div>
        </div>
      </div>
      <div id="general">
      <div id="why-choose">
        <div id="why-choose-header1">Why Choose</div>
        <div id="why-choose-header2">ICDC College?</div>
        <div id="cells">
        <div id="cell-first">
        <div id="cell-text" style="background-image:url(images/national-cell1-bg.png); background-size:13%;">
        <h1><span style="color:#ffdb31;">Online<br>
</span> Learning <span style="color:#ffdb31;">24/7</span></h1><h2>At Anytime, From Anywhere</h2>
        </div>
        </div>
        <div id="cell-more" style="background-color:#efefef;">
        <div id="cell-text" style="background-image:url(images/cell2-bg.png);">
        <h2>Government</h2><h1>Financial AId</h1><br><h6>if qualified</h6>
        </div>
        </div>
        <div id="cell-more">
        <div id="cell-text" style="background-image:url(images/cell3-bg.png);">
        <h2>Job</h2> <h1>Placement</h1> <h2>Assistance</h2>
        </div>
        </div>
        <div id="cell-more">
        <div id="cell-text" style="background-image:url(images/cell4-bg.png); background-color:#efefef;">
        <h2>Get Job-Ready In A</h2> <h1>Matter of Months</h1>
        </div>
        </div>
        <div id="cell-more">
        <div id="cell-text" style="background-image:url(images/cell5-bg.png);">
        <h1>Awards</h1> <h2>For Successful Grads</h2><br><h6>if qualified</h6>
        </div>
        </div>
        <div id="cell-more">
        <div id="cell-text" style="background-image:url(images/national-cell6-bg.png); background-color:#efefef; background-size:15%;">
        <h1 style=" color:#e92b36;">Laptop</h1><h2 style=" color:#e92b36;">Computer &amp; Books/E-Books<br>
Are Included</h2>
        </div>
        </div>
        </div>
        </div>
        <div id="commercial-mobile">
        <div id="commercial-mobile-header"><span style="font-size:7vw; line-height:1.5em;">Watch the <span style="color:#000000;">ICDC College</span> commercial featuring</span><br>
<span style="font-size:18vw;; color:#000000; font-weight:800; line-height:1em;">Romeo<span style="font-weight:300; color:#ffffff;">&amp;</span><br>Master P</span>
        </div>
        <div id="commercial-mobile-video">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/LAPW9_HGbbM" frameborder="0" allowfullscreen></iframe>
        </div>
        </div>
        <div id="more-info">
        <div id="fields">
        <div id="fields-header"><div style="line-height:1em; font-size:16vw;">Jump-Start</div><div style="font-size:7vw; color:#000000; line-height:1em; ">Your New Career Now, <span style="color:#e92b36;">Today!</span></div>
        </div>
        <div id="fields-bullets">
            <ul>
              <li><span style="color:#000000;">Healthcare Management</span></li>
              <li><span style="color:#000000;">Alcohol and Drug Testing</span></li>
              <li><span style="color:#000000;">Homeland Security and Investigation</span></li>
              <li><span style="color:#000000;">Paralegal</span></li>
              <li><span style="color:#000000;">Business Management and Accounting</span></li>
            </ul>
        </div>
        </div>
        </div>
        <div id="laptop-burst">
          <div id="laptop-burst-text">
            Get A Brand-New<br>
            <span style="font-weight:800; font-size:12vw; line-height:1em; color:#e92b36; text-transform:uppercase;">Laptop<span style="font-weight:300; color:#000000;">&amp;<br>
</span>Books<span style="font-weight:300; color:#000000;">/</span><br>
E-Books</span><br>
<div style="font-size:2vw; text-transform:none; line-height:1em !important;">For online students only. At no additional cost.
Offer terminable at any time. Restrictions apply.</div></div>
        </div>
        <div id="success">
        <div id="stories">
        <div id="stories-header"><div style="font-size:7vw; line-height:1em; color:#ffffff;">Our Grads'</div><div style="line-height:1em; font-size:16vw; color:#ffdb31;">Success</div><div style="font-size:7vw; color:#ffffff; line-height:1em; ">Stories</div>
        </div>
        <div id="stories-videos">
        <div id="story"><iframe width="560" height="315" src="https://www.youtube.com/embed/heQMRHJ0bGc" frameborder="0" allowfullscreen></iframe>
        <div id="story-name">CINDY MACIAS</div>
        </div>
        <div id="story"><iframe width="560" height="315" src="https://www.youtube.com/embed/1IKp0RI19Vc" frameborder="0" allowfullscreen></iframe>
        <div id="story-name">WILLIAM PERALTA</div>
        </div>
        <div id="story"><iframe width="560" height="315" src="https://www.youtube.com/embed/lYO3HGPX53o" frameborder="0" allowfullscreen></iframe>
        <div id="story-name">LILY ORTEGA</div>
        </div>
        </div>
        <div id="first-step">
        <div id="first-step-header"><div style="color:#ffdb31; font-size:7vw;">Change Your Life</div><div style="color:#ffffff; font-size:23vw;">Today</div><div style="color:#ffdb31; font-size:7vw;">With A New Career!</div></div>
        <div id="first-step-phone"><div style="color:#ffffff; font-weight:800;">CALL NOW!<div style="color:#ffdb31; font-size:11vw; font-weight:800;">(888) 265-8776</div></div></div>
        </div>
        </div>
        </div>
        <div id="accreditations">
        <img src="images/accreditations.jpg" />
        </div>
        <div id="footer">
  <div id="footer-content">*For online students only. At no additional cost. Offer terminable at any time. Restrictions apply.<br><br>

Master P and Romeo are spokespeople for ICDC College. Accredited by the Accrediting Commission of Career Schools and Colleges, a recognized accrediting agency by the U.S. Dept. of Education. For more information about our graduation rates, the median debt of students who completed the programs, and other important information, please visit our website icdccollege.edu/fields-of-study. Certain restrictions may apply. Programs may vary by campus.<br><br>

© 2015 ICDC College. All rights reserved.</div>
</div>
        </div>
</div>
</div>
</body>

<script>$(function() {
	
	var dropdown = $('#smart-form').find('input[type=select]');
	var dropdownFirst = $("#interest").find("option:selected");
	var dropdownFirstHover = $("#interest").find("option:hover");
	var value = $(dropdownFirst).val();
	var text = $( "#interest option:selected" ).text();
	dropdownFirst.css("color","#b1afaf");
	
});
</script>
<script>
$(function() {
	
	$(window).load(function()
{
	$('#phone-number-fixed').delay(2000).fadeIn(1000,"linear",function() {
	});
	
	$('#header-logo-subtext').delay(1000).animate({
		bottom: "-=30",
		opacity: "1"
	},2000,"easeOutCirc",function() {
		
	});
	
	//Press the Map Open Button
	$('#map-img')
	
	.click(function(){
  $('#map')
  		.delay(500)
  		.animate({height:"800"},500,"easeOutExpo",function(){});
  })
  	.click(function(){
  $(this)
  		.fadeOut(500,"linear");
  
  })
  	.click(function(){
  $('#map-close-btn')
  		.delay(500)
  		.fadeIn(500,"linear");
  
  })
  	.click(function(){
  $('#gmap')
  		.delay(500)
  		.animate({top:"0"},500,"easeOutExpo",function(){});
  
  });
	
	//Press the Map Close Button	
$('#map-close-btn')

	.click(function(){
  $('#map')
		.animate({height:"400"},500,"easeOutExpo",function(){});
  })
  	.click(function(){
  $(this)
  		.fadeOut(500,"linear");  
	})
  	.click(function(){
  $('#map-img')
  		.fadeIn(500,"linear");
	})
  	.click(function(){
  $('#gmap')
  		.animate({top:"-200"},500,"easeOutExpo",function(){});
	});
	
		//Header Logo Fly-In Animation
	$('#header-logo').delay(1000).animate({
		top: "-=15%",
		opacity: "1"
	},2000,"easeOutCirc",function() {
		
	});
	
	$('#header').delay(1000).animate({
		boxShadow: "0px -110px 190px rgba(0,0,0,0.75)"
	},3000,"linear",function() {
		
	});
	
	$('#top-img').animate({
		opacity: "1"
	},1000,"linear",function() {
		
	});

	alert("Thank you! We will get back to you shortly.");
	});
	
});


</script>
</html>
