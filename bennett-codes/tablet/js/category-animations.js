var categoryAnimations = {
    category: {
        mouseOver: function () {
            categoryClickRegion.mouseover(function () {
                TweenMax.to($(this).siblings(categoryThumbCornerFindString), categoryThumbCornerDuration, {
                    x: categoryThumbCornerXFinish,
                    /*y:categoryThumbCornerYFinish,*/
                    ease: categoryThumbCornerEaseStart
                }, 0);
                TweenMax.to($(this).siblings(categoryThumbFindString), categoryThumbDuration, {
                    x: categoryThumbXFinish,
                    opacity: 0.5,
                    ease: categoryThumbEaseStart
                }, 0);
                TweenMax.to($(this).siblings(categoryTitleFindString).find(Header4FindString), categoryThumbDuration, {
                    color: categoryTitleHeaderColorFinish
                }, 0);
            });
        },
        mouseOverTablet: function () {
            categoryClickRegion.on('vmouseover', function (e) {
                /*e.preventDefault();*/
                TweenMax.to($(this).siblings(categoryThumbCornerFindString), categoryThumbCornerDuration, {
                    x: categoryThumbCornerXFinish,
                    /*y:categoryThumbCornerYFinish,*/
                    ease: categoryThumbCornerEaseStart
                }, 0);
                TweenMax.to($(this).siblings(categoryThumbFindString), categoryThumbDuration, {
                    x: categoryThumbXFinish,
                    opacity: 0.5,
                    ease: categoryThumbEaseStart
                }, 0);
                TweenMax.to($(this).siblings(categoryTitleFindString).find(Header4FindString), categoryThumbDuration, {
                    color: categoryTitleHeaderColorFinish
                }, 0);
            });
        },
        mouseOut: function () {
            categoryClickRegion.mouseout(function () {
                TweenMax.to($(this).siblings(categoryThumbCornerFindString), categoryThumbCornerDuration, {
                    x: categoryThumbCornerXStart,
                    /*y:categoryThumbCornerYStart,*/
                    ease: categoryThumbCornerEaseEnd
                }, 0);
                TweenMax.to($(this).siblings(categoryThumbFindString), categoryThumbDuration, {
                    x: categoryThumbXStart,
                    opacity: 1,
                    ease: categoryThumbEaseEnd
                }, 0);
                TweenMax.to($(this).siblings(categoryTitleFindString).find(Header4FindString), categoryThumbDuration, {
                    color: categoryTitleHeaderColorStart
                }, 0);
            });
        },
        mouseOutTablet: function () {
            categoryClickRegion.on('vmouseout', function () {
                TweenMax.to($(this).siblings(categoryThumbCornerFindString), categoryThumbCornerDuration, {
                    x: categoryThumbCornerXStart,
                    /*y:categoryThumbCornerYStart,*/
                    ease: categoryThumbCornerEaseEnd
                }, 0);
                TweenMax.to($(this).siblings(categoryThumbFindString), categoryThumbDuration, {
                    x: categoryThumbXStart,
                    opacity: 1,
                    ease: categoryThumbEaseEnd
                }, 0);
                TweenMax.to($(this).siblings(categoryTitleFindString).find(Header4FindString), categoryThumbDuration, {
                    color: categoryTitleHeaderColorStart
                }, 0);
            });
        },
        mouseUpTablet: function () {
            categoryClickRegion.on('vclick', function () {

                TweenMax.set(temporaryBlockLayer, {
                    display: 'inline'
                });

                TweenMax.to(temporaryBlockLayer, 0, {
                    display: 'none',
                    delay: 1
                });

                TweenMax.set(portfolioItem, {
                    opacity: 0
                });

                /*var blurElement = {
                    a: 0
                };

                TweenMax.to(blurElement, 1, {
                    a: 10,
                    onUpdate: applyBlur
                }, 0);*/

                TweenMax.to(outerContainer, 0.5, {
                    opacity: 0
                }, 0);

                /*function applyBlur() {
                    TweenMax.set(outerContainer, {
                        webkitFilter: "blur(" + blurElement.a + "px)",
                        filter: "blur(" + blurElement.a + "px)"
                    });
                };*/

                TweenMax.to($(this).siblings(categoryThumbCornerFindString), categoryThumbCornerDuration, {
                    x: categoryThumbCornerXStart,
                    /*y:categoryThumbCornerYStart,*/
                    ease: categoryThumbCornerEaseEnd
                }, 0);
                TweenMax.to($(this).siblings(categoryThumbFindString), categoryThumbDuration, {
                    x: categoryThumbXStart,
                    opacity: 1,
                    ease: categoryThumbEaseEnd
                }, 0);
                TweenMax.to($(this).siblings(categoryTitleFindString).find(Header4FindString), categoryThumbDuration, {
                    color: categoryTitleHeaderColorStart
                }, 0);
                portfolioItemOverlay.removeClass(portfolioActiveString).removeClass(portfolioInactiveString).addClass(portfolioActiveString);

                TweenMax.set(portfolioItemOverlay, {
                    opacity: 1,
                    backgroundColor: 'rgba(255,255,255,0)'
                });

                TweenMax.to(portfolioItemOverlay, 0.5, {
                    backgroundColor: 'rgba(255,255,255,0.75)',
                    delay: 1
                });
                /*TweenMax.set(outerContainer, {
                    blurFilter: {
                        blurX: 0,
                        blurY: 0
                    }
                });
                TweenMax.to(outerContainer, 3, {
                    blurFilter: {
                        blurX: 10,
                        blurY: 10
                    }
                }, 0);*/
                TweenMax.set(portfolioClose, {
                    opacity: 0,
                    scale: 0.5
                });
                TweenMax.to(portfolioClose, 1, {
                    opacity: 1,
                    scale: 1,
                    ease: Elastic.easeOut
                });
                TweenMax.set(portfolioCloseHeader1, {
                    rotation: 720,
                    scale: 0.25
                });
                TweenMax.to(portfolioCloseHeader1, 1, {
                    rotation: 0,
                    scale: 1,
                    ease: Expo.easeOut
                });
                switch (true) {
                case $(this).is(bannersCategoryRegion):
                    bannersHeader.removeClass(portfolioItemHeaderActiveString).removeClass(portfolioItemHeaderInactiveString).addClass(portfolioItemHeaderActiveString);

                    portfolioItemHeaderActive = $('.portfolio-item-header-active');
                    portfolioItemHeaderActiveString = 'portfolio-item-header-active';
                    portfolioItemHeaderActiveFindString = '.portfolio-item-header-active';

                    TweenMax.set(portfolioItemHeaderActive, {
                        x: -300,
                        y: 0
                    });

                    TweenMax.to(portfolioItemHeaderActive, 1, {
                        x: 0,
                        y:0,
                        ease: Expo.easeOut
                    });
                    bannerItems.removeClass(portfolioItemsActiveString).removeClass(portfolioItemsInactiveString).addClass(portfolioItemsActiveString);
                    break;
                case $(this).is(billboardsCategoryRegion):
                    billboardsHeader.removeClass(portfolioItemHeaderActiveString).removeClass(portfolioItemHeaderInactiveString).addClass(portfolioItemHeaderActiveString);

                    portfolioItemHeaderActive = $('.portfolio-item-header-active');
                    portfolioItemHeaderActiveString = 'portfolio-item-header-active';
                    portfolioItemHeaderActiveFindString = '.portfolio-item-header-active';

                    TweenMax.set(portfolioItemHeaderActive, {
                        x: -300,
                        y: 0
                    });

                    TweenMax.to(portfolioItemHeaderActive, 1, {
                        x: 0,
                        y:0,
                        ease: Expo.easeOut
                    });
                    billboardItems.removeClass(portfolioItemsActiveString).removeClass(portfolioItemsInactiveString).addClass(portfolioItemsActiveString);
                    break;
                case $(this).is(drawingsCartoonsCategoryRegion):
                    cartoonsHeader.removeClass(portfolioItemHeaderActiveString).removeClass(portfolioItemHeaderInactiveString).addClass(portfolioItemHeaderActiveString);

                    portfolioItemHeaderActive = $('.portfolio-item-header-active');
                    portfolioItemHeaderActiveString = 'portfolio-item-header-active';
                    portfolioItemHeaderActiveFindString = '.portfolio-item-header-active';

                    TweenMax.set(portfolioItemHeaderActive, {
                        x: -300,
                        y: 0
                    });

                    TweenMax.to(portfolioItemHeaderActive, 1, {
                        x: 0,
                        y:0,
                        ease: Expo.easeOut
                    });
                    cartoonItems.removeClass(portfolioItemsActiveString).removeClass(portfolioItemsInactiveString).addClass(portfolioItemsActiveString);
                    break;
                case $(this).is(drawingsLifeCategoryRegion):
                    lifeHeader.removeClass(portfolioItemHeaderActiveString).removeClass(portfolioItemHeaderInactiveString).addClass(portfolioItemHeaderActiveString);

                    portfolioItemHeaderActive = $('.portfolio-item-header-active');
                    portfolioItemHeaderActiveString = 'portfolio-item-header-active';
                    portfolioItemHeaderActiveFindString = '.portfolio-item-header-active';

                    TweenMax.set(portfolioItemHeaderActive, {
                        x: -300,
                        y: 0
                    });

                    TweenMax.to(portfolioItemHeaderActive, 1, {
                        x: 0,
                        y:0,
                        ease: Expo.easeOut
                    });
                    lifeItems.removeClass(portfolioItemsActiveString).removeClass(portfolioItemsInactiveString).addClass(portfolioItemsActiveString);
                    break;
                case $(this).is(drawingsPortraitsCategoryRegion):
                    portraitsHeader.removeClass(portfolioItemHeaderActiveString).removeClass(portfolioItemHeaderInactiveString).addClass(portfolioItemHeaderActiveString);

                    portfolioItemHeaderActive = $('.portfolio-item-header-active');
                    portfolioItemHeaderActiveString = 'portfolio-item-header-active';
                    portfolioItemHeaderActiveFindString = '.portfolio-item-header-active';

                    TweenMax.set(portfolioItemHeaderActive, {
                        x: -300,
                        y: 0
                    });

                    TweenMax.to(portfolioItemHeaderActive, 1, {
                        x: 0,
                        y:0,
                        ease: Expo.easeOut
                    });
                    portraitItems.removeClass(portfolioItemsActiveString).removeClass(portfolioItemsInactiveString).addClass(portfolioItemsActiveString);
                    break;
                case $(this).is(eblastsCategoryRegion):
                    eblastsHeader.removeClass(portfolioItemHeaderActiveString).removeClass(portfolioItemHeaderInactiveString).addClass(portfolioItemHeaderActiveString);

                    portfolioItemHeaderActive = $('.portfolio-item-header-active');
                    portfolioItemHeaderActiveString = 'portfolio-item-header-active';
                    portfolioItemHeaderActiveFindString = '.portfolio-item-header-active';

                    TweenMax.set(portfolioItemHeaderActive, {
                        x: -300,
                        y: 0
                    });

                    TweenMax.to(portfolioItemHeaderActive, 1, {
                        x: 0,
                        y:0,
                        ease: Expo.easeOut
                    });
                    eblastItems.removeClass(portfolioItemsActiveString).removeClass(portfolioItemsInactiveString).addClass(portfolioItemsActiveString);
                    break;
                case $(this).is(flyersBrochuresCategoryRegion):
                    flyersHeader.removeClass(portfolioItemHeaderActiveString).removeClass(portfolioItemHeaderInactiveString).addClass(portfolioItemHeaderActiveString);

                    portfolioItemHeaderActive = $('.portfolio-item-header-active');
                    portfolioItemHeaderActiveString = 'portfolio-item-header-active';
                    portfolioItemHeaderActiveFindString = '.portfolio-item-header-active';

                    TweenMax.set(portfolioItemHeaderActive, {
                        x: -300,
                        y: 0
                    });

                    TweenMax.to(portfolioItemHeaderActive, 1, {
                        x: 0,
                        y:0,
                        ease: Expo.easeOut
                    });
                    flyerItems.removeClass(portfolioItemsActiveString).removeClass(portfolioItemsInactiveString).addClass(portfolioItemsActiveString);
                    break;
                case $(this).is(javascriptTestsCategoryRegion):
                    javascriptHeader.removeClass(portfolioItemHeaderActiveString).removeClass(portfolioItemHeaderInactiveString).addClass(portfolioItemHeaderActiveString);

                    portfolioItemHeaderActive = $('.portfolio-item-header-active');
                    portfolioItemHeaderActiveString = 'portfolio-item-header-active';
                    portfolioItemHeaderActiveFindString = '.portfolio-item-header-active';

                    TweenMax.set(portfolioItemHeaderActive, {
                        x: -300,
                        y: 0
                    });

                    TweenMax.to(portfolioItemHeaderActive, 1, {
                        x: 0,
                        y:0,
                        ease: Expo.easeOut
                    });
                    javascriptItems.removeClass(portfolioItemsActiveString).removeClass(portfolioItemsInactiveString).addClass(portfolioItemsActiveString);
                    break;
                case $(this).is(sitesCategoryRegion):
                    sitesHeader.removeClass(portfolioItemHeaderActiveString).removeClass(portfolioItemHeaderInactiveString).addClass(portfolioItemHeaderActiveString);

                    portfolioItemHeaderActive = $('.portfolio-item-header-active');
                    portfolioItemHeaderActiveString = 'portfolio-item-header-active';
                    portfolioItemHeaderActiveFindString = '.portfolio-item-header-active';

                    TweenMax.set(portfolioItemHeaderActive, {
                        x: -300,
                        y: 0
                    });

                    TweenMax.to(portfolioItemHeaderActive, 1, {
                        x: 0,
                        y:0,
                        ease: Expo.easeOut
                    });
                    siteItems.removeClass(portfolioItemsActiveString).removeClass(portfolioItemsInactiveString).addClass(portfolioItemsActiveString);
                    break;
                };

                portfolioActive = $('.portfolio-items-active');
                TweenMax.staggerTo(portfolioActive.find(portfolioItemsColumnFindString).eq(0).find(portfolioItemFindString), 0.5, {
                    opacity: 1,
                    delay: 0.5
                }, 0.1);
                TweenMax.staggerFrom(portfolioActive.find(portfolioItemsColumnFindString).eq(0).find(portfolioItemFindString), 0.5, {
                    z: -100,
                    ease: Back.easeOut,
                    delay: 0.5
                }, 0.1);
                TweenMax.staggerTo(portfolioActive.find(portfolioItemsColumnFindString).eq(1).find(portfolioItemFindString), 0.5, {
                    opacity: 1,
                    delay: 0.6
                }, 0.1);
                TweenMax.staggerFrom(portfolioActive.find(portfolioItemsColumnFindString).eq(1).find(portfolioItemFindString), 0.5, {
                    z: -100,
                    delay: 0.6,
                    ease: Back.easeOut
                }, 0.1);
                TweenMax.staggerTo(portfolioActive.find(portfolioItemsColumnFindString).eq(2).find(portfolioItemFindString), 0.5, {
                    opacity: 1,
                    delay: 0.7
                }, 0.1);
                TweenMax.staggerFrom(portfolioActive.find(portfolioItemsColumnFindString).eq(2).find(portfolioItemFindString), 0.5, {
                    z: -100,
                    delay: 0.7,
                    ease: Back.easeOut
                }, 0.1);
                TweenMax.staggerTo(portfolioActive.find(portfolioItemsColumnFindString).eq(3).find(portfolioItemFindString), 0.5, {
                    opacity: 1,
                    delay: 0.8
                }, 0.1);
                TweenMax.staggerFrom(portfolioActive.find(portfolioItemsColumnFindString).eq(3).find(portfolioItemFindString), 0.5, {
                    z: -100,
                    delay: 0.8,
                    ease: Back.easeOut
                }, 0.1);

                portfolioItemHeaderActive.css({
                    top: (portfolioItemHeaderContainer.height() / 2) - (portfolioItemHeaderActive.height() / 2)
                });
            });
        },
        mouseUp: function () {
            categoryClickRegion.mouseup(function () {

                TweenMax.set(temporaryBlockLayer, {
                    display: 'inline'
                });

                TweenMax.to(temporaryBlockLayer, 0, {
                    display: 'none',
                    delay: 1
                });

                TweenMax.set(portfolioItem, {
                    opacity: 0
                });

                /*var blurElement = {
                    a: 0
                };

                TweenMax.to(blurElement, 1, {
                    a: 10,
                    onUpdate: applyBlur
                }, 0);*/

                TweenMax.to(outerContainer, 0.5, {
                    opacity: 0
                }, 0);

                /*function applyBlur() {
                    TweenMax.set(outerContainer, {
                        webkitFilter: "blur(" + blurElement.a + "px)",
                        filter: "blur(" + blurElement.a + "px)"
                    });
                };*/

                TweenMax.to($(this).siblings(categoryThumbCornerFindString), categoryThumbCornerDuration, {
                    x: categoryThumbCornerXStart,
                    /*y:categoryThumbCornerYStart,*/
                    ease: categoryThumbCornerEaseEnd
                }, 0);
                TweenMax.to($(this).siblings(categoryThumbFindString), categoryThumbDuration, {
                    x: categoryThumbXStart,
                    opacity: 1,
                    ease: categoryThumbEaseEnd
                }, 0);
                TweenMax.to($(this).siblings(categoryTitleFindString).find(Header4FindString), categoryThumbDuration, {
                    color: categoryTitleHeaderColorStart
                }, 0);
                portfolioItemOverlay.removeClass(portfolioActiveString).removeClass(portfolioInactiveString).addClass(portfolioActiveString);

                TweenMax.set(portfolioItemOverlay, {
                    opacity: 1,
                    backgroundColor: 'rgba(255,255,255,0)'
                });

                TweenMax.to(portfolioItemOverlay, 0.5, {
                    backgroundColor: 'rgba(255,255,255,0.75)',
                    delay: 1
                });
                /*TweenMax.set(outerContainer, {
                    blurFilter: {
                        blurX: 0,
                        blurY: 0
                    }
                });
                TweenMax.to(outerContainer, 3, {
                    blurFilter: {
                        blurX: 10,
                        blurY: 10
                    }
                }, 0);*/
                TweenMax.set(portfolioClose, {
                    opacity: 0,
                    scale: 0.5
                });
                TweenMax.to(portfolioClose, 1, {
                    opacity: 1,
                    scale: 1,
                    ease: Elastic.easeOut
                }, 0);
                TweenMax.set(portfolioCloseHeader1, {
                    rotation: 720,
                    scale: 0.25
                });
                TweenMax.to(portfolioCloseHeader1, 1, {
                    rotation: 0,
                    scale: 1,
                    ease: Expo.easeOut
                }, 0);
                switch (true) {
                case $(this).is(bannersCategoryRegion):
                    bannersHeader.removeClass(portfolioItemHeaderActiveString).removeClass(portfolioItemHeaderInactiveString).addClass(portfolioItemHeaderActiveString);

                    portfolioItemHeaderActive = $('.portfolio-item-header-active');
                    portfolioItemHeaderActiveString = 'portfolio-item-header-active';
                    portfolioItemHeaderActiveFindString = '.portfolio-item-header-active';

                    TweenMax.set(portfolioItemHeaderActive, {
                        x: -300,
                        y: 0
                    });

                    TweenMax.to(portfolioItemHeaderActive, 1, {
                        x: 0,
                        y:0,
                        ease: Expo.easeOut
                    });
                    bannerItems.removeClass(portfolioItemsActiveString).removeClass(portfolioItemsInactiveString).addClass(portfolioItemsActiveString);
                    break;
                case $(this).is(billboardsCategoryRegion):
                    billboardsHeader.removeClass(portfolioItemHeaderActiveString).removeClass(portfolioItemHeaderInactiveString).addClass(portfolioItemHeaderActiveString);

                    portfolioItemHeaderActive = $('.portfolio-item-header-active');
                    portfolioItemHeaderActiveString = 'portfolio-item-header-active';
                    portfolioItemHeaderActiveFindString = '.portfolio-item-header-active';

                    TweenMax.set(portfolioItemHeaderActive, {
                        x: -300,
                        y: 0
                    });

                    TweenMax.to(portfolioItemHeaderActive, 1, {
                        x: 0,
                        y:0,
                        ease: Expo.easeOut
                    });
                    billboardItems.removeClass(portfolioItemsActiveString).removeClass(portfolioItemsInactiveString).addClass(portfolioItemsActiveString);
                    break;
                case $(this).is(drawingsCartoonsCategoryRegion):
                    cartoonsHeader.removeClass(portfolioItemHeaderActiveString).removeClass(portfolioItemHeaderInactiveString).addClass(portfolioItemHeaderActiveString);

                    portfolioItemHeaderActive = $('.portfolio-item-header-active');
                    portfolioItemHeaderActiveString = 'portfolio-item-header-active';
                    portfolioItemHeaderActiveFindString = '.portfolio-item-header-active';

                    TweenMax.set(portfolioItemHeaderActive, {
                        x: -300,
                        y: 0
                    });

                    TweenMax.to(portfolioItemHeaderActive, 1, {
                        x: 0,
                        y:0,
                        ease: Expo.easeOut
                    });
                    cartoonItems.removeClass(portfolioItemsActiveString).removeClass(portfolioItemsInactiveString).addClass(portfolioItemsActiveString);
                    break;
                case $(this).is(drawingsLifeCategoryRegion):
                    lifeHeader.removeClass(portfolioItemHeaderActiveString).removeClass(portfolioItemHeaderInactiveString).addClass(portfolioItemHeaderActiveString);

                    portfolioItemHeaderActive = $('.portfolio-item-header-active');
                    portfolioItemHeaderActiveString = 'portfolio-item-header-active';
                    portfolioItemHeaderActiveFindString = '.portfolio-item-header-active';

                    TweenMax.set(portfolioItemHeaderActive, {
                        x: -300,
                        y: 0
                    });

                    TweenMax.to(portfolioItemHeaderActive, 1, {
                        x: 0,
                        y:0,
                        ease: Expo.easeOut
                    });
                    lifeItems.removeClass(portfolioItemsActiveString).removeClass(portfolioItemsInactiveString).addClass(portfolioItemsActiveString);
                    break;
                case $(this).is(drawingsPortraitsCategoryRegion):
                    portraitsHeader.removeClass(portfolioItemHeaderActiveString).removeClass(portfolioItemHeaderInactiveString).addClass(portfolioItemHeaderActiveString);

                    portfolioItemHeaderActive = $('.portfolio-item-header-active');
                    portfolioItemHeaderActiveString = 'portfolio-item-header-active';
                    portfolioItemHeaderActiveFindString = '.portfolio-item-header-active';

                    TweenMax.set(portfolioItemHeaderActive, {
                        x: -300,
                        y: 0
                    });

                    TweenMax.to(portfolioItemHeaderActive, 1, {
                        x: 0,
                        y:0,
                        ease: Expo.easeOut
                    });
                    portraitItems.removeClass(portfolioItemsActiveString).removeClass(portfolioItemsInactiveString).addClass(portfolioItemsActiveString);
                    break;
                case $(this).is(eblastsCategoryRegion):
                    eblastsHeader.removeClass(portfolioItemHeaderActiveString).removeClass(portfolioItemHeaderInactiveString).addClass(portfolioItemHeaderActiveString);

                    portfolioItemHeaderActive = $('.portfolio-item-header-active');
                    portfolioItemHeaderActiveString = 'portfolio-item-header-active';
                    portfolioItemHeaderActiveFindString = '.portfolio-item-header-active';

                    TweenMax.set(portfolioItemHeaderActive, {
                        x: -300,
                        y: 0
                    });

                    TweenMax.to(portfolioItemHeaderActive, 1, {
                        x: 0,
                        y:0,
                        ease: Expo.easeOut
                    });
                    eblastItems.removeClass(portfolioItemsActiveString).removeClass(portfolioItemsInactiveString).addClass(portfolioItemsActiveString);
                    break;
                case $(this).is(flyersBrochuresCategoryRegion):
                    flyersHeader.removeClass(portfolioItemHeaderActiveString).removeClass(portfolioItemHeaderInactiveString).addClass(portfolioItemHeaderActiveString);

                    portfolioItemHeaderActive = $('.portfolio-item-header-active');
                    portfolioItemHeaderActiveString = 'portfolio-item-header-active';
                    portfolioItemHeaderActiveFindString = '.portfolio-item-header-active';

                    TweenMax.set(portfolioItemHeaderActive, {
                        x: -300,
                        y: 0
                    });

                    TweenMax.to(portfolioItemHeaderActive, 1, {
                        x: 0,
                        y:0,
                        ease: Expo.easeOut
                    });
                    flyerItems.removeClass(portfolioItemsActiveString).removeClass(portfolioItemsInactiveString).addClass(portfolioItemsActiveString);
                    break;
                case $(this).is(javascriptTestsCategoryRegion):
                    javascriptHeader.removeClass(portfolioItemHeaderActiveString).removeClass(portfolioItemHeaderInactiveString).addClass(portfolioItemHeaderActiveString);

                    portfolioItemHeaderActive = $('.portfolio-item-header-active');
                    portfolioItemHeaderActiveString = 'portfolio-item-header-active';
                    portfolioItemHeaderActiveFindString = '.portfolio-item-header-active';

                    TweenMax.set(portfolioItemHeaderActive, {
                        x: -300,
                        y: 0
                    });

                    TweenMax.to(portfolioItemHeaderActive, 1, {
                        x: 0,
                        y:0,
                        ease: Expo.easeOut
                    });
                    javascriptItems.removeClass(portfolioItemsActiveString).removeClass(portfolioItemsInactiveString).addClass(portfolioItemsActiveString);
                    break;
                case $(this).is(sitesCategoryRegion):
                    sitesHeader.removeClass(portfolioItemHeaderActiveString).removeClass(portfolioItemHeaderInactiveString).addClass(portfolioItemHeaderActiveString);

                    portfolioItemHeaderActive = $('.portfolio-item-header-active');
                    portfolioItemHeaderActiveString = 'portfolio-item-header-active';
                    portfolioItemHeaderActiveFindString = '.portfolio-item-header-active';

                    TweenMax.set(portfolioItemHeaderActive, {
                        x: -300,
                        y: 0
                    });

                    TweenMax.to(portfolioItemHeaderActive, 1, {
                        x: 0,
                        y:0,
                        ease: Expo.easeOut
                    });
                    siteItems.removeClass(portfolioItemsActiveString).removeClass(portfolioItemsInactiveString).addClass(portfolioItemsActiveString);
                    break;
                };

                portfolioActive = $('.portfolio-items-active');
                TweenMax.staggerTo(portfolioActive.find(portfolioItemsColumnFindString).eq(0).find(portfolioItemFindString), 0.5, {
                    opacity: 1,
                    delay: 0.5
                }, 0.1);
                TweenMax.staggerFrom(portfolioActive.find(portfolioItemsColumnFindString).eq(0).find(portfolioItemFindString), 0.5, {
                    z: -100,
                    ease: Back.easeOut,
                    delay: 0.5
                }, 0.1);
                TweenMax.staggerTo(portfolioActive.find(portfolioItemsColumnFindString).eq(1).find(portfolioItemFindString), 0.5, {
                    opacity: 1,
                    delay: 0.6
                }, 0.1);
                TweenMax.staggerFrom(portfolioActive.find(portfolioItemsColumnFindString).eq(1).find(portfolioItemFindString), 0.5, {
                    z: -100,
                    delay: 0.6,
                    ease: Back.easeOut
                }, 0.1);
                TweenMax.staggerTo(portfolioActive.find(portfolioItemsColumnFindString).eq(2).find(portfolioItemFindString), 0.5, {
                    opacity: 1,
                    delay: 0.7
                }, 0.1);
                TweenMax.staggerFrom(portfolioActive.find(portfolioItemsColumnFindString).eq(2).find(portfolioItemFindString), 0.5, {
                    z: -100,
                    delay: 0.7,
                    ease: Back.easeOut
                }, 0.1);
                TweenMax.staggerTo(portfolioActive.find(portfolioItemsColumnFindString).eq(3).find(portfolioItemFindString), 0.5, {
                    opacity: 1,
                    delay: 0.8
                }, 0.1);
                TweenMax.staggerFrom(portfolioActive.find(portfolioItemsColumnFindString).eq(3).find(portfolioItemFindString), 0.5, {
                    z: -100,
                    delay: 0.8,
                    ease: Back.easeOut
                }, 0.1);

                portfolioItemHeaderActive.css({
                    top: (portfolioItemHeaderContainer.height() / 2) - (portfolioItemHeaderActive.height() / 2)
                });
            });
        }
    },
    portfolioClose: {
        mouseOver: function () {
            portfolioCloseClickRegion.on('mouseover', function () {
                if (!closeBtnActive) {
                    TweenMax.to($(this).parent(portfolioCloseFindString), 0.25, {
                        backgroundColor: blackColor,
                        ease: Quad.easeOut
                    }, 0);
                    TweenMax.to($(this).parent(portfolioCloseFindString).find('h1'), 0.25, {
                        color: whiteColor,
                        ease: Quad.easeOut
                    }, 0);
                }
            });
        },
        mouseOverTablet: function () {
            portfolioClose.on('vmouseover', function (e) {
                e.preventDefault();
            });
            portfolioCloseHeader1.on('vmouseover', function (e) {
                e.preventDefault();
            });
            portfolioCloseClickRegion.on('vmouseover', function (e) {
                e.preventDefault();
                if (!closeBtnActive) {
                    TweenMax.to($(this).parent(portfolioCloseFindString), 0.25, {
                        backgroundColor: blackColor,
                        ease: Quad.easeOut
                    }, 0);
                    TweenMax.to($(this).parent(portfolioCloseFindString).find('h1'), 0.25, {
                        color: whiteColor,
                        ease: Quad.easeOut
                    }, 0);
                }
            });
        },
        mouseOut: function () {
            portfolioCloseClickRegion.on('mouseout', function () {
                if (!closeBtnActive) {
                    TweenMax.to($(this).parent(portfolioCloseFindString), 0.25, {
                        backgroundColor: whiteColor,
                        ease: Quad.easeOut
                    }, 0);
                    TweenMax.to($(this).parent(portfolioCloseFindString).find('h1'), 0.25, {
                        color: blackColor,
                        ease: Quad.easeOut
                    }, 0);
                }
            });
        },
        mouseOutTablet: function () {
            portfolioCloseClickRegion.on('vmouseout', function () {
                if (!closeBtnActive) {
                    TweenMax.to($(this).parent(portfolioCloseFindString), 0.25, {
                        backgroundColor: whiteColor,
                        ease: Quad.easeOut
                    }, 0);
                    TweenMax.to($(this).parent(portfolioCloseFindString).find('h1'), 0.25, {
                        color: blackColor,
                        ease: Quad.easeOut
                    }, 0);
                }
            });
        },
        mouseUpTablet: function () {
            portfolioCloseClickRegion.on('vclick', function () {

                /*var blurElement = {
                    a: 10
                };

                TweenMax.to(blurElement, 0.5, {
                    a: 0,
                    opacity: 1,
                    onUpdate: applyBlur
                });*/

                TweenMax.to(outerContainer, 0.5, {
                    opacity: 1
                }, 0);

                /*function applyBlur() {
                    TweenMax.set(outerContainer, {
                        webkitFilter: "blur(" + blurElement.a + "px)",
                        filter: "blur(" + blurElement.a + "px)"
                    });
                };*/

                TweenMax.to(portfolioItemOverlay, 0.5, {
                    opacity: 0,
                    onComplete: function () {
                        closeBtnActive = false;
                        portfolioItemOverlay.removeClass(portfolioActiveString).removeClass(portfolioInactiveString).addClass(portfolioInactiveString);
                        portfolioItemHeader.removeClass(portfolioItemHeaderActiveString).removeClass(portfolioItemHeaderInactiveString).addClass(portfolioItemHeaderInactiveString);
                        portfolioItems.removeClass(portfolioItemsActiveString).removeClass(portfolioItemsInactiveString).addClass(portfolioItemsInactiveString);
                    }
                }, 0);
                /*TweenMax.to(outerContainer, 0.5, {
                    webkitFilter: 'blur(0)'
                }, 0);*/
                closeBtnActive = true;
                TweenMax.to($(this).parent(portfolioCloseFindString), 0.5, {
                    backgroundColor: whiteColor,
                    scale: 0.5,
                    opacity: 0,
                    ease: Back.easeInOut
                }, 0);
                TweenMax.to($(this).parent(portfolioCloseFindString).find('h1'), 0.5, {
                    color: blackColor,
                    ease: Quad.easeOut
                }, 0);
            });
        },
        mouseUp: function () {
            portfolioCloseClickRegion.mouseup(function () {

                /*var blurElement = {
                    a: 10
                };

                TweenMax.to(blurElement, 0.5, {
                    a: 0,
                    opacity: 1,
                    onUpdate: applyBlur
                });*/

                TweenMax.to(outerContainer, 0.5, {
                    opacity: 1
                }, 0);

                /*function applyBlur() {
                    TweenMax.set(outerContainer, {
                        webkitFilter: "blur(" + blurElement.a + "px)",
                        filter: "blur(" + blurElement.a + "px)"
                    });
                };*/

                TweenMax.to(portfolioItemOverlay, 0.5, {
                    opacity: 0,
                    onComplete: function () {
                        closeBtnActive = false;
                        portfolioItemOverlay.removeClass(portfolioActiveString).removeClass(portfolioInactiveString).addClass(portfolioInactiveString);
                        portfolioItemHeader.removeClass(portfolioItemHeaderActiveString).removeClass(portfolioItemHeaderInactiveString).addClass(portfolioItemHeaderInactiveString);
                        portfolioItems.removeClass(portfolioItemsActiveString).removeClass(portfolioItemsInactiveString).addClass(portfolioItemsInactiveString);
                    }
                }, 0);
                /*TweenMax.to(outerContainer, 0.5, {
                    webkitFilter: 'blur(0)'
                }, 0);*/
                closeBtnActive = true;
                TweenMax.to($(this).parent(portfolioCloseFindString), 0.5, {
                    backgroundColor: whiteColor,
                    scale: 0.5,
                    opacity: 0,
                    ease: Back.easeInOut
                }, 0);
                TweenMax.to($(this).parent(portfolioCloseFindString).find('h1'), 0.5, {
                    color: blackColor,
                    ease: Quad.easeOut
                }, 0);
            });
        }
    }
}