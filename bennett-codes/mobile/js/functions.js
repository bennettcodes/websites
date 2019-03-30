/*
//using TweenLite.set() takes care of all vendor-prefixes
TweenLite.set(pageSection, {
    perspective: 800,
    perspectiveOrigin: 'center',
    transformStyle: 'preserve-3d'
});
TweenLite.set(sectionForeground, {
    transformOrigin: 'center',
    transformStyle: 'preserve-3d'
});
TweenLite.set(sectionMidground, {
    transformOrigin: 'center',
    transformStyle: 'preserve-3d'
});
TweenLite.set(sectionBackground, {
    transformOrigin: 'center',
    transformStyle: 'preserve-3d'
});



var tl = new TimelineLite();

tl.from(sectionBackgroundContainer, 1, {
    scale: 1.3,
    ease: Expo.easeOut
});

tl.from(sectionMidgroundContainer, 1, {
    scale: 4,
    ease: Expo.easeOut
}, 0);

tl.from(sectionForegroundContainer, 1, {
    scale: 8,
    ease: Expo.easeOut
}, 0);

tl.timeScale(0.25);
*/

/*$(window).scroll(function() {
    windowFromTop = $(window).scrollTop(),
    bennettOpacityRate = bennettOpacity - (windowFromTop * 0.0005) - (windowFromTop * 0.000045);
    
    bennett.css({
        opacity:bennettOpacityRate
    });
    
    backgroundImage.css({
        opacity:bennettOpacityRate
    });
    
});*/
/*container.click(function() {
   $(this).velocity({
      translateY:'-' + $(window).height() + 'px' 
   }, {
       duration:1000,
       easing:'easeInOutQuart'
   });
});*/

/*var loading = [
    { elements: $('#loading-trackbar'), properties: { width: '20vw' } },
    { elements: $('#loading-trackbar'), properties: { width: '40vw' } },
    { elements: $('#loading-trackbar'), properties: { width: '60vw' } },
    { elements: $('#loading-trackbar'), properties: { width: '80vw' } },
    { elements: $('#loading-trackbar'), properties: { width: '100vw' }
  }
];

$.Velocity.RunSequence(loading);*/



var portraitPrompt = $('#portrait-prompt');
var portraitPromptText = $('#portrait-prompt-text');
var portraitPromptTextHeader = $('#portrait-prompt-text h6');

function doOnOrientationChange() {

    if (window.matchMedia("(orientation: landscape)").matches) {
        portraitPrompt.show();
        $(window).resize(function() {
           
        if (window.matchMedia("(orientation: portrait)").matches) {
            portraitPromptTextHeader.hide();
            window.location.reload();
        }
        });
    }
}

window.addEventListener('orientationchange', doOnOrientationChange);

// Initial execution if needed
doOnOrientationChange();

/*function readDeviceOrientation() {
    $(window).on("orientationchange", function (event) {
        switch (true) {
        case event.orientation === 'portrait':
            portraitPrompt.hide();
            console.log('portrait');
            break;
        case event.orientation !== 'portrait':
            portraitPrompt.show();
            console.log('landscape');
            break;
        }
    });
};*/

function portfolioCategorySorter() {
    for (i = 0; i < portfolioCategory.length; i++) {
        currentCategory = portfolioCategory.eq(i);

        if (i % 2 === 0) {
            currentCategory.css({
                marginRight: '2%'
            });
        }

        currentCategory.find(portfolioCategoryText).css({
            top: (portfolioCategory.height() / 2) - (currentCategory.find(portfolioCategoryText).height() / 2) + 'px'
        });

    }
}

