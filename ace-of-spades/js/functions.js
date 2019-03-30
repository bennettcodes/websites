var

    jiggleInterval,
    jiggleIntervalCounter = 0,

    spadeInterval,
    spadeIntervalCounter = 0,

    logoInterval,
    logoIntervalCounter = 0,

    backgroundInterval,
    backgroundIntervalCounter = 0,

    headerInterval,
    headerIntervalCounter = 0;

/*var jiggleInterval = setInterval(function initial() {
    frontSvgDelay = 0;
    svgObjectDuration = 500;
    for (i = 0; i < svgObject.length; i++) {
        currentSvgObject = svgObject.eq(i);

        currentSvgObject.velocity({
        translateY:'-50px'
    }, {
        duration:250,
        easing:'swing',
        delay:frontSvgDelay+=100
    });

        currentSvgObject.velocity({
        translateY:'0px'
    }, {
        duration:svgObjectDuration,
        easing:'easeInQuad'
    });
    }
        
        return initial;
    }(),1050);*/

/*var spadeColorRotation = function() {
        logoSpadeBlack.velocity({
            fill: purpleRGBHex
        }, {
            duration: 900,
            easing: 'linear',
            queue: false,
            complete:function() {
                logoSpadeBlack.css('fill',purpleRGBHex);
                spadeInterval = setInterval(function() {
                spadeIntervalCounter++;
                logoSpadeBlack.velocity({
                    fill: [greenRGBHex,purpleRGBHex]
                }, {
                    duration: 300,
                    easing: 'linear',
                    queue:false,
                    delay: 0
                });
                    logoSpadeBlack.velocity({
                        fill: [blueRGBHex,greenRGBHex]
                }, {
                    duration: 300,
                    easing: 'linear',
                    queue:false,
                    delay: 300
                });
                    logoSpadeBlack.velocity({
                        fill: [purpleRGBHex,blueRGBHex]
                }, {
                    duration: 300,
                    easing: 'linear',
                    queue:false,
                    delay: 600
                });
            }, 900);
            }
        });
}*/

/*function backgroundImageRotation() {
    var backgroundImageRotationStart = function() {
        backgroundInterval = setInterval(function initialBackground() {
        backgroundDelay = 0;
        backgroundIntervalCounter++;
            for (i = 0; i < aboutBackground.length; i++) {
                var currentAboutBackground = aboutBackground.eq(i);
                
                currentAboutBackground.addClass(activeBackgroundString).velocity({
                    opacity:['1','0'],
                    scale:['2','1']
                }, {
                    duration:1000,
                    easing:'swing',
                    delay:backgroundDelay+=1000,
                    queue:true
                });
                
                currentAboutBackground.siblings(activeBackgroundFindString).removeClass(activeBackgroundString);
            }

            return initialBackground;
    }(), 4000);
}
    backgroundImageRotationStart();
};*/

function aboutBackgroundImageLoadIn() {
    aboutBackgroundImage.velocity({
        width: ['125%', '100%'],
        translateX: ['35vw', '10vw'],
        translateY: ['-4vh', '-8vh']
    }, {
        duration: 10000,
        queue: false,
        easing: 'easeInOutQuad'
    });
    aboutBackground.velocity({
        opacity: '1'
    }, {
        duration: 1000,
        queue: false,
        easing: 'swing'
    });

    aboutBackground.siblings(pageBackgroundFindString).velocity({
        opacity: '0'
    }, {
        duration: 1000,
        easing: 'swing',
        queue: false
    });
}

function aboutBackgroundImageLoadInInitial() {
    aboutBackgroundImage.velocity({
        width: ['125%', '100%'],
        translateX: ['35vw', '10vw'],
        translateY: ['-4vh', '-8vh']
    }, {
        duration: 10000,
        queue: false,
        easing: 'easeInOutQuad'
    });
    aboutBackgroundImage.velocity({
        opacity:['1','1']
    }, {
        duration: 1000,
        delay: 1000,
        queue: false
    });
    aboutBackground.velocity('stop',true).css('opacity','0').velocity({
        opacity: ['1','0']
    }, {
        duration: 1000,
        delay: 1000,
        queue: false,
        easing: 'swing'
    });
    aboutBackground.siblings(pageBackgroundFindString).velocity('stop',false).css('opacity','0');
}

function workBackgroundImageLoadIn() {
    workBackgroundImage.velocity({
        width: ['125%', '100%'],
        translateX: ['35vw', '10vw'],
        translateY: ['-4vh', '-8vh']
    }, {
        duration: 10000,
        queue: false,
        easing: 'easeInOutQuad'
    });
    workBackground.velocity({
        opacity: '1'
    }, {
        duration: 1000,
        queue: false,
        easing: 'swing'
    });

    workBackground.siblings(pageBackgroundFindString).velocity({
        opacity: '0'
    }, {
        duration: 1000,
        easing: 'swing',
        queue: false
    });
}

function workBackgroundImageLoadInInitial() {
    workBackgroundImage.velocity({
        width: ['125%', '100%'],
        translateX: ['35vw', '10vw'],
        translateY: ['-4vh', '-8vh']
    }, {
        duration: 10000,
        queue: false,
        easing: 'easeInOutQuad'
    });
    workBackgroundImage.velocity({
        opacity:['1','1']
    }, {
        duration: 1000,
        delay: 1000,
        queue: false
    });
    workBackground.velocity('stop',true).css('opacity','0').velocity({
        opacity: ['1','0']
    }, {
        duration: 1000,
        delay: 1000,
        queue: false,
        easing: 'swing'
    });
    workBackground.siblings(pageBackgroundFindString).velocity('stop',false).css('opacity','0');
}

function philosophyBackgroundImageLoadIn() {
    philosophyBackgroundImage.velocity({
        width: ['125%', '100%'],
        translateX: ['35vw', '10vw'],
        translateY: ['-4vh', '-8vh']
    }, {
        duration: 10000,
        queue: false,
        easing: 'easeInOutQuad'
    });
    philosophyBackground.velocity({
        opacity: '1'
    }, {
        duration: 1000,
        queue: false,
        easing: 'swing'
    });

    philosophyBackground.siblings(pageBackgroundFindString).velocity({
        opacity: '0'
    }, {
        duration: 1000,
        easing: 'swing',
        queue: false
    });
}

function philosophyBackgroundImageLoadInInitial() {
    philosophyBackgroundImage.velocity({
        width: ['125%', '100%'],
        translateX: ['35vw', '10vw'],
        translateY: ['-4vh', '-8vh']
    }, {
        duration: 10000,
        queue: false,
        easing: 'easeInOutQuad'
    });
    philosophyBackgroundImage.velocity({
        opacity:['1','1']
    }, {
        duration: 1000,
        delay: 1000,
        queue: false
    });
    philosophyBackground.velocity('stop',true).css('opacity','0').velocity({
        opacity: ['1','0']
    }, {
        duration: 1000,
        delay: 1000,
        queue: false,
        easing: 'swing'
    });
    philosophyBackground.siblings(pageBackgroundFindString).velocity('stop',false).css('opacity','0');
}

function contactBackgroundImageLoadIn() {
    contactBackgroundImage.velocity({
        width: ['125%', '100%'],
        translateX: ['35vw', '10vw'],
        translateY: ['-4vh', '-8vh']
    }, {
        duration: 10000,
        queue: false,
        easing: 'easeInOutQuad'
    });
    contactBackground.velocity({
        opacity: '1'
    }, {
        duration: 1000,
        queue: false,
        easing: 'swing'
    });

    contactBackground.siblings(pageBackgroundFindString).velocity({
        opacity: '0'
    }, {
        duration: 1000,
        easing: 'swing',
        queue: false
    });
}

function contactBackgroundImageLoadInInitial() {
    contactBackgroundImage.velocity({
        width: ['125%', '100%'],
        translateX: ['35vw', '10vw'],
        translateY: ['-4vh', '-8vh']
    }, {
        duration: 10000,
        queue: false,
        easing: 'easeInOutQuad'
    });
    contactBackgroundImage.velocity({
        opacity:['1','1']
    }, {
        duration: 1000,
        delay: 1000,
        queue: false
    });
    contactBackground.velocity('stop',true).css('opacity','0').velocity({
        opacity: ['1','0']
    }, {
        duration: 1000,
        delay: 1000,
        queue: false,
        easing: 'swing'
    });
    contactBackground.siblings(pageBackgroundFindString).velocity('stop',false).css('opacity','0');
}

/*function backgroundLoadIn() {
    aboutBackgroundImage.velocity({
        width:['125%','100%'],
        translateX:['10%','0'],
        translateY:['-8%','-15%']
    }, {
        duration:10000,
        delay:1000,
        easing:'easeInOutQuad',
        queue:false
    });
    aboutBackgroundImage.velocity({
        opacity:['1','0']
    }, {
        duration:2000,
        delay:1000,
        easing:'swing',
        queue:false
    });
}*/

function chromeDetectionNotice() {
    if (!($.browser.chrome)) {
        chromeMessage.show().velocity({
            opacity: '1'
        }, {
            duration: 1000,
            easing: 'swing',
            queue: false
        });
        chromeClose.show().velocity({
            opacity: '1'
        }, {
            duration: 1000,
            easing: 'swing',
            queue: false
        });
    }
};

function chromeCloseHover() {
    chromeClose.mouseover(function () {
        if (!chromeClosed) {
            $(this).velocity({
                scale: '0.5',
                opacity: '0.75',
            }, {
                duration: 500,
                easing: 'easeOutCirc',
                queue: false
            });
        }
    });
    chromeClose.mouseout(function () {
        if (!chromeClosed) {
            $(this).velocity({
                scale: '1',
                opacity: '1',
            }, {
                duration: 500,
                easing: 'easeOutCirc',
                queue: false
            });
        }
    });
};

function chromeCloseClick() {
    chromeClose.mouseup(function () {
        chromeClosed = true;
        $(this).velocity({
            scale: '0',
            opacity: '0',
        }, {
            duration: 1000,
            easing: 'easeOutCirc',
            queue: false,
            complete: function () {
                $(this).hide();
            }
        });
        chromeMessage.velocity({
            rotateY: '-90deg',
            skewX: ['-45deg', 'swing'],
            scaleY: ['0', 'easeInQuad'],
            opacity: ['0', 'swing']
        }, {
            duration: 500,
            easing: 'easeInOutQuad',
            queue: false,
            complete: function () {
                $(this).hide();
            }
        });
    });
};

var logoColorRotation = function () {
    logoInterval = setInterval(function initialLogo() {
        logoIntervalCounter++;
        logoSpadeBlack.velocity({
            fill: purpleRGBHex
        }, {
            duration: 300,
            easing: 'linear',
            delay: 0
        });
        logoSpadeBlack.velocity({
            fill: blueRGBHex
        }, {
            duration: 300,
            easing: 'linear',
            delay: 300
        });
        logoSpadeBlack.velocity({
            fill: greenRGBHex
        }, {
            duration: 300,
            easing: 'linear',
            delay: 600
        });
        logoFill.velocity({
            fill: purpleRGBHex
        }, {
            duration: 300,
            easing: 'linear',
            delay: 0
        });
        logoFill.velocity({
            fill: blueRGBHex
        }, {
            duration: 300,
            easing: 'linear',
            delay: 300
        });
        logoFill.velocity({
            fill: greenRGBHex
        }, {
            duration: 300,
            easing: 'linear',
            delay: 600
        });

        return initialLogo;
    }(), 900);
}

var headerColorRotation = function () {
    headerInterval = setInterval(function initialHeader() {
        headerIntervalCounter++;
        aboutHeaderGraphic.velocity({
            fill: purpleRGBHex
        }, {
            duration: 300,
            easing: 'linear',
            delay: 0
        });
        aboutHeaderGraphic.velocity({
            fill: blueRGBHex
        }, {
            duration: 300,
            easing: 'linear',
            delay: 300
        });
        aboutHeaderGraphic.velocity({
            fill: greenRGBHex
        }, {
            duration: 300,
            easing: 'linear',
            delay: 600
        });

        return initialHeader;
    }(), 900);
}

function logoColorRevert() {
    clearInterval(logoInterval);
    logoIntervalCounter = 0;
    logoSpadeBlack.velocity('stop', true);
    svgObject.velocity('stop', true);
    logoSpadeBlack.velocity('stop', true).velocity({
        fill: blackRGBHex
    }, {
        duration: 900,
        easing: 'linear'
    });
    svgObject.velocity('stop', true).velocity({
        fill: whiteRGBHex
    }, {
        duration: 900,
        easing: 'linear'
    });
}

function headerColorRevert() {
    clearInterval(headerInterval);
    headerIntervalCounter = 0;
    svgHeader.velocity('stop', true);
    aboutHeaderGraphic.velocity('stop', true).velocity({
        fill: whiteRGBHex
    }, {
        duration: 900,
        easing: 'linear'
    });
}

function spadeColorRevert() {
    clearInterval(spadeInterval);
    clearInterval(jiggleInterval);
    jiggleIntervalCounter = 0;
    spadeIntervalCounter = 0;
    svgObject.velocity('stop', true);
    logoFill.velocity('stop', true);
    logoSpadeBlack.velocity('stop', true).velocity({
        fill: blackRGBHex
    }, {
        duration: 900,
        easing: 'linear'
    });
    logoFill.velocity({
        fill: whiteRGBHex
    }, {
        duration: 300,
        easing: 'linear',
        delay: 0
    });
}

