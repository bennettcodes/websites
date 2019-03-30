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
<title>ICDC College - National Branding</title>
<!--<script type="text/javascript">
if (screen.width <= 699) {
document.location = "mobile";
}
</script> -->
<link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700,800' rel='stylesheet' type='text/css'>
<link href='https://fonts.googleapis.com/css?family=Lora:400,700|PT+Serif' rel='stylesheet' type='text/css'>
<link rel="stylesheet" type="text/css" href="css/style.css" />
<link rel="stylesheet" type="text/css"  href="css/smart-forms.css">
<link rel="stylesheet" type="text/css"  href="css/font-awesome.min.css">
<script type="text/javascript" src="js/shadow-animate.js"></script>
<script>
$(function() {
	
	$(window).bind('load', function()
{
	
	$("span.question").hover(function() {
		$("#disclaimer-popup").css("display","inline");
	}, function() {
		$("#disclaimer-popup").css("display","none");
	});
	
	$( "#commercial-thumb1" ).hover(function() {
	$(this).animate({
		opacity: "0",
		width: "508px",
		height: "287px",
		left: "-25px",
		top: "-14px"
	},500,"swing",function() {
	});
	}, function() {
	$(this).animate({
		opacity: "1",
		width: "458px",
		height: "259px",
		left: "0px",
		top: "0px"
	},500,"swing",function() {
		
	});
	});
	
	$( "#commercial-thumb1" ).hover(function() {
	$( '#commercial-thumb-red-glow' ).animate({
		opacity: "1",
		width: "508px",
		height: "287px",
		left: "-25px",
		top: "-14px"
	},500,"swing",function() {
	});
	}, function() {
	$( '#commercial-thumb-red-glow' ).animate({
		opacity: "0",
		width: "458px",
		height: "259px",
		left: "0px",
		top: "0px"
	},500,"swing",function() {
		
	});
	});
	
	$( "#commercial-thumb1" ).hover(function() {
	$( "#commercial-thumb2" ).animate({
		width: "508px",
		height: "287px",
		left: "-25px",
		top: "-14px"
	},500,"swing",function() {
	});
	}, function() {
	$( "#commercial-thumb2" ).animate({
		width: "458px",
		height: "259px",
		left: "0px",
		top: "0px"
	},500,"swing",function() {
		
	});
	});
	
	$( "#commercial-thumb-container" ).click(function() {
	$( "#commercial-player-bg" ).show().animate({
		opacity: "1"
	},500,"swing",function() {
	});
	});
	
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
	
	$( "#commercial-thumb1" ).click(function() {
	$( this ).animate({
		width: "458px",
		height: "259px",
		left: "0px",
		top: "0px"
	},500,"swing",function() {
	});
	});
	
	$( "#commercial-thumb1" ).click(function() {
	$( "#commercial-thumb2" ).animate({
		width: "458px",
		height: "259px",
		left: "0px",
		top: "0px"
	},500,"swing",function() {
	});
	});
	
	$( "#commercial-thumb1" ).click(function() {
	$( "#commercial-thumb-red-glow" ).animate({
		width: "458px",
		height: "259px",
		left: "0px",
		top: "0px",
		opacity: "0"
	},500,"swing",function() {
	});
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
		
$('#map-img2').click(function(){
  $('#location').animate({
    'width': '948px'
  },1000, "easeInOutCubic", function() {
  });
  });
		
$('#map-img2').click(function(){
  $('#gmap').animate({
    'margin-left': '0'
  },1000, "easeInOutCubic", function() {
  });
  });
		
$( "#map-img2" ).click(function() {
  $( "#map-close" ).fadeTo( 500 , 1, function() {
    $("#map-close").css("display","inline");
  });
});
		
$( "#map-img2" ).click(function() {
  $( this ).fadeTo( 500 , 0, function() {
    $(this).css("display","none");
  });
});
		
$( "#map-img2" ).click(function() {
  $( "#fields" ).fadeTo( 1000 , 0.5, function() {
    //
  });
});
		
$('#map-img2').click(function(){
  $('#fields-header').animate({
    'margin-left': '50px'
  },1000, "easeInOutCubic", function() {
  });
  });
		
$('#map-img2').click(function(){
  $('#fields-bullets').animate({
    'margin-left': '50px'
  },1000, "easeInOutCubic", function() {
  });
  });
	
$('#map-close').click(function(){
  $('#location').animate({
    'width': '343px'
  },1000, "easeInOutCubic", function() {
  });
  });
		
$('#map-close').click(function(){
  $('#gmap').animate({
    'margin-left': '-50px'
  },1000, "easeInOutCubic", function(){
  });
  });
		
$( "#map-close" ).click(function() {
  $( "#map-img2" ).fadeTo( 500 , 1, function() {
    $("#map-img2").css("display","inline");
  });
});
		
$( "#map-close" ).click(function() {
  $( this ).fadeTo( 500 , 0, function() {
    $(this).css("display","none");
  });
});
		
$( "#map-close" ).click(function() {
  $( "#fields" ).fadeTo( 1000 , 1, function() {
	  //
  });
});
		
$('#map-close').click(function(){
  $('#fields-header').animate({
    'margin-left': '0px'
  },1000, "easeInOutCubic", function() {
  });
  });
		
$('#map-close').click(function(){
  $('#fields-bullets').animate({
    'margin-left': '0px'
  },1000, "easeInOutCubic", function() {
  });
  });
	
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
		$(this).hide(1000);
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
	
	
});
</script>
<script type="text/javascript" src="js/jquery-1.9.1.min.js"></script>
<script type="text/javascript" src="js/jquery.form.min.js"></script>
<script type="text/javascript" src="js/jquery.validate.min.js"></script>
<script type="text/javascript" src="js/additional-methods.min.js"></script>
<script type="text/javascript" src="js/smart-form.js"></script>
<script type="text/javascript" src="js/jquery.easing.1.3.js"></script>
<script type="text/javascript" src="js/jquery.easing.compatibility.js"></script>
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
.fadein img {
	position: absolute;
	left: 0;
	top: 0;
	height: auto;
}
#firstname-error, #lastname-error, #emailaddress-error, #telephone-error, #zip-error, #signature-error {
	display: none !important;
}
    #interest {padding:13px !important;
	height:inherit !important;
    margin: 0 !important;
    display: inline-block !important;
	background-image:url(images/down-arrow-gray2.png) !important;
	background-color:#efefef !important;
	color:#817f81 !important;
	background-position:97% !important;
	background-repeat:no-repeat !important;
    -webkit-appearance:none !important;
    -moz-appearance:none !important;
    appearance:none !important;
    cursor:pointer !important; }
	
	span.question {
  cursor: pointer !important;
  display: inline-block !important;
  width: 16px !important;
  height: 16px !important;
  background-color: #e92b36 !important;
  line-height: 16px !important;
  color: White !important;
  font-size: 13px !important;
  font-weight: bold !important;
  border-radius: 8px !important;
  text-align: center !important;
  position: relative !important;
}
span.question:hover { background-color: #7A0B1B !important; }
div.tooltip {
  background-color: #3D6199 !important;
  color: White !important;
  position: absolute !important;
  left: 25px !important;
  top: -25px !important;
  z-index: 1000000 !important;
  padding:50px;
  border-radius: 5px !important;
}
div.tooltip:before {
  border-color: transparent #3D6199 transparent transparent !important;
  border-right: 6px solid #3D6199 !important;
  border-style: solid !important;
  border-width: 6px 6px 6px 0px !important;
  content: "" !important;
  display: block !important;
  height: 0 !important;
  width: 0 !important;
  line-height: 0 !important;
  position: absolute !important;
  top: 0 !important;
  left: -6px !important;
}
div.tooltip p {
  margin: 10px !important;
  color: White !important;
}
#disclaimer-popup { width:80%; display:none; position:absolute; top:219px; left:5%; padding:5%; background-color:rgba(0,0,0,0.6); color:#ffffff; font-size:12px; z-index:9999; }
#disclaimer-popup:before {
  border-color: rgba(0,0,0,0.6) transparent transparent transparent !important;
  border-style: solid !important;
  border-width: 7px !important;
  content: "" !important;
  height: 0 !important;
  z-index:9999;
  width: 0 !important;
  line-height: 0 !important;
  position: absolute !important;
  top: 151px !important;
  left: 62px !important;
}
</style>
</head>

<body>
<div id="outer-container">
<div id="commercial-player-bg"></div>
<div id="commercial-player"><iframe width="950" height="534" src="https://www.youtube.com/embed/LAPW9_HGbbM" frameborder="0" allowfullscreen></iframe></div>
<div id="story-player1"><iframe width="950" height="534" src="https://www.youtube.com/embed/heQMRHJ0bGc" frameborder="0" allowfullscreen></iframe></div>
<div id="story-player2"><iframe width="950" height="534" src="https://www.youtube.com/embed/1IKp0RI19Vc" frameborder="0" allowfullscreen></iframe></div>
<div id="story-player3"><iframe width="950" height="534" src="https://www.youtube.com/embed/lYO3HGPX53o?rel=0" frameborder="0" allowfullscreen></iframe></div>
<div id="container">
  <div id="header">
    <div id="header-main">
      <div id="header-left">
        <div id="header-logo"><img src="images/icdc-logo.png" /></div>
        <span style="font-weight:600;">ONLINE AND CAMPUS</span> CAREER COLLEGE<br>
        <span style="font-weight:300;">Providing Career Training for Over 20 Years</span></div>
      <div id="header-right"><span style="font-size:31px; color:#ffffff; line-height:34px;"><span style="font-weight:300; font-size:22px;">DON'T WAIT, </span>CALL NOW!</span><br>
        888.265.8776</div>
    </div>
  </div>
  <div id="content">
    <div id="content-left"></div>
    <div id="content-middle">
    <div id="thank-you-progress-bar"></div>
    <div id="thank-you-fade"></div>
    <div id="thank-you-message"><span class="thank-you" style="font-size:48px; line-height:1em; font-weight:800; color:#ffdb31; text-transform:uppercase;">Thank<br>
you!</span><br>
<span class="thank-you" style="color:#ffffff; line-height:1em;">We will get back to you shortly.</span>
    </div>
      <div id="content-middle-main"> 
        <!-- <div class="fadein">
      <img src="images/slide1-text.jpg" />
      <img src="images/slide2-text.jpg" />
      <img src="images/slide3-text.jpg" />
      <img src="images/slide4-text.jpg" />
      </div>
        <!-- <div id="text-lines">
          <div id="text-line1">Get</div>
          <div id="text-line2">Job-Ready</div>
          <div id="text-line3"><span style="text-transform:lowercase;">i</span>n a matter of</div>
          <div id="text-line4">months!</div>
        </div> --> 
      </div>
      <div id="content-middle-contact">
        
                    <div id="disclaimer-popup">By checking this box, I am providing my electronic signature and I am authorizing ICDC College to call me about its programs at the phone number above, including if it is a mobile number. I understand that consent is not a condition of receiving information or services. Message and data rates may apply.</div>
        <div id="content-middle-contact-form" style="width:100%;">
          <div id="content-middle-contact-form-header"> <span style="font-weight:200; font-size:34px; text-align:left; letter-spacing:6px; text-transform:uppercase; font-style:normal; line-height:63px;">Start</span><br>
            Today</div>
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
                
                <div class="section" style="width:111px; float:left;">
                  <label class="field prepend-icon" style="width:100%;">
                    <input type="text" name="telephone" id="telephone" class="gui-input" placeholder="Phone*" style="width:111px; display:inline; float:left;">
                  </label>
                </div>
                <div class="section" style="width:111px; margin-left:10px; float:left;">
                  <label class="field prepend-icon" style="width:100%;">
                    <input type="text" name="zip" id="zip" class="gui-input" placeholder="Zip*" style="width:111px; display:inline; float:left;">
                  </label>
                </div>
                <div class="section" style="float:left;">
                  <div class="option-group field" style="margin-top:0 !important; margin-bottom: 0 !important; padding-right:0 !important; width:232px; position:relative !important;">
                    <label class="option" style="margin:0; width:100% padding-right:0 !important;">
                    <input type="checkbox" name="signature" value="signature" id="signature" style="width:10%;">
                    <span class="checkbox" style="float:left;"></span>
                    <div style="font-size:11px; color:#000000; text-align:left; position:relative;">
                    <div style="position:absolute; top:6px; left:29px;">
                    <span class="question">?</span></p>
                    </div>
                    <!-- By checking this box, I am providing my electronic signature and I am authorizing ICDC College to call me about its programs at the phone number above, including if it is a mobile number. I understand that consent is not a condition of receiving information or services. Message and data rates may apply. --></div>
                    </label>
                  </div>
                  <!-- end .option-group section --> 
                </div>
                <!-- end section --> 
                
              </div>
              <!-- end .form-body section --><br>
              <div class="form-footer" style="margin-bottom:38px; font-size:11px; float:left;">
                <button type="submit" data-btntext-sending="Sending..." class="button btn-primary" style=" border-color:#000000;"><span style="font-weight:800; text-shadow:4px 4px 5px rgba(0,0,0,0.2);">Submit</span></button>
                <div style="margin:10px 0 30px 0;">*Require information. For more information, please visit ICDC College’s Privacy Policy.</div>
              </div>
              <!-- end .form-footer section -->
            </form>
          </div>
        </div>
      </div>
    </div>
    <div id="content-right"></div>
  </div>
  <div id="general-container">
    <div id="general">
      <div id="why-choose">
        <div id="why-choose-header1">Why Choose</div>
        <div id="why-choose-header2">ICDC College?</div>
        <div id="why-choose-table-container">
          <div id="why-choose-table">
            <div id="why-choose-table-cell1"> </div>
            <div id="why-choose-table-cell1-text-container" class="cell">
              <div id="why-choose-table-cell1-text"><span style="color:#ffdb31;">Online</span><br>
                Learning<br>
                24/7<br>
                <div style="font-size:25px; font-weight:400; position:absolute; top:143px; width: 406px; left:0;">At Anytime, From Anywhere</div>
              </div>
            </div>
            <div id="why-choose-table-cell2"> </div>
            <div id="why-choose-table-cell2-text-container" class="cell">
              <div id="why-choose-table-cell2-text"><span style="font-size:25px; font-weight:400; line-height:37px; text-shadow:1px 1px 10px #ffffff;">Government</span><br>
                Financial Aid<br>
                <span style="font-weight:400; font-size:18px; font-style:italic; text-transform:lowercase;">if qualified</span></div>
            </div>
            <div id="why-choose-table-cell3"> </div>
            <div id="why-choose-table-cell3-text-container" class="cell">
              <div id="why-choose-table-cell3-text"><span style="font-size:25px; font-weight:400; line-height:25px;">Job<br>
                Placement Assistance</span></div>
            </div>
            <div id="why-choose-table-cell4"> </div>
            <div id="why-choose-table-cell4-text-container" class="cell">
              <div id="why-choose-table-cell4-text"><span style="font-size:25px; font-weight:400; line-height:25px;">Get Job-<br>
                </span><span style="font-size:25px; font-weight:400; line-height:35px; margin-bottom:12px;"> Ready In A</span><br>
                Matter of Months</div>
            </div>
            <div id="why-choose-table-cell5"> </div>
            <div id="why-choose-table-cell5-text-container" class="cell">
              <div id="why-choose-table-cell5-text"><span style="line-height:37px;">Awards</span><br>
                <span style="font-size:25px; font-weight:400; line-height:25px;">For<br>
                Successful Grads</span><br>
                <span style="font-weight:400; font-size:18px; font-style:italic; text-transform:lowercase;">if qualified</span></div>
            </div>
            <div id="why-choose-table-cell6"> </div>
            <div id="why-choose-table-cell6-text-container" class="cell">
              <div id="why-choose-table-cell6-text">
                <div style="font-size:25px; font-weight:400; line-height:25px; float:left;"><span style="font-size:60px; line-height:50px; font-weight:800;">Laptop</span><br>
                  Computer & Books/E-Books Are Included</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="commercial">
        <div id="commercial-container">
          <div id="commercial-thumb-container">
            <div id="commercial-thumb1"></div>
            <div id="commercial-thumb2"></div>
            <div id="commercial-thumb-red-glow"></div>
          </div>
          <div id="commercial-header">Watch the <span style="color:#e92b36;">ICDC College</span><br>
Commercial Featuring<br><span style="font-size:60px; color:#e92b36; font-weight:800; line-height:50px;">Romeo<span style="font-weight:300; color:#000000;">&amp;</span><br>Master P</span>
          </div>
        </div>
      </div>
      <div id="more-info">
        <div id="fields">
          <div id="fields-header"><span style="color:#e92b36; font-size:60px; line-height:50px; font-weight:300;">Jump-start</span><br>
Your New Career<br>
Now, <span style="color:#e92b36;">Today!</span></div>
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
        <div id="laptop-burst">
          <div id="laptop-burst-text">
            Get A Brand-New<br>
            <span style="font-weight:800; font-size:60px; line-height:50px; color:#e92b36; text-transform:uppercase;">Laptop<span style="font-weight:300; color:#000000;">&amp;<br>
</span>Books<span style="font-weight:300; color:#000000;">/</span><br>
E-Books</span><br>
<div style="font-size:12px; text-transform:none; line-height:15px !important;">For online students only. At no additional cost.
Offer terminable at any time. Restrictions apply.</div></div>
        </div>
      </div>
      <div id="success-stories-container">
        <div id="success-stories">
          <div id="success-stories-header">Our Grads'<br>
            <span style="color:#ffdb31; font-size:60px;">Success</span> Stories</div>
          <div id="success-stories-thumbs">
            <div class="success-stories-thumb story1" id="success-stories-thumb"><img class="thumb1" src="images/cindy1.jpg" /><img class="thumb2" src="images/cindy2.jpg" />
              <div id="success-stories-thumb-name">CINDY MACIAS</div>
            </div>
            <div class="success-stories-thumb story2" id="success-stories-thumb" style="margin-left:8px;"><img class="thumb1" src="images/william1.jpg" /><img class="thumb2" src="images/william2.jpg" />
              <div id="success-stories-thumb-name">WILLIAM PERALTA</div>
            </div>
            <div class="success-stories-thumb story3" id="success-stories-thumb" style="margin-left:8px;"><img class="thumb1" src="images/lily1.jpg" /><img class="thumb2" src="images/lily2.jpg" />
              <div id="success-stories-thumb-name">LILY ORTEGA</div>
            </div>
          </div>
        </div>
      </div>
      <div id="first-step-container">
        <div id="first-step">
        <div id="change" style="position:absolute; top:0; left:0; font-size:80px; color:#ffffff; text-transform:uppercase; font-weight:800;">Change</div>
        <div id="your-life" style="position:absolute; top:81px; left:112px; font-size:44px; color:#ffdb31; text-transform:uppercase; font-weight:800;">Your Life</div>
        <div id="today" style="position:absolute; top:42px; right:0; font-size:80px; color:#ffffff; text-transform:uppercase; font-weight:800;">Today</div>
        <div id="with-a-new-career" style="position:absolute; top:124px; right:16px; font-size:44px; color:#ffffff; text-transform:uppercase; font-weight:800;">With A New <span style="color:#ffdb31;">Career!</span></div>
        <div id="with-a-new-career" style="position:absolute; top:184px; right:16px; font-size:40px; color:#ffffff; text-transform:uppercase; font-weight:800;"><span style="color:#ffdb31; font-size:33px; font-weight:400;">CALL NOW!</span> (888) 265-8776</div>
        </div>
      </div>
    </div>
    <div id="accreditations-container">
      <div id="accreditations"> <img src="images/accreditations.jpg" style="display:block; margin:0 auto;" /> </div>
    </div>
  </div>
</div>
<div id="footer">
  <div id="footer-content">*For online students only. At no additional cost. Offer terminable at any time. Restrictions apply.<br><br>

Master P and Romeo are spokespeople for ICDC College. Accredited by the Accrediting Commission of Career Schools and Colleges, a recognized accrediting agency by the U.S. Dept. of Education. For more information about our graduation rates, the median debt of students who completed the programs, and other important information, please visit our website icdccollege.edu/fields-of-study. Certain restrictions may apply. Programs may vary by campus.<br><br>

© 2015 ICDC College. All rights reserved.</div>
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
</html>
