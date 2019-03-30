var transitions = {
    intro: {
        startAbout: function() {
            
                transitionActive = true;
            
                pageIndex = 0;
            
                aboutHeader.css('opacity','0').addClass(pageHeaderActiveString).velocity({
                    opacity:'1'
                }, {
                    duration:headerInitialDuration,
                    delay:headerInitialDelay,
                    queue:false
                });

                menuItem.eq(0).velocity({
                    borderColorAlpha: activeMenuItemBorderAlpha
                }, {
                    duration: noDuration,
                    queue:false
                });

                aboutInner.velocity({
                    opacity: activeMenuItemOpacityEnd,
                    backgroundColor: aboutColorPrimary
                }, {
                    duration: noDuration,
                    queue:false
                });

                firstName2.velocity({
                    color: aboutColorPrimary
                }, {
                    duration: noDuration,
                    queue: false
                });
            
                overcast.addClass(activeBackgroundString).velocity({
                    scale: [scaleEnd, scaleStart],
                    translateY: [backgroundSkyTranslateYEnd, backgroundSkyTranslateYStart]
                }, {
                    duration: imageInitialDuration,
                    easing: backgroundInitialEase,
                    queue: false
                });
                overcast.velocity({
                    opacity: '1'
                }, {
                    duration: backgroundInitialOpacityDuration,
                    queue: false
                });
                withoutLights.addClass(activeMiddleBackgroundString).velocity({
                    scale: [scaleEnd, scaleStart],
                    translateY: [middleBackgroundTranslateYEnd, middleBackgroundTranslateYStart]
                }, {
                    duration: imageInitialDuration,
                    easing: imageInitialEase,
                    queue: false,
                    complete:function() {
                        transitionActive = false;
                    }
                });
                withoutLights.velocity({
                    opacity: '1'
                }, {
                    duration: imageInitialOpacityDuration,
                    delay: imageInitialOpacityDelay,
                    queue: false
                });
                withLights.addClass(activeForegroundBackgroundString).velocity({
                    scale: [scaleEnd, scaleStart],
                    translateY: [foregroundImageTranslateYEnd, foregroundImageTranslateYStart]
                }, {
                    duration: imageInitialDuration,
                    easing: imageInitialEase,
                    queue: false
                });
                withLights.velocity({
                    opacity: '1'
                }, {
                    duration: imageInitialOpacityDuration,
                    delay: imageForegroundInitialOpacityDelay,
                    queue: false
                });
        },
        startResume: function() {
            
                transitionActive = true;
            
                pageIndex = 1;
            
                resumeHeader.css('opacity','0').addClass(pageHeaderActiveString).velocity({
                    opacity:'1'
                }, {
                    duration:headerInitialDuration,
                    delay:headerInitialDelay,
                    queue:false
                });

                menuItem.eq(1).velocity({
                    borderColorAlpha: activeMenuItemBorderAlpha
                }, {
                    duration: noDuration,
                    queue:false
                });

                resumeInner.velocity({
                    opacity: activeMenuItemOpacityEnd,
                    backgroundColor: resumeColorPrimary
                }, {
                    duration: noDuration,
                    queue:false
                });

                firstName2.velocity({
                    color: resumeColorPrimary
                }, {
                    duration: noDuration,
                    queue: false
                });
            
                agouraSky.addClass(activeBackgroundString).velocity({
                    scale: [scaleEnd, scaleStart],
                    translateY: [backgroundSkyTranslateYEnd, backgroundSkyTranslateYStart]
                }, {
                    duration: imageInitialDuration,
                    easing: backgroundInitialEase,
                    queue: false
                });
                agouraSky.velocity({
                    opacity: '1'
                }, {
                    duration: backgroundInitialOpacityDuration,
                    queue: false
                });
                hillsDark.addClass(activeMiddleBackgroundString).velocity({
                    scale: [scaleEnd, scaleStart],
                    translateY: [middleBackgroundTranslateYEnd, middleBackgroundTranslateYStart]
                }, {
                    duration: imageInitialDuration,
                    easing: imageInitialEase,
                    queue: false,
                    complete:function() {
                        transitionActive = false;
                    }
                });
                hillsDark.velocity({
                    opacity: '1'
                }, {
                    duration: imageInitialOpacityDuration,
                    delay: imageInitialOpacityDelay,
                    queue: false
                });
                hillsLightBackgroundImage.addClass(activeForegroundBackgroundString).velocity({
                    scale: [scaleEnd, scaleStart],
                    translateY: [foregroundImageTranslateYEnd, foregroundImageTranslateYStart]
                }, {
                    duration: imageInitialDuration,
                    easing: imageInitialEase,
                    queue: false
                });
                hillsLightBackgroundImage.velocity({
                    opacity: '1'
                }, {
                    duration: imageInitialOpacityDuration,
                    delay: imageForegroundInitialOpacityDelay,
                    queue: false
                });
        },
        startPortfolio: function() {
            
                transitionActive = true;
            
                pageIndex = 2;
            
                portfolioHeader.css('opacity','0').addClass(pageHeaderActiveString).velocity({
                    opacity:'1'
                }, {
                    duration:headerInitialDuration,
                    delay:headerInitialDelay,
                    queue:false
                });

                menuItem.eq(2).velocity({
                    borderColorAlpha: activeMenuItemBorderAlpha
                }, {
                    duration: noDuration,
                    queue:false
                });

                portfolioInner.velocity({
                    opacity: activeMenuItemOpacityEnd,
                    backgroundColor: portfolioColorPrimary
                }, {
                    duration: noDuration,
                    queue:false
                });

                firstName2.velocity({
                    color: portfolioColorPrimary
                }, {
                    duration: noDuration,
                    queue: false
                });
            
                pierSky.addClass(activeBackgroundString).velocity({
                    scale: [scaleEnd, scaleStart],
                    translateY: [backgroundSkyTranslateYEnd, backgroundSkyTranslateYStart]
                }, {
                    duration: imageInitialDuration,
                    easing: backgroundInitialEase,
                    queue: false
                });
                pierSky.velocity({
                    opacity: '1'
                }, {
                    duration: backgroundInitialOpacityDuration,
                    queue: false
                });
                ferrisWheel.addClass(activeMiddleBackgroundString).velocity({
                    scale: [scaleEnd, scaleStart],
                    translateY: [middleBackgroundTranslateYEnd, middleBackgroundTranslateYStart]
                }, {
                    duration: imageInitialDuration,
                    easing: imageInitialEase,
                    queue: false,
                    complete:function() {
                        transitionActive = false;
                    }
                });
                ferrisWheel.velocity({
                    opacity: '1'
                }, {
                    duration: imageInitialOpacityDuration,
                    delay: imageInitialOpacityDelay,
                    queue: false
                });
                beachBackgroundImage.addClass(activeForegroundBackgroundString).velocity({
                    scale: [scaleEnd, scaleStart],
                    translateY: [foregroundImageTranslateYEnd, foregroundImageTranslateYStart]
                }, {
                    duration: imageInitialDuration,
                    easing: imageInitialEase,
                    queue: false
                });
                beachBackgroundImage.velocity({
                    opacity: '1'
                }, {
                    duration: imageInitialOpacityDuration,
                    delay: imageForegroundInitialOpacityDelay,
                    queue: false
                });
        },
        startContact: function() {
            
                transitionActive = true;
            
                pageIndex = 3;
            
                contactHeader.css('opacity','0').addClass(pageHeaderActiveString).velocity({
                    opacity:'1'
                }, {
                    duration:headerInitialDuration,
                    delay:headerInitialDelay,
                    queue:false
                });

                menuItem.eq(3).velocity({
                    borderColorAlpha: activeMenuItemBorderAlpha
                }, {
                    duration: noDuration,
                    queue:false
                });

                contactInner.velocity({
                    opacity: activeMenuItemOpacityEnd,
                    backgroundColor: contactColorPrimary
                }, {
                    duration: noDuration,
                    queue:false
                });

                firstName2.velocity({
                    color: contactColorPrimary
                }, {
                    duration: noDuration,
                    queue: false
                });
            
                desertSky.addClass(activeBackgroundString).velocity({
                    scale: [scaleEnd, scaleStart],
                    translateY: [backgroundSkyTranslateYEnd, backgroundSkyTranslateYStart]
                }, {
                    duration: imageInitialDuration,
                    easing: backgroundInitialEase,
                    queue: false
                });
                desertSky.velocity({
                    opacity: '1'
                }, {
                    duration: backgroundInitialOpacityDuration,
                    queue: false
                });
                desertBackdrop.addClass(activeMiddleBackgroundString).velocity({
                    scale: [scaleEnd, scaleStart],
                    translateY: [desertBackdropTranslateYEnd, desertBackdropTranslateYStart]
                }, {
                    duration: imageInitialDuration,
                    easing: imageInitialEase,
                    queue: false,
                    complete:function() {
                        transitionActive = false;
                    }
                });
                desertBackdrop.velocity({
                    opacity: '1'
                }, {
                    duration: imageInitialOpacityDuration,
                    delay: imageInitialOpacityDelay,
                    queue: false
                });
                desertRocksBackgroundImage.addClass(activeForegroundBackgroundString).velocity({
                    scale: [scaleEnd, scaleStart],
                    translateY: [desertRocksTranslateYEnd, desertRocksTranslateYStart]
                }, {
                    duration: imageInitialDuration,
                    easing: imageInitialEase,
                    queue: false
                });
                desertRocksBackgroundImage.velocity({
                    opacity: '1'
                }, {
                    duration: imageInitialOpacityDuration,
                    delay: imageForegroundInitialOpacityDelay,
                    queue: false
                });
        }
    },
    slider: {
        toAbout: function() {
            
            transitionActive = true;
            
            pageIndex = 0;
                
                aboutHeader.css('opacity','0').addClass(pageHeaderActiveString).velocity({
                    translateY:[headerTranslateYEnd, headerTranslateYStart],
                    opacity:['1','0']
                }, {
                    duration:slideHeaderDuration,
                    easing:slideHeaderEase,
                    queue:false
                }).siblings(pageHeader).velocity({
                    translateY:headerSiblingsTranslateY,
                    opacity:'0'
                }, {
                    duration:slideHeaderDuration,
                    easing:slideHeaderEase,
                    queue:false,
                    complete:function() {
                        
                                aboutHeader.removeClass(pageHeaderActiveString).addClass(pageHeaderActiveString);
                        
                                resumeHeader.removeClass(pageHeaderActiveString);
                        
                                portfolioHeader.removeClass(pageHeaderActiveString);
                        
                                contactHeader.removeClass(pageHeaderActiveString);
                        
                    }
                });
            
            switch (true) {
                case (!(overcast.hasClass(activeBackgroundString))):

                    firstName2.velocity({
                        color: aboutColorPrimary
                    }, {
                        duration: lastNameColorDuration,
                        queue:false
                    });
                    overcast.css('opacity', '0').removeClass(previousActiveBackgroundString).addClass(activeBackgroundString).velocity({
                        scale: [scaleEnd, scaleStart],
                        translateY: [backgroundSkyTranslateYEnd, backgroundSkyTranslateYStart]
                    }, {
                        duration: imageSlideDuration,
                        easing: backgroundSlideEase,
                        queue:false
                    });
                    withoutLights.css('opacity', '0').removeClass(previousActiveMiddleBackgroundString).addClass(activeMiddleBackgroundString).velocity({
                        scale: [scaleEnd, scaleStart],
                        translateY: [middleBackgroundTranslateYEnd, middleBackgroundTranslateYStart]
                    }, {
                        duration: imageSlideDuration,
                        easing: imageSlideEase,
                        queue:false,
                        complete:function() {
                            transitionActive = false;
                        }
                    });
                    withLightsBackgroundImage.css('opacity', '0').removeClass(previousActiveForegroundBackgroundString).addClass(activeForegroundBackgroundString).velocity({
                        scale: [scaleEnd, scaleStart],
                        translateY: [foregroundImageTranslateYEnd, foregroundImageTranslateYStart]
                    }, {
                        duration: imageSlideDuration,
                        easing: imageSlideEase,
                        queue:false
                    });
                    overcast.velocity({
                        opacity: '1'
                    }, {
                        duration: imageSlideOpacityDuration,
                        delay: imageSlideOpacityDelay,
                        queue: false
                    });
                    withoutLights.velocity({
                        opacity: '1'
                    }, {
                        duration: imageSlideOpacityDuration,
                        delay: imageSlideOpacityDelay,
                        queue: false
                    });
                    withLightsBackgroundImage.velocity({
                        opacity: '1'
                    }, {
                        duration: imageSlideOpacityDuration,
                        delay: imageSlideOpacityDelay,
                        queue: false
                    });


                    break;
            }


            switch (true) {
                case (hillsLightBackgroundImage.hasClass(activeForegroundBackgroundString)) && (hillsLightBackgroundImage.hasClass(previousActiveForegroundBackgroundString)):
                    hillsLightBackgroundImage.removeClass(activeForegroundBackgroundString);
                    break;
                case (!(hillsLightBackgroundImage.hasClass(activeForegroundBackgroundString))) && (hillsLightBackgroundImage.hasClass(previousActiveForegroundBackgroundString)):
                    hillsLightBackgroundImage.removeClass(previousActiveForegroundBackgroundString);
                    break;
                case (hillsLightBackgroundImage.hasClass(activeForegroundBackgroundString)) && (!(hillsLightBackgroundImage.hasClass(previousActiveForegroundBackgroundString))):
                    hillsLightBackgroundImage.removeClass(activeForegroundBackgroundString).addClass(previousActiveForegroundBackgroundString);
                    break;
            }
            switch (true) {
                case (hillsDark.hasClass(activeMiddleBackgroundString)) && (hillsDark.hasClass(previousActiveMiddleBackgroundString)):
                    hillsDark.removeClass(activeMiddleBackgroundString);
                    break;
                case (!(hillsDark.hasClass(activeMiddleBackgroundString))) && (hillsDark.hasClass(previousActiveMiddleBackgroundString)):
                    hillsDark.removeClass(previousActiveMiddleBackgroundString);
                    break;
                case (hillsDark.hasClass(activeMiddleBackgroundString)) && (!(hillsDark.hasClass(previousActiveMiddleBackgroundString))):
                    hillsDark.removeClass(activeMiddleBackgroundString).addClass(previousActiveMiddleBackgroundString);
                    break;
            }
            switch (true) {
                case (agouraSky.hasClass(activeBackgroundString)) && (agouraSky.hasClass(previousActiveBackgroundString)):
                    agouraSky.removeClass(activeBackgroundString);
                    break;
                case (!(agouraSky.hasClass(activeBackgroundString))) && (agouraSky.hasClass(previousActiveBackgroundString)):
                    agouraSky.removeClass(previousActiveBackgroundString);
                    break;
                case (agouraSky.hasClass(activeBackgroundString)) && (!(agouraSky.hasClass(previousActiveBackgroundString))):
                    agouraSky.removeClass(activeBackgroundString).addClass(previousActiveBackgroundString);
                    break;
            }


            switch (true) {
                case (beachBackgroundImage.hasClass(activeForegroundBackgroundString)) && (beachBackgroundImage.hasClass(previousActiveForegroundBackgroundString)):
                    beachBackgroundImage.removeClass(activeForegroundBackgroundString);
                    break;
                case (!(beachBackgroundImage.hasClass(activeForegroundBackgroundString))) && (beachBackgroundImage.hasClass(previousActiveForegroundBackgroundString)):
                    beachBackgroundImage.removeClass(previousActiveForegroundBackgroundString);
                    break;
                case (beachBackgroundImage.hasClass(activeForegroundBackgroundString)) && (!(beachBackgroundImage.hasClass(previousActiveForegroundBackgroundString))):
                    beachBackgroundImage.removeClass(activeForegroundBackgroundString).addClass(previousActiveForegroundBackgroundString);
                    break;
            }
            switch (true) {
                case (ferrisWheel.hasClass(activeMiddleBackgroundString)) && (ferrisWheel.hasClass(previousActiveMiddleBackgroundString)):
                    ferrisWheel.removeClass(activeMiddleBackgroundString);
                    break;
                case (!(ferrisWheel.hasClass(activeMiddleBackgroundString))) && (ferrisWheel.hasClass(previousActiveMiddleBackgroundString)):
                    ferrisWheel.removeClass(previousActiveMiddleBackgroundString);
                    break;
                case (ferrisWheel.hasClass(activeMiddleBackgroundString)) && (!(ferrisWheel.hasClass(previousActiveMiddleBackgroundString))):
                    ferrisWheel.removeClass(activeMiddleBackgroundString).addClass(previousActiveMiddleBackgroundString);
                    break;
            }
            switch (true) {
                case (pierSky.hasClass(activeBackgroundString)) && (pierSky.hasClass(previousActiveBackgroundString)):
                    pierSky.removeClass(activeBackgroundString);
                    break;
                case (!(pierSky.hasClass(activeBackgroundString))) && (pierSky.hasClass(previousActiveBackgroundString)):
                    pierSky.removeClass(previousActiveBackgroundString);
                    break;
                case (pierSky.hasClass(activeBackgroundString)) && (!(pierSky.hasClass(previousActiveBackgroundString))):
                    pierSky.removeClass(activeBackgroundString).addClass(previousActiveBackgroundString);
                    break;
            }


            switch (true) {
                case (desertRocksBackgroundImage.hasClass(activeForegroundBackgroundString)) && (desertRocksBackgroundImage.hasClass(previousActiveForegroundBackgroundString)):
                    desertRocksBackgroundImage.removeClass(activeForegroundBackgroundString);
                    break;
                case (!(desertRocksBackgroundImage.hasClass(activeForegroundBackgroundString))) && (desertRocksBackgroundImage.hasClass(previousActiveForegroundBackgroundString)):
                    desertRocksBackgroundImage.removeClass(previousActiveForegroundBackgroundString);
                    break;
                case (desertRocksBackgroundImage.hasClass(activeForegroundBackgroundString)) && (!(desertRocksBackgroundImage.hasClass(previousActiveForegroundBackgroundString))):
                    desertRocksBackgroundImage.removeClass(activeForegroundBackgroundString).addClass(previousActiveForegroundBackgroundString);
                    break;
            }
            switch (true) {
                case (desertBackdrop.hasClass(activeMiddleBackgroundString)) && (desertBackdrop.hasClass(previousActiveMiddleBackgroundString)):
                    desertBackdrop.removeClass(activeMiddleBackgroundString);
                    break;
                case (!(desertBackdrop.hasClass(activeMiddleBackgroundString))) && (desertBackdrop.hasClass(previousActiveMiddleBackgroundString)):
                    desertBackdrop.removeClass(previousActiveMiddleBackgroundString);
                    break;
                case (desertBackdrop.hasClass(activeMiddleBackgroundString)) && (!(desertBackdrop.hasClass(previousActiveMiddleBackgroundString))):
                    desertBackdrop.removeClass(activeMiddleBackgroundString).addClass(previousActiveMiddleBackgroundString);
                    break;
            }
            switch (true) {
                case (desertSky.hasClass(activeBackgroundString)) && (desertSky.hasClass(previousActiveBackgroundString)):
                    desertSky.removeClass(activeBackgroundString);
                    break;
                case (!(desertSky.hasClass(activeBackgroundString))) && (desertSky.hasClass(previousActiveBackgroundString)):
                    desertSky.removeClass(previousActiveBackgroundString);
                    break;
                case (desertSky.hasClass(activeBackgroundString)) && (!(desertSky.hasClass(previousActiveBackgroundString))):
                    desertSky.removeClass(activeBackgroundString).addClass(previousActiveBackgroundString);
                    break;
            }
        },
        toResume: function() {
            
            transitionActive = true;
            
            pageIndex = 1;
                
                resumeHeader.css('opacity','0').addClass(pageHeaderActiveString).velocity({
                    translateY:[headerTranslateYEnd, headerTranslateYStart],
                    opacity:['1','0']
                }, {
                    duration:slideHeaderDuration,
                    easing:slideHeaderEase,
                    queue:false
                }).siblings(pageHeader).velocity({
                    translateY:headerSiblingsTranslateY,
                    opacity:'0'
                }, {
                    duration:slideHeaderDuration,
                    easing:slideHeaderEase,
                    queue:false,
                    complete:function() {
                        
                                aboutHeader.removeClass(pageHeaderActiveString);
                        
                                resumeHeader.removeClass(pageHeaderActiveString).addClass(pageHeaderActiveString);
                        
                                portfolioHeader.removeClass(pageHeaderActiveString);
                        
                                contactHeader.removeClass(pageHeaderActiveString);
                        
                    }
                });
            
            switch (true) {
                case (!(agouraSky.hasClass(activeBackgroundString))):

                    firstName2.velocity({
                        color: resumeColorPrimary
                    }, {
                        duration: lastNameColorDuration,
                        queue:false
                    });
                    agouraSky.css('opacity', '0').removeClass(previousActiveBackgroundString).addClass(activeBackgroundString).velocity({
                        scale: [scaleEnd, scaleStart],
                        translateY: [backgroundSkyTranslateYEnd, backgroundSkyTranslateYStart]
                    }, {
                        duration: imageSlideDuration,
                        easing: backgroundSlideEase,
                        queue:false
                    });
                    hillsDark.css('opacity', '0').removeClass(previousActiveMiddleBackgroundString).addClass(activeMiddleBackgroundString).velocity({
                        scale: [scaleEnd, scaleStart],
                        translateY: [middleBackgroundTranslateYEnd, middleBackgroundTranslateYStart]
                    }, {
                        duration: imageSlideDuration,
                        easing: imageSlideEase,
                        queue:false,
                        complete:function() {
                            transitionActive = false;
                        }
                    });
                    hillsLightBackgroundImage.css('opacity', '0').removeClass(previousActiveForegroundBackgroundString).addClass(activeForegroundBackgroundString).velocity({
                        scale: [scaleEnd, scaleStart],
                        translateY: [foregroundImageTranslateYEnd, foregroundImageTranslateYStart]
                    }, {
                        duration: imageSlideDuration,
                        easing: imageSlideEase,
                        queue:false
                    });
                    agouraSky.velocity({
                        opacity: '1'
                    }, {
                        duration: imageSlideOpacityDuration,
                        delay: imageSlideOpacityDelay,
                        queue: false
                    });
                    hillsDark.velocity({
                        opacity: '1'
                    }, {
                        duration: imageSlideOpacityDuration,
                        delay: imageSlideOpacityDelay,
                        queue: false
                    });
                    hillsLightBackgroundImage.velocity({
                        opacity: '1'
                    }, {
                        duration: imageSlideOpacityDuration,
                        delay: imageSlideOpacityDelay,
                        queue: false
                    });


                    break;
            }


            switch (true) {
                case (withLightsBackgroundImage.hasClass(activeForegroundBackgroundString)) && (withLightsBackgroundImage.hasClass(previousActiveForegroundBackgroundString)):
                    withLightsBackgroundImage.removeClass(activeForegroundBackgroundString);
                    break;
                case (!(withLightsBackgroundImage.hasClass(activeForegroundBackgroundString))) && (withLightsBackgroundImage.hasClass(previousActiveForegroundBackgroundString)):
                    withLightsBackgroundImage.removeClass(previousActiveForegroundBackgroundString);
                    break;
                case (withLightsBackgroundImage.hasClass(activeForegroundBackgroundString)) && (!(withLightsBackgroundImage.hasClass(previousActiveForegroundBackgroundString))):
                    withLightsBackgroundImage.removeClass(activeForegroundBackgroundString).addClass(previousActiveForegroundBackgroundString);
                    break;
            }
            switch (true) {
                case (withoutLights.hasClass(activeMiddleBackgroundString)) && (withoutLights.hasClass(previousActiveMiddleBackgroundString)):
                    withoutLights.removeClass(activeMiddleBackgroundString);
                    break;
                case (!(withoutLights.hasClass(activeMiddleBackgroundString))) && (withoutLights.hasClass(previousActiveMiddleBackgroundString)):
                    withoutLights.removeClass(previousActiveMiddleBackgroundString);
                    break;
                case (withoutLights.hasClass(activeMiddleBackgroundString)) && (!(withoutLights.hasClass(previousActiveMiddleBackgroundString))):
                    withoutLights.removeClass(activeMiddleBackgroundString).addClass(previousActiveMiddleBackgroundString);
                    break;
            }
            switch (true) {
                case (overcast.hasClass(activeBackgroundString)) && (overcast.hasClass(previousActiveBackgroundString)):
                    overcast.removeClass(activeBackgroundString);
                    break;
                case (!(overcast.hasClass(activeBackgroundString))) && (overcast.hasClass(previousActiveBackgroundString)):
                    overcast.removeClass(previousActiveBackgroundString);
                    break;
                case (overcast.hasClass(activeBackgroundString)) && (!(overcast.hasClass(previousActiveBackgroundString))):
                    overcast.removeClass(activeBackgroundString).addClass(previousActiveBackgroundString);
                    break;
            }


            switch (true) {
                case (beachBackgroundImage.hasClass(activeForegroundBackgroundString)) && (beachBackgroundImage.hasClass(previousActiveForegroundBackgroundString)):
                    beachBackgroundImage.removeClass(activeForegroundBackgroundString);
                    break;
                case (!(beachBackgroundImage.hasClass(activeForegroundBackgroundString))) && (beachBackgroundImage.hasClass(previousActiveForegroundBackgroundString)):
                    beachBackgroundImage.removeClass(previousActiveForegroundBackgroundString);
                    break;
                case (beachBackgroundImage.hasClass(activeForegroundBackgroundString)) && (!(beachBackgroundImage.hasClass(previousActiveForegroundBackgroundString))):
                    beachBackgroundImage.removeClass(activeForegroundBackgroundString).addClass(previousActiveForegroundBackgroundString);
                    break;
            }
            switch (true) {
                case (ferrisWheel.hasClass(activeMiddleBackgroundString)) && (ferrisWheel.hasClass(previousActiveMiddleBackgroundString)):
                    ferrisWheel.removeClass(activeMiddleBackgroundString);
                    break;
                case (!(ferrisWheel.hasClass(activeMiddleBackgroundString))) && (ferrisWheel.hasClass(previousActiveMiddleBackgroundString)):
                    ferrisWheel.removeClass(previousActiveMiddleBackgroundString);
                    break;
                case (ferrisWheel.hasClass(activeMiddleBackgroundString)) && (!(ferrisWheel.hasClass(previousActiveMiddleBackgroundString))):
                    ferrisWheel.removeClass(activeMiddleBackgroundString).addClass(previousActiveMiddleBackgroundString);
                    break;
            }
            switch (true) {
                case (pierSky.hasClass(activeBackgroundString)) && (pierSky.hasClass(previousActiveBackgroundString)):
                    pierSky.removeClass(activeBackgroundString);
                    break;
                case (!(pierSky.hasClass(activeBackgroundString))) && (pierSky.hasClass(previousActiveBackgroundString)):
                    pierSky.removeClass(previousActiveBackgroundString);
                    break;
                case (pierSky.hasClass(activeBackgroundString)) && (!(pierSky.hasClass(previousActiveBackgroundString))):
                    pierSky.removeClass(activeBackgroundString).addClass(previousActiveBackgroundString);
                    break;
            }


            switch (true) {
                case (desertRocksBackgroundImage.hasClass(activeForegroundBackgroundString)) && (desertRocksBackgroundImage.hasClass(previousActiveForegroundBackgroundString)):
                    desertRocksBackgroundImage.removeClass(activeForegroundBackgroundString);
                    break;
                case (!(desertRocksBackgroundImage.hasClass(activeForegroundBackgroundString))) && (desertRocksBackgroundImage.hasClass(previousActiveForegroundBackgroundString)):
                    desertRocksBackgroundImage.removeClass(previousActiveForegroundBackgroundString);
                    break;
                case (desertRocksBackgroundImage.hasClass(activeForegroundBackgroundString)) && (!(desertRocksBackgroundImage.hasClass(previousActiveForegroundBackgroundString))):
                    desertRocksBackgroundImage.removeClass(activeForegroundBackgroundString).addClass(previousActiveForegroundBackgroundString);
                    break;
            }
            switch (true) {
                case (desertBackdrop.hasClass(activeMiddleBackgroundString)) && (desertBackdrop.hasClass(previousActiveMiddleBackgroundString)):
                    desertBackdrop.removeClass(activeMiddleBackgroundString);
                    break;
                case (!(desertBackdrop.hasClass(activeMiddleBackgroundString))) && (desertBackdrop.hasClass(previousActiveMiddleBackgroundString)):
                    desertBackdrop.removeClass(previousActiveMiddleBackgroundString);
                    break;
                case (desertBackdrop.hasClass(activeMiddleBackgroundString)) && (!(desertBackdrop.hasClass(previousActiveMiddleBackgroundString))):
                    desertBackdrop.removeClass(activeMiddleBackgroundString).addClass(previousActiveMiddleBackgroundString);
                    break;
            }
            switch (true) {
                case (desertSky.hasClass(activeBackgroundString)) && (desertSky.hasClass(previousActiveBackgroundString)):
                    desertSky.removeClass(activeBackgroundString);
                    break;
                case (!(desertSky.hasClass(activeBackgroundString))) && (desertSky.hasClass(previousActiveBackgroundString)):
                    desertSky.removeClass(previousActiveBackgroundString);
                    break;
                case (desertSky.hasClass(activeBackgroundString)) && (!(desertSky.hasClass(previousActiveBackgroundString))):
                    desertSky.removeClass(activeBackgroundString).addClass(previousActiveBackgroundString);
                    break;
            }
        },
        toPortfolio: function() {
            
            transitionActive = true;
            
            pageIndex = 2;
                
                portfolioHeader.css('opacity','0').addClass(pageHeaderActiveString).velocity({
                    translateY:[headerTranslateYEnd, headerTranslateYStart],
                    opacity:['1','0']
                }, {
                    duration:slideHeaderDuration,
                    easing:slideHeaderEase,
                    queue:false
                }).siblings(pageHeader).velocity({
                    translateY:headerSiblingsTranslateY,
                    opacity:'0'
                }, {
                    duration:slideHeaderDuration,
                    easing:slideHeaderEase,
                    queue:false,
                    complete:function() {
                        
                                aboutHeader.removeClass(pageHeaderActiveString);
                        
                                resumeHeader.removeClass(pageHeaderActiveString);
                        
                                portfolioHeader.removeClass(pageHeaderActiveString).addClass(pageHeaderActiveString);
                        
                                contactHeader.removeClass(pageHeaderActiveString);
                        
                    }
                });
            
            switch (true) {
                case (!(pierSky.hasClass(activeBackgroundString))):

                    firstName2.velocity({
                        color: portfolioColorPrimary
                    }, {
                        duration: lastNameColorDuration,
                        queue:false
                    });
                    pierSky.css('opacity', '0').removeClass(previousActiveBackgroundString).addClass(activeBackgroundString).velocity({
                        scale: [scaleEnd, scaleStart],
                        translateY: [backgroundSkyTranslateYEnd, backgroundSkyTranslateYStart]
                    }, {
                        duration: imageSlideDuration,
                        easing: backgroundSlideEase,
                        queue:false
                    });
                    ferrisWheel.css('opacity', '0').removeClass(previousActiveMiddleBackgroundString).addClass(activeMiddleBackgroundString).velocity({
                        scale: [scaleEnd, scaleStart],
                        translateY: [middleBackgroundTranslateYEnd, middleBackgroundTranslateYStart]
                    }, {
                        duration: imageSlideDuration,
                        easing: imageSlideEase,
                        queue:false,
                        complete:function() {
                            transitionActive = false;
                        }
                    });
                    beachBackgroundImage.css('opacity', '0').removeClass(previousActiveForegroundBackgroundString).addClass(activeForegroundBackgroundString).velocity({
                        scale: [scaleEnd, scaleStart],
                        translateY: [foregroundImageTranslateYEnd, foregroundImageTranslateYStart]
                    }, {
                        duration: imageSlideDuration,
                        easing: imageSlideEase,
                        queue:false
                    });
                    pierSky.velocity({
                        opacity: '1'
                    }, {
                        duration: imageSlideOpacityDuration,
                        delay: imageSlideOpacityDelay,
                        queue: false
                    });
                    ferrisWheel.velocity({
                        opacity: '1'
                    }, {
                        duration: imageSlideOpacityDuration,
                        delay: imageSlideOpacityDelay,
                        queue: false
                    });
                    beachBackgroundImage.velocity({
                        opacity: '1'
                    }, {
                        duration: imageSlideOpacityDuration,
                        delay: imageSlideOpacityDelay,
                        queue: false
                    });


                    break;
            }


            switch (true) {
                case (withLightsBackgroundImage.hasClass(activeForegroundBackgroundString)) && (withLightsBackgroundImage.hasClass(previousActiveForegroundBackgroundString)):
                    withLightsBackgroundImage.removeClass(activeForegroundBackgroundString);
                    break;
                case (!(withLightsBackgroundImage.hasClass(activeForegroundBackgroundString))) && (withLightsBackgroundImage.hasClass(previousActiveForegroundBackgroundString)):
                    withLightsBackgroundImage.removeClass(previousActiveForegroundBackgroundString);
                    break;
                case (withLightsBackgroundImage.hasClass(activeForegroundBackgroundString)) && (!(withLightsBackgroundImage.hasClass(previousActiveForegroundBackgroundString))):
                    withLightsBackgroundImage.removeClass(activeForegroundBackgroundString).addClass(previousActiveForegroundBackgroundString);
                    break;
            }
            switch (true) {
                case (withoutLights.hasClass(activeMiddleBackgroundString)) && (withoutLights.hasClass(previousActiveMiddleBackgroundString)):
                    withoutLights.removeClass(activeMiddleBackgroundString);
                    break;
                case (!(withoutLights.hasClass(activeMiddleBackgroundString))) && (withoutLights.hasClass(previousActiveMiddleBackgroundString)):
                    withoutLights.removeClass(previousActiveMiddleBackgroundString);
                    break;
                case (withoutLights.hasClass(activeMiddleBackgroundString)) && (!(withoutLights.hasClass(previousActiveMiddleBackgroundString))):
                    withoutLights.removeClass(activeMiddleBackgroundString).addClass(previousActiveMiddleBackgroundString);
                    break;
            }
            switch (true) {
                case (overcast.hasClass(activeBackgroundString)) && (overcast.hasClass(previousActiveBackgroundString)):
                    overcast.removeClass(activeBackgroundString);
                    break;
                case (!(overcast.hasClass(activeBackgroundString))) && (overcast.hasClass(previousActiveBackgroundString)):
                    overcast.removeClass(previousActiveBackgroundString);
                    break;
                case (overcast.hasClass(activeBackgroundString)) && (!(overcast.hasClass(previousActiveBackgroundString))):
                    overcast.removeClass(activeBackgroundString).addClass(previousActiveBackgroundString);
                    break;
            }


            switch (true) {
                case (hillsLightBackgroundImage.hasClass(activeForegroundBackgroundString)) && (hillsLightBackgroundImage.hasClass(previousActiveForegroundBackgroundString)):
                    hillsLightBackgroundImage.removeClass(activeForegroundBackgroundString);
                    break;
                case (!(hillsLightBackgroundImage.hasClass(activeForegroundBackgroundString))) && (hillsLightBackgroundImage.hasClass(previousActiveForegroundBackgroundString)):
                    hillsLightBackgroundImage.removeClass(previousActiveForegroundBackgroundString);
                    break;
                case (hillsLightBackgroundImage.hasClass(activeForegroundBackgroundString)) && (!(hillsLightBackgroundImage.hasClass(previousActiveForegroundBackgroundString))):
                    hillsLightBackgroundImage.removeClass(activeForegroundBackgroundString).addClass(previousActiveForegroundBackgroundString);
                    break;
            }
            switch (true) {
                case (hillsDark.hasClass(activeMiddleBackgroundString)) && (hillsDark.hasClass(previousActiveMiddleBackgroundString)):
                    hillsDark.removeClass(activeMiddleBackgroundString);
                    break;
                case (!(hillsDark.hasClass(activeMiddleBackgroundString))) && (hillsDark.hasClass(previousActiveMiddleBackgroundString)):
                    hillsDark.removeClass(previousActiveMiddleBackgroundString);
                    break;
                case (hillsDark.hasClass(activeMiddleBackgroundString)) && (!(hillsDark.hasClass(previousActiveMiddleBackgroundString))):
                    hillsDark.removeClass(activeMiddleBackgroundString).addClass(previousActiveMiddleBackgroundString);
                    break;
            }
            switch (true) {
                case (agouraSky.hasClass(activeBackgroundString)) && (agouraSky.hasClass(previousActiveBackgroundString)):
                    agouraSky.removeClass(activeBackgroundString);
                    break;
                case (!(agouraSky.hasClass(activeBackgroundString))) && (agouraSky.hasClass(previousActiveBackgroundString)):
                    agouraSky.removeClass(previousActiveBackgroundString);
                    break;
                case (agouraSky.hasClass(activeBackgroundString)) && (!(agouraSky.hasClass(previousActiveBackgroundString))):
                    agouraSky.removeClass(activeBackgroundString).addClass(previousActiveBackgroundString);
                    break;
            }


            switch (true) {
                case (desertRocksBackgroundImage.hasClass(activeForegroundBackgroundString)) && (desertRocksBackgroundImage.hasClass(previousActiveForegroundBackgroundString)):
                    desertRocksBackgroundImage.removeClass(activeForegroundBackgroundString);
                    break;
                case (!(desertRocksBackgroundImage.hasClass(activeForegroundBackgroundString))) && (desertRocksBackgroundImage.hasClass(previousActiveForegroundBackgroundString)):
                    desertRocksBackgroundImage.removeClass(previousActiveForegroundBackgroundString);
                    break;
                case (desertRocksBackgroundImage.hasClass(activeForegroundBackgroundString)) && (!(desertRocksBackgroundImage.hasClass(previousActiveForegroundBackgroundString))):
                    desertRocksBackgroundImage.removeClass(activeForegroundBackgroundString).addClass(previousActiveForegroundBackgroundString);
                    break;
            }
            switch (true) {
                case (desertBackdrop.hasClass(activeMiddleBackgroundString)) && (desertBackdrop.hasClass(previousActiveMiddleBackgroundString)):
                    desertBackdrop.removeClass(activeMiddleBackgroundString);
                    break;
                case (!(desertBackdrop.hasClass(activeMiddleBackgroundString))) && (desertBackdrop.hasClass(previousActiveMiddleBackgroundString)):
                    desertBackdrop.removeClass(previousActiveMiddleBackgroundString);
                    break;
                case (desertBackdrop.hasClass(activeMiddleBackgroundString)) && (!(desertBackdrop.hasClass(previousActiveMiddleBackgroundString))):
                    desertBackdrop.removeClass(activeMiddleBackgroundString).addClass(previousActiveMiddleBackgroundString);
                    break;
            }
            switch (true) {
                case (desertSky.hasClass(activeBackgroundString)) && (desertSky.hasClass(previousActiveBackgroundString)):
                    desertSky.removeClass(activeBackgroundString);
                    break;
                case (!(desertSky.hasClass(activeBackgroundString))) && (desertSky.hasClass(previousActiveBackgroundString)):
                    desertSky.removeClass(previousActiveBackgroundString);
                    break;
                case (desertSky.hasClass(activeBackgroundString)) && (!(desertSky.hasClass(previousActiveBackgroundString))):
                    desertSky.removeClass(activeBackgroundString).addClass(previousActiveBackgroundString);
                    break;
            }
        },
        toContact: function() {
            
            transitionActive = true;
            
            pageIndex = 3;
                
                contactHeader.css('opacity','0').addClass(pageHeaderActiveString).velocity({
                    translateY:[headerTranslateYEnd, headerTranslateYStart],
                    opacity:['1','0']
                }, {
                    duration:slideHeaderDuration,
                    easing:slideHeaderEase,
                    queue:false
                }).siblings(pageHeader).velocity({
                    translateY:headerSiblingsTranslateY,
                    opacity:'0'
                }, {
                    duration:slideHeaderDuration,
                    easing:slideHeaderEase,
                    queue:false,
                    complete:function() {
                        
                                aboutHeader.removeClass(pageHeaderActiveString);
                        
                                resumeHeader.removeClass(pageHeaderActiveString);
                        
                                portfolioHeader.removeClass(pageHeaderActiveString);
                        
                                contactHeader.removeClass(pageHeaderActiveString).addClass(pageHeaderActiveString);
                        
                    }
                });
            
            switch (true) {
                case (!(desertSky.hasClass(activeBackgroundString))):

                    firstName2.velocity({
                        color: contactColorPrimary
                    }, {
                        duration: lastNameColorDuration,
                        queue:false
                    });
                    desertSky.css('opacity', '0').removeClass(previousActiveBackgroundString).addClass(activeBackgroundString).velocity({
                        scale: [scaleEnd, scaleStart],
                        translateY: [backgroundSkyTranslateYEnd, backgroundSkyTranslateYStart]
                    }, {
                        duration: imageSlideDuration,
                        easing: backgroundSlideEase,
                        queue:false
                    });
                    desertBackdrop.css('opacity', '0').removeClass(previousActiveMiddleBackgroundString).addClass(activeMiddleBackgroundString).velocity({
                        scale: [scaleEnd, scaleStart],
                        translateY: [desertBackdropTranslateYEnd, desertBackdropTranslateYStart]
                    }, {
                        duration: imageSlideDuration,
                        easing: imageSlideEase,
                        queue:false,
                        complete:function() {
                            transitionActive = false;
                        }
                    });
                    desertRocksBackgroundImage.css('opacity', '0').removeClass(previousActiveForegroundBackgroundString).addClass(activeForegroundBackgroundString).velocity({
                        scale: [scaleEnd, scaleStart],
                        translateY: [desertRocksTranslateYEnd, desertRocksTranslateYStart]
                    }, {
                        duration: imageSlideDuration,
                        easing: imageSlideEase,
                        queue:false
                    });
                    desertSky.velocity({
                        opacity: '1'
                    }, {
                        duration: imageSlideOpacityDuration,
                        delay: imageSlideOpacityDelay,
                        queue: false
                    });
                    desertBackdrop.velocity({
                        opacity: '1'
                    }, {
                        duration: imageSlideOpacityDuration,
                        delay: imageSlideOpacityDelay,
                        queue: false
                    });
                    desertRocksBackgroundImage.velocity({
                        opacity: '1'
                    }, {
                        duration: imageSlideOpacityDuration,
                        delay: imageSlideOpacityDelay,
                        queue: false
                    });


                    break;
            }


            switch (true) {
                case (withLightsBackgroundImage.hasClass(activeForegroundBackgroundString)) && (withLightsBackgroundImage.hasClass(previousActiveForegroundBackgroundString)):
                    withLightsBackgroundImage.removeClass(activeForegroundBackgroundString);
                    break;
                case (!(withLightsBackgroundImage.hasClass(activeForegroundBackgroundString))) && (withLightsBackgroundImage.hasClass(previousActiveForegroundBackgroundString)):
                    withLightsBackgroundImage.removeClass(previousActiveForegroundBackgroundString);
                    break;
                case (withLightsBackgroundImage.hasClass(activeForegroundBackgroundString)) && (!(withLightsBackgroundImage.hasClass(previousActiveForegroundBackgroundString))):
                    withLightsBackgroundImage.removeClass(activeForegroundBackgroundString).addClass(previousActiveForegroundBackgroundString);
                    break;
            }
            switch (true) {
                case (withoutLights.hasClass(activeMiddleBackgroundString)) && (withoutLights.hasClass(previousActiveMiddleBackgroundString)):
                    withoutLights.removeClass(activeMiddleBackgroundString);
                    break;
                case (!(withoutLights.hasClass(activeMiddleBackgroundString))) && (withoutLights.hasClass(previousActiveMiddleBackgroundString)):
                    withoutLights.removeClass(previousActiveMiddleBackgroundString);
                    break;
                case (withoutLights.hasClass(activeMiddleBackgroundString)) && (!(withoutLights.hasClass(previousActiveMiddleBackgroundString))):
                    withoutLights.removeClass(activeMiddleBackgroundString).addClass(previousActiveMiddleBackgroundString);
                    break;
            }
            switch (true) {
                case (overcast.hasClass(activeBackgroundString)) && (overcast.hasClass(previousActiveBackgroundString)):
                    overcast.removeClass(activeBackgroundString);
                    break;
                case (!(overcast.hasClass(activeBackgroundString))) && (overcast.hasClass(previousActiveBackgroundString)):
                    overcast.removeClass(previousActiveBackgroundString);
                    break;
                case (overcast.hasClass(activeBackgroundString)) && (!(overcast.hasClass(previousActiveBackgroundString))):
                    overcast.removeClass(activeBackgroundString).addClass(previousActiveBackgroundString);
                    break;
            }


            switch (true) {
                case (hillsLightBackgroundImage.hasClass(activeForegroundBackgroundString)) && (hillsLightBackgroundImage.hasClass(previousActiveForegroundBackgroundString)):
                    hillsLightBackgroundImage.removeClass(activeForegroundBackgroundString);
                    break;
                case (!(hillsLightBackgroundImage.hasClass(activeForegroundBackgroundString))) && (hillsLightBackgroundImage.hasClass(previousActiveForegroundBackgroundString)):
                    hillsLightBackgroundImage.removeClass(previousActiveForegroundBackgroundString);
                    break;
                case (hillsLightBackgroundImage.hasClass(activeForegroundBackgroundString)) && (!(hillsLightBackgroundImage.hasClass(previousActiveForegroundBackgroundString))):
                    hillsLightBackgroundImage.removeClass(activeForegroundBackgroundString).addClass(previousActiveForegroundBackgroundString);
                    break;
            }
            switch (true) {
                case (hillsDark.hasClass(activeMiddleBackgroundString)) && (hillsDark.hasClass(previousActiveMiddleBackgroundString)):
                    hillsDark.removeClass(activeMiddleBackgroundString);
                    break;
                case (!(hillsDark.hasClass(activeMiddleBackgroundString))) && (hillsDark.hasClass(previousActiveMiddleBackgroundString)):
                    hillsDark.removeClass(previousActiveMiddleBackgroundString);
                    break;
                case (hillsDark.hasClass(activeMiddleBackgroundString)) && (!(hillsDark.hasClass(previousActiveMiddleBackgroundString))):
                    hillsDark.removeClass(activeMiddleBackgroundString).addClass(previousActiveMiddleBackgroundString);
                    break;
            }
            switch (true) {
                case (agouraSky.hasClass(activeBackgroundString)) && (agouraSky.hasClass(previousActiveBackgroundString)):
                    agouraSky.removeClass(activeBackgroundString);
                    break;
                case (!(agouraSky.hasClass(activeBackgroundString))) && (agouraSky.hasClass(previousActiveBackgroundString)):
                    agouraSky.removeClass(previousActiveBackgroundString);
                    break;
                case (agouraSky.hasClass(activeBackgroundString)) && (!(agouraSky.hasClass(previousActiveBackgroundString))):
                    agouraSky.removeClass(activeBackgroundString).addClass(previousActiveBackgroundString);
                    break;
            }


            switch (true) {
                case (beachBackgroundImage.hasClass(activeForegroundBackgroundString)) && (beachBackgroundImage.hasClass(previousActiveForegroundBackgroundString)):
                    beachBackgroundImage.removeClass(activeForegroundBackgroundString);
                    break;
                case (!(beachBackgroundImage.hasClass(activeForegroundBackgroundString))) && (beachBackgroundImage.hasClass(previousActiveForegroundBackgroundString)):
                    beachBackgroundImage.removeClass(previousActiveForegroundBackgroundString);
                    break;
                case (beachBackgroundImage.hasClass(activeForegroundBackgroundString)) && (!(beachBackgroundImage.hasClass(previousActiveForegroundBackgroundString))):
                    beachBackgroundImage.removeClass(activeForegroundBackgroundString).addClass(previousActiveForegroundBackgroundString);
                    break;
            }
            switch (true) {
                case (ferrisWheel.hasClass(activeMiddleBackgroundString)) && (ferrisWheel.hasClass(previousActiveMiddleBackgroundString)):
                    ferrisWheel.removeClass(activeMiddleBackgroundString);
                    break;
                case (!(ferrisWheel.hasClass(activeMiddleBackgroundString))) && (ferrisWheel.hasClass(previousActiveMiddleBackgroundString)):
                    ferrisWheel.removeClass(previousActiveMiddleBackgroundString);
                    break;
                case (ferrisWheel.hasClass(activeMiddleBackgroundString)) && (!(ferrisWheel.hasClass(previousActiveMiddleBackgroundString))):
                    ferrisWheel.removeClass(activeMiddleBackgroundString).addClass(previousActiveMiddleBackgroundString);
                    break;
            }
            switch (true) {
                case (pierSky.hasClass(activeBackgroundString)) && (pierSky.hasClass(previousActiveBackgroundString)):
                    pierSky.removeClass(activeBackgroundString);
                    break;
                case (!(pierSky.hasClass(activeBackgroundString))) && (pierSky.hasClass(previousActiveBackgroundString)):
                    pierSky.removeClass(previousActiveBackgroundString);
                    break;
                case (pierSky.hasClass(activeBackgroundString)) && (!(pierSky.hasClass(previousActiveBackgroundString))):
                    pierSky.removeClass(activeBackgroundString).addClass(previousActiveBackgroundString);
                    break;
            }
        }
    },
    page: {
        slideUp: {
            about: function() {
            
                transitionActive = true;
                
                portfolioTileHeader.velocity({
                    translateY:headerTranslateYSlideUp
                }, {
                    duration:pageSlideDuration,
                    easing:headerEaseSlideUp,
                    queue:false
                });
                
                withLightsBackgroundImage.velocity({
                    translateY:foregroundImageTranslateYSlideUp
                }, {
                    duration:pageSlideDuration,
                    easing:pageSlideEase,
                    queue:false,
                    complete:function() {
                        pageActive = true;
                        transitionActive = false;
                    }
                });
                withoutLights.velocity({
                    translateY:middleBackgroundTranslateYSlideUp
                }, {
                    duration:pageSlideDuration,
                    easing:pageSlideEase,
                    queue:false
                });
                menu.velocity({
                    translateY:menuTranslateYSlideUp
                }, {
                    duration:pageSlideDuration,
                    easing:pageSlideEase,
                    queue:false
                });
                menuBackgroundContainer.velocity({
                    translateY:menuTranslateYSlideUp
                }, {
                    duration:pageSlideDuration,
                    easing:pageSlideEase,
                    queue:false
                });
                bennettContainer2.velocity({
                    translateY:bennettContainer2TranslateYSlideUp
                }, {
                    duration:pageSlideDuration,
                    easing:pageSlideEase,
                    queue:false
                });
                aboutHeader.velocity({
                    translateY:headerTranslateYSlideUp
                }, {
                    duration:pageSlideDuration,
                    easing:headerEaseSlideUp,
                    queue:false
                });
                aboutContentBody.velocity({
                    translateY:bodyTranslateYSlideUp
                }, {
                    duration:pageSlideDuration,
                    easing:pageSlideEase,
                    queue:false
                });
                pageDarkBackground.velocity({
                    opacity:'1'
                }, {
                    duration:pageSlideDuration,
                    queue:false
                });
            },
            resume: function() {
            
                transitionActive = true;
                
                portfolioTileHeader.velocity({
                    translateY:headerTranslateYSlideUp
                }, {
                    duration:pageSlideDuration,
                    easing:headerEaseSlideUp,
                    queue:false
                });
                
                hillsLightBackgroundImage.velocity({
                    translateY:foregroundImageTranslateYSlideUp
                }, {
                    duration:pageSlideDuration,
                    easing:pageSlideEase,
                    queue:false,
                    complete:function() {
                        pageActive = true;
                        transitionActive = false;
                    }
                });
                hillsDark.velocity({
                    translateY:middleBackgroundTranslateYSlideUp
                }, {
                    duration:pageSlideDuration,
                    easing:pageSlideEase,
                    queue:false
                });
                menu.velocity({
                    translateY:menuTranslateYSlideUp
                }, {
                    duration:pageSlideDuration,
                    easing:pageSlideEase,
                    queue:false
                });
                menuBackgroundContainer.velocity({
                    translateY:menuTranslateYSlideUp
                }, {
                    duration:pageSlideDuration,
                    easing:pageSlideEase,
                    queue:false
                });
                bennettContainer2.velocity({
                    translateY:bennettContainer2TranslateYSlideUp
                }, {
                    duration:pageSlideDuration,
                    easing:pageSlideEase,
                    queue:false
                });
                resumeHeader.velocity({
                    translateY:headerTranslateYSlideUp
                }, {
                    duration:pageSlideDuration,
                    easing:headerEaseSlideUp,
                    queue:false
                });
                resumeContentBody.velocity({
                    translateY:bodyTranslateYSlideUp
                }, {
                    duration:pageSlideDuration,
                    easing:pageSlideEase,
                    queue:false
                });
                pageDarkBackground.velocity({
                    opacity:'1'
                }, {
                    duration:pageSlideDuration,
                    queue:false
                });
            },
            portfolio: function() {
            
                transitionActive = true;
                
                portfolioTileHeader.velocity({
                    translateY:headerTranslateYSlideUp
                }, {
                    duration:pageSlideDuration,
                    easing:headerEaseSlideUp,
                    queue:false
                });
                
                beachBackgroundImage.velocity({
                    translateY:foregroundImageTranslateYSlideUp
                }, {
                    duration:pageSlideDuration,
                    easing:pageSlideEase,
                    queue:false,
                    complete:function() {
                        pageActive = true;
                        transitionActive = false;
                    }
                });
                ferrisWheel.velocity({
                    translateY:middleBackgroundTranslateYSlideUp
                }, {
                    duration:pageSlideDuration,
                    easing:pageSlideEase,
                    queue:false
                });
                menu.velocity({
                    translateY:menuTranslateYSlideUp
                }, {
                    duration:pageSlideDuration,
                    easing:pageSlideEase,
                    queue:false
                });
                menuBackgroundContainer.velocity({
                    translateY:menuTranslateYSlideUp
                }, {
                    duration:pageSlideDuration,
                    easing:pageSlideEase,
                    queue:false
                });
                bennettContainer2.velocity({
                    translateY:bennettContainer2TranslateYSlideUp
                }, {
                    duration:pageSlideDuration,
                    easing:pageSlideEase,
                    queue:false
                });
                portfolioHeader.velocity({
                    translateY:headerTranslateYSlideUp
                }, {
                    duration:pageSlideDuration,
                    easing:headerEaseSlideUp,
                    queue:false
                });
                portfolioContentBody.velocity({
                    translateY:bodyTranslateYSlideUp
                }, {
                    duration:noDuration,
                    easing:pageSlideEase,
                    queue:false
                });
                pageDarkBackground.velocity({
                    opacity:'1'
                }, {
                    duration:pageSlideDuration,
                    queue:false
                });
            },
            contact: function() {
            
                transitionActive = true;
                
                portfolioTileHeader.velocity({
                    translateY:headerTranslateYSlideUp
                }, {
                    duration:pageSlideDuration,
                    easing:headerEaseSlideUp,
                    queue:false
                });
                
                desertRocksBackgroundImage.velocity({
                    translateY:desertRocksTranslateYSlideUp
                }, {
                    duration:pageSlideDuration,
                    easing:pageSlideEase,
                    queue:false,
                    complete:function() {
                        pageActive = true;
                        transitionActive = false;
                    }
                });
                desertBackdrop.velocity({
                    translateY:desertBackdropTranslateYSlideUp
                }, {
                    duration:pageSlideDuration,
                    easing:pageSlideEase,
                    queue:false
                });
                menu.velocity({
                    translateY:menuTranslateYSlideUp
                }, {
                    duration:pageSlideDuration,
                    easing:pageSlideEase,
                    queue:false
                });
                menuBackgroundContainer.velocity({
                    translateY:menuTranslateYSlideUp
                }, {
                    duration:pageSlideDuration,
                    easing:pageSlideEase,
                    queue:false
                });
                bennettContainer2.velocity({
                    translateY:bennettContainer2TranslateYSlideUp
                }, {
                    duration:pageSlideDuration,
                    easing:pageSlideEase,
                    queue:false
                });
                contactHeader.velocity({
                    translateY:headerTranslateYSlideUp
                }, {
                    duration:pageSlideDuration,
                    easing:headerEaseSlideUp,
                    queue:false
                });
                contactContentBody.velocity({
                    translateY:bodyTranslateYSlideUp
                }, {
                    duration:pageSlideDuration,
                    easing:pageSlideEase,
                    queue:false
                });
                pageDarkBackground.velocity({
                    opacity:'1'
                }, {
                    duration:pageSlideDuration,
                    queue:false
                });
            }
        },
        slideDown: {
            about: function() {
            
                transitionActive = true;
                
                portfolioTileHeader.velocity({
                    translateY:headerTranslateYSlideDown
                }, {
                    duration:pageSlideDuration,
                    easing:headerEaseSlideDown,
                    queue:false
                });
                
                withLightsBackgroundImage.velocity({
                    translateY:foregroundImageTranslateYSlideDown
                }, {
                    duration:pageSlideDuration,
                    easing:pageSlideEase,
                    queue:false,
                    complete:function() {
                        pageActive = false;
                        transitionActive = false;
                    }
                });
                withoutLights.velocity({
                    translateY:middleBackgroundTranslateYSlideDown
                }, {
                    duration:pageSlideDuration,
                    easing:pageSlideEase,
                    queue:false
                });
                menu.velocity({
                    translateY:menuTranslateYSlideDown
                }, {
                    duration:pageSlideDuration,
                    easing:pageSlideEase,
                    queue:false
                });
                menuBackgroundContainer.velocity({
                    translateY:menuTranslateYSlideDown
                }, {
                    duration:pageSlideDuration,
                    easing:pageSlideEase,
                    queue:false
                });
                bennettContainer2.velocity({
                    translateY:bennettContainer2TranslateYSlideDown
                }, {
                    duration:pageSlideDuration,
                    easing:pageSlideEase,
                    queue:false
                });
                aboutHeader.velocity({
                    translateY:headerTranslateYSlideDown
                }, {
                    duration:pageSlideDuration,
                    easing:headerEaseSlideDown,
                    queue:false
                });
                aboutContentBody.velocity({
                    translateY:bodyTranslateYSlideDown
                }, {
                    duration:pageSlideDuration,
                    easing:'easeInQuart',
                    queue:false,
                    complete:function() {
                        $(this).scrollTop(0);
                    }
                });
                pageDarkBackground.velocity({
                    opacity:'0'
                }, {
                    duration:pageSlideDuration,
                    queue:false
                });
            },
            resume: function() {
            
                transitionActive = true;;
                
                portfolioTileHeader.velocity({
                    translateY:headerTranslateYSlideDown
                }, {
                    duration:pageSlideDuration,
                    easing:headerEaseSlideDown,
                    queue:false
                });
                
                hillsLightBackgroundImage.velocity({
                    translateY:foregroundImageTranslateYSlideDown
                }, {
                    duration:pageSlideDuration,
                    easing:pageSlideEase,
                    queue:false,
                    complete:function() {
                        pageActive = false;
                        transitionActive = false;
                    }
                });
                hillsDark.velocity({
                    translateY:middleBackgroundTranslateYSlideDown
                }, {
                    duration:pageSlideDuration,
                    easing:pageSlideEase,
                    queue:false
                });
                menu.velocity({
                    translateY:menuTranslateYSlideDown
                }, {
                    duration:pageSlideDuration,
                    easing:pageSlideEase,
                    queue:false
                });
                menuBackgroundContainer.velocity({
                    translateY:menuTranslateYSlideDown
                }, {
                    duration:pageSlideDuration,
                    easing:pageSlideEase,
                    queue:false
                });
                bennettContainer2.velocity({
                    translateY:bennettContainer2TranslateYSlideDown
                }, {
                    duration:pageSlideDuration,
                    easing:pageSlideEase,
                    queue:false
                });
                resumeHeader.velocity({
                    translateY:headerTranslateYSlideDown
                }, {
                    duration:pageSlideDuration,
                    easing:headerEaseSlideDown,
                    queue:false
                });
                resumeContentBody.velocity({
                    translateY:bodyTranslateYSlideDown
                }, {
                    duration:pageSlideDuration,
                    easing:'easeInQuart',
                    queue:false,
                    complete:function() {
                        $(this).scrollTop(0);
                    }
                });
                pageDarkBackground.velocity({
                    opacity:'0'
                }, {
                    duration:pageSlideDuration,
                    queue:false
                });
            },
            portfolio: function() {
            
                transitionActive = true;;
                
                portfolioTileHeader.velocity({
                    translateY:headerTranslateYSlideDown
                }, {
                    duration:pageSlideDuration,
                    easing:headerEaseSlideDown,
                    queue:false
                });
                
                beachBackgroundImage.velocity({
                    translateY:foregroundImageTranslateYSlideDown
                }, {
                    duration:pageSlideDuration,
                    easing:pageSlideEase,
                    queue:false,
                    complete:function() {
                        pageActive = false;
                        transitionActive = false;
                    }
                });
                ferrisWheel.velocity({
                    translateY:middleBackgroundTranslateYSlideDown
                }, {
                    duration:pageSlideDuration,
                    easing:pageSlideEase,
                    queue:false
                });
                menu.velocity({
                    translateY:menuTranslateYSlideDown
                }, {
                    duration:pageSlideDuration,
                    easing:pageSlideEase,
                    queue:false
                });
                menuBackgroundContainer.velocity({
                    translateY:menuTranslateYSlideDown
                }, {
                    duration:pageSlideDuration,
                    easing:pageSlideEase,
                    queue:false
                });
                bennettContainer2.velocity({
                    translateY:bennettContainer2TranslateYSlideDown
                }, {
                    duration:pageSlideDuration,
                    easing:pageSlideEase,
                    queue:false
                });
                portfolioHeader.velocity({
                    translateY:headerTranslateYSlideDown
                }, {
                    duration:pageSlideDuration,
                    easing:headerEaseSlideDown,
                    queue:false
                });
                portfolioContentBody.velocity({
                    translateY:bodyTranslateYSlideDown
                }, {
                    duration:pageSlideDuration,
                    easing:'easeInQuart',
                    queue:false,
                    complete:function() {
                        $(this).scrollTop(0);
                    }
                });
                pageDarkBackground.velocity({
                    opacity:'0'
                }, {
                    duration:pageSlideDuration,
                    queue:false
                });
            },
            contact: function() {
            
                transitionActive = true;;
                
                portfolioTileHeader.velocity({
                    translateY:headerTranslateYSlideDown
                }, {
                    duration:pageSlideDuration,
                    easing:headerEaseSlideDown,
                    queue:false
                });
                
                desertRocksBackgroundImage.velocity({
                    translateY:desertBackdropTranslateYSlideDown
                }, {
                    duration:pageSlideDuration,
                    easing:pageSlideEase,
                    queue:false,
                    complete:function() {
                        pageActive = false;
                        transitionActive = false;
                    }
                });
                desertBackdrop.velocity({
                    translateY:desertBackdropTranslateYSlideDown
                }, {
                    duration:pageSlideDuration,
                    easing:pageSlideEase,
                    queue:false
                });
                menu.velocity({
                    translateY:menuTranslateYSlideDown
                }, {
                    duration:pageSlideDuration,
                    easing:pageSlideEase,
                    queue:false
                });
                menuBackgroundContainer.velocity({
                    translateY:menuTranslateYSlideDown
                }, {
                    duration:pageSlideDuration,
                    easing:pageSlideEase,
                    queue:false
                });
                bennettContainer2.velocity({
                    translateY:bennettContainer2TranslateYSlideDown
                }, {
                    duration:pageSlideDuration,
                    easing:pageSlideEase,
                    queue:false
                });
                contactHeader.velocity({
                    translateY:headerTranslateYSlideDown
                }, {
                    duration:pageSlideDuration,
                    easing:headerEaseSlideDown,
                    queue:false
                });
                contactContentBody.velocity({
                    translateY:bodyTranslateYSlideDown
                }, {
                    duration:pageSlideDuration,
                    easing:'easeInQuart',
                    queue:false,
                    complete:function() {
                        $(this).scrollTop(0);
                    }
                });
                pageDarkBackground.velocity({
                    opacity:'0'
                }, {
                    duration:pageSlideDuration,
                    queue:false
                });
            }
        }
    },
    portfolio: {
        loadIn: {
            sites: function() {
                
                loading.stop(1,1);
                
                portfolioTileHeaders.addClass(portfolioTileHeadersActiveString);
                
                portfolioTileHeader.css('opacity','0');
                
                websitesHeader.addClass(portfolioTileHeaderActiveString);
                
                websitesHeader.siblings(portfolioTileHeader).removeClass(portfolioTileHeaderActiveString);
                
                websitesHeader.velocity({
                    opacity:['1','0']
                }, {
                   duration:1000,
                   delay:1000,
                   queue:false
                });

                loadingTrackbar.stop(1,1).velocity({
                    width:['0vw','0vw'],
                    opacity:['0','0']
                }, {
                    duration:noDuration,
                    queue:false
                });
                
                portfolioClose.css('opacity','0').addClass(portfolioCloseActiveString);
                
                portfolioCloseTapRegion.addClass(portfolioCloseActiveString);
                
                portfolioClose.velocity({
                    opacity:['1','0']
                }, {
                    duration:1000,
                    easing:'swing',
                    queue:false
                });
                
                portfolioTileContainerBackground.css('opacity','0').addClass(portfolioTileContainerBackgroundActiveString).velocity({
                    opacity:['0.9', 'swing', '0'],
                    scale:['1','0.75']
                }, {
                    duration:1000,
                    easing:'easeInOutQuart',
                    queue:false,
                    complete:function() {        
                
                        portfolioTileContainerFade.css('opacity','0').addClass(portfolioTileContainerFadeActiveString).velocity({
                                    opacity:['1','0'],
                                    scale:['1','1'],
                                    translateY:['0px','0px']
                                }, {
                                    duration:1000,
                                    easing:'swing',
                                    delay:1000,
                                    queue:false
                                });
                    }
                });
                
                portfolioTileContainer.css('opacity','0').addClass(portfolioTileContainerActiveString).velocity({
                    opacity:['1','0'],
                    scale:['1','0.75']
                }, {
                    duration:1000,
                    easing:'easeInOutQuart',
                    queue:false,
                    complete:function() {
                
                        loadingTrackbar.fadeIn(0).addClass(loadingTrackbarActiveString);

                        var loading = [
                            { elements: loadingTrackbar, properties: { width: ['20vw','20vw'], opacity:['1','1'] } },
                            { elements: loadingTrackbar, properties: { width: ['40vw','20vw'] } },
                            { elements: loadingTrackbar, properties: { width: ['60vw','40vw'] } },
                            { elements: loadingTrackbar, properties: { width: ['80vw','60vw'] } },
                            { elements: loadingTrackbar, properties: { width: ['100vw','80vw'] }
                          }
                        ]; 

                        $.Velocity.RunSequence(loading);
                        
                        loadSiteItems();
                
                        portfolioTile = $('.portfolio-tile');
                        
                        tile = $('.tile');

                        portfolioTile.css({
                            opacity:'0'
                        });
    
                        //PORTFOLIO IMAGES DONE LOADING
                        tile.imagesLoaded(function() {

                            loadingTrackbar.fadeOut(1000);

                            loadingTrackbar.velocity({
                                width:'100vw'
                            }, {
                                duration:1000,
                                easing:'easeOutQuart',
                                queue:false
                            });
            
                            for (i = 0; i < portfolioTile.length; i++) {

                            currentPortfolioTile = portfolioTile.eq(i);

                            currentPortfolioTile.velocity({
                                opacity:[portfolioTileOpacityEnd,portfolioTileOpacityStart],
                                scale:[portfolioTileScaleEnd,portfolioTileScaleStart],
                                /*rotateX:[portfolioTileRotateXEnd,portfolioTileRotateXStart],
                                rotateZ:[portfolioTileRotateZEnd,portfolioTileRotateZStart],
                                translateX:[portfolioTileTranslateXEnd,portfolioTileTranslateXStart],*/
                                translateY:[portfolioTileTranslateYEnd,portfolioTileTranslateYStart]/*,
                                translateZ:[portfolioTileTranslateZEnd,portfolioTileTranslateZStart]*/
                            }, {
                                duration:portfolioTileFlyInDuration,
                                easing:portfolioTileLoadInEase,
                                delay:portfolioTileDelay+=100
                            });

                            }

                        });
                        
                    }
                });

/*                $.ajax({
                    type: 'GET',
                    url: correctURL() + '.html',
                    success: function(tiles) {

                        //if (!$('#wrapper').css('display','none')) {
                        //$('#wrapper').fadeToggle(); // hide/show toggle
                        //}

                        $('#portfolio-tile-container-outer').css('display', 'block').html(tiles, function() {});

                    },
                    cache: false,
                    complete: function() {

                        function tileFlyIn() {
                            $('.portfolio-tile')
                                .css({
                                    'top': '100px'
                                });

                            var delayNumber = 1000;
                            var i;
                            for (i = 0; i < $('.portfolio-tile').length; i++) {

                                $('.portfolio-tile').eq(i)
                                    .delay(delayNumber)
                                    .animate({
                                        opacity: '1',
                                        top: '0'
                                    }, {
                                        duration: 1000,
                                        easing: 'easeOutExpo',
                                        queue: true,
                                        complete: function() {

                                        }
                                    });
                                delayNumber = delayNumber + 100;
                            };

                            $('.portfolio-tile-header-container').fadeIn(0).css('opacity', '0').animate({
                                opacity: '1'
                            }, 1000, 'swing', function() {});
                            $('.portfolio-tile-header').css('opacity', '0').animate({
                                opacity: '1'
                            }, 1000, 'swing', function() {});
                            $('.portfolio-tile-subheader').fadeIn(0).css('opacity', '0').animate({
                                opacity: '1'
                            }, 1000, 'swing', function() {});
                        }

                        tileFlyIn();

                        var portfolioTile = $('.portfolio-tile img');




                    }
                });*/

            },
            banners: function() {
                
                loading.stop(1,1);
                
                portfolioTileHeaders.addClass(portfolioTileHeadersActiveString);
                
                portfolioTileHeader.css('opacity','0');
                
                bannersHeader.addClass(portfolioTileHeaderActiveString);
                
                bannersHeader.siblings(portfolioTileHeader).removeClass(portfolioTileHeaderActiveString);
                
                bannersHeader.velocity({
                    opacity:['1','0']
                }, {
                   duration:1000,
                   delay:1000,
                   queue:false
                });

                loadingTrackbar.stop(1,1).velocity({
                    width:['0vw','0vw'],
                    opacity:['0','0']
                }, {
                    duration:noDuration,
                    queue:false
                });
                
                portfolioClose.css('opacity','0').addClass(portfolioCloseActiveString);
                
                portfolioCloseTapRegion.addClass(portfolioCloseActiveString);
                
                portfolioClose.velocity({
                    opacity:['1','0']
                }, {
                    duration:1000,
                    easing:'swing',
                    queue:false
                });
                
                portfolioTileContainerBackground.css('opacity','0').addClass(portfolioTileContainerBackgroundActiveString).velocity({
                    opacity:['0.9', 'swing', '0'],
                    scale:['1','0.75']
                }, {
                    duration:1000,
                    easing:'easeInOutQuart',
                    queue:false,
                    complete:function() {        
                
                        portfolioTileContainerFade.css('opacity','0').addClass(portfolioTileContainerFadeActiveString).velocity({
                                    opacity:['1','0'],
                                    scale:['1','1'],
                                    translateY:['0px','0px']
                                }, {
                                    duration:1000,
                                    easing:'swing',
                                    delay:1000,
                                    queue:false
                                });
                    }
                });
                
                portfolioTileContainer.css('opacity','0').addClass(portfolioTileContainerActiveString).velocity({
                    opacity:['1','0'],
                    scale:['1','0.75']
                }, {
                    duration:1000,
                    easing:'easeInOutQuart',
                    queue:false,
                    complete:function() {
                
                        loadingTrackbar.fadeIn(0).addClass(loadingTrackbarActiveString);

                        var loading = [
                            { elements: loadingTrackbar, properties: { width: ['20vw','20vw'], opacity:['1','1'] } },
                            { elements: loadingTrackbar, properties: { width: ['40vw','20vw'] } },
                            { elements: loadingTrackbar, properties: { width: ['60vw','40vw'] } },
                            { elements: loadingTrackbar, properties: { width: ['80vw','60vw'] } },
                            { elements: loadingTrackbar, properties: { width: ['100vw','80vw'] }
                          }
                        ]; 

                        $.Velocity.RunSequence(loading);
                        
                        loadBannerItems();
                
                        portfolioTile = $('.portfolio-tile');
                        
                        tile = $('.tile');

                        portfolioTile.css({
                            opacity:'0'
                        });
    
                        //PORTFOLIO IMAGES DONE LOADING
                        tile.imagesLoaded(function() {

                            loadingTrackbar.fadeOut(1000);

                            loadingTrackbar.velocity({
                                width:'100vw'
                            }, {
                                duration:1000,
                                easing:'easeOutQuart',
                                queue:false
                            });
            
                            for (i = 0; i < portfolioTile.length; i++) {

                            currentPortfolioTile = portfolioTile.eq(i);

                            currentPortfolioTile.velocity({
                                opacity:[portfolioTileOpacityEnd,portfolioTileOpacityStart],
                                scale:[portfolioTileScaleEnd,portfolioTileScaleStart],
                                /*rotateX:[portfolioTileRotateXEnd,portfolioTileRotateXStart],
                                rotateZ:[portfolioTileRotateZEnd,portfolioTileRotateZStart],
                                translateX:[portfolioTileTranslateXEnd,portfolioTileTranslateXStart],*/
                                translateY:[portfolioTileTranslateYEnd,portfolioTileTranslateYStart]/*,
                                translateZ:[portfolioTileTranslateZEnd,portfolioTileTranslateZStart]*/
                            }, {
                                duration:portfolioTileFlyInDuration,
                                easing:portfolioTileLoadInEase,
                                delay:portfolioTileDelay+=100
                            });

                            }

                        });
                        
                    }
                });

/*                $.ajax({
                    type: 'GET',
                    url: correctURL() + '.html',
                    success: function(tiles) {

                        //if (!$('#wrapper').css('display','none')) {
                        //$('#wrapper').fadeToggle(); // hide/show toggle
                        //}

                        $('#portfolio-tile-container-outer').css('display', 'block').html(tiles, function() {});

                    },
                    cache: false,
                    complete: function() {

                        function tileFlyIn() {
                            $('.portfolio-tile')
                                .css({
                                    'top': '100px'
                                });

                            var delayNumber = 1000;
                            var i;
                            for (i = 0; i < $('.portfolio-tile').length; i++) {

                                $('.portfolio-tile').eq(i)
                                    .delay(delayNumber)
                                    .animate({
                                        opacity: '1',
                                        top: '0'
                                    }, {
                                        duration: 1000,
                                        easing: 'easeOutExpo',
                                        queue: true,
                                        complete: function() {

                                        }
                                    });
                                delayNumber = delayNumber + 100;
                            };

                            $('.portfolio-tile-header-container').fadeIn(0).css('opacity', '0').animate({
                                opacity: '1'
                            }, 1000, 'swing', function() {});
                            $('.portfolio-tile-header').css('opacity', '0').animate({
                                opacity: '1'
                            }, 1000, 'swing', function() {});
                            $('.portfolio-tile-subheader').fadeIn(0).css('opacity', '0').animate({
                                opacity: '1'
                            }, 1000, 'swing', function() {});
                        }

                        tileFlyIn();

                        var portfolioTile = $('.portfolio-tile img');




                    }
                });*/

            },
            eblasts: function() {
                
                loading.stop(1,1);
                
                portfolioTileHeaders.addClass(portfolioTileHeadersActiveString);
                
                portfolioTileHeader.css('opacity','0');
                
                eblastsHeader.addClass(portfolioTileHeaderActiveString);
                
                eblastsHeader.siblings(portfolioTileHeader).removeClass(portfolioTileHeaderActiveString);
                
                eblastsHeader.velocity({
                    opacity:['1','0']
                }, {
                   duration:1000,
                   delay:1000,
                   queue:false
                });

                loadingTrackbar.stop(1,1).velocity({
                    width:['0vw','0vw'],
                    opacity:['0','0']
                }, {
                    duration:noDuration,
                    queue:false
                });
                
                portfolioClose.css('opacity','0').addClass(portfolioCloseActiveString);
                
                portfolioCloseTapRegion.addClass(portfolioCloseActiveString);
                
                portfolioClose.velocity({
                    opacity:['1','0']
                }, {
                    duration:1000,
                    easing:'swing',
                    queue:false
                });
                
                portfolioTileContainerBackground.css('opacity','0').addClass(portfolioTileContainerBackgroundActiveString).velocity({
                    opacity:['0.9', 'swing', '0'],
                    scale:['1','0.75']
                }, {
                    duration:1000,
                    easing:'easeInOutQuart',
                    queue:false,
                    complete:function() {        
                
                        portfolioTileContainerFade.css('opacity','0').addClass(portfolioTileContainerFadeActiveString).velocity({
                                    opacity:['1','0'],
                                    scale:['1','1'],
                                    translateY:['0px','0px']
                                }, {
                                    duration:1000,
                                    easing:'swing',
                                    delay:1000,
                                    queue:false
                                });
                    }
                });
                
                portfolioTileContainer.css('opacity','0').addClass(portfolioTileContainerActiveString).velocity({
                    opacity:['1','0'],
                    scale:['1','0.75']
                }, {
                    duration:1000,
                    easing:'easeInOutQuart',
                    queue:false,
                    complete:function() {
                
                        loadingTrackbar.fadeIn(0).addClass(loadingTrackbarActiveString);

                        var loading = [
                            { elements: loadingTrackbar, properties: { width: ['20vw','20vw'], opacity:['1','1'] } },
                            { elements: loadingTrackbar, properties: { width: ['40vw','20vw'] } },
                            { elements: loadingTrackbar, properties: { width: ['60vw','40vw'] } },
                            { elements: loadingTrackbar, properties: { width: ['80vw','60vw'] } },
                            { elements: loadingTrackbar, properties: { width: ['100vw','80vw'] }
                          }
                        ]; 

                        $.Velocity.RunSequence(loading);
                        
                        loadEblastItems();
                
                        portfolioTile = $('.portfolio-tile');
                        
                        tile = $('.tile');

                        portfolioTile.css({
                            opacity:'0'
                        });
    
                        //PORTFOLIO IMAGES DONE LOADING
                        tile.imagesLoaded(function() {

                            loadingTrackbar.fadeOut(1000);

                            loadingTrackbar.velocity({
                                width:'100vw'
                            }, {
                                duration:1000,
                                easing:'easeOutQuart',
                                queue:false
                            });
            
                            for (i = 0; i < portfolioTile.length; i++) {

                            currentPortfolioTile = portfolioTile.eq(i);

                            currentPortfolioTile.velocity({
                                opacity:[portfolioTileOpacityEnd,portfolioTileOpacityStart],
                                scale:[portfolioTileScaleEnd,portfolioTileScaleStart],
                                /*rotateX:[portfolioTileRotateXEnd,portfolioTileRotateXStart],
                                rotateZ:[portfolioTileRotateZEnd,portfolioTileRotateZStart],
                                translateX:[portfolioTileTranslateXEnd,portfolioTileTranslateXStart],*/
                                translateY:[portfolioTileTranslateYEnd,portfolioTileTranslateYStart]/*,
                                translateZ:[portfolioTileTranslateZEnd,portfolioTileTranslateZStart]*/
                            }, {
                                duration:portfolioTileFlyInDuration,
                                easing:portfolioTileLoadInEase,
                                delay:portfolioTileDelay+=100
                            });

                            }

                        });
                        
                    }
                });

/*                $.ajax({
                    type: 'GET',
                    url: correctURL() + '.html',
                    success: function(tiles) {

                        //if (!$('#wrapper').css('display','none')) {
                        //$('#wrapper').fadeToggle(); // hide/show toggle
                        //}

                        $('#portfolio-tile-container-outer').css('display', 'block').html(tiles, function() {});

                    },
                    cache: false,
                    complete: function() {

                        function tileFlyIn() {
                            $('.portfolio-tile')
                                .css({
                                    'top': '100px'
                                });

                            var delayNumber = 1000;
                            var i;
                            for (i = 0; i < $('.portfolio-tile').length; i++) {

                                $('.portfolio-tile').eq(i)
                                    .delay(delayNumber)
                                    .animate({
                                        opacity: '1',
                                        top: '0'
                                    }, {
                                        duration: 1000,
                                        easing: 'easeOutExpo',
                                        queue: true,
                                        complete: function() {

                                        }
                                    });
                                delayNumber = delayNumber + 100;
                            };

                            $('.portfolio-tile-header-container').fadeIn(0).css('opacity', '0').animate({
                                opacity: '1'
                            }, 1000, 'swing', function() {});
                            $('.portfolio-tile-header').css('opacity', '0').animate({
                                opacity: '1'
                            }, 1000, 'swing', function() {});
                            $('.portfolio-tile-subheader').fadeIn(0).css('opacity', '0').animate({
                                opacity: '1'
                            }, 1000, 'swing', function() {});
                        }

                        tileFlyIn();

                        var portfolioTile = $('.portfolio-tile img');




                    }
                });*/

            },
            flyers: function() {
                
                loading.stop(1,1);
                
                portfolioTileHeaders.addClass(portfolioTileHeadersActiveString);
                
                portfolioTileHeader.css('opacity','0');
                
                flyersHeader.addClass(portfolioTileHeaderActiveString);
                
                flyersHeader.siblings(portfolioTileHeader).removeClass(portfolioTileHeaderActiveString);
                
                flyersHeader.velocity({
                    opacity:['1','0']
                }, {
                   duration:1000,
                   delay:1000,
                   queue:false
                });

                loadingTrackbar.stop(1,1).velocity({
                    width:['0vw','0vw'],
                    opacity:['0','0']
                }, {
                    duration:noDuration,
                    queue:false
                });
                
                portfolioClose.css('opacity','0').addClass(portfolioCloseActiveString);
                
                portfolioCloseTapRegion.addClass(portfolioCloseActiveString);
                
                portfolioClose.velocity({
                    opacity:['1','0']
                }, {
                    duration:1000,
                    easing:'swing',
                    queue:false
                });
                
                portfolioTileContainerBackground.css('opacity','0').addClass(portfolioTileContainerBackgroundActiveString).velocity({
                    opacity:['0.9', 'swing', '0'],
                    scale:['1','0.75']
                }, {
                    duration:1000,
                    easing:'easeInOutQuart',
                    queue:false,
                    complete:function() {        
                
                        portfolioTileContainerFade.css('opacity','0').addClass(portfolioTileContainerFadeActiveString).velocity({
                                    opacity:['1','0'],
                                    scale:['1','1'],
                                    translateY:['0px','0px']
                                }, {
                                    duration:1000,
                                    easing:'swing',
                                    delay:1000,
                                    queue:false
                                });
                    }
                });
                
                portfolioTileContainer.css('opacity','0').addClass(portfolioTileContainerActiveString).velocity({
                    opacity:['1','0'],
                    scale:['1','0.75']
                }, {
                    duration:1000,
                    easing:'easeInOutQuart',
                    queue:false,
                    complete:function() {
                
                        loadingTrackbar.fadeIn(0).addClass(loadingTrackbarActiveString);

                        var loading = [
                            { elements: loadingTrackbar, properties: { width: ['20vw','20vw'], opacity:['1','1'] } },
                            { elements: loadingTrackbar, properties: { width: ['40vw','20vw'] } },
                            { elements: loadingTrackbar, properties: { width: ['60vw','40vw'] } },
                            { elements: loadingTrackbar, properties: { width: ['80vw','60vw'] } },
                            { elements: loadingTrackbar, properties: { width: ['100vw','80vw'] }
                          }
                        ]; 

                        $.Velocity.RunSequence(loading);
                        
                        loadFlyerItems();
                
                        portfolioTile = $('.portfolio-tile');
                        
                        tile = $('.tile');

                        portfolioTile.css({
                            opacity:'0'
                        });
    
                        //PORTFOLIO IMAGES DONE LOADING
                        tile.imagesLoaded(function() {

                            loadingTrackbar.fadeOut(1000);

                            loadingTrackbar.velocity({
                                width:'100vw'
                            }, {
                                duration:1000,
                                easing:'easeOutQuart',
                                queue:false
                            });
            
                            for (i = 0; i < portfolioTile.length; i++) {

                            currentPortfolioTile = portfolioTile.eq(i);

                            currentPortfolioTile.velocity({
                                opacity:[portfolioTileOpacityEnd,portfolioTileOpacityStart],
                                scale:[portfolioTileScaleEnd,portfolioTileScaleStart],
                                /*rotateX:[portfolioTileRotateXEnd,portfolioTileRotateXStart],
                                rotateZ:[portfolioTileRotateZEnd,portfolioTileRotateZStart],
                                translateX:[portfolioTileTranslateXEnd,portfolioTileTranslateXStart],*/
                                translateY:[portfolioTileTranslateYEnd,portfolioTileTranslateYStart]/*,
                                translateZ:[portfolioTileTranslateZEnd,portfolioTileTranslateZStart]*/
                            }, {
                                duration:portfolioTileFlyInDuration,
                                easing:portfolioTileLoadInEase,
                                delay:portfolioTileDelay+=100
                            });

                            }

                        });
                        
                    }
                });

/*                $.ajax({
                    type: 'GET',
                    url: correctURL() + '.html',
                    success: function(tiles) {

                        //if (!$('#wrapper').css('display','none')) {
                        //$('#wrapper').fadeToggle(); // hide/show toggle
                        //}

                        $('#portfolio-tile-container-outer').css('display', 'block').html(tiles, function() {});

                    },
                    cache: false,
                    complete: function() {

                        function tileFlyIn() {
                            $('.portfolio-tile')
                                .css({
                                    'top': '100px'
                                });

                            var delayNumber = 1000;
                            var i;
                            for (i = 0; i < $('.portfolio-tile').length; i++) {

                                $('.portfolio-tile').eq(i)
                                    .delay(delayNumber)
                                    .animate({
                                        opacity: '1',
                                        top: '0'
                                    }, {
                                        duration: 1000,
                                        easing: 'easeOutExpo',
                                        queue: true,
                                        complete: function() {

                                        }
                                    });
                                delayNumber = delayNumber + 100;
                            };

                            $('.portfolio-tile-header-container').fadeIn(0).css('opacity', '0').animate({
                                opacity: '1'
                            }, 1000, 'swing', function() {});
                            $('.portfolio-tile-header').css('opacity', '0').animate({
                                opacity: '1'
                            }, 1000, 'swing', function() {});
                            $('.portfolio-tile-subheader').fadeIn(0).css('opacity', '0').animate({
                                opacity: '1'
                            }, 1000, 'swing', function() {});
                        }

                        tileFlyIn();

                        var portfolioTile = $('.portfolio-tile img');




                    }
                });*/

            },
            brochures: function() {
                
                loading.stop(1,1);
                
                portfolioTileHeaders.addClass(portfolioTileHeadersActiveString);
                
                portfolioTileHeader.css('opacity','0');
                
                brochuresHeader.addClass(portfolioTileHeaderActiveString);
                
                brochuresHeader.siblings(portfolioTileHeader).removeClass(portfolioTileHeaderActiveString);
                
                brochuresHeader.velocity({
                    opacity:['1','0']
                }, {
                   duration:1000,
                   delay:1000,
                   queue:false
                });

                loadingTrackbar.stop(1,1).velocity({
                    width:['0vw','0vw'],
                    opacity:['0','0']
                }, {
                    duration:noDuration,
                    queue:false
                });
                
                portfolioClose.css('opacity','0').addClass(portfolioCloseActiveString);
                
                portfolioCloseTapRegion.addClass(portfolioCloseActiveString);
                
                portfolioClose.velocity({
                    opacity:['1','0']
                }, {
                    duration:1000,
                    easing:'swing',
                    queue:false
                });
                
                portfolioTileContainerBackground.css('opacity','0').addClass(portfolioTileContainerBackgroundActiveString).velocity({
                    opacity:['0.9', 'swing', '0'],
                    scale:['1','0.75']
                }, {
                    duration:1000,
                    easing:'easeInOutQuart',
                    queue:false,
                    complete:function() {        
                
                        portfolioTileContainerFade.css('opacity','0').addClass(portfolioTileContainerFadeActiveString).velocity({
                                    opacity:['1','0'],
                                    scale:['1','1'],
                                    translateY:['0px','0px']
                                }, {
                                    duration:1000,
                                    easing:'swing',
                                    delay:1000,
                                    queue:false
                                });
                    }
                });
                
                portfolioTileContainer.css('opacity','0').addClass(portfolioTileContainerActiveString).velocity({
                    opacity:['1','0'],
                    scale:['1','0.75']
                }, {
                    duration:1000,
                    easing:'easeInOutQuart',
                    queue:false,
                    complete:function() {
                
                        loadingTrackbar.fadeIn(0).addClass(loadingTrackbarActiveString);

                        var loading = [
                            { elements: loadingTrackbar, properties: { width: ['20vw','20vw'], opacity:['1','1'] } },
                            { elements: loadingTrackbar, properties: { width: ['40vw','20vw'] } },
                            { elements: loadingTrackbar, properties: { width: ['60vw','40vw'] } },
                            { elements: loadingTrackbar, properties: { width: ['80vw','60vw'] } },
                            { elements: loadingTrackbar, properties: { width: ['100vw','80vw'] }
                          }
                        ]; 

                        $.Velocity.RunSequence(loading);
                        
                        loadBrochureItems();
                
                        portfolioTile = $('.portfolio-tile');
                        
                        tile = $('.tile');

                        portfolioTile.css({
                            opacity:'0'
                        });
    
                        //PORTFOLIO IMAGES DONE LOADING
                        tile.imagesLoaded(function() {

                            loadingTrackbar.fadeOut(1000);

                            loadingTrackbar.velocity({
                                width:'100vw'
                            }, {
                                duration:1000,
                                easing:'easeOutQuart',
                                queue:false
                            });
            
                            for (i = 0; i < portfolioTile.length; i++) {

                            currentPortfolioTile = portfolioTile.eq(i);

                            currentPortfolioTile.velocity({
                                opacity:[portfolioTileOpacityEnd,portfolioTileOpacityStart],
                                scale:[portfolioTileScaleEnd,portfolioTileScaleStart],
                                /*rotateX:[portfolioTileRotateXEnd,portfolioTileRotateXStart],
                                rotateZ:[portfolioTileRotateZEnd,portfolioTileRotateZStart],
                                translateX:[portfolioTileTranslateXEnd,portfolioTileTranslateXStart],*/
                                translateY:[portfolioTileTranslateYEnd,portfolioTileTranslateYStart]/*,
                                translateZ:[portfolioTileTranslateZEnd,portfolioTileTranslateZStart]*/
                            }, {
                                duration:portfolioTileFlyInDuration,
                                easing:portfolioTileLoadInEase,
                                delay:portfolioTileDelay+=100
                            });

                            }

                        });
                        
                    }
                });

/*                $.ajax({
                    type: 'GET',
                    url: correctURL() + '.html',
                    success: function(tiles) {

                        //if (!$('#wrapper').css('display','none')) {
                        //$('#wrapper').fadeToggle(); // hide/show toggle
                        //}

                        $('#portfolio-tile-container-outer').css('display', 'block').html(tiles, function() {});

                    },
                    cache: false,
                    complete: function() {

                        function tileFlyIn() {
                            $('.portfolio-tile')
                                .css({
                                    'top': '100px'
                                });

                            var delayNumber = 1000;
                            var i;
                            for (i = 0; i < $('.portfolio-tile').length; i++) {

                                $('.portfolio-tile').eq(i)
                                    .delay(delayNumber)
                                    .animate({
                                        opacity: '1',
                                        top: '0'
                                    }, {
                                        duration: 1000,
                                        easing: 'easeOutExpo',
                                        queue: true,
                                        complete: function() {

                                        }
                                    });
                                delayNumber = delayNumber + 100;
                            };

                            $('.portfolio-tile-header-container').fadeIn(0).css('opacity', '0').animate({
                                opacity: '1'
                            }, 1000, 'swing', function() {});
                            $('.portfolio-tile-header').css('opacity', '0').animate({
                                opacity: '1'
                            }, 1000, 'swing', function() {});
                            $('.portfolio-tile-subheader').fadeIn(0).css('opacity', '0').animate({
                                opacity: '1'
                            }, 1000, 'swing', function() {});
                        }

                        tileFlyIn();

                        var portfolioTile = $('.portfolio-tile img');




                    }
                });*/

            },
            billboards: function() {
                
                loading.stop(1,1);
                
                portfolioTileHeaders.addClass(portfolioTileHeadersActiveString);
                
                portfolioTileHeader.css('opacity','0');
                
                billboardsHeader.addClass(portfolioTileHeaderActiveString);
                
                billboardsHeader.siblings(portfolioTileHeader).removeClass(portfolioTileHeaderActiveString);
                
                billboardsHeader.velocity({
                    opacity:['1','0']
                }, {
                   duration:1000,
                   delay:1000,
                   queue:false
                });

                loadingTrackbar.stop(1,1).velocity({
                    width:['0vw','0vw'],
                    opacity:['0','0']
                }, {
                    duration:noDuration,
                    queue:false
                });
                
                portfolioClose.css('opacity','0').addClass(portfolioCloseActiveString);
                
                portfolioCloseTapRegion.addClass(portfolioCloseActiveString);
                
                portfolioClose.velocity({
                    opacity:['1','0']
                }, {
                    duration:1000,
                    easing:'swing',
                    queue:false
                });
                
                portfolioTileContainerBackground.css('opacity','0').addClass(portfolioTileContainerBackgroundActiveString).velocity({
                    opacity:['0.9', 'swing', '0'],
                    scale:['1','0.75']
                }, {
                    duration:1000,
                    easing:'easeInOutQuart',
                    queue:false,
                    complete:function() {        
                
                        portfolioTileContainerFade.css('opacity','0').addClass(portfolioTileContainerFadeActiveString).velocity({
                                    opacity:['1','0'],
                                    scale:['1','1'],
                                    translateY:['0px','0px']
                                }, {
                                    duration:1000,
                                    easing:'swing',
                                    delay:1000,
                                    queue:false
                                });
                    }
                });
                
                portfolioTileContainer.css('opacity','0').addClass(portfolioTileContainerActiveString).velocity({
                    opacity:['1','0'],
                    scale:['1','0.75']
                }, {
                    duration:1000,
                    easing:'easeInOutQuart',
                    queue:false,
                    complete:function() {
                
                        loadingTrackbar.fadeIn(0).addClass(loadingTrackbarActiveString);

                        var loading = [
                            { elements: loadingTrackbar, properties: { width: ['20vw','20vw'], opacity:['1','1'] } },
                            { elements: loadingTrackbar, properties: { width: ['40vw','20vw'] } },
                            { elements: loadingTrackbar, properties: { width: ['60vw','40vw'] } },
                            { elements: loadingTrackbar, properties: { width: ['80vw','60vw'] } },
                            { elements: loadingTrackbar, properties: { width: ['100vw','80vw'] }
                          }
                        ]; 

                        $.Velocity.RunSequence(loading);
                        
                        loadBillboardItems();
                
                        portfolioTile = $('.portfolio-tile');
                        
                        tile = $('.tile');

                        portfolioTile.css({
                            opacity:'0'
                        });
    
                        //PORTFOLIO IMAGES DONE LOADING
                        tile.imagesLoaded(function() {

                            loadingTrackbar.fadeOut(1000);

                            loadingTrackbar.velocity({
                                width:'100vw'
                            }, {
                                duration:1000,
                                easing:'easeOutQuart',
                                queue:false
                            });
            
                            for (i = 0; i < portfolioTile.length; i++) {

                            currentPortfolioTile = portfolioTile.eq(i);

                            currentPortfolioTile.velocity({
                                opacity:[portfolioTileOpacityEnd,portfolioTileOpacityStart],
                                scale:[portfolioTileScaleEnd,portfolioTileScaleStart],
                                /*rotateX:[portfolioTileRotateXEnd,portfolioTileRotateXStart],
                                rotateZ:[portfolioTileRotateZEnd,portfolioTileRotateZStart],
                                translateX:[portfolioTileTranslateXEnd,portfolioTileTranslateXStart],*/
                                translateY:[portfolioTileTranslateYEnd,portfolioTileTranslateYStart]/*,
                                translateZ:[portfolioTileTranslateZEnd,portfolioTileTranslateZStart]*/
                            }, {
                                duration:portfolioTileFlyInDuration,
                                easing:portfolioTileLoadInEase,
                                delay:portfolioTileDelay+=100
                            });

                            }

                        });
                        
                    }
                });

/*                $.ajax({
                    type: 'GET',
                    url: correctURL() + '.html',
                    success: function(tiles) {

                        //if (!$('#wrapper').css('display','none')) {
                        //$('#wrapper').fadeToggle(); // hide/show toggle
                        //}

                        $('#portfolio-tile-container-outer').css('display', 'block').html(tiles, function() {});

                    },
                    cache: false,
                    complete: function() {

                        function tileFlyIn() {
                            $('.portfolio-tile')
                                .css({
                                    'top': '100px'
                                });

                            var delayNumber = 1000;
                            var i;
                            for (i = 0; i < $('.portfolio-tile').length; i++) {

                                $('.portfolio-tile').eq(i)
                                    .delay(delayNumber)
                                    .animate({
                                        opacity: '1',
                                        top: '0'
                                    }, {
                                        duration: 1000,
                                        easing: 'easeOutExpo',
                                        queue: true,
                                        complete: function() {

                                        }
                                    });
                                delayNumber = delayNumber + 100;
                            };

                            $('.portfolio-tile-header-container').fadeIn(0).css('opacity', '0').animate({
                                opacity: '1'
                            }, 1000, 'swing', function() {});
                            $('.portfolio-tile-header').css('opacity', '0').animate({
                                opacity: '1'
                            }, 1000, 'swing', function() {});
                            $('.portfolio-tile-subheader').fadeIn(0).css('opacity', '0').animate({
                                opacity: '1'
                            }, 1000, 'swing', function() {});
                        }

                        tileFlyIn();

                        var portfolioTile = $('.portfolio-tile img');




                    }
                });*/

            },
            cartoons: function() {
                
                loading.stop(1,1);
                
                portfolioTileHeaders.addClass(portfolioTileHeadersActiveString);
                
                portfolioTileHeader.css('opacity','0');
                
                cartoonsHeader.addClass(portfolioTileHeaderActiveString);
                
                cartoonsHeader.siblings(portfolioTileHeader).removeClass(portfolioTileHeaderActiveString);
                
                cartoonsHeader.velocity({
                    opacity:['1','0']
                }, {
                   duration:1000,
                   delay:1000,
                   queue:false
                });

                loadingTrackbar.stop(1,1).velocity({
                    width:['0vw','0vw'],
                    opacity:['0','0']
                }, {
                    duration:noDuration,
                    queue:false
                });
                
                portfolioClose.css('opacity','0').addClass(portfolioCloseActiveString);
                
                portfolioCloseTapRegion.addClass(portfolioCloseActiveString);
                
                portfolioClose.velocity({
                    opacity:['1','0']
                }, {
                    duration:1000,
                    easing:'swing',
                    queue:false
                });
                
                portfolioTileContainerBackground.css('opacity','0').addClass(portfolioTileContainerBackgroundActiveString).velocity({
                    opacity:['0.9', 'swing', '0'],
                    scale:['1','0.75']
                }, {
                    duration:1000,
                    easing:'easeInOutQuart',
                    queue:false,
                    complete:function() {        
                
                        portfolioTileContainerFade.css('opacity','0').addClass(portfolioTileContainerFadeActiveString).velocity({
                                    opacity:['1','0'],
                                    scale:['1','1'],
                                    translateY:['0px','0px']
                                }, {
                                    duration:1000,
                                    easing:'swing',
                                    delay:1000,
                                    queue:false
                                });
                    }
                });
                
                portfolioTileContainer.css('opacity','0').addClass(portfolioTileContainerActiveString).velocity({
                    opacity:['1','0'],
                    scale:['1','0.75']
                }, {
                    duration:1000,
                    easing:'easeInOutQuart',
                    queue:false,
                    complete:function() {
                
                        loadingTrackbar.fadeIn(0).addClass(loadingTrackbarActiveString);

                        var loading = [
                            { elements: loadingTrackbar, properties: { width: ['20vw','20vw'], opacity:['1','1'] } },
                            { elements: loadingTrackbar, properties: { width: ['40vw','20vw'] } },
                            { elements: loadingTrackbar, properties: { width: ['60vw','40vw'] } },
                            { elements: loadingTrackbar, properties: { width: ['80vw','60vw'] } },
                            { elements: loadingTrackbar, properties: { width: ['100vw','80vw'] }
                          }
                        ]; 

                        $.Velocity.RunSequence(loading);
                        
                        loadCartoonItems();
                
                        portfolioTile = $('.portfolio-tile');
                        
                        tile = $('.tile');

                        portfolioTile.css({
                            opacity:'0'
                        });
    
                        //PORTFOLIO IMAGES DONE LOADING
                        tile.imagesLoaded(function() {

                            loadingTrackbar.fadeOut(1000);

                            loadingTrackbar.velocity({
                                width:'100vw'
                            }, {
                                duration:1000,
                                easing:'easeOutQuart',
                                queue:false
                            });
            
                            for (i = 0; i < portfolioTile.length; i++) {

                            currentPortfolioTile = portfolioTile.eq(i);

                            currentPortfolioTile.velocity({
                                opacity:[portfolioTileOpacityEnd,portfolioTileOpacityStart],
                                scale:[portfolioTileScaleEnd,portfolioTileScaleStart],
                                /*rotateX:[portfolioTileRotateXEnd,portfolioTileRotateXStart],
                                rotateZ:[portfolioTileRotateZEnd,portfolioTileRotateZStart],
                                translateX:[portfolioTileTranslateXEnd,portfolioTileTranslateXStart],*/
                                translateY:[portfolioTileTranslateYEnd,portfolioTileTranslateYStart]/*,
                                translateZ:[portfolioTileTranslateZEnd,portfolioTileTranslateZStart]*/
                            }, {
                                duration:portfolioTileFlyInDuration,
                                easing:portfolioTileLoadInEase,
                                delay:portfolioTileDelay+=100
                            });

                            }

                        });
                        
                    }
                });

/*                $.ajax({
                    type: 'GET',
                    url: correctURL() + '.html',
                    success: function(tiles) {

                        //if (!$('#wrapper').css('display','none')) {
                        //$('#wrapper').fadeToggle(); // hide/show toggle
                        //}

                        $('#portfolio-tile-container-outer').css('display', 'block').html(tiles, function() {});

                    },
                    cache: false,
                    complete: function() {

                        function tileFlyIn() {
                            $('.portfolio-tile')
                                .css({
                                    'top': '100px'
                                });

                            var delayNumber = 1000;
                            var i;
                            for (i = 0; i < $('.portfolio-tile').length; i++) {

                                $('.portfolio-tile').eq(i)
                                    .delay(delayNumber)
                                    .animate({
                                        opacity: '1',
                                        top: '0'
                                    }, {
                                        duration: 1000,
                                        easing: 'easeOutExpo',
                                        queue: true,
                                        complete: function() {

                                        }
                                    });
                                delayNumber = delayNumber + 100;
                            };

                            $('.portfolio-tile-header-container').fadeIn(0).css('opacity', '0').animate({
                                opacity: '1'
                            }, 1000, 'swing', function() {});
                            $('.portfolio-tile-header').css('opacity', '0').animate({
                                opacity: '1'
                            }, 1000, 'swing', function() {});
                            $('.portfolio-tile-subheader').fadeIn(0).css('opacity', '0').animate({
                                opacity: '1'
                            }, 1000, 'swing', function() {});
                        }

                        tileFlyIn();

                        var portfolioTile = $('.portfolio-tile img');




                    }
                });*/

            },
            life: function() {
                
                loading.stop(1,1);
                
                portfolioTileHeaders.addClass(portfolioTileHeadersActiveString);
                
                portfolioTileHeader.css('opacity','0');
                
                lifeHeader.addClass(portfolioTileHeaderActiveString);
                
                lifeHeader.siblings(portfolioTileHeader).removeClass(portfolioTileHeaderActiveString);
                
                lifeHeader.velocity({
                    opacity:['1','0']
                }, {
                   duration:1000,
                   delay:1000,
                   queue:false
                });

                loadingTrackbar.stop(1,1).velocity({
                    width:['0vw','0vw'],
                    opacity:['0','0']
                }, {
                    duration:noDuration,
                    queue:false
                });
                
                portfolioClose.css('opacity','0').addClass(portfolioCloseActiveString);
                
                portfolioCloseTapRegion.addClass(portfolioCloseActiveString);
                
                portfolioClose.velocity({
                    opacity:['1','0']
                }, {
                    duration:1000,
                    easing:'swing',
                    queue:false
                });
                
                portfolioTileContainerBackground.css('opacity','0').addClass(portfolioTileContainerBackgroundActiveString).velocity({
                    opacity:['0.9', 'swing', '0'],
                    scale:['1','0.75']
                }, {
                    duration:1000,
                    easing:'easeInOutQuart',
                    queue:false,
                    complete:function() {        
                
                        portfolioTileContainerFade.css('opacity','0').addClass(portfolioTileContainerFadeActiveString).velocity({
                                    opacity:['1','0'],
                                    scale:['1','1'],
                                    translateY:['0px','0px']
                                }, {
                                    duration:1000,
                                    easing:'swing',
                                    delay:1000,
                                    queue:false
                                });
                    }
                });
                
                portfolioTileContainer.css('opacity','0').addClass(portfolioTileContainerActiveString).velocity({
                    opacity:['1','0'],
                    scale:['1','0.75']
                }, {
                    duration:1000,
                    easing:'easeInOutQuart',
                    queue:false,
                    complete:function() {
                
                        loadingTrackbar.fadeIn(0).addClass(loadingTrackbarActiveString);

                        var loading = [
                            { elements: loadingTrackbar, properties: { width: ['20vw','20vw'], opacity:['1','1'] } },
                            { elements: loadingTrackbar, properties: { width: ['40vw','20vw'] } },
                            { elements: loadingTrackbar, properties: { width: ['60vw','40vw'] } },
                            { elements: loadingTrackbar, properties: { width: ['80vw','60vw'] } },
                            { elements: loadingTrackbar, properties: { width: ['100vw','80vw'] }
                          }
                        ]; 

                        $.Velocity.RunSequence(loading);
                        
                        loadLifeItems();
                
                        portfolioTile = $('.portfolio-tile');
                        
                        tile = $('.tile');

                        portfolioTile.css({
                            opacity:'0'
                        });
    
                        //PORTFOLIO IMAGES DONE LOADING
                        tile.imagesLoaded(function() {

                            loadingTrackbar.fadeOut(1000);

                            loadingTrackbar.velocity({
                                width:'100vw'
                            }, {
                                duration:1000,
                                easing:'easeOutQuart',
                                queue:false
                            });
            
                            for (i = 0; i < portfolioTile.length; i++) {

                            currentPortfolioTile = portfolioTile.eq(i);

                            currentPortfolioTile.velocity({
                                opacity:[portfolioTileOpacityEnd,portfolioTileOpacityStart],
                                scale:[portfolioTileScaleEnd,portfolioTileScaleStart],
                                /*rotateX:[portfolioTileRotateXEnd,portfolioTileRotateXStart],
                                rotateZ:[portfolioTileRotateZEnd,portfolioTileRotateZStart],
                                translateX:[portfolioTileTranslateXEnd,portfolioTileTranslateXStart],*/
                                translateY:[portfolioTileTranslateYEnd,portfolioTileTranslateYStart]/*,
                                translateZ:[portfolioTileTranslateZEnd,portfolioTileTranslateZStart]*/
                            }, {
                                duration:portfolioTileFlyInDuration,
                                easing:portfolioTileLoadInEase,
                                delay:portfolioTileDelay+=100
                            });

                            }

                        });
                        
                    }
                });

/*                $.ajax({
                    type: 'GET',
                    url: correctURL() + '.html',
                    success: function(tiles) {

                        //if (!$('#wrapper').css('display','none')) {
                        //$('#wrapper').fadeToggle(); // hide/show toggle
                        //}

                        $('#portfolio-tile-container-outer').css('display', 'block').html(tiles, function() {});

                    },
                    cache: false,
                    complete: function() {

                        function tileFlyIn() {
                            $('.portfolio-tile')
                                .css({
                                    'top': '100px'
                                });

                            var delayNumber = 1000;
                            var i;
                            for (i = 0; i < $('.portfolio-tile').length; i++) {

                                $('.portfolio-tile').eq(i)
                                    .delay(delayNumber)
                                    .animate({
                                        opacity: '1',
                                        top: '0'
                                    }, {
                                        duration: 1000,
                                        easing: 'easeOutExpo',
                                        queue: true,
                                        complete: function() {

                                        }
                                    });
                                delayNumber = delayNumber + 100;
                            };

                            $('.portfolio-tile-header-container').fadeIn(0).css('opacity', '0').animate({
                                opacity: '1'
                            }, 1000, 'swing', function() {});
                            $('.portfolio-tile-header').css('opacity', '0').animate({
                                opacity: '1'
                            }, 1000, 'swing', function() {});
                            $('.portfolio-tile-subheader').fadeIn(0).css('opacity', '0').animate({
                                opacity: '1'
                            }, 1000, 'swing', function() {});
                        }

                        tileFlyIn();

                        var portfolioTile = $('.portfolio-tile img');




                    }
                });*/

            },
            portraits: function() {
                
                loading.stop(1,1);
                
                portfolioTileHeaders.addClass(portfolioTileHeadersActiveString);
                
                portfolioTileHeader.css('opacity','0');
                
                portraitsHeader.addClass(portfolioTileHeaderActiveString);
                
                portraitsHeader.siblings(portfolioTileHeader).removeClass(portfolioTileHeaderActiveString);
                
                portraitsHeader.velocity({
                    opacity:['1','0']
                }, {
                   duration:1000,
                   delay:1000,
                   queue:false
                });

                loadingTrackbar.stop(1,1).velocity({
                    width:['0vw','0vw'],
                    opacity:['0','0']
                }, {
                    duration:noDuration,
                    queue:false
                });
                
                portfolioClose.css('opacity','0').addClass(portfolioCloseActiveString);
                
                portfolioCloseTapRegion.addClass(portfolioCloseActiveString);
                
                portfolioClose.velocity({
                    opacity:['1','0']
                }, {
                    duration:1000,
                    easing:'swing',
                    queue:false
                });
                
                portfolioTileContainerBackground.css('opacity','0').addClass(portfolioTileContainerBackgroundActiveString).velocity({
                    opacity:['0.9', 'swing', '0'],
                    scale:['1','0.75']
                }, {
                    duration:1000,
                    easing:'easeInOutQuart',
                    queue:false,
                    complete:function() {        
                
                        portfolioTileContainerFade.css('opacity','0').addClass(portfolioTileContainerFadeActiveString).velocity({
                                    opacity:['1','0'],
                                    scale:['1','1'],
                                    translateY:['0px','0px']
                                }, {
                                    duration:1000,
                                    easing:'swing',
                                    delay:1000,
                                    queue:false
                                });
                    }
                });
                
                portfolioTileContainer.css('opacity','0').addClass(portfolioTileContainerActiveString).velocity({
                    opacity:['1','0'],
                    scale:['1','0.75']
                }, {
                    duration:1000,
                    easing:'easeInOutQuart',
                    queue:false,
                    complete:function() {
                
                        loadingTrackbar.fadeIn(0).addClass(loadingTrackbarActiveString);

                        var loading = [
                            { elements: loadingTrackbar, properties: { width: ['20vw','20vw'], opacity:['1','1'] } },
                            { elements: loadingTrackbar, properties: { width: ['40vw','20vw'] } },
                            { elements: loadingTrackbar, properties: { width: ['60vw','40vw'] } },
                            { elements: loadingTrackbar, properties: { width: ['80vw','60vw'] } },
                            { elements: loadingTrackbar, properties: { width: ['100vw','80vw'] }
                          }
                        ]; 

                        $.Velocity.RunSequence(loading);
                        
                        loadPortraitItems();
                
                        portfolioTile = $('.portfolio-tile');
                        
                        tile = $('.tile');

                        portfolioTile.css({
                            opacity:'0'
                        });
    
                        //PORTFOLIO IMAGES DONE LOADING
                        tile.imagesLoaded(function() {

                            loadingTrackbar.fadeOut(1000);

                            loadingTrackbar.velocity({
                                width:'100vw'
                            }, {
                                duration:1000,
                                easing:'easeOutQuart',
                                queue:false
                            });
            
                            for (i = 0; i < portfolioTile.length; i++) {

                            currentPortfolioTile = portfolioTile.eq(i);

                            currentPortfolioTile.velocity({
                                opacity:[portfolioTileOpacityEnd,portfolioTileOpacityStart],
                                scale:[portfolioTileScaleEnd,portfolioTileScaleStart],
                                /*rotateX:[portfolioTileRotateXEnd,portfolioTileRotateXStart],
                                rotateZ:[portfolioTileRotateZEnd,portfolioTileRotateZStart],
                                translateX:[portfolioTileTranslateXEnd,portfolioTileTranslateXStart],*/
                                translateY:[portfolioTileTranslateYEnd,portfolioTileTranslateYStart]/*,
                                translateZ:[portfolioTileTranslateZEnd,portfolioTileTranslateZStart]*/
                            }, {
                                duration:portfolioTileFlyInDuration,
                                easing:portfolioTileLoadInEase,
                                delay:portfolioTileDelay+=100
                            });

                            }

                        });
                        
                    }
                });

/*                $.ajax({
                    type: 'GET',
                    url: correctURL() + '.html',
                    success: function(tiles) {

                        //if (!$('#wrapper').css('display','none')) {
                        //$('#wrapper').fadeToggle(); // hide/show toggle
                        //}

                        $('#portfolio-tile-container-outer').css('display', 'block').html(tiles, function() {});

                    },
                    cache: false,
                    complete: function() {

                        function tileFlyIn() {
                            $('.portfolio-tile')
                                .css({
                                    'top': '100px'
                                });

                            var delayNumber = 1000;
                            var i;
                            for (i = 0; i < $('.portfolio-tile').length; i++) {

                                $('.portfolio-tile').eq(i)
                                    .delay(delayNumber)
                                    .animate({
                                        opacity: '1',
                                        top: '0'
                                    }, {
                                        duration: 1000,
                                        easing: 'easeOutExpo',
                                        queue: true,
                                        complete: function() {

                                        }
                                    });
                                delayNumber = delayNumber + 100;
                            };

                            $('.portfolio-tile-header-container').fadeIn(0).css('opacity', '0').animate({
                                opacity: '1'
                            }, 1000, 'swing', function() {});
                            $('.portfolio-tile-header').css('opacity', '0').animate({
                                opacity: '1'
                            }, 1000, 'swing', function() {});
                            $('.portfolio-tile-subheader').fadeIn(0).css('opacity', '0').animate({
                                opacity: '1'
                            }, 1000, 'swing', function() {});
                        }

                        tileFlyIn();

                        var portfolioTile = $('.portfolio-tile img');




                    }
                });*/

            }
        },
        loadOut: {
            sites: function() {
                
                loading.stop(1,1);
                
                websitesHeader.stop(1,0).velocity({
                    opacity:'0'
                }, {
                   duration:1000,
                   easing:'swing',
                   queue:false,
                   complete:function() {
                       portfolioTileHeaders.removeClass(portfolioTileHeadersActiveString);
                       websitesHeader.removeClass(portfolioTileHeaderActiveString);
                   }
                }).siblings(portfolioTileHeader).css('opacity','0');

                loadingTrackbar.stop(1,1).velocity({
                    width:['100vw','100vw'],
                    opacity:['0','0']
                }, {
                    duration:1000,
                    queue:false
                });
                
                portfolioTileDelay = portfolioTileDelayInitial;
                
                portfolioTile = $('.portfolio-tile');
                
                portfolioClose.css('opacity','1');
                
                portfolioClose.velocity({
                    opacity:['0','1']
                }, {
                    duration:1000,
                    easing:'swing',
                    queue:false,
                    complete:function() {
                        portfolioClose.removeClass(portfolioCloseActiveString);
                
                        portfolioCloseTapRegion.removeClass(portfolioCloseActiveString);
                    }
                });
                
                portfolioTileContainerFade.stop(1,1).velocity({
                    opacity:['0', 'easeOutQuart'],
                    scale:'0.75',
                    translateY:Math.floor(($(window).height() * 0.125)) + 'px'
                }, {
                    duration:1000,
                    easing:'easeInOutQuart',
                    queue:false,
                    complete:function() {
                        $(this).removeClass(portfolioTileContainerFadeActiveString);
                    }
                });
                
                portfolioTileContainerBackground.velocity({
                    opacity:['0','0.9']
                }, {
                    duration:1000,
                    easing:'swing',
                    queue:false,
                    complete:function() {
                        $(this).removeClass(portfolioTileContainerBackgroundActiveString);
                    }
                });
                
                portfolioTileContainer.stop(1,0).velocity({
                    opacity:['0','1'],
                    scale:'0.75'
                }, {
                    duration:1000,
                    easing:'easeInOutQuart',
                    queue:false,
                    complete:function() {
                        $(this).removeClass(portfolioTileContainerActiveString);
                        portfolioTileContainer.scrollTop(0).css('opacity','0');
                        portfolioTile.css('opacity','0');
                        portfolioTileContainerInner.empty();
                    }
                });

/*                $.ajax({
                    type: 'GET',
                    url: correctURL() + '.html',
                    success: function(tiles) {

                        //if (!$('#wrapper').css('display','none')) {
                        //$('#wrapper').fadeToggle(); // hide/show toggle
                        //}

                        $('#portfolio-tile-container-outer').css('display', 'block').html(tiles, function() {});

                    },
                    cache: false,
                    complete: function() {

                        function tileFlyIn() {
                            $('.portfolio-tile')
                                .css({
                                    'top': '100px'
                                });

                            var delayNumber = 1000;
                            var i;
                            for (i = 0; i < $('.portfolio-tile').length; i++) {

                                $('.portfolio-tile').eq(i)
                                    .delay(delayNumber)
                                    .animate({
                                        opacity: '1',
                                        top: '0'
                                    }, {
                                        duration: 1000,
                                        easing: 'easeOutExpo',
                                        queue: true,
                                        complete: function() {

                                        }
                                    });
                                delayNumber = delayNumber + 100;
                            };

                            $('.portfolio-tile-header-container').fadeIn(0).css('opacity', '0').animate({
                                opacity: '1'
                            }, 1000, 'swing', function() {});
                            $('.portfolio-tile-header').css('opacity', '0').animate({
                                opacity: '1'
                            }, 1000, 'swing', function() {});
                            $('.portfolio-tile-subheader').fadeIn(0).css('opacity', '0').animate({
                                opacity: '1'
                            }, 1000, 'swing', function() {});
                        }

                        tileFlyIn();

                        var portfolioTile = $('.portfolio-tile img');




                    }
                });*/

            },
            banners: function() {
                
                loading.stop(1,1);
                
                bannersHeader.stop(1,0).velocity({
                    opacity:'0'
                }, {
                   duration:1000,
                   easing:'swing',
                   queue:false,
                   complete:function() {
                       portfolioTileHeaders.removeClass(portfolioTileHeadersActiveString);
                       bannersHeader.removeClass(portfolioTileHeaderActiveString);
                   }
                }).siblings(portfolioTileHeader).css('opacity','0');

                loadingTrackbar.stop(1,1).velocity({
                    width:['100vw','100vw'],
                    opacity:['0','0']
                }, {
                    duration:1000,
                    queue:false
                });
                
                portfolioTileDelay = portfolioTileDelayInitial;
                
                portfolioTile = $('.portfolio-tile');
                
                portfolioClose.css('opacity','1');
                
                portfolioClose.velocity({
                    opacity:['0','1']
                }, {
                    duration:1000,
                    easing:'swing',
                    queue:false,
                    complete:function() {
                        portfolioClose.removeClass(portfolioCloseActiveString);
                
                        portfolioCloseTapRegion.removeClass(portfolioCloseActiveString);
                    }
                });
                
                portfolioTileContainerFade.stop(1,1).velocity({
                    opacity:['0', 'easeOutQuart'],
                    scale:'0.75',
                    translateY:Math.floor(($(window).height() * 0.125)) + 'px'
                }, {
                    duration:1000,
                    easing:'easeInOutQuart',
                    queue:false,
                    complete:function() {
                        $(this).removeClass(portfolioTileContainerFadeActiveString);
                    }
                });
                
                portfolioTileContainerBackground.velocity({
                    opacity:['0','0.9']
                }, {
                    duration:1000,
                    easing:'swing',
                    queue:false,
                    complete:function() {
                        $(this).removeClass(portfolioTileContainerBackgroundActiveString);
                    }
                });
                
                portfolioTileContainer.stop(1,0).velocity({
                    opacity:['0','1'],
                    scale:'0.75'
                }, {
                    duration:1000,
                    easing:'easeInOutQuart',
                    queue:false,
                    complete:function() {
                        $(this).removeClass(portfolioTileContainerActiveString);
                        portfolioTileContainer.scrollTop(0).css('opacity','0');
                        portfolioTile.css('opacity','0');
                        portfolioTileContainerInner.empty();
                    }
                });

/*                $.ajax({
                    type: 'GET',
                    url: correctURL() + '.html',
                    success: function(tiles) {

                        //if (!$('#wrapper').css('display','none')) {
                        //$('#wrapper').fadeToggle(); // hide/show toggle
                        //}

                        $('#portfolio-tile-container-outer').css('display', 'block').html(tiles, function() {});

                    },
                    cache: false,
                    complete: function() {

                        function tileFlyIn() {
                            $('.portfolio-tile')
                                .css({
                                    'top': '100px'
                                });

                            var delayNumber = 1000;
                            var i;
                            for (i = 0; i < $('.portfolio-tile').length; i++) {

                                $('.portfolio-tile').eq(i)
                                    .delay(delayNumber)
                                    .animate({
                                        opacity: '1',
                                        top: '0'
                                    }, {
                                        duration: 1000,
                                        easing: 'easeOutExpo',
                                        queue: true,
                                        complete: function() {

                                        }
                                    });
                                delayNumber = delayNumber + 100;
                            };

                            $('.portfolio-tile-header-container').fadeIn(0).css('opacity', '0').animate({
                                opacity: '1'
                            }, 1000, 'swing', function() {});
                            $('.portfolio-tile-header').css('opacity', '0').animate({
                                opacity: '1'
                            }, 1000, 'swing', function() {});
                            $('.portfolio-tile-subheader').fadeIn(0).css('opacity', '0').animate({
                                opacity: '1'
                            }, 1000, 'swing', function() {});
                        }

                        tileFlyIn();

                        var portfolioTile = $('.portfolio-tile img');




                    }
                });*/

            },
            eblasts: function() {
                
                loading.stop(1,1);
                
                eblastsHeader.stop(1,0).velocity({
                    opacity:'0'
                }, {
                   duration:1000,
                   easing:'swing',
                   queue:false,
                   complete:function() {
                       portfolioTileHeaders.removeClass(portfolioTileHeadersActiveString);
                       eblastsHeader.removeClass(portfolioTileHeaderActiveString);
                   }
                }).siblings(portfolioTileHeader).css('opacity','0');

                loadingTrackbar.stop(1,1).velocity({
                    width:['100vw','100vw'],
                    opacity:['0','0']
                }, {
                    duration:1000,
                    queue:false
                });
                
                portfolioTileDelay = portfolioTileDelayInitial;
                
                portfolioTile = $('.portfolio-tile');
                
                portfolioClose.css('opacity','1');
                
                portfolioClose.velocity({
                    opacity:['0','1']
                }, {
                    duration:1000,
                    easing:'swing',
                    queue:false,
                    complete:function() {
                        portfolioClose.removeClass(portfolioCloseActiveString);
                
                        portfolioCloseTapRegion.removeClass(portfolioCloseActiveString);
                    }
                });
                
                portfolioTileContainerFade.stop(1,1).velocity({
                    opacity:['0', 'easeOutQuart'],
                    scale:'0.75',
                    translateY:Math.floor(($(window).height() * 0.125)) + 'px'
                }, {
                    duration:1000,
                    easing:'easeInOutQuart',
                    queue:false,
                    complete:function() {
                        $(this).removeClass(portfolioTileContainerFadeActiveString);
                    }
                });
                
                portfolioTileContainerBackground.velocity({
                    opacity:['0','0.9']
                }, {
                    duration:1000,
                    easing:'swing',
                    queue:false,
                    complete:function() {
                        $(this).removeClass(portfolioTileContainerBackgroundActiveString);
                    }
                });
                
                portfolioTileContainer.stop(1,0).velocity({
                    opacity:['0','1'],
                    scale:'0.75'
                }, {
                    duration:1000,
                    easing:'easeInOutQuart',
                    queue:false,
                    complete:function() {
                        $(this).removeClass(portfolioTileContainerActiveString);
                        portfolioTileContainer.scrollTop(0).css('opacity','0');
                        portfolioTile.css('opacity','0');
                        portfolioTileContainerInner.empty();
                    }
                });

/*                $.ajax({
                    type: 'GET',
                    url: correctURL() + '.html',
                    success: function(tiles) {

                        //if (!$('#wrapper').css('display','none')) {
                        //$('#wrapper').fadeToggle(); // hide/show toggle
                        //}

                        $('#portfolio-tile-container-outer').css('display', 'block').html(tiles, function() {});

                    },
                    cache: false,
                    complete: function() {

                        function tileFlyIn() {
                            $('.portfolio-tile')
                                .css({
                                    'top': '100px'
                                });

                            var delayNumber = 1000;
                            var i;
                            for (i = 0; i < $('.portfolio-tile').length; i++) {

                                $('.portfolio-tile').eq(i)
                                    .delay(delayNumber)
                                    .animate({
                                        opacity: '1',
                                        top: '0'
                                    }, {
                                        duration: 1000,
                                        easing: 'easeOutExpo',
                                        queue: true,
                                        complete: function() {

                                        }
                                    });
                                delayNumber = delayNumber + 100;
                            };

                            $('.portfolio-tile-header-container').fadeIn(0).css('opacity', '0').animate({
                                opacity: '1'
                            }, 1000, 'swing', function() {});
                            $('.portfolio-tile-header').css('opacity', '0').animate({
                                opacity: '1'
                            }, 1000, 'swing', function() {});
                            $('.portfolio-tile-subheader').fadeIn(0).css('opacity', '0').animate({
                                opacity: '1'
                            }, 1000, 'swing', function() {});
                        }

                        tileFlyIn();

                        var portfolioTile = $('.portfolio-tile img');




                    }
                });*/

            },
            flyers: function() {
                
                loading.stop(1,1);
                
                flyersHeader.stop(1,0).velocity({
                    opacity:'0'
                }, {
                   duration:1000,
                   easing:'swing',
                   queue:false,
                   complete:function() {
                       portfolioTileHeaders.removeClass(portfolioTileHeadersActiveString);
                       flyersHeader.removeClass(portfolioTileHeaderActiveString);
                   }
                }).siblings(portfolioTileHeader).css('opacity','0');

                loadingTrackbar.stop(1,1).velocity({
                    width:['100vw','100vw'],
                    opacity:['0','0']
                }, {
                    duration:1000,
                    queue:false
                });
                
                portfolioTileDelay = portfolioTileDelayInitial;
                
                portfolioTile = $('.portfolio-tile');
                
                portfolioClose.css('opacity','1');
                
                portfolioClose.velocity({
                    opacity:['0','1']
                }, {
                    duration:1000,
                    easing:'swing',
                    queue:false,
                    complete:function() {
                        portfolioClose.removeClass(portfolioCloseActiveString);
                
                        portfolioCloseTapRegion.removeClass(portfolioCloseActiveString);
                    }
                });
                
                portfolioTileContainerFade.stop(1,1).velocity({
                    opacity:['0', 'easeOutQuart'],
                    scale:'0.75',
                    translateY:Math.floor(($(window).height() * 0.125)) + 'px'
                }, {
                    duration:1000,
                    easing:'easeInOutQuart',
                    queue:false,
                    complete:function() {
                        $(this).removeClass(portfolioTileContainerFadeActiveString);
                    }
                });
                
                portfolioTileContainerBackground.velocity({
                    opacity:['0','0.9']
                }, {
                    duration:1000,
                    easing:'swing',
                    queue:false,
                    complete:function() {
                        $(this).removeClass(portfolioTileContainerBackgroundActiveString);
                    }
                });
                
                portfolioTileContainer.stop(1,0).velocity({
                    opacity:['0','1'],
                    scale:'0.75'
                }, {
                    duration:1000,
                    easing:'easeInOutQuart',
                    queue:false,
                    complete:function() {
                        $(this).removeClass(portfolioTileContainerActiveString);
                        portfolioTileContainer.scrollTop(0).css('opacity','0');
                        portfolioTile.css('opacity','0');
                        portfolioTileContainerInner.empty();
                    }
                });

/*                $.ajax({
                    type: 'GET',
                    url: correctURL() + '.html',
                    success: function(tiles) {

                        //if (!$('#wrapper').css('display','none')) {
                        //$('#wrapper').fadeToggle(); // hide/show toggle
                        //}

                        $('#portfolio-tile-container-outer').css('display', 'block').html(tiles, function() {});

                    },
                    cache: false,
                    complete: function() {

                        function tileFlyIn() {
                            $('.portfolio-tile')
                                .css({
                                    'top': '100px'
                                });

                            var delayNumber = 1000;
                            var i;
                            for (i = 0; i < $('.portfolio-tile').length; i++) {

                                $('.portfolio-tile').eq(i)
                                    .delay(delayNumber)
                                    .animate({
                                        opacity: '1',
                                        top: '0'
                                    }, {
                                        duration: 1000,
                                        easing: 'easeOutExpo',
                                        queue: true,
                                        complete: function() {

                                        }
                                    });
                                delayNumber = delayNumber + 100;
                            };

                            $('.portfolio-tile-header-container').fadeIn(0).css('opacity', '0').animate({
                                opacity: '1'
                            }, 1000, 'swing', function() {});
                            $('.portfolio-tile-header').css('opacity', '0').animate({
                                opacity: '1'
                            }, 1000, 'swing', function() {});
                            $('.portfolio-tile-subheader').fadeIn(0).css('opacity', '0').animate({
                                opacity: '1'
                            }, 1000, 'swing', function() {});
                        }

                        tileFlyIn();

                        var portfolioTile = $('.portfolio-tile img');




                    }
                });*/

            },
            brochures: function() {
                
                loading.stop(1,1);
                
                brochuresHeader.stop(1,0).velocity({
                    opacity:'0'
                }, {
                   duration:1000,
                   easing:'swing',
                   queue:false,
                   complete:function() {
                       portfolioTileHeaders.removeClass(portfolioTileHeadersActiveString);
                       brochuresHeader.removeClass(portfolioTileHeaderActiveString);
                   }
                }).siblings(portfolioTileHeader).css('opacity','0');

                loadingTrackbar.stop(1,1).velocity({
                    width:['100vw','100vw'],
                    opacity:['0','0']
                }, {
                    duration:1000,
                    queue:false
                });
                
                portfolioTileDelay = portfolioTileDelayInitial;
                
                portfolioTile = $('.portfolio-tile');
                
                portfolioClose.css('opacity','1');
                
                portfolioClose.velocity({
                    opacity:['0','1']
                }, {
                    duration:1000,
                    easing:'swing',
                    queue:false,
                    complete:function() {
                        portfolioClose.removeClass(portfolioCloseActiveString);
                
                        portfolioCloseTapRegion.removeClass(portfolioCloseActiveString);
                    }
                });
                
                portfolioTileContainerFade.stop(1,1).velocity({
                    opacity:['0', 'easeOutQuart'],
                    scale:'0.75',
                    translateY:Math.floor(($(window).height() * 0.125)) + 'px'
                }, {
                    duration:1000,
                    easing:'easeInOutQuart',
                    queue:false,
                    complete:function() {
                        $(this).removeClass(portfolioTileContainerFadeActiveString);
                    }
                });
                
                portfolioTileContainerBackground.velocity({
                    opacity:['0','0.9']
                }, {
                    duration:1000,
                    easing:'swing',
                    queue:false,
                    complete:function() {
                        $(this).removeClass(portfolioTileContainerBackgroundActiveString);
                    }
                });
                
                portfolioTileContainer.stop(1,0).velocity({
                    opacity:['0','1'],
                    scale:'0.75'
                }, {
                    duration:1000,
                    easing:'easeInOutQuart',
                    queue:false,
                    complete:function() {
                        $(this).removeClass(portfolioTileContainerActiveString);
                        portfolioTileContainer.scrollTop(0).css('opacity','0');
                        portfolioTile.css('opacity','0');
                        portfolioTileContainerInner.empty();
                    }
                });

/*                $.ajax({
                    type: 'GET',
                    url: correctURL() + '.html',
                    success: function(tiles) {

                        //if (!$('#wrapper').css('display','none')) {
                        //$('#wrapper').fadeToggle(); // hide/show toggle
                        //}

                        $('#portfolio-tile-container-outer').css('display', 'block').html(tiles, function() {});

                    },
                    cache: false,
                    complete: function() {

                        function tileFlyIn() {
                            $('.portfolio-tile')
                                .css({
                                    'top': '100px'
                                });

                            var delayNumber = 1000;
                            var i;
                            for (i = 0; i < $('.portfolio-tile').length; i++) {

                                $('.portfolio-tile').eq(i)
                                    .delay(delayNumber)
                                    .animate({
                                        opacity: '1',
                                        top: '0'
                                    }, {
                                        duration: 1000,
                                        easing: 'easeOutExpo',
                                        queue: true,
                                        complete: function() {

                                        }
                                    });
                                delayNumber = delayNumber + 100;
                            };

                            $('.portfolio-tile-header-container').fadeIn(0).css('opacity', '0').animate({
                                opacity: '1'
                            }, 1000, 'swing', function() {});
                            $('.portfolio-tile-header').css('opacity', '0').animate({
                                opacity: '1'
                            }, 1000, 'swing', function() {});
                            $('.portfolio-tile-subheader').fadeIn(0).css('opacity', '0').animate({
                                opacity: '1'
                            }, 1000, 'swing', function() {});
                        }

                        tileFlyIn();

                        var portfolioTile = $('.portfolio-tile img');




                    }
                });*/

            },
            billboards: function() {
                
                loading.stop(1,1);
                
                billboardsHeader.stop(1,0).velocity({
                    opacity:'0'
                }, {
                   duration:1000,
                   easing:'swing',
                   queue:false,
                   complete:function() {
                       portfolioTileHeaders.removeClass(portfolioTileHeadersActiveString);
                       billboardsHeader.removeClass(portfolioTileHeaderActiveString);
                   }
                }).siblings(portfolioTileHeader).css('opacity','0');

                loadingTrackbar.stop(1,1).velocity({
                    width:['100vw','100vw'],
                    opacity:['0','0']
                }, {
                    duration:1000,
                    queue:false
                });
                
                portfolioTileDelay = portfolioTileDelayInitial;
                
                portfolioTile = $('.portfolio-tile');
                
                portfolioClose.css('opacity','1');
                
                portfolioClose.velocity({
                    opacity:['0','1']
                }, {
                    duration:1000,
                    easing:'swing',
                    queue:false,
                    complete:function() {
                        portfolioClose.removeClass(portfolioCloseActiveString);
                
                        portfolioCloseTapRegion.removeClass(portfolioCloseActiveString);
                    }
                });
                
                portfolioTileContainerFade.stop(1,1).velocity({
                    opacity:['0', 'easeOutQuart'],
                    scale:'0.75',
                    translateY:Math.floor(($(window).height() * 0.125)) + 'px'
                }, {
                    duration:1000,
                    easing:'easeInOutQuart',
                    queue:false,
                    complete:function() {
                        $(this).removeClass(portfolioTileContainerFadeActiveString);
                    }
                });
                
                portfolioTileContainerBackground.velocity({
                    opacity:['0','0.9']
                }, {
                    duration:1000,
                    easing:'swing',
                    queue:false,
                    complete:function() {
                        $(this).removeClass(portfolioTileContainerBackgroundActiveString);
                    }
                });
                
                portfolioTileContainer.stop(1,0).velocity({
                    opacity:['0','1'],
                    scale:'0.75'
                }, {
                    duration:1000,
                    easing:'easeInOutQuart',
                    queue:false,
                    complete:function() {
                        $(this).removeClass(portfolioTileContainerActiveString);
                        portfolioTileContainer.scrollTop(0).css('opacity','0');
                        portfolioTile.css('opacity','0');
                        portfolioTileContainerInner.empty();
                    }
                });

/*                $.ajax({
                    type: 'GET',
                    url: correctURL() + '.html',
                    success: function(tiles) {

                        //if (!$('#wrapper').css('display','none')) {
                        //$('#wrapper').fadeToggle(); // hide/show toggle
                        //}

                        $('#portfolio-tile-container-outer').css('display', 'block').html(tiles, function() {});

                    },
                    cache: false,
                    complete: function() {

                        function tileFlyIn() {
                            $('.portfolio-tile')
                                .css({
                                    'top': '100px'
                                });

                            var delayNumber = 1000;
                            var i;
                            for (i = 0; i < $('.portfolio-tile').length; i++) {

                                $('.portfolio-tile').eq(i)
                                    .delay(delayNumber)
                                    .animate({
                                        opacity: '1',
                                        top: '0'
                                    }, {
                                        duration: 1000,
                                        easing: 'easeOutExpo',
                                        queue: true,
                                        complete: function() {

                                        }
                                    });
                                delayNumber = delayNumber + 100;
                            };

                            $('.portfolio-tile-header-container').fadeIn(0).css('opacity', '0').animate({
                                opacity: '1'
                            }, 1000, 'swing', function() {});
                            $('.portfolio-tile-header').css('opacity', '0').animate({
                                opacity: '1'
                            }, 1000, 'swing', function() {});
                            $('.portfolio-tile-subheader').fadeIn(0).css('opacity', '0').animate({
                                opacity: '1'
                            }, 1000, 'swing', function() {});
                        }

                        tileFlyIn();

                        var portfolioTile = $('.portfolio-tile img');




                    }
                });*/

            },
            cartoons: function() {
                
                loading.stop(1,1);
                
                cartoonsHeader.stop(1,0).velocity({
                    opacity:'0'
                }, {
                   duration:1000,
                   easing:'swing',
                   queue:false,
                   complete:function() {
                       portfolioTileHeaders.removeClass(portfolioTileHeadersActiveString);
                       cartoonsHeader.removeClass(portfolioTileHeaderActiveString);
                   }
                }).siblings(portfolioTileHeader).css('opacity','0');

                loadingTrackbar.stop(1,1).velocity({
                    width:['100vw','100vw'],
                    opacity:['0','0']
                }, {
                    duration:1000,
                    queue:false
                });
                
                portfolioTileDelay = portfolioTileDelayInitial;
                
                portfolioTile = $('.portfolio-tile');
                
                portfolioClose.css('opacity','1');
                
                portfolioClose.velocity({
                    opacity:['0','1']
                }, {
                    duration:1000,
                    easing:'swing',
                    queue:false,
                    complete:function() {
                        portfolioClose.removeClass(portfolioCloseActiveString);
                
                        portfolioCloseTapRegion.removeClass(portfolioCloseActiveString);
                    }
                });
                
                portfolioTileContainerFade.stop(1,1).velocity({
                    opacity:['0', 'easeOutQuart'],
                    scale:'0.75',
                    translateY:Math.floor(($(window).height() * 0.125)) + 'px'
                }, {
                    duration:1000,
                    easing:'easeInOutQuart',
                    queue:false,
                    complete:function() {
                        $(this).removeClass(portfolioTileContainerFadeActiveString);
                    }
                });
                
                portfolioTileContainerBackground.velocity({
                    opacity:['0','0.9']
                }, {
                    duration:1000,
                    easing:'swing',
                    queue:false,
                    complete:function() {
                        $(this).removeClass(portfolioTileContainerBackgroundActiveString);
                    }
                });
                
                portfolioTileContainer.stop(1,0).velocity({
                    opacity:['0','1'],
                    scale:'0.75'
                }, {
                    duration:1000,
                    easing:'easeInOutQuart',
                    queue:false,
                    complete:function() {
                        $(this).removeClass(portfolioTileContainerActiveString);
                        portfolioTileContainer.scrollTop(0).css('opacity','0');
                        portfolioTile.css('opacity','0');
                        portfolioTileContainerInner.empty();
                    }
                });

/*                $.ajax({
                    type: 'GET',
                    url: correctURL() + '.html',
                    success: function(tiles) {

                        //if (!$('#wrapper').css('display','none')) {
                        //$('#wrapper').fadeToggle(); // hide/show toggle
                        //}

                        $('#portfolio-tile-container-outer').css('display', 'block').html(tiles, function() {});

                    },
                    cache: false,
                    complete: function() {

                        function tileFlyIn() {
                            $('.portfolio-tile')
                                .css({
                                    'top': '100px'
                                });

                            var delayNumber = 1000;
                            var i;
                            for (i = 0; i < $('.portfolio-tile').length; i++) {

                                $('.portfolio-tile').eq(i)
                                    .delay(delayNumber)
                                    .animate({
                                        opacity: '1',
                                        top: '0'
                                    }, {
                                        duration: 1000,
                                        easing: 'easeOutExpo',
                                        queue: true,
                                        complete: function() {

                                        }
                                    });
                                delayNumber = delayNumber + 100;
                            };

                            $('.portfolio-tile-header-container').fadeIn(0).css('opacity', '0').animate({
                                opacity: '1'
                            }, 1000, 'swing', function() {});
                            $('.portfolio-tile-header').css('opacity', '0').animate({
                                opacity: '1'
                            }, 1000, 'swing', function() {});
                            $('.portfolio-tile-subheader').fadeIn(0).css('opacity', '0').animate({
                                opacity: '1'
                            }, 1000, 'swing', function() {});
                        }

                        tileFlyIn();

                        var portfolioTile = $('.portfolio-tile img');




                    }
                });*/

            },
            life: function() {
                
                loading.stop(1,1);
                
                lifeHeader.stop(1,0).velocity({
                    opacity:'0'
                }, {
                   duration:1000,
                   easing:'swing',
                   queue:false,
                   complete:function() {
                       portfolioTileHeaders.removeClass(portfolioTileHeadersActiveString);
                       lifeHeader.removeClass(portfolioTileHeaderActiveString);
                   }
                }).siblings(portfolioTileHeader).css('opacity','0');

                loadingTrackbar.stop(1,1).velocity({
                    width:['100vw','100vw'],
                    opacity:['0','0']
                }, {
                    duration:1000,
                    queue:false
                });
                
                portfolioTileDelay = portfolioTileDelayInitial;
                
                portfolioTile = $('.portfolio-tile');
                
                portfolioClose.css('opacity','1');
                
                portfolioClose.velocity({
                    opacity:['0','1']
                }, {
                    duration:1000,
                    easing:'swing',
                    queue:false,
                    complete:function() {
                        portfolioClose.removeClass(portfolioCloseActiveString);
                
                        portfolioCloseTapRegion.removeClass(portfolioCloseActiveString);
                    }
                });
                
                portfolioTileContainerFade.stop(1,1).velocity({
                    opacity:['0', 'easeOutQuart'],
                    scale:'0.75',
                    translateY:Math.floor(($(window).height() * 0.125)) + 'px'
                }, {
                    duration:1000,
                    easing:'easeInOutQuart',
                    queue:false,
                    complete:function() {
                        $(this).removeClass(portfolioTileContainerFadeActiveString);
                    }
                });
                
                portfolioTileContainerBackground.velocity({
                    opacity:['0','0.9']
                }, {
                    duration:1000,
                    easing:'swing',
                    queue:false,
                    complete:function() {
                        $(this).removeClass(portfolioTileContainerBackgroundActiveString);
                    }
                });
                
                portfolioTileContainer.stop(1,0).velocity({
                    opacity:['0','1'],
                    scale:'0.75'
                }, {
                    duration:1000,
                    easing:'easeInOutQuart',
                    queue:false,
                    complete:function() {
                        $(this).removeClass(portfolioTileContainerActiveString);
                        portfolioTileContainer.scrollTop(0).css('opacity','0');
                        portfolioTile.css('opacity','0');
                        portfolioTileContainerInner.empty();
                    }
                });

/*                $.ajax({
                    type: 'GET',
                    url: correctURL() + '.html',
                    success: function(tiles) {

                        //if (!$('#wrapper').css('display','none')) {
                        //$('#wrapper').fadeToggle(); // hide/show toggle
                        //}

                        $('#portfolio-tile-container-outer').css('display', 'block').html(tiles, function() {});

                    },
                    cache: false,
                    complete: function() {

                        function tileFlyIn() {
                            $('.portfolio-tile')
                                .css({
                                    'top': '100px'
                                });

                            var delayNumber = 1000;
                            var i;
                            for (i = 0; i < $('.portfolio-tile').length; i++) {

                                $('.portfolio-tile').eq(i)
                                    .delay(delayNumber)
                                    .animate({
                                        opacity: '1',
                                        top: '0'
                                    }, {
                                        duration: 1000,
                                        easing: 'easeOutExpo',
                                        queue: true,
                                        complete: function() {

                                        }
                                    });
                                delayNumber = delayNumber + 100;
                            };

                            $('.portfolio-tile-header-container').fadeIn(0).css('opacity', '0').animate({
                                opacity: '1'
                            }, 1000, 'swing', function() {});
                            $('.portfolio-tile-header').css('opacity', '0').animate({
                                opacity: '1'
                            }, 1000, 'swing', function() {});
                            $('.portfolio-tile-subheader').fadeIn(0).css('opacity', '0').animate({
                                opacity: '1'
                            }, 1000, 'swing', function() {});
                        }

                        tileFlyIn();

                        var portfolioTile = $('.portfolio-tile img');




                    }
                });*/

            },
            portraits: function() {
                
                loading.stop(1,1);
                
                portraitsHeader.stop(1,0).velocity({
                    opacity:'0'
                }, {
                   duration:1000,
                   easing:'swing',
                   queue:false,
                   complete:function() {
                       portfolioTileHeaders.removeClass(portfolioTileHeadersActiveString);
                       portraitsHeader.removeClass(portfolioTileHeaderActiveString);
                   }
                }).siblings(portfolioTileHeader).css('opacity','0');

                loadingTrackbar.stop(1,1).velocity({
                    width:['100vw','100vw'],
                    opacity:['0','0']
                }, {
                    duration:1000,
                    queue:false
                });
                
                portfolioTileDelay = portfolioTileDelayInitial;
                
                portfolioTile = $('.portfolio-tile');
                
                portfolioClose.css('opacity','1');
                
                portfolioClose.velocity({
                    opacity:['0','1']
                }, {
                    duration:1000,
                    easing:'swing',
                    queue:false,
                    complete:function() {
                        portfolioClose.removeClass(portfolioCloseActiveString);
                
                        portfolioCloseTapRegion.removeClass(portfolioCloseActiveString);
                    }
                });
                
                portfolioTileContainerFade.stop(1,1).velocity({
                    opacity:['0', 'easeOutQuart'],
                    scale:'0.75',
                    translateY:Math.floor(($(window).height() * 0.125)) + 'px'
                }, {
                    duration:1000,
                    easing:'easeInOutQuart',
                    queue:false,
                    complete:function() {
                        $(this).removeClass(portfolioTileContainerFadeActiveString);
                    }
                });
                
                portfolioTileContainerBackground.velocity({
                    opacity:['0','0.9']
                }, {
                    duration:1000,
                    easing:'swing',
                    queue:false,
                    complete:function() {
                        $(this).removeClass(portfolioTileContainerBackgroundActiveString);
                    }
                });
                
                portfolioTileContainer.stop(1,0).velocity({
                    opacity:['0','1'],
                    scale:'0.75'
                }, {
                    duration:1000,
                    easing:'easeInOutQuart',
                    queue:false,
                    complete:function() {
                        $(this).removeClass(portfolioTileContainerActiveString);
                        portfolioTileContainer.scrollTop(0).css('opacity','0');
                        portfolioTile.css('opacity','0');
                        portfolioTileContainerInner.empty();
                    }
                });

/*                $.ajax({
                    type: 'GET',
                    url: correctURL() + '.html',
                    success: function(tiles) {

                        //if (!$('#wrapper').css('display','none')) {
                        //$('#wrapper').fadeToggle(); // hide/show toggle
                        //}

                        $('#portfolio-tile-container-outer').css('display', 'block').html(tiles, function() {});

                    },
                    cache: false,
                    complete: function() {

                        function tileFlyIn() {
                            $('.portfolio-tile')
                                .css({
                                    'top': '100px'
                                });

                            var delayNumber = 1000;
                            var i;
                            for (i = 0; i < $('.portfolio-tile').length; i++) {

                                $('.portfolio-tile').eq(i)
                                    .delay(delayNumber)
                                    .animate({
                                        opacity: '1',
                                        top: '0'
                                    }, {
                                        duration: 1000,
                                        easing: 'easeOutExpo',
                                        queue: true,
                                        complete: function() {

                                        }
                                    });
                                delayNumber = delayNumber + 100;
                            };

                            $('.portfolio-tile-header-container').fadeIn(0).css('opacity', '0').animate({
                                opacity: '1'
                            }, 1000, 'swing', function() {});
                            $('.portfolio-tile-header').css('opacity', '0').animate({
                                opacity: '1'
                            }, 1000, 'swing', function() {});
                            $('.portfolio-tile-subheader').fadeIn(0).css('opacity', '0').animate({
                                opacity: '1'
                            }, 1000, 'swing', function() {});
                        }

                        tileFlyIn();

                        var portfolioTile = $('.portfolio-tile img');




                    }
                });*/

            }
        }
    }
}

