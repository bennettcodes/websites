$(window).bind('load', function () {

    // shim layer with setTimeout fallback
    window.requestAnimFrame = (function () {
        return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            function (callback) {
                window.setTimeout(callback, 1000 / 60);
            };
    })();

    const sarafiZoomPrevention = function () {
        document.addEventListener("touchstart", function () {}, true);
        document.documentElement.addEventListener('touchstart', function (event) {
            if (event.touches.length > 1) {
                event.preventDefault();
            }
        }, false);
        var lastTouchEnd = 0;
        document.documentElement.addEventListener('touchend', function (event) {
            var now = (new Date()).getTime();
            if (now - lastTouchEnd <= 300) {
                event.preventDefault();
            }
            lastTouchEnd = now;
        }, false);
    }

    sarafiZoomPrevention();

    const raf = function (entry) {
        window.requestAnimFrame(entry);
    };
    const caf = function (entry) {
        window.cancelAnimationFrame(entry);
    };
    const random = function (min, max) {
        max = max + 1;
        return Math.floor(Math.random() * (max - min) + min);
    }
    var app = {
        animateBarText: function () {
            for (app.sbtci = 0; app.sbtci < app.skillBarTextContainer.length; app.sbtci++) {
                app.skillBarWidth = app.skillBar.width();
                app.skillBarWidthHalf = app.skillBarWidth / 2;
                app.currentSkillBarTextContainer = app.skillBarTextContainer.eq(app.sbtci);
                app.currentSkillBarTextContainerWidth = app.currentSkillBarTextContainer.outerWidth();
                app.currentSkillBarTextContainerWidthHalf = app.currentSkillBarTextContainerWidth / 2;
                app.currentSkillBarTextContainerLeft = app.skillBarWidthHalf - app.currentSkillBarTextContainerWidthHalf;

                app.skillbarTextTl.set(app.currentSkillBarTextContainer, {
                    left: app.currentSkillBarTextContainerLeft,
                    opacity: 1,
                    scaleX: 0
                });

            }
            if (app.currentDirection === 'neutral') {
                app.skillbarTextTl.staggerTo(app.skillBarTextContainer, app.skillBarDuration, {
                    scaleX: 1,
                    ease: app.skillBarTextEase,
                    delay: app.skillBarTextContainerDelayNeutral
                }, app.skillBarTextStaggerValue);
            } else {
                app.skillbarTextTl.staggerTo(app.skillBarTextContainer, app.skillBarDuration, {
                    scaleX: 1,
                    ease: app.skillBarTextEase,
                    delay: app.skillBarTextContainerDelay
                }, app.skillBarTextStaggerValue);
            }
        },
        init: function () {
            this.cacheDOM();
            this.style();
            this.menuActions.touchstart('vmouseover');
            this.menuActions.touchend('vmouseout');
            this.menuActions.click('vclick');
            this.menuItemActions.touchstart('vmouseover');
            this.menuItemActions.touchend('vmouseout');
            this.menuItemActions.click('vclick');
        },
        cacheDOM: function () {

            this.isChrome = navigator.userAgent.match(/(iPad|iPhone);.*CPU.*OS 7_\d/i);
            this.isSafari = ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)));
            this.currentUA;

            this.windowInnerHeight;
            this.windowInnerHeightMult;

            this.bodyHTML = $('body, html');
            this.allText = $('p, a, li, h1, h2, h3, h4, h5, h6, span');
            this.cacheImage = $('.cache-img');
            this.container = $('#container');
            this.c = $('#c');
            this.header = $('#header');
            this.headerDone = true;
            this.headerHeight;
            this.headerDivider = $("#header-divider");
            this.currentBottom = 0;

            this.substrings = {
                codepen: 'codepen'
            };

            this.menuActive = false;
            this.menuIsUp = false;

            this.clickedItem;

            this.menu = $('#menu');
            this.menuTapRegion = $('#menu-tap-region');
            this.menuDivider = $("#menu-divider");

            this.menuDividerBackgroundColor = 'rgba(255,255,255,0.3)';

            this.menuPlus = $('#menu-plus');
            this.plusBeingPressed = false;
            this.menuBackground = $('.menu-bg');
            this.menuBackgroundTouchstart = $('#menu-bg-touchstart');
            this.menuBackgroundClick = $('#menu-bg-click');

            this.menuBackgroundTouchstartBackgroundBehindHeroInactive = 'rgba(255,255,255,0)';
            this.menuBackgroundTouchstartBackgroundBehindHeroActive = 'rgba(255,255,255,1)';

            this.menuBackgroundTouchstartBackgroundPastHeroInactive = 'rgba(200,200,200,0)';
            this.menuBackgroundTouchstartBackgroundPastHeroActive = 'rgba(200,200,200,1)';

            this.menuItems = $("#menu-items");
            this.menuItemsBackground = $("#menu-items-bg");
            this.menuItem = $(".menu-item");
            this.menuItemTapRegion = $(".menu-item-tap-region");
            this.menuItemDivider = $(".menu-item-divider");
            this.menuItemStagger = $('.menu-item-stagger');
            this.sectionStagger = $('.section-stagger');
            this.menuItemBackground = $(".menu-item-bg");
            this.menuItemTitleContainer = $(".menu-item-title-container");
            this.menuItemTitle = $(".menu-item-title");

            this.currentSectionStagger;
            this.currentSectionStaggerHeight;
            this.currentSectionStaggerOffsetTop;

            //            this.menuItemHeight = ($(window).innerHeight() - this.header.height()) * 0.25;
            this.menuItemHeight = this.header.height();

            this.menuItemTouched = false;

            this.menuItemC = $('.menu-item-c');

            this.heroCanvasErased = false;
            this.canvasesErased = false;

            this.cBlur = 0;

            this.particleNum = 1;

            this.c0;
            this.c0x;
            this.c0w;
            this.c0h;
            this.c0Render;
            this.c0Unrender;
            this.c0WasErased = false;
            this.c0Props = {
                // RED
                hue: {
                    min: 5,
                    max: 50
                },
                sat: {
                    min: 100,
                    max: 100
                },
                light: {
                    min: 10,
                    max: 80
                },
                particleNum: app.particleNum
            };

            this.c1;
            this.c1x;
            this.c1w;
            this.c1h;
            this.c1Render;
            this.c1Unrender;
            this.c1WasErased = false;
            this.c1Props = {
                // GREEN
                hue: {
                    min: 91,
                    max: 180
                },
                sat: {
                    min: 100,
                    max: 100
                },
                light: {
                    min: 10,
                    max: 80
                },
                particleNum: app.particleNum
            };

            this.c2;
            this.c2x;
            this.c2w;
            this.c2h;
            this.c2Render;
            this.c2Unrender;
            this.c2WasErased = false;
            this.c2Props = {
                // BLUE
                hue: {
                    min: 181,
                    max: 270
                },
                sat: {
                    min: 100,
                    max: 100
                },
                light: {
                    min: 10,
                    max: 80
                },
                particleNum: app.particleNum
            };

            this.c3;
            this.c3x;
            this.c3w;
            this.c3h;
            this.c3Render;
            this.c3Unrender;
            this.c3WasErased = false;
            this.c3Props = {
                // PURPLE
                hue: {
                    min: 271,
                    max: 360
                },
                sat: {
                    min: 100,
                    max: 100
                },
                light: {
                    min: 10,
                    max: 80
                },
                particleNum: app.particleNum
            };

            this.contactDetails = $('#contact-details');
            this.contactDetailsHeight = window.innerHeight - (app.header.height() + (app.menuItem.length * app.menuItemHeight))

            this.contactDetailsItems = $('#contact-details-items');
            this.contactDetailsItem = $('.contact-details-item');
            this.contactLink = $('.contact-link');
            this.phone = $('#phone');
            this.email = $('#email');

            this.linkGoing = false;

            this.c4;
            this.c4x;
            this.c4w;
            this.c4h;
            this.c4Render;
            this.c4Unrender;
            this.c4WasErased = false;
            this.c4Props = {
                // GREY
                hue: {
                    min: 271,
                    max: 360
                },
                sat: {
                    min: 0,
                    max: 0
                },
                light: {
                    min: 0,
                    max: 50
                },
                particleNum: app.particleNum
            };

            this.particleLight = 50;

            this.menuItemStaggerHeight = this.menuItemHeight;

            this.menuItemY = 0;
            this.menuItemDividerFirstY = this.menuItemHeight;
            this.menuItemDividerY = this.menuItemHeight;

            this.menuItemTl = new TimelineMax();

            this.images = $('img');
            this.fromTopOld = window.pageYOffset;
            this.fromTopNew = window.pageYOffset;
            this.fromTopNewWithParallaxDelay;
            this.topTracker;
            this.bottomTracker;
            this.scrolled = false;

            this.fromWhere = 'left';
            this.fromWhereSmall = 'bottom';
            this.toWhere = 'top';
            this.toWhereSmall = 'neutral';

            this.overlayHeight;

            this.headerDuration = 1;
            this.headerEase = Expo.easeOut;

            this.sectionStaggerDuration = 1;
            this.sectionStaggerEase = Expo.easeOut;
            this.sectionStaggerOpacityEase = Quad.easeOut;
            this.sectionStaggerValue = 0.125;
            this.sectionStaggerDelay = 0;

            this.skillBarsDuration = 1;
            this.skillBarsEase = Circ.easeInOut;
            this.skillBarsY = 50;
            this.skillBarsZ = 300;

            this.skillBarDuration = 1;
            this.skillBarEase = Quart.easeOut;
            this.skillBarExpandEase = Quart.easeIn;
            this.skillBarFillExpandEase = Expo.easeOut;
            this.skillBarTextEase = Expo.easeOut;
            this.skillBarExpandDelay = 0.5;
            this.skillBarMiddleEase = Back.easeInOut;
            this.skillBarStaggerValueStart = 0;
            this.skillBarStaggerValue = 0;
            this.skillBarTextStaggerValue = 0.1;

            this.introAtZeroDuration = 1;
            this.introPastZeroDuration = 1;

            this.initials = $('#initials');
            this.initialContainer = $('.initial-container');
            this.initial = $('.initial');
            this.firstInitial = $('#first-initial');
            this.middleInitial = $('#middle-initial');
            this.lastInitial = $('#last-initial');

            this.initialsSmall = $('#initials-small');
            this.initialSmallContainer = $('.initial-small-container');
            this.initialSmall = $('.initial-small');
            this.currentInitialSmall;
            this.currentInitialSmallWidth;
            this.currentInitialSmallHeight;
            this.firstInitialSmall = $('#first-initial-small');
            this.middleInitialSmall = $('#middle-initial-small');
            this.lastInitialSmall = $('#last-initial-small');

            this.menuDuration = 1;
            this.menuClickDuration = 1;
            this.menuPlusEase = this.headerEase;
            this.menuPlusScaleEase = this.headerEase;
            this.menuBackgroundTouchstartEase = this.headerEase;
            this.menuBackgroundClickEase = this.headerEase;
            this.menuBackgroundClickColorEase = Quart.easeIn;
            this.menuItemDuration = 0.5;
            this.menuItemDelay = this.menuItemDuration * 0.75;
            this.menuItemEase = Expo.easeOut;
            this.menuItemStaggerEaseStart = Expo.easeOut;
            this.menuItemStaggerContactItemEaseStart = Linear.easeNone;
            this.menuItemStaggerEaseEnd = Back.easeIn;
            this.menuItemStaggerValue = 0.1;

            this.menuItemTouchDuration = 0.5;
            this.menuItemTouchEase = Expo.easeOut;

            this.linkDuration = 0.5;
            this.linkEase = Expo.easeOut;
            this.linkOverlayEase = Linear.easeNone;

            this.initialSmallStagger = 0.05;
            this.initialSmallEase = Elastic.easeOut;
            this.initialSmallLastEase = this.initialSmallEase;

            this.initialsSmallOffsetTop = null;

            this.topAtZero = true;
            this.topPastZero = false;

            this.overlay = $('#overlay');

            this.hero = $('#hero');
            this.heroContent = $('#hero-content');
            this.hc = document.getElementById('hero-c');

            this.heroChecker;
            this.heroContentParallaxY;
            this.heroContentParallaxOpacity;

            this.pastHero = false;

            this.hcx = this.hc.getContext('2d');
            this.hcw;
            this.hch;

            this.heroImage = $('#hero-img');
            this.heroImageLayer = $('.hero-img-layer');
            this.heroImageLayerForegroundNear = $('#hero-img-layer-fg-near');
            this.heroImageLayerForegroundNearer = $('#hero-img-layer-fg-nearer');
            this.heroImageLayerForegroundNearest = $('#hero-img-layer-fg-nearest');
            this.heroImageLayerMiddleground = $('#hero-img-layer-mg');
            this.heroImageLayerBackground = $('#hero-img-layer-bg');
            this.heroBackground = $('#hero-bg');

            this.heroImageOpacity = 1;
            this.heroImageOpacityChange = 0;
            this.heroImageParallaxDelay = 0.25;

            this.sections = $('#sections');
            this.section = $('.section');
            this.currentSectionTrigger;
            this.currentSectionStaggerTrigger;
            this.currentDirection;
            this.skillBarsContainer = $('#skill-bars-container');
            this.skillBars = $('#skill-bars');
            this.skillBar = $('.skill-bar');
            this.skillBarWidth = this.skillBar.width();
            this.skillBarWidthHalf = this.skillBarWidth / 2;
            this.skillBar0 = this.skillBar.eq(0);
            this.skillBar1 = this.skillBar.eq(1);
            this.skillBar2 = this.skillBar.eq(2);
            this.skillBar0Y;
            this.skillBar0Height;
            this.skillBar1Y;
            this.skillBar1Height;
            this.skillBar2Y;
            this.skillBar2Height;
            this.skillbarTl = new TimelineMax();

            this.skillBarTextContainer = $('.skill-bar-text-container');
            this.currentSkillBarTextContainer;
            this.currentSkillBarTextContainerWidth;
            this.currentSkillBarTextContainerWidthHalf;
            this.currentSkillBarTextContainerLeft;
            this.skillBarTextContainerDelayNeutral = this.skillBarExpandDelay + 1.05;
            this.skillBarTextContainerDelay = this.skillBarExpandDelay + 0.8;
            this.skillBarText = $('.skill-bar-text');
            this.skillBarText0 = this.skillBarText.eq(0);
            this.skillBarText1 = this.skillBarText.eq(1);
            this.skillBarText2 = this.skillBarText.eq(2);
            this.skillbarTextTl = new TimelineMax();

            this.skillBarFill = $('.skill-bar-fill');
            this.skillBarFill0 = this.skillBarFill.eq(0);
            this.skillBarFill1 = this.skillBarFill.eq(1);
            this.skillBarFill2 = this.skillBarFill.eq(2);
            this.skillbarFillTl = new TimelineMax();
            this.skillBarFillDelay = this.skillBarExpandDelay;
            this.skillBarFillDelay1Neutral = this.skillBarFillDelay + 0.75;
            this.skillBarFillDelay2Neutral = this.skillBarFillDelay + 0.85;
            this.skillBarFillDelay3Neutral = this.skillBarFillDelay + 0.95;
            this.skillBarFillDelay1 = this.skillBarFillDelay + 0.5;
            this.skillBarFillDelay2 = this.skillBarFillDelay + 0.6;
            this.skillBarFillDelay3 = this.skillBarFillDelay + 0.7;
            this.feBar = $('#fe-bar');
            this.feBarFill = $('#fe-bar-fill');
            this.feBarFillPercentage = 85;
            this.feBarFillDecimal = this.feBarFillPercentage * 0.01;
            this.beBarFillPercentage = 50;
            this.beBarFillDecimal = this.beBarFillPercentage * 0.01;
            this.dBarFillPercentage = 75;
            this.dBarFillDecimal = this.dBarFillPercentage * 0.01;
            this.beBar = $('#fe-bar');
            this.beBarFill = $('#fe-bar-fill');
            this.deBar = $('#fe-bar');
            this.deBarFill = $('#fe-bar-fill');

            this.sectionInner = $('.section-inner');

            this.sectionTriggerOffset = window.innerHeight * 0.3;
            this.triggerDirectionOffset = window.innerHeight * 0.3;

            this.sectionStaggerHit = [];
            this.sectionStaggerOffsets = [];
            this.sectionStaggerDirection = [];
            this.visibleStaggers = [];
            this.visibleStaggerGathered = [];

            this.about = $('#about');
            this.aboutSectionStagger = this.about.find('.section-stagger');
            this.aboutHeight;
            this.aboutParams;
            this.aboutFromTop = null;
            this.resume = $('#resume');
            this.resumeSectionStagger = this.resume.find('.section-stagger');
            this.resumeHeight;
            this.resumeParams;
            this.resumeFromTop = null;
            this.work = $('#work');
            this.workSectionStagger = this.work.find('.section-stagger');
            this.workHeight;
            this.workParams;
            this.workStaggerParams;
            this.workFromTop = null;
            this.aboveStaggerParams;
            this.belowStaggerParams;

            this.myPic = this.about.find('.section-bg');
            this.myPicSatPercent = 0;
            this.myPicBrightnessPercent = 0;
            this.newSat;
            this.newBrightness;

            this.aboutTriggered = false;
            this.resumeTriggered = false;
            this.workTriggered = false;

            this.sectionBackgroundContainer = $('.section-bg-container');
            this.sectionBackground = $('.section-bg');
            this.currentSectionBackgroundContainer;
            this.currentSectionStaggerHeightParallax;
            this.currentY;
            this.currentSbgY;
            this.skillBarsY;
            this.isi;
            this.sbtci;
            this.ssi;
            this.bgci;
            this.shi;

            this.colors = {
                transparent: 'transparent',
                black: {
                    full: 'rgba(0,0,0,1)',
                    empty: 'rgba(0,0,0,0)'
                },
                white: {
                    full: 'rgba(255,255,255,1)',
                    empty: 'rgba(255,255,255,0)'
                },
                red: {
                    full: 'rgba(255,0,0,1)',
                    empty: 'rgba(255,0,0,0)'
                }
            };

            this.sectionBackgroundContainerYOffsetInitial = this.sectionBackgroundContainer.eq(0).height() - this.section.eq(0).height();
            this.sectionBackgroundContainerYOffset = 0;

            this.sectionBackgroundContainerY = 0;

            this.sectionHeight = [];
            this.sectionHeightQuarter = [];

            this.sectionHeader = $('.section h4');

            this.hue = 0;
            this.yInit;

            this.counter = 0;
            this.counterChange = 0.5;
        },
        canvasDraw: function (canvas, context, canvasWidth, canvasHeight, canvasDrawFunction, canvasEraseFunction, canvasWasErased, canvasProps) {

            app.canvasesErased = false;

            var
                Particle,
                cProps = canvasProps,
                particles = {},
                particleIndex = 0,
                particleNum = cProps.particleNum,
                c = canvas,
                cx = context,
                w = canvasWidth,
                h = canvasHeight,
                renderParticles = canvasDrawFunction,
                unrenderParticles = canvasEraseFunction,
                cWasErased = canvasWasErased,
                particlesLoaded = false;

            cx.fillStyle = 'rgba(0,0,0,1)';
            cx.fillRect(0, 0, w, h);

            Particle = function () {
                this.w = random(10, 30);
                this.h = this.w;
                this.lw = this.w;

                this.r = this.w / 2;
                this.rChange = -0.1;
                this.rEnd = 0;
                this.firstRDone = false;
                this.secondRDone = false;

                this.x = random(0, w - this.w);
                this.rx = random(0, w - this.r);
                this.y = random(0, h * 1.5);
                this.ry = random(h + this.r, h + (this.r * 1));
                this.vy = random(1, 5) * -0.1;
                this.gravity = -0.5;

                this.hue = random(cProps.hue.min, cProps.hue.max);
                this.sat = random(cProps.sat.min, cProps.sat.max);
                //                this.light = app.particleLight;
                this.light = random(cProps.light.min, cProps.light.max);

                this.opacity = random(1,6) * 0.05;
                this.opacityChange = 0.01;
                this.opacityEnd = random(1, 5) * 0.1;
                this.opacityEndOne = random(1, 3) * 0.1;
                this.opacityEndTwo = 0;
                
                this.counter = 0;
                this.counterChange = random(5,10) * 0.01;
                this.counterMult = random(0,5) * 0.1;
                this.isSin = random(1,2) === 1;

                particles[particleIndex] = this;
                this.id = particleIndex;
                particleIndex++;
            }

            Particle.prototype.draw = function () {
                this.counter += this.counterChange;
                
                cx.beginPath();
                cx.fillStyle = `hsla(${this.hue},${this.sat}%,${this.light}%,${this.opacity})`;
                cx.arc(this.rx, this.ry, this.r, 0, Math.PI * 2);
                cx.fill();

                if (this.isSin) {
                    this.rx += Math.sin(this.counter) * this.counterMult;
                } else {
                    this.rx += Math.cos(this.counter) * this.counterMult;
                }
                this.ry += this.vy;
                this.r += this.rChange;

                if (this.r <= this.rEnd) {
                    delete particles[this.id];
                }
            }

            renderParticles = function () {
                if (!app.canvasesErased) {
                    cx.globalCompositeOperation = 'source-over';
                    cx.fillStyle = 'rgba(0,0,0,0.03)';
                    cx.fillRect(0, 0, w, h);

                    if (!particlesLoaded) {
                        //                    particlesLoaded = true;
                        for (var i = 0; i < particleNum; i++) {
                            new Particle();
                        }
                    }

//                                        cx.globalCompositeOperation = 'lighter';
                    for (var i in particles) {
                        particles[i].draw();
                    }
                    raf(renderParticles);
                } else {
                    cx.fillStyle = 'rgba(0,0,0,1)';
                    cx.clearRect(0, 0, w, h);
                }
            }

            raf(renderParticles);
        },
        canvasErase: function () {
            app.canvasesErased = true;
        },
        changeInitialTrigger: function () {
            app.initialTriggered = !app.initialTriggered;
        },
        checkPageTop: function () {
            if ((app.fromTopNew === 0) && (!app.topAtZero)) {
                app.topAtZero = true;
                app.topPastZero = false;
            }
            if ((app.fromTopNew > 0) && (!app.topPastZero)) {
                app.topAtZero = false;
                app.topPastZero = true;
            }
        },
        checkPastHero: function () {
            if (app.fromTopNew > app.heroChecker) {
                app.pastHero = true;
                app.transitions.header.hero.below();
                app.topAtZero = false;
                app.topPastZero = true;
            } else {
                app.pastHero = false;
                app.transitions.header.hero.above();
            }
        },
        checkPastHeroCanvas: function () {
            if ((app.heroImageOpacity + app.heroImageOpacityChange <= 0) || (app.menuIsUp)) {
                app.heroCanvasErased = true;
            } else {
                app.heroCanvasErased = false;
            }
        },
        enableMenuItems: function () {
            TweenMax.set(app.menuItem, {
                pointerEvents: 'auto'
            });
            TweenMax.set(app.contactLink, {
                pointerEvents: 'auto'
            });
        },
        heroCanvasDraw: function () {

            var
                Particle,
                particles = {},
                particleIndex = 0,
                particleNum = 1,
                c = app.hc,
                cx = app.hcx,
                w = app.hcw,
                h = app.hch,
                particlesLoaded = false;

            cx.fillStyle = 'rgba(255,255,255,1)';
            cx.fillRect(0, 0, w, h);

            Particle = function () {
                this.w = 0;
                this.h = this.w;
                this.lw = this.w;
                this.lwChange = 0.1;
                this.lwChangeMult = 1.1;

                this.r = this.w / 2;
                this.rChange = -0.1;
                this.rChangeMult = 1.1;
                this.rEnd = 0;

                this.q0 = random(1, 2) === 1;
                this.q1 = random(1, 6) === 1;
                this.q2 = random(1, 18) === 1;
                this.q3 = random(1, 54) === 1;
                this.q4 = random(1, 162) === 1;

                this.q0y = random(h * 0.0, h * 0.2);
                this.q1y = random(h * 0.2, h * 0.4);
                this.q2y = random(h * 0.4, h * 0.6);
                this.q3y = random(h * 0.6, h * 0.8);
                this.q4y = random(h * 0.8, h);

                this.xInit = random(w * 0.62, w * 0.64);
                this.x = this.xInit;
                this.vx = 5;
                this.rx = random(0, w - this.r);
                this.yInit = random(h * 0.49 - (app.header.height() * 0.5), h * 0.51 - (app.header.height() * 0.5));
                this.y = this.yInit;
                this.ry = random(0, h - this.r);
                this.vy = random(1, 7) * -0.1;
                this.gravity = -0.5;

                this.hue = app.hue;
                this.sat = 100;
                this.light = 50;
                this.lightEnd = 100;
                this.lightChange = this.light * 0.002;
                this.opacity = 1;
                this.opacityEndOne = 1;
                this.opacityEndTwo = 0;
                this.opacityChange = this.opacityEndOne * 0.01;

                //                switch (true) {
                //                case this.q4:
                //                    this.ry = this.q4y;
                //                    break;
                //                case this.q3:
                //                    this.ry = this.q3y;
                //                    break;
                //                case this.q2:
                //                    this.ry = this.q2y;
                //                    break;
                //                case this.q1:
                //                    this.ry = this.q1y;
                //                    break;
                //                case this.q0:
                //                    this.ry = this.q0y;
                //                    break;
                //                default:
                //                    this.ry = 0 - h;
                //                    break;
                //                }

                this.counter = 1;
                this.neutral = random(1, 2) === 1;
                this.counterChange = this.vx * 0.01;

                particles[particleIndex] = this;
                this.id = particleIndex;
                particleIndex++;
            }

            Particle.prototype.draw = function () {
                cx.beginPath();
                cx.strokeStyle = `hsla(${this.hue},${this.sat}%,${this.light}%,${this.opacity})`;
                cx.lineWidth = this.lw;
                cx.moveTo(this.x, this.y);

                //                this.x += this.vx;

                //                if (this.neutral) {
                //                    this.y += Math.sin(this.counter) * 3;
                //                } else {
                //                    this.y += Math.sin(this.counter) * 3;
                //                }
                this.lw += this.lwChange;
                //                this.lwChange *= this.lwChangeMult;
                this.x += Math.cos(this.counter) * 3;
                this.y += Math.sin(this.counter) * 3;
                this.rChange *= this.rChangeMult;
                //                this.opacity += this.opacityChange;
                //                if (this.opacity > this.opacityEndOne) {
                //                    this.opacityChange *= -1;
                //                    this.opacity = this.opacityEndOne;
                //                }
                //                if (this.opacity <= this.opacityEndTwo) {
                //                    delete particles[this.id];
                //                }

                this.counter += this.counterChange;
                if (this.x > w) {
                    delete particles[this.id];
                }
                cx.lineTo(this.x, this.y);
                cx.stroke();
            }

            renderHeroParticles = function () {
                if (!app.heroCanvasErased) {
                    cx.globalCompositeOperation = 'source-over';
                    cx.fillStyle = 'rgba(255,255,255,0)';
                    cx.fillRect(0, 0, w, h);

                    if (!particlesLoaded) {
                        //                    particlesLoaded = true;
                        for (var i = 0; i < particleNum; i++) {
                            new Particle();
                        }
                    }

                    //                                        cx.globalCompositeOperation = 'darker';
                    for (var i in particles) {
                        particles[i].draw();
                    }
                }
                raf(renderHeroParticles);
            }

            raf(renderHeroParticles);
        },
        heroCanvasErase: function () {

            app.heroCanvasErased = true;
            //            caf(unrenderParticles);
        },
        initialSmallActions: {
            initial: function (fromWhere) {
                switch (fromWhere) {
                case 'left':
                    for (app.isi = 0; app.isi < app.initialSmall.length; app.isi++) {
                        app.currentInitialSmall = app.initialSmall.eq(app.isi);
                        app.currentInitialSmallWidth = app.currentInitialSmall.width();
                        TweenMax.set(current, {
                            x: `-${app.currentInitialSmallWidth}`,
                            y: 'initial'
                        });
                    }
                    break;
                case 'right':
                    for (app.isi = 0; app.isi < app.initialSmall.length; app.isi++) {
                        app.currentInitialSmall = app.initialSmall.eq(app.isi);
                        app.currentInitialSmallWidth = app.currentInitialSmall.width();
                        TweenMax.set(app.currentInitialSmall, {
                            x: app.currentInitialSmallWidth,
                            y: 'initial'
                        });
                    }
                    break;
                case 'top':
                    for (app.isi = 0; app.isi < app.initialSmall.length; app.isi++) {
                        app.currentInitialSmall = app.initialSmall.eq(app.isi);
                        app.currentInitialSmallHeight = app.currentInitialSmall.height();
                        TweenMax.set(app.currentInitialSmall, {
                            x: 'initial',
                            y: `-${app.currentInitialSmallHeight}`
                        });
                    }
                    break;
                case 'bottom':
                    for (app.isi = 0; app.isi < app.initialSmall.length; app.isi++) {
                        app.currentInitialSmall = app.initialSmall.eq(app.isi);
                        app.currentInitialSmallHeight = app.currentInitialSmall.height();
                        TweenMax.set(app.currentInitialSmall, {
                            x: 'initial',
                            y: app.currentInitialSmallHeight
                        });
                    }
                    break;
                }
                app.changeInitialTrigger();
            },
            enter: function () {
                TweenMax.set(app.initialSmall, {
                    transformOrigin: 'center center'
                });
                TweenMax.staggerFrom(app.initialSmall, app.introAtZeroDuration, {
                    scale: 0,
                    ease: app.initialSmallEase,
                    delay: 0.25
                }, app.initialSmallStagger);
            },
            leave: function (toWhere) {
                switch (toWhere) {
                case 'left':
                    TweenMax.staggerTo(app.initialSmall, app.introPastZeroDuration, {
                        cycle: {
                            x: function (i) {
                                return `-${app.initialSmall.eq(i).width()}`;
                            }
                        },
                        ease: Expo.easeOut
                    }, 0.05);
                    break;
                case 'right':
                    TweenMax.staggerTo(app.initialSmall, app.introPastZeroDuration, {
                        cycle: {
                            x: function (i) {
                                return `${app.initialSmall.eq(i).width()}`;
                            }
                        },
                        ease: Expo.easeOut
                    }, -0.05);
                    break;
                case 'top':
                    TweenMax.staggerTo(app.initialSmall, app.introPastZeroDuration, {
                        cycle: {
                            y: function (i) {
                                return `-${app.initialSmall.eq(i).height()}`;
                            }
                        },
                        ease: Expo.easeOut
                    }, 0.05);
                    break;
                case 'bottom':
                    TweenMax.staggerTo(app.initialSmall, app.introPastZeroDuration, {
                        cycle: {
                            y: function (i) {
                                return `${app.initialSmall.eq(i).height()}`;
                            }
                        },
                        ease: Expo.easeOut
                    }, -0.05);
                    break;
                case 'neutral':
                    TweenMax.to(app.initialSmall, app.introPastZeroDuration, {
                        //                        opacity: 0,
                        ease: Expo.easeOut
                    }, 0);
                    break;
                }
            }
        },
        loadCanvases: function () {
            TweenMax.staggerTo(app.menuItemC, app.menuItemDuration, {
                opacity: 1
            }, app.menuItemStaggerValue);
        },
        loadDividers: function () {
            TweenMax.staggerTo(app.menuItemDivider, app.menuItemDuration, {
                opacity: 1,
                delay: 0.25
            }, app.menuItemStaggerValue);
        },
        menuActions: {
            touchstart: function (touchType) {
                app.menuTapRegion.on(touchType, function () {
                    app.plusBeingPressed = true;
                    if (!app.menuActive) {
                        if (app.pastHero) {
                            TweenMax.to(app.menuBackgroundTouchstart, app.menuDuration, {
                                backgroundColor: app.menuBackgroundTouchstartBackgroundPastHeroActive,
                                ease: app.menuBackgroundTouchstartEase
                            }, 0);
                        } else {
                            TweenMax.to(app.menuBackgroundTouchstart, app.menuDuration, {
                                backgroundColor: app.menuBackgroundTouchstartBackgroundBehindHeroActive,
                                ease: app.menuBackgroundTouchstartEase
                            }, 0);
                        }
                        TweenMax.to(app.menuPlus, app.menuDuration, {
                            color: app.colors.black.full,
                            rotation: -30,
                            ease: app.menuBackgroundTouchstartEase
                        }, 0);
                    } else {
                        TweenMax.to(app.menuBackgroundClick, app.menuDuration, {
                            backgroundColor: app.colors.red.full,
                            ease: app.menuBackgroundTouchstartEase
                        }, 0);
                    }
                });
            },
            touchend: function (touchType) {
                app.menuTapRegion.on(touchType, function () {
                    app.plusBeingPressed = false;
                    if (!app.menuActive) {
                        if (app.pastHero) {
                            TweenMax.to(app.menuBackgroundClick, app.menuDuration, {
                                backgroundColor: app.colors.white.full,
                                ease: app.menuBackgroundTouchstartEase
                            }, 0);
                            TweenMax.to(app.menuBackgroundTouchstart, app.menuDuration, {
                                backgroundColor: app.menuBackgroundTouchstartBackgroundPastHeroInactive,
                                ease: app.menuBackgroundTouchstartEase
                            }, 0);
                        } else {
                            TweenMax.to(app.menuBackgroundClick, app.menuDuration, {
                                backgroundColor: app.colors.black.full,
                                ease: app.menuBackgroundTouchstartEase
                            }, 0);
                            TweenMax.to(app.menuBackgroundTouchstart, app.menuDuration, {
                                backgroundColor: app.menuBackgroundTouchstartBackgroundBehindHeroInactive,
                                ease: app.menuBackgroundTouchstartEase
                            }, 0);
                        }
                        TweenMax.to(app.menuPlus, app.menuDuration, {
                            rotation: 0,
                            ease: app.menuBackgroundTouchstartEase
                        }, 0);
                    } else {
                        TweenMax.to(app.menuBackgroundClick, app.menuDuration, {
                            backgroundColor: app.colors.black.full,
                            ease: app.menuBackgroundTouchstartEase
                        }, 0);
                        TweenMax.to(app.menuPlus, app.menuClickDuration, {
                            rotation: 405,
                            color: app.colors.white.full,
                            ease: app.menuPlusEase
                        }, 0);
                    }
                });
            },
            click: function (touchType) {
                app.menuTapRegion.on(touchType, function () {
                    if (!app.menuActive) {
                        app.transitions.menu.open();
                    } else {
                        app.transitions.menu.close();
                    }
                });
            }
        },
        menuItemActions: {
            touchstart: function (touchType) {
                app.menuItemTapRegion.on(touchType, function () {
                    app.menuItemTouched = true;
                    TweenMax.to($(this).siblings('.menu-item-bg'), app.menuItemTouchDuration, {
                        backgroundColor: app.colors.white.full,
                        ease: app.menuItemTouchEase
                    }, 0);
                });
            },
            touchend: function (touchType) {
                app.menuItemTapRegion.on(touchType, function () {
                    app.menuItemTouched = false;
                    TweenMax.to($(this).siblings('.menu-item-bg'), app.menuItemTouchDuration, {
                        backgroundColor: app.colors.transparent,
                        ease: app.menuItemTouchEase
                    }, 0);
                });
            },
            click: function (touchType) {
                app.menuItemTapRegion.on(touchType, function (e) {
                    e.preventDefault();
                    TweenMax.set(app.menuTapRegion, {
                        pointerEvents: 'none'
                    });
                    TweenMax.set(app.menuItem, {
                        pointerEvents: 'none'
                    });
                    app.menuItemTl.set(app.contactLink, {
                        pointerEvents: 'none'
                    });
                    var clickedItem = $(this),
                        link = e.target.href,
                        thisId = this.id;
                    if (link.indexOf(app.substrings.codepen) !== -1) {
                        TweenMax.set(app.overlay, {
                            backgroundColor: app.colors.black.full
                        });
                    } else {
                        TweenMax.set(app.overlay, {
                            backgroundColor: app.colors.white.full
                        });
                    }
                    app.sectionStaggerDelay = 0;
                    app.navigateToSection(thisId);
                    app.transitions.linkClicked(link, thisId, clickedItem);
                });
            }
        },
        navigateToSection: function (thisId) {
            switch (thisId) {
            case 'about-link':
                window.scrollTo(0, app.aboutScroll);
                break;
            case 'resume-link':
                window.scrollTo(0, app.resumeScroll);
                break;
            case 'work-link':
                window.scrollTo(0, app.workScroll);
                break;
            }
        },
        pageChecker: function () {
            for (app.ssi = 0; app.ssi < app.sectionStagger.length; app.ssi++) {
                app.currentDirection = app.sectionStaggerDirection[app.ssi].string;
                // ABOUT
                if (app.aboutParams && !app.aboutTriggered) {
                    app.sectionTrigger(app.about, app.aboutSectionStagger);
                    app.aboutTriggered = true;
                }

                // RESUME
                if (app.resumeParams && !app.resumeTriggered) {
                    app.sectionTrigger(app.resume, app.resumeSectionStagger);
                    app.resumeTriggered = true;
                }

                // WORK
                if (app.workParams && !app.workTriggered) {
                    app.sectionTrigger(app.work, app.workSectionStagger);
                    app.workTriggered = true;
                }
            }
        },
        parallax: function () {
            TweenMax.set(app.heroBackground, {
                opacity: app.heroContentParallaxOpacity
            });
            TweenMax.set(app.heroImageLayerForegroundNearest, {
//                y: `-${app.fromTopNew}`
            });
            TweenMax.set(app.heroImageLayerForegroundNearer, {
                y: `-${app.fromTopNew * 0.66}`
            });
            TweenMax.set(app.heroImageLayerForegroundNear, {
                y: `-${app.fromTopNew * 0.33}`
            });
            TweenMax.set(app.heroImageLayerMiddleground, {
                y: `-${app.fromTopNew * 0.2}`
            });
//            TweenMax.set(app.heroImageLayerBackground, {
//                y: `-${app.heroContentParallaxY * 0}`
//            });
            for (app.bgci = 0; app.bgci < app.sectionBackgroundContainer.length; app.bgci++) {
                app.currentSectionBackgroundContainer = app.sectionBackgroundContainer.eq(app.bgci);
                app.currentSectionStaggerHeightParallax = 0;

                for (app.shi = 0; app.shi < app.bgci + 1; app.shi++) {
                    app.currentSectionStaggerHeightParallax += app.sectionHeightQuarter[app.shi];
                }

                app.currentY = app.fromTopNewWithParallaxDelay - app.currentSectionStaggerHeightParallax;
                app.currentSbgY = app.currentY + app.sectionHeightQuarter[app.bgci];
                app.skillBarsY = app.currentY + app.sectionHeightQuarter[app.bgci] - app.windowInnerHeightMult;

                TweenMax.set(app.currentSectionBackgroundContainer, {
                    y: app.currentSbgY
                });
                if (app.bgci === 1) {
                    TweenMax.set(app.skillBars, {
                        y: app.skillBarsY
                    });
                }
            }
        },
        RAFEvents: function () {

            if (app.aboutFromTop != null) {

                //RAF VAR REDEFS
                app.fromTopOld = window.fromTopNew;
                app.fromTopNew = window.pageYOffset;
                app.topTracker = app.fromTopNew;
                app.bottomTracker = app.fromTopNew + window.innerHeight;
                app.fromTopNewWithParallaxDelay = app.fromTopNew * app.heroImageParallaxDelay;
                app.heroImageOpacityChange = app.fromTopNew * -0.0029;
                app.heroContentParallaxY = app.fromTopNew * app.heroImageParallaxDelay;
                app.heroContentParallaxOpacity = app.heroImageOpacity + app.heroImageOpacityChange;
                app.heroChecker = app.aboutFromTop - app.headerHeight;
                app.counter += app.counterChange;
                app.hue++;
                app.yInit += Math.sin(app.counter) * 30;
                app.windowInnerHeight = window.innerHeight;
                app.windowInnerHeightMult = app.windowInnerHeight * 0.22;
                app.aboutParams = (app.topTracker > app.aboutFromTop - app.sectionTriggerOffset) && (app.bottomTracker < (app.aboutFromTop + app.aboutHeight) + app.sectionTriggerOffset);
                app.resumeParams = (app.topTracker > app.resumeFromTop - app.sectionTriggerOffset) && (app.bottomTracker < (app.resumeFromTop + app.resumeHeight) + app.sectionTriggerOffset);
                app.workParams = (app.topTracker > app.workFromTop - app.sectionTriggerOffset) && (app.bottomTracker < (app.workFromTop + app.workHeight) + app.sectionTriggerOffset);

                app.checkPastHero();
                if (!app.menuActive) {

                    // RAF FUNCTIONS
                    app.checkPageTop();
                    app.transitions.sectionStaggers();
                    app.pageChecker();
                    app.parallax();
                    app.checkPastHeroCanvas();
                }
            }

            raf(app.RAFEvents);
        },
        sectionTrigger: function (section, sectionStagger) {
            app.currentSectionTrigger = section;
            app.currentSectionStaggerTrigger = sectionStagger;
            switch (app.currentSection) {
            case app.about:
                app.transitions.sections.about();
                break;
            case app.resume:

                break;
            case app.work:
                app.transitions.sections.work();
                break;
            }
            if (app.currentSectionTrigger === 'above') {
                TweenMax.staggerTo(app.currentSectionStaggerTrigger, app.sectionStaggerDuration, {
                    z: 0,
                    ease: app.sectionStaggerEase
                }, app.sectionStaggerValue, 0);
                TweenMax.staggerTo(app.currentSectionStaggerTrigger, app.sectionStaggerDuration, {
                    opacity: 1,
                    ease: app.sectionStaggerOpacityEase
                }, app.sectionStaggerValue, 0);
            }
            if (app.currentSectionTrigger === 'below') {
                TweenMax.staggerTo(app.currentSectionStaggerTrigger, app.sectionStaggerDuration, {
                    z: 0,
                    ease: app.sectionStaggerEase
                }, `-${app.sectionStaggerValue}`);
                TweenMax.staggerTo(app.currentSectionStaggerTrigger, app.sectionStaggerDuration, {
                    opacity: 1,
                    ease: app.sectionStaggerOpacityEase
                }, `-${app.sectionStaggerValue}`);
            }
        },
        skillbarExpand: function () {
            app.skillbarTl.to(app.skillBar0, app.skillBarDuration, {
                height: app.skillBar0Height,
                y: app.skillBar0Y,
                ease: app.skillBarExpandEase
            }, 0);
            app.skillbarTl.to(app.skillBar1, app.skillBarDuration, {
                height: app.skillBar1Height,
                ease: app.skillBarExpandEase
            }, 0);
            app.skillbarTl.to(app.skillBar2, app.skillBarDuration, {
                height: app.skillBar2Height,
                y: app.skillBar2Y,
                ease: app.skillBarExpandEase
            }, 0);
            app.skillbarFillExpand();
        },
        skillbarFillExpand: function () {
            if (app.currentDirection === 'neutral') {
                app.skillbarFillTl.to(app.skillBarFill0, app.skillBarDuration, {
                    scaleX: app.feBarFillDecimal,
                    ease: app.skillBarFillExpandEase,
                    delay: app.skillBarFillDelay1Neutral
                }, 0);
                app.skillbarFillTl.to(app.skillBarFill1, app.skillBarDuration, {
                    scaleX: app.beBarFillDecimal,
                    ease: app.skillBarFillExpandEase,
                    delay: app.skillBarFillDelay2Neutral
                }, 0);
                app.skillbarFillTl.to(app.skillBarFill2, app.skillBarDuration, {
                    scaleX: app.dBarFillDecimal,
                    ease: app.skillBarFillExpandEase,
                    delay: app.skillBarFillDelay3Neutral
                }, 0);
            } else {
                app.skillbarFillTl.to(app.skillBarFill0, app.skillBarDuration, {
                    scaleX: app.feBarFillDecimal,
                    ease: app.skillBarFillExpandEase,
                    delay: app.skillBarFillDelay1
                }, 0);
                app.skillbarFillTl.to(app.skillBarFill1, app.skillBarDuration, {
                    scaleX: app.beBarFillDecimal,
                    ease: app.skillBarFillExpandEase,
                    delay: app.skillBarFillDelay2
                }, 0);
                app.skillbarFillTl.to(app.skillBarFill2, app.skillBarDuration, {
                    scaleX: app.dBarFillDecimal,
                    ease: app.skillBarFillExpandEase,
                    delay: app.skillBarFillDelay3
                }, 0);
            }
            app.animateBarText();
        },
        style: function () {
            this.cacheImage.imagesLoaded(function () {
                TweenMax.set(app.bodyHTML, {
                    scrollTop: 0
                });
                TweenMax.set(app.container, {
                    opacity: 1,
                    userSelect: 'none'
                });
                TweenMax.set(app.container, {
                    display: 'inline'
                });
                TweenMax.set(app.bodyHTML, {
                    scrollTop: 0
                });
                TweenMax.set(app.initials, {
                    perspective: 800,
                    perspectiveOrigin: 'center',
                    transformStyle: '2d'
                });
                TweenMax.set(app.initialsSmall, {
                    perspective: 800,
                    perspectiveOrigin: 'center',
                    transformStyle: '2d'
                });
                TweenMax.set(app.menuBackgroundTouchstart, {
                    backgroundColor: app.menuBackgroundTouchstartBackgroundPastHeroInactive
                });
                TweenMax.set(app.menuBackgroundClick, {
                    scale: 0
                });
                TweenMax.set(app.menuPlus, {
                    transformOrigin: 'center center'
                });
                TweenMax.set(app.menuItems, {
                    y: app.header.height()
                });
                TweenMax.set(app.menuItem, {
                    height: app.menuItemHeight
                });
                TweenMax.set(app.contactDetails, {
                    height: app.contactDetailsHeight
                        //                    y: app.menuItem.length * app.menuItemHeight
                });
                TweenMax.set(app.contactDetailsItems, {
                    y: app.contactDetailsHeight / 2 - app.contactDetailsItems.height() / 2
                });
                TweenMax.set(app.contactDetailsItem, {
                    opacity: 0
                });
                TweenMax.set(app.menuItemTitleContainer, {
                    y: app.menuItem.height() / 2 - app.menuItemTitleContainer.height() / 2
                });
                TweenMax.set(app.menuItemStagger.not('.contact-details-item'), {
                    //                    y: app.menuItemTitle.height()
                });
                TweenMax.set(app.menuItemsBackground, {
                    //                    y: app.header.height() * app.menuItem.length
                });
                for (var i = 0; i < app.menuItemDivider.length; i++) {
                    var current = app.menuItemDivider.eq(i);

                    TweenMax.set(current, {
                        //                        y: app.menuItemDividerFirstY
                    });

                    //                    if (i === app.menuItemDivider.length - 1) {
                    //                        TweenMax.set(current, {
                    //                            backgroundColor: 'rgba(255,255,255,0)'
                    //                        });
                    //                    }

                    app.menuItemDividerFirstY += app.menuItemDividerY
                }
                TweenMax.set(app.menuItemDivider, {
                    //                    y: app.header.height() - app.menuItemDivider.height()
                });
                TweenMax.set(app.menuItemC, {
                    filter: `blur(${app.cBlur}px)`
                });
                TweenMax.set(app.menuItemC.not('#c4'), {
                    width: app.menuItem.width(),
                    height: app.menuItem.height()
                });

                app.c0 = document.getElementById('c0');
                app.c0x = app.c0.getContext('2d');
                app.c0w = app.c0.width = $('#c0').width();
                app.c0h = app.c0.height = $('#c0').height();

                app.c1 = document.getElementById('c1');
                app.c1x = app.c1.getContext('2d');
                app.c1w = app.c1.width = app.c1.offsetWidth;
                app.c1h = app.c1.height = app.c1.offsetHeight;

                app.c2 = document.getElementById('c2');
                app.c2x = app.c2.getContext('2d');
                app.c2w = app.c2.width = app.c2.offsetWidth;
                app.c2h = app.c2.height = app.c2.offsetHeight;

                app.c3 = document.getElementById('c3');
                app.c3x = app.c3.getContext('2d');
                app.c3w = app.c3.width = app.c3.offsetWidth;
                app.c3h = app.c3.height = app.c3.offsetHeight;

                app.c4 = document.getElementById('c4');

                TweenMax.set(app.c4, {
                    width: app.contactDetails.width(),
                    height: app.contactDetails.height(),
                    rotation: 180
                });

                app.c4x = app.c4.getContext('2d');
                app.c4w = app.c4.width = app.c4.offsetWidth;
                app.c4h = app.c4.height = app.c4.offsetHeight;

                for (var i = 0; i < app.menuItem.length; i++) {
                    var current = app.menuItem.eq(i);

                    TweenMax.set(current, {
                        //                        y: app.menuItemY
                    });
                    app.menuItemY += app.menuItemStaggerHeight
                }
                for (var i = 0; i < app.initialContainer.length; i++) {
                    var current = app.initialContainer.eq(i),
                        currentChild = current.find('.initial');

                    if (i === app.initialContainer.length - 1) {
                        TweenMax.set(current, {
                            width: currentChild.width() * 1.1,
                            height: currentChild.height()
                        });
                    } else {
                        TweenMax.set(current, {
                            width: currentChild.width(),
                            height: currentChild.height()
                        });
                    }
                }
                for (var i = 0; i < app.initialSmallContainer.length; i++) {
                    var current = app.initialSmallContainer.eq(i),
                        currentChild = current.find('.initial-small');

                    if (i === app.initialSmallContainer.length - 1) {
                        TweenMax.set(current, {
                            width: currentChild.width() * 1.1,
                            height: currentChild.height()
                        });
                    } else {
                        TweenMax.set(current, {
                            width: currentChild.width(),
                            height: currentChild.height()
                        });
                    }
                }
                app.initialSmallActions.enter();
                TweenMax.set(app.initials, {
                    x: app.container.width() / 2 - app.initials.width() / 2,
                    y: app.container.height() / 2 - app.initials.height() / 2
                });
                TweenMax.set(app.initialsSmall, {
                    y: app.header.height() / 2 - app.initialsSmall.height() / 2
                });
                app.initialsSmallOffsetTop = app.initialsSmall.offset().top;
                TweenMax.set(app.initialsSmall, {
                    x: app.initialsSmallOffsetTop
                });
                TweenMax.set(app.hero, {
                    height: window.innerHeight
                });
                TweenMax.set(app.heroContent, {
                    top: app.hero.height() / 2 - app.heroContent.height() / 2,
                    left: app.hero.width() / 2 - app.heroContent.width() / 2
                });
                TweenMax.set(app.heroImage, {
                    width: app.heroImage.height() * 0.5625
                });
                TweenMax.set(app.heroImage, {
                    top: 0,
                    left: app.heroContent.width() / 2 - app.heroImage.width() / 2
                });
                TweenMax.set(app.heroImageLayer, {
                    opacity: 1
                });
                TweenMax.set(app.sections, {
                    y: app.hero.height()
                });
                TweenMax.set(app.section, {
                    minHeight: window.innerHeight
                });
                TweenMax.set(app.sectionInner, {
                    perspective: 800,
                    perspectiveOrigin: 'center',
                    transformStyle: '2d'
                });
                app.overlayHeight = app.overlay.height();
                //                if (app.isChrome) {
                //                    app.currentUA = 'Chrome';
                //                    app.sectionHeader.eq(0).html(app.currentUA);
                //                } else {
                //                    app.currentUA = 'Safari';
                //                    app.sectionHeader.eq(0).html(app.currentUA);
                //                }

                TweenMax.set(app.hc, {
                    width: app.heroContent.width(),
                    height: app.heroContent.height()
                });

                app.hcw = app.hc.width = $('#hero-c').width();
                app.hch = app.hc.height = $('#hero-c').height();

                app.yInit = app.hch * 0.5;

                for (var i = 0; i < app.section.length; i++) {
                    var current = app.section.eq(i),
                        currentHeight = current.height(),
                        currentHeightQuarter = currentHeight * 0.25;

                    app.sectionHeight.push(currentHeight);
                    app.sectionHeightQuarter.push(currentHeightQuarter);
                }

                app.aboutFromTop = app.about.offset().top;
                app.resumeFromTop = app.resume.offset().top;
                app.workFromTop = app.work.offset().top;

                TweenMax.set(app.skillBar, {
                    height: app.header.height() * 0.3
                });

                TweenMax.set(app.skillBars, {
                    height: app.skillBar.height() * 3
                });

                for (var i = 0; i < app.skillBar.length; i++) {
                    var current = app.skillBar.eq(i),
                        currentHeight = current.height();

                    if (i === 0) {
                        TweenMax.set(current, {
                            top: 0
                        });
                    }

                    if (i === 1) {
                        TweenMax.set(current, {
                            top: currentHeight
                        });
                    }

                    if (i === 2) {
                        TweenMax.set(current, {
                            top: currentHeight * 2
                        });
                    }
                }

                TweenMax.set(app.skillBarFill, {
                    transformOrigin: 'left center',
                    scaleX: 0,
                    opacity: 1
                });

                TweenMax.set(app.skillBarsContainer, {
                    perspective: 800,
                    perspectiveOrigin: 'center',
                    transformStyle: '2d'
                });

                TweenMax.set(app.skillBars, {
                    top: app.skillBarsContainer.height() / 2 - app.skillBars.height() / 2,
                    left: app.skillBarsContainer.width() / 2 - app.skillBars.width() / 2
                });

                for (var i = 0; i < app.sectionStagger.length; i++) {
                    app.sectionStaggerHit.push(false);
                    app.sectionStaggerOffsets.push(app.sectionStagger.eq(i).offset().top);
                    app.sectionStaggerDirection.push({
                        fromAbove: false,
                        fromBelow: false,
                        string: 'neutral'
                    });
                    app.visibleStaggerGathered.push(false);

                }
                TweenMax.set(app.sectionStagger.not('#skill-bars'), {
                    z: 100
                });
                app.headerHeight = app.header.height();
                app.aboutScroll = app.aboutFromTop - (app.headerHeight * 0.9);
                app.resumeScroll = app.resumeFromTop - (app.headerHeight);
                app.workScroll = app.workFromTop - (app.headerHeight);
                app.aboutHeight = app.about.height();
                app.resumeHeight = app.resume.height();
                app.workHeight = app.work.height();
                app.skillBar0Y = app.headerHeight * -0.6;
                app.skillBar0Height = app.headerHeight * 0.9;
                app.skillBar1Y = 0;
                app.skillBar1Height = app.headerHeight * 0.9;
                app.skillBar2Y = app.headerHeight * 0.6;
                app.skillBar2Height = app.headerHeight * 0.9;
                app.stylesLoaded = true;
            });
            //            for (var i = 0; i < app.sectionBackgroundContainer.length; i++) {
            //                var current = app.sectionBackgroundContainer.eq(i),
            //                    currentChild = current.find('.section-bg');
            //                
            //                TweenMax.set(currentChild, {
            //                    top: current.height() / 2 - currentChild.height() / 2,
            //                    left: current.width() / 2 - currentChild.width() / 2
            //                });
            //            }
        },
        transitions: {
            top: {
                atZero: function () {
                    TweenMax.to(app.overlay, app.introAtZeroDuration * 0.75, {
                        height: app.overlayHeight,
                        y: 0,
                        ease: Expo.easeOut
                    }, 0);
                    TweenMax.to(app.sections, app.introAtZeroDuration * 0.75, {
                        opacity: 0
                    }, 0);
                },
                pastZero: function () {
                    TweenMax.to(app.overlay, app.introAtZeroDuration * 0.75, {
                        height: 0,
                        y: app.header.height(),
                        ease: Expo.easeOut
                    }, 0);
                    TweenMax.set(app.sections, {
                        opacity: 0
                    });
                    TweenMax.to(app.sections, app.introAtZeroDuration * 0.65, {
                        opacity: 1
                    }, 0);
                }
            },
            header: {
                hero: {
                    above: function () {
                        if (app.headerDone) {
                            if (!app.menuActive) {
                                TweenMax.to(app.header, app.headerDuration, {
                                    backgroundColor: app.colors.white.empty,
                                    ease: app.headerEase
                                }, 0);
                                TweenMax.to(app.menuDivider, app.headerDuration, {
                                    backgroundColor: app.menuDividerBackgroundColor,
                                    ease: app.menuItemEase
                                }, 0);
                                TweenMax.to(app.headerDivider, app.headerDuration, {
                                    backgroundColor: app.menuDividerBackgroundColor,
                                    ease: app.menuItemEase
                                }, 0);
                                TweenMax.to(app.initialSmall, app.headerDuration, {
                                    color: app.colors.white.full,
                                    ease: app.menuItemEase
                                }, 0);
                                if (!app.plusBeingPressed) {
                                    TweenMax.to(app.menuPlus, app.headerDuration, {
                                        color: app.colors.white.full,
                                        ease: app.menuItemEase
                                    }, 0);
                                }
                            }
                        }
                    },
                    below: function () {
                        if (app.headerDone) {
                            if (!app.menuActive) {
                                TweenMax.to(app.header, app.headerDuration, {
                                    backgroundColor: app.colors.white.full,
                                    ease: app.headerEase
                                }, 0);
                                TweenMax.to(app.menuDivider, app.headerDuration, {
                                    backgroundColor: app.colors.black.full,
                                    ease: app.menuItemEase
                                }, 0);
                                TweenMax.to(app.headerDivider, app.headerDuration, {
                                    backgroundColor: app.colors.black.full,
                                    ease: app.menuItemEase
                                }, 0);
                                TweenMax.to(app.initialSmall, app.headerDuration, {
                                    color: app.colors.black.full,
                                    ease: app.menuItemEase
                                }, 0);
                                if (!app.plusBeingPressed) {
                                    TweenMax.to(app.menuPlus, app.headerDuration, {
                                        color: app.colors.black.full,
                                        ease: app.menuItemEase
                                    }, 0);
                                }
                            }
                        }
                    }
                }
            },
            menu: {
                open: function () {
                    if (app.pastHero) {
                        TweenMax.set(app.header, {
                            backgroundColor: app.colors.white.full
                        });
                    } else {
                        TweenMax.set(app.header, {
                            backgroundColor: app.colors.black.empty
                        });
                    }
                    TweenMax.to(app.header, app.menuItemDuration, {
                        backgroundColor: app.colors.black.full,
                        ease: app.menuItemEase
                    }, 0);
                    TweenMax.to(app.menuDivider, app.menuItemDuration, {
                        backgroundColor: app.colors.white.full,
                        ease: app.menuItemEase
                    }, 0);
                    TweenMax.to(app.headerDivider, app.menuItemDuration, {
                        backgroundColor: app.colors.white.full,
                        ease: app.menuItemEase
                    }, 0);
                    TweenMax.to(app.initialSmall, app.menuItemDuration, {
                        color: app.colors.white.full,
                        ease: app.menuItemEase
                    }, 0);
                    TweenMax.to(app.menuPlus, app.menuClickDuration, {
                        rotation: 405,
                        color: app.colors.white.full,
                        ease: app.menuPlusEase
                    }, 0);
                    TweenMax.to(app.menuPlus, app.menuClickDuration, {
                        ease: app.menuPlusScaleEase
                    }, 0);
                    app.menuActive = true;
                    app.canvasDraw(app.c0, app.c0x, app.c0w, app.c0h, app.c0Render, app.c0Unrender, app.c0WasErased, app.c0Props);
                    app.canvasDraw(app.c1, app.c1x, app.c1w, app.c1h, app.c1Render, app.c1Unrender, app.c1WasErased, app.c1Props);
                    app.canvasDraw(app.c2, app.c2x, app.c2w, app.c2h, app.c2Render, app.c2Unrender, app.c2WasErased, app.c2Props);
                    app.canvasDraw(app.c3, app.c3x, app.c3w, app.c3h, app.c3Render, app.c3Unrender, app.c3WasErased, app.c3Props);
                    app.canvasDraw(app.c4, app.c4x, app.c4w, app.c4h, app.c4Render, app.c4Unrender, app.c4WasErased, app.c4Props);
                    TweenMax.set(app.menuBackgroundClick, {
                        scaleX: 3,
                        scaleY: 0,
                        rotation: 45,
                        opacity: 1
                    }, 0);
                    TweenMax.set(app.menuBackgroundClick, {
                        backgroundColor: app.colors.black.full
                    });
                    TweenMax.to(app.menuBackgroundClick, app.menuClickDuration, {
                        scaleY: 1.5,
                        ease: app.menuBackgroundClickEase
                    }, 0);
                    TweenMax.to(app.menuBackgroundClick, app.menuClickDuration * 0.75, {
                        backgroundColor: app.colors.black.full,
                        ease: app.menuBackgroundClickColorEase
                    }, 0);
                    app.transitions.menuItems.open();
                },
                close: function () {
                    app.linkGoing = false;
                    app.menuActive = false;
                    app.headerDone = false;
                    if (app.pastHero) {
                        TweenMax.set(app.header, {
                            backgroundColor: app.colors.black.full
                        });
                        TweenMax.to(app.header, app.menuItemDuration, {
                            backgroundColor: app.colors.white.full,
                            ease: app.menuItemEase,
                            onComplete: function () {
                                app.headerDone = true;
                            }
                        }, 0);
                        TweenMax.to(app.menuDivider, app.menuItemDuration, {
                            backgroundColor: app.colors.black.full,
                            ease: app.menuItemEase
                        }, 0);
                        TweenMax.to(app.headerDivider, app.menuItemDuration, {
                            backgroundColor: app.colors.black.full,
                            ease: app.menuItemEase
                        }, 0);
                        TweenMax.to(app.initialSmall, app.menuItemDuration, {
                            color: app.colors.black.full,
                            ease: app.menuItemEase
                        }, 0);
                        TweenMax.set(app.menuBackgroundClick, {
                            backgroundColor: app.colors.white.empty
                        });
                        TweenMax.to(app.menuBackgroundClick, app.menuClickDuration, {
                            opacity: 0,
                            ease: app.menuBackgroundClickEase,
                            onComplete: function () {
                                TweenMax.set(app.menuBackgroundClick, {
                                    opacity: 0
                                });
                            }
                        }, 0);
                        TweenMax.set(app.menuPlus, {
                            rotation: 45
                        });
                        TweenMax.to(app.menuPlus, app.menuClickDuration, {
                            rotation: 0,
                            color: app.colors.black.full,
                            ease: app.menuPlusEase
                        }, 0);
                    } else {
                        TweenMax.set(app.header, {
                            backgroundColor: app.colors.black.full
                        });
                        TweenMax.to(app.header, app.menuItemDuration, {
                            backgroundColor: app.colors.black.empty,
                            ease: app.menuItemEase,
                            onComplete: function () {
                                app.headerDone = true;
                            }
                        }, 0);
                        TweenMax.to(app.menuDivider, app.menuItemDuration, {
                            backgroundColor: app.menuDividerBackgroundColor,
                            ease: app.menuItemEase
                        }, 0);
                        TweenMax.to(app.headerDivider, app.menuItemDuration, {
                            backgroundColor: app.menuDividerBackgroundColor,
                            ease: app.menuItemEase
                        }, 0);
                        TweenMax.to(app.initialSmall, app.menuItemDuration, {
                            color: app.colors.white.full,
                            ease: app.menuItemEase
                        }, 0);
                        TweenMax.set(app.menuBackgroundClick, {
                            backgroundColor: app.colors.black.empty
                        });
                        TweenMax.to(app.menuBackgroundClick, app.menuClickDuration, {
                            opacity: 0,
                            ease: app.menuBackgroundClickEase,
                            onComplete: function () {
                                TweenMax.set(app.menuBackgroundClick, {
                                    opacity: 0
                                });
                            }
                        }, 0);
                        TweenMax.set(app.menuPlus, {
                            rotation: 45
                        });
                        TweenMax.to(app.menuPlus, app.menuClickDuration, {
                            rotation: 0,
                            color: app.colors.white.full,
                            ease: app.menuPlusEase
                        }, 0);
                    }
                    app.canvasErase();
                    TweenMax.set(app.menuBackgroundTouchstart, {
                        backgroundColor: app.menuBackgroundTouchstartBackgroundPastHeroInactive
                    });
                    TweenMax.set(app.menuTapRegion, {
                        pointerEvents: 'auto'
                    });
                    app.transitions.menuItems.close();
                }
            },
            menuItems: {
                open: function () {
                    app.menuItemTl.clear();
                    app.menuItemTl.set(app.menuItems, {
                        pointerEvents: 'auto',
                        display: 'inline',
                        opacity: 1
                    });
                    app.menuItemTl.set(app.menuItem, {
                        pointerEvents: 'auto',
                        height: app.menuItemHeight
                    });
                    app.menuItemTl.set(app.contactLink, {
                        pointerEvents: 'auto'
                    });
                    app.menuItemTl.set(app.contactDetailsItem, {
                        opacity: 0
                    });
                    app.menuItemTl.set(app.menuItemStagger.not('.contact-details-item'), {
                        y: app.menuItemTitle.height(),
                        opacity: 1
                    });
                    app.menuItemTl.set(app.menuItemDivider, {
                        opacity: 0
                    });
                    app.menuItemTl.set(app.menuItemC, {
                        opacity: 0
                    });
                    app.menuItemTl.staggerTo(app.menuItemStagger, app.menuItemDuration, {
                        y: 0,
                        opacity: 1,
                        cycle: {
                            ease: function (i) {
                                if (app.menuItemStagger.eq(i).hasClass('contact-details-item')) {
                                    return app.menuItemStaggerContactItemEaseStart;
                                } else {
                                    return app.menuItemStaggerEaseStart;
                                }
                            }
                        }
                    }, app.menuItemStaggerValue);
                    app.menuItemTl.to(app.menuItemsBackground, app.menuItemDuration, {
                        opacity: 1,
                        ease: app.menuItemEase,
                        onComplete: function () {
                            app.menuIsUp = true;
                        }
                    }, 0);
                    app.menuItemTl.staggerTo(app.menuItemC, app.menuItemDuration * 2, {
                        opacity: 1,
                        ease: app.menuItemEase
                    }, app.menuItemStaggerValue, 0.15);
                    TweenMax.staggerTo(app.menuItemDivider, app.menuItemDuration, {
                        opacity: 1
                    }, app.menuItemStaggerValue, 0);
                },
                close: function () {
                    app.menuIsUp = false;
                    app.menuItemTl.clear();
                    app.menuItemTl.set(app.menuItems, {
                        pointerEvents: 'none'
                    });
                    app.menuItemTl.to(app.menuItems, app.menuItemDuration, {
                        opacity: 0,
                        ease: app.menuItemEase,
                        onComplete: function () {
                            TweenMax.set(app.menuItems, {
                                display: 'none'
                            });
                        }
                    }, 0);
                    app.menuItemTl.to(app.menuItemsBackground, app.menuItemDuration, {
                        opacity: 0,
                        ease: app.menuItemEase
                    }, 0);
                    app.menuItemTl.to(app.menuItemC, app.menuItemDuration, {
                        opacity: 0,
                        ease: app.menuItemEase
                    }, 0);
                }
            },
            linkClicked: function (link, thisId, clickedItem) {
                app.linkGoing = true;
                if (link[link.length - 1] != '#') {
                    TweenMax.to(app.overlay, app.linkDuration, {
                        opacity: 1,
                        ease: app.linkOverlayEase,
                        onComplete: function () {
                            window.location = link;
                        }
                    }, 0);
                } else {
                    TweenMax.to(app.menuItems, app.linkDuration, {
                        opacity: 0,
                        ease: app.linkOverlayEase
                    }, 0);
                }
                TweenMax.to(clickedItem.parent('.menu-item'), app.linkDuration, {
                    height: 0,
                    ease: app.linkEase,
                    onComplete: function () {
                        app.transitions.menu.close();
                    }
                }, 0);
            },
            sections: {
                about: function () {

                },
                resume: function () {
                    for (var i = 0; i < app.skillBar.length; i++) {
                        var current = app.skillBar.eq(i);

                        if (i === 0) {
                            TweenMax.set(app.skillBar.eq(i), {
                                transformOrigin: 'left center',
                                scaleX: 0
                            });
                        } else if (i === 1) {
                            TweenMax.set(app.skillBar.eq(i), {
                                transformOrigin: 'center center',
                                scaleX: 0
                            });
                        } else {
                            TweenMax.set(app.skillBar.eq(i), {
                                transformOrigin: 'right center',
                                scaleX: 0
                            });
                        }
                    }
                    if (app.currentDirection === 'above') {
                        TweenMax.staggerTo(app.skillBar, app.skillBarDuration, {
                            scaleX: 1,
                            ease: app.skillBarEase
                        }, app.skillBarStaggerValue, 0);
                        TweenMax.staggerTo(app.skillBar, app.skillBarDuration, {
                            height: app.header.height() * 0.9,
                            cycle: {
                                y: function (i) {
                                    if (i === 0) {
                                        return app.header.height() * -0.6;
                                    }
                                    if (i === 1) {
                                        return 0;
                                    }
                                    if (i === 2) {
                                        return app.header.height() * 0.6;
                                    }
                                }
                            },
                            ease: app.skillBarExpandEase
                        }, app.skillBarStaggerValue, 0);
                    }
                    if (app.currentDirection === 'below') {
                        TweenMax.staggerTo(app.skillBar, app.skillBarDuration, {
                            scaleX: 1,
                            ease: app.skillBarEase
                        }, `-${app.skillBarStaggerValue}`);
                        TweenMax.staggerTo(app.skillBar, app.skillBarDuration, {
                            height: app.header.height() * 0.9,
                            cycle: {
                                y: function (i) {
                                    if (i === 0) {
                                        return app.header.height() * -0.6;
                                    }
                                    if (i === 1) {
                                        return 0;
                                    }
                                    if (i === 2) {
                                        return app.header.height() * 0.6;
                                    }
                                }
                            },
                            ease: app.skillBarExpandEase
                        }, `-${app.skillBarStaggerValue}`);
                    }
                    if (app.currentDirection === 'neutral') {
                        TweenMax.staggerTo(app.skillBar, app.skillBarDuration, {
                            scaleX: 1,
                            ease: app.skillBarEase,
                            delay: 0.25
                        }, app.skillBarStaggerValue);
                        TweenMax.staggerTo(app.skillBar, app.skillBarDuration, {
                            height: app.header.height() * 0.9,
                            cycle: {
                                y: function (i) {
                                    if (i === 0) {
                                        return app.header.height() * -0.6;
                                    }
                                    if (i === 1) {
                                        return 0;
                                    }
                                    if (i === 2) {
                                        return app.header.height() * 0.6;
                                    }
                                }
                            },
                            ease: app.skillBarExpandEase,
                            delay: 0.25
                        }, app.skillBarStaggerValue);
                    }
                    TweenMax.set(app.skillBars, {
                        opacity: 1
                    });
                    app.skillbarFillExpand();
                },
                work: function () {

                }
            },
            sectionStaggers: function () {

                for (var i = 0; i < app.sectionStagger.length; i++) {
                    app.currentSectionStagger = app.sectionStagger.eq(i);
                    app.currentSectionStaggerHeight = app.currentSectionStagger.height();
                    app.currentSectionStaggerOffsetTop = app.sectionStaggerOffsets[i];
                    app.aboveStaggerParams = (app.bottomTracker > app.currentSectionStaggerOffsetTop) && (app.bottomTracker < app.currentSectionStaggerOffsetTop + app.currentSectionStaggerHeight * 0.5);
                    app.belowStaggerParams = (app.topTracker > (app.currentSectionStaggerOffsetTop + app.currentSectionStaggerHeight * 0.5) - app.headerHeight) && (app.topTracker < (app.currentSectionStaggerOffsetTop + app.currentSectionStaggerHeight) - app.headerHeight);

                    if (!app.linkGoing) {
                        if (((app.topTracker < (app.currentSectionStaggerOffsetTop - app.headerHeight)) && (app.bottomTracker > app.currentSectionStaggerOffsetTop + app.headerHeight)) && (!app.sectionStaggerDirection[i].fromAbove && !app.sectionStaggerDirection[i].fromBelow) && !app.sectionStaggerHit[i]) {
                            app.sectionStaggerDirection[i].fromAbove = true;
                            app.sectionStaggerDirection[i].string = 'above';
                        }
                    }

                    if (!app.linkGoing) {
                        if (((app.topTracker < (app.currentSectionStaggerOffsetTop - app.headerHeight)) && (app.bottomTracker > app.currentSectionStaggerOffsetTop + app.headerHeight)) && (!app.sectionStaggerDirection[i].fromAbove && !app.sectionStaggerDirection[i].fromBelow) && !app.sectionStaggerHit[i]) {
                            app.sectionStaggerDirection[i].fromBelow = true;
                            app.sectionStaggerDirection[i].string = 'below';
                        }
                    }

                    // ABOVE IS SET
                    if ((app.sectionStaggerDirection[i].fromAbove && !app.sectionStaggerDirection[i].fromBelow) && !app.sectionStaggerHit[i]) {
                        if ((app.topTracker < (app.currentSectionStaggerOffsetTop - app.headerHeight)) && (app.bottomTracker > app.currentSectionStaggerOffsetTop + app.headerHeight)) {
                            app.sectionStaggerHit[i] = true;
                            app.sectionStaggerDelay = 0;
                            if (app.currentSectionStagger.attr('id') === 'skill-bars') {
                                app.transitions.sections.resume(app.sectionStaggerDirection[i].string);
                            } else {
                                TweenMax.to(app.currentSectionStagger, app.sectionStaggerDuration, {
                                    z: 0,
                                    ease: app.sectionStaggerEase
                                }, 0);
                                TweenMax.to(app.currentSectionStagger, app.sectionStaggerDuration, {
                                    opacity: 1,
                                    ease: app.sectionStaggerOpacityEase
                                }, 0);
                            }
                        }
                    }

                    // BELOW IS SET
                    if ((!app.sectionStaggerDirection[i].fromAbove && app.sectionStaggerDirection[i].fromBelow) && !app.sectionStaggerHit[i]) {
                        if ((app.topTracker < (app.currentSectionStaggerOffsetTop - app.headerHeight)) && (app.bottomTracker > app.currentSectionStaggerOffsetTop + app.headerHeight)) {
                            app.sectionStaggerHit[i] = true;
                            app.sectionStaggerDelay = 0;
                            if (app.currentSectionStagger.attr('id') === 'skill-bars') {
                                app.transitions.sections.resume(app.sectionStaggerDirection[i].string);
                            } else {
                                TweenMax.to(app.currentSectionStagger, app.sectionStaggerDuration, {
                                    z: 0,
                                    ease: app.sectionStaggerEase
                                }, 0);
                                TweenMax.to(app.currentSectionStagger, app.sectionStaggerDuration, {
                                    opacity: 1,
                                    ease: app.sectionStaggerOpacityEase
                                }, 0);
                            }
                        }
                    }

                    // NEITHER IS SET
//                                            if ((app.topTracker <= app.currentSectionStaggerOffsetTop && app.bottomTracker >= app.currentSectionStaggerOffsetTop + app.currentSectionStaggerHeight) && !app.sectionStaggerHit[i]) {
//                                                app.visibleStaggerGathered[i] = true;
//                                                app.sectionStaggerHit[i] = true;
//                                                if (app.currentSectionStagger.attr('id') === 'skill-bars') {
//                                                    app.transitions.sections.resume(app.sectionStaggerDirection[i].string);
//                                                } else {
//                                                    TweenMax.to(app.currentSectionStagger, app.sectionStaggerDuration, {
//                                                        z: 0,
//                                                        ease: app.sectionStaggerEase,
//                                                        delay: app.sectionStaggerDelay
//                                                    }, 0);
//                                                    TweenMax.to(app.currentSectionStagger, app.sectionStaggerDuration, {
//                                                        opacity: 1,
//                                                        ease: app.sectionStaggerOpacityEase,
//                                                        delay: app.sectionStaggerDelay
//                                                    }, 0);
//                                                }
//                    //                            app.sectionStaggerDelay += app.sectionStaggerValue;
//                                            }
                }
            }
        }
    }

    app.init();
    raf(app.RAFEvents);
});