function initializeProperties() {

    backgroundImage.css({
        width: $(window).width()
    });
    backgroundImage.css({
        left: ((backgroundImageContainer.width() / 2) - (backgroundImage.width() / 2)) + 'px'
    });
    backgroundSky.css({
        width: $(window).width()
    });
    backgroundSky.css({
        left: ((backgroundImageContainer.width() / 2) - (backgroundSky.width() / 2)) + 'px'
    });
    imageBlurred.css({
        bottom: '-' + $(window).width() * 0.16 + '0px',
        left: ((menuBackgroundContainer.width() / 2) - (imageBlurred.width() / 2)) + 'px'
    });

    pageExpand.css({
        opacity: '1'
    });
    pageExpand.css({
        opacity: '0'
    });
    overcast.css({
        opacity: '1'
    });
    overcast.css({
        opacity: '0'
    });
    withLights.css({
        opacity: '1'
    });
    withLights.css({
        opacity: '0'
    });
    withoutLights.css({
        opacity: '1'
    });
    withoutLights.css({
        opacity: '0'
    });


    agouraSky.addClass(activeBackgroundString).css({
        opacity: '1'
    });
    agouraSky.removeClass(activeBackgroundString).css({
        opacity: '0'
    });
    hillsLight.addClass(activeForegroundBackgroundString).css({
        opacity: '1'
    });
    hillsLight.removeClass(activeForegroundBackgroundString).css({
        opacity: '0'
    });
    hillsDark.addClass(activeMiddleBackgroundString).css({
        opacity: '1'
    });
    hillsDark.removeClass(activeMiddleBackgroundString).css({
        opacity: '0'
    });


    pierSky.addClass(activeBackgroundString).css({
        opacity: '1'
    });
    pierSky.removeClass(activeBackgroundString).css({
        opacity: '0'
    });
    ferrisWheel.addClass(activeMiddleBackgroundString).css({
        opacity: '1'
    });
    ferrisWheel.removeClass(activeMiddleBackgroundString).css({
        opacity: '0',
        bottom: '-6vh'
    });
    beach.addClass(activeForegroundBackgroundString).css({
        opacity: '1'
    });
    beach.removeClass(activeForegroundBackgroundString).css({
        opacity: '0',
        bottom: '-6vh'
    });


    desertSky.addClass(activeBackgroundString).css({
        opacity: '1'
    });
    desertSky.removeClass(activeBackgroundString).css({
        opacity: '0'
    });
    desertBackdrop.addClass(activeMiddleBackgroundString).css({
        opacity: '1'
    });
    desertBackdrop.removeClass(activeMiddleBackgroundString).css({
        opacity: '0'
    });
    desertRocks.addClass(activeForegroundBackgroundString).css({
        opacity: '1'
    });
    desertRocks.removeClass(activeForegroundBackgroundString).css({
        opacity: '0'
    });

    portfolioContentBody.css({
        overflowY: 'hidden'
    });

    portfolioContentBodyInner.css({
        marginTop: '30%'
    });

    portfolioCategory.css({
        width: (portfolioCategories.width() * 0.49) - 6,
        marginBottom: portfolioCategories.width() * 0.02 + 'px'
    });

    firstName.css({
        opacity: '0'
    });
    lastName.css({
        opacity: '0'
    });
    firstName2.css({
        opacity: '1'
    });
    bennett2.css({
        opacity: '1',
        left: ($(window).width() / 2) - (bennett2.width() / 2)
    });
    bennett2.css({
        opacity: '0'
    });
    firstName2.css({
        opacity: '0'
    });
    menuItem.css({
        opacity: '0'
    });

    portfolioContentBodyParagraph.css({
        opacity: '0'
    });

}

var isWebkit = /Webkit/i.test(navigator.userAgent),
    isChrome = /Chrome/i.test(navigator.userAgent),
    isMobile = !!("ontouchstart" in window),
    isAndroid = /Android/i.test(navigator.userAgent),
    possibleShapes = [0, 30, 0, 30, 0, 30],
    isIE = document.documentMode;

variableDefinitions();

objectInitializer();

initializeProperties();

portfolioCategorySorter();

function hashChecker() {

    switch (true) {

    case ((window.location.hash === '') || (window.location.hash === '#') || (window.location.hash === '#/')):

        transitions.intro.startAbout();

        break;

    case (window.location.hash === '#/about'):

        transitions.intro.startAbout();

        break;

    case (window.location.hash === '#/resume'):

        transitions.intro.startResume();

        break;

    case (window.location.hash === '#/portfolio'):

        transitions.intro.startPortfolio();

        break;

    case (window.location.hash === '#/contact'):

        transitions.intro.startContact();

        break;
    }

}