var animations = {
    pageExpand: {
        slideUp: function() {
            pageExpand.velocity({
                translateY:pageExpandTranslateYSlideUp,
                backgroundColorRed:255,
                backgroundColorGreen:0,
                backgroundColorBlue:64,
                backgroundColorAlpha:1
            }, {
                duration:pageExpandDuration,
                easing:pageExpandEaseSlideUp,
                queue:false
            });
            pageExpandIcon.velocity({
                rotateZ:pageExpandIconRotateZSlideUp
            }, {
                duration:pageExpandDuration,
                easing:pageExpandEaseSlideUp,
                queue:false
            });
            portfolioClose.velocity({
                translateY:portfolioCloseTranslateYSlideUp
            }, {
                duration:portfolioCloseDuration,
                easing:portfolioCloseEaseSlideUp,
                queue:false
            });
            portfolioCloseIcon.velocity({
                rotateZ:portfolioCloseIconRotateZSlideUp
            }, {
                duration:portfolioCloseDuration,
                easing:portfolioCloseEaseSlideUp,
                queue:false
            });
        },
        slideDown: function() {
            pageExpand.velocity({
                translateY:pageExpandTranslateYSlideDown,
                backgroundColorRed:0,
                backgroundColorGreen:0,
                backgroundColorBlue:0,
                backgroundColorAlpha:0.3
            }, {
                duration:pageExpandDuration,
                easing:pageExpandEaseSlideDown,
                queue:false
            });
            pageExpandIcon.velocity({
                rotateZ:pageExpandIconRotateZSlideDown
            }, {
                duration:pageExpandDuration,
                easing:pageExpandEaseSlideDown,
                queue:false
            });
            portfolioClose.velocity({
                translateY:portfolioCloseTranslateYSlideDown
            }, {
                duration:portfolioCloseDuration,
                easing:portfolioCloseEaseSlideDown,
                queue:false
            });
            portfolioCloseIcon.velocity({
                rotateZ:portfolioCloseIconRotateZSlideDown
            }, {
                duration:portfolioCloseDuration,
                easing:portfolioCloseEaseSlideDown,
                queue:false
            });
        }
    },
    portfolioTiles: {
        flyIn: function() {
            
            portfolioCategory.css({
               opacity:'0' 
            });
            
            /*portfolioContentBodyParagraph.css({
               opacity:'0' 
            });*/
            
            for (i = 0; i < portfolioCategory.length; i++) {
            
            currentPortfolioCategory = portfolioCategory.eq(i);
                
            currentPortfolioCategory.velocity({
                opacity:[portfolioTileOpacityEnd,portfolioTileOpacityEnd],
                scale:[portfolioTileScaleEnd,portfolioTileScaleStart],
                /*rotateX:[portfolioTileRotateXEnd,portfolioTileRotateXStart],
                rotateZ:[portfolioTileRotateZEnd,portfolioTileRotateZStart],
                translateX:[portfolioTileTranslateXEnd,portfolioTileTranslateXStart],*/
                translateY:[portfolioCategoryTranslateYEnd,portfolioCategoryTranslateYStart]/*,
                translateZ:[portfolioTileTranslateZEnd,portfolioTileTranslateZStart]*/
            }, {
                duration:portfolioCategoryFlyInDuration,
                easing:portfolioTileFlyInEase,
                delay:portfolioTileDelay+=100,
                complete:function() {
                /*portfolioContentBodyParagraph.velocity({
                   opacity:'1'
                });*/
                }
            });
                
            currentPortfolioCategory.velocity({
                backgroundColorRed:[0,255],
                backgroundColorGreen:[0,255],
                backgroundColorBlue:[0,255],
                backgroundColorAlpha:[0.5,1],
            }, {
                duration:portfolioCategoryFlyInColorDuration,
                easing:portfolioTileFlyInColorEase,
                delay:portfolioTileDelay,
                queue:false
            });
                
            }
        },
        flyOut: function() {
            
            /*portfolioContentBodyParagraph.velocity({
               opacity:'0'
            });*/
            portfolioCategory.velocity({
                opacity:['0','1']
            }, {
                duration:portfolioTileFlyOutDuration,
                easing:portfolioTileFlyOutEase
            });
            portfolioTileDelay = portfolioTileDelayInitial;
        }
    }
}