function logoBounceUp() {
    if ($(window).width() > 1024) {
        logoSpadeBlack.velocity('stop', true);
        var spadeColorRotation = function () {
            spadeInterval = setInterval(function initialSpade() {
                spadeIntervalCounter++;
                logoSpadeBlack.velocity({
                    fill: purpleRGBHex
                }, {
                    duration: 300,
                    easing: 'linear',
                    delay: 0
                });
                logoSpadeBlack.velocity({
                    fill: blueRGBHex
                }, {
                    duration: 300,
                    easing: 'linear',
                    delay: 300
                });
                logoSpadeBlack.velocity({
                    fill: greenRGBHex
                }, {
                    duration: 300,
                    easing: 'linear',
                    delay: 600
                });
                logoFill.velocity({
                    fill: purpleRGBHex
                }, {
                    duration: 300,
                    easing: 'linear',
                    delay: 0
                });
                logoFill.velocity({
                    fill: blueRGBHex
                }, {
                    duration: 300,
                    easing: 'linear',
                    delay: 300
                });
                logoFill.velocity({
                    fill: greenRGBHex
                }, {
                    duration: 300,
                    easing: 'linear',
                    delay: 600
                });

                return initialSpade;
            }(), 900);
        };
        spadeColorRotation();
        logoClickRegion.velocity('stop').addClass('logoInMotion');
        logoTransitionActive = true;
        frontSvgDelay = 0;
        currentLogoTranslateY = '-' + ($(window).height() * 0.25);
        for (i = 0; i < svgObject.length; i++) {
            currentSvgObject = svgObject.eq(i);

            currentSvgObject.velocity({
                translateY: '-' + ($(window).height() * 0.25) + 'px'
            }, {
                duration: 1000,
                easing: 'easeOutCirc',
                delay: frontSvgDelay += 100,
                queue: false,
                complete: function () {
                    if (i === svgObject.length) {
                        logoTransitionActive = false;
                        console.log('successful.');
                    }
                }
            });
        }
        logoClickRegion.velocity({
            translateY: '-' + ($(window).height() * 0.25) + 'px'
        }, {
            duration: 1000,
            easing: 'easeOutCirc',
            queue: false,
            complete: function () {
                $(this).removeClass('logoInMotion').velocity({
                    translateX: '0vw'
                }, {
                    duration: 0
                });
            }
        });
        /*logoSpadeBlack.velocity('stop').velocity({
            fill: '#000000'
        }, {
            duration: 1000,
            easing: 'easeInQuad',
            queue: false,
        complete: function () {
            logoSpadeBlack.css('fill','#000000');
        }
        });*/
    }
};

function logoBounceDown() {
    if ($(window).width() > 1024) {
        spadeColorRevert();
        logoClickRegion.velocity('stop').addClass('logoInMotion');
        logoTransitionActive = true;
        frontSvgDelay = 0;
        currentLogoTranslateY = 0;
        for (i = 0; i < svgObject.length; i++) {
            currentSvgObject = svgObject.eq(i);

            currentSvgObject.velocity({
                translateY: 0 + 'px'
            }, {
                duration: 1000,
                easing: 'easeOutCirc',
                delay: frontSvgDelay += 100,
                queue: false,
                complete: function () {
                    if (i === svgObject.length) {
                        logoTransitionActive = false;
                        console.log('successful.');
                    }
                }
            });
            logoClickRegion.velocity({
                translateY: 0 + 'px'
            }, {
                duration: 1000,
                easing: 'easeOutCirc',
                queue: false,
                complete: function () {
                    $(this).removeClass('logoInMotion').velocity({
                        translateX: '0vw'
                    }, {
                        duration: 0
                    });
                }
            });
        }
    }
};

function logoClickBounceDown() {
    if ($(window).width() > 1024) {
        spadeColorRevert();
        logoClickRegion.velocity('stop').addClass('logoInMotion');
        logoTransitionActive = true;
        frontSvgDelay = 0;
        currentLogoTranslateY = 0;
        for (i = 0; i < svgObject.length; i++) {
            currentSvgObject = svgObject.eq(i);

            currentSvgObject.velocity({
                translateY: 0 + 'px'
            }, {
                duration: 1000,
                easing: 'easeOutCirc',
                delay: frontSvgDelay += 100,
                queue: false,
                complete: function () {
                    if (i === svgObject.length) {
                        logoTransitionActive = false;
                        console.log('successful.');
                    }
                }
            });

            logoClickRegion.velocity({
                translateY: 0 + 'px'
            }, {
                duration: 1000,
                easing: 'easeOutCirc',
                queue: false,
                complete: function () {
                    $(this).removeClass('logoInMotion').velocity({
                        translateX: '0vw'
                    }, {
                        duration: 0
                    });
                }
            });
        }
    }
};

function logoJiggleStop() {
    clearInterval(jiggleInterval);
}

function scrollYChecker() {
    if ($(window).height() > '100vh') {
        aboutContainer.css({
            overflowY: 'scroll'
        });
    } else {
        aboutContainer.css({
            overflowY: ''
        });
    }
}

function strokeBackgroundRandomGenerator() {

    strokeBackgroundInnerContainer.empty();

    for (i = 0; i < 52; i++) {
        randomStroke = r(0, 3);
        randomTopStrokeVertical = r(0, 100);
        randomBottomStrokeVertical = r(0, 100);
        randomLeftStrokeHorizontal = r(0, 100);
        randomRightStrokeHorizontal = r(0, 100);
        strokeMarkup = '<div class="stroke-bg-container ' + strokeDirections[randomStroke] + '-stroke-bg-container">' +
            '<div class="stroke-bg ' + strokeDirections[randomStroke] + '-stroke-bg">' +
            topStrokeInnerContent[randomStroke] +
            '</div>' +
            '</div>';
        strokeBackgroundInnerContainer.append(strokeMarkup);

        variableRedefine();

        currentStroke = strokeBackgroundContainer.eq(i);

        switch (true) {
        case currentStroke.hasClass(topStrokeBackgroundContainerString):
            currentStroke.css({
                top: randomTopStrokeVertical + 'vh'
            });
            break;
        case currentStroke.hasClass(bottomStrokeBackgroundContainerString):
            currentStroke.css({
                bottom: randomBottomStrokeVertical + 'vh'
            });
            break;
        case currentStroke.hasClass(leftStrokeBackgroundContainerString):
            currentStroke.css({
                left: randomLeftStrokeHorizontal + 'vw'
            });
            break;
        case currentStroke.hasClass(rightStrokeBackgroundContainerString):
            currentStroke.css({
                right: randomRightStrokeHorizontal + 'vw'
            });
            break;
        }
    }

};

strokeBackgroundRandomGenerator();

function strokeBackgroundRandomPattern() {
    strokeBackgroundPatternInMotion = true;
    topStrokeBackground.velocity('stop').css('opacity', '0').velocity({
        translateX: ['-' + topStrokeBackground.outerWidth(), '0px'],
        opacity: [randomOpacity, randomOpacity]
    }, {
        duration: 3000,
        easing: 'easeInOutQuart',
        queue: false
    });
    bottomStrokeBackground.velocity('stop').css('opacity', '0').velocity({
        translateX: [bottomStrokeBackground.outerWidth(), '0px'],
        opacity: [randomOpacity, randomOpacity]
    }, {
        duration: 3000,
        easing: 'easeInOutQuart',
        queue: false
    });
    leftStrokeBackground.velocity('stop').css('opacity', '0').velocity({
        translateY: ['-' + leftStrokeBackground.outerHeight(), '0px'],
        opacity: [randomOpacity, randomOpacity]
    }, {
        duration: 3000,
        easing: 'easeInOutQuart',
        queue: false
    });
    rightStrokeBackground.velocity('stop').css('opacity', '0').velocity({
        translateY: [rightStrokeBackground.outerHeight(), '0px'],
        opacity: [randomOpacity, randomOpacity]
    }, {
        duration: 3000,
        easing: 'easeInOutQuart',
        queue: false,
        complete: function () {
            strokeBackgroundPatternComplete = true;
            strokeBackgroundPatternInMotion = false;
        }
    });
};

function aboutBodyFlyIn() {
    aboutContainerBackground.velocity({
        opacity: '1'
    }, {
        duration: 1000,
        delay: 2000,
        easing: 'easeOutCirc',
        queue: false
    });
    if (pageIndex === 0) {
        aboutBody.velocity({
            skewY: [zeroDegrees, zeroDegrees],
            rotateX: [zeroDegrees, zeroDegrees],
            rotateY: [zeroDegrees, zeroDegrees],
            scaleX: ['1', '1'],
            scaleY: ['1', '1'],
            translateX: ['0vw', '0vw'],
            translateY: ['0vh', '0vh'],
            translateZ: ['0vw', '0vw']
        }, {
            duration: 1500,
            delay: 1000,
            easing: 'easeInOutQuad',
            queue: false
        });
        aboutBody.css('opacity', '0').velocity({
            opacity: ['1', '0']
        }, {
            duration: 1000,
            delay: 1000,
            easing: 'swing',
            queue: false
        });
        aboutContainer.find(textBodyBackgroundFindString).velocity('stop', true).velocity({
            opacity: ['0.15', '0']
        }, {
            duration: 1500,
            delay: 1000,
            easing: 'easeInQuart',
            queue: false
        });
        aboutContainer.find(headerStaggerInFindString).velocity('stop', true).css({'opacity':'0','transformOrigin':'left top'}).velocity({
            translateX: ['-50px', '-400px'],
            translateY:['0px','0px'],
            translateZ:['0px','10vw'],
            rotateX:['0deg', '90deg'],
            rotateY:['0deg', '-30deg'],
            rotateZ:['0deg', '0deg'],
            skewX:['0deg','0deg'],
            skewY:['0deg','0deg'],
            skewZ:['0deg','0deg'],
            opacity: ['1', 'swing', '0']
        }, {
            duration: 2000,
            easing: 'easeOutQuad',
            delay: 1000,
            queue: false
        });
        aboutContainer.find(paragraphStaggerInFindString).velocity('stop', true).css('opacity', '0').velocity(
            "transition.slideRightBigIn", {
                duration: 1500,
                easing: 'easeOutExpo',
                stagger: 250,
                delay: 1500,
                queue: false
            });
        aboutContainer.find(textBodyBackgroundFindString).velocity({
            opacity: ['0', '0.15']
        }, {
            duration: 1500,
            delay: 2500,
            easing: 'swing'
        });
        strokeInMotion = true;
        aboutContainer.find(topStrokeFindString).velocity('stop').css('opacity', '0').velocity({
            translateX: ['-' + aboutContainer.find(topStrokeFindString).outerWidth(), '0px'],
            opacity: ['1', '1']
        }, {
            duration: 3000,
            delay: 1000,
            easing: 'easeInOutQuart',
            queue: false
        });
        aboutContainer.find(bottomStrokeFindString).velocity('stop').css('opacity', '0').velocity({
            translateX: [aboutContainer.find(bottomStrokeFindString).outerWidth(), '0px'],
            opacity: ['1', '1']
        }, {
            duration: 3000,
            delay: 1000,
            easing: 'easeInOutQuart',
            queue: false
        });
        aboutContainer.find(leftStrokeFindString).velocity('stop').css('opacity', '0').velocity({
            translateY: ['-' + aboutContainer.find(leftStrokeFindString).outerHeight(), '0px'],
            opacity: ['1', '1']
        }, {
            duration: 3000,
            delay: 1000,
            easing: 'easeInOutQuart',
            queue: false
        });
        aboutContainer.find(rightStrokeFindString).velocity('stop').css('opacity', '0').velocity({
            translateY: [aboutContainer.find(rightStrokeFindString).outerHeight(), '0px'],
            opacity: ['1', '1']
        }, {
            duration: 3000,
            delay: 1000,
            easing: 'easeInOutQuart',
            queue: false,
            complete: function () {
                strokeComplete = true;
                strokeInMotion = false;
            }
        });
    } else if (pageIndex !== 1) {
        aboutBody.velocity({
            skewY: [zeroDegrees, zeroDegrees],
            rotateX: [zeroDegrees, zeroDegrees],
            rotateY: [zeroDegrees, zeroDegrees],
            scaleX: ['1', '1'],
            scaleY: ['1', '1'],
            translateX: ['0vw', '0vw'],
            translateY: ['0vh', '0vh'],
            translateZ: ['0vw', '0vw']
        }, {
            duration: 1500,
            easing: 'easeInOutQuad',
            queue: false
        });
        aboutBody.velocity({
            opacity: ['1', '0']
        }, {
            duration: 1000,
            easing: 'swing',
            queue: false
        });
        aboutContainer.find(textBodyBackgroundFindString).velocity('stop', true).velocity({
            opacity: ['0.15', '0']
        }, {
            duration: 1500,
            easing: 'easeInQuart',
            queue: false
        });
        aboutContainer.find(headerStaggerInFindString).velocity('stop', true).css({'opacity':'0','transformOrigin':'left top'}).velocity({
            translateX: ['-50px', '-400px'],
            translateY:['0px','0px'],
            translateZ:['0px','10vw'],
            rotateX:['0deg', '90deg'],
            rotateY:['0deg', '-30deg'],
            rotateZ:['0deg', '0deg'],
            skewX:['0deg','0deg'],
            skewY:['0deg','0deg'],
            skewZ:['0deg','0deg'],
            opacity: ['1', 'swing', '0']
        }, {
            duration: 2000,
            easing: 'easeOutQuad',
            queue: false
        });
        aboutContainer.find(paragraphStaggerInFindString).velocity('stop', true).css('opacity', '0').velocity(
            "transition.slideRightBigIn", {
                duration: 1500,
                easing: 'easeOutExpo',
                stagger: 250,
                delay: 1500,
                queue: false
            });
        aboutContainer.find(textBodyBackgroundFindString).velocity({
            opacity: ['0', '0.15']
        }, {
            duration: 1500,
            delay: 1500,
            easing: 'swing'
        });
        strokeInMotion = true;
        aboutContainer.find(topStrokeFindString).velocity('stop').css('opacity', '0').velocity({
            translateX: ['-' + aboutContainer.find(topStrokeFindString).outerWidth(), '0px'],
            opacity: ['1', '1']
        }, {
            duration: 3000,
            easing: 'easeInOutQuart',
            queue: false
        });
        aboutContainer.find(bottomStrokeFindString).velocity('stop').css('opacity', '0').velocity({
            translateX: [aboutContainer.find(bottomStrokeFindString).outerWidth(), '0px'],
            opacity: ['1', '1']
        }, {
            duration: 3000,
            easing: 'easeInOutQuart',
            queue: false
        });
        aboutContainer.find(leftStrokeFindString).velocity('stop').css('opacity', '0').velocity({
            translateY: ['-' + aboutContainer.find(leftStrokeFindString).outerHeight(), '0px'],
            opacity: ['1', '1']
        }, {
            duration: 3000,
            easing: 'easeInOutQuart',
            queue: false
        });
        aboutContainer.find(rightStrokeFindString).velocity('stop').css('opacity', '0').velocity({
            translateY: [aboutContainer.find(rightStrokeFindString).outerHeight(), '0px'],
            opacity: ['1', '1']
        }, {
            duration: 3000,
            easing: 'easeInOutQuart',
            queue: false,
            complete: function () {
                strokeComplete = true;
                strokeInMotion = false;
            }
        });
    }
};

