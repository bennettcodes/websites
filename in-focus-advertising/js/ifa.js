// click "Run" to replay

var circle = $('#loading-circle');

var loading = [
    {
        elements: $('#loading-trackbar'),
        properties: {
            width: '20vw'
        }
    },
    {
        elements: $('#loading-trackbar'),
        properties: {
            width: '40vw'
        }
    },
    {
        elements: $('#loading-trackbar'),
        properties: {
            width: '60vw'
        }
    },
    {
        elements: $('#loading-trackbar'),
        properties: {
            width: '80vw'
        }
    },
    {
        elements: $('#loading-trackbar'),
        properties: {
            width: '100vw'
        }
  }
];

$.Velocity.RunSequence(loading);

var circleGrow = setInterval(function startCircle() {
    circle.velocity({
        width: ['50%', '100%'],
        height: ['50%', '100%'],
        translateX: ['12.5px', '0px'],
        translateY: ['12.5px', '0px']
    }, {
        duration: 1000,
        easing: 'easeOutCirc',
        complete: function () {
            circle.velocity({
                width: ['100%', '50%'],
                height: ['100%', '50%'],
                translateX: ['0', '12.5px'],
                translateY: ['0', '12.5px']
            }, {
                duration: 1000,
                easing: 'easeOutCirc'
            });
        }
    });

    return startCircle;
}(), 2000);

function stopCircleGrow() {
    clearInterval(circleGrow);
}

