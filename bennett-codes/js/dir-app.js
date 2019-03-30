$(window).bind('load', function () {
    var app = {
        init: function () {
            this.cacheDOM();
            this.populateLinks();
            this.style();
        },
        cacheDOM: function () {
            this.container = $('#container');
            this.images = $('img');

            this.title = $('#title');
            this.header = $('#header');

            this.links = $('#links');
            this.link = $('.link');

            this.beforeLink = $('.before-link');
            this.afterLink = $('.after-link');

            this.linkClicked = false;

            this.beforeLinkTl = new TimelineMax({
                //                onComplete: app.beforeLinkAnimationComplete
            });
            this.afterLinkTl = new TimelineMax({
                //                onComplete: app.afterLinkAnimationComplete
            });

            this.linkDuration = 0.5;
            this.linkEase = Expo.easeOut;
            this.linkOpacityEase = Quad.easeIn;

            this.headerString = app.header.html();
            this.headerNewString = '';
            this.headerStringSplit = app.headerString.split(' ');
            this.headerStringParentLink;
            
            this.containerDuration = 0.5;
            this.titleDuration = app.containerDuration;
            this.headerDuration = app.titleDuration;
            
            this.containerEase = Quad.easeIn;
            this.titleEase = app.containerEase;
            this.headerEase = app.containerEase;

            this.surroundingLinkStagger = 0.075;
            this.surroundingLinkDuration = app.linkDuration / 4;
            this.surroundingLinkScaleInactive = 1;
            this.surroundingLinkScaleActive = 1.125;
            this.surroundingLinkZInactive = 0;
            this.surroundingLinkZActive = 75;
            this.surroundingLinkEase = Quad.easeOut;

            this.surroundingLinkYEnd;
            this.surroundingLinkYDuration = app.linkDuration / 2;
            this.surroundingLinkYEase = Back.easeIn;
            this.surroundingLinkOpacityEase = Expo.easeIn;

            this.linkButton = $('.link-button');
            this.linkButtonInner = $('.link-button-inner');
            this.linkButtonTitle;

            this.linkButtonBorderRadiusInactive = 0;
            this.linkButtonBorderRadiusActive = app.container.width() * 0.1;

            this.linkButtonTitleScaleInactive = 0.8;
            this.linkButtonTitleScaleActive = 1;
            this.linkButtonTitleZInactive = 0;
            this.linkButtonTitleZActive = 100;

            this.linkTouchDuration = 0.5;
            this.linkTouchEase = Expo.easeOut;
        },
        style: function () {
            this.images.imagesLoaded(function () {
                $(window).resize(function initial() {
                    TweenMax.set($('body, html'), {
                        overflow: 'initial'
                    });
                    TweenMax.set(app.links, {
                        perspective: 800,
                        perspectiveOrigin: 'center center',
                        transformStyle: '2d'
                    });
                    TweenMax.set(app.link, {
                        perspective: 800,
                        perspectiveOrigin: 'center center',
                        transformStyle: '2d'
                    });
                    TweenMax.set(app.linkButton, {
                        perspective: 800,
                        perspectiveOrigin: 'center center',
                        transformStyle: '2d',
                        //                        borderRadius: app.linkButtonBorderRadiusInactive,
                        scale: app.surroundingLinkScaleInactive,
                        z: app.surroundingLinkZInactive
                    });
                    TweenMax.set(app.linkButtonInner, {
                        perspective: 800,
                        perspectiveOrigin: 'center center',
                        transformStyle: '2d'
                    });
                    TweenMax.set(app.container, {
                        opacity: 1,
                        userSelect: 'none',
                        display: 'inline'
                    });
                    if ($(window).width() < 1024) {
                        app.linkHoverActionsMobile();
                    } else {
                        app.linkHoverActions();
                    }
                    app.surroundingLinkYEnd = (app.link.height() / 2) + (parseInt(app.link.css('margin-bottom')) / 2);
                    return initial;
                }());
            });
        },
        linkComplete: function (count) {
            console.log(`${count} done.`);
            app.beforeLinkTl.kill();
            app.afterLinkTl.kill();
            app.linkClicked = false;
            TweenMax.set(app.container, {
                pointerEvents: 'auto'
            });
            TweenMax.set(app.link, {
                scale: 1
            });
        },
        beforeLinkAnimationComplete: function () {
            if (app.beforeLink.length > app.afterLink.length) {
                app.linkComplete('before');
            }
            if (app.beforeLink.length === app.afterLink.length) {
                app.linkComplete('equal');
            }
        },
        afterLinkAnimationComplete: function () {
            if (app.beforeLink.length < app.afterLink.length) {
                app.linkComplete('after');
            }
            if (app.beforeLink.length === app.afterLink.length) {
                app.linkComplete('before');
            }
        },
        linkAnimationComplete: function () {
            console.log('links done.');
            TweenMax.set(app.container, {
                pointerEvents: 'auto'
            });
        },
        populateLinks: function () {
            for (var i = 0; i < app.link.length; i++) {
                app.linkButtonInner.eq(i).append(`<p class="link-button-title">${app.link.eq(i).data('title')}</p>`);
            }
            app.linkButtonTitle = $('.link-button-title');
            TweenMax.set(app.linkButtonTitle, {
                transformOrigin: 'center center',
                z: app.linkButtonTitleZInactive
            });
            app.headerStringParentLink = `<a href="..">${app.headerStringSplit[0]}</a>`
            app.header.html('');
            app.headerStringSplit.map(function (item, i) {
                if (i != 0) {
                    if (app.headerStringSplit[1] === '&gt;') {
                        if (app.headerStringSplit.length > 3) {
                            if (i === 2) {
                                app.headerNewString += ` <a class="parent-link" href="../index.html">${item}</a>`;
                            } else {
                                app.headerNewString += ` ${item}`;
                            }
                        } else {
                            app.headerNewString += ` ${item}`;
                            console.log('less than or equal to three');
                        }
                    }
                } else {
                    if (app.headerStringSplit[1] != '&gt;') {
                        console.log('no < !');
                        app.headerNewString += `${item}`;
                    } else {
                        console.log(`split length is ${app.headerStringSplit.length}`)
                        if (app.headerStringSplit.length <= 3) {
                            console.log('has the < !');
                            app.headerNewString += `<a class="parent-link" href="../index.html">${item}</a>`;
                        } else {
                            console.log('has the < !');
                            app.headerNewString += `<a class="parent-link" href="../../index.html">${item}</a>`;
                        }
                    }
                }
            });
            app.header.html(app.headerNewString);
        },
        linkHoverActions: function () {
            app.linkButton.on('mouseover', function () {
                TweenMax.to($(this), app.linkTouchDuration, {
                    backgroundColor: '#b1afaf',
                    //                    borderRadius: app.linkButtonBorderRadiusActive,
                    ease: app.linkTouchEase
                }, 0);
                TweenMax.set($(this).find('.link-button-title'), {
                    color: 'white'
                });
            });
            app.linkButton.on('mouseout', function () {
                TweenMax.to($(this), app.linkTouchDuration, {
                    backgroundColor: '#efefef',
                    //                    borderRadius: app.linkButtonBorderRadiusInactive,
                    ease: app.linkTouchEase
                }, 0);
                TweenMax.to($(this).find('.link-button-title'), app.linkTouchDuration, {
                    color: '#000000',
                    ease: app.linkTouchEase
                }, 0);
            });
            app.link.on('click', function (e) {
                e.preventDefault();
                console.log(app.link.height());
                if (!app.linkClicked) {
                    app.linkClicked = true;
                    TweenMax.set(app.link, {
                        scale: 1
                    });
                    TweenMax.set(app.container, {
                        pointerEvents: 'none'
                    });
                    var currentLink = $(this),
                        currentTitle = $(this).data('title'),
                        currentIndex,
                        prevIndex,
                        nextIndex;
                    for (var i = 0; i < app.link.length; i++) {
                        if (app.link.eq(i).data('title') === currentTitle) {
                            currentIndex = i;
                            prevIndex = currentIndex - 1;
                            nextIndex = currentIndex + 1;
                        }
                    }
                    for (var i = 0; i <= prevIndex; i++) {
                        app.link.eq(i).removeClass('before-link').removeClass('after-link');
                        app.link.eq(i).addClass('before-link');
                    }
                    app.beforeLink = $('.before-link');
                    for (var i = app.link.length - 1; i > currentIndex; i--) {
                        app.link.eq(i).removeClass('before-link').removeClass('after-link');
                        app.link.eq(i).addClass('after-link');
                    }
                    app.afterLink = $('.after-link');
                    console.log('same amount.');
                    app.beforeLinkTl.to(app.container, app.containerDuration, {
                        opacity: 0,
                        ease: app.containerEase
                    }, 0);
                    app.beforeLinkTl.to(currentLink, app.linkDuration, {
                        //                        scaleX: 2,
                        scaleY: 0,
                        ease: app.linkEase
                    }, 0);
                    app.beforeLinkTl.to(currentLink, app.linkDuration, {
                        opacity: 0,
                        ease: app.linkOpacityEase
                    }, 0);
                    app.beforeLinkTl.to(currentLink.find('.link-button-title'), app.linkDuration, {
                        opacity: 0,
                        ease: app.linkEase
                    }, 0);
                    app.beforeLinkTl.staggerTo(app.beforeLink, app.surroundingLinkYDuration, {
                        y: app.surroundingLinkYEnd,
                        ease: app.surroundingLinkYEase
                    }, -app.surroundingLinkStagger, 0);
                    app.beforeLinkTl.staggerTo(app.beforeLink, app.surroundingLinkYDuration, {
                        scaleY: 0.25,
                        opacity: 0,
                        ease: app.surroundingLinkOpacityEase
                    }, -app.surroundingLinkStagger, 0);
                    app.beforeLinkTl.staggerTo(app.beforeLink.find('.link-button'), app.surroundingLinkDuration, {
                        z: app.surroundingLinkZActive,
                        ease: app.surroundingLinkEase,
                        yoyo: true,
                        repeat: 1
                    }, -app.surroundingLinkStagger, 0);
                    app.beforeLinkTl.staggerTo(app.afterLink, app.surroundingLinkYDuration, {
                        y: `-${app.surroundingLinkYEnd}`,
                        ease: app.surroundingLinkYEase
                    }, app.surroundingLinkStagger, 0);
                    app.beforeLinkTl.staggerTo(app.afterLink, app.surroundingLinkYDuration, {
                        scaleY: 0.25,
                        opacity: 0,
                        ease: app.surroundingLinkOpacityEase
                    }, app.surroundingLinkStagger, 0);
                    app.afterLinkTl.staggerTo(app.afterLink.find('.link-button'), app.surroundingLinkDuration, {
                        z: app.surroundingLinkZActive,
                        ease: app.surroundingLinkEase,
                        yoyo: true,
                        repeat: 1
                    }, app.surroundingLinkStagger, 0);
                    setTimeout(function () {
                        window.location = currentLink.attr('href');
                    }, app.linkDuration * 1000);
                };
            });
        },
        linkHoverActionsMobile: function () {
            app.linkButton.on('touchstart', function () {
                TweenMax.to($(this), app.linkTouchDuration, {
                    backgroundColor: '#b1afaf',
                    borderRadius: app.linkButtonBorderRadiusActive,
                    ease: app.linkTouchEase
                }, 0);
                TweenMax.set($(this).find('.link-button-title'), {
                    color: 'white'
                });
                TweenMax.to($(this).find('.link-button-title'), app.linkTouchDuration, {
                    //                    scale: app.linkButtonTitleScaleActive,
                    ease: app.linkTouchEase
                }, 0);
            });
            app.linkButton.on('touchend', function () {
                TweenMax.to($(this), app.linkTouchDuration, {
                    backgroundColor: '#efefef',
                    borderRadius: app.linkButtonBorderRadiusInactive,
                    ease: app.linkTouchEase
                }, 0);
                TweenMax.to($(this).find('.link-button-title'), app.linkTouchDuration, {
                    color: '#000000',
                    //                    scale: app.linkButtonTitleScaleInactive,
                    ease: app.linkTouchEase
                }, 0);
            });
            app.link.on('click', function (e) {
                e.preventDefault();
                if (!app.linkClicked) {
                    app.linkClicked = true;
                    TweenMax.set(app.link, {
                        scale: 1
                    });
                    TweenMax.set(app.container, {
                        pointerEvents: 'none'
                    });
                    var currentLink = $(this),
                        currentTitle = $(this).data('title'),
                        currentIndex,
                        prevIndex,
                        nextIndex;
                    for (var i = 0; i < app.link.length; i++) {
                        if (app.link.eq(i).data('title') === currentTitle) {
                            currentIndex = i;
                            prevIndex = currentIndex - 1;
                            nextIndex = currentIndex + 1;
                        }
                    }
                    for (var i = 0; i <= prevIndex; i++) {
                        app.link.eq(i).removeClass('before-link').removeClass('after-link');
                        app.link.eq(i).addClass('before-link');
                    }
                    app.beforeLink = $('.before-link');
                    for (var i = app.link.length - 1; i > currentIndex; i--) {
                        app.link.eq(i).removeClass('before-link').removeClass('after-link');
                        app.link.eq(i).addClass('after-link');
                    }
                    app.afterLink = $('.after-link');
                    console.log('same amount.');
                    app.beforeLinkTl.to(app.container, app.containerDuration, {
                        opacity: 0,
                        ease: app.containerEase
                    }, 0);
                    app.beforeLinkTl.to(currentLink, app.linkDuration, {
                        scaleX: 2,
                        scaleY: 0,
                        ease: app.linkEase
                    }, 0);
                    app.beforeLinkTl.to(currentLink, app.linkDuration, {
                        opacity: 0,
                        ease: app.linkOpacityEase
                    }, 0);
                    app.beforeLinkTl.to(currentLink.find('.link-button-title'), app.linkDuration, {
                        opacity: 0,
                        ease: app.linkEase
                    }, 0);
                    app.beforeLinkTl.staggerTo(app.beforeLink, app.surroundingLinkYDuration, {
                        y: app.surroundingLinkYEnd,
                        scaleY: 0,
                        opacity: 0,
                        ease: app.surroundingLinkYEase
                    }, -app.surroundingLinkStagger, 0);
                    app.beforeLinkTl.staggerTo(app.afterLink, app.surroundingLinkYDuration, {
                        y: `-${app.surroundingLinkYEnd}`,
                        scaleY: 0,
                        opacity: 0,
                        ease: app.surroundingLinkYEase
                    }, app.surroundingLinkStagger, 0);
                    app.beforeLinkTl.staggerTo(app.beforeLink.find('.link-button'), app.surroundingLinkDuration, {
                        z: app.surroundingLinkZActive,
                        ease: app.surroundingLinkEase,
                        yoyo: true,
                        repeat: 1
                    }, -app.surroundingLinkStagger, 0);
                    app.afterLinkTl.staggerTo(app.afterLink.find('.link-button'), app.surroundingLinkDuration, {
                        z: app.surroundingLinkZActive,
                        ease: app.surroundingLinkEase,
                        yoyo: true,
                        repeat: 1
                    }, app.surroundingLinkStagger, 0);
                    setTimeout(function () {
                        window.location = currentLink.attr('href');
                    }, app.linkDuration * 1000);
                };
            });
        }
    }

    app.init();
});