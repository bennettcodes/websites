$(window).on('load', function() {

    /*******************************************************
        Start Variable Definitions
    *******************************************************/
    

    var
        heading1 = $('h1'),
        heading2 = $('h2'),
        heading3 = $('h3'),
        paragraph = $('p'),
        
        container = $('#container'),
        menuBtn = $('#menu-btn'),
        
        navContainer = $('#nav-container'),
        navItems = $('#nav-items'),
        navItem = $('.nav-item'),
        navItemInner = $('.nav-item-inner'),
        navItemInnerBackground = $('.nav-item-inner-background'),
        regularLink = $('.regular-link'),
        navItemLink = $('.nav-item-link'),
        navItemWidth =  $(window).width() * 0.5,
        navItemWidthMobile =  $(window).width() * 0.8,
        navItemHeight =  '100px',
        navItemLineHeight = navItemHeight,
        navContainerWidth = $(window).width() * 0.8,
        navContainerHeight = $(window).height() * 0.75,
        navContainerLeft = ($(window).width() / 2) - (navContainerWidth / 2),
        navContainerTop = $(window).height() * 0.25,
        
        characterBlack = $('.character.black'),
		characterWhite = $('.character.white'),
        
        bpLogoDraw = $('#bp-logo-draw'),
        bpLogoDrawBlack = $('#bp-logo-draw.black'),
        bpLogoDrawWhite = $('#bp-logo-draw.white'),
        bpLogoWidth = $(window).width() * 0.15,
        bpLogoHeight = bpLogoWidth / 2.912482066,
        bpLogoWidthMobile = ($('#header').height() * 0.8) * 2.912482066,
        bpLogoHeightMobile = $('#header').height() * 0.8,
        bpLogoTranslateX = (($(window).width() * 0.75) + 25),
        
        menuBtnWidth = ($(window).width() * 0.15) / 2.912482066,
        menuBtnHeight = ($(window).width() * 0.15) / 2.912482066,
        menuBtnWidthMobile = $('#header').height() * 0.5,
        menuBtnHeightMobile = $('#header').height() * 0.5,
        menuBtnWidthHalf = menuBtnWidth / 2,
        menuBtnHeightHalf = menuBtnHeight / 2,
        menuBtnWidthMobileHalf = menuBtnWidthMobile / 2,
        menuBtnHeightMobileHalf = menuBtnHeightMobile / 2,
        
        squareRoot2 = 1.41421356,
        menuBtnDiag = menuBtnWidth * squareRoot2,
        menuBtnMobileDiag = menuBtnWidthMobile * squareRoot2,
        
        menuBtnBarContainer = $('#menu-btn-bar-container'),
        menuBtnBar = $('.menu-btn-bar'),
        menuBackground = '',
        header = $('#header'),
        
        featurePause = 3000,
        masthead = $('#masthead'),
        mastheadWidth = $(window).width() * 0.75,
        mastheadHeight = $(window).height() / 2,
        
        mastheadFeatureContainer = $('#masthead-feature-container'),
        mastheadFeature = $('.masthead-feature'),
        mastheadFeaturedLogo = $('#masthead-featured-logo'),
        mastheadFeaturedLogoWidth = ($(window).width() * 0.75) / 5,
        mastheadFeaturedLogoHeight = 'auto',
        mastheadFeatureTextIntroContainer = $('.masthead-feature-text-intro-container'),
        mastheadFeatureTextIntro = $('.masthead-feature-text-intro'),
        mastheadFeatureTextIntroButton = $('.masthead-feature-text-intro-button'),
        mastheadFeatureTextIntroButton2 = $('.masthead-feature-text-intro-button2'),
        mastheadIntroEmphasized = $('.masthead-intro-emphasized'),
        mastheadFeatureTextTitle = $('.masthead-feature-text-title'),
        mastheadFeatureTextBlackfade = $('.masthead-feature-text-blackfade'),
        
        mastheadVideoContainer = $('.masthead-video-container'),
        mastheadVideoContainerWidth = $(window).width() * 0.75,
        mastheadVideoContainerHeight = $(window).height() / 2,
        mastheadVideo = $('.masthead-video'),
        mastheadVideoIframe = $('.masthead-video-iframe'),
        mastheadVideoWidth = $(window).width() * 0.75,
        mastheadVideoHeight = mastheadVideo.height(),
        mastheadFeatureLength = mastheadFeature.length,
        mastheadFeatureOverlay = $('#masthead-feature-overlay'),
        mastheadVideoOverlay = $('#masthead-video-overlay'),
        mastheadFeatureOverlayRollover = $('#masthead-feature-overlay-rollover'),
        mastheadMobileBackground = 'url(http://bennettcodes.com/sites/full/bennett-plays-live/images/homepage-masthead-mobile-bg.jpg)',
        mastheadDesktopBackground = 'none',
        
        sectionContainer = $('#section-container'),
        section = $('.section'),
        sectionFeatured = $('.featured'),
        sectionBubbleWhiteout = $('.section-bubble-whiteout'),
        sectionInfoContainer = $('#section-info-container'),
        sectionInfoVideoContainer = $('.section-info-video-container'),
        sectionInfoVideoContainerOverlay = $('.section-info-video-container-overlay'),
        sectionInfoVideo = $('.section-info-video'),
        sectionInfoContainerWidth = $(window).width() * 0.25,
        sectionBubble = $('.section-bubble'),
        sectionBubbleVideo = $('.section-bubble-video'),
        bubbleSmall = $('.bubble-small'),
        bubbleSmallWidth = $(window).width() * 0.06,
        bubbleSmallHeight = $(window).width() * 0.06,
        bubbleLarge = $('.bubble-large'),
        bubbleLargeWidth = $(window).width() * 0.25,
        bubbleLargeHeight = $(window).width() * 0.25,
        sectionInfo = $('.section-info'),
        featured = $('.featured'),
        sectionHeading = $('.section-heading'),
        sectionBody = $('.section-body'),
        
        sectionTileRow = $('.section-tile-row'),
        sectionTileRowWidth = $(window).width() * 0.5 - 25,
        sectionTileRowWidthMobile = $(window).width() * 0.8,
        sectionTileRowHeight = sectionTileRowWidth * 0.3,
        sectionTileRowHeightMobile = sectionTileRowWidthMobile * 0.3,
        sectionTileRowMarginBottom = sectionTileRowWidth * 0.05,
        sectionTileRowMarginBottomMobile = sectionTileRowWidthMobile * 0.05,
        sectionTile = $('.section-tile'),
        sectionTileWidth = sectionTileRowWidth * 0.3,
        sectionTileWidthMobile = sectionTileRowWidthMobile * 0.3,
        sectionTileHeight = sectionTileRowWidth * 0.3,
        sectionTileHeightMobile = sectionTileRowWidthMobile * 0.3,
        featuredTile = $('.featured-tile'),
        featuredTileWidth = sectionTileRowWidth * 0.65,
        featuredTileWidthMobile = sectionTileRowWidthMobile * 0.65,
        featuredTileHeight = sectionTileRowWidth * 0.3,
        featuredTileHeightMobile = sectionTileRowWidthMobile * 0.3,
        featuredTileTitle = $('.featured-tile-title'),
        sectionTileTitle = $('.section-tile-title'),
        sectionTileOverlay = $('.section-tile-overlay'),
        sectionTileBackground = $('.section-tile-background'),
        sectionTileBackgroundImage = $('.section-tile-background > img'),
        
        footer = $('#footer'),
        footerWidth = $(window).width() * 0.25,
        footerHeight = $(window).height() * 0.1,
        workInProgress = $('#wip'),
        copyright = $('#copyright')
        ;

    /*******************************************************
        End Variable Definitions
    *******************************************************/




    /*******************************************************
        Start CSS Definitions (main purple value is #6000ff)
    *******************************************************/
    
    sectionHeading.css({
        'opacity':'0'
    }); 
        
    sectionBody.css({
        'opacity':'0'
    });

    if ($(window).width() > 1024) {

    container.css({
        'width': 'auto',
        'height': $(window).height()
    });

    bpLogoDrawBlack.css({
        'width': bpLogoWidth,
        'height': bpLogoWidth / 2.912482066,
        opacity:'1',
        'left':bpLogoTranslateX + 'px',
        'top': ((bpLogoHeight / 2) + 25) - ($(window).width() * 0.15) / 2.912482066 / 2,
        'zIndex':'750'
    });

    bpLogoDrawWhite.css({
        'width': bpLogoWidth,
        'height': bpLogoWidth / 2.912482066,
        opacity:'0',
        'left':bpLogoTranslateX + 'px',
        'top': ((bpLogoHeight / 2) + 25) - ($(window).width() * 0.15) / 2.912482066 / 2,
        'zIndex':'751'
    });

    menuBtn.css({
        'width': menuBtnWidth,
        'height': menuBtnHeight,
        'backgroundColor':'transparent',
        'top': ((bpLogoDraw.height() / 2) + 25) - ($(window).width() * 0.15) / 2.912482066 / 2
    });

    menuBtnBarContainer.css({
        'width': menuBtnWidth,
        'height': menuBtnHeight,
        'backgroundColor':'transparent'
    });
    
    menuBtnBar.css({
        'width': menuBtnWidth,
        'backgroundColor':'#000000'
    });

    menuBtnBar.eq(0).css(
        'width',menuBtnWidth
    );

    menuBtnBar.eq(1).css(
        'top', (menuBtnHeightHalf - 1) + 'px'
    );

    menuBtnBar.eq(2).css({
        'top': (menuBtnHeight - 2) + 'px',
        'width':menuBtnWidth
    });

    header.css({
        'width': $(window).width(),
        'display':'none'
    });

    characterBlack.css({
        'width': $(window).width(),
        'height': $(window).height(),
		'bottom':-($(window).height() / 2),
        'opacity':'0'
    });

    masthead.css({
        'width': mastheadWidth,
        'height': mastheadHeight,
        opacity:'1',
        translateX:'0'
    });

    mastheadFeatureOverlay.css({
        'width': mastheadWidth,
        'height': mastheadHeight,
        'left': -(masthead.width()) * 0.5
    });

    mastheadVideoOverlay.css({
        'width': mastheadWidth,
        'height': mastheadHeight
    });

    mastheadFeatureOverlayRollover.css({
        'width': mastheadWidth,
        'height': mastheadHeight
    });

    mastheadFeature.css({
        'width': mastheadWidth,
        'height': mastheadHeight
    });
        
    mastheadVideoContainer.css({
        'width': mastheadVideoContainerWidth,
        'height': mastheadVideoContainerHeight
    });
        
    mastheadVideoIframe.css({
        'width':$(window).width() + 'px',
        'minHeight':$(window).height() * 1.25 + 'px'
    });

    mastheadFeatureContainer.css({
        'width': mastheadFeatureLength * mastheadWidth,
        'height': mastheadHeight
    });
        
    mastheadFeaturedLogo.css({
        'width':mastheadFeaturedLogoWidth,
        'height':mastheadFeaturedLogoHeight
    });
        
    mastheadFeatureTextIntro.css({
        'width':'auto',
        /*'minWidth': mastheadWidth / 2,*/
        'height':'auto',
        'opacity':'0',
        'padding':'2vw 2vw 1vw 8vw'
    });
        
    mastheadFeatureTextIntroButton.css({
        'width':mastheadFeatureTextIntro.width(),
        /*'minWidth': mastheadWidth / 2,*/
        'height': 'auto',
        'opacity':'0',
        'padding':'1vw 2vw 1vw 0'
    });
        
    mastheadFeatureTextIntroButton2.css({
        'width':'50px',
        /*'minWidth': mastheadWidth / 2,*/
        'height': 'auto',
        'opacity':'0',
        'padding':'1vw 2vw 1vw 0'
    });
        
    mastheadFeatureTextIntroContainer.css({
        'width':mastheadWidth * 0.75,
        /*'minWidth': mastheadWidth / 2,*/
        'height':'auto',
        'opacity':'1'
    }).velocity({
        skewX:'-12deg',
        translateX:'-2vw',
        translateY:'25px',
        perspective:'500px',
        persepctiveOrigin:'0 50%'
    }, {
        duration:0
    });
        
    mastheadIntroEmphasized.css({
        'fontSize':'7vw',
        'lineHeight':'3vw',
        'fontWeight':'900',
        'fontFamily':'"Playfair Display SC", serif',
        'color':'#ffffff'
    });
        
    mastheadFeatureTextBlackfade.show().css({
        'width': mastheadWidth * 0.75,
        'height': mastheadHeight
    });

    sectionContainer.css({
        'width': mastheadWidth,
        'top': $(window).height() / 2,
        'left':'0',
        'opacity':'1'
    });
        
    sectionBubbleWhiteout.css({
       'width':'50%', 
       'height':'100%'
    });

    sectionInfoContainer.css({
        'width': $(window).width() * 0.25,
        'height': $(window).height(),
        'left':'0',
        'opacity':'1'
    });

    sectionInfoVideoContainer.css({
        'width': $(window).width() * 0.25,
        'height': $(window).height(),
        'left':'0',
        'opacity':'1'
    });

    sectionInfoVideo.css({
        'minHeight': $(window).height() * 1.25,
        'opacity':'0.1'
    });
        
    sectionInfoVideoContainerOverlay.css({
        'width': $(window).width() * 0.25,
        'height': $(window).height(),
        'left':'0',
        'opacity':'1'
    });
        
    bubbleSmall.css({
        'width':bubbleSmallWidth,
        'height':bubbleSmallHeight
    }); 
        
    bubbleLarge.css({
        'width':bubbleLargeWidth,
        'height':bubbleLargeHeight
    });
        
    sectionBubbleVideo.css({
       'height':sectionBubbleVideo.parent('div').width(),
       'opacity':'0.1'
    });

    sectionInfo.css({
        'width': ($(window).width() * 0.25) - 22,
        'paddingTop': '30px',
        'paddingRight': '22px',
        'opacity':'0',
        'textAlign': 'right'
    }); 
        
    section.css({
        'width': (mastheadWidth - ($(window).width() * 0.25)) - 51 + 'px',
        'paddingTop': '30px'
    });
        
    sectionFeatured.css({
        'minHeight': $(window).height(),
        'borderLeftWidth':'1px',
        'borderLeftStyle':'solid',
        'borderLeftColor':'rgba(0,0,0,0.1)',
        'paddingBottom':'30px' 
    });
        
    sectionTileRow.css({
        'width':sectionTileRowWidth,
        'height':sectionTileRowHeight,
        'marginBottom':sectionTileRowMarginBottom
    });
        
    sectionTile.css({
        'width':sectionTileWidth,
        'height':sectionTileHeight,
        'opacity':'0'
    });
        
    featuredTile.css({
        'width':featuredTileWidth,
        'height':featuredTileHeight
    });
        
    featuredTileTitle.css(
        'width',featuredTileWidth - 40
    ); 
        
    sectionTileTitle.css(
        'width',sectionTileWidth - 40
    ); 
        
    sectionTileOverlay.css({
        'width':'100%',
        'height':'100%'
    });
        
    sectionTileBackground.css({
        'width':'100%',
        'height':'100%'
    });
    
    sectionTileBackgroundImage.css({
        'width':'100%',
        'height':'auto'
    });
        
    footer.show().css({
        'width':($(window).width() * 0.25) - 25,
        'height':'auto',
        'bottom': 25,
        'left':bpLogoTranslateX
    });
        
    workInProgress.css({
        'width':($(window).width() * 0.25) - 25,
        'height':'auto',
        'lineHeight':'1em',
        'top': bpLogoHeight + 50,
        'left':bpLogoTranslateX + 'px',
    });
        
    copyright.css({
        'width':($(window).width() * 0.25) - 25,
        'height':'auto',
        'lineHeight':'1em'
    });
        
    } else {

    container.css({
        'width': '100vw',
        'height': $(window).height()
    });

    header.css({
        'width': $(window).width(),
        opacity:'1',
        'display':'inline'
    });

    bpLogoDrawBlack.stop(1,1).css({
        'width': bpLogoWidthMobile,
        'height': bpLogoHeightMobile,
        'left':'25px',
        'top':($('#header').height() / 2) - (bpLogoHeightMobile / 2),
        'opacity':'1',
        'zIndex':'750'
    });

    bpLogoDrawWhite.stop(1,1).css({
        'width': bpLogoWidthMobile,
        'height': bpLogoHeightMobile,
        'left':'25px',
        'top':($('#header').height() / 2) - (bpLogoHeightMobile / 2),
        'opacity':'0',
        'zIndex':'751'
    });

    characterBlack.css(
        'opacity','0'
    );
    
    menuBtn.css({
        'width': menuBtnWidthMobile,
        'height': menuBtnHeightMobile,
        'top':($('#header').height() / 2) - (menuBtnHeightMobile / 2)
    });
    
    menuBtnBarContainer.css({
        'width': menuBtnWidthMobile,
        'height': menuBtnHeightMobile
    });
    
    menuBtnBar.css({
        'width': menuBtnWidthMobile,
        'backgroundColor':'#000000'
    });

    menuBtnBar.eq(0).css(
        'width',menuBtnWidthMobile
    );

    menuBtnBar.eq(1).css(
        'top', (menuBtnHeightMobileHalf - 1) + 'px'
    );

    menuBtnBar.eq(2).css({
        'top': (menuBtnHeightMobile - 2) + 'px',
        'width':menuBtnWidthMobile
    });

    masthead.css({
        'width': $(window).width(),
        'height': $(window).height() / 2
    });

    mastheadFeatureOverlay.css({
        'width': $(window).width(),
        'height': $(window).height() / 2,
        'opacity': '0'
    });
        
    mastheadFeatureTextIntroContainer.hide();

    mastheadVideoOverlay.css({
        'width': $(window).width(),
        'height': $(window).height() / 2,
        'opacity': '0'
    });

    mastheadFeatureOverlayRollover.css({
        'width': $(window).width(),
        'height': $(window).height() / 2
    });

    mastheadFeatureContainer.css({
        'width': mastheadFeatureLength * masthead.width(),
        'height': $(window).height() / 2
    });

    mastheadFeature.css({
        'width': $(window).width(),
        'height': $(window).height() / 2
    });
        
    mastheadVideoContainer.hide();
        
    mastheadVideo.hide();
        
    mastheadFeatureTextBlackfade.hide();

    sectionContainer.css({
        'width': $(window).width() * 0.8 + 'px',
        'top': $(window).height() / 2,
        'left': $(window).width() * 0.1 + 'px',
        'opacity':'1'
    }); 

    sectionInfoContainer.css({
        'width': sectionInfoContainerWidth,
        'height': '100px',
        'opacity':'1',
        'borderRightWidth':'none',
        'borderRightStyle':'none',
        'borderRightColor':'none',
        'borderBottomWidth':'1px',
        'borderBottomStyle':'solid',
        'borderBottomColor':'rgba(0,0,0,0.1)'
    }); 
        
    sectionInfoVideoContainer.css({
        'opacity':'0',
        'zIndex':'-1'
    }); 
        
    sectionInfoVideoContainerOverlay.css({
        'opacity':'0',
        'zIndex':'-1'
    }); 
        
    sectionInfoVideo.css({
        'opacity':'0',
        'zIndex':'-1'
    });

    sectionInfo.css({
        'width': $(window).width() * 0.8 + 'px',
        'paddingTop': '30px',
        'opacity':'0',
        'textAlign': 'left'
    }); 
        
    section.css({
        'width': $(window).width() * 0.8 + 'px',
        'paddingTop': '30px'
    });
        
    sectionFeatured.css({
        'borderLeftWidth':'none',
        'borderLeftStyle':'none',
        'borderLeftColor':'none',
        'paddingBottom':'30px'
    });
        
    sectionTileRow.css({
        'width':sectionTileRowWidthMobile,
        'height':sectionTileRowHeightMobile,
        'marginBottom':sectionTileRowMarginBottomMobile
    });
        
    sectionTile.css({
        'width':sectionTileWidthMobile,
        'height':sectionTileHeightMobile
    });
        
    featuredTile.css({
        'width':featuredTileWidthMobile,
        'height':featuredTileHeightMobile
    });
        
    featuredTileTitle.css(
        'width',featuredTileWidthMobile
    ); 
        
    sectionTileTitle.css(
        'width',sectionTileWidthMobile
    ); 
        
    sectionTileOverlay.css({
        'width':'100%',
        'height':'100%'
    });
        
    sectionTileBackground.css({
        'width':'100%',
        'height':'100%'
    });
    
    sectionTileBackgroundImage.css({
        'width':'100%',
        'height':'auto'
    });
        
    footer.hide();
        
    }

    sectionBody.css(
        'paddingTop', '30px'
    );

    /*******************************************************
        End CSS Definitions
    *******************************************************/




    /*******************************************************
        Start Element Methods and Functions
    *******************************************************/
    
    $('.masthead-video-iframe').on('loadeddata', function() {
        
    $('.masthead-video iframe').css({
        'width':$(window).width() + 'px',
        'minHeight':$(window).height() * 1.25 + 'px'
    });
        
        alert('ok!');
        
    $('.masthead-video').velocity({
        opacity:['1','0']
    }, {
        duration:1000,
        delay:500
    });
    });

    if (($('.section-info-video')) && ($(window).width() > 1024)) {
    $('.section-info-video').html(
    '<source src="/videos/small/battlefront/battlefront-hoth-gameplay.mp4" type="video/mp4" />' +
    '<source src="/videos/small/battlefront/battlefront-hoth-gameplay.webm" type="video/webm" />' +
    '<source src="/videos/small/battlefront/battlefront-hoth-gameplay.ogv" type="video/ogg" />' 
    );
    }
    
    if ($(window).width() < 1024) {
        masthead.css({
            'backgroundImage':mastheadMobileBackground,
            'backgroundRepeat':'no-repeat',
            'backgroundSize':'cover',
            'backgroundPosition':'center'
        });
    } else {
        masthead.css({
            'backgroundImage':mastheadDesktopBackground,
            'backgroundRepeat':mastheadDesktopBackground,
            'backgroundSize':mastheadDesktopBackground,
            'backgroundPosition':mastheadDesktopBackground
        });
    }
    
    for (i = 0; i < sectionTile.length; i++) {
        var current = sectionTile.eq(i);
        if ($(window).width() > 1024) {
        if (current.is(':last-child')) {
                current.css('marginRight','0');
        } else {
                current.css('marginRight',($(window).width() * 0.5 - 25) * 0.05);
        }
        } else {
        if (current.is(':last-child')) {
                current.css('marginRight','0');
        } else {
                current.css('marginRight',($(window).width() * 0.8) * 0.05);
        }
        }
    }
    
    mastheadVideoIframe.velocity({
       translateY:'-' + ($(window).height() * 0.125) - ($(window).height() * 0.25) + 'px'
    }, {
        duration:0
    });
    
    sectionInfoVideo.velocity({
       translateX:'-' + ((sectionInfoVideo.width() / 2) - (sectionInfoVideoContainer.width() / 2)) + 'px',
       translateY:'-' + $(window).height() * 0.125 + 'px'
    }, {
        duration:0
    });
    
    mastheadVideo.on('load', function(){
        
        alert('ok!');
        mastheadVideo.css('opacity','1');
        mastheadVideoOverlay.fadeOut(2000); 
    });
    
    sectionInfoVideo.on('loadeddata', function(){
       sectionInfoVideoContainerOverlay.fadeOut(2000); 
    });
    
    /* sectionInfoVideoContainerOverlay.hover(function() {
        $(this).stop(1,0).velocity({
            opacity:['0','0.9']
        }, {
            duration:250
        });
    }, function() {
        $(this).stop(1,0).velocity({
            opacity:['0.9','0']
        }, {
            duration:250
        });
    }); */
    
    sectionBubble.velocity({
       translateX:'-' + ((sectionBubbleWhiteout.width()) + 25) + 'px' 
    }, {
        duration:0
    });
    
    container.stop(1,0).velocity({
        opacity:['1','0']
    }, {
        duration:500,
        easing:'swing'
    });
                    
    regularLink.click(function (e) {
        e.preventDefault();                   // prevent default anchor behavior
        var goTo = this.getAttribute("href"); // store anchor href

        container.velocity({
            opacity:['0', '1']
        }, {
            duration:500,
            easing:'swing',
            complete:function(){container.hide();}
        });

        setTimeout(function(){
             window.location = goTo;
        },500);       
    }); 
        
    if ($(window).width() > 1024) {
 
    mastheadFeature.velocity({
        width: [
            mastheadWidth,
            mastheadWidth * 1.1
        ],
        height: [
            mastheadHeight,
            mastheadHeight * 1.1
        ],
        opacity:['1', '0']
    }, {
        duration:2000,
        easing:'easeOutExpo',
        complete:function() {
    
    masthead.hover(function() {
        
    if ($(window).width() > 1024) {
        mastheadFeatureOverlayRollover.stop(1,0).velocity({
            opacity:'0.5'
        }, {
            duration:500,
            easing:'easeOutCirc'
        });
        mastheadFeature.stop(1,0).velocity({
            width: mastheadWidth * 1.1,
            height: mastheadHeight * 1.1
        }, {
            duration:500,
            easing:'easeOutCirc'
        });
    }
    }, function() {
        
    if ($(window).width() > 1024) {
        mastheadFeatureOverlayRollover.stop(1,0).velocity({
            opacity:'0'
        }, {
            duration:500,
            easing:'easeOutCirc'
        });
        mastheadFeature.stop(1,0).velocity({
            width: mastheadWidth,
            height: mastheadHeight
        }, {
            duration:500,
            easing:'easeOutCirc'
        });
    }
    });
        }
    });
    
    mastheadFeatureTextIntro.velocity({
        opacity:['1','0'],
        rotateY:['0deg','90deg']
    }, {
        duration:2000,
        easing:'easeOutExpo',
        delay:250,
        complete:function() {}
    });
    
    mastheadFeatureTextIntroButton.velocity({
        opacity:['1','0'],
        rotateY:['0deg','90deg'],
        translateX:['0','-300px'],
        translateY:['0','20px']
    }, {
        duration:2000,
        easing:'easeOutExpo',
        delay:250,
        complete:function() {
        }
    });
    
    mastheadFeatureTextIntroButton2.velocity({
        opacity:['1','0'],
        rotateY:['0deg','90deg'],
        translateX:['0','-300px'],
        translateY:['0','20px']
    }, {
        duration:2000,
        easing:'easeOutExpo',
        delay:250,
        complete:function() {
        }
    });
    
    characterBlack.velocity({
        opacity:['0.1', '0'],
        translateY:[
            $(window).height() - $(this).height(),
            $(window).height() - ($(this).height() - 100)
            ]
    }, {
        duration:2000,
        easing:'easeOutCirc',
        delay:950,
        complete:function() {
        }
    });
    
    characterWhite.velocity({
        translateY:[
            $(window).height() - $(this).height(),
            $(window).height() - ($(this).height() - 100)
            ]
    }, {
        duration:2000,
        easing:'easeOutCirc',
        delay:950,
        complete:function() {
        }
    });
    
    var tileDelay = 250;
    for (i = 0; i < $('.section-tile').length; i++) {
        var currentTile = $('.section-tile').eq(i);
        currentTile.velocity({
            'opacity':['1', '0'],
            'translateY':['0','50px']
        }, {
            duration:1000,
            easing:'easeOutExpo',
            delay:tileDelay += 100
        });
        
    }
 
    
    sectionInfo.velocity({
        opacity:['1', '0'],
        translateY:['0','100px']
    }, {
        duration:2000,
        easing:'easeOutExpo',
        delay:650
    });
 
    
    sectionHeading.velocity({
        opacity:['1', '0'],
        translateY:['0','100px']
    }, {
        duration:2000,
        easing:'easeOutCirc',
        delay:750
    });
 
    
    sectionBody.velocity({
        opacity:['1', '0'],
        translateY:['0','100px']
    }, {
        duration:2000,
        easing:'easeOutCirc',
        delay:850
    });
        
    } else {
    
    masthead.velocity({
        opacity:['1', '0']
    }, {
        duration:1000,
        easing:'swing',
        complete:function() {
        }
    });
 
    
    sectionInfo.velocity({
        opacity:['1', '0']
    }, {
        duration:2000,
        easing:'easeOutExpo'
    });
 
    
    sectionHeading.velocity({
        opacity:['1', '0'],
        translateY:['0','200px']
    }, {
        duration:2000,
        easing:'easeOutExpo',
        delay:500
    });
 
    
    sectionBody.velocity({
        opacity:['1', '0'],
        translateY:['0','200px']
    }, {
        duration:2000,
        easing:'easeOutExpo',
        delay:600
    });
    }

    menuBtn.click(function() {
        
        var current = $(this);
        
        if (!current.hasClass('active')) {
        
        //Masthead Video Click Inactive
        mastheadVideo.hide();
        
        //BP Logo Black Click Inactive
        bpLogoDrawBlack.stop(1, 0).velocity({
            opacity: "0"
        }, {
            duration: 500,
            easing: 'easeOutCirc'
        });
        
        //BP Logo White Click Inactive
        bpLogoDrawWhite.stop(1, 0).css('zIndex','751').velocity({
            opacity: "1"
        }, {
            duration: 500,
            easing: 'easeOutCirc'
        });
        
        current.addClass('active');
            
        if ($('#menu-bg')) {
            $('#menu-bg').remove();
            $('#menu-circle').remove();
            $('#nav-container').remove();
            $('#nav-items').remove();
            $('.nav-item').remove();
            $('.nav-item-inner').remove();
            $('.nav-item-inner-background').remove();
            $('.nav-item-link').remove();
        }
			
        menuBackground = '';
        menuCircle = '';
        navContainer = '';
        navItems = '';
        navItem = '';
        navItemInner = '';
        navItemInnerBackground = '';
        navItemLink = '';
            
        container.append(
            '<div id="menu-circle"></div>' +
            '<div id="menu-bg"></div>' +
            '<div id="nav-container">' +
            '<div id="character" class="white"></div>' +
            '<ul id="nav-items">' +
            '<li class="nav-item"><a class="nav-item-link" href="http://bennettcodes.com/sites/full/bennett-plays-live/"><div class="nav-item-inner-background"></div><div class="nav-item-inner">Home</div></a></li>' +
            '<li class="nav-item"><a class="nav-item-link" href="http://bennettcodes.com/sites/full/bennett-plays-live/platforms"><div class="nav-item-inner-background"></div><div class="nav-item-inner">Platforms</div></a></li>' +
            '<li class="nav-item"><a class="nav-item-link" href="http://bennettcodes.com/sites/full/bennett-plays-live/platforms/pc/reviews/star-wars-battlefront-2015"><div class="nav-item-inner-background"></div><div class="nav-item-inner">Reviews</div></a></li>' +
            '<li class="nav-item"><a class="nav-item-link" href="http://bennettcodes.com/sites/full/bennett-plays-live/editorials"><div class="nav-item-inner-background"></div><div class="nav-item-inner">Editorials</div></a></li>' +
            '<li class="nav-item"><a class="nav-item-link" href="http://bennettcodes.com/sites/full/bennett-plays-live/about"><div class="nav-item-inner-background"></div><div class="nav-item-inner">About</div></a></li>' +
            '<li class="nav-item"><a class="nav-item-link" href="http://bennettcodes.com/sites/full/bennett-plays-live/contact"><div class="nav-item-inner-background"></div><div class="nav-item-inner">Contact</div></a></li>' +
            '</ul>' +
            '</div>' 
        );
			
        menuBackground = $('#menu-bg');
        menuCircle = $('#menu-circle');
        navContainer = $('#nav-container');
        navItems = $('#nav-items');
        navItem = $('.nav-item');
        navItemInnerBackground = $('.nav-item-inner-background');
        navItemInner = $('.nav-item-inner');
        navItemLink = $('.nav-item-link');
			
		if ($(window).width() > 1024) {
		characterWhite.css({
		'width': $(window).width(),
		'height': $(window).height(),
		'bottom':-($(window).height() / 2),
		'zIndex':'710',
		'opacity':'0.1'
        });
		} else {
		characterWhite.css({
		'width': $(window).width(),
		'height': $(window).height(),
		'bottom':-($(window).height() / 2),
		'zIndex':'710',
		'opacity':'0'
        });
		}
        
        navContainer.css({
            'width': $(window).width(),
            'height': $(window).height()
            
        });
        
        navItems.css({
           'width': navContainerWidth,
           'height': navContainerHeight,
           'left': navContainerLeft,
           'top': navContainerTop
        });
		
		if ($(window).width() > 1024) {
        
        navItem.css({
           'width': navItemWidth,
           'height': '100',
			'opacity':'1'
        });
            
        navItemInner.css({
           'width': navItemWidth,
           'height': navItemHeight,
           'lineHeight': navItemLineHeight,
           'opacity':'0',
           'textAlign':'left'
            
        });
        
        navItemInnerBackground.css({
           'width': navItemWidth,
           'height': navItemHeight,
           'lineHeight': navItemLineHeight,
			'bottom':'0',
			'opacity':'0'
        });
        
		} else {
        
        navItem.css({
           'width': navItemWidthMobile,
           'height': '100',
			'opacity':'1'
        });
            
        navItemInner.css({
           'width': navItemWidthMobile,
           'height': navItemHeight,
           'lineHeight': navItemLineHeight,
		   'fontSize': $(window).width() * 0.09,
		   'fontWeight': 300,
			'opacity':'0',
           'textAlign':'center'
        });
        
        navItemInnerBackground.css({
           'width': navItemWidthMobile,
           'height': navItemHeight,
           'lineHeight': navItemLineHeight,
			'bottom':'0',
			'opacity':'0',
            'borderBottomWidth':'3px',
            'borderBottomStyle':'solid',
            'borderBottomColor':'#ffffff'
        });
		}
            
        var verticalSpacing = 0;
        var itemDelay = 0;
        var itemDelayMobile = 250;
        var itemInnerDelay = 250;
		var navItemBackgroundColor = 'transparent';
        for (i = 0; i < navItem.length; i++) {
            var current = navItem.eq(i),
				currentInner = navItemInner.eq(i),
				currentInnerBackground = navItemInnerBackground.eq(i);
			currentInner
				.velocity({
				opacity:['1', '0'],
				translateY:['0px', '100px']
			}, {
				duration:750,
				easing:'easeOutQuart',
                delay:itemInnerDelay,
				complete:function() {

				$(this).hover(function() {
                    if ($(window).width() > 1024) {
					$(this).stop(1,0).velocity({
						translateX:[
							'50px',
							'0px'
						]
					}, {
						duration:500,
						easing:'easeOutCirc'
					});
                    } else {
					$(this).stop(1,0).velocity({
						translateZ:[
							'50px',
							'0px'
						]
					}, {
						duration:500,
						easing:'easeOutCirc'
					});
                    }
					$(this).prev(navItemInnerBackground).stop(1,0).velocity({
						opacity:['1', '0.1']
					}, {
						duration:500,
						easing:'easeOutCirc'
					});
				}, function() {
                    if ($(window).width() > 1024) {
					$(this).stop(1,0).velocity({
						translateX:[
							'0px',
							'50px'
						]
					}, {
						duration:500,
						easing:'easeOutCirc'
					});
                    } else {
					$(this).stop(1,0).velocity({
						translateZ:[
							'0px',
							'50px'
						]
					}, {
						duration:500,
						easing:'easeOutCirc'
					});
                    }
					$(this).prev(navItemInnerBackground).stop(1,0).velocity({
						opacity:['0.1', '1']
					}, {
						duration:500,
						easing:'easeOutCirc'
					});
				});
                    
                navItemLink.click(function (e) {
                    e.preventDefault();                   // prevent default anchor behavior
                    var goTo = this.getAttribute("href"); // store anchor href

                    $('#container').velocity({
                        opacity:['0', '1']
                    }, {
                        duration:500,
                        easing:'swing',
                        complete:function(){$('#container').hide();}
                    });

                    setTimeout(function(){
                         window.location = goTo;
                    },500);       
                }); 
                    
                    
				}
			});
            itemInnerDelay += 100;
                if ($(window).width() > 1024) {
			currentInnerBackground.velocity({
				opacity:['0.1', '1'],
				height:['100px', '0px'],
				translateX:['0px', -(navItemWidth) + 'px']
			}, {
				duration:750,
				easing:'easeInOutQuart',
                delay:itemDelay
			});
                } else {
				currentInnerBackground.velocity({
				opacity:['0.1', '1'],
				height:['100px', '0px'],
				translateX:['0px', -(navItemWidthMobile) + 'px']
			}, {
				duration:750,
				easing:'easeOutQuart',
                delay:itemDelayMobile
			});
                }
            current
                .css(
                    'top',verticalSpacing + 'px'
                )
                .velocity({
                    opacity:['1', '1']
                }, {
                    duration:1000,
                    easing:'easeOutQuart'
                });
            verticalSpacing += 101;
            itemDelay += 100;
            itemDelayMobile += 100;
        }
            
        if ($(window).width() > 1024) {
			
        //Character Black Click Inactive
        characterBlack.stop(1, 0).velocity({
            opacity: "0"
        }, {
            duration: 500,
            easing: 'easeOutCirc'
        });
			
        //Character White Click Inactive
        characterWhite.stop(1, 0).velocity({
            opacity: ['0.1', '0']
        }, {
            duration: 500,
            easing: 'easeOutCirc'
        });
            
        //Work In Progress Click Inactive      
        workInProgress.css('color','#ffffff');
            
        //Copyright Click Inactive      
        copyright.css('color','#ffffff');
            
        //Copyright Click Inactive      
        $('#copyright > a').css('color','#ffffff');
        
        //Top Menu Button Bar Click Inactive
        menuBtnBar.eq(0).stop(1, 0).velocity({
            rotateZ: "45deg",
            transformOriginX: '0',
            transformOriginY: '0',
            width: menuBtnDiag,
            backgroundColor: '#ffffff'
        }, {
            duration: 500,
            easing: 'easeOutCirc'
        });
        
        //Middle Menu Button Bar Click Inactive
        menuBtnBar.eq(1).stop(1, 0).velocity({
            opacity:'0',
            backgroundColor: '#ffffff'
        }, {
            duration: 500,
            easing: 'easeOutCirc'
        });
        
        //Bottom Menu Button Bar Click Inactive
        menuBtnBar.eq(2).stop(1, 0).velocity({
            rotateZ: "-45deg",
            transformOriginX: '0',
            transformOriginY: '0',
            width: menuBtnDiag,
            backgroundColor: '#ffffff'
        }, {
            duration: 500,
            easing: 'easeOutCirc'
        });
			
        } else {
        
        //Top Menu Button Bar Click Inactive
        menuBtnBar.eq(0).stop(1, 0).velocity({
            rotateZ: "45deg",
            transformOriginX: '0',
            transformOriginY: '0',
            width: menuBtnMobileDiag,
            backgroundColor: '#ffffff'
        }, {
            duration: 500,
            easing: 'easeOutCirc'
        });
        
        //Middle Menu Button Bar Click Inactive
        menuBtnBar.eq(1).stop(1, 0).velocity({
            opacity:'0',
            backgroundColor: '#ffffff'
        }, {
            duration: 500,
            easing: 'easeOutCirc'
        });
        
        //Bottom Menu Button Bar Click Inactive
        menuBtnBar.eq(2).stop(1, 0).velocity({
            rotateZ: "-45deg",
            transformOriginX: '0',
            transformOriginY: '0',
            width: menuBtnMobileDiag,
            backgroundColor: '#ffffff'
        }, {
            duration: 500,
            easing: 'easeOutCirc'
        });
        }
        
        //Menu Background Click Inactive
        menuBackground.stop(1, 0).velocity({
            opacity: "1"
        }, {
            duration: 500,
            easing: 'easeOutCirc'
        });
        
        //Menu Circle Click Inactive
        menuCircle.stop(1,0).hide();
        
/*        //Menu Circle Click Inactive
        menuCircle.stop(1, 0).velocity({
            opacity: ['1', '0'],
            width:['400', '0'],
            height:['400', '0'],
            translateY:[
                ($(window).height() / 2) - 200 + 'px',
                $(window).height() / 2 + 'px'
            ],
            translateX:[
                ($(window).width() / 2) - 200 + 'px',
                $(window).width() / 2 + 'px'
            ]
        }, {
            duration: 500,
            easing: 'easeOutCirc'
        });*/
        
    } else {
        
        current.removeClass('active');
			
		
        
        if ($(window).width() > 1024) {
        //BP Logo Black Click Active
        bpLogoDrawBlack.stop(1, 0).velocity({
            opacity: "1"
        }, {
            duration: 500,
            easing: 'easeOutCirc'
        });
        
        //Masthead Video Click Active
        mastheadVideo.show();
        
        //BP Logo White Click Active
        bpLogoDrawWhite.stop(1, 0).velocity({
            opacity: "0"
        }, {
            duration: 500,
            easing: 'easeOutCirc'
        });
            
        //Work In Progress Click Active    
        workInProgress.css('color','#000000');
            
        //Copyright Click Active    
        copyright.css('color','#000000');
            
        //Copyright Click Active  
        $('#copyright > a').css('color','#000000');
			
        } else {
        
        //BP Logo Black Click Active
        bpLogoDrawBlack.stop(1, 0).velocity({
            opacity: "1"
        }, {
            duration: 500,
            easing: 'easeOutCirc'
        });
        
        //BP Logo White Click Active
        bpLogoDrawWhite.stop(1, 0).velocity({
            opacity: "0"
        }, {
            duration: 500,
            easing: 'easeOutCirc'
        });
        }
        
        //Character White Click Active
        characterWhite.stop(1, 0).css('zIndex','48');
        
        //Character Black Click Active
        characterBlack.stop(1, 0).velocity({
            opacity: "0.1"
        }, {
            duration: 500,
            easing: 'easeOutCirc'
        });
        
        //Menu Background Click Active
        menuBackground.stop(1, 0).velocity({
            opacity: "0"
        }, {
            duration: 500,
            easing: 'easeOutCirc',
            complete: function(){
                $(this).remove();
            }
        });
        
        //Nav Container Click Active
        navContainer.stop(1, 0).velocity({
            opacity: "0"
        }, {
            duration: 500,
            easing: 'easeOutCirc',
            complete: function(){
                $(this).remove();
            }
        });
        
        //Menu Circle Click Active
        menuCircle.stop(1, 0).velocity({
            opacity: "0",
            width:['600', '400'],
            height:['600', '400'],
            translateY:[
                ($(window).height() / 2) - 300 + 'px',
                ($(window).height() / 2) - 200 + 'px'
            ],
            translateX:[
                ($(window).width() / 2) - 300 + 'px',
                ($(window).width() / 2) - 200 + 'px'
            ]
        }, {
            duration: 500,
            easing: 'easeOutCirc',
            complete: function(){
                $(this).remove();
            }
        });
        
        if ($(window).width() > 1024) {
        //Top Menu Button Bar Click Active
        menuBtnBar.eq(0).stop(1, 0).velocity({
            rotateZ: "0",
            transformOriginX: '0',
            transformOriginY: '0',
            width: menuBtnWidth,
            backgroundColor: '#000000'
        }, {
            duration: 500,
            easing: 'easeOutCirc'
        });
        
        //Middle Menu Button Bar Click Active
        menuBtnBar.eq(1).stop(1, 0).velocity({
            opacity:'1',
            backgroundColor: '#000000'
        }, {
            duration: 500,
            easing: 'easeOutCirc'
        });
        
        //Bottom Menu Button Bar Click Active
        menuBtnBar.eq(2).stop(1, 0).velocity({
            rotateZ: "0",
            transformOriginX: '0',
            transformOriginY: '0',
            width: menuBtnWidth,
            backgroundColor: '#000000'
        }, {
            duration: 500,
            easing: 'easeOutCirc'
        });
        } else {
        
        //Top Menu Button Bar Click Active
        menuBtnBar.eq(0).stop(1, 0).velocity({
            rotateZ: "0",
            transformOriginX: '0',
            transformOriginY: '0',
            width: menuBtnWidthMobile,
            backgroundColor: '#000000'
        }, {
            duration: 500,
            easing: 'easeOutCirc'
        });
        
        //Middle Menu Button Bar Click Active
        menuBtnBar.eq(1).stop(1, 0).velocity({
            opacity:'1',
            backgroundColor: '#000000'
        }, {
            duration: 500,
            easing: 'easeOutCirc'
        });
        
        //Bottom Menu Button Bar Click Active
        menuBtnBar.eq(2).stop(1, 0).velocity({
            rotateZ: "0",
            transformOriginX: '0',
            transformOriginY: '0',
            width: menuBtnWidthMobile,
            backgroundColor: '#000000'
        }, {
            duration: 500,
            easing: 'easeOutCirc'
        });
        }
        
    }
        
    });
    
/*    var interval;
    var currentMargin;
    var currentSlide = 0;
    
    function startSlider(){
        interval = setInterval(function() {
            mastheadFeature.velocity({
                translateX:'-=' + ($(window).width() * 0.75)
            }, {
                duration:1000,
                easing:'easeOutCirc'
            });
            currentSlide++;
        if (currentSlide == mastheadFeatureLength - 1 ) {
                mastheadFeature.velocity('reverse',0);
            currentSlide = 0;
        }
        }, featurePause);
    }
	
    function stopSlider (){
        clearInterval(interval);
    };
    
    function stopMarginLog (){
        clearInterval(currentMargin);
    };
	
    
    $slider.hover(function() {
		stopSlider();
	}, function() {
		startSlider();
	});
	
	
    startSlider();*/

    /*******************************************************
        End Element Methods and Functions
    *******************************************************/




    /*******************************************************
        Start Window Resize Behaviors
    *******************************************************/
        
    $( window ).resize(function() {

        heading1 = $('h1'),
        heading2 = $('h2'),
        heading3 = $('h3'),
        paragraph = $('p'),
        
        container = $('#container'),
        menuBtn = $('#menu-btn'),
        
        navContainer = $('#nav-container'),
        navItems = $('#nav-items'),
        navItem = $('.nav-item'),
        navItemInner = $('.nav-item-inner'),
        navItemInnerBackground = $('.nav-item-inner-background'),
        regularLink = $('.regular-link'),
        navItemLink = $('.nav-item-link'),
        navItemWidth =  $(window).width() * 0.5,
        navItemWidthMobile =  $(window).width() * 0.8,
        navItemHeight =  '100px',
        navItemLineHeight = navItemHeight,
        navContainerWidth = $(window).width() * 0.8,
        navContainerHeight = $(window).height() * 0.5,
        navContainerLeft = ($(window).width() / 2) - (navContainerWidth / 2),
        navContainerTop = ($(window).height() / 2) - (navContainerHeight / 2),
        
        characterBlack = $('.character.black'),
		characterWhite = $('.character.white'),
        
        bpLogoDraw = $('#bp-logo-draw'),
        bpLogoDrawBlack = $('#bp-logo-draw.black'),
        bpLogoDrawWhite = $('#bp-logo-draw.white'),
        bpLogoWidth = $(window).width() * 0.15,
        bpLogoHeight = bpLogoWidth / 2.912482066,
        bpLogoWidthMobile = ($('#header').height() * 0.8) * 2.912482066,
        bpLogoHeightMobile = $('#header').height() * 0.8,
        bpLogoTranslateX = (($(window).width() * 0.75) + 25),
        
        menuBtnWidth = ($(window).width() * 0.15) / 2.912482066,
        menuBtnHeight = ($(window).width() * 0.15) / 2.912482066,
        menuBtnWidthMobile = $('#header').height() * 0.5,
        menuBtnHeightMobile = $('#header').height() * 0.5,
        menuBtnWidthHalf = menuBtnWidth / 2,
        menuBtnHeightHalf = menuBtnHeight / 2,
        menuBtnWidthMobileHalf = menuBtnWidthMobile / 2,
        menuBtnHeightMobileHalf = menuBtnHeightMobile / 2,
        
        squareRoot2 = 1.41421356,
        menuBtnDiag = menuBtnWidth * squareRoot2,
        menuBtnMobileDiag = menuBtnWidthMobile * squareRoot2,
        
        featurePause = 3000,
        masthead = $('#masthead'),
        mastheadWidth = $(window).width() * 0.75,
        mastheadHeight = $(window).height() / 2,
        
        mastheadFeatureContainer = $('#masthead-feature-container'),
        mastheadFeature = $('.masthead-feature'),
        mastheadFeaturedLogo = $('#masthead-featured-logo'),
        mastheadFeaturedLogoWidth = ($(window).width() * 0.75) / 5,
        mastheadFeaturedLogoHeight = 'auto',
        mastheadFeatureTextIntroContainer = $('.masthead-feature-text-intro-container'),
        mastheadFeatureTextIntro = $('.masthead-feature-text-intro'),
        mastheadFeatureTextIntroButton = $('.masthead-feature-text-intro-button'),
        mastheadFeatureTextIntroButton2 = $('.masthead-feature-text-intro-button2'),
        mastheadIntroEmphasized = $('.masthead-intro-emphasized'),
        mastheadFeatureTextTitle = $('.masthead-feature-text-title'),
        mastheadFeatureTextBlackfade = $('.masthead-feature-text-blackfade'),
        
        mastheadVideoContainer = $('.masthead-video-container'),
        mastheadVideoContainerWidth = $(window).width() * 0.75,
        mastheadVideoContainerHeight = $(window).height() / 2,
        mastheadVideo = $('.masthead-video'),
        mastheadVideoIframe = $('.masthead-video-iframe'),
        mastheadVideoWidth = $(window).width() * 0.75,
        mastheadVideoHeight = mastheadVideo.height(),
        mastheadFeatureLength = mastheadFeature.length,
        mastheadFeatureOverlay = $('#masthead-feature-overlay'),
        mastheadVideoOverlay = $('#masthead-video-overlay'),
        mastheadFeatureOverlayRollover = $('#masthead-feature-overlay-rollover'),
        mastheadMobileBackground = 'url(http://bennettcodes.com/sites/full/bennett-plays-live/images/homepage-masthead-mobile-bg.jpg)',
        mastheadDesktopBackground = 'none',
        
        sectionContainer = $('#section-container'),
        section = $('.section'),
        sectionFeatured = $('.featured'),
        sectionBubbleWhiteout = $('.section-bubble-whiteout'),
        sectionInfoContainer = $('#section-info-container'),
        sectionInfoVideoContainer = $('.section-info-video-container'),
        sectionInfoVideoContainerOverlay = $('.section-info-video-container-overlay'),
        sectionInfoVideo = $('.section-info-video'),
        sectionInfoContainerWidth = $(window).width() * 0.25,
        sectionBubble = $('.section-bubble'),
        sectionBubbleVideo = $('.section-bubble-video'),
        bubbleSmall = $('.bubble-small'),
        bubbleSmallWidth = $(window).width() * 0.06,
        bubbleSmallHeight = $(window).width() * 0.06,
        bubbleLarge = $('.bubble-large'),
        bubbleLargeWidth = $(window).width() * 0.25,
        bubbleLargeHeight = $(window).width() * 0.25,
        sectionInfo = $('.section-info'),
        featured = $('.featured'),
        sectionHeading = $('.section-heading'),
        sectionBody = $('.section-body'),
        
/*        sectionTileRow = $('.section-tile-row'),
        sectionTileRowWidth = $(window).width() * 0.5 - 25,
        sectionTileRowHeight = ($(window).width() * 0.5 - 25) * 0.3,
        sectionTileRowMarginBottom = ($(window).width() * 0.5 - 25) * 0.05,
        sectionTile = $('.section-tile'),
        sectionTileWidth = ($(window).width() * 0.5 - 25) * 0.33333,
        sectionTileHeight = ($(window).width() * 0.5 - 25) * 0.33333,
        featuredTile = $('.featured-tile'),
        sectionTileTitle = $('.section-tile-title'),
        sectionTileOverlay = $('.section-tile-overlay'),
        sectionTileBackground = $('.section-tile-background'),
        sectionTileBackgroundImage = $('.section-tile-background > img'),*/
        
        sectionTileRow = $('.section-tile-row'),
        sectionTileRowWidth = $(window).width() * 0.5 - 25,
        sectionTileRowWidthMobile = $(window).width() * 0.8,
        sectionTileRowHeight = sectionTileRowWidth * 0.3,
        sectionTileRowHeightMobile = sectionTileRowWidthMobile * 0.3,
        sectionTileRowMarginBottom = sectionTileRowWidth * 0.05,
        sectionTileRowMarginBottomMobile = sectionTileRowWidthMobile * 0.05,
        sectionTile = $('.section-tile'),
        sectionTileWidth = sectionTileRowWidth * 0.3,
        sectionTileWidthMobile = sectionTileRowWidthMobile * 0.3,
        sectionTileHeight = sectionTileRowWidth * 0.3,
        sectionTileHeightMobile = sectionTileRowWidthMobile * 0.3,
        featuredTile = $('.featured-tile'),
        featuredTileWidth = sectionTileRowWidth * 0.65,
        featuredTileWidthMobile = sectionTileRowWidthMobile * 0.65,
        featuredTileHeight = sectionTileRowWidth * 0.3,
        featuredTileHeightMobile = sectionTileRowWidthMobile * 0.3,
        featuredTileTitle = $('.featured-tile-title'),
        sectionTileTitle = $('.section-tile-title'),
        sectionTileOverlay = $('.section-tile-overlay'),
        sectionTileBackground = $('.section-tile-background'),
        sectionTileBackgroundImage = $('.section-tile-background > img'),
        
        footer = $('#footer'),
        footerWidth = $(window).width() * 0.25,
        footerHeight = $(window).height() * 0.1,
        workInProgress = $('#wip'),
        copyright = $('#copyright')
        ;

    if ($(window).width() > 1024) {

    container.css({
        'width': 'auto',
        'height': $(window).height()
    });

    bpLogoDrawBlack.css({
        'width': bpLogoWidth,
        'height': bpLogoWidth / 2.912482066,
        opacity:'1',
        'left':bpLogoTranslateX + 'px',
        'top': ((bpLogoHeight / 2) + 25) - ($(window).width() * 0.15) / 2.912482066 / 2,
        'zIndex':'750'
    });

    bpLogoDrawWhite.css({
        'width': bpLogoWidth,
        'height': bpLogoWidth / 2.912482066,
        opacity:'0',
        'left':bpLogoTranslateX + 'px',
        'top': ((bpLogoHeight / 2) + 25) - ($(window).width() * 0.15) / 2.912482066 / 2,
        'zIndex':'751'
    });

    menuBtn.css({
        'width': menuBtnWidth,
        'height': menuBtnHeight,
        'backgroundColor':'transparent',
        'top': ((bpLogoDraw.height() / 2) + 25) - ($(window).width() * 0.15) / 2.912482066 / 2
    });

    menuBtnBarContainer.css({
        'width': menuBtnWidth,
        'height': menuBtnHeight,
        'backgroundColor':'transparent'
    });
    
    menuBtnBar.css({
        'width': menuBtnWidth,
        'backgroundColor':'#000000'
    });

    menuBtnBar.eq(0).css(
        'width',menuBtnWidth
    );

    menuBtnBar.eq(1).css(
        'top', (menuBtnHeightHalf - 1) + 'px'
    );

    menuBtnBar.eq(2).css({
        'top': (menuBtnHeight - 2) + 'px',
        'width':menuBtnWidth
    });

    header.css({
        'width': $(window).width(),
        'display':'none'
    });

    characterBlack.css({
        'width': $(window).width(),
        'height': $(window).height(),
		'bottom':-($(window).height() / 2),
        'opacity':'0.1'
    });

    masthead.css({
        'width': mastheadWidth,
        'height': mastheadHeight,
        opacity:'1',
        translateX:'0'
    });

    mastheadFeatureOverlay.css({
        'width': mastheadWidth,
        'height': mastheadHeight,
        'left': -(masthead.width()) * 0.5
    });

    mastheadVideoOverlay.css({
        'width': mastheadWidth,
        'height': mastheadHeight
    });

    mastheadFeatureOverlayRollover.css({
        'width': mastheadWidth,
        'height': mastheadHeight
    });

    mastheadFeature.css({
        'width': mastheadWidth,
        'height': mastheadHeight
    });
        
    mastheadVideoContainer.show().css({
        'width': mastheadVideoContainerWidth,
        'height': mastheadVideoContainerHeight
    });
        
    mastheadVideo.show().css({
        'width':$(window).width() + 'px',
        'minHeight':$(window).height() * 1.25 + 'px'
    });

    mastheadFeatureContainer.css({
        'width': mastheadFeatureLength * mastheadWidth,
        'height': mastheadHeight
    });
        
    mastheadFeaturedLogo.css({
        'width':mastheadFeaturedLogoWidth,
        'height':mastheadFeaturedLogoHeight
    });
        
    mastheadFeatureTextIntroContainer.show().css({
        'width':mastheadWidth * 0.75,
        /*'minWidth': mastheadWidth / 2,*/
        'height':'auto',
        'opacity':'1'
    }).velocity({
        skewX:'-12deg',
        translateX:'-2vw',
        translateY:(mastheadHeight / 2) - (mastheadFeatureTextIntroContainer.height() / 2),
        perspective:'500px',
        persepctiveOrigin:'0 50%'
    }, {
        duration:0
    });
        
    mastheadFeatureTextIntro.css({
        'width':'auto',
        /*'minWidth': mastheadWidth / 2,*/
        'height':'auto',
        'opacity':'1',
        'padding':'2vw 2vw 1vw 8vw'
    });
        
    mastheadFeatureTextIntroButton.css({
        'width':mastheadFeatureTextIntro.width(),
        /*'minWidth': mastheadWidth / 2,*/
        'height': 'auto',
        'opacity':'1',
        'padding':'1vw 2vw 1vw 0'
    });
        
    mastheadFeatureTextIntroButton2.css({
        'width':'50px',
        /*'minWidth': mastheadWidth / 2,*/
        'height': 'auto',
        'opacity':'0',
        'padding':'1vw 2vw 1vw 0'
    });
        
    mastheadIntroEmphasized.css({
        'fontSize':'7vw',
        'lineHeight':'3vw',
        'fontWeight':'900',
        'fontFamily':'"Playfair Display SC", serif',
        'color':'#ffffff'
    });
        
    mastheadFeatureTextBlackfade.show().css({
        'width': mastheadWidth * 0.75,
        'height': mastheadHeight
    });

    sectionContainer.css({
        'width': mastheadWidth,
        'top': $(window).height() / 2,
        'left':'0',
        'opacity':'1'
    });
        
    sectionBubbleWhiteout.css({
       'width':'50%', 
       'height':'100%'
    });

    sectionInfoContainer.css({
        'width': $(window).width() * 0.25,
        'height': $(window).height(),
        'left':'0',
        'opacity':'1'
    });

    sectionInfoVideoContainer.css({
        'width': $(window).width() * 0.25,
        'height': $(window).height(),
        'left':'0',
        'opacity':'1'
    });

    sectionInfoVideo.css({
        'minHeight': $(window).height() * 1.25,
        'opacity':'0.1'
    });
        
    sectionInfoVideoContainerOverlay.css({
        'width': $(window).width() * 0.25,
        'height': $(window).height(),
        'left':'0',
        'opacity':'1'
    });
        
    bubbleSmall.css({
        'width':bubbleSmallWidth,
        'height':bubbleSmallHeight
    }); 
        
    bubbleLarge.css({
        'width':bubbleLargeWidth,
        'height':bubbleLargeHeight
    });
        
    sectionBubbleVideo.css({
       'height':sectionBubbleVideo.parent('div').width(),
       'opacity':'0.1'
    });

    sectionInfo.css({
        'width': ($(window).width() * 0.25) - 22,
        'paddingTop': '30px',
        'paddingRight': '22px',
        'opacity':'1',
        'textAlign': 'right'
    }); 
        
    section.css({
        'width': (mastheadWidth - ($(window).width() * 0.25)) - 51 + 'px',
        'paddingTop': '30px'
    });
        
    sectionFeatured.css({
        'minHeight': $(window).height(),
        'borderLeftWidth':'1px',
        'borderLeftStyle':'solid',
        'borderLeftColor':'rgba(0,0,0,0.1)',
        'paddingBottom':'30px' 
    });
        
    sectionTileRow.css({
        'width':sectionTileRowWidth,
        'height':sectionTileRowHeight,
        'marginBottom':sectionTileRowMarginBottom
    });
        
    sectionTile.css({
        'width':sectionTileWidth,
        'height':sectionTileHeight,
        'opacity':'1'
    });
        
    featuredTile.css({
        'width':featuredTileWidth,
        'height':featuredTileHeight
    });
        
    featuredTileTitle.css(
        'width',featuredTileWidth - 40
   );
        
    sectionTileTitle.css(
        'width',sectionTileWidth - 40
   );
        
    sectionTileOverlay.css({
        'width':'100%',
        'height':'100%'
    });
        
    sectionTileBackground.css({
        'width':'100%',
        'height':'100%'
    });
    
    sectionTileBackgroundImage.css({
        'width':'100%',
        'height':'auto'
    });
        
    footer.show().css({
        'width':($(window).width() * 0.25) - 25,
        'height':'auto',
        'bottom': 25,
        'left':bpLogoTranslateX
    });
        
    workInProgress.css({
        'width':($(window).width() * 0.25) - 25,
        'height':'auto',
        'lineHeight':'1em',
        'top': bpLogoHeight + 50,
        'left':bpLogoTranslateX + 'px',
    });
        
    copyright.css({
        'width':($(window).width() * 0.25) - 25,
        'height':'auto',
        'lineHeight':'1em'
    });
        
    } else {

    container.css({
        'width': 'auto',
        'height': $(window).height()
    });

    bpLogoDrawBlack.stop(1,1).css({
        'width': bpLogoWidthMobile,
        'height': bpLogoHeightMobile,
        'left':'25px',
        'top':($('#header').height() / 2) - (bpLogoHeightMobile / 2),
        'opacity':'1',
        'zIndex':'750'
    });

    bpLogoDrawWhite.stop(1,1).css({
        'width': bpLogoWidthMobile,
        'height': bpLogoHeightMobile,
        'left':'25px',
        'top':($('#header').height() / 2) - (bpLogoHeightMobile / 2),
        'opacity':'0',
        'zIndex':'751'
    });

    header.css({
        'width': $(window).width(),
        opacity:'1',
        'display':'inline'
    });

    characterBlack.css({
        opacity:'0'
    });
    
    menuBtn.css({
        'width': menuBtnWidthMobile,
        'height': menuBtnHeightMobile,
        'top':($('#header').height() / 2) - (menuBtnHeightMobile / 2)
    });
    
    menuBtnBarContainer.css({
        'width': menuBtnWidthMobile,
        'height': menuBtnHeightMobile
    });
    
    menuBtnBar.css({
        'width': menuBtnWidthMobile,
        'backgroundColor':'#000000'
    });

    menuBtnBar.eq(0).css(
        'width',menuBtnWidthMobile
    );

    menuBtnBar.eq(1).css(
        'top', (menuBtnHeightMobileHalf - 1) + 'px'
    );

    menuBtnBar.eq(2).css({
        'top': (menuBtnHeightMobile - 2) + 'px',
        'width':menuBtnWidthMobile
    });

    masthead.css({
        'width': $(window).width(),
        'height': $(window).height() / 2
    });

    mastheadFeatureOverlay.css({
        'width': $(window).width(),
        'height': $(window).height() / 2,
        'opacity': '0'
    });
        
    mastheadFeatureTextIntroContainer.hide();

    mastheadVideoOverlay.css({
        'width': $(window).width(),
        'height': $(window).height() / 2,
        'opacity': '0'
    });

    mastheadFeatureOverlayRollover.css({
        'width': $(window).width(),
        'height': $(window).height() / 2
    });

    mastheadFeatureContainer.css({
        'width': mastheadFeatureLength * masthead.width(),
        'height': $(window).height() / 2
    });

    mastheadFeature.css({
        'width': $(window).width(),
        'height': $(window).height() / 2
    });
        
    mastheadVideoContainer.hide();
        
    mastheadVideo.hide();
        
    mastheadFeatureTextBlackfade.hide();

    sectionContainer.css({
        'width': $(window).width() * 0.8 + 'px',
        'top': $(window).height() / 2,
        'left': $(window).width() * 0.1 + 'px'
    }); 

    sectionInfoContainer.css({
        'width': $(window).width() * 0.8 + 'px',
        'height': '100px',
        'borderBottomWidth':'1px',
        'borderBottomStyle':'solid',
        'borderBottomColor':'rgba(0,0,0,0.1)'
    });  
        
    sectionInfoVideoContainer.css({
        'opacity':'0',
        'zIndex':'-1'
    }); 
        
    sectionInfoVideoContainerOverlay.css({
        'opacity':'0',
        'zIndex':'-1'
    }); 
        
    sectionInfoVideo.css({
        'opacity':'0',
        'zIndex':'-1'
    });

    sectionInfo.css({
        'width': $(window).width() * 0.8 + 'px',
        'paddingTop': '30px',
        'textAlign': 'left'
    }); 
        
    section.css({
        'width': $(window).width() * 0.8 + 'px',
        'paddingTop': '30px'
    });
        
    sectionFeatured.css({
        'borderLeftWidth':'none',
        'borderLeftStyle':'none',
        'borderLeftColor':'none',
        'paddingBottom':'30px'
    });
        
    sectionTileRow.css({
        'width':sectionTileRowWidthMobile,
        'height':sectionTileRowHeightMobile,
        'marginBottom':sectionTileRowMarginBottomMobile
    });
        
    sectionTile.css({
        'width':sectionTileWidthMobile,
        'height':sectionTileHeightMobile
    });
        
    featuredTile.css({
        'width':featuredTileWidthMobile,
        'height':featuredTileHeightMobile
    });
        
    featuredTileTitle.css(
        'width',featuredTileWidthMobile
    ); 
        
    sectionTileTitle.css(
        'width',sectionTileWidthMobile
    ); 
        
    sectionTileOverlay.css({
        'width':'100%',
        'height':'100%'
    });
        
    sectionTileBackground.css({
        'width':'100%',
        'height':'100%'
    });
    
    sectionTileBackgroundImage.css({
        'width':'100%',
        'height':'auto'
    });
        
    footer.hide();
        
    }
    
    if ($(window).width() < 1024) {
        masthead.css({
            'backgroundImage':mastheadMobileBackground,
            'backgroundRepeat':'no-repeat',
            'backgroundSize':'cover',
            'backgroundPosition':'center'
        });
    } else {
        masthead.css({
            'backgroundImage':mastheadDesktopBackground,
            'backgroundRepeat':mastheadDesktopBackground,
            'backgroundSize':mastheadDesktopBackground,
            'backgroundPosition':mastheadDesktopBackground
        });
    }

    sectionBody.css(
        'paddingTop', '30px'
    )*
    
    mastheadVideoIframe.velocity({
       translateY:'-' + ($(window).height() * 0.125) - ($(window).height() * 0.25) + 'px'
    }, {
        duration:0
    });
    
    sectionInfoVideo.velocity({
       translateX:'-' + ((sectionInfoVideo.width() / 2) - (sectionInfoVideoContainer.width() / 2)) + 'px',
       translateY:'-' + $(window).height() * 0.125 + 'px'
    }, {
        duration:0
    });
    
    for (i = 0; i < sectionTile.length; i++) {
        var current = sectionTile.eq(i);
        if ($(window).width() > 1024) {
        if (current.is(':last-child')) {
                current.css('marginRight','0');
        } else {
                current.css('marginRight',($(window).width() * 0.5 - 25) * 0.05);
        }
        } else {
        if (current.is(':last-child')) {
                current.css('marginRight','0');
        } else {
                current.css('marginRight',($(window).width() * 0.8) * 0.05);
        }
        }
    }
        
        if (menuBtn.hasClass('active')) {
        menuBtn.removeClass('active');
        
        //Character White Click Active
        characterWhite.stop(1, 0).css('zIndex','48');
			
        //BP Logo Black Click Active
        bpLogoDrawBlack.stop(1, 0).velocity({
            opacity: "1"
        }, {
            duration: 500,
            easing: 'easeOutCirc'
        });
        
        //BP Logo White Click Inactive
        bpLogoDrawWhite.stop(1, 0).velocity({
            opacity: "0"
        }, {
            duration: 500,
            easing: 'easeOutCirc'
        });
        
        //Menu Background Click Active
        menuBackground.stop(1, 0).velocity({
            opacity: "0"
        }, {
            duration: 500,
            easing: 'easeOutCirc',
            complete: function(){
                $(this).remove();
            }
        });
        
        //Nav Container Click Active
        navContainer.stop(1, 0).velocity({
            opacity: "0"
        }, {
            duration: 500,
            easing: 'easeOutCirc',
            complete: function(){
                $(this).remove();
            }
        });
        
        //Nav Items Click Active
        navItems.stop(1, 0).velocity({
            opacity: "0"
        }, {
            duration: 500,
            easing: 'easeOutCirc',
            complete: function(){
                $(this).remove();
            }
        });
        
        //Nav Item Click Active
        navItem.stop(1, 0).velocity({
            opacity: "0"
        }, {
            duration: 500,
            easing: 'easeOutCirc',
            complete: function(){
                $(this).remove();
            }
        });
        
        //Nav Item Inner Click Active
        navItemInner.stop(1, 0).velocity({
            opacity: "0"
        }, {
            duration: 500,
            easing: 'easeOutCirc',
            complete: function(){
                $(this).remove();
            }
        });
        
        //Nav Item Inner Background Click Active
        navItemInnerBackground.stop(1, 0).velocity({
            opacity: "0"
        }, {
            duration: 500,
            easing: 'easeOutCirc',
            complete: function(){
                $(this).remove();
            }
        });
        
        //Menu Circle Click Active
        menuCircle.stop(1, 0).velocity({
            opacity: "0",
            width:['600', '400'],
            height:['600', '400'],
            translateY:[
                ($(window).height() / 2) - 300 + 'px',
                ($(window).height() / 2) - 200 + 'px'
            ],
            translateX:[
                ($(window).width() / 2) - 300 + 'px',
                ($(window).width() / 2) - 200 + 'px'
            ]
        }, {
            duration: 500,
            easing: 'easeOutCirc',
            complete: function(){
                $(this).remove();
            }
        });
            
        if ($(window).width() > 1024) {
        
        //Masthead Video Click Active
        mastheadVideo.show();
            
        //Top Menu Button Bar Click Active
        menuBtnBar.eq(0).stop(1, 0).velocity({
            rotateZ: "0",
            transformOriginX: '0',
            transformOriginY: '0',
            width: menuBtnWidth,
            backgroundColor: '#000000'
        }, {
            duration: 500,
            easing: 'easeOutCirc'
        });
        
        //Middle Menu Button Bar Click Active
        menuBtnBar.eq(1).stop(1, 0).velocity({
            opacity:'1',
            backgroundColor: '#000000'
        }, {
            duration: 500,
            easing: 'easeOutCirc'
        });
        
        //Bottom Menu Button Bar Click Active
        menuBtnBar.eq(2).stop(1, 0).velocity({
            rotateZ: "0",
            transformOriginX: '0',
            transformOriginY: '0',
            width: menuBtnWidth,
            backgroundColor: '#000000'
        }, {
            duration: 500,
            easing: 'easeOutCirc'
        });
            
        //Work In Progress Click Active    
        workInProgress.css('color','#000000');
            
        //Copyright Click Active    
        copyright.css('color','#000000');
            
        //Copyright Click Active  
        $('#copyright > a').css('color','#000000');
            
        } else {
        
        //Masthead Video Click Active
        mastheadVideo.hide();
        
        //Top Menu Button Bar Click Active
        menuBtnBar.eq(0).stop(1, 0).velocity({
            rotateZ: "0",
            transformOriginX: '0',
            transformOriginY: '0',
            width: menuBtnWidthMobile,
            backgroundColor: '#000000'
        }, {
            duration: 500,
            easing: 'easeOutCirc'
        });
        
        //Middle Menu Button Bar Click Active
        menuBtnBar.eq(1).stop(1, 0).velocity({
            opacity:'1',
            backgroundColor: '#000000'
        }, {
            duration: 500,
            easing: 'easeOutCirc'
        });
        
        //Bottom Menu Button Bar Click Active
        menuBtnBar.eq(2).stop(1, 0).velocity({
            rotateZ: "0",
            transformOriginX: '0',
            transformOriginY: '0',
            width: menuBtnWidthMobile,
            backgroundColor: '#000000'
        }, {
            duration: 500,
            easing: 'easeOutCirc'
        });
        }
            
        }
    
    });

    /*******************************************************
        End Window Resize Behaviors
    *******************************************************/


});