var interactions = {
    menu: {
        about: {
            touchOn: function() {

                menuItem.eq(0).velocity({
                    borderColorAlpha: [activeMenuItemBorderAlpha,activeMenuItemBorderAlpha]
                }, {
                    duration: menuItemHoverDuration,
                    easing: menuTouchOnEase,
                    queue:false
                });

                aboutInner.velocity({
                    opacity: [activeMenuItemOpacityStart,activeMenuItemOpacityStart],
                    backgroundColor: [aboutColorPrimary,aboutColorPrimary],
                    queue:false
                }, {
                    duration: menuItemHoverDuration,
                    easing: menuTouchOnEase,
                    queue:false
                });

                menuItem.eq(1).velocity({
                    borderColorAlpha: genericMenuItemBorderAlpha
                }, {
                    duration: menuItemHoverDuration,
                    easing: menuTouchOnEase,
                    queue:false
                });

                resumeInner.velocity({
                    opacity: '0.1',
                    backgroundColor: genericColorPrimary,
                    queue:false
                }, {
                    duration: menuItemHoverDuration,
                    easing: menuTouchOnEase,
                    queue:false
                });

                menuItem.eq(2).velocity({
                    borderColorAlpha: genericMenuItemBorderAlpha
                }, {
                    duration: menuItemHoverDuration,
                    easing: menuTouchOnEase,
                    queue:false
                });

                portfolioInner.velocity({
                    opacity: '0.1',
                    backgroundColor: genericColorPrimary,
                    queue:false
                }, {
                    duration: menuItemHoverDuration,
                    easing: menuTouchOnEase,
                    queue:false
                });

                menuItem.eq(3).velocity({
                    borderColorAlpha: genericMenuItemBorderAlpha
                }, {
                    duration: menuItemHoverDuration,
                    easing: menuTouchOnEase,
                    queue:false
                });

                contactInner.velocity({
                    opacity: '0.1',
                    backgroundColor: genericColorPrimary,
                    queue:false
                }, {
                    duration: menuItemHoverDuration,
                    easing: menuTouchOnEase,
                    queue:false
                });
                
            },
            touchOff: function() {

                menuItem.eq(0).velocity({
                    borderColorAlpha: activeMenuItemBorderAlpha
                }, {
                    duration: menuItemHoverDuration,
                    easing: menuTouchOffEase,
                    queue:false
                });

                aboutInner.velocity({
                    opacity: activeMenuItemOpacityEnd,
                    backgroundColor: aboutColorPrimary
                }, {
                    duration: menuItemHoverDuration,
                    easing: menuTouchOffEase,
                    queue:false
                });

                menuItem.eq(1).velocity({
                    borderColorAlpha: [genericMenuItemBorderAlpha, genericMenuItemBorderAlpha]
                }, {
                    duration: menuItemHoverDuration,
                    easing: menuTouchOffEase,
                    queue:false
                });

                resumeInner.velocity({
                    opacity: [genericMenuItemOpacity,genericMenuItemOpacity],
                    backgroundColor: [genericColorPrimary, genericColorPrimary]
                }, {
                    duration: menuItemHoverDuration,
                    easing: menuTouchOffEase,
                    queue:false
                });

                menuItem.eq(2).velocity({
                    borderColorAlpha: [genericMenuItemBorderAlpha, genericMenuItemBorderAlpha]
                }, {
                    duration: menuItemHoverDuration,
                    easing: menuTouchOffEase,
                    queue:false
                });

                portfolioInner.velocity({
                    opacity: [genericMenuItemOpacity,genericMenuItemOpacity],
                    backgroundColor: [genericColorPrimary, genericColorPrimary]
                }, {
                    duration: menuItemHoverDuration,
                    easing: menuTouchOffEase,
                    queue:false
                });

                menuItem.eq(3).velocity({
                    borderColorAlpha: [genericMenuItemBorderAlpha, genericMenuItemBorderAlpha]
                }, {
                    duration: menuItemHoverDuration,
                    easing: menuTouchOffEase,
                    queue:false
                });

                contactInner.velocity({
                    opacity: [genericMenuItemOpacity,genericMenuItemOpacity],
                    backgroundColor: [genericColorPrimary, genericColorPrimary]
                }, {
                    duration: menuItemHoverDuration,
                    easing: menuTouchOffEase,
                    queue:false
                });
                
            }
        },
        resume: {
            touchOn: function() {

                menuItem.eq(0).velocity({
                    borderColorAlpha: genericMenuItemBorderAlpha
                }, {
                    duration: menuItemHoverDuration,
                    easing: menuTouchOnEase,
                    queue:false
                });

                aboutInner.velocity({
                    opacity: '0.1',
                    backgroundColor: genericColorPrimary,
                    queue:false
                }, {
                    duration: menuItemHoverDuration,
                    easing: menuTouchOnEase,
                    queue:false
                });

                menuItem.eq(1).velocity({
                    borderColorAlpha: [activeMenuItemBorderAlpha,activeMenuItemBorderAlpha]
                }, {
                    duration: menuItemHoverDuration,
                    easing: menuTouchOnEase,
                    queue:false
                });

                resumeInner.velocity({
                    opacity: [activeMenuItemOpacityStart,activeMenuItemOpacityStart],
                    backgroundColor: [resumeColorPrimary,resumeColorPrimary],
                    queue:false
                }, {
                    duration: menuItemHoverDuration,
                    easing: menuTouchOnEase,
                    queue:false
                });

                menuItem.eq(2).velocity({
                    borderColorAlpha: genericMenuItemBorderAlpha
                }, {
                    duration: menuItemHoverDuration,
                    easing: menuTouchOnEase,
                    queue:false
                });

                portfolioInner.velocity({
                    opacity: '0.1',
                    backgroundColor: genericColorPrimary,
                    queue:false
                }, {
                    duration: menuItemHoverDuration,
                    easing: menuTouchOnEase,
                    queue:false
                });

                menuItem.eq(3).velocity({
                    borderColorAlpha: genericMenuItemBorderAlpha
                }, {
                    duration: menuItemHoverDuration,
                    easing: menuTouchOnEase,
                    queue:false
                });

                contactInner.velocity({
                    opacity: '0.1',
                    backgroundColor: genericColorPrimary,
                    queue:false
                }, {
                    duration: menuItemHoverDuration,
                    easing: menuTouchOnEase,
                    queue:false
                });
                
            },
            touchOff: function() {

                menuItem.eq(0).velocity({
                    borderColorAlpha: [genericMenuItemBorderAlpha, genericMenuItemBorderAlpha]
                }, {
                    duration: menuItemHoverDuration,
                    easing: menuTouchOffEase,
                    queue:false
                });

                aboutInner.velocity({
                    opacity: [genericMenuItemOpacity,genericMenuItemOpacity],
                    backgroundColor: [genericColorPrimary, genericColorPrimary]
                }, {
                    duration: menuItemHoverDuration,
                    easing: menuTouchOffEase,
                    queue:false
                });

                menuItem.eq(1).velocity({
                    borderColorAlpha: activeMenuItemBorderAlpha
                }, {
                    duration: menuItemHoverDuration,
                    easing: menuTouchOffEase,
                    queue:false
                });

                resumeInner.velocity({
                    opacity: activeMenuItemOpacityEnd,
                    backgroundColor: resumeColorPrimary
                }, {
                    duration: menuItemHoverDuration,
                    easing: menuTouchOffEase,
                    queue:false
                });

                menuItem.eq(2).velocity({
                    borderColorAlpha: [genericMenuItemBorderAlpha, genericMenuItemBorderAlpha]
                }, {
                    duration: menuItemHoverDuration,
                    easing: menuTouchOffEase,
                    queue:false
                });

                portfolioInner.velocity({
                    opacity: [genericMenuItemOpacity,genericMenuItemOpacity],
                    backgroundColor: [genericColorPrimary, genericColorPrimary]
                }, {
                    duration: menuItemHoverDuration,
                    easing: menuTouchOffEase,
                    queue:false
                });

                menuItem.eq(3).velocity({
                    borderColorAlpha: [genericMenuItemBorderAlpha, genericMenuItemBorderAlpha]
                }, {
                    duration: menuItemHoverDuration,
                    easing: menuTouchOffEase,
                    queue:false
                });

                contactInner.velocity({
                    opacity: [genericMenuItemOpacity,genericMenuItemOpacity],
                    backgroundColor: [genericColorPrimary, genericColorPrimary]
                }, {
                    duration: menuItemHoverDuration,
                    easing: menuTouchOffEase,
                    queue:false
                });
                
            }
        },
        portfolio: {
            touchOn: function() {

                menuItem.eq(0).velocity({
                    borderColorAlpha: genericMenuItemBorderAlpha
                }, {
                    duration: menuItemHoverDuration,
                    easing: menuTouchOnEase,
                    queue:false
                });

                aboutInner.velocity({
                    opacity: '0.1',
                    backgroundColor: genericColorPrimary,
                    queue:false
                }, {
                    duration: menuItemHoverDuration,
                    easing: menuTouchOnEase,
                    queue:false
                });

                menuItem.eq(1).velocity({
                    borderColorAlpha: genericMenuItemBorderAlpha
                }, {
                    duration: menuItemHoverDuration,
                    easing: menuTouchOnEase,
                    queue:false
                });

                resumeInner.velocity({
                    opacity: '0.1',
                    backgroundColor: genericColorPrimary,
                    queue:false
                }, {
                    duration: menuItemHoverDuration,
                    easing: menuTouchOnEase,
                    queue:false
                });

                menuItem.eq(2).velocity({
                    borderColorAlpha: [activeMenuItemBorderAlpha,activeMenuItemBorderAlpha]
                }, {
                    duration: menuItemHoverDuration,
                    easing: menuTouchOnEase,
                    queue:false
                });

                portfolioInner.velocity({
                    opacity: [activeMenuItemOpacityStart,activeMenuItemOpacityStart],
                    backgroundColor: [portfolioColorPrimary,portfolioColorPrimary],
                    queue:false
                }, {
                    duration: menuItemHoverDuration,
                    easing: menuTouchOnEase,
                    queue:false
                });

                menuItem.eq(3).velocity({
                    borderColorAlpha: genericMenuItemBorderAlpha
                }, {
                    duration: menuItemHoverDuration,
                    easing: menuTouchOnEase,
                    queue:false
                });

                contactInner.velocity({
                    opacity: '0.1',
                    backgroundColor: genericColorPrimary,
                    queue:false
                }, {
                    duration: menuItemHoverDuration,
                    easing: menuTouchOnEase,
                    queue:false
                });
                
            },
            touchOff: function() {

                menuItem.eq(0).velocity({
                    borderColorAlpha: [genericMenuItemBorderAlpha, genericMenuItemBorderAlpha]
                }, {
                    duration: menuItemHoverDuration,
                    easing: menuTouchOffEase,
                    queue:false
                });

                aboutInner.velocity({
                    opacity: [genericMenuItemOpacity,genericMenuItemOpacity],
                    backgroundColor: [genericColorPrimary, genericColorPrimary]
                }, {
                    duration: menuItemHoverDuration,
                    easing: menuTouchOffEase,
                    queue:false
                });

                menuItem.eq(1).velocity({
                    borderColorAlpha: [genericMenuItemBorderAlpha, genericMenuItemBorderAlpha]
                }, {
                    duration: menuItemHoverDuration,
                    easing: menuTouchOffEase,
                    queue:false
                });

                resumeInner.velocity({
                    opacity: [genericMenuItemOpacity,genericMenuItemOpacity],
                    backgroundColor: [genericColorPrimary, genericColorPrimary]
                }, {
                    duration: menuItemHoverDuration,
                    easing: menuTouchOffEase,
                    queue:false
                });

                menuItem.eq(2).velocity({
                    borderColorAlpha: activeMenuItemBorderAlpha
                }, {
                    duration: menuItemHoverDuration,
                    easing: menuTouchOffEase,
                    queue:false
                });

                portfolioInner.velocity({
                    opacity: activeMenuItemOpacityEnd,
                    backgroundColor: portfolioColorPrimary
                }, {
                    duration: menuItemHoverDuration,
                    easing: menuTouchOffEase,
                    queue:false
                });

                menuItem.eq(3).velocity({
                    borderColorAlpha: [genericMenuItemBorderAlpha, genericMenuItemBorderAlpha]
                }, {
                    duration: menuItemHoverDuration,
                    easing: menuTouchOffEase,
                    queue:false
                });

                contactInner.velocity({
                    opacity: [genericMenuItemOpacity,genericMenuItemOpacity],
                    backgroundColor: [genericColorPrimary, genericColorPrimary]
                }, {
                    duration: menuItemHoverDuration,
                    easing: menuTouchOffEase,
                    queue:false
                });
                
            }
        },
        contact: {
            touchOn: function() {

                menuItem.eq(0).velocity({
                    borderColorAlpha: genericMenuItemBorderAlpha
                }, {
                    duration: menuItemHoverDuration,
                    easing: menuTouchOnEase,
                    queue:false
                });

                aboutInner.velocity({
                    opacity: '0.1',
                    backgroundColor: genericColorPrimary,
                    queue:false
                }, {
                    duration: menuItemHoverDuration,
                    easing: menuTouchOnEase,
                    queue:false
                });

                menuItem.eq(1).velocity({
                    borderColorAlpha: genericMenuItemBorderAlpha
                }, {
                    duration: menuItemHoverDuration,
                    easing: menuTouchOnEase,
                    queue:false
                });

                resumeInner.velocity({
                    opacity: '0.1',
                    backgroundColor: genericColorPrimary,
                    queue:false
                }, {
                    duration: menuItemHoverDuration,
                    easing: menuTouchOnEase,
                    queue:false
                });

                menuItem.eq(2).velocity({
                    borderColorAlpha: genericMenuItemBorderAlpha
                }, {
                    duration: menuItemHoverDuration,
                    easing: menuTouchOnEase,
                    queue:false
                });

                portfolioInner.velocity({
                    opacity: '0.1',
                    backgroundColor: genericColorPrimary,
                    queue:false
                }, {
                    duration: menuItemHoverDuration,
                    easing: menuTouchOnEase,
                    queue:false
                });

                menuItem.eq(3).velocity({
                    borderColorAlpha: [activeMenuItemBorderAlpha,activeMenuItemBorderAlpha]
                }, {
                    duration: menuItemHoverDuration,
                    easing: menuTouchOnEase,
                    queue:false
                });

                contactInner.velocity({
                    opacity: [activeMenuItemOpacityStart,activeMenuItemOpacityStart],
                    backgroundColor: [contactColorPrimary,contactColorPrimary],
                    queue:false
                }, {
                    duration: menuItemHoverDuration,
                    easing: menuTouchOnEase,
                    queue:false
                });
                
            },
            touchOff: function() {

                menuItem.eq(0).velocity({
                    borderColorAlpha: [genericMenuItemBorderAlpha, genericMenuItemBorderAlpha]
                }, {
                    duration: menuItemHoverDuration,
                    easing: menuTouchOffEase,
                    queue:false
                });

                aboutInner.velocity({
                    opacity: [genericMenuItemOpacity,genericMenuItemOpacity],
                    backgroundColor: [genericColorPrimary, genericColorPrimary]
                }, {
                    duration: menuItemHoverDuration,
                    easing: menuTouchOffEase,
                    queue:false
                });

                menuItem.eq(1).velocity({
                    borderColorAlpha: [genericMenuItemBorderAlpha, genericMenuItemBorderAlpha]
                }, {
                    duration: menuItemHoverDuration,
                    easing: menuTouchOffEase,
                    queue:false
                });

                resumeInner.velocity({
                    opacity: [genericMenuItemOpacity,genericMenuItemOpacity],
                    backgroundColor: [genericColorPrimary, genericColorPrimary]
                }, {
                    duration: menuItemHoverDuration,
                    easing: menuTouchOffEase,
                    queue:false
                });

                menuItem.eq(2).velocity({
                    borderColorAlpha: [genericMenuItemBorderAlpha, genericMenuItemBorderAlpha]
                }, {
                    duration: menuItemHoverDuration,
                    easing: menuTouchOffEase,
                    queue:false
                });

                portfolioInner.velocity({
                    opacity: [genericMenuItemOpacity,genericMenuItemOpacity],
                    backgroundColor: [genericColorPrimary, genericColorPrimary]
                }, {
                    duration: menuItemHoverDuration,
                    easing: menuTouchOffEase,
                    queue:false
                });

                menuItem.eq(3).velocity({
                    borderColorAlpha: activeMenuItemBorderAlpha
                }, {
                    duration: menuItemHoverDuration,
                    easing: menuTouchOffEase,
                    queue:false
                });

                contactInner.velocity({
                    opacity: activeMenuItemOpacityEnd,
                    backgroundColor: contactColorPrimary
                }, {
                    duration: menuItemHoverDuration,
                    easing: menuTouchOffEase,
                    queue:false
                });
                
            }
        }
    },
    portfolioTiles: {
        touchOn: function() {
            
            currentPortfolioCategory.addClass(activePortfolioCategoryString);
                
            currentPortfolioCategory.velocity({
                scale:portfolioTileTouchOnScaleEnd
            }, {
                duration:portfolioTileTouchOnScaleDuration,
                easing:portfolioTileTouchOnScaleEase,
                queue:false
            }).find(currentPortfolioCategoryText).velocity({
                color:'#000000'
            }, {
                duration:portfolioTileTouchOnDuration,
                easing:portfolioTileTouchOnEase,
                queue:false
            });
                
            currentPortfolioCategory.velocity({
                backgroundColorRed:255,
                backgroundColorGreen:255,
                backgroundColorBlue:255,
                backgroundColorAlpha:1
            }, {
                duration:portfolioTileTouchOnDuration,
                easing:portfolioTileTouchOnEase,
                queue:false
            }).siblings(activePortfolioCategory).removeClass(activePortfolioCategoryString);
            
        },
        touchOff: function() {
                
            currentPortfolioCategory.velocity({
                scale:[portfolioTileTouchOnScaleStart,portfolioTileTouchOnScaleEnd]
            }, {
                duration:portfolioTileTouchOffScaleDuration,
                easing:portfolioTileTouchOffScaleEase,
                queue:false
            }).find(portfolioCategoryText).velocity({
                color:['#ffffff','#000000']
            }, {
                duration:portfolioTileTouchOffDuration,
                easing:portfolioTileTouchOffEase,
                queue:false
            });
                
            currentPortfolioCategory.velocity({
                backgroundColorRed:[0,255],
                backgroundColorGreen:[0,255],
                backgroundColorBlue:[0,255],
                backgroundColorAlpha:[0.5,1]
            }, {
                duration:portfolioTileTouchOffDuration,
                easing:portfolioTileTouchOffEase,
                queue:false
            });
            
        }
    }
}

function objectInitializer() {
    transitions;
    animations;
    interactions;
}