function loadSiteItems() {

    portfolioTileContainerInner.html(

        '<div class="portfolio-tile"><a href="http://bennettcodes.com/sites/full/ifa-dec-15" target="_blank"><img class="tile" src="images/portfolio/websites/ifa2.jpg"></a>' +
        '<div class="tile-title"><h2>in Focus Advertising</h2></div></div>' +

        '<div class="portfolio-tile"><a href="http://bennettplays.com" target="_blank"><img class="tile" src="images/portfolio/websites/bp2.jpg"></a>' +
        '<div class="tile-title"><h2>Bennett Plays</h2></div></div>' +

        '<div class="portfolio-tile"><a href="http://bennettcodes.com/sites/landing/greenpros-facebook-12-15" target="_blank"><img class="tile" src="images/portfolio/websites/gp.jpg"></a>' +
        '<div class="tile-title"><h2>Green Pros</h2></div></div>' +

        /*'<div class="portfolio-tile"><a href="http://bennettcodes.com/dev/tests/random/" target="_blank"><img class="tile" src="images/portfolio/websites/aos.jpg"></a>' +
        '<div class="tile-title"><h2>Spades (Work In Progress)</h2></div></div> ' +*/

        '<div class="portfolio-tile"><a href="http://polachecks.com" target="_blank"><img class="tile" src="images/portfolio/websites/pj.jpg"></a>' +
        '<div class="tile-title"><h2>Polacheck\'s Jewelers</h2></div></div>' +

        '<div class="portfolio-tile"><a href="http://infocusadv.com/fazio15" target="_blank"><img class="tile" src="images/portfolio/websites/fc.jpg"></a>' +
        '<div class="tile-title"><h2>Fazio CLeaners</h2></div></div>' +

        '<div class="portfolio-tile"><a href="http://bennettcodes.com/sites/landing/icdc-national-11-15" target="_blank"><img class="tile" src="images/portfolio/websites/icdc.jpg"></a>' +
        '<div class="tile-title"><h2>ICDC College</h2></div></div>' +

        '<div class="portfolio-tile"><a href="http://bennettcodes.com/sites/full/angular-test/weather" target="_blank"><img class="tile" src="images/portfolio/websites/aw.jpg"></a>' +
        '<div class="tile-title"><h2>Angular.JS App</h2></div></div>' +

        '<div class="portfolio-tile"><a href="http://infocusadv.com/comet-live" target="_blank"><img class="tile" src="images/portfolio/websites/ce.jpg"></a>' +
        '<div class="tile-title"><h2>Comet Electric</h2></div></div>' +

        '<div class="portfolio-tile"><a href="http://bennettcodes.com/sites/landing/fer-vegas-09-15" target="_blank"><img class="tile" src="images/portfolio/websites/fer.jpg"></a>' +
        '<div class="tile-title"><h2>FER CPE</h2></div></div>' +

        '<div class="portfolio-tile"><a href="http://kestrelbiologic.com" target="_blank"><img class="tile" src="images/portfolio/websites/kb.jpg"></a>' +
        '<div class="tile-title"><h2>Kestrel Biologic</h2></div></div>' +

        '<div class="portfolio-tile"><a href="http://cleanroomsplus.com" target="_blank"><img class="tile" src="images/portfolio/websites/crp.jpg"></a>' +
        '<div class="tile-title"><h2>Cleanrooms Plus</h2></div></div>' +

        '<div class="portfolio-tile"><a href="http://bennettcodes.com/sites/full/drunk-ball/" target="_blank"><img class="tile" src="images/portfolio/websites/db.jpg"></a>' +
        '<div class="tile-title"><h2>Drunk Ball Test</h2></div></div>'

    );

};

