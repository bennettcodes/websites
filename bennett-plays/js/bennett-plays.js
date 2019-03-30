if ($(window).width() > 1024) {
$('#map').css({
   'width': $(window).width() * 0.75 + 'px', 
   'height': $(window).height() / 2 + 'px' 
});
$('.tile-title h4').css({
	'fontSize':'1.25vw', 
	'lineHeight':'1.25vw' 
});
} else {
$('#map').css({
   'width': $(window).width() + 'px', 
   'height': $(window).height() / 2 + 'px' 
});
$('.tile-title h4').css({
	'fontSize':'6vw', 
	'lineHeight':'6vw' 
});
}

$(window).on('load', function() {
    
    /*******************************************************
        Start Variable Definitions
    *******************************************************/
    

    var
        heading1 = $('h1'),
        heading2 = $('h2'),
        heading3 = $('h3'),
        heading4 = $('h4'),
        paragraph = $('p'),
        
        container = $('#container'),
        loading = $('.loading'),
        loadingText = $('.loading-text'),
        menuBtn = $('#menu-btn'),
        
        map = $('#map'),
        
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
        mastheadFeaturedLogoWidthMobile = $(window).width() * 0.5,
        mastheadFeaturedLogoHeight = 'auto',
        mastheadFeaturedLogoHeightMobile = 'auto',
        
        
        mastheadFeatureTextInitialDelay = 250,
        mastheadFeatureTextIntroContainer = $('.masthead-feature-text-intro-container'),
        mastheadFeatureTextIntro = $('.masthead-feature-text-intro'),
        mastheadFeatureTextIntroButton = $('.masthead-feature-text-intro-button'),
        mastheadFeatureTextIntroButton2 = $('.masthead-feature-text-intro-button2'),
        rightArrowContainer = $('.right-arrow-container'),
        rightArrow = $('.right-arrow'),
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
        mastheadMobileBackground = 'url(http://bennettcodes.com/sites/full/bennett-plays-live/images/homepage-masthead-battlefront-mobile-bg.jpg)',
        mastheadDesktopBackground = 'none',
        
        sectionContainer = $('#section-container'),
        section = $('.section'),
        sectionFeatured = $('.featured'),
        sectionFeaturedWidth = $(window).width() * 0.5,
        sectionInfoContainer = $('#section-info-container'),
        sectionInfoVideoContainer = $('.section-info-video-container'),
        sectionInfoVideoContainerOverlay = $('.section-info-video-container-overlay'),
        sectionInfoVideo = $('.section-info-video'),
        sectionInfoContainerWidth = $(window).width() * 0.25,
        sectionInfo = $('.section-info'),
        sectionInfoWidth = ($(window).width() * 0.25) - 20,
        featured = $('.featured'),
        sectionHeading = $('.section-heading'),
        sectionBody = $('.section-body'),
        
        sectionTileRow = $('.section-tile-row'),
        sectionTileRowWidth = $(window).width() * 0.5,
        sectionTileRowWidthMobile = $(window).width(),
        sectionTileRowHeight = sectionTileRowWidth * 0.3,
        sectionTileRowHeightMobile = sectionTileRowWidthMobile * 0.3,
        sectionTileRowMarginBottom = sectionTileRowWidth * 0.05,
        sectionTileRowMarginBottomMobile = '0px',
        sectionTile = $('.section-tile'),
        sectionTileWidth = sectionTileRowWidth * 0.3,
        sectionTileWidthMobile = sectionTileRowWidthMobile,
        sectionTileHeight = sectionTileRowWidth * 0.3,
        sectionTileHeightMobile = sectionTileRowHeightMobile,
		sectionTileMarginBottomMobile = sectionTileRowWidth * 0.05,
        featuredTile = $('.featured-tile'),
        featuredTileWidth = sectionTileRowWidth * 0.65,
        featuredTileWidthMobile = sectionTileRowWidthMobile,
        featuredTileHeight = sectionTileRowWidth * 0.3,
        featuredTileHeightMobile = sectionTileRowHeightMobile,
		featuredTileMarginBottomMobile = sectionTileRowWidth * 0.05,
        tileTitle = $('.tile-title'),
        tileTitleH4 = $('.tile-title > h4'),
        featuredTileTitle = $('.featured-tile-title'),
        sectionTileTitle = $('.section-tile-title'),
        featuredTileTitleBackgroundHover = $('.featured-tile-title-background-hover'),
        sectionTileTitleBackgroundHover = $('.section-tile-title-background-hover'),
        sectionTileOverlay = $('.section-tile-overlay'),
        featuredTileBackground = $('.featured-tile-background'),
        featuredTileBackgroundImage = $('.featured-tile-background > img'),
        sectionTileBackground = $('.section-tile-background'),
        sectionTileBackgroundImage = $('.section-tile-background > img'),
		
		transition = $('.transition'),
		transitionWhiteFade = $('.transition.white-fade'),
        
        footer = $('#footer'),
        footerWidth = $(window).width() * 0.25,
        footerHeight = $(window).height() * 0.1,
        workInProgress = $('#wip'),
        menuLabel = $('#menu-label'),
        copyright = $('#copyright')
        ;

    /*******************************************************
        End Variable Definitions
    *******************************************************/




    /*******************************************************
        Start CSS Definitions (main purple value is #6000ff)
    *******************************************************/

    if ($(window).width() > 1024) {

    container.css({
        'width': 'auto',
        'height': $(window).height()
    });
        
    heading4.css({
        'fontSize':'1.25vw', 
        'lineHeight':'1.25vw' 
    });
        
    $('.tile-title').css({
        'fontSize':'1.25vw', 
        'lineHeight':'1.25vw' 
    });
        
    $('.tile-title h4').css({
        'fontSize':'1.25vw', 
        'lineHeight':'1.25vw' 
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
        'height': $(window).height() * 2,
		'bottom':-($(window).height()),
        'opacity':'0'
    });

    masthead.css({
        'width': mastheadWidth,
        'height': mastheadHeight,
        opacity:'1',
        translateX:'0'
    });
        
    map.css({
        'width': $(window).width() * 0.75,
        'height': $(window).height() / 2
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
        width:mastheadFeatureTextIntro.width() + 'px',
        /*'minWidth': mastheadWidth / 2,*/
        'height': 'auto',
        'opacity':'0',
        'padding':'1vw 2vw 1vw 0',
        'transform':'translateX(0px) translateY(0px)'
    });
        
    rightArrow.css({
        'width':mastheadFeatureTextIntro.outerWidth() - mastheadFeatureTextIntroButton.outerWidth() + 'px',
        /*'minWidth': mastheadWidth / 2,*/
        /*'minWidth': mastheadWidth / 2,*/
        'height': (mastheadFeatureTextIntroButton.height() + ($(window).width() * 0.02)) + 'px'
    });
        
    rightArrowContainer.css({
        'width':((rightArrow.width()) * (rightArrow.length)) + 'px',
        /*'minWidth': mastheadWidth / 2,*/
        /*'minWidth': mastheadWidth / 2,*/
        'height': (mastheadFeatureTextIntroButton.height() + ($(window).width() * 0.02)) + 'px'
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
        'width': $(window).width() * 0.75 + 'px',
        'top': $(window).height() / 2,
        'left':'0',
        'opacity':'1'
    });

    sectionInfoContainer.css({
        'width': sectionInfoWidth,
        'height': $(window).height(),
        'left':'0',
        'opacity':'1',
        'borderBottomWidth':'none',
        'borderBottomStyle':'none',
        'borderBottomColor':'none'
    }); 
        
    sectionInfoContainer.find('h1, h2, h3, h4, h5, h6, p, a, li').css({
        'lineHeight':'1.5em',
        'textAlign':'right'
    });

    sectionInfoVideoContainer.css({
        'width': sectionInfoWidth,
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
        'opacity':'0'
    });

    sectionInfo.css({
        'width': sectionInfoWidth,
		'lineHeight':'3em',
		'paddingTop':'30px',
        'opacity':'0'
    }); 
        
    sectionFeatured.css({
        'width': sectionFeaturedWidth,
        'minHeight': $(window).height(),
        'paddingBottom':'30px',
        'paddingTop': '30px',
        'borderLeft':'1px solid rgba(0,0,0,0.1)'
    }); 
        
    sectionHeading.css({
        'width': '100%',
		'opacity':'0',
        'transform':'translateX(20px)'
	});
        
    sectionBody.css({
        'width': '100%',
		'opacity':'0',
        'transform':'translateX(20px)'
	});
        
    sectionTileRow.css({
        'width':sectionTileRowWidth,
        'height':sectionTileRowHeight,
        'marginBottom':sectionTileRowMarginBottom,
        'transform':'translateX(20px)'
    });
        
    sectionTile.css({
        'width':sectionTileWidth,
        'height':sectionTileHeight,
        'opacity':'0',
		'marginBottom':'0'
    });
        
    featuredTile.css({
        'width':featuredTileWidth,
        'height':featuredTileHeight,
		'marginBottom':'0'
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
        
    featuredTileTitleBackgroundHover.css({
        'width':'100%',
        'height':'100%'
    });
        
    sectionTileTitleBackgroundHover.css({
        'width':'100%',
        'height':'100%'
    });
        
    featuredTileBackground.css({
        'width':'100%',
        'height':'100%'
    });
        
    sectionTileBackground.css({
        'width':'100%',
        'height':'100%'
    });
        
    featuredTileBackgroundImage.css({
        'width':'100%',
        'height':'auto'
    });
    
    sectionTileBackgroundImage.css({
        'width':'100%',
        'height':'auto'
    }).velocity({
        translateY:'0px'
    }, {
        duration:0
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
        
    menuLabel.css({
        'width':menuBtn.width() + 'px',
        'height':'auto',
        'lineHeight':'1em',
        'top': bpLogoHeight + 50,
        'right': '25px'
    });
        
    copyright.css({
        'width':($(window).width() * 0.25) - 25,
        'height':'auto',
        'lineHeight':'1em'
    });
        
    } else { 
        
    sectionHeading.css({
        'width': $(window).width() - 40 + 'px',
        'padding': '30px 20px',
		'opacity':'0'
	});
        
    sectionBody.css({
        'width': $(window).width() - 40 + 'px',
        'padding': '30px 20px',
		'opacity':'0'
	});

    container.css({
        'width': 'auto',
        'height': $(window).height()
    });
        
    heading4.css({
        'fontSize':'6vw', 
        'lineHeight':'6vw' 
    });
        
    $('.tile-title').css({
        'fontSize':'6vw', 
        'lineHeight':'6vw' 
    });
        
    $('.tile-title h4').css({
        'fontSize':'6vw', 
        'lineHeight':'6vw' 
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
        
    mastheadFeaturedLogo.css({
        'width':mastheadFeaturedLogoWidthMobile,
        'height':mastheadFeaturedLogoHeightMobile
    });

    mastheadFeature.css({
        'width': $(window).width(),
        'height': $(window).height() / 2
    });
        
    mastheadVideoContainer.hide();
        
    mastheadVideo.hide();
        
    sectionInfoVideoContainer.hide();
        
    mastheadFeatureTextBlackfade.hide();

    sectionContainer.css({
        'width': $(window).width() + 'px',
        'top': $(window).height() / 2,
        'opacity':'1'
    }); 

    sectionInfoContainer.css({
        'width': $(window).width() + 'px',
        'height':'auto',
        'minHeight': '150px',
        'padding': '20px 0',
        'opacity':'1',
        'borderRightWidth':'none',
        'borderRightStyle':'none',
        'borderRightColor':'none',
        'borderBottomWidth':'1px',
        'borderBottomStyle':'solid',
        'borderBottomColor':'rgba(0,0,0,0.1)'
    }); 
        
    sectionInfoContainer.find('h1, h2, h3, h4, h5, h6, p, a, li').css({
        'lineHeight':'1.5em',
        'textAlign':'center'
    });
        
    sectionInfoVideoContainer.hide();
        
    sectionInfoVideoContainerOverlay.css({
        'opacity':'0',
        'zIndex':'-1'
    }); 
        
    sectionInfoVideo.css({
        'opacity':'0',
        'zIndex':'-1'
    });

    sectionInfo.css({
        'width': 'auto',
        'height': 'auto',
		'lineHeight':'1.5em',
        'opacity':'0',
        'position':'relative'
    }); 
        
    sectionFeatured.css({
		'width':'auto',
        'borderLeft':'none',
        'paddingLeft':'0',
        'paddingBottom':'30px',
        'paddingTop': '30px'
    });
        
    sectionTileRow.css({
        'width':sectionTileRowWidthMobile,
        'height':'auto',
        'marginBottom':sectionTileRowMarginBottomMobile,
        'transform':'translateX(0)'
    });
        
    sectionTile.css({
        'width':sectionTileWidthMobile,
        'height':sectionTileHeightMobile,
		'marginBottom':sectionTileMarginBottomMobile,
        'marginRight':'0'
    });
        
    featuredTile.css({
        'width':featuredTileWidthMobile,
        'height':featuredTileHeightMobile,
		'marginBottom':featuredTileMarginBottomMobile
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
        
    featuredTileTitleBackgroundHover.css({
        'width':'100%',
        'height':'100%'
    });
        
    sectionTileTitleBackgroundHover.css({
        'width':'100%',
        'height':'100%'
    });
        
    featuredTileBackground.css({
        'width':'100%',
        'height':'100%'
    });
        
    sectionTileBackground.css({
        'width':'100%',
        'height':'100%'
    });
        
    featuredTileBackgroundImage.css({
        'width':'100%',
        'height':'auto'
    });
    
    sectionTileBackgroundImage.css({
        'width':'100%',
        'height':'auto'
    }).velocity({
        translateY:'-' + sectionTileBackgroundImage.height() / 2 + 'px'
    }, {
        duration:0
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
    
    function sectionTileHover() {
        sectionTile.hover(function() {
        if (!$(this).hasClass('featured-tile')) {
       $(this).find(sectionTileBackgroundImage).stop(1,0).velocity({
           width:'125%',
           opacity:'0.5'
       },500,'easeOutCirc');
       $(this).find('.tile-title').stop(1,0).velocity({
           backgroundColor:'rgba(0,0,0,1)',
           paddingTop:'20px'
       },500,'easeOutCirc');
        $(this).find(sectionTileTitleBackgroundHover).stop(1,0).velocity({
           opacity:'1',
        });
        }
    }, function() {
        if (!$(this).hasClass('featured-tile')) {
       $(this).find(sectionTileBackgroundImage).stop(1,0).velocity({
           width:'100%',
           opacity:'1'
       },500,'easeOutCirc');
       $(this).find('.tile-title').stop(1,0).velocity({
           backgroundColor:'rgba(0,0,0,0.3)',
           paddingTop:'10px'
       },500,'easeOutCirc');
        $(this).find(sectionTileTitleBackgroundHover).stop(1,0).velocity({
           opacity:'0',
        });
        }
    });
    }
    
    function featuredTileHover() {
        sectionTile.hover(function() {
        if ($(this).hasClass('featured-tile')) {
       $(this).find(featuredTileBackgroundImage).stop(1,0).velocity({
           width:'125%',
           opacity:'0.5'
       },500,'easeOutCirc');
       $(this).find('.tile-title').stop(1,0).velocity({
           backgroundColor:'rgba(76,14,175,1)',
           paddingTop:'20px'
       },500,'easeOutCirc');
        $(this).find(featuredTileTitleBackgroundHover).stop(1,0).velocity({
           opacity:'1',
        });
        }
    }, function() {
        if ($(this).hasClass('featured-tile')) {
       $(this).find(featuredTileBackgroundImage).stop(1,0).velocity({
           width:'100%',
           opacity:'1'
       },500,'easeOutCirc');
       $(this).find('.tile-title').stop(1,0).velocity({
           backgroundColor:'rgba(0,0,0,0.3)',
           paddingTop:'10px'
       },500,'easeOutCirc');
        $(this).find(featuredTileTitleBackgroundHover).stop(1,0).velocity({
           opacity:'0',
        });
        }
    });
    }
            
    if ($(window).width() > 1024) {
        sectionTileHover();
        featuredTileHover();
    }
    
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

        transition.stop(1,1).velocity({
			opacity:['0', '1']
		}, {
			duration:500,
			easing:'swing',
			complete:function(){transition.fadeOut(0);}
		});
                    
    regularLink.click(function (e) {
        e.preventDefault();                   // prevent default anchor behavior
        var goTo = this.getAttribute("href"); // store anchor href

        transition.stop(1,1).fadeIn(0).velocity({
			opacity:['1', '0']
		}, {
			duration:500,
			easing:'swing'
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
        delay:mastheadFeatureTextInitialDelay + 250,
        complete:function() {}
    });
    
    mastheadFeatureTextIntroButton.velocity({
        width:mastheadFeatureTextIntro.width() + 'px',
        opacity:['1','0'],
        rotateY:['0deg','90deg'],
        translateX:['0','-300px'],
        translateY:['0','20px']
    }, {
        duration:2000,
        easing:'easeOutExpo',
        delay:mastheadFeatureTextInitialDelay + 250,
        complete:function() {
        }
    });
    
    mastheadFeatureTextIntroButton2.css({
        'width':'5px',
        /*'minWidth': mastheadWidth / 2,*/
        'height': ($('.masthead-feature-text-intro-button').height() + ($(window).width() * 0.02)) + 'px',
        'opacity':'0',
        'padding':'0 2vw 0 0',
        'transform':'translateX(-' + ((mastheadWidth * 0.75) - (mastheadFeatureTextIntroButton.width()) - ($(window).width() * 0.02) - ((mastheadFeatureTextIntro.outerWidth() - mastheadFeatureTextIntroButton.outerWidth()))) + 'px)'
    }).velocity({
        opacity:['1', '0'],
/*        rotateY:['0deg','90deg'],
        translateY:['0','20px'],
        translateZ:['0','20px']*/
    }, {
        duration:2000,
        easing:'easeOutCirc',
        delay:mastheadFeatureTextInitialDelay + 1000,
		queue:false
    });
        
    rightArrowContainer.velocity({
        marginLeft:[
            '0px',
            '-' + (rightArrow.width() * (rightArrow.length - 1)) + 'px'
        ],
        opacity:['1','easeIn','0']
    }, {
        duration:2000,
        delay:mastheadFeatureTextInitialDelay + 1000,
        easing:'easeOutQuart',
		complete: function() {
            var unclicked = true;
			$(this).css('marginLeft','0px').hover(function() {
                
                if (unclicked) {
                $(this).stop(1,0).velocity({
                    marginLeft:[
                        '0px',
                        '-' + rightArrow.width() + 'px'
                    ]
                }, {
                    duration:1000,
                    easing:'easeOutCirc'
                });
                }
        
	mastheadFeatureTextIntroButton2.stop(1,0).velocity({
		backgroundColor: [
            '#ccadff',
            '#ffffff'
            
        ]
	}, {
		duration:1000,
		easing:'easeOutCirc'
	});
            }, function() {
                
                if (unclicked) {
                $(this).stop(1,0).velocity({
                    marginLeft:[
                        '-' + rightArrow.width() + 'px',
                        '0px'
                    ]
                }, {
                    duration:1000,
                    easing:'easeOutCirc'
                });
                }
        
	mastheadFeatureTextIntroButton2.stop(1,0).velocity({
		backgroundColor: [
            '#ffffff',
            '#ccadff'
        ]
	}, {
		duration:1000,
		easing:'easeOutCirc'
	});
            });
            
            $(this).css('marginLeft','0px').mouseup(function() {
                unclicked = false;
                $(this).stop(1,0).velocity({
                    marginLeft:[
                        '-' + (rightArrow.width() * 5) + 'px',
                        '0px'
                    ]
                }, {
                    duration:1000,
                    easing:'easeOutCirc'
                });
            });
		}
    });
        
	mastheadFeatureTextIntroButton2.velocity({
		width: [
            (mastheadFeatureTextIntro.outerWidth() - mastheadFeatureTextIntroButton.outerWidth()) - $(window).width() * 0.02 + 'px',
        '5px'
        ]
	}, {
		duration:1000,
		easing:'easeInOutCirc',
		delay:mastheadFeatureTextInitialDelay + 750,
		queue:false
	});
    
    characterBlack.velocity({
        opacity:['0.1', '0'],
        translateY:[
            $(window).height() - $(this).height() * 1.25,
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
            $(window).height() - $(this).height() * 1.25,
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
        translateX:['-20px', '-20px'],
        translateY:['0','100px']
    }, {
        duration:2000,
        easing:'easeOutExpo',
        delay:650
    });
 
    
    sectionHeading.velocity({
        opacity:['1', '0'],
        translateX:['20px', '20px'],
        translateY:['0','100px']
    }, {
        duration:2000,
        easing:'easeOutCirc',
        delay:750
    });
 
    
    sectionBody.velocity({
        opacity:['1', '0'],
        translateX:['20px', '20px'],
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
        
        //Section Info Video Click Inactive
        sectionInfoVideoContainer.hide();
        
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
            '<li class="nav-item"><a class="nav-item-link" href="http://bennettcodes.com/sites/full/bennett-plays-live"><div class="nav-item-inner-background"></div><div class="nav-item-inner">Home</div></a></li>' +
            '<li class="nav-item"><a class="nav-item-link" href="http://bennettcodes.com/sites/full/bennett-plays-live/platforms"><div class="nav-item-inner-background"></div><div class="nav-item-inner">Platforms</div></a></li>' +
            '<li class="nav-item"><a class="nav-item-link" href="http://bennettcodes.com/sites/full/bennett-plays-live/platforms"><div class="nav-item-inner-background"></div><div class="nav-item-inner">Reviews</div></a></li>' +
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
        'height': $(window).height() * 2,
		'bottom':-($(window).height()),
		'zIndex':'710',
		'opacity':'0.2'
        });
		} else {
		characterWhite.css({
        'width': $(window).width(),
        'height': $(window).height() * 2,
		'bottom':-($(window).height()),
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

					transition.stop(1,1).fadeIn(0).velocity({
						opacity:['1', '0']
					}, {
						duration:500,
						easing:'swing'
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
            opacity: ['0.2', '0']
        }, {
            duration: 500,
            easing: 'easeOutCirc'
        });
            
        //Work In Progress Click Inactive      
        workInProgress.css('color','#ffffff');
            
        //Menu Label Click Inactive      
        menuLabel.html('Close').css('color','#ffffff');
            
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
        
        //Section Info Video Click Active
        sectionInfoVideoContainer.show();
        
        //BP Logo White Click Active
        bpLogoDrawWhite.stop(1, 0).velocity({
            opacity: "0"
        }, {
            duration: 500,
            easing: 'easeOutCirc'
        });
            
        //Work In Progress Click Active    
        workInProgress.css('color','rgba(168,124,255,1)');
            
        //Menu Label Click Active    
        menuLabel.html('Menu').css('color','#000000');
            
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
        
    if ($(window).width() > 1024) {
$('#map').css({
   'width': $(window).width() * 0.75 + 'px', 
   'height': $(window).height() / 2 + 'px' 
});
} else {
$('#map').css({
   'width': $(window).width() + 'px', 
   'height': $(window).height() / 2 + 'px' 
});
    }

        heading1 = $('h1'),
        heading2 = $('h2'),
        heading3 = $('h3'),
        heading4 = $('h4'),
        paragraph = $('p'),
        
        container = $('#container'),
        loading = $('.loading'),
        loadingText = $('.loading-text'),
        menuBtn = $('#menu-btn'),
        
        map = $('#map'),
        
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
        
        menuBtnBarContainer = $('#menu-btn-bar-container'),
        menuBtnBar = $('.menu-btn-bar'),
        menuBackground = $('#menu-bg'),
        header = $('#header'),
        
        featurePause = 3000,
        masthead = $('#masthead'),
        mastheadWidth = $(window).width() * 0.75,
        mastheadHeight = $(window).height() / 2,
        
        mastheadFeatureContainer = $('#masthead-feature-container'),
        mastheadFeature = $('.masthead-feature'),
        mastheadFeaturedLogo = $('#masthead-featured-logo'),
        mastheadFeaturedLogoWidth = ($(window).width() * 0.75) / 5,
        mastheadFeaturedLogoWidthMobile = $(window).width() * 0.5,
        mastheadFeaturedLogoHeight = 'auto',
        mastheadFeaturedLogoHeightMobile = 'auto',
        
        
        mastheadFeatureTextInitialDelay = 250,
        mastheadFeatureTextIntroContainer = $('.masthead-feature-text-intro-container'),
        mastheadFeatureTextIntro = $('.masthead-feature-text-intro'),
        mastheadFeatureTextIntroButton = $('.masthead-feature-text-intro-button'),
        mastheadFeatureTextIntroButton2 = $('.masthead-feature-text-intro-button2'),
        rightArrowContainer = $('.right-arrow-container'),
        rightArrow = $('.right-arrow'),
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
        mastheadMobileBackground = 'url(http://bennettcodes.com/sites/full/bennett-plays-live/images/homepage-masthead-battlefront-mobile-bg.jpg)',
        mastheadDesktopBackground = 'none',
        
        sectionContainer = $('#section-container'),
        section = $('.section'),
        sectionFeatured = $('.featured'),
        sectionFeaturedWidth = $(window).width() * 0.5,
        sectionInfoContainer = $('#section-info-container'),
        sectionInfoVideoContainer = $('.section-info-video-container'),
        sectionInfoVideoContainerOverlay = $('.section-info-video-container-overlay'),
        sectionInfoVideo = $('.section-info-video'),
        sectionInfoContainerWidth = $(window).width() * 0.25,
        sectionInfo = $('.section-info'),
        sectionInfoWidth = ($(window).width() * 0.25) - 20,
        featured = $('.featured'),
        sectionHeading = $('.section-heading'),
        sectionBody = $('.section-body'),
        
        sectionTileRow = $('.section-tile-row'),
        sectionTileRowWidth = $(window).width() * 0.5,
        sectionTileRowWidthMobile = $(window).width(),
        sectionTileRowHeight = sectionTileRowWidth * 0.3,
        sectionTileRowHeightMobile = sectionTileRowWidthMobile * 0.3,
        sectionTileRowMarginBottom = sectionTileRowWidth * 0.05,
        sectionTileRowMarginBottomMobile = '0px',
        sectionTile = $('.section-tile'),
        sectionTileWidth = sectionTileRowWidth * 0.3,
        sectionTileWidthMobile = sectionTileRowWidthMobile,
        sectionTileHeight = sectionTileRowWidth * 0.3,
        sectionTileHeightMobile = sectionTileRowHeightMobile,
		sectionTileMarginBottomMobile = sectionTileRowWidth * 0.05,
        featuredTile = $('.featured-tile'),
        featuredTileWidth = sectionTileRowWidth * 0.65,
        featuredTileWidthMobile = sectionTileRowWidthMobile,
        featuredTileHeight = sectionTileRowWidth * 0.3,
        featuredTileHeightMobile = sectionTileRowHeightMobile,
		featuredTileMarginBottomMobile = sectionTileRowWidth * 0.05,
        tileTitle = $('.tile-title'),
        tileTitleH4 = $('.tile-title > h4'),
        featuredTileTitle = $('.featured-tile-title'),
        sectionTileTitle = $('.section-tile-title'),
        featuredTileTitleBackgroundHover = $('.featured-tile-title-background-hover'),
        sectionTileTitleBackgroundHover = $('.section-tile-title-background-hover'),
        sectionTileOverlay = $('.section-tile-overlay'),
        featuredTileBackground = $('.featured-tile-background'),
        featuredTileBackgroundImage = $('.featured-tile-background > img'),
        sectionTileBackground = $('.section-tile-background'),
        sectionTileBackgroundImage = $('.section-tile-background > img'),
		
		transition = $('.transition'),
		transitionWhiteFade = $('.transition.white-fade'),
        
        footer = $('#footer'),
        footerWidth = $(window).width() * 0.25,
        footerHeight = $(window).height() * 0.1,
        workInProgress = $('#wip'),
        menuLabel = $('#menu-label'),
        copyright = $('#copyright')
        ;

    if ($(window).width() > 1024) {

    container.css({
        'width': 'auto',
        'height': $(window).height()
    });
        
    heading4.css({
        'fontSize':'1.25vw', 
        'lineHeight':'1.25vw' 
    });
        
    $('.tile-title').css({
        'fontSize':'1.25vw', 
        'lineHeight':'1.25vw' 
    });
        
    $('.tile-title h4').css({
        'fontSize':'1.25vw', 
        'lineHeight':'1.25vw' 
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
        'height': $(window).height() * 2,
		'bottom':-($(window).height()),
        'opacity':'0.1'
    });

    masthead.css({
        'width': mastheadWidth,
        'height': mastheadHeight,
        opacity:'1',
        translateX:'0'
    });
        
    map.css({
        'width': $(window).width() * 0.75,
        'height': $(window).height() / 2
    });

    mastheadFeatureOverlay.css({
        'width': mastheadWidth,
        'height': mastheadHeight,
        'left': -(masthead.width()) * 0.5
    });

    mastheadVideoOverlay.show().css({
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
		
	mastheadVideo.show();
        
    sectionInfoVideoContainer.show();
        
    mastheadVideoIframe.show().css({
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
        translateY:'25px',
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
        width:mastheadFeatureTextIntro.width() + 'px',
        /*'minWidth': mastheadWidth / 2,*/
        'height': 'auto',
        'opacity':'1',
        'padding':'1vw 2vw 1vw 0',
        'transform':'translateX(0px) translateY(0px)'
    });
        
    mastheadFeatureTextIntroButton2.css({
        'width':((mastheadFeatureTextIntro.outerWidth() - mastheadFeatureTextIntroButton.outerWidth()) - ($(window).width() * 0.02)) + 'px',
        /*'minWidth': mastheadWidth / 2,*/
        'height': (mastheadFeatureTextIntroButton.height() + ($(window).width() * 0.02)) + 'px',
        'opacity':'1',
        'padding':'0 2vw 0 0',
        'transform':'translateX(-' + ((mastheadWidth * 0.75) - (mastheadFeatureTextIntroButton.width()) - ($(window).width() * 0.02) - ((mastheadFeatureTextIntro.outerWidth() - mastheadFeatureTextIntroButton.outerWidth()))) + 'px)'
    });
        
    rightArrow.css({
        'width':mastheadFeatureTextIntro.outerWidth() - mastheadFeatureTextIntroButton.outerWidth() + 'px',
        /*'minWidth': mastheadWidth / 2,*/
        'height': (mastheadFeatureTextIntroButton.height() + ($(window).width() * 0.02)) + 'px'
    });
        
    rightArrowContainer.stop(1,0).css({
        'width':((rightArrow.width()) * (rightArrow.length)) + 'px',
        /*'minWidth': mastheadWidth / 2,*/
        /*'minWidth': mastheadWidth / 2,*/
        'height': (mastheadFeatureTextIntroButton.height() + ($(window).width() * 0.02)) + 'px',
        'marginLeft':'0px'
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
        'width': $(window).width() * 0.75 + 'px',
        'top': $(window).height() / 2,
        'left':'0',
        'opacity':'1'
    });

    sectionInfoContainer.css({
        'width': sectionInfoWidth,
        'height': $(window).height(),
        'left':'0',
        'opacity':'1'
    }).find('h1, h2, h3, h4, h5, h6, p, a, li').css({
        'lineHeight':'1.5em',
        'textAlign':'right',
        'borderBottomWidth':'none',
        'borderBottomStyle':'none',
        'borderBottomColor':'none'
    });

    sectionInfoVideoContainer.show().css({
        'width': sectionInfoWidth,
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
        'opacity':'0'
    });

    sectionInfo.css({
        'width': sectionInfoWidth,
		'lineHeight':'3em',
		'paddingTop':'30px',
        'position':'absolute',
        'opacity':'1',
        'transform':'translateX(-20px)'
    }); 
        
    sectionFeatured.css({
        'width': sectionFeaturedWidth,
        'minHeight': $(window).height(),
        'paddingBottom':'30px',
        'paddingTop': '30px',
        'borderLeft':'1px solid rgba(0,0,0,0.1)'
    }); 
        
    sectionHeading.stop(1,1).css({
        'width': '100%',
		'opacity':'1',
        'padding':'0',
        'transform':'translateX(20px)'
	});
        
    sectionBody.stop(1,1).css({
        'width': '100%',
		'opacity':'1',
        'padding':'0',
        'transform':'translateX(20px)'
	});
        
    sectionTileRow.css({
        'width':sectionTileRowWidth,
        'height':sectionTileRowHeight,
        'marginBottom':sectionTileRowMarginBottom,
        'transform':'translateX(20px)'
    });
        
    sectionTile.css({
        'width':sectionTileWidth,
        'height':sectionTileHeight,
        'opacity':'1',
		'marginBottom':'0'
    });
        
    featuredTile.css({
        'width':featuredTileWidth,
        'height':featuredTileHeight,
		'marginBottom':'0'
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
        
    featuredTileTitleBackgroundHover.css({
        'width':'100%',
        'height':'100%'
    });
        
    sectionTileTitleBackgroundHover.css({
        'width':'100%',
        'height':'100%'
    });
        
    featuredTileBackground.css({
        'width':'100%',
        'height':'100%'
    });
        
    sectionTileBackground.css({
        'width':'100%',
        'height':'100%'
    });
        
    featuredTileBackgroundImage.css({
        'width':'100%',
        'height':'auto'
    });
    
    sectionTileBackgroundImage.css({
        'width':'100%',
        'height':'auto'
    }).velocity({
        translateY:'0px'
    }, {
        duration:0
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
        
    menuLabel.css({
        'width':menuBtn.width() + 'px',
        'height':'auto',
        'lineHeight':'1em',
        'top': bpLogoHeight + 50,
        'right': '25px'
    });
        
    copyright.css({
        'width':($(window).width() * 0.25) - 25,
        'height':'auto',
        'lineHeight':'1em'
    });
        
    } else { 
        
    sectionHeading.css({
        'width': $(window).width() - 40 + 'px',
        'padding': '30px 20px',
		'opacity':'1'
	});
        
    sectionBody.css({
        'width': $(window).width() - 40 + 'px',
        'padding': '30px 20px',
		'opacity':'1'
	});

    container.css({
        'width': 'auto',
        'height': $(window).height()
    });
        
    heading4.css({
        'fontSize':'6vw', 
        'lineHeight':'6vw' 
    });
        
    $('.tile-title').css({
        'fontSize':'6vw', 
        'lineHeight':'6vw' 
    });
        
    $('.tile-title h4').css({
        'fontSize':'6vw', 
        'lineHeight':'6vw' 
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

    mastheadFeatureOverlay.hide().css({
        'width': $(window).width(),
        'height': $(window).height() / 2
    });
        
    mastheadFeatureTextIntroContainer.hide();

    mastheadVideoOverlay.hide().css({
        'width': $(window).width(),
        'height': $(window).height() / 2
    });

    mastheadFeatureOverlayRollover.css({
        'width': $(window).width(),
        'height': $(window).height() / 2
    });

    mastheadFeatureContainer.css({
        'width': mastheadFeatureLength * masthead.width(),
        'height': $(window).height() / 2
    });
        
    mastheadFeaturedLogo.css({
        'width':mastheadFeaturedLogoWidthMobile,
        'height':mastheadFeaturedLogoHeightMobile
    });

    mastheadFeature.css({
        'width': $(window).width(),
        'height': $(window).height() / 2
    });
        
    mastheadVideoContainer.hide();
        
    mastheadVideo.hide();
        
    sectionInfoVideoContainer.hide();
        
    mastheadFeatureTextBlackfade.hide();

    sectionContainer.css({
        'width': $(window).width() + 'px',
        'top': $(window).height() / 2,
        'opacity':'1'
    }); 

    sectionInfoContainer.css({
        'width': $(window).width() + 'px',
        'height':'auto',
        'minHeight': '150px',
        'padding': '20px 0',
        'opacity':'1',
        'borderRightWidth':'none',
        'borderRightStyle':'none',
        'borderRightColor':'none',
        'borderBottomWidth':'1px',
        'borderBottomStyle':'solid',
        'borderBottomColor':'rgba(0,0,0,0.1)'
    }).find('h1, h2, h3, h4, h5, h6, p, a, li').css({
        'lineHeight':'1.5em',
        'textAlign':'center'
    });
        
    sectionInfoVideoContainer.hide();
        
    sectionInfoVideoContainerOverlay.hide();
        
    sectionInfoVideoContainer.hide();

    sectionInfo.css({
        'width': 'auto',
        'height': 'auto',
		'lineHeight':'1.5em',
        'opacity':'1',
        'position':'relative'
    }); 
        
    sectionFeatured.css({
		'width':'auto',
        'borderLeft':'none',
        'paddingLeft':'0',
        'paddingBottom':'30px',
        'paddingTop': '30px'
    });
        
    sectionTileRow.css({
        'width':sectionTileRowWidthMobile,
        'height':'auto',
        'marginBottom':sectionTileRowMarginBottomMobile,
        'transform':'translateX(0)'
    });
        
    sectionTile.css({
        'width':sectionTileWidthMobile,
        'height':sectionTileHeightMobile,
		'marginBottom':sectionTileMarginBottomMobile,
        'marginRight':'0'
    });
        
    featuredTile.css({
        'width':featuredTileWidthMobile,
        'height':featuredTileHeightMobile,
		'marginBottom':featuredTileMarginBottomMobile
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
        
    featuredTileTitleBackgroundHover.css({
        'width':'100%',
        'height':'100%'
    });
        
    sectionTileTitleBackgroundHover.css({
        'width':'100%',
        'height':'100%'
    });
        
    featuredTileBackground.css({
        'width':'100%',
        'height':'100%'
    });
        
    sectionTileBackground.css({
        'width':'100%',
        'height':'100%'
    });
        
    featuredTileBackgroundImage.css({
        'width':'100%',
        'height':'auto'
    });
    
    sectionTileBackgroundImage.css({
        'width':'100%',
        'height':'auto'
    }).velocity({
        translateY:'-' + sectionTileBackgroundImage.height() / 2 + 'px'
    }, {
        duration:0
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
        
        //Section Info Video Click Active
        sectionInfoVideoContainer.show();
            
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
        workInProgress.css('color','rgba(168,124,255,1)');
            
        //Menu Label Click Active    
        menuLabel.html('Menu').css('color','#000000');
            
        //Copyright Click Active    
        copyright.css('color','#000000');
            
        //Copyright Click Active  
        $('#copyright > a').css('color','#000000');
            
        } else {
        
        //Masthead Video Click Active
        mastheadVideo.hide();
        
        //Section Info Video Click Active
        sectionInfoVideoContainer.hide();
        
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