function workBodyFlyIn() {
    workContainerBackground.velocity({
        opacity: '1'
    }, {
        duration: 1000,
        delay: 2000,
        easing: 'easeOutCirc',
        queue: false
    });
    if (pageIndex === 0) {
        workBody.velocity({
            skewY: [zeroDegrees, zeroDegrees],
            rotateX: [zeroDegrees, zeroDegrees],
            rotateY: [zeroDegrees, zeroDegrees],
            scaleX: ['1', '1'],
            scaleY: ['1', '1'],
            translateX: ['0vw', '0vw'],
            translateY: ['0vh', '0vh'],
            translateZ: ['0vw', '0vw']
        }, {
            duration: 1500,
            delay: 1000,
            easing: 'easeInOutQuad',
            queue: false
        });
        workBody.css('opacity', '0').velocity({
            opacity: ['1', '0']
        }, {
            duration: 1000,
            delay: 1000,
            easing: 'swing',
            queue: false
        });
        workContainer.find(textBodyBackgroundFindString).velocity('stop', true).velocity({
            opacity: ['0.15', '0']
        }, {
            duration: 1500,
            delay: 1000,
            easing: 'easeInQuart',
            queue: false
        });
        workContainer.find(headerStaggerInFindString).velocity('stop', true).css({'opacity':'0','transformOrigin':'left top'}).velocity({
            translateX: ['-50px', '-400px'],
            translateY:['0px','0px'],
            translateZ:['0px','10vw'],
            rotateX:['0deg', '90deg'],
            rotateY:['0deg', '-30deg'],
            rotateZ:['0deg', '0deg'],
            skewX:['0deg','0deg'],
            skewY:['0deg','0deg'],
            skewZ:['0deg','0deg'],
            opacity: ['1', 'swing', '0']
        }, {
            duration: 2000,
            easing: 'easeOutQuad',
            delay: 1000,
            queue: false
        });
        workContainer.find(paragraphStaggerInFindString).velocity('stop', true).css('opacity', '0').velocity(
            "transition.slideRightBigIn", {
                duration: 1500,
                easing: 'easeOutExpo',
                stagger: 250,
                delay: 1500,
                queue: false
            });
        workContainer.find(textBodyBackgroundFindString).velocity({
            opacity: ['0', '0.15']
        }, {
            duration: 1500,
            delay: 2500,
            easing: 'swing'
        });
        strokeInMotion = true;
        workContainer.find(topStrokeFindString).velocity('stop').css('opacity', '0').velocity({
            translateX: ['-' + workContainer.find(topStrokeFindString).outerWidth(), '0px'],
            opacity: ['1', '1']
        }, {
            duration: 3000,
            delay: 1000,
            easing: 'easeInOutQuart',
            queue: false
        });
        workContainer.find(bottomStrokeFindString).velocity('stop').css('opacity', '0').velocity({
            translateX: [workContainer.find(bottomStrokeFindString).outerWidth(), '0px'],
            opacity: ['1', '1']
        }, {
            duration: 3000,
            delay: 1000,
            easing: 'easeInOutQuart',
            queue: false
        });
        workContainer.find(leftStrokeFindString).velocity('stop').css('opacity', '0').velocity({
            translateY: ['-' + workContainer.find(leftStrokeFindString).outerHeight(), '0px'],
            opacity: ['1', '1']
        }, {
            duration: 3000,
            delay: 1000,
            easing: 'easeInOutQuart',
            queue: false
        });
        workContainer.find(rightStrokeFindString).velocity('stop').css('opacity', '0').velocity({
            translateY: [workContainer.find(rightStrokeFindString).outerHeight(), '0px'],
            opacity: ['1', '1']
        }, {
            duration: 3000,
            delay: 1000,
            easing: 'easeInOutQuart',
            queue: false,
            complete: function () {
                strokeComplete = true;
                strokeInMotion = false;
            }
        });
    } else if (pageIndex !== 2) {
        workBody.velocity({
            skewY: [zeroDegrees, zeroDegrees],
            rotateX: [zeroDegrees, zeroDegrees],
            rotateY: [zeroDegrees, zeroDegrees],
            scaleX: ['1', '1'],
            scaleY: ['1', '1'],
            translateX: ['0vw', '0vw'],
            translateY: ['0vh', '0vh'],
            translateZ: ['0vw', '0vw']
        }, {
            duration: 1500,
            easing: 'easeInOutQuad',
            queue: false
        });
        workBody.velocity({
            opacity: ['1', '0']
        }, {
            duration: 1000,
            easing: 'swing',
            queue: false
        });
        workContainer.find(textBodyBackgroundFindString).velocity('stop', true).velocity({
            opacity: ['0.15', '0']
        }, {
            duration: 1500,
            easing: 'easeInQuart',
            queue: false
        });
        workContainer.find(headerStaggerInFindString).velocity('stop', true).css({'opacity':'0','transformOrigin':'left top'}).velocity({
            translateX: ['-50px', '-400px'],
            translateY:['0px','0px'],
            translateZ:['0px','10vw'],
            rotateX:['0deg', '90deg'],
            rotateY:['0deg', '-30deg'],
            rotateZ:['0deg', '0deg'],
            skewX:['0deg','0deg'],
            skewY:['0deg','0deg'],
            skewZ:['0deg','0deg'],
            opacity: ['1', 'swing', '0']
        }, {
            duration: 2000,
            easing: 'easeOutQuad',
            queue: false
        });
        workContainer.find(paragraphStaggerInFindString).velocity('stop', true).css('opacity', '0').velocity(
            "transition.slideRightBigIn", {
                duration: 1500,
                easing: 'easeOutExpo',
                stagger: 250,
                delay: 1500,
                queue: false
            });
        workContainer.find(textBodyBackgroundFindString).velocity({
            opacity: ['0', '0.15']
        }, {
            duration: 1500,
            delay: 1500,
            easing: 'swing'
        });
        strokeInMotion = true;
        workContainer.find(topStrokeFindString).velocity('stop').css('opacity', '0').velocity({
            translateX: ['-' + workContainer.find(topStrokeFindString).outerWidth(), '0px'],
            opacity: ['1', '1']
        }, {
            duration: 3000,
            easing: 'easeInOutQuart',
            queue: false
        });
        workContainer.find(bottomStrokeFindString).velocity('stop').css('opacity', '0').velocity({
            translateX: [workContainer.find(bottomStrokeFindString).outerWidth(), '0px'],
            opacity: ['1', '1']
        }, {
            duration: 3000,
            easing: 'easeInOutQuart',
            queue: false
        });
        workContainer.find(leftStrokeFindString).velocity('stop').css('opacity', '0').velocity({
            translateY: ['-' + workContainer.find(leftStrokeFindString).outerHeight(), '0px'],
            opacity: ['1', '1']
        }, {
            duration: 3000,
            easing: 'easeInOutQuart',
            queue: false
        });
        workContainer.find(rightStrokeFindString).velocity('stop').css('opacity', '0').velocity({
            translateY: [workContainer.find(rightStrokeFindString).outerHeight(), '0px'],
            opacity: ['1', '1']
        }, {
            duration: 3000,
            easing: 'easeInOutQuart',
            queue: false,
            complete: function () {
                strokeComplete = true;
                strokeInMotion = false;
            }
        });
    }
};

function philosophyBodyFlyIn() {
    philosophyContainerBackground.velocity({
        opacity: '1'
    }, {
        duration: 1000,
        delay: 2000,
        easing: 'easeOutCirc',
        queue: false
    });
    if (pageIndex === 0) {
        philosophyBody.velocity({
            skewY: [zeroDegrees, zeroDegrees],
            rotateX: [zeroDegrees, zeroDegrees],
            rotateY: [zeroDegrees, zeroDegrees],
            scaleX: ['1', '1'],
            scaleY: ['1', '1'],
            translateX: ['0vw', '0vw'],
            translateY: ['0vh', '0vh'],
            translateZ: ['0vw', '0vw']
        }, {
            duration: 1500,
            delay: 1000,
            easing: 'easeInOutQuad',
            queue: false
        });
        philosophyBody.css('opacity', '0').velocity({
            opacity: ['1', '0']
        }, {
            duration: 1000,
            delay: 1000,
            easing: 'swing',
            queue: false
        });
        philosophyContainer.find(textBodyBackgroundFindString).velocity('stop', true).velocity({
            opacity: ['0.15', '0']
        }, {
            duration: 1500,
            delay: 1000,
            easing: 'easeInQuart',
            queue: false
        });
        philosophyContainer.find(headerStaggerInFindString).velocity('stop', true).css({'opacity':'0','transformOrigin':'left top'}).velocity({
            translateX: ['-50px', '-400px'],
            translateY:['0px','0px'],
            translateZ:['0px','10vw'],
            rotateX:['0deg', '90deg'],
            rotateY:['0deg', '-30deg'],
            rotateZ:['0deg', '0deg'],
            skewX:['0deg','0deg'],
            skewY:['0deg','0deg'],
            skewZ:['0deg','0deg'],
            opacity: ['1', 'swing', '0']
        }, {
            duration: 2000,
            easing: 'easeOutQuad',
            delay: 1000,
            queue: false
        });
        philosophyContainer.find(paragraphStaggerInFindString).velocity('stop', true).css('opacity', '0').velocity(
            "transition.slideRightBigIn", {
                duration: 1500,
                easing: 'easeOutExpo',
                stagger: 250,
                delay: 1500,
                queue: false
            });
        philosophyContainer.find(textBodyBackgroundFindString).velocity({
            opacity: ['0', '0.15']
        }, {
            duration: 1500,
            delay: 2500,
            easing: 'swing'
        });
        strokeInMotion = true;
        philosophyContainer.find(topStrokeFindString).velocity('stop').css('opacity', '0').velocity({
            translateX: ['-' + philosophyContainer.find(topStrokeFindString).outerWidth(), '0px'],
            opacity: ['1', '1']
        }, {
            duration: 3000,
            delay: 1000,
            easing: 'easeInOutQuart',
            queue: false
        });
        philosophyContainer.find(bottomStrokeFindString).velocity('stop').css('opacity', '0').velocity({
            translateX: [philosophyContainer.find(bottomStrokeFindString).outerWidth(), '0px'],
            opacity: ['1', '1']
        }, {
            duration: 3000,
            delay: 1000,
            easing: 'easeInOutQuart',
            queue: false
        });
        philosophyContainer.find(leftStrokeFindString).velocity('stop').css('opacity', '0').velocity({
            translateY: ['-' + philosophyContainer.find(leftStrokeFindString).outerHeight(), '0px'],
            opacity: ['1', '1']
        }, {
            duration: 3000,
            delay: 1000,
            easing: 'easeInOutQuart',
            queue: false
        });
        philosophyContainer.find(rightStrokeFindString).velocity('stop').css('opacity', '0').velocity({
            translateY: [philosophyContainer.find(rightStrokeFindString).outerHeight(), '0px'],
            opacity: ['1', '1']
        }, {
            duration: 3000,
            delay: 1000,
            easing: 'easeInOutQuart',
            queue: false,
            complete: function () {
                strokeComplete = true;
                strokeInMotion = false;
            }
        });
    } else if (pageIndex !== 3) {
        philosophyBody.velocity({
            skewY: [zeroDegrees, zeroDegrees],
            rotateX: [zeroDegrees, zeroDegrees],
            rotateY: [zeroDegrees, zeroDegrees],
            scaleX: ['1', '1'],
            scaleY: ['1', '1'],
            translateX: ['0vw', '0vw'],
            translateY: ['0vh', '0vh'],
            translateZ: ['0vw', '0vw']
        }, {
            duration: 1500,
            easing: 'easeInOutQuad',
            queue: false
        });
        philosophyBody.velocity({
            opacity: ['1', '0']
        }, {
            duration: 1000,
            easing: 'swing',
            queue: false
        });
        philosophyContainer.find(textBodyBackgroundFindString).velocity('stop', true).velocity({
            opacity: ['0.15', '0']
        }, {
            duration: 1500,
            easing: 'easeInQuart',
            queue: false
        });
        philosophyContainer.find(headerStaggerInFindString).velocity('stop', true).css({'opacity':'0','transformOrigin':'left top'}).velocity({
            translateX: ['-50px', '-400px'],
            translateY:['0px','0px'],
            translateZ:['0px','10vw'],
            rotateX:['0deg', '90deg'],
            rotateY:['0deg', '-30deg'],
            rotateZ:['0deg', '0deg'],
            skewX:['0deg','0deg'],
            skewY:['0deg','0deg'],
            skewZ:['0deg','0deg'],
            opacity: ['1', 'swing', '0']
        }, {
            duration: 2000,
            easing: 'easeOutQuad',
            queue: false
        });
        philosophyContainer.find(paragraphStaggerInFindString).velocity('stop', true).css('opacity', '0').velocity(
            "transition.slideRightBigIn", {
                duration: 1500,
                easing: 'easeOutExpo',
                stagger: 250,
                delay: 1500,
                queue: false
            });
        philosophyContainer.find(textBodyBackgroundFindString).velocity({
            opacity: ['0', '0.15']
        }, {
            duration: 1500,
            delay: 1500,
            easing: 'swing'
        });
        strokeInMotion = true;
        philosophyContainer.find(topStrokeFindString).velocity('stop').css('opacity', '0').velocity({
            translateX: ['-' + philosophyContainer.find(topStrokeFindString).outerWidth(), '0px'],
            opacity: ['1', '1']
        }, {
            duration: 3000,
            easing: 'easeInOutQuart',
            queue: false
        });
        philosophyContainer.find(bottomStrokeFindString).velocity('stop').css('opacity', '0').velocity({
            translateX: [philosophyContainer.find(bottomStrokeFindString).outerWidth(), '0px'],
            opacity: ['1', '1']
        }, {
            duration: 3000,
            easing: 'easeInOutQuart',
            queue: false
        });
        philosophyContainer.find(leftStrokeFindString).velocity('stop').css('opacity', '0').velocity({
            translateY: ['-' + philosophyContainer.find(leftStrokeFindString).outerHeight(), '0px'],
            opacity: ['1', '1']
        }, {
            duration: 3000,
            easing: 'easeInOutQuart',
            queue: false
        });
        philosophyContainer.find(rightStrokeFindString).velocity('stop').css('opacity', '0').velocity({
            translateY: [philosophyContainer.find(rightStrokeFindString).outerHeight(), '0px'],
            opacity: ['1', '1']
        }, {
            duration: 3000,
            easing: 'easeInOutQuart',
            queue: false,
            complete: function () {
                strokeComplete = true;
                strokeInMotion = false;
            }
        });
    }
};