function loadBannerItems() {

    portfolioTileContainerInner.html(

        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/banners/longo1.jpg"></div>' +

        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/banners/longo2.jpg"></div>' +

        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/banners/longo3.jpg"></div>' +

        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/banners/longo4.jpg"></div>' +

        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/banners/tvt1.jpg"></div>' +

        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/banners/tvt2.jpg"></div>' +

        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/banners/tvt3.jpg"></div>' +

        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/banners/tvt4.jpg"></div>' +

        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/banners/cbu1.jpg"></div>' +

        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/banners/cbu2.jpg"></div>' +

        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/banners/cbu3.jpg"></div>' +

        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/banners/cbu4.jpg"></div>'

    );

};

function loadEblastItems() {

    portfolioTileContainerInner.html(

        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/eblasts/vc1.jpg"></div>' +

        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/eblasts/ims1.jpg"></div>' +

        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/eblasts/mst1.jpg"></div>' +

        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/eblasts/ims2.jpg"></div>' +

        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/eblasts/ims3.jpg"></div>' +

        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/eblasts/ims4.jpg"></div>' +

        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/eblasts/pj1.jpg"></div>' +

        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/eblasts/pj2-mobile.jpg"></div>'

    );

};

function loadFlyerItems() {

    portfolioTileContainerInner.html(

        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/flyers/sm1.jpg"></div>' +

        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/flyers/cbu1-1.jpg"></div>' +

        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/flyers/cbu2.jpg"></div>' +

        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/flyers/cbu3.jpg"></div>' +

        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/flyers/fc1.jpg"></div>' +

        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/flyers/fc2.jpg"></div>' +

        '<div class="portfolio-tile"><a href="images/portfolio/brochures/cbu-brochure.pdf" target="_blank"><img class="tile" src="images/portfolio/brochures/cbu1.jpg"></a>' +
        '<div class="tile-title"><h2>Click To View</h2></div></div>' +

        '<div class="portfolio-tile"><a href="images/portfolio/brochures/lite-brochure.pdf" target="_blank"><img class="tile" src="images/portfolio/brochures/l1.jpg"></a>' +
        '<div class="tile-title"><h2>Click To View</h2></div></div>'

    );

};

function loadBrochureItems() {

    portfolioTileContainerInner.html(

        '<div class="portfolio-tile"><a href="images/portfolio/brochures/cbu-brochure.pdf" target="_blank"><img class="tile" src="images/portfolio/brochures/cbu1.jpg"></a></div>' +

        '<div class="portfolio-tile"><a href="images/portfolio/brochures/lite-brochure.pdf" target="_blank"><img class="tile" src="images/portfolio/brochures/l1.jpg"></a></div>'

    );

};

function loadBillboardItems() {

    portfolioTileContainerInner.html(

        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/billboards/bb1.jpg"></div>' +

        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/billboards/bb2.jpg"></div>' +

        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/billboards/bb3.jpg"></div>' +

        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/billboards/bb4.jpg"></div>' +

        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/billboards/bb5.jpg"></div>' +

        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/billboards/bb6.jpg"></div>' +

        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/billboards/cbu1.jpg"></div>' +

        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/billboards/cbu2.jpg"></div>' +

        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/billboards/cbu3.jpg"></div>' +

        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/billboards/cbu4.jpg"></div>' +

        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/billboards/cbu5.jpg"></div>' +

        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/billboards/ims1.jpg"></div>' +

        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/billboards/ims2.jpg"></div>' +

        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/billboards/ims3.jpg"></div>' +

        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/billboards/ims4.jpg"></div>'

    );

};

function loadCartoonItems() {

    portfolioTileContainerInner.html(

        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/drawings/cartoons/mushu-color.jpg"></div>' +

        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/drawings/cartoons/mushu-sketch.jpg"></div>' +

        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/drawings/cartoons/beast-sketch.jpg"></div>' +

        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/drawings/cartoons/mufasa-sketch.jpg"></div>' +

        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/drawings/cartoons/kuzco-sketch.jpg"></div>'

    );

};