$(window).load(function () {

    if ($('#image-precache')) {
        $(this).empty();
    }

    var container = $('#container'),
        windowWidth = $(window).width(),
        windowHeight = $(window).height(),

        circular = $('.circular'),

        loadingContainer = $('#loading-container'),
        loadingCircleContainer = $('#loading-circle-container'),
        loadingCircle = $('#loading-circle'),
        circle = $('.circle'),
        circleOrange = $('.circle-orange'),
        circleWhite = $('.circle-white'),

        regularLink = $('.regular-link'),
        portfolioLink = $('.portfolio-link'),

        header = $('#header'),
        headerActive = '',
        headerPageCover = $('#header-page-cover'),
        logoContainer = $("#logo-container"),
        logoContainerClicked = $("#logo-container-clicked"),
        logoNormal = $('#logo-normal'),
        logoWhite = $('#logo-white'),
        menuButtonContainer = $("#menu-btn-container"),
        menuButtonContainerClicked = $("#menu-btn-container-clicked"),
        menuButton = $(".menu-btn"),
        menuButtonOrange = $(".menu-btn-orange"),
        menuButtonBlack = $(".menu-btn-black"),
        menuButtonText = $(".menu-btn-text"),
        menuButtonTextClicked = $(".menu-btn-text-clicked"),
        navItems = $('#nav-items'),
        navItemsDropdown = $('.nav-item  > ul'),
        navItemsDropdownItem = $('.nav-item  > ul > li > a'),
        navItem = $('.nav-item'),

        headerHeight = '200px',

        sliderContainer = $('#slider-container'),
        slider = $('#slider'),
        sliderWidth = slider.width(),
        slide = $('.slide'),
        active = $('.slide.active'),
        slideTextContainer = $('#slide-text-container'),
        slideText = $('.slide-text'),
        slideTextNormal = $('.slide-text-normal'),
        slideTextEmphasized = $('.slide-text-emphasized'),
        slideHeading1 = $('.slide h1'),
        slideHeading2 = $('.slide h2'),
        slideParagraph = $('.slide p'),

        slideDesktopWidthStart = $(window).width() * 1.5 + 'px',
        slideDesktopWidthFinish = $(window).width() + 'px',
        slideMobileWidthStart = $(window).width() * 3 + 'px',
        slideMobileWidthFinish = $(window).width() * 2 + 'px',
        slideDesktopTranslateXStart = '-' + $(window).width() * 0.25 + 'px',
        slideDesktopTranslateXFinish = '0px',
        slideMobileTranslateXStart = '-' + $(window).width() * 1.25 + 'px',
        slideMobileTranslateXFinish = '+=' + $(window).width() / 2 + 'px',

        content = $('#content'),
        contentTitle = $('.content-title'),
        contentBody = $('.content-body'),
        desktopColumnHalf = $('.desktop-col-half'),
        columnLeft = $('.col-left'),
        columnLeftParagraph = $('.col-left p'),
        columnRight = $('.col-right'),
        columnRightParagraph = $('.col-right p'),

        counter = 0,
        portfolioItemDelay = 0,
        portfolioItemDelayIncrement = 0.075,
        portfolioItemTextDelay = 0,
        cookiedPortfolioItemDelay = 1000,
        desktopCounter = 0,
        mobileCounter = 0,
        portfolioItemDuration = 1,
        duration = 6000,
        emphasizedSpeed = 6000,
        emphasizedEase = 'easeOutCirc',
        speed = 6000,
        sliderOpacityEase = 'easeOutCirc',
        sliderOpacityEaseMobile = 'easeOutCirc',
        sliderEase = 'easeOutCirc',
        sliderEaseMobile = 'swing',

        thankYouTextContainer = $('#thank-you-text-container'),
        thankYouText = $('#thank-you-text'),
        thankYouTextTrackbar = $('#thank-you-text-trackbar'),
        thankYouTextSkipButton = $('#thank-you-text-skip-btn'),

        passwordContainer = $('#password-container'),
        passwordHeader = $('#password-header'),
        passwordFieldContainer = $('#password-field-container'),
        passwordFieldInitial = $('#password-field-initial'),
        passwordField = $('#password-field'),
        fullscreenInputClean = $('.fullscreen-input-clean'),
        passwordSubmit = $('.password-submit'),

        portfolioItemsContainer = $('#portfolio-items-container'),
        portfolioBottomBreak = $('#portfolio-bottom-break'),
        portfolioItemsRow = $('.portfolio-items-row'),
        portfolioItem = $('.portfolio-item'),
        portfolioItemText = $('.portfolio-item-text'),
        portfolioItemImage = $('.portfolio-item-image'),
        portfolioItemImageWidth = portfolioItemImage.width(),
        portfolioItemImageHeight = portfolioItemImage.height(),
        portfolioItemImageRollover = $('.portfolio-item-image-rollover'),
        portfolioItemImageWidth = portfolioItemImageRollover.width(),
        portfolioItemImageHeight = portfolioItemImageRollover.height(),

        portfolioItemEase = Expo.easeOut,

        allPortfolioItemsLoaded = function () {
            TweenMax.set($('.portfolio-item'), {
                pointerEvents: 'auto'
            });
            console.log('loaded.');
        },

        portfolioTileFlyIn = function () {
            var currentItemIndex = 0;
            var currentItemTextIndex = 0;
            if ($(window).width() > 1024) {
                portfolioItem.addClass('animated');
                TweenMax.set(portfolioItem.find('.portfolio-item-image'), {
                    opacity: 0,
                    transformOrigin: 'center',
                    z: 50,
                    rotationX: 15,
                    rotationY: 15,
                    rotationZ: 15
                });
                TweenMax.staggerTo(portfolioItem.find('.portfolio-item-image'), portfolioItemDuration, {
                    opacity: 1,
                    z: 0,
                    rotationX: 0,
                    rotationY: 0,
                    rotationZ: 0,
                    ease: portfolioItemEase,
                    onComplete: function() {
                        TweenMax.set(portfolioItem.eq(currentItemIndex++), {
                            pointerEvents: 'auto'
                        });
                    }
                }, portfolioItemDelay += portfolioItemDelayIncrement);
                TweenMax.set(portfolioItem.find('.portfolio-item-image-rollover'), {
                    y: 0,
                    z: 0,
                    rotationX: 0,
                    rotationY: 0,
                    rotationZ: 0,
                });
                TweenMax.set(portfolioItem.find('.portfolio-item-text'), {
                    opacity: 0
                });
                TweenMax.staggerTo(portfolioItem.find('.portfolio-item-text'), portfolioItemDuration, {
                    opacity: 1,
                    ease: portfolioItemEase
                }, portfolioItemTextDelay += portfolioItemDelayIncrement, function () {
                    completed = true;
                });
            } else {
                TweenMax.set(portfolioItem.find('.portfolio-item-image'), {
                    opacity: 0,
                    transformOrigin: 'center',
                    z: 50,
                    rotationX: 15,
                    rotationY: 15,
                    rotationZ: 15
                });
                TweenMax.staggerTo(portfolioItem.find('.portfolio-item-image'), portfolioItemDuration, {
                    opacity: 1,
                    z: 0,
                    rotationX: 0,
                    rotationY: 0,
                    rotationZ: 0,
                    ease: portfolioItemEase,
                }, portfolioItemDelay += portfolioItemDelayIncrement, allPortfolioItemsLoaded);
                TweenMax.set(portfolioItem.find('.portfolio-item-text'), {
                    opacity: 0
                });
                TweenMax.staggerTo(portfolioItem.find('.portfolio-item-text'), portfolioItemDuration, {
                    opacity: 1,
                    ease: portfolioItemEase
                }, portfolioItemTextDelay += portfolioItemDelayIncrement);
            }
        },

        portfolioTileContainer = $('#portfolio-tile-container'),
        portfolioTile = $('.portfolio-tile'),
        portfolioYoutubeIframe = $('.portfolio-youtube-iframe'),
        moreArrowContainer = $('#more-arrow-container'),
        moreArrowCircle = $('#more-arrow-circle'),
        moreArrow = $('.more-arrow'),

        footer = $('#footer'),
        footerWidgets = $('#footer-widgets'),
        footerWidget = $('.footer-widget'),
        footerWidgetContent = $('.footer-widget-content'),
        footerWidgetText = $('.footer-widget-text'),
        footerWidgetBackground = $('.footer-widget-background'),
        footerWidgetBackground2 = $('.footer-widget-background2'),

        homeFooterText = $('#home-footer-text'),

        footerWidgetBackgroundWidthStart = '100px',
        footerWidgetBackgroundWidthFinish = '140px',
        footerWidgetBackgroundHeightStart = '100px',
        footerWidgetBackgroundHeightFinish = '140px',
        footerWidgetBackgroundTranslateXStart = '110px',
        footerWidgetBackgroundTranslateXFinish = '90px',
        footerWidgetBackgroundTranslateYStart = '50px',
        footerWidgetBackgroundTranslateYFinish = '30px';

    if (('.ifa-map-container').length > 0) {
        $('.ifa-map-container').html(
            '<iframe class="ifa-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.9478140782708!2d-118.76440978394237!3d34.14767722014066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e826a91390083d%3A0x6ce957a51bbdbd44!2s29219+Canwood+St%2C+Agoura+Hills%2C+CA+91301!5e0!3m2!1sen!2sus!4v1451785087670" frameborder="0" style="border:0" allowfullscreen></iframe>'
        );
    }

    var ifaMap = $('.ifa-map');

    $('#loading-trackbar').fadeOut(500);

    $('#loading-trackbar').velocity({
        width: '100vw'
    }, {
        duration: 500,
        easing: 'easeOutCirc',
        queue: false
    });

    if ($('#thank-you-text-container').length > 0) {
        thankYouTextContainer.delay(500).fadeIn(0);

        thankYouText.delay(1000).velocity({
            opacity: ['1', '0'],
            translateY: ['0', '100px']
        }, {
            duration: 1000,
            easing: 'easeOutCirc'
        });

        thankYouTextSkipButton.delay(1000).velocity({
            opacity: ['1', '0'],
            translateY: ['0', '-100px']
        }, {
            duration: 1000,
            easing: 'easeOutCirc'
        });

        if ($(window).width() > 1024) {
            thankYouTextTrackbar.delay(1000).fadeIn(0).velocity({
                width: ['50vw', '0vw']
            }, {
                duration: 2500,
                easing: 'linear',
                complete: function () {
                    $(this).fadeOut(1000, 'easeOutCirc');
                    thankYouTextSkipButton.velocity({
                        opacity: ['0', '1'],
                        translateY: ['-75px', '0']
                    }, {
                        duration: 1000,
                        easing: 'easeOutCirc'
                    });
                    thankYouText.velocity({
                        opacity: ['0', '1'],
                        translateY: ['100px', '0']
                    }, {
                        duration: 1000,
                        easing: 'easeOutCirc'
                    });
                    thankYouTextContainer.delay(500).fadeOut(500);
                }
            });
        } else {
            thankYouTextTrackbar.delay(1000).fadeIn(0).velocity({
                width: ['100vw', '0vw']
            }, {
                duration: 2500,
                easing: 'linear',
                complete: function () {
                    $(this).fadeOut(1000, 'easeOutCirc');
                    thankYouTextSkipButton.velocity({
                        opacity: ['0', '1'],
                        translateY: ['-50px', '0']
                    }, {
                        duration: 1000,
                        easing: 'easeOutCirc'
                    });
                    thankYouText.velocity({
                        opacity: ['0', '1'],
                        translateY: ['50px', '0']
                    }, {
                        duration: 1000,
                        easing: 'easeOutCirc'
                    });
                    thankYouTextContainer.delay(500).fadeOut(500);
                }
            });
        }
        thankYouTextSkipButton.click(function () {
            if ($(window).width() > 1024) {
                thankYouTextTrackbar.stop(1, 1).velocity({
                    opacity: '0',
                    width: '50vw'
                }, {
                    duration: 1000,
                    easing: 'easeOutCirc'
                });
                $(this).stop(1, 1).velocity({
                    opacity: ['0', '1'],
                    translateY: ['-75px', '0']
                }, {
                    duration: 1000,
                    easing: 'easeOutCirc'
                });
            } else {
                thankYouTextTrackbar.stop(1, 1).velocity({
                    opacity: '0',
                    width: '100vw'
                }, {
                    duration: 1000,
                    easing: 'easeOutCirc'
                });
            }
            $(this).stop(1, 1).velocity({
                opacity: ['0', '1'],
                translateY: ['-50px', '0']
            }, {
                duration: 1000,
                easing: 'easeOutCirc'
            });
            thankYouText.stop(1, 1).velocity({
                opacity: ['0', '1'],
                translateY: ['50px', '0']
            }, {
                duration: 1000,
                easing: 'easeOutCirc'
            });
            thankYouTextContainer.stop(1, 1).delay(500).fadeOut(500);
        });
    }

    portfolioYoutubeIframe.css({
        height: portfolioYoutubeIframe.width() * 0.56
    });

    setInterval(function hola() {
        moreArrow.velocity({
            opacity: ['0.3', '0.1'],
            translateY: ['-5px', '15px']
        }, {
            duration: 1000,
            easing: 'easeInOutQuad',
            complete: function () {
                $(this).velocity({
                    opacity: ['0.1', '0.3'],
                    translateY: ['15px', '-5px']
                }, {
                    duration: 1000,
                    easing: 'easeInOutQuad'
                });
            }
        });
        return hola;
    }(), 2000);

    moreArrowCircle.velocity({
        opacity: ['1', '0']
    }, {
        duration: 1000,
        delay: 500
    });

    $('#loading-container').fadeOut(500, function () {
        stopCircleGrow();
    });

    $('.slide-in').velocity("transition.slideUpIn", {
        duration: 1000,
        delay: 500,
        stagger: 250,
        complete: function () {
            $('#container').css('overflowY', 'initial');
        }
    });

    portfolioTile.velocity({
        translateY: '100px'
    }, {
        duration: 0
    });

    var tileCounter = 0;

    /* Check the location of each desired element */
    portfolioTile.each(function (i) {

        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_half_object = $(this).offset().top + ($(this).outerHeight() / 2);
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        if ($(window).width() > 1024) {
            /* If the object is completely visible in the window, fade it it */
            if (bottom_of_window > bottom_of_half_object) {

                if ($(this).is(portfolioTile.first())) {
                    $(this).velocity({
                        opacity: ['1', 'swing'],
                        translateY: '0px'
                    }, {
                        duration: 1000,
                        easing: 'easeOutCirc'
                    });
                } else {
                    $(this).velocity({
                        opacity: ['1', 'swing'],
                        translateY: '0px'
                    }, {
                        duration: 1000,
                        easing: 'easeOutCirc',
                        delay: 700
                    });
                    moreArrow.fadeIn(500);
                }


            }
        } else {
            portfolioTile.velocity({
                opacity: ['1', 'swing'],
                translateY: '0px'
            }, {
                duration: 1000,
                easing: 'easeOutCirc',
                delay: 700
            });
        }

    });
    /* Every time the window is scrolled ... */
    $(window).scroll(function () {

        /* Check the location of each desired element */
        portfolioTile.each(function (i) {

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_half_object = $(this).offset().top + ($(this).outerHeight() / 2);
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if ($(window).width() > 1024) {

                /* If the object is completely visible in the window, fade it it */
                if (bottom_of_window > bottom_of_half_object) {
                    if (tileCounter % 2 === 0) {
                        $(this).velocity({
                            opacity: ['1', 'swing'],
                            translateY: '0px'
                        }, {
                            duration: 1000,
                            easing: 'easeOutCirc'
                        });

                        if ($(this).is(portfolioTile.last())) {
                            moreArrowCircle.fadeOut(500, function () {
                                $(this).detach()
                            });
                        }
                        tileCounter++;
                    } else {
                        $(this).velocity({
                            opacity: ['1', 'swing'],
                            translateY: '0px'
                        }, {
                            duration: 1000,
                            easing: 'easeOutCirc',
                            delay: 100,
                            complete: function () {
                                moreArrow.fadeIn(500);
                            }
                        });

                        if ($(this).is(portfolioTile.last())) {
                            moreArrowCircle.fadeOut(500, function () {
                                $(this).detach()
                            });
                        }
                        tileCounter++;
                    }
                }
            }

        });

    });


    homeFooterText.velocity("transition.slideUpIn", {
        duration: 1000,
        delay: 1100
    });

    function portfolioItemHover() {
        portfolioItem.css('cursor', 'pointer');
        setTimeout(function () {
            portfolioItem.on('mouseover', function () {
                TweenMax.to($(this).find('.portfolio-item-image'), 0.25, {
                    rotationX: 15,
                    y: 30,
                    opacity: 0,
                    ease: Quad.easeOut
                }, 0);
                TweenMax.to($(this).find('.portfolio-item-image-rollover'), 0.25, {
                    rotationX: 15,
                    y: 30,
                    opacity: 1,
                    ease: Quad.easeOut
                }, 0);
                TweenMax.to($(this).find('.portfolio-item-text'), 0.25, {
                    scale: 1.4,
                    y: -30,
                    ease: Quad.easeOut
                }, 0);
            });
            portfolioItem.on('mouseout', function () {
                TweenMax.to($(this).find('.portfolio-item-image'), 0.25, {
                    rotationX: 0,
                    y: 0,
                    opacity: 1,
                    ease: Quad.easeOut
                }, 0);
                TweenMax.to($(this).find('.portfolio-item-image-rollover'), 0.25, {
                    rotationX: 0,
                    y: 0,
                    opacity: 0,
                    ease: Quad.easeOut
                }, 0);
                TweenMax.to($(this).find('.portfolio-item-text'), 0.25, {
                    scale: 1,
                    y: 0,
                    ease: Quad.easeOut
                }, 0);
            });
            //            portfolioItem.hover(function () {
            //                $(this).find(portfolioItemImage).stop(1, 0).velocity({
            //                    rotateX: ['15deg', '1deg'],
            //                    rotateY: ['1deg', '1deg'],
            //                    translateX: ['0', '0'],
            //                    translateY: ['30px', '0'],
            //                    opacity: ['0', '1']
            //                }, {
            //                    duration: 250,
            //                    easing: 'easeOutQuad'
            //                });
            //                $(this).find(portfolioItemImageRollover).stop(1, 0).velocity({
            //                    rotateX: ['15deg', '1deg'],
            //                    rotateY: ['1deg', '1deg'],
            //                    translateX: ['0', '0'],
            //                    translateY: ['30px', '0'],
            //                    opacity: ['1', '0']
            //                }, {
            //                    duration: 250,
            //                    easing: 'easeOutQuad'
            //                });
            //                $(this).find(portfolioItemText).stop(1, 0).css('opacity', '1').velocity({
            //                    fontSize: '20px',
            //                    translateY: '-30px'
            //                }, {
            //                    duration: 250,
            //                    easing: 'easeOutQuad'
            //                });
            //            }, function () {
            //                $(this).find(portfolioItemImage).stop(1, 0).velocity({
            //                    rotateX: ['1deg', '15deg'],
            //                    rotateY: ['1deg', '1deg'],
            //                    translateX: ['0', '0'],
            //                    translateY: ['0', '30px'],
            //                    opacity: ['1', '0']
            //                }, {
            //                    duration: 250,
            //                    easing: 'easeOutQuad'
            //                });
            //                $(this).find(portfolioItemImageRollover).stop(1, 0).velocity({
            //                    rotateX: ['1deg', '15deg'],
            //                    rotateY: ['1deg', '1deg'],
            //                    translateX: ['0', '0'],
            //                    translateY: ['0', '30px'],
            //                    opacity: ['0', '1']
            //                }, {
            //                    duration: 250,
            //                    easing: 'easeOutQuad'
            //                });
            //                $(this).find(portfolioItemText).stop(1, 0).velocity({
            //                    fontSize: '14px',
            //                    translateY: '0px'
            //                }, {
            //                    duration: 250,
            //                    easing: 'easeOutQuad'
            //                });
            //            });
        }, 0);
    }

    portfolioItemHover();

    fullscreenInputClean.val('');

    if (Cookies.get('portfolioPass') !== 'enteredPassword') {
        passwordContainer.delay(500).fadeIn(0, function () {

            $(this).velocity({
                opacity: ['1', '0']
            }, {
                duration: 1000
            });
            passwordFieldInitial.velocity({
                scaleX: '0'
            }, {
                duration: 0
            }).css('opacity', '1').delay(500).velocity({
                scaleX: ['100%', '0vw']
            }, {
                duration: 1000,
                easing: 'easeInOutCirc'
            });

            fullscreenInputClean.val('').velocity({
                scaleX: '0'
            }, {
                duration: 0
            }).css('opacity', '1').delay(750).velocity({
                scaleX: ['100%', '0%']
            }, {
                duration: 1000,
                easing: 'easeInOutCirc',
                complete: function () {}
            });

            setTimeout(function () {
                passwordField.focus()
            }, 1000);

            if ($(window).width() > 1024) {
                passwordSubmit.delay(1250).velocity({
                    opacity: ['1', '0'],
                    height: ['100px', '0']
                }, {
                    duration: 1000,
                    easing: 'easeOutCirc',
                    complete: function () {
                        passwordSubmit.hover(function () {
                            $(this).stop(1, 0).velocity({
                                backgroundColor: ['#c56f24', '#000000']
                            }, {
                                duration: 500,
                                easing: 'easeOutQuad'
                            });
                        }, function () {
                            $(this).stop(1, 0).velocity({
                                backgroundColor: ['#000000', '#c56f24']
                            }, {
                                duration: 500,
                                easing: 'easeOutQuad'
                            });
                        });
                    }
                });
            } else {
                passwordSubmit.delay(1250).velocity({
                    opacity: ['1', '0'],
                    height: ['200px', '0']
                }, {
                    duration: 1000,
                    easing: 'easeOutCirc'
                });
            }

            passwordHeader.delay(1250).velocity({
                opacity: ['1', '0'],
                paddingTop: ['0', '100px']
            }, {
                duration: 1000,
                easing: 'easeOutCirc'
            });

            fullscreenInputClean.keypress(function (e) {
                if (e.which == 13) {

                    if (fullscreenInputClean.val() === 'infocus1' || fullscreenInputClean.val() === 'INFOCUS1' || fullscreenInputClean.val() === 'Infocus1' || fullscreenInputClean.val() === 'inFocus1' || fullscreenInputClean.val() === 'InFocus1') {
                        Cookies.set('portfolioPass', 'enteredPassword', {
                            path: '/'
                        });
                        fullscreenInputClean.blur();
                        passwordContainer.fadeOut(250, function () {
                            portfolioTileFlyIn();
                        });
                    } else {

                        if ($(window).width() > 1024) {
                            fullscreenInputClean.stop(1, 0).velocity({
                                backgroundColor: ['#e87c1e', '#ff0000']
                            }, {
                                duration: 500,
                                easing: 'swing'
                            });
                        } else {
                            alert('Please try again.');
                        }

                    }
                    return false;
                }
            });

            passwordSubmit.click(function () {

                if (fullscreenInputClean.val() === 'infocus1' || fullscreenInputClean.val() === 'INFOCUS1' || fullscreenInputClean.val() === 'Infocus1' || fullscreenInputClean.val() === 'inFocus1' || fullscreenInputClean.val() === 'InFocus1') {
                    Cookies.set('portfolioPass', 'enteredPassword', {
                        path: '/'
                    });
                    fullscreenInputClean.blur();
                    passwordContainer.fadeOut(250, function () {
                        portfolioTileFlyIn();
                    });
                } else {

                    if ($(window).width() > 1024) {
                        fullscreenInputClean.stop(1, 0).velocity({
                            backgroundColor: ['#e87c1e', '#ff0000']
                        }, {
                            duration: 500,
                            easing: 'swing'
                        });
                    } else {
                        alert('Please try again.');
                    }

                }
                return false;

            });
        });
    } else {
        var completed = false;
        portfolioTileFlyIn();

    }


    if ($(window).width() > 1024) {
        navItems.css(
            'right', 50 + $('#menu-btn-container').width() + ((($(window).width() - $('#logo-container').width() - $('#menu-btn-container').width()) - 100) / 2) - ($('#nav-items').width() / 2) + 'px'
        );
    } else {
        navItems.css(
            'right', '0px'
        );
    }

    navItemsDropdownItem.css({
        width: 'auto'
    });

    navItemsDropdownItem.hover(function () {
        $(this).stop(1, 0).velocity({
            backgroundColor: ['#000000', '#ffffff'],
            color: ['#ffffff', '#000000'],
            paddingLeft: [
                '40px',
                '25px'
            ],
            paddingRight: [
                '10px',
                '25px'
            ]
        }, {
            duration: 500,
            easing: 'easeOutCirc'
        });
    }, function () {
        $(this).stop(1, 0).velocity({
            backgroundColor: ['#ffffff', '#000000'],
            color: ['#000000', '#ffffff'],
            paddingLeft: [
                '25px',
                '40px'
            ],
            paddingRight: [
                '25px',
                '10px'
            ]
        }, {
            duration: 500,
            easing: 'easeOutCirc'
        });
    });

    navItem.mouseover(function () {
        if ($(window).width() > 1024) {
            $(this).find(navItemsDropdown).stop(1, 0).slideDown(250, 'easeOutCirc');
        }
    });

    navItem.mouseout(function () {
        if ($(window).width() > 1024) {
            $(this).find(navItemsDropdown).stop(1, 0).slideUp(250, 'easeOutCirc');
        }
    });

    navItem.find(navItemsDropdown).mouseover(function () {
        if ($(window).width() > 1024) {
            $(this).stop(1, 0).slideDown(250, 'easeOutCirc');
        }
    });

    navItem.find(navItemsDropdown).mouseout(function () {
        if ($(window).width() > 1024) {
            $(this).stop(1, 0).slideUp(250, 'easeOutCirc');
        }
    });

    if ($(window).width() > 1024) {
        ifaMap.css({
            width: $(window).width() * 0.48,
            minHeight: $('.form-body').height() + $('.form-footer').height() + $('.form-intro').height()
        });
    } else {
        ifaMap.css({
            width: $(window).width(),
            height: $(window).height() * 0.25
        });
    }

    if ($(window).width() > 1024) {
        footerWidgetBackground.velocity({
//            width: footerWidgetBackgroundWidthStart,
//            height: footerWidgetBackgroundHeightStart,
//            translateX: footerWidgetBackgroundTranslateXStart,
//            translateY: footerWidgetBackgroundTranslateYStart,
            opacity: '0.05'
        }, {
            duration: 0
        });

//        footerWidgetBackground2.velocity({
//            width: footerWidgetBackgroundWidthStart,
//            height: footerWidgetBackgroundHeightStart,
//            translateX: footerWidgetBackgroundTranslateXStart,
//            translateY: footerWidgetBackgroundTranslateYStart
//        }, {
//            duration: 0
//        });
    } else {
//        footerWidget.css({
//            'borderLeftWidth': '',
//            'borderLeftStyle': '',
//            'borderLeftColor': ''
//        });
//        footerWidget.eq(0).css({
//            'backgroundColor': 'rgba(0,0,0,0.4)'
//        });
//        footerWidget.eq(1).css({
//            'backgroundColor': 'rgba(0,0,0,0.5)'
//        });
//        footerWidget.eq(2).css({
//            'backgroundColor': 'rgba(0,0,0,0.6)'
//        });
        footerWidgetBackground.velocity({
//            width: footerWidgetBackgroundWidthStart,
//            height: footerWidgetBackgroundHeightStart,
//            translateX: '',
//            translateY: '',
            opacity: '0.05'
        }, {
            duration: 0
        });
//        footerWidgetBackground2.eq(0).velocity({
//            top: '0',
//            right: '0',
//            translateX: '',
//            translateY: ''
//        }, {
//            duration: 0
//        });
//        footerWidgetBackground2.eq(1).velocity({
//            translateX: '',
//            translateY: ''
//        }, {
//            duration: 0
//        });
//        footerWidgetBackground2.eq(2).velocity({
//            translateX: '32px',
//            translateY: '-2px',
//            top: '0',
//            right: '0',
//            rotateZ: '-13deg'
//        }, {
//            duration: 0
//        });

//        footerWidgetBackground2.velocity({
//            width: footerWidgetBackgroundWidthStart,
//            height: footerWidgetBackgroundHeightStart
//        }, {
//            duration: 0
//        });
    }

    footerWidgetContent.hover(function () {
        if ($(window).width() > 1024) {
            $(this).parent(footerWidget).stop(1, 0).velocity({
                backgroundColor: ['#b1afaf', '#efefef']
            }, {
                duration: 500,
                easing: 'easeOutQuad',
                queue: false
            });
            $(this).find('.phone-text').stop(1, 0).velocity({
                fontSize: ['17px', '14px'],
                color: ['#ffffff', '#e87c1e']
            }, {
                duration: 1000,
                easing: 'easeOutExpo',
                queue: false,
                delay: 100
            });
            $(this).find('.email-text').stop(1, 0).velocity({
                fontSize: ['17px', '14px'],
                color: ['#ffffff', '#e87c1e']
            }, {
                duration: 1000,
                easing: 'easeOutExpo',
                queue: false,
                delay: 100
            });
            $(this).find('.location-text:first, .location-text:last').stop(1, 0).velocity({
                fontSize: ['17px', '14px'],
                lineHeight: ['17px', '14px'],
                color: ['#ffffff', '#e87c1e']
            }, {
                duration: 1000,
                easing: 'easeOutExpo',
                queue: false,
                delay: 100
            });
            $(this).find('.location-text').eq(1).stop(1, 0).velocity({
                fontSize: ['17px', '14px'],
                lineHeight: ['1.5em', '1.5em'],
                color: ['#ffffff', '#e87c1e']
            }, {
                duration: 1000,
                easing: 'easeOutExpo',
                queue: false,
                delay: 100
            });
            TweenMax.to($(this).find('.footer-widget-background'), 0.5, {
                scale: 1.4,
                ease: Quad.easeOut
            }, 0);
            TweenMax.to($(this).find('.footer-widget-background2'), 0.5, {
                opacity: 0.3,
                scale: 1.4,
                ease: Quad.easeOut
            }, 0);
//            $(this).find(footerWidgetBackground).stop(1, 0).velocity({
//                width: [
//				footerWidgetBackgroundWidthFinish,
//				footerWidgetBackgroundWidthStart
//			],
//                height: [
//				footerWidgetBackgroundHeightFinish,
//				footerWidgetBackgroundHeightStart
//			],
//                translateX: [
//				footerWidgetBackgroundTranslateXFinish,
//				footerWidgetBackgroundTranslateXStart
//			],
//                translateY: [
//				footerWidgetBackgroundTranslateYFinish,
//				footerWidgetBackgroundTranslateYStart
//			]
//            }, {
//                duration: 500,
//                easing: 'easeOutQuad',
//                queue: false
//            });
//            $(this).find(footerWidgetBackground2).stop(1, 0).velocity({
//                opacity: ['0.3', '0'],
//                width: [
//				footerWidgetBackgroundWidthFinish,
//				footerWidgetBackgroundWidthStart
//			],
//                height: [
//				footerWidgetBackgroundHeightFinish,
//				footerWidgetBackgroundHeightStart
//			],
//                translateX: [
//				footerWidgetBackgroundTranslateXFinish,
//				footerWidgetBackgroundTranslateXStart
//			],
//                translateY: [
//				footerWidgetBackgroundTranslateYFinish,
//				footerWidgetBackgroundTranslateYStart
//			]
//            }, {
//                duration: 500,
//                easing: 'easeOutQuad',
//                queue: false
//            });
        }
    }, function () {
        if ($(window).width() > 1024) {
            $(this).parent(footerWidget).stop(1, 0).velocity({
                backgroundColor: ['#efefef', '#b1afaf']
            }, {
                duration: 500,
                easing: 'easeOutQuad',
                queue: false
            });
            $(this).find('.phone-text').stop(1, 0).velocity({
                fontSize: ['14px', '17px'],
                color: ['#e87c1e', '#ffffff']
            }, {
                duration: 1000,
                easing: 'easeOutExpo',
                queue: false,
                delay: 100
            });
            $(this).find('.email-text').stop(1, 0).velocity({
                fontSize: ['14px', '17px'],
                color: ['#e87c1e', '#ffffff']
            }, {
                duration: 1000,
                easing: 'easeOutExpo',
                queue: false,
                delay: 100
            });
            $(this).find('.location-text:first, .location-text:last').stop(1, 0).velocity({
                fontSize: ['14px', '17px'],
                lineHeight: ['14px', '17px'],
                color: ['#e87c1e', '#ffffff']
            }, {
                duration: 1000,
                easing: 'easeOutExpo',
                queue: false,
                delay: 100
            });
            $(this).find('.location-text').eq(1).stop(1, 0).velocity({
                fontSize: ['14px', '17px'],
                lineHeight: ['1.5em', '1.5em'],
                color: ['#e87c1e', '#ffffff']
            }, {
                duration: 1000,
                easing: 'easeOutExpo',
                queue: false,
                delay: 100
            });
            TweenMax.to($(this).find('.footer-widget-background'), 0.5, {
                scale: 1,
                ease: Quad.easeOut
            }, 0);
            TweenMax.to($(this).find('.footer-widget-background2'), 0.5, {
                opacity: 0,
                scale: 1,
                ease: Quad.easeOut
            }, 0);
//            $(this).find(footerWidgetBackground).stop(1, 0).velocity({
//                width: [
//				footerWidgetBackgroundWidthStart,
//				footerWidgetBackgroundWidthFinish
//			],
//                height: [
//				footerWidgetBackgroundHeightStart,
//				footerWidgetBackgroundHeightFinish
//			],
//                translateX: [
//				footerWidgetBackgroundTranslateXStart,
//				footerWidgetBackgroundTranslateXFinish
//			],
//                translateY: [
//				footerWidgetBackgroundTranslateYStart,
//				footerWidgetBackgroundTranslateYFinish
//			]
//            }, {
//                duration: 500,
//                easing: 'easeOutQuad',
//                queue: false
//            });
//            $(this).find(footerWidgetBackground2).stop(1, 0).velocity({
//                opacity: ['0', '0.3'],
//                width: [
//				footerWidgetBackgroundWidthStart,
//				footerWidgetBackgroundWidthFinish
//			],
//                height: [
//				footerWidgetBackgroundHeightStart,
//				footerWidgetBackgroundHeightFinish
//			],
//                translateX: [
//				footerWidgetBackgroundTranslateXStart,
//				footerWidgetBackgroundTranslateXFinish
//			],
//                translateY: [
//				footerWidgetBackgroundTranslateYStart,
//				footerWidgetBackgroundTranslateYFinish
//			]
//            }, {
//                duration: 500,
//                easing: 'easeOutQuad',
//                queue: false
//            });
        }
    });

    logoContainer.find('#logo-black.mobile').hide();

    regularLink.click(function (e) {
        e.preventDefault(); // prevent default anchor behavior
        var goTo = this.getAttribute("href"); // store anchor href

        $('#loading-circle').stop(1, 1).velocity({
            width: ['100%', '50%'],
            height: ['100%', '50%'],
            translateX: ['0px', '12.5px'],
            translateY: ['0px', '12.5px']
        }, {
            duration: 1000,
            easing: 'easeOutCirc'
        });

        loadingContainer.stop(1, 1).fadeIn(0).velocity({
            opacity: ['1', '0']
        }, {
            duration: 500,
            easing: 'swing'
        });

        setTimeout(function () {
            window.location = goTo;
        }, 500);
    });

    portfolioLink.click(function (e) {
        e.preventDefault(); // prevent default anchor behavior
        var goTo = this.getAttribute("href"); // store anchor href

        $('#loading-circle').stop(1, 1).velocity({
            width: ['100%', '50%'],
            height: ['100%', '50%'],
            translateX: ['0px', '12.5px'],
            translateY: ['0px', '12.5px']
        }, {
            duration: 1000,
            easing: 'easeOutCirc'
        });

        content.stop(1, 1).velocity({
            opacity: ['0', '1']
        }, {
            duration: 500,
            easing: 'easeOutCirc'
        });

        loadingContainer.stop(1, 1).fadeIn(0).velocity({
            opacity: ['1', '0']
        }, {
            duration: 500,
            easing: 'swing'
        });

        setTimeout(function () {
            window.location = goTo;
        }, 500);
    });

    setInterval(function hello() {
        var desktopCurrent = slide.eq(desktopCounter),
            mobileCurrent = slide.eq(mobileCounter);

        if ($(window).width() > 1024) {

            var currentText = slideText.eq(desktopCounter),
                currentTextNormal = currentText.find(slideTextNormal),
                currentTextEmphasized = currentText.find(slideTextEmphasized);

            currentText.css({
                'opacity': '1'
            }).velocity({
                rotateY: ['1deg', '90deg'],
                translateX: ['5vw', '50vw'],
                translateY: ['-10vh', '10vh']
            }, {
                duration: emphasizedSpeed,
                easing: emphasizedEase
            }).siblings('.slide-text').velocity({
                opacity: '0'
            }, {
                duration: 500,
                easing: 'easeOutBack'
            });

            currentTextNormal.css('opacity', '0');

            currentTextEmphasized.css('opacity', '0').velocity({
                opacity: ['1', '0']
            }, {
                duration: 1000,
                easing: 'swing',
                complete: function () {
                    currentTextNormal.velocity({
                        opacity: ['1', '0']
                    }, {
                        duration: 1000,
                        easing: 'swing'
                    });
                }
            });

            desktopCurrent.css({
                'width': slideDesktopWidthStart,
                'zIndex': '12'
            }).velocity({
                width: [
                slideDesktopWidthFinish,
                slideDesktopWidthStart
            ],
                translateX: [
                slideDesktopTranslateXFinish,
                slideDesktopTranslateXStart
            ]
            }, {
                duration: speed,
                easing: 'easeOutCirc',
                queue: false,
                complete: function () {
                    $(this).css('zIndex', '1').velocity({
                        scale: '100%',
                        opacity: 0
                    }, {
                        duration: 0,
                        delay: 2000
                    });
                }
            }).velocity({
                opacity: ['1', '0']
            }, {
                duration: 1000,
                queue: false
            });

            /*        desktopCurrent.css('zIndex','13').velocity({
                        width:[
                            '100vw',
                            '150vw'
                        ],
                        translateX:[
                            '0vw',
                            '-' + '25vw'
                        ]
                    }, {
                        duration:speed,
                        easing:sliderEase,
            			queue:false,
            			complete:function() {
            				$(this).css('zIndex','12').velocity({
            					opacity:0
            				}, {
            					duration:0,
            					delay:1000,
            					complete:function(){
                                                    $(this).css('zIndex','-999').velocity({
                                                    width: '150vw',
                                                    translateX:'-' + '25vw'
                                                    }, {
                                                        duration:0
                                                    });
                                }
            				});
            			}
                    }).velocity({opacity:['1','0']},{duration:1000,easing:'swing',queue:false});*/
        } else {

            var currentText = slideText.eq(desktopCounter),
                currentTextNormal = currentText.find(slideTextNormal),
                currentTextEmphasized = currentText.find(slideTextEmphasized);

            currentText.css('opacity', '1').velocity({
                rotateY: ['-10deg', '90deg'],
                translateX: ['0vw', '50vw'],
                translateY: ['-20vh', '0vh']
            }, {
                duration: emphasizedSpeed,
                easing: emphasizedEase
            }).siblings('.slide-text').velocity({
                opacity: '0'
            }, {
                duration: 500,
                easing: 'easeOutBack'
            });

            currentTextNormal.css('opacity', '0');

            currentTextEmphasized.css('opacity', '0').velocity({
                opacity: ['1', '0']
            }, {
                duration: 1000,
                easing: 'swing',
                complete: function () {
                    currentTextNormal.velocity({
                        opacity: ['1', '0']
                    }, {
                        duration: 1000,
                        easing: 'swing'
                    });
                }
            });

            mobileCurrent.css({
                'width': slideMobileWidthStart,
                'left': slideMobileTranslateXStart,
                'zIndex': '12'
            }).velocity({
                scale: ['66%']
            }, {
                duration: speed,
                easing: 'easeOutCirc',
                queue: false,
                complete: function () {
                    $(this).css('zIndex', '1').velocity({
                        scale: '100%',
                        opacity: 0
                    }, {
                        duration: 0,
                        delay: 2000
                    });
                }
            }).velocity({
                opacity: ['1', '0']
            }, {
                duration: 1000,
                queue: false
            });
            //        .velocity("callout.pulse", {duration:1500,queue:false,delay:1000});
            /*
            
        mobileCurrent.css('zIndex','12').velocity({
            width:[
                '200vw',
                '300vw'
            ],
            translateX:[
                '-20%',
                '-30%'
            ],
            opacity:['1','0']
        }, {
            duration:speed,
            easing:sliderEaseMobile,
			queue:false,
			complete:function() {
				$(this).css('zIndex','13').velocity({
                    opacity:['0','1']
                }, {
                    duration:1000
                });
			}
        });*/
        }
        if (desktopCounter < (slide.length - 1)) {
            desktopCounter++;
        } else {
            desktopCounter = 0;
        }
        if (mobileCounter < (slide.length - 1)) {
            mobileCounter++;
        } else {
            mobileCounter = 0;
        }

        return hello;
    }(), duration);

    menuButtonContainer.velocity({
        opacity: ['1', '0']
    }, {
        duration: 500
    });

    logoContainer.velocity({
        opacity: ['1', '0']
    }, {
        duration: 500
    });

    var unclicked = true;

    header.hide(0).css('opacity', '1');

    /*    menuButtonContainer.mousedown(function(e) {
    		e.preventDefault();
    	});*/

    menuButtonContainer.mouseup(function (e) {
        e.preventDefault();

        /* if ($(window).width() < 1024) {
		$('body').css({
			'position':'fixed',
			'overflow':'hidden'
		});
        } */

        if ($(window).width() < 1024) {
            navItem.css('opacity', '0');
        }
        $(this).stop(1, 0).fadeOut(250);
        header.stop(1, 0).fadeIn(250);
        if ($(window).width() > 1024) {
            logoContainerClicked.stop(1, 0).fadeIn(250);
            /*logoContainer.stop(1,0).fadeOut(250);*/
        }
        if ($(window).width() < 1024) {
            logoContainerClicked.stop(1, 0).fadeIn(250);
            /*logoContainer.stop(1,0).fadeOut(250);*/
        }
        menuButtonContainerClicked.stop(1, 0).fadeIn(250);

        var navItemDelay = 0;
        if ($(window).width() < 1024) {
            for (i = 0; i < navItem.length; i++) {
                var current = navItem.eq(i);

                current.velocity(
                    "transition.slideUpIn", {
                        duration: 500,
                        easing: 'swing',
                        delay: navItemDelay += 100
                    });
            }
        } else {
            navItem.css('opacity', '1');
        }

        if ($(window).width() > 1024) {
            navItems.css({
                'right': 50 + $('#menu-btn-container').width() + ((($(window).width() - $('#logo-container').width() - $('#menu-btn-container').width()) - 100) / 2) - ($('#nav-items').width() / 2)
            });
        } else {
            navItems.css({
                'right': '0px'
            });
        }
    });

    menuButtonContainerClicked.mousedown(function (e) {
        e.preventDefault();
    });

    menuButtonContainerClicked.mouseup(function (e) {
        e.preventDefault();

        if ($(window).width() < 1024) {
            $('body').css({
                'position': '',
                'overflow': ''
            });
        }

        $(this).stop(1, 0).fadeOut(250);
        header.stop(1, 0).fadeOut(250);
        if ($(window).width() > 1024) {
            logoContainerClicked.stop(1, 0).fadeOut(250);
            /*logoContainer.stop(1,0).fadeIn(0);*/
        }
        if ($(window).width() < 1024) {
            logoContainerClicked.stop(1, 0).fadeOut(250);
            /*logoContainer.stop(1,0).fadeOut(250);*/
        }
        menuButtonContainer.stop(1, 0).fadeIn(250);
    });

    headerPageCover.mouseup(function (e) {
        e.preventDefault();
        header.stop(1, 0).fadeOut(250);
        if ($(window).width() > 1024) {
            logoContainerClicked.stop(1, 0).fadeOut(250);
            /*logoContainer.stop(1,0).fadeIn(0);*/
        }
        if ($(window).width() < 1024) {
            logoContainerClicked.stop(1, 0).fadeOut(250);
            /*logoContainer.stop(1,0).fadeOut(250);*/
        }
        menuButtonContainerClicked.stop(1, 0).fadeOut(250);
        menuButtonContainer.stop(1, 0).fadeIn(250);
    });

    if ($(window).width() < 1024) {
        var transparentBackground = 'transparent';
        /*regularLink.on({
            'touchstart': function(e) {
        		e.preventDefault();
                var goTo = this.getAttribute("href");
        		$(this).stop(1,0).velocity({
        			color:'#ffffff'
        		}, {
        			duration:0,
        			queue:false
        		});
        		$(this).parent('.nav-item-text').next('.nav-item-text-bg-rollover').delay(250).velocity({
        			opacity:['1','0']
        		}, {
        			duration:0,
        			queue:false
        		});
            }
        });
        regularLink.on({
            'touchend': function(e) {
        		e.preventDefault();
                var goTo = this.getAttribute("href");
        		$(this).delay(250).velocity({
        			color:'#000000'
        		}, {
        			duration:500,
        			easing:'easeInQuad',
        			queue:false
        		});
        		$(this).parent('.nav-item-text').next('.nav-item-text-bg-rollover').delay(250).velocity({
        			opacity:['0','1']
        		}, {
        			duration:500,
        			easing:'easeInQuad',
        			queue:false
        		});
                
                loadingContainer.stop(1,1).fadeIn(0).velocity({
        			opacity:['1', '0']
        		}, {
        			duration:500,
        			easing:'swing'
        		});

                setTimeout(function(){
                     window.location = goTo;
                },500);  
            }
        });*/
        regularLink.on(
            'mousedown',
            function () {
                $(this).stop(1, 0).velocity({
                    color: '#ffffff'
                }, {
                    duration: 0,
                    queue: false
                });
                $(this).parent('.nav-item-text').next('.nav-item-text-bg-rollover').delay(250).velocity({
                    opacity: ['1', '0']
                }, {
                    duration: 0,
                    queue: false
                });
            }
        );
        /*regularLink.on(
            'mouseup', function() {
        		$(this).delay(250).velocity({
        			color:'#ffffff'
        		}, {
        			duration:1500,
        			easing:'easeInQuad',
        			queue:false
        		});
        		$(this).parent('.nav-item-text').next('.nav-item-text-bg-rollover').delay(250).velocity({
        			opacity:['0','1']
        		}, {
        			duration:1500,
        			easing:'easeInQuad',
        			queue:false
        		});
                
                loadingContainer.stop(1,1).fadeIn(0).velocity({
        			opacity:['1', '0']
        		}, {
        			duration:500,
        			easing:'swing'
        		});
            }
        );*/
    }

    /*        e.preventDefault();                  
            var goTo = this.getAttribute("href");*/



    $(window).resize(function () {

        portfolioYoutubeIframe.css({
            height: portfolioYoutubeIframe.width() * 0.56
        });

        if ($(window).width() > 1024) {
            footerWidgetBackground.velocity({
//                width: footerWidgetBackgroundWidthStart,
//                height: footerWidgetBackgroundHeightStart,
//                translateX: footerWidgetBackgroundTranslateXStart,
//                translateY: footerWidgetBackgroundTranslateYStart,
                opacity: '0.05'
            }, {
                duration: 0
            });

//            footerWidgetBackground2.velocity({
//                width: footerWidgetBackgroundWidthStart,
//                height: footerWidgetBackgroundHeightStart,
//                translateX: footerWidgetBackgroundTranslateXStart,
//                translateY: footerWidgetBackgroundTranslateYStart
//            }, {
//                duration: 0
//            });
        } else {
//            footerWidget.css({
//                'borderLeftWidth': '',
//                'borderLeftStyle': '',
//                'borderLeftColor': ''
//            });
            footerWidgetBackground.velocity({
//                width: footerWidgetBackgroundWidthStart,
//                height: footerWidgetBackgroundHeightStart,
//                translateX: '',
//                translateY: '',
                opacity: '0.05'
            }, {
                duration: 0
            });
//            footerWidgetBackground.eq(0).velocity({
//                top: '0',
//                right: '0'
//            }, {
//                duration: 0
//            });
//            footerWidgetBackground.eq(2).velocity({
//                top: '0',
//                right: '0'
//            }, {
//                duration: 0
//            });
//            footerWidgetBackground2.eq(0).velocity({
//                top: '0',
//                right: '0',
//                translateX: '',
//                translateY: ''
//            }, {
//                duration: 0
//            });
//            footerWidgetBackground2.eq(1).velocity({
//                translateX: '',
//                translateY: ''
//            }, {
//                duration: 0
//            });
//            footerWidgetBackground2.eq(2).velocity({
//                translateX: '32px',
//                translateY: '-2px',
//                top: '0',
//                right: '0',
//                rotateZ: '-13deg'
//            }, {
//                duration: 0
//            });
//
//            footerWidgetBackground2.velocity({
//                width: footerWidgetBackgroundWidthStart,
//                height: footerWidgetBackgroundHeightStart
//            }, {
//                duration: 0
//            });
        }

        passwordSubmit.hover(function () {
            if ($(window).width() > 1024) {
                $(this).stop(1, 0).velocity({
                    backgroundColor: ['#c56f24', '#000000']
                }, {
                    duration: 500,
                    easing: 'easeOutQuad'
                });
            }
        }, function () {
            if ($(window).width() > 1024) {
                $(this).stop(1, 0).velocity({
                    backgroundColor: ['#000000', '#c56f24']
                }, {
                    duration: 500,
                    easing: 'easeOutQuad'
                });
            }
        });

        if ($(window).width() > 1024) {

            $('body').css({
                'position': '',
                'overflow': ''
            });
            $('#menu-btn-container').stop(1, 0).fadeIn(0);
            $('#menu-btn-container-clicked').stop(1, 0).fadeOut(0);
            $('#header').stop(1, 0).fadeOut(0);
            $('#logo-container-clicked').stop(1, 0).fadeOut(0);
            /*logoContainer.stop(1,0).fadeIn(0);*/
        }
        if ($(window).width() < 1024) {

            $('.nav-item').stop(1, 1).css('transform', '');

            $('#logo-container-clicked').stop(1, 0).fadeOut(0);
            /*logoContainer.stop(1,0).fadeOut(250);*/
        }

        if ($(window).width() > 1024) {
            $('#home-footer-container').css({
                top: $(window).height() * 0.85
            });
            $('.mobile').hide(0);
            $('.ifa-map').css({
                width: $(window).width() * 0.48,
                minHeight: $('.form-body').height() + $('.form-footer').height() + $('.form-intro').height()
            });
        } else {
            $('.mobile').show(0);
            $('.ifa-map').css({
                width: $(window).width(),
                height: $(window).height() * 0.25
            });
        }

        if ($(window).width() > 1024) {
            $('#nav-items').css(
                'right', 50 + $('#menu-btn-container').width() + ((($(window).width() - $('#logo-container').width() - $('#menu-btn-container').width()) - 100) / 2) - ($('#nav-items').width() / 2) + 'px'
            );
        } else {
            $('#nav-items').css(
                'right', '0px'
            );
        }

        //        setInterval(function hello() {
        //        var desktopCurrent = slide.eq(desktopCounter),
        //			mobileCurrent = slide.eq(mobileCounter);
        //			
        //		if ($(window).width() > 1024) {
        //        desktopCurrent.fadeIn(0).css({'zIndex':'11','backgroundPosition':'top'}).velocity({
        //           opacity:['1','0'],
        //           backgroundSize:['150%','100%']
        //        }, {
        //            duration:speed,
        //            easing:'easeOutQuart',
        //			complete:function(){$(this).css('zIndex','10')}
        //        });
        //		} else {   
        //        mobileCurrent.fadeIn(0).css({'zIndex':'11','backgroundPosition':'center'}).velocity({
        //           opacity:['1','0']
        //        }, {
        //            duration:speed,
        //            easing:'easeOutQuart',
        //			complete:function(){$(this).css('zIndex','10')}
        //        });
        //		}
        //            if (desktopCounter < (slide.length - 1)) {
        //            desktopCounter++;
        //            } else {
        //                desktopCounter = 0;
        //            }
        //            if (mobileCounter < (slide.length - 1)) {
        //            mobileCounter++;
        //            } else {
        //                mobileCounter = 0;
        //            }
        //			
        //            return hello;
        //        }(), duration);

    });


});