function contactBodyFlyIn() {
    contactContainerBackground.velocity({
        opacity: '1'
    }, {
        duration: 1000,
        delay: 2000,
        easing: 'easeOutCirc',
        queue: false
    });
    if (pageIndex === 0) {
        contactBody.velocity({
            skewY: [zeroDegrees, zeroDegrees],
            rotateX: [zeroDegrees, zeroDegrees],
            rotateY: [zeroDegrees, zeroDegrees],
            scaleX: ['1', '1'],
            scaleY: ['1', '1'],
            translateX: ['0vw', '0vw'],
            translateY: ['0vh', '0vh'],
            translateZ: ['0vw', '0vw']
        }, {
            duration: 1500,
            delay: 1000,
            easing: 'easeInOutQuad',
            queue: false
        });
        contactBody.css('opacity', '0').velocity({
            opacity: ['1', '0']
        }, {
            duration: 1000,
            delay: 1000,
            easing: 'swing',
            queue: false
        });
        contactContainer.find(textBodyBackgroundFindString).velocity('stop', true).velocity({
            opacity: ['0.15', '0']
        }, {
            duration: 1500,
            delay: 1000,
            easing: 'easeInQuart',
            queue: false
        });
        contactContainer.find(headerStaggerInFindString).velocity('stop', true).css({'opacity':'0','transformOrigin':'left top'}).velocity({
            translateX: ['-50px', '-400px'],
            translateY:['0px','0px'],
            translateZ:['0px','10vw'],
            rotateX:['0deg', '90deg'],
            rotateY:['0deg', '-30deg'],
            rotateZ:['0deg', '0deg'],
            skewX:['0deg','0deg'],
            skewY:['0deg','0deg'],
            skewZ:['0deg','0deg'],
            opacity: ['1', 'swing', '0']
        }, {
            duration: 2000,
            easing: 'easeOutQuad',
            delay: 1000,
            queue: false
        });
        contactContainer.find(paragraphStaggerInFindString).velocity('stop', true).css('opacity', '0').velocity(
            "transition.slideRightBigIn", {
                duration: 1500,
                easing: 'easeOutExpo',
                stagger: 250,
                delay: 1500,
                queue: false
            });
        contactContainer.find(textBodyBackgroundFindString).velocity({
            opacity: ['0', '0.15']
        }, {
            duration: 1500,
            delay: 2500,
            easing: 'swing'
        });
        strokeInMotion = true;
        contactContainer.find(topStrokeFindString).velocity('stop').css('opacity', '0').velocity({
            translateX: ['-' + contactContainer.find(topStrokeFindString).outerWidth(), '0px'],
            opacity: ['1', '1']
        }, {
            duration: 3000,
            delay: 1000,
            easing: 'easeInOutQuart',
            queue: false
        });
        contactContainer.find(bottomStrokeFindString).velocity('stop').css('opacity', '0').velocity({
            translateX: [contactContainer.find(bottomStrokeFindString).outerWidth(), '0px'],
            opacity: ['1', '1']
        }, {
            duration: 3000,
            delay: 1000,
            easing: 'easeInOutQuart',
            queue: false
        });
        contactContainer.find(leftStrokeFindString).velocity('stop').css('opacity', '0').velocity({
            translateY: ['-' + contactContainer.find(leftStrokeFindString).outerHeight(), '0px'],
            opacity: ['1', '1']
        }, {
            duration: 3000,
            delay: 1000,
            easing: 'easeInOutQuart',
            queue: false
        });
        contactContainer.find(rightStrokeFindString).velocity('stop').css('opacity', '0').velocity({
            translateY: [contactContainer.find(rightStrokeFindString).outerHeight(), '0px'],
            opacity: ['1', '1']
        }, {
            duration: 3000,
            delay: 1000,
            easing: 'easeInOutQuart',
            queue: false,
            complete: function () {
                strokeComplete = true;
                strokeInMotion = false;
            }
        });
    } else if (pageIndex !== 4) {
        contactBody.velocity({
            skewY: [zeroDegrees, zeroDegrees],
            rotateX: [zeroDegrees, zeroDegrees],
            rotateY: [zeroDegrees, zeroDegrees],
            scaleX: ['1', '1'],
            scaleY: ['1', '1'],
            translateX: ['0vw', '0vw'],
            translateY: ['0vh', '0vh'],
            translateZ: ['0vw', '0vw']
        }, {
            duration: 1500,
            easing: 'easeInOutQuad',
            queue: false
        });
        contactBody.velocity({
            opacity: ['1', '0']
        }, {
            duration: 1000,
            easing: 'swing',
            queue: false
        });
        contactContainer.find(textBodyBackgroundFindString).velocity('stop', true).velocity({
            opacity: ['0.15', '0']
        }, {
            duration: 1500,
            easing: 'easeInQuart',
            queue: false
        });
        contactContainer.find(headerStaggerInFindString).velocity('stop', true).css({'opacity':'0','transformOrigin':'left top'}).velocity({
            translateX: ['-50px', '-400px'],
            translateY:['0px','0px'],
            translateZ:['0px','10vw'],
            rotateX:['0deg', '90deg'],
            rotateY:['0deg', '-30deg'],
            rotateZ:['0deg', '0deg'],
            skewX:['0deg','0deg'],
            skewY:['0deg','0deg'],
            skewZ:['0deg','0deg'],
            opacity: ['1', 'swing', '0']
        }, {
            duration: 2000,
            easing: 'easeOutQuad',
            queue: false
        });
        contactContainer.find(paragraphStaggerInFindString).velocity('stop', true).css('opacity', '0').velocity(
            "transition.slideRightBigIn", {
                duration: 1500,
                easing: 'easeOutExpo',
                stagger: 250,
                delay: 1500,
                queue: false
            });
        contactContainer.find(textBodyBackgroundFindString).velocity({
            opacity: ['0', '0.15']
        }, {
            duration: 1500,
            delay: 1500,
            easing: 'swing'
        });
        strokeInMotion = true;
        contactContainer.find(topStrokeFindString).velocity('stop').css('opacity', '0').velocity({
            translateX: ['-' + contactContainer.find(topStrokeFindString).outerWidth(), '0px'],
            opacity: ['1', '1']
        }, {
            duration: 3000,
            easing: 'easeInOutQuart',
            queue: false
        });
        contactContainer.find(bottomStrokeFindString).velocity('stop').css('opacity', '0').velocity({
            translateX: [contactContainer.find(bottomStrokeFindString).outerWidth(), '0px'],
            opacity: ['1', '1']
        }, {
            duration: 3000,
            easing: 'easeInOutQuart',
            queue: false
        });
        contactContainer.find(leftStrokeFindString).velocity('stop').css('opacity', '0').velocity({
            translateY: ['-' + contactContainer.find(leftStrokeFindString).outerHeight(), '0px'],
            opacity: ['1', '1']
        }, {
            duration: 3000,
            easing: 'easeInOutQuart',
            queue: false
        });
        contactContainer.find(rightStrokeFindString).velocity('stop').css('opacity', '0').velocity({
            translateY: [contactContainer.find(rightStrokeFindString).outerHeight(), '0px'],
            opacity: ['1', '1']
        }, {
            duration: 3000,
            easing: 'easeInOutQuart',
            queue: false,
            complete: function () {
                strokeComplete = true;
                strokeInMotion = false;
            }
        });
    }
};

function variableRedefine() {
    strokeBackgroundContainer = $('.stroke-bg-container'),
        topStrokeBackgroundContainer = $('.top-stroke-bg-container'),
        topStrokeBackground = $('.top-stroke-bg'),
        topStrokeBackgroundInner = $('.top-stroke-bg-inner'),
        bottomStrokeBackgroundContainer = $('.bottom-stroke-bg-container'),
        bottomStrokeBackground = $('.bottom-stroke-bg'),
        bottomStrokeBackgroundInner = $('.bottom-stroke-bg-inner'),
        leftStrokeBackgroundContainer = $('.left-stroke-bg-container'),
        leftStrokeBackground = $('.left-stroke-bg'),
        leftStrokeBackgroundInner = $('.left-stroke-bg-inner'),
        rightStrokeBackgroundContainer = $('.right-stroke-bg-container'),
        rightStrokeBackground = $('.right-stroke-bg'),
        rightStrokeBackgroundInner = $('.right-stroke-bg-inner');
}

function strokeBackgroundRandomLoop() {
    var interval = setInterval(function initial() {
        /*
                    strokeBackgroundInnerContainer.velocity({
                                opacity:['1','0']
                            }, {
                                duration:1000,
                                delay:0,
                                queue:false,
                                easing:'swing'
                            });*/

        for (i = 0; i < strokeBackgroundContainer.length; i++) {

            currentStroke = strokeBackgroundContainer.eq(i);
            randomDuration = r(0, 4);
            randomEase = r(0, 7);
            randomOpacity = Math.random();
            randomTopStrokeVertical = r(0, 100);
            randomBottomStrokeVertical = r(0, 100);
            randomLeftStrokeHorizontal = r(0, 100);
            randomRightStrokeHorizontal = r(0, 100);

            switch (true) {
            case currentStroke.hasClass(topStrokeBackgroundContainerString):
                currentStroke.css({
                    top: randomTopStrokeVertical + 'vh'
                });
                currentStroke.velocity({
                    translateX: ['-' + topStrokeBackground.outerWidth(), '0px'],
                    opacity: [randomOpacity, randomOpacity]
                }, {
                    duration: 11000,
                    delay: 0,
                    easing: whichEase[randomEase],
                    queue: false
                });
                break;
            case currentStroke.hasClass(bottomStrokeBackgroundContainerString):
                currentStroke.css({
                    bottom: randomBottomStrokeVertical + 'vh'
                });
                currentStroke.velocity({
                    translateX: [bottomStrokeBackground.outerWidth(), '0px'],
                    opacity: [randomOpacity, randomOpacity]
                }, {
                    duration: 11000,
                    delay: 0,
                    easing: whichEase[randomEase],
                    queue: false
                });
                break;
            case currentStroke.hasClass(leftStrokeBackgroundContainerString):
                currentStroke.css({
                    left: randomLeftStrokeHorizontal + 'vw'
                });
                currentStroke.velocity({
                    translateY: ['-' + leftStrokeBackground.outerHeight(), '0px'],
                    opacity: [randomOpacity, randomOpacity]
                }, {
                    duration: 11000,
                    delay: 0,
                    easing: whichEase[randomEase],
                    queue: false
                });
                break;
            case currentStroke.hasClass(rightStrokeBackgroundContainerString):
                currentStroke.css({
                    right: randomRightStrokeHorizontal + 'vw'
                });
                currentStroke.velocity({
                    translateY: [rightStrokeBackground.outerHeight(), '0px'],
                    opacity: [randomOpacity, randomOpacity]
                }, {
                    duration: 11000,
                    delay: 0,
                    easing: whichEase[randomEase],
                    queue: false
                });
                break;
            }

        }
        /*
                    strokeBackgroundInnerContainer.velocity({
                                opacity:'0'
                            }, {
                                duration:1000,
                                delay:9000,
                                queue:false,
                                easing:'swing'
                            });*/
        /*strokeBackgroundPatternInMotion = true;
        topStrokeBackground.velocity({
            translateX:['-' + topStrokeBackground.outerWidth(),'0px'],
            opacity:[randomOpacity,randomOpacity]
        }, {
            duration:whichDuration[randomDuration],
            delay:whichDelay[randomDuration],
            easing:'swing',
            queue:false
        });
        bottomStrokeBackground.velocity({
            translateX:[bottomStrokeBackground.outerWidth(),'0px'],
            opacity:[randomOpacity,randomOpacity]
        }, {
            duration:whichDuration[randomDuration],
            delay:whichDelay[randomDuration],
            easing:'swing',
            queue:false
        });
        leftStrokeBackground.velocity({
            translateY:['-' + leftStrokeBackground.outerHeight(),'0px'],
            opacity:[randomOpacity,randomOpacity]
        }, {
            duration:whichDuration[randomDuration],
            delay:whichDelay[randomDuration],
            easing:'swing',
            queue:false
        });
        rightStrokeBackground.velocity({
            translateY:[rightStrokeBackground.outerHeight(),'0px'],
            opacity:[randomOpacity,randomOpacity]
        }, {
            duration:whichDuration[randomDuration],
            delay:whichDelay[randomDuration],
            easing:'swing',
            queue:false
        });*/


        return initial;
    }(), 11000);
};