function loadLifeItems() {

    portfolioTileContainerInner.html(

        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/drawings/life-drawings/animals.jpg"></div>' +

        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/drawings/life-drawings/models2.jpg"></div>' +

        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/drawings/life-drawings/models1.jpg"></div>' +

        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/drawings/life-drawings/models3.jpg"></div>' +

        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/drawings/life-drawings/models5.jpg"></div>' +

        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/drawings/life-drawings/models4.jpg"></div>' +

        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/drawings/life-drawings/models6.jpg"></div>' +

        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/drawings/life-drawings/zorro.jpg"></div>' +

        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/drawings/life-drawings/anatomy1.jpg"></div>' +

        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/drawings/life-drawings/anatomy2.jpg"></div>' +

        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/drawings/life-drawings/anatomy3.jpg"></div>'

    );

};

function loadPortraitItems() {

    portfolioTileContainerInner.html(

        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/drawings/portraits/audrey-hepburn.jpg"></div>' +

        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/drawings/portraits/monkey.jpg"></div>' +

        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/drawings/portraits/christian-bale.jpg"></div>' +

        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/drawings/portraits/joker.jpg"></div>' +

        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/drawings/portraits/model-forward.jpg"></div>' +

        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/drawings/portraits/model-side.jpg"></div>' +

        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/drawings/portraits/model-side2.jpg"></div>' +

        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/drawings/portraits/zorro.jpg"></div>'

    );

};

/******************
    Redirection
******************/

/*    if (!isChrome) {
        chromeChecker.css({
            opacity:'0'
        });
    } else if (isChrome) {
        chromeChecker.css({
            opacity:'1'
        });
    }*/

$(window).resize(function initial() {
    doOnOrientationChange();

    return initial;
}());