function strokeBackgroundRandomLoop2() {
    var interval2 = setInterval(function initial2() {
        /*
                    strokeBackgroundInnerContainer.velocity({
                                opacity:['1','0']
                            }, {
                                duration:1000,
                                delay:0,
                                queue:false,
                                easing:'swing'
                            });*/

        for (i = strokeBackgroundContainer.length / 2; i < strokeBackgroundContainer.length; i++) {

            currentStroke2 = strokeBackgroundContainer.eq(i);
            randomDuration2 = r(0, 4);
            randomEase2 = r(0, 7);
            randomOpacity2 = Math.random();
            randomTopStrokeVertical2 = r(0, 100);
            randomBottomStrokeVertical2 = r(0, 100);
            randomLeftStrokeHorizontal2 = r(0, 100);
            randomRightStrokeHorizontal2 = r(0, 100);

            currentStroke2.css('opacity', '0');

            switch (true) {
            case currentStroke2.hasClass(topStrokeBackgroundContainerString):
                currentStroke2.css({
                    top: randomTopStrokeVertical2 + 'vh'
                });
                currentStroke2.velocity({
                    translateX: ['-' + topStrokeBackground.outerWidth(), '0px'],
                    opacity: [randomOpacity2, randomOpacity2]
                }, {
                    duration: 11000,
                    delay: 2000,
                    easing: whichEase2[randomEase2],
                    complete: function () {
                        $(this).css('opacity', '0');
                    }
                });
                break;
            case currentStroke2.hasClass(bottomStrokeBackgroundContainerString):
                currentStroke2.css({
                    bottom: randomBottomStrokeVertical2 + 'vh'
                });
                currentStroke2.velocity({
                    translateX: [bottomStrokeBackground.outerWidth(), '0px'],
                    opacity: [randomOpacity2, randomOpacity2]
                }, {
                    duration: 11000,
                    delay: 2000,
                    easing: whichEase2[randomEase2],
                    complete: function () {
                        $(this).css('opacity', '0');
                    }
                });
                break;
            case currentStroke2.hasClass(leftStrokeBackgroundContainerString):
                currentStroke2.css({
                    left: randomLeftStrokeHorizontal2 + 'vw'
                });
                currentStroke2.velocity({
                    translateY: ['-' + leftStrokeBackground.outerHeight(), '0px'],
                    opacity: [randomOpacity2, randomOpacity2]
                }, {
                    duration: 11000,
                    delay: 2000,
                    easing: whichEase2[randomEase2],
                    complete: function () {
                        $(this).css('opacity', '0');
                    }
                });
                break;
            case currentStroke2.hasClass(rightStrokeBackgroundContainerString):
                currentStroke2.css({
                    right: randomRightStrokeHorizontal2 + 'vw'
                });
                currentStroke2.velocity({
                    translateY: [rightStrokeBackground.outerHeight(), '0px'],
                    opacity: [randomOpacity2, randomOpacity2]
                }, {
                    duration: 11000,
                    delay: 2000,
                    easing: whichEase2[randomEase2],
                    complete: function () {
                        $(this).css('opacity', '0');
                    }
                });
                break;
            }

        }
        /*
                    strokeBackgroundInnerContainer.velocity({
                                opacity:'0'
                            }, {
                                duration:1000,
                                delay:9000,
                                queue:false,
                                easing:'swing'
                            });*/
        /*strokeBackgroundPatternInMotion = true;
        topStrokeBackground.velocity({
            translateX:['-' + topStrokeBackground.outerWidth(),'0px'],
            opacity:[randomOpacity,randomOpacity]
        }, {
            duration:whichDuration[randomDuration],
            delay:whichDelay[randomDuration],
            easing:'swing',
            queue:false
        });
        bottomStrokeBackground.velocity({
            translateX:[bottomStrokeBackground.outerWidth(),'0px'],
            opacity:[randomOpacity,randomOpacity]
        }, {
            duration:whichDuration[randomDuration],
            delay:whichDelay[randomDuration],
            easing:'swing',
            queue:false
        });
        leftStrokeBackground.velocity({
            translateY:['-' + leftStrokeBackground.outerHeight(),'0px'],
            opacity:[randomOpacity,randomOpacity]
        }, {
            duration:whichDuration[randomDuration],
            delay:whichDelay[randomDuration],
            easing:'swing',
            queue:false
        });
        rightStrokeBackground.velocity({
            translateY:[rightStrokeBackground.outerHeight(),'0px'],
            opacity:[randomOpacity,randomOpacity]
        }, {
            duration:whichDuration[randomDuration],
            delay:whichDelay[randomDuration],
            easing:'swing',
            queue:false
        });*/


        return initial2;
    }(), 20000);
};

function aboutBodyFadeAway() {
    aboutBody.velocity({
        opacity:'0'
    }, {
        duration: 1000,
        easing: 'swing',
        queue: false
    });
    aboutContainer.find(headerStaggerInFindString).css('transformOrigin','left bottom').velocity({
        opacity: ['0', 'swing'],
        translateX: ['10vw','swing'],
        translateY: '0',
        translateZ: '-10vw',
        rotateX:['-70deg', 'easeOutQuad'],
        rotateY:['10deg', 'easeOutQuad']
    }, {
        duration: 1000,
        easing: 'easeInCirc',
        queue: false
    });
    /*aboutContainerBackground.velocity({
        opacity: '0'
    }, {
        duration: 1000,
        easing: 'swing',
        queue: false
    });*/
};

function workBodyFadeAway() {
    workBody.velocity({
        opacity:'0'
    }, {
        duration: 1000,
        easing: 'swing',
        queue: false
    });
    workContainer.find(headerStaggerInFindString).css('transformOrigin','left bottom').velocity({
        opacity: ['0', 'swing'],
        translateX: ['10vw','swing'],
        translateY: '0',
        translateZ: '-10vw',
        rotateX:['-70deg', 'easeOutQuad'],
        rotateY:['10deg', 'easeOutQuad']
    }, {
        duration: 1000,
        easing: 'easeInCirc',
        queue: false
    });
    /*workContainerBackground.velocity({
        opacity: '0'
    }, {
        duration: 1000,
        easing: 'swing',
        queue: false
    });*/
};

function philosophyBodyFadeAway() {
    philosophyBody.velocity({
        opacity:'0'
    }, {
        duration: 1000,
        easing: 'swing',
        queue: false
    });
    philosophyContainer.find(headerStaggerInFindString).css('transformOrigin','left bottom').velocity({
        opacity: ['0', 'swing'],
        translateX: ['10vw','swing'],
        translateY: '0',
        translateZ: '-10vw',
        rotateX:['-70deg', 'easeOutQuad'],
        rotateY:['10deg', 'easeOutQuad']
    }, {
        duration: 1000,
        easing: 'easeInCirc',
        queue: false
    });
    /*philosophyContainerBackground.velocity({
        opacity: '0'
    }, {
        duration: 1000,
        easing: 'swing',
        queue: false
    });*/
};

function contactBodyFadeAway() {
    contactBody.velocity({
        opacity:'0'
    }, {
        duration: 1000,
        easing: 'swing',
        queue: false
    });
    contactContainer.find(headerStaggerInFindString).css('transformOrigin','left bottom').velocity({
        opacity: ['0', 'swing'],
        translateX: ['10vw','swing'],
        translateY: '0',
        translateZ: '-10vw',
        rotateX:['-70deg', 'easeOutQuad'],
        rotateY:['10deg', 'easeOutQuad']
    }, {
        duration: 1000,
        easing: 'easeInCirc',
        queue: false
    });
    /*contactContainerBackground.velocity({
        opacity: '0'
    }, {
        duration: 1000,
        easing: 'swing',
        queue: false
    });*/
};

function stringSplit() {

    homeTextHtml.split('').forEach(function (ch) {
        newHomeText = '<div class="letter link-letter">' + ch + '</div>';

        homeText.append(newHomeText);

        linkLetter = $('.link-letter'),
            homeLinkLetter = homeText.find(linkLetterFindString),
            linkLetterFindString = '.link-letter',
            homeLinkLetterWidth = '25px',
            homeLinkLetterLength = homeText.find(linkLetterFindString).length;

        homeLinkLetter.css({
            width: homeLinkLetterWidth,
            opacity: '1'
        });

        homeText.css({
            width: homeLinkLetterLength * homeLinkLetter.outerWidth()
        });
    });

    aboutTextHtml.split('').forEach(function (ch) {
        newAboutText = '<div class="letter link-letter">' + ch + '</div>';

        aboutText.append(newAboutText);

        linkLetter = $('.link-letter'),
            aboutLinkLetter = aboutText.find(linkLetterFindString),
            linkLetterFindString = '.link-letter',
            aboutLinkLetterWidth = '25px',
            aboutLinkLetterLength = aboutText.find(linkLetterFindString).length;

        aboutLinkLetter.css({
            width: aboutLinkLetterWidth,
            opacity: '1'
        });

        aboutText.css({
            width: aboutLinkLetterLength * aboutLinkLetter.outerWidth()
        });
    });

    workTextHtml.split('').forEach(function (ch) {
        newWorkText = '<div class="letter link-letter">' + ch + '</div>';

        workText.append(newWorkText);

        linkLetter = $('.link-letter'),
            workLinkLetter = workText.find(linkLetterFindString),
            linkLetterFindString = '.link-letter',
            workLinkLetterWidth = '25px',
            workLinkLetterLength = workText.find(linkLetterFindString).length;

        workLinkLetter.css({
            width: workLinkLetterWidth,
            opacity: '1'
        });

        workText.css({
            width: workLinkLetterLength * workLinkLetter.outerWidth()
        });
    });

    philosophyTextHtml.split('').forEach(function (ch) {
        newPhilosophyText = '<div class="letter link-letter">' + ch + '</div>';

        philosophyText.append(newPhilosophyText);

        linkLetter = $('.link-letter'),
            philosophyLinkLetter = philosophyText.find(linkLetterFindString),
            linkLetterFindString = '.link-letter',
            philosophyLinkLetterWidth = '25px',
            philosophyLinkLetterLength = philosophyText.find(linkLetterFindString).length;

        philosophyLinkLetter.css({
            width: philosophyLinkLetterWidth,
            opacity: '1'
        });

        philosophyText.css({
            width: philosophyLinkLetterLength * philosophyLinkLetter.outerWidth()
        });
    });

    contactTextHtml.split('').forEach(function (ch) {
        newContactText = '<div class="letter link-letter">' + ch + '</div>';

        contactText.append(newContactText);

        linkLetter = $('.link-letter'),
            contactLinkLetter = contactText.find(linkLetterFindString),
            linkLetterFindString = '.link-letter',
            contactLinkLetterWidth = '25px',
            contactLinkLetterLength = contactText.find(linkLetterFindString).length;

        contactLinkLetter.css({
            width: contactLinkLetterWidth,
            opacity: '1'
        });

        contactText.css({
            width: contactLinkLetterLength * contactLinkLetter.outerWidth()
        });
    });

}

function homeStringSplit() {

    homeTextHtml.split('').forEach(function (ch) {
        newHomeText = '<div class="letter link-letter">' + ch + '</div>';

        homeText.append(newHomeText);

        linkLetter = $('.link-letter'),
            homeLinkLetter = homeText.find(linkLetterFindString),
            linkLetterFindString = '.link-letter',
            homeLinkLetterWidth = '25px',
            homeLinkLetterLength = homeText.find(linkLetterFindString).length;

        homeLinkLetter.css({
            width: homeLinkLetterWidth,
            opacity: '1'
        });

        homeText.css({
            width: homeLinkLetterLength * homeLinkLetter.outerWidth()
        });
    });

};

function aboutStringSplit() {

    aboutTextHtml.split('').forEach(function (ch) {
        newAboutText = '<div class="letter link-letter">' + ch + '</div>';

        aboutText.append(newAboutText);

        linkLetter = $('.link-letter'),
            aboutLinkLetter = aboutText.find(linkLetterFindString),
            linkLetterFindString = '.link-letter',
            aboutLinkLetterWidth = '25px',
            aboutLinkLetterLength = aboutText.find(linkLetterFindString).length;

        aboutLinkLetter.css({
            width: aboutLinkLetterWidth,
            opacity: '1'
        });

        aboutText.css({
            width: aboutLinkLetterLength * aboutLinkLetter.outerWidth()
        });
    });

};

function workStringSplit() {

    workTextHtml.split('').forEach(function (ch) {
        newWorkText = '<div class="letter link-letter">' + ch + '</div>';

        workText.append(newWorkText);

        linkLetter = $('.link-letter'),
            workLinkLetter = workText.find(linkLetterFindString),
            linkLetterFindString = '.link-letter',
            workLinkLetterWidth = '25px',
            workLinkLetterLength = workText.find(linkLetterFindString).length;

        workLinkLetter.css({
            width: workLinkLetterWidth,
            opacity: '1'
        });

        workText.css({
            width: workLinkLetterLength * workLinkLetter.outerWidth()
        });
    });

};

function philosophyStringSplit() {

    philosophyTextHtml.split('').forEach(function (ch) {
        newPhilosophyText = '<div class="letter link-letter">' + ch + '</div>';

        philosophyText.append(newPhilosophyText);

        linkLetter = $('.link-letter'),
            philosophyLinkLetter = philosophyText.find(linkLetterFindString),
            linkLetterFindString = '.link-letter',
            philosophyLinkLetterWidth = '25px',
            philosophyLinkLetterLength = philosophyText.find(linkLetterFindString).length;

        philosophyLinkLetter.css({
            width: philosophyLinkLetterWidth,
            opacity: '1'
        });

        philosophyText.css({
            width: philosophyLinkLetterLength * philosophyLinkLetter.outerWidth()
        });
    });

};

function contactStringSplit() {

    contactTextHtml.split('').forEach(function (ch) {
        newContactText = '<div class="letter link-letter">' + ch + '</div>';

        contactText.append(newContactText);

        linkLetter = $('.link-letter'),
            contactLinkLetter = contactText.find(linkLetterFindString),
            linkLetterFindString = '.link-letter',
            contactLinkLetterWidth = '25px',
            contactLinkLetterLength = contactText.find(linkLetterFindString).length;

        contactLinkLetter.css({
            width: contactLinkLetterWidth,
            opacity: '1'
        });

        contactText.css({
            width: contactLinkLetterLength * contactLinkLetter.outerWidth()
        });
    });

};

function logoHover() {
    logoClickRegion.mouseover(function () {
        if (!($(this).hasClass('logoInMotion'))) {
            if (jiggleIntervalCounter === 0) {
                jiggleInterval = setInterval(function initial() {
                    jiggleIntervalCounter++;
                    frontSvgDelay = 0;
                    svgObjectDuration = 500;
                    for (i = 0; i < svgObject.length; i++) {
                        currentSvgObject = svgObject.eq(i);

                        currentSvgObject.velocity('stop', true).velocity({
                            translateY: currentLogoTranslateY - 50 + 'px'
                        }, {
                            duration: 250,
                            easing: 'swing',
                            delay: frontSvgDelay += 100
                        });

                        currentSvgObject.velocity({
                            translateY: currentLogoTranslateY
                        }, {
                            duration: svgObjectDuration,
                            easing: 'easeInQuad'
                        });
                    }

                    return initial;
                }(), 1150);
            }
        }
    });
    logoClickRegion.mouseout(function () {
        if (!($(this).hasClass('logoInMotion'))) {
            if (jiggleIntervalCounter !== 0) {
                clearInterval(jiggleInterval);
                jiggleIntervalCounter = 0;
            }
        }
    });
};

function logoClick() {
    logoClickRegion.mouseup(function () {
        if (!($(this).hasClass('logoInMotion'))) {
            if (pageIndex !== 0) {
                clearInterval(spadeInterval);
                clearInterval(jiggleInterval);
                jiggleIntervalCounter = 0;
                spadeIntervalCounter = 0;
                logoBounceDown();
                strokeBackgroundActive = false;
                /*soon.velocity({
                    opacity:'0'
                }, {
                    duration:1000,
                    easing:'easeOutCirc',
                    queue:false
                });
                soon.velocity({
                    translateX:['100vw','100vw']
                }, {
                    duration:0,
                    delay:1000,
                    easing:'easeOutCirc',
                    queue:false
                });*/
                strokeBackgroundInnerContainer.velocity({
                    opacity: '0'
                }, {
                    duration: 1000,
                    easing: 'swing',
                    queue: false
                });
                strokeComplete = false;
                aboutBodyFadeAway();
                workBodyFadeAway();
                philosophyBodyFadeAway();
                contactBodyFadeAway();
                videoActions.home.fadeIn();
                videoActions.about.fadeOut();
                videoActions.work.fadeOut();
                videoActions.philosophy.fadeOut();
                videoActions.contact.fadeOut();
                if (!homeIntervalActive) {
                    homeText.empty();
                    homeStringSplit();
                    navActions.clickOff.home();
                    navAnimations.navText.breakOut.end.home();
                }
                pageIndex = 0;
            }
        }
    });
};

function navHover() {
    navHoverRegion.mouseover(function () {
        switch (true) {
        case $(this).hasClass(homeRegionString):
            navAnimations.navText.breakOut.reverseInstant.home();
            homeText.empty();
            homeStringSplit();
            navAnimations.navText.breakOut.start.home();
            navActions.hoverOn.home();
            break;
        case $(this).hasClass(aboutRegionString):
            navAnimations.navText.breakOut.reverseInstant.about();
            aboutText.empty();
            aboutStringSplit();
            navAnimations.navText.breakOut.start.about();
            navActions.hoverOn.about();
            break;
        case $(this).hasClass(workRegionString):
            navAnimations.navText.breakOut.reverseInstant.work();
            workText.empty();
            workStringSplit();
            navAnimations.navText.breakOut.start.work();
            navActions.hoverOn.work();
            break;
        case $(this).hasClass(philosophyRegionString):
            navAnimations.navText.breakOut.reverseInstant.philosophy();
            philosophyText.empty();
            philosophyStringSplit();
            navAnimations.navText.breakOut.start.philosophy();
            navActions.hoverOn.philosophy();
            break;
        case $(this).hasClass(contactRegionString):
            navAnimations.navText.breakOut.reverseInstant.contact();
            contactText.empty();
            contactStringSplit();
            navAnimations.navText.breakOut.start.contact();
            navActions.hoverOn.contact();
            break;
        }
    });
    navHoverRegion.mouseout(function () {
        switch (true) {
        case $(this).hasClass(homeRegionString):
            navActions.hoverOff.home();
            aboutIntervalActive = false;
            workIntervalActive = false;
            philosophyIntervalActive = false;
            contactIntervalActive = false;
            /*if (homeIntervalActive) {
                homeText.empty();
                homeStringSplit();
            }*/
            break;
        case $(this).hasClass(aboutRegionString):
            navActions.hoverOff.about();
            homeIntervalActive = false;
            workIntervalActive = false;
            philosophyIntervalActive = false;
            contactIntervalActive = false;
            /*if (aboutIntervalActive) {
                aboutText.empty();
                aboutStringSplit();
            }*/
            break;
        case $(this).hasClass(workRegionString):
            navActions.hoverOff.work();
            homeIntervalActive = false;
            aboutIntervalActive = false;
            philosophyIntervalActive = false;
            contactIntervalActive = false;
            /*if (workIntervalActive) {
                workText.empty();
                workStringSplit();
            }*/
            break;
        case $(this).hasClass(philosophyRegionString):
            navActions.hoverOff.philosophy();
            homeIntervalActive = false;
            aboutIntervalActive = false;
            workIntervalActive = false;
            contactIntervalActive = false;
            /*if (philosophyIntervalActive) {
                philosophyText.empty();
                philosophyStringSplit();
            }*/
            break;
        case $(this).hasClass(contactRegionString):
            navActions.hoverOff.contact();
            homeIntervalActive = false;
            aboutIntervalActive = false;
            workIntervalActive = false;
            philosophyIntervalActive = false;
            /*if (contactIntervalActive) {
                contactText.empty();
                contactStringSplit();
            }*/
            break;
        }
    });
};

function navClick() {
    navHoverRegion.mousedown(function () {
        switch (true) {
        case $(this).hasClass(homeRegionString):
            homeIntervalActive = false;
            aboutIntervalActive = false;
            workIntervalActive = false;
            philosophyIntervalActive = false;
            contactIntervalActive = false;
            break;
        case $(this).hasClass(aboutRegionString):
            homeIntervalActive = false;
            aboutIntervalActive = false;
            workIntervalActive = false;
            philosophyIntervalActive = false;
            contactIntervalActive = false;
            break;
        case $(this).hasClass(workRegionString):
            homeIntervalActive = false;
            aboutIntervalActive = false;
            workIntervalActive = false;
            philosophyIntervalActive = false;
            contactIntervalActive = false;
            break;
        case $(this).hasClass(philosophyRegionString):
            homeIntervalActive = false;
            aboutIntervalActive = false;
            workIntervalActive = false;
            philosophyIntervalActive = false;
            contactIntervalActive = false;
            break;
        case $(this).hasClass(contactRegionString):
            homeIntervalActive = false;
            aboutIntervalActive = false;
            workIntervalActive = false;
            philosophyIntervalActive = false;
            contactIntervalActive = false;
            break;
        }
    });
    strokeBackgroundRandomLoop();
    navHoverRegion.mouseup(function () {
        switch (true) {
        case $(this).hasClass(homeRegionString):
            clearInterval(spadeInterval);
            clearInterval(jiggleInterval);
            jiggleIntervalCounter = 0;
            spadeIntervalCounter = 0;
            aboutBodyFadeAway();
            workBodyFadeAway();
            philosophyBodyFadeAway();
            contactBodyFadeAway();
            videoActions.home.fadeIn();
            videoActions.about.fadeOut();
            videoActions.work.fadeOut();
            videoActions.philosophy.fadeOut();
            videoActions.contact.fadeOut();
            if (jiggleIntervalCounter !== 0) {
                logoJiggleStop();
            }
            if (pageIndex !== 0) {
                logoBounceDown();
                strokeBackgroundActive = false;
                /*soon.velocity({
                    opacity:'0'
                }, {
                    duration:1000,
                    easing:'easeOutCirc',
                    queue:false
                });
                soon.velocity({
                    translateX:['100vw','100vw']
                }, {
                    duration:0,
                    delay:1000,
                    easing:'easeOutCirc',
                    queue:false
                });*/
                strokeBackgroundInnerContainer.velocity({
                    opacity: '0'
                }, {
                    duration: 1000,
                    easing: 'swing',
                    queue: false
                });
                strokeComplete = false;
                if (!homeIntervalActive) {
                    homeText.empty();
                    homeStringSplit();
                    navActions.clickOff.home();
                    navAnimations.navText.breakOut.end.home();
                }
                pageIndex = 0;
            }
            break;
        case $(this).hasClass(aboutRegionString):
            aboutBodyFlyIn();
            workBodyFadeAway();
            philosophyBodyFadeAway();
            contactBodyFadeAway();
            videoActions.home.fadeOut();
            videoActions.work.fadeOut();
            videoActions.philosophy.fadeOut();
            videoActions.contact.fadeOut();
            if (jiggleIntervalCounter !== 0) {
                logoJiggleStop();
            }
            if (pageIndex === 0) {
                aboutBackgroundImage.velocity('stop',false).css('opacity','0');
                aboutBackground.velocity('stop',false).css('opacity','0');
                aboutBackgroundImageLoadInInitial();
                /*pageBackground.css('opacity','0');*/
                videoActions.about.fadeIn();
                logoBounceUp();
            }
            if (logoTransitionActive) {
                logoTransitionActive = false;
            }
            /*soon.velocity({
                opacity:'0'
            }, {
                duration:1000,
                easing:'easeOutCirc',
                queue:false
            });
            soon.velocity({
                translateX:['100vw','100vw']
            }, {
                duration:0,
                delay:1000,
                easing:'easeOutCirc',
                queue:false
            });*/
            if ((pageIndex !== 1) && (pageIndex !== 0)) {
                aboutBackgroundImageLoadIn();
            }
            if (pageIndex !== 1) {
                aboutBackgroundImageLoadIn();
                if (!strokeBackgroundActive) {
                    strokeBackgroundActive = true;
                    strokeBackgroundInnerContainer.velocity({
                        opacity: '1'
                    }, {
                        duration: 1000,
                        delay: 2000,
                        easing: 'swing',
                        queue: false
                    });
                }
                /*if (!strokeInMotion) {
                    strokeFlyIn();
                }*/
                if (!aboutIntervalActive) {
                    aboutText.empty();
                    aboutStringSplit();
                    navActions.clickOff.about();
                    navAnimations.navText.breakOut.end.about();
                }
                pageIndex = 1;
            }
            break;
        case $(this).hasClass(workRegionString):
            aboutBodyFadeAway();
            workBodyFlyIn();
            philosophyBodyFadeAway();
            contactBodyFadeAway();
            videoActions.home.fadeOut();
            videoActions.work.fadeIn();
            videoActions.philosophy.fadeOut();
            videoActions.contact.fadeOut();
            if (jiggleIntervalCounter !== 0) {
                logoJiggleStop();
            }
            if (pageIndex === 0) {
                workBackgroundImage.velocity('stop',false).css('opacity','0');
                workBackground.velocity('stop',false).css('opacity','0');
                workBackgroundImageLoadInInitial();
                /*pageBackground.css('opacity','0');*/
                videoActions.about.fadeIn();
                logoBounceUp();
            }
            if (logoTransitionActive) {
                logoTransitionActive = false;
            }
            if ((pageIndex !== 2) && (pageIndex !== 0)) {
                workBackgroundImageLoadIn();
            }
            if (pageIndex !== 2) {
                workBackgroundImageLoadIn();
                workBodyFlyIn();
                if (!strokeBackgroundActive) {
                    strokeBackgroundActive = true;
                    strokeBackgroundInnerContainer.velocity({
                        opacity: '1'
                    }, {
                        duration: 1000,
                        delay: 2000,
                        easing: 'swing',
                        queue: false
                    });
                }
                /*soon.velocity({
                    opacity:'0'
                }, {
                    duration:1000,
                    easing:'easeOutCirc',
                    queue:false
                });
                soon.velocity({
                    translateX:['100vw','100vw']
                }, {
                    duration:0,
                    delay:1000,
                    easing:'easeOutCirc',
                    queue:false
                });*/
                strokeComplete = false;
                if (!workIntervalActive) {
                    workText.empty();
                    workStringSplit();
                    navActions.clickOff.work();
                    navAnimations.navText.breakOut.end.work();
                }
                if (pageIndex === 0) {
                    videoActions.about.fadeIn();
                }
                pageIndex = 2;
            }
            break;
        case $(this).hasClass(philosophyRegionString):
            aboutBodyFadeAway();
            workBodyFadeAway();
            philosophyBodyFlyIn();
            contactBodyFadeAway();
            videoActions.home.fadeOut();
            videoActions.work.fadeOut();
            videoActions.philosophy.fadeIn();
            videoActions.contact.fadeOut();
            if (jiggleIntervalCounter !== 0) {
                logoJiggleStop();
            }
            if (pageIndex === 0) {
                philosophyBackgroundImage.velocity('stop',false).css('opacity','0');
                philosophyBackground.velocity('stop',false).css('opacity','0');
                philosophyBackgroundImageLoadInInitial();
                /*pageBackground.css('opacity','0');*/
                videoActions.about.fadeIn();
                logoBounceUp();
            }
            if (logoTransitionActive) {
                logoTransitionActive = false;
            }
            if ((pageIndex !== 3) && (pageIndex !== 0)) {
                philosophyBackgroundImageLoadIn();
            }
            if (pageIndex !== 3) {
                philosophyBodyFlyIn();
                if (!strokeBackgroundActive) {
                    strokeBackgroundActive = true;
                    strokeBackgroundInnerContainer.velocity({
                        opacity: '1'
                    }, {
                        duration: 1000,
                        delay: 2000,
                        easing: 'swing',
                        queue: false
                    });
                }
                /*soon.velocity({
                    opacity:'1',
                    translateX:['0vw','0vw']
                }, {
                    duration:1000,
                    easing:'easeInQuad',
                    queue:false
                });*/
                strokeComplete = false;
                if (!philosophyIntervalActive) {
                    philosophyText.empty();
                    philosophyStringSplit();
                    navActions.clickOff.philosophy();
                    navAnimations.navText.breakOut.end.philosophy();
                }
                pageIndex = 3;
            }
            break;
        case $(this).hasClass(contactRegionString):
            aboutBodyFadeAway();
            workBodyFadeAway();
            philosophyBodyFadeAway();
            contactBodyFlyIn();
            videoActions.home.fadeOut();
            videoActions.work.fadeOut();
            videoActions.philosophy.fadeOut();
            videoActions.contact.fadeIn();
            if (jiggleIntervalCounter !== 0) {
                logoJiggleStop();
            }
            if (pageIndex === 0) {
                contactBackgroundImage.velocity('stop',false).css('opacity','0');
                contactBackground.velocity('stop',false).css('opacity','0');
                contactBackgroundImageLoadInInitial();
                /*pageBackground.css('opacity','0');*/
                videoActions.about.fadeIn();
                logoBounceUp();
            }
            if (logoTransitionActive) {
                logoTransitionActive = false;
            }
            if ((pageIndex !== 4) && (pageIndex !== 0)) {
                contactBackgroundImageLoadIn();
            }
            if (pageIndex !== 4) {
                contactBodyFlyIn();
                if (!strokeBackgroundActive) {
                    strokeBackgroundActive = true;
                    strokeBackgroundInnerContainer.velocity({
                        opacity: '1'
                    }, {
                        duration: 1000,
                        delay: 2000,
                        easing: 'swing',
                        queue: false
                    });
                }
                /*soon.velocity({
                    opacity:'1',
                    translateX:['0vw','0vw']
                }, {
                    duration:1000,
                    easing:'easeInQuad',
                    queue:false
                });*/
                strokeComplete = false;
                if (!contactIntervalActive) {
                    contactText.empty();
                    contactStringSplit();
                    navActions.clickOff.contact();
                    navAnimations.navText.breakOut.end.contact();
                }
                pageIndex = 4;
            }
            break;
        }
    });
};