//START LOADED WINDOW FUNCTIONS
sliderImage.imagesLoaded(function () {

    loading.velocity({
        opacity: '0'
    }, {
        duration: 1000,
        complete: function () {
            loading.detach();

            hashChecker();

            /*$('#loading-trackbar').fadeOut(500);

            $('#loading-trackbar').velocity({
                width:'100vw'
            }, {
                duration:500,
                easing:'easeOutCirc',
                queue:false
            });*/

            pageExpand.css('opacity', '0').velocity({
                opacity: '1'
            }, {
                duration: 1000,
                delay: 5000,
                queue: false
            });

            menuBackgroundOverlay.velocity({
                opacity: ['0.8', '0']
            }, {
                duration: 2500,
                delay: 2000,
                easing: 'swing',
                queue: false
            });
            firstName.velocity({
                translateY: ['0vh', '50vh']
            }, {
                duration: 2500,
                delay: 1500,
                easing: 'easeOutQuart',
                queue: false
            });
            firstName.velocity({
                opacity: ['1', '0']
            }, {
                duration: 1000,
                delay: 2000,
                easing: 'swing',
                queue: false
            });
            lastName.velocity({
                translateY: ['-3vh', '50vh']
            }, {
                duration: 2000,
                delay: 2000,
                easing: 'easeOutQuart',
                queue: false
            });
            lastName.velocity({
                opacity: ['1', '0']
            }, {
                duration: 1000,
                delay: 2500,
                easing: 'swing',
                queue: false,
                complete: function () {
                    bennett2.velocity({
                        scaleY: ['1', '0'],
                        opacity: ['1', '1']
                    }, {
                        duration: 600,
                        delay: 500,
                        easing: 'easeInOutQuart',
                        queue: false
                    });
                    upperLine.velocity({
                        scaleX: ['1', '0'],
                        opacity: ['1', '1']
                    }, {
                        duration: 1000,
                        delay: 100,
                        easing: 'easeInOutQuart',
                        queue: false
                    });
                    firstName.velocity({
                        translateY: '-50vh'
                    }, {
                        duration: 1500,
                        easing: 'easeInQuart',
                        queue: false
                    });
                    lastName.velocity({
                        translateY: '-50vh'
                    }, {
                        duration: 1500,
                        delay: 100,
                        easing: 'easeInQuart',
                        queue: false
                    });
                    firstName2.velocity({
                        translateY: ['0', '32vh'],
                        opacity: ['1', '1']
                    }, {
                        duration: 1500,
                        delay: 250,
                        easing: 'easeInOutExpo',
                        queue: false
                    });
                    menuItem.velocity(
                        "transition.slideLeftIn", {
                            duration: 750,
                            delay: 1750,
                            stagger: 250,
                            easing: 'easeOutQuart',
                            complete: function () {

                                bennettContainer.detach();

                                //ABOUT BUTTON TOUCH START
                                menuItemIcon.eq(0).on({
                                    'touchstart': function () {

                                        interactions.menu.about.touchOn();
                                    }
                                });

                                //ABOUT BUTTON TOUCH END
                                menuItemIcon.eq(0).on({
                                    'touchend': function () {

                                        contentBody.stop(1, 0).velocity({
                                            translateY: '0vh'
                                        }, {
                                            duration: 1000,
                                            easing: 'easeInOutQuart'
                                        });

                                        interactions.menu.about.touchOff();

                                        if (pageIndex !== 0) {

                                            transitions.slider.toAbout();

                                        }
                                    }
                                });

                                //RESUME BUTTON TOUCH START
                                menuItemIcon.eq(1).on({
                                    'touchstart': function () {

                                        interactions.menu.resume.touchOn();
                                    }
                                });

                                //RESUME BUTTON TOUCH END
                                menuItemIcon.eq(1).on({
                                    'touchend': function () {

                                        contentBody.stop(1, 0).velocity({
                                            translateY: '0vh'
                                        }, {
                                            duration: 1000,
                                            easing: 'easeInOutQuart'
                                        });

                                        interactions.menu.resume.touchOff();

                                        if (pageIndex !== 1) {

                                            transitions.slider.toResume();

                                        }
                                    }
                                });

                                //PORTFOLIO BUTTON TOUCH START
                                menuItemIcon.eq(2).on({
                                    'touchstart': function () {

                                        interactions.menu.portfolio.touchOn();
                                    }
                                });

                                //PORTFOLIO BUTTON TOUCH END
                                menuItemIcon.eq(2).on({
                                    'touchend': function () {

                                        contentBody.stop(1, 0).velocity({
                                            translateY: '0vh'
                                        }, {
                                            duration: 1000,
                                            easing: 'easeInOutQuart'
                                        });

                                        interactions.menu.portfolio.touchOff();

                                        if (pageIndex !== 2) {

                                            transitions.slider.toPortfolio();

                                        }
                                    }
                                });

                                //CONTACT BUTTON TOUCH START
                                menuItemIcon.eq(3).on({
                                    'touchstart': function () {

                                        interactions.menu.contact.touchOn();
                                    }
                                });

                                //CONTACT BUTTON TOUCH END
                                menuItemIcon.eq(3).on({
                                    'touchend': function () {

                                        contentBody.stop(1, 0).velocity({
                                            translateY: '0vh'
                                        }, {
                                            duration: 1000,
                                            easing: 'easeInOutQuart'
                                        });

                                        interactions.menu.contact.touchOff();

                                        if (pageIndex !== 3) {

                                            transitions.slider.toContact();

                                        }
                                    }
                                });

                                //PAGE EXPAND CLICK
                                tapRegion.on({
                                    'touchend': function () {

                                        switch (true) {
                                        case ((!transitionActive) && (!pageActive) && (pageIndex === 0)):

                                            portfolioTileContainerFadeDark.css('opacity', '0').addClass(portfolioTileContainerFadeActiveString).velocity({
                                                opacity: '1'
                                            }, {
                                                duration: 1000,
                                                easing: 'swing',
                                                queue: false
                                            });

                                            animations.pageExpand.slideUp();
                                            transitions.page.slideUp.about();
                                            break;
                                        case ((!transitionActive) && (!pageActive) && (pageIndex === 1)):

                                            portfolioTileContainerFadeDark.css('opacity', '0').addClass(portfolioTileContainerFadeActiveString).velocity({
                                                opacity: '1'
                                            }, {
                                                duration: 1000,
                                                easing: 'swing',
                                                queue: false
                                            });

                                            animations.pageExpand.slideUp();
                                            transitions.page.slideUp.resume();
                                            break;
                                        case ((!transitionActive) && (!pageActive) && (pageIndex === 2)):

                                            animations.pageExpand.slideUp();
                                            animations.portfolioTiles.flyIn();
                                            transitions.page.slideUp.portfolio();
                                            break;
                                        case ((!transitionActive) && (!pageActive) && (pageIndex === 3)):

                                            portfolioTileContainerFadeDark.css('opacity', '0').addClass(portfolioTileContainerFadeActiveString).velocity({
                                                opacity: '1'
                                            }, {
                                                duration: 1000,
                                                easing: 'swing',
                                                queue: false
                                            });

                                            animations.pageExpand.slideUp();
                                            transitions.page.slideUp.contact();
                                            break;
                                        case ((!transitionActive) && (pageActive) && (pageIndex === 0)):

                                            portfolioTileContainerFadeDark.velocity({
                                                opacity: '0'
                                            }, {
                                                duration: 1000,
                                                easing: 'swing',
                                                queue: false,
                                                complete: function () {
                                                    portfolioTileContainerFadeDark.removeClass(portfolioTileContainerFadeActiveString);
                                                }
                                            });

                                            animations.pageExpand.slideDown();
                                            transitions.page.slideDown.about();
                                            break;
                                        case ((!transitionActive) && (pageActive) && (pageIndex === 1)):

                                            portfolioTileContainerFadeDark.velocity({
                                                opacity: '0'
                                            }, {
                                                duration: 1000,
                                                easing: 'swing',
                                                queue: false,
                                                complete: function () {
                                                    portfolioTileContainerFadeDark.removeClass(portfolioTileContainerFadeActiveString);
                                                }
                                            });

                                            animations.pageExpand.slideDown();
                                            transitions.page.slideDown.resume();
                                            break;
                                        case ((!transitionActive) && (pageActive) && (pageIndex === 2)):

                                            animations.pageExpand.slideDown();
                                            animations.portfolioTiles.flyOut();
                                            transitions.page.slideDown.portfolio();
                                            break;
                                        case ((!transitionActive) && (pageActive) && (pageIndex === 3)):

                                            portfolioTileContainerFadeDark.velocity({
                                                opacity: '0'
                                            }, {
                                                duration: 1000,
                                                easing: 'swing',
                                                queue: false,
                                                complete: function () {
                                                    portfolioTileContainerFadeDark.removeClass(portfolioTileContainerFadeActiveString);
                                                }
                                            });

                                            animations.pageExpand.slideDown();
                                            transitions.page.slideDown.contact();
                                            break;
                                        }

                                    }
                                });

                                //BOTTOM PAGE CLOSE CLICK
                                bennett2.on({
                                    'touchend': function () {

                                        portfolioTileContainerFadeDark.velocity({
                                            opacity: '0'
                                        }, {
                                            duration: 1000,
                                            easing: 'swing',
                                            queue: false,
                                            complete: function () {
                                                portfolioTileContainerFadeDark.removeClass(portfolioTileContainerFadeActiveString);
                                            }
                                        });

                                        switch (true) {
                                        case ((!transitionActive) && (pageActive) && (pageIndex === 0)):
                                            animations.pageExpand.slideDown();
                                            transitions.page.slideDown.about();
                                            break;
                                        case ((!transitionActive) && (pageActive) && (pageIndex === 1)):
                                            animations.pageExpand.slideDown();
                                            transitions.page.slideDown.resume();
                                            break;
                                        case ((!transitionActive) && (pageActive) && (pageIndex === 2)):
                                            animations.pageExpand.slideDown();
                                            transitions.page.slideDown.portfolio();
                                            break;
                                        case ((!transitionActive) && (pageActive) && (pageIndex === 3)):
                                            animations.pageExpand.slideDown();
                                            transitions.page.slideDown.contact();
                                            break;
                                        }

                                    }
                                });

                                function tileTouch() {

                                    //PORTFOLIO TILE TOUCH START
                                    portfolioCategory.on({
                                        'touchstart': function () {

                                            currentPortfolioCategory = $(this);

                                            currentPortfolioCategoryText = $(this).find(portfolioCategoryText);

                                            interactions.portfolioTiles.touchOn();
                                        }
                                    });

                                    //PORTFOLIO TILE TOUCH END
                                    portfolioCategory.on({
                                        'touchend': function () {

                                            currentPortfolioCategory = $(this);

                                            currentPortfolioCategoryText = $(this).find(portfolioCategoryText);

                                            interactions.portfolioTiles.touchOff();

                                            switch (true) {
                                            case (currentPortfolioCategory.hasClass(sitesCategoryString)):

                                                transitions.portfolio.loadIn.sites();

                                                break;
                                            case (currentPortfolioCategory.hasClass(bannersCategoryString)):

                                                transitions.portfolio.loadIn.banners();

                                                break;
                                            case (currentPortfolioCategory.hasClass(eblastsCategoryString)):

                                                transitions.portfolio.loadIn.eblasts();

                                                break;
                                            case (currentPortfolioCategory.hasClass(flyersCategoryString)):

                                                transitions.portfolio.loadIn.flyers();

                                                break;
                                            case (currentPortfolioCategory.hasClass(brochuresCategoryString)):

                                                transitions.portfolio.loadIn.brochures();

                                                break;
                                            case (currentPortfolioCategory.hasClass(billboardsCategoryString)):

                                                transitions.portfolio.loadIn.billboards();

                                                break;
                                            case (currentPortfolioCategory.hasClass(cartoonsCategoryString)):

                                                transitions.portfolio.loadIn.cartoons();

                                                break;
                                            case (currentPortfolioCategory.hasClass(lifeCategoryString)):

                                                transitions.portfolio.loadIn.life();

                                                break;
                                            case (currentPortfolioCategory.hasClass(portraitsCategoryString)):

                                                transitions.portfolio.loadIn.portraits();

                                                break;
                                            }
                                        }
                                    });

                                    //PORTFOLIO CLOSE TOUCH END
                                    portfolioCloseTapRegion.on({
                                        'touchend': function () {

                                            switch (true) {
                                            case (websitesHeader.hasClass(portfolioTileHeaderActiveString)):

                                                transitions.portfolio.loadOut.sites();

                                                break;
                                            case (bannersHeader.hasClass(portfolioTileHeaderActiveString)):

                                                transitions.portfolio.loadOut.banners();

                                                break;
                                            case (eblastsHeader.hasClass(portfolioTileHeaderActiveString)):

                                                transitions.portfolio.loadOut.eblasts();

                                                break;
                                            case (flyersHeader.hasClass(portfolioTileHeaderActiveString)):

                                                transitions.portfolio.loadOut.flyers();

                                                break;
                                            case (brochuresHeader.hasClass(portfolioTileHeaderActiveString)):

                                                transitions.portfolio.loadOut.brochures();

                                                break;
                                            case (billboardsHeader.hasClass(portfolioTileHeaderActiveString)):

                                                transitions.portfolio.loadOut.billboards();

                                                break;
                                            case (cartoonsHeader.hasClass(portfolioTileHeaderActiveString)):

                                                transitions.portfolio.loadOut.cartoons();

                                                break;
                                            case (lifeHeader.hasClass(portfolioTileHeaderActiveString)):

                                                transitions.portfolio.loadOut.life();

                                                break;
                                            case (portraitsHeader.hasClass(portfolioTileHeaderActiveString)):

                                                transitions.portfolio.loadOut.portraits();

                                                break;
                                            }
                                        }
                                    });

                                };

                                tileTouch();

                                /*var interval = setInterval(function() {
                                    console.log(currentPortfolioCategoryText);
                                }, 1000);*/
                            }
                        });
                }
            });
        }
    });
});