function navLoadIn() {
    for (i = 0; i < nav.length; i++) {
        currentNav = nav.eq(i);

        currentNav.velocity({
            opacity: ['1', 'linear', '0'],
            translateX: ['0px', '-100px']
        }, {
            duration: 1500,
            delay: navDelay += 100,
            easing: 'easeOutExpo',
            queue: false
        });

        currentNav.velocity({
            scale: ['1', '4'],
            translateY: ['0px', '-15px']
        }, {
            duration: 2000,
            delay: navDelay,
            easing: 'easeOutQuad',
            queue: false
        });
    }
};

function parentWidth(child) {
    result = child.parent('div').outerWidth();

    return result;
};

function parentHeight(child) {
    result = child.parent('div').outerHeight();

    return result;
};

function additionalStylesAll() {

    svgHeader.velocity({
        translateX: '-55px',
        translateY: '20px'
    }, {
        duration: 0
    });

    /*aboutBody.css({
        height: bodyContent.outerHeight()
    });*/

    /*textBody.velocity({
        translateY:($(window).height() * 0.25) - (logo.height() / 2) + 'px'
    }, {
        duration:0
    });
*/
    /*aboutBody.css({
        top: (aboutContainer.height() / 2) - (aboutBody.height() / 2)
    });*/

    aboutContainer.find(textBodyBackgroundFindString).css({
        width: parentWidth(aboutBodyContent),
        height: aboutContainer.find(textBodyInnerFindString).height()
    });

    aboutStrokeOuterContainer.css({
        height: aboutContainer.find(textBodyBackgroundFindString).height()
    });

    aboutContainer.find(topStrokeContainerFindString).css({
        width: parentWidth(aboutContainer.find(topStrokeContainerFindString)) - 4
    });

    aboutContainer.find(topStrokeFindString).css({
        width: parentWidth(aboutContainer.find(topStrokeFindString)) * 3
    });

    aboutContainer.find(topStrokeInnerFindString).css({
        width: parentWidth(aboutContainer.find(topStrokeFindString))
    });

    aboutContainer.find(bottomStrokeContainerFindString).css({
        width: parentWidth(aboutContainer.find(bottomStrokeContainerFindString)) - 4
    });

    aboutContainer.find(bottomStrokeFindString).css({
        width: parentWidth(aboutContainer.find(bottomStrokeFindString)) * 3
    });

    aboutContainer.find(bottomStrokeInnerFindString).css({
        width: parentWidth(aboutContainer.find(bottomStrokeFindString))
    });

    aboutContainer.find(leftStrokeContainerFindString).css({
        height: parentHeight(aboutContainer.find(leftStrokeContainerFindString))
    });

    aboutContainer.find(leftStrokeFindString).css({
        height: parentHeight(aboutContainer.find(leftStrokeFindString)) * 3
    });

    aboutContainer.find(leftStrokeInnerFindString).css({
        height: parentHeight(aboutContainer.find(leftStrokeFindString))
    });

    aboutContainer.find(rightStrokeContainerFindString).css({
        height: parentHeight(aboutContainer.find(rightStrokeContainerFindString))
    });

    aboutContainer.find(rightStrokeFindString).css({
        height: parentHeight(aboutContainer.find(rightStrokeFindString)) * 3
    });

    aboutContainer.find(rightStrokeInnerFindString).css({
        height: parentHeight(aboutContainer.find(rightStrokeFindString))
    });



    /*workBody.css({
        height: bodyContent.outerHeight()
    });*/

    /*workBody.css({
        top: (workContainer.height() / 2) - (workBody.height() / 2)
    });*/

    workContainer.find(textBodyBackgroundFindString).css({
        width: parentWidth(workBodyContent),
        height: workContainer.find(textBodyInnerFindString).height()
    });

    workStrokeOuterContainer.css({
        height: workContainer.find(textBodyBackgroundFindString).height()
    });

    workContainer.find(topStrokeContainerFindString).css({
        width: parentWidth(workContainer.find(topStrokeContainerFindString)) - 4
    });

    workContainer.find(topStrokeFindString).css({
        width: parentWidth(workContainer.find(topStrokeFindString)) * 3
    });

    workContainer.find(topStrokeInnerFindString).css({
        width: parentWidth(workContainer.find(topStrokeFindString))
    });

    workContainer.find(bottomStrokeContainerFindString).css({
        width: parentWidth(workContainer.find(topStrokeContainerFindString)) - 4
    });

    workContainer.find(bottomStrokeFindString).css({
        width: parentWidth(workContainer.find(bottomStrokeFindString)) * 3
    });

    workContainer.find(bottomStrokeInnerFindString).css({
        width: parentWidth(workContainer.find(bottomStrokeFindString))
    });

    workContainer.find(leftStrokeContainerFindString).css({
        height: parentHeight(workContainer.find(leftStrokeContainerFindString))
    });

    workContainer.find(leftStrokeFindString).css({
        height: parentHeight(workContainer.find(leftStrokeFindString)) * 3
    });

    workContainer.find(leftStrokeInnerFindString).css({
        height: parentHeight(workContainer.find(leftStrokeFindString))
    });

    workContainer.find(rightStrokeContainerFindString).css({
        height: parentHeight(workContainer.find(rightStrokeContainerFindString))
    });

    workContainer.find(rightStrokeFindString).css({
        height: parentHeight(workContainer.find(rightStrokeFindString)) * 3
    });

    workContainer.find(rightStrokeInnerFindString).css({
        height: parentHeight(workContainer.find(rightStrokeFindString))
    });



    /*philosophyBody.css({
        height: bodyContent.outerHeight()
    });*/

    /*philosophyBody.css({
        top: (philosophyContainer.height() / 2) - (philosophyBody.height() / 2)
    });*/

    philosophyContainer.find(textBodyBackgroundFindString).css({
        width: parentWidth(philosophyBodyContent),
        height: philosophyContainer.find(textBodyInnerFindString).height()
    });

    philosophyStrokeOuterContainer.css({
        height: philosophyContainer.find(textBodyBackgroundFindString).height()
    });

    philosophyContainer.find(topStrokeContainerFindString).css({
        width: parentWidth(philosophyContainer.find(topStrokeContainerFindString)) - 4
    });

    philosophyContainer.find(topStrokeFindString).css({
        width: parentWidth(philosophyContainer.find(topStrokeFindString)) * 3
    });

    philosophyContainer.find(topStrokeInnerFindString).css({
        width: parentWidth(philosophyContainer.find(topStrokeFindString))
    });

    philosophyContainer.find(bottomStrokeContainerFindString).css({
        width: parentWidth(philosophyContainer.find(topStrokeContainerFindString)) - 4
    });

    philosophyContainer.find(bottomStrokeFindString).css({
        width: parentWidth(philosophyContainer.find(bottomStrokeFindString)) * 3
    });

    philosophyContainer.find(bottomStrokeInnerFindString).css({
        width: parentWidth(philosophyContainer.find(bottomStrokeFindString))
    });

    philosophyContainer.find(leftStrokeContainerFindString).css({
        height: parentHeight(philosophyContainer.find(leftStrokeContainerFindString))
    });

    philosophyContainer.find(leftStrokeFindString).css({
        height: parentHeight(philosophyContainer.find(leftStrokeFindString)) * 3
    });

    philosophyContainer.find(leftStrokeInnerFindString).css({
        height: parentHeight(philosophyContainer.find(leftStrokeFindString))
    });

    philosophyContainer.find(rightStrokeContainerFindString).css({
        height: parentHeight(philosophyContainer.find(rightStrokeContainerFindString))
    });

    philosophyContainer.find(rightStrokeFindString).css({
        height: parentHeight(philosophyContainer.find(rightStrokeFindString)) * 3
    });

    philosophyContainer.find(rightStrokeInnerFindString).css({
        height: parentHeight(philosophyContainer.find(rightStrokeFindString))
    });



    /*contactBody.css({
        height: bodyContent.outerHeight()
    });*/

    /*contactBody.css({
        top: (contactContainer.height() / 2) - (contactBody.height() / 2)
    });*/

    contactContainer.find(textBodyBackgroundFindString).css({
        width: parentWidth(contactBodyContent),
        height: contactContainer.find(textBodyInnerFindString).height()
    });

    contactStrokeOuterContainer.css({
        height: contactContainer.find(textBodyBackgroundFindString).height()
    });

    contactContainer.find(topStrokeContainerFindString).css({
        width: parentWidth(contactContainer.find(topStrokeContainerFindString)) - 4
    });

    contactContainer.find(topStrokeFindString).css({
        width: parentWidth(contactContainer.find(topStrokeFindString)) * 3
    });

    contactContainer.find(topStrokeInnerFindString).css({
        width: parentWidth(contactContainer.find(topStrokeFindString))
    });

    contactContainer.find(bottomStrokeContainerFindString).css({
        width: parentWidth(contactContainer.find(topStrokeContainerFindString)) - 4
    });

    contactContainer.find(bottomStrokeFindString).css({
        width: parentWidth(contactContainer.find(bottomStrokeFindString)) * 3
    });

    contactContainer.find(bottomStrokeInnerFindString).css({
        width: parentWidth(contactContainer.find(bottomStrokeFindString))
    });

    contactContainer.find(leftStrokeContainerFindString).css({
        height: parentHeight(contactContainer.find(leftStrokeContainerFindString))
    });

    contactContainer.find(leftStrokeFindString).css({
        height: parentHeight(contactContainer.find(leftStrokeFindString)) * 3
    });

    contactContainer.find(leftStrokeInnerFindString).css({
        height: parentHeight(contactContainer.find(leftStrokeFindString))
    });

    contactContainer.find(rightStrokeContainerFindString).css({
        height: parentHeight(contactContainer.find(rightStrokeContainerFindString))
    });

    contactContainer.find(rightStrokeFindString).css({
        height: parentHeight(contactContainer.find(rightStrokeFindString)) * 3
    });

    contactContainer.find(rightStrokeInnerFindString).css({
        height: parentHeight(contactContainer.find(rightStrokeFindString))
    });




    topStrokeBackgroundContainer.css({
        width: parentWidth(topStrokeBackgroundContainer)
    });

    topStrokeBackground.css({
        width: parentWidth(topStrokeBackground) * 3
    });

    topStrokeBackgroundInner.css({
        width: parentWidth(topStrokeBackground)
    });

    bottomStrokeBackgroundContainer.css({
        width: parentWidth(bottomStrokeBackgroundContainer)
    });

    bottomStrokeBackground.css({
        width: parentWidth(bottomStrokeBackground) * 3
    });

    bottomStrokeBackgroundInner.css({
        width: parentWidth(bottomStrokeBackground)
    });

    leftStrokeBackgroundContainer.css({
        height: parentHeight(leftStrokeBackgroundContainer)
    });

    leftStrokeBackground.css({
        height: parentHeight(leftStrokeBackground) * 3
    });

    leftStrokeBackgroundInner.css({
        height: parentHeight(leftStrokeBackground)
    });

    rightStrokeBackgroundContainer.css({
        height: parentHeight(rightStrokeBackgroundContainer)
    });

    rightStrokeBackground.css({
        height: parentHeight(rightStrokeBackground) * 3
    });

    rightStrokeBackgroundInner.css({
        height: parentHeight(rightStrokeBackground)
    });

};

additionalStylesAll();

function strokeFlyIn() {
    strokeInMotion = true;
    topStroke.velocity('stop').css('opacity', '0').velocity({
        translateX: ['-' + topStroke.outerWidth(), '0px'],
        opacity: [randomOpacity, randomOpacity]
    }, {
        duration: 3000,
        easing: 'easeInOutQuart',
        delay: 1000,
        queue: false
    });
    bottomStroke.velocity('stop').css('opacity', '0').velocity({
        translateX: [bottomStroke.outerWidth(), '0px'],
        opacity: [randomOpacity, randomOpacity]
    }, {
        duration: 3000,
        easing: 'easeInOutQuart',
        delay: 1000,
        queue: false
    });
    leftStroke.velocity('stop').css('opacity', '0').velocity({
        translateY: ['-' + leftStroke.outerHeight(), '0px'],
        opacity: [randomOpacity, randomOpacity]
    }, {
        duration: 3000,
        easing: 'easeInOutQuart',
        delay: 1000,
        queue: false
    });
    rightStroke.velocity('stop').css('opacity', '0').velocity({
        translateY: [rightStroke.outerHeight(), '0px'],
        opacity: [randomOpacity, randomOpacity]
    }, {
        duration: 3000,
        easing: 'easeInOutQuart',
        delay: 1000,
        queue: false,
        complete: function () {
            strokeComplete = true;
            strokeInMotion = false;
        }
    });
}

function strokeFlyInNoDelay() {
    strokeInMotion = true;
    topStroke.velocity('stop').velocity({
        translateX: ['-' + topStroke.outerWidth(), '0px']
    }, {
        duration: 2000,
        easing: 'easeOutQuart',
        queue: false
    });
    bottomStroke.velocity('stop').velocity({
        translateX: [bottomStroke.outerWidth(), '0px']
    }, {
        duration: 2000,
        easing: 'easeOutQuart',
        queue: false
    });
    leftStroke.velocity('stop').velocity({
        translateY: ['-' + leftStroke.outerHeight(), '0px']
    }, {
        duration: 2000,
        easing: 'easeOutQuart',
        queue: false
    });
    rightStroke.velocity('stop').velocity({
        translateY: [rightStroke.outerHeight(), '0px']
    }, {
        duration: 2000,
        easing: 'easeOutQuart',
        queue: false,
        complete: function () {
            strokeComplete = true;
            strokeInMotion = false;
        }
    });
}

function additionalStylesFull() {
    navCircleContainer.css({
        top: ($(window).height() / 2) - (navCircleContainer.height() / 2) + 'px'
    });

    liveSection.velocity({
        translateX: ['-100vw', '-100vw']
    }, {
        duration: 0
    });

    remainingMessageSpace = ($(window).width() * 0.4) - inner.width();

    logoWidth = logo.width();

    logoHorizontalAlign = (remainingMessageSpace / 2) - (logoWidth / 2);

    svgObject.css({
        top: (($(window).height() * 0.5) - (logo.height() / 2)) + 'px'
    });

    textBody.css({
        top: '-50px'
    });

    textBodyInner.css({
        top: (($(window).height() * 0.5) - (logo.height() / 2)) + 'px'
    });

    logo.css({
        top: '0px',
        left: (($(window).width() * 0.2) - inner.width() / 2) - (logo.width() / 2) + 'px'
    });

    logoClickRegion.css({
        width: logoWidth,
        top: ((($(window).height() * 0.5) - (logo.height() / 2)) - 50) + 'px',
        left: (($(window).width() * 0.2) - inner.width() / 2) - (logo.width() / 2) + 'px'
    });
};

function additionalStyles1024() {
    navCircleContainer.css({
        top: ($(window).height() / 2) - (navCircleContainer.height() / 2) + 'px'
    });

    remainingMessageSpace = ($(window).width() * 0.4) - inner.width();

    logoWidth = logo.width();

    logoHorizontalAlign = (remainingMessageSpace / 2) - (logoWidth / 2);

    logo.css({
        top: '50px',
        left: '50px'
    });
};

if ($(window).width() < 1024) {
    additionalStyles1024();
} else {
    additionalStylesFull();
}

/* Randomly generate an integer between two numbers. */
function r(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function loadingLetterBreakaway() {

    for (i = 0; i < loadingLetter.length; i++) {
        currentLetter = loadingLetter.eq(i),
            randomRotateX = r(0, 45),
            randomRotateY = r(0, 45),
            randomRotateZ = r(0, 45),
            randomTranslateX = r(0, 30),
            randomTranslateY = r(0, 45);

        currentLetter.velocity({
            rotateX: randomRotateX + 'deg',
            rotateY: randomRotateY + 'deg',
            rotateZ: randomRotateZ + 'deg',
            translateX: '-' + (randomTranslateX * 15) + 'px',
            translateY: '-' + randomTranslateY + 'px'
        }, {
            duration: 1000,
            easing: 'easeOutCirc',
            delay: 850,
            queue: false
        });

        currentLetter.velocity({
            opacity: ['0', Math.random()]
        }, {
            duration: 1000,
            easing: 'swing',
            delay: 850,
            queue: false
        });
    }

};

function gradientRollover() {

    messageContent.mouseover(function () {
        messageBackground.velocity({
            opacity: '0.1'
        }, {
            duration: 250,
            easing: 'swing',
            queue: false
        });
    });

    messageContent.mouseout(function () {
        messageBackground.velocity({
            opacity: '0.3'
        }, {
            duration: 250,
            easing: 'swing',
            queue: false
        });
    });

};

var loadBarSequence = [
    {
        e: introLoaderBar,
        p: {
            width: '0vw'
        },
        o: {
            duration: 0
        }
    },
    {
        e: introLoaderBar,
        p: {
            width: '1vw'
        },
        o: {
            duration: 0
        }
    },
    {
        e: introLoaderBar,
        p: {
            width: '2vw'
        },
        o: {
            duration: 0
        }
    },
    {
        e: introLoaderBar,
        p: {
            width: '3vw'
        },
        o: {
            duration: 0
        }
    },
    {
        e: introLoaderBar,
        p: {
            width: '4vw'
        },
        o: {
            duration: 0
        }
    },
    {
        e: introLoaderBar,
        p: {
            width: '5vw'
        },
        o: {
            duration: 0
        }
    },
    {
        e: introLoaderBar,
        p: {
            width: '6vw'
        },
        o: {
            duration: 0
        }
    },
    {
        e: introLoaderBar,
        p: {
            width: '7vw'
        },
        o: {
            duration: 0
        }
    },
    {
        e: introLoaderBar,
        p: {
            width: '8vw'
        },
        o: {
            duration: 0
        }
    },
    {
        e: introLoaderBar,
        p: {
            width: '9vw'
        },
        o: {
            duration: 0
        }
    },
    {
        e: introLoaderBar,
        p: {
            width: '10vw'
        },
        o: {
            duration: 0
        }
    },
    {
        e: introLoaderBar,
        p: {
            width: '11vw'
        },
        o: {
            duration: 0
        }
    },
    {
        e: introLoaderBar,
        p: {
            width: '12vw'
        },
        o: {
            duration: 0
        }
    },
    {
        e: introLoaderBar,
        p: {
            width: '13vw'
        },
        o: {
            duration: 0
        }
    },
    {
        e: introLoaderBar,
        p: {
            width: '14vw'
        },
        o: {
            duration: 0
        }
    },
    {
        e: introLoaderBar,
        p: {
            width: '15vw'
        },
        o: {
            duration: 0
        }
    },
    {
        e: introLoaderBar,
        p: {
            width: '16vw'
        },
        o: {
            duration: 0
        }
    },
    {
        e: introLoaderBar,
        p: {
            width: '17vw'
        },
        o: {
            duration: 0
        }
    },
    {
        e: introLoaderBar,
        p: {
            width: '18vw'
        },
        o: {
            duration: 0
        }
    },
    {
        e: introLoaderBar,
        p: {
            width: '19vw'
        },
        o: {
            duration: 0
        }
    },
    {
        e: introLoaderBar,
        p: {
            width: '20vw'
        },
        o: {
            duration: 0
        }
    },
    {
        e: introLoaderBar,
        p: {
            width: '21vw'
        },
        o: {
            duration: 0
        }
    },
    {
        e: introLoaderBar,
        p: {
            width: '22vw'
        },
        o: {
            duration: 0
        }
    },
    {
        e: introLoaderBar,
        p: {
            width: '23vw'
        },
        o: {
            duration: 0
        }
    },
    {
        e: introLoaderBar,
        p: {
            width: '24vw'
        },
        o: {
            duration: 0
        }
    },
    {
        e: introLoaderBar,
        p: {
            width: '25vw'
        },
        o: {
            duration: 0
        }
    },
    {
        e: introLoaderBar,
        p: {
            width: '26vw'
        },
        o: {
            duration: 0
        }
    },
    {
        e: introLoaderBar,
        p: {
            width: '27vw'
        },
        o: {
            duration: 0
        }
    },
    {
        e: introLoaderBar,
        p: {
            width: '28vw'
        },
        o: {
            duration: 0
        }
    },
    {
        e: introLoaderBar,
        p: {
            width: '29vw'
        },
        o: {
            duration: 0
        }
    },
    {
        e: introLoaderBar,
        p: {
            width: '30vw'
        },
        o: {
            duration: 0
        }
    },
    {
        e: introLoaderBar,
        p: {
            width: '31vw'
        },
        o: {
            duration: 0
        }
    },
    {
        e: introLoaderBar,
        p: {
            width: '32vw'
        },
        o: {
            duration: 0
        }
    },
    {
        e: introLoaderBar,
        p: {
            width: '33vw'
        },
        o: {
            duration: 0
        }
    },
    {
        e: introLoaderBar,
        p: {
            width: '34vw'
        },
        o: {
            duration: 0
        }
    },
    {
        e: introLoaderBar,
        p: {
            width: '35vw'
        },
        o: {
            duration: 0
        }
    },
    {
        e: introLoaderBar,
        p: {
            width: '36vw'
        },
        o: {
            duration: 0
        }
    },
    {
        e: introLoaderBar,
        p: {
            width: '37vw'
        },
        o: {
            duration: 0
        }
    },
    {
        e: introLoaderBar,
        p: {
            width: '38vw'
        },
        o: {
            duration: 0
        }
    },
    {
        e: introLoaderBar,
        p: {
            width: '39vw'
        },
        o: {
            duration: 0
        }
    },
    {
        e: introLoaderBar,
        p: {
            width: '40vw'
        },
        o: {
            duration: 0
        }
    }
];

$.Velocity.RunSequence(loadBarSequence);

navActive.velocity({
    opacity: '0.7'
}, {
    duration: 1000,
    easing: 'swing',
    delay: 2500,
    queue: false
});

navInactive.velocity({
    opacity: '0.1'
}, {
    duration: 1000,
    easing: 'swing',
    delay: 2500,
    queue: false
});

stringSplit();

additionalStylesAll();

logoHover();

logoClick();

$(window).resize(function initial() {

    /*scrollYChecker();*/

    additionalStylesAll();

    stroke.velocity('stop', true).css('opacity', '0');

    if ($(window).width() < 1024) {
        additionalStyles1024();
    } else {
        additionalStylesFull();
    }

    return initial;
}());

$(window).load(function () {

    backgroundImage.imagesLoaded(function () {

        chromeDetectionNotice();

        chromeCloseClick();

        chromeCloseHover();

        additionalStylesAll();

        /*aboutBody.css({
            height: bodyContent.outerHeight()
        });

        workBody.css({
            height: bodyContent.outerHeight()
        });

        philosophyBody.css({
            height: bodyContent.outerHeight()
        });

        contactBody.css({
            height: bodyContent.outerHeight()
        });*/

        aboutContainer.find(textBodyBackgroundFindString).css({
            width: parentWidth(aboutBodyContent),
            height: aboutContainer.find(textBodyInnerFindString).height()
        });

        workContainer.find(textBodyBackgroundFindString).css({
            width: parentWidth(workBodyContent),
            height: workContainer.find(textBodyInnerFindString).height()
        });

        philosophyContainer.find(textBodyBackgroundFindString).css({
            width: parentWidth(philosophyBodyContent),
            height: philosophyContainer.find(textBodyInnerFindString).height()
        });

        contactContainer.find(textBodyBackgroundFindString).css({
            width: parentWidth(contactBodyContent),
            height: contactContainer.find(textBodyInnerFindString).height()
        });

        logo.css({
            top: '0px',
            left: (($(window).width() * 0.2) - inner.width() / 2) - (logo.width() / 2) + 'px'
        });

        svgObject.css({
            top: (($(window).height() * 0.5) - (logo.height() / 2)) + 'px'
        });

        logoClickRegion.css({
            width: logoWidth,
            top: ((($(window).height() * 0.5) - (logo.height() / 2)) - 50) + 'px',
            left: ((($(window).width() * 0.2) - inner.width() / 2) - (logo.width() / 2) - 8) + 'px'
        });

        textBody.css({
            top: '-50px'
        });

        textBodyInner.css({
            top: (($(window).height() * 0.5) - (logo.height() / 2)) + 'px'
        });

        textBodyInner.velocity({
            translateY: '-' + ($(window).height() * 0.25) + 'px'
        }, {
            duration: 0
        });

        navHover();

        navClick();

        loadingLetterBreakaway();

        introLoaderBar.velocity({
            opacity: '0'
        }, {
            duration: 1500,
            easing: 'swing'
        });

        introLoaderBar.velocity({
            width: '100vw',
            scaleY: ['0.5', 'easeInQuad']
        }, {
            duration: 1500,
            easing: 'easeInOutCirc',
            queue: false
        });

        loadingText.velocity({
            opacity: '0'
        }, {
            duration: 1500,
            delay: 2000,
            queue: false
        });

        vid0.hide(0);

        homeBackground.velocity({
            opacity: ['1', 'swing', '0'],
            scale: ['1', '1.5']
        }, {
            duration: 2000,
            delay: 2000,
            easing: 'easeOutQuad',
            queue: false
        });

        navLoadIn();

        loading.velocity({
            opacity: '0'
        }, {
            duration: 1500,
            delay: 2000,
            easing: 'swing',
            queue: false,
            complete: function () {
                loading.fadeOut(0);
                introLoaderBar.fadeOut(0);
            }
        });

        /*gradientRollover();*/

    });

});