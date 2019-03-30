function hashChecker() {
                
    switch(true) {

        case ((window.location.hash === '') || (window.location.hash === '#') || (window.location.hash === '#/')):
            pageIndex = 0;
            menuItem.eq(0).velocity({
                color:'#ffffff'
            }, {
                duration:menuItemSelectorDuration,
                ease:menuItemSelectorEase,
                queue:false
            }).siblings(menuItem).velocity({
                color:'#000000'
            }, {
                duration:menuItemSelectorDuration,
                ease:menuItemSelectorEase,
                queue:false
            });
            aboutSection.fadeIn(0).css({
               opacity:'1'
            });
            backgroundColor.css({
               backgroundColor:backgroundColorAbout
            });
            menuItemSelector.addClass(onAbout).css({
                transform:'translateX(' + aboutSelectorPositionX + ')'
            });
            bioCache.imagesLoaded(function() {
                bioCache.detach();
                contentBodyInner.detach();
                contactFormTempContainer.hide(0);
                backgroundImage.imagesLoaded(function() {
                            animations.logo();
                            animations.intro.fullPage.about();
                            animations.intro.content.tiles.bioPic.about();
                            animations.intro.content.tiles.topHeader.about();
                            animations.intro.content.tiles.paragraph.about();
                });
            });

            break;

        case (window.location.hash === '#/about'):
            pageIndex = 0;
            menuItem.eq(0).velocity({
                color:'#ffffff'
            }, {
                duration:menuItemSelectorDuration,
                ease:menuItemSelectorEase,
                queue:false
            }).siblings(menuItem).velocity({
                color:'#000000'
            }, {
                duration:menuItemSelectorDuration,
                ease:menuItemSelectorEase,
                queue:false
            });
            resumeSection.css({
               opacity:'1' 
            });
            backgroundColor.css({
               backgroundColor:backgroundColorAbout
            });
            menuItemSelector.addClass(onAbout).css({
                transform:'translateX(' + aboutSelectorPositionX + ')'
            });
            foregroundAbout.addClass(backgroundImageActiveString);
            backgroundAbout.addClass(backgroundSkyActiveString);
            bioCache.imagesLoaded(function() {
                bioCache.detach();
                contentBodyInner.detach();
                contactFormTempContainer.hide(0);
                backgroundImage.imagesLoaded(function() {
                            animations.logo();
                            animations.intro.fullPage.about();
                            animations.intro.content.tiles.bioPic.about();
                            animations.intro.content.tiles.topHeader.about();
                            animations.intro.content.tiles.paragraph.about();
                });
            });

            break;

        case (window.location.hash === '#/resume'):
            pageIndex = 1;
            menuItem.eq(1).velocity({
                color:'#ffffff'
            }, {
                duration:menuItemSelectorDuration,
                ease:menuItemSelectorEase,
                queue:false
            }).siblings(menuItem).velocity({
                color:'#000000'
            }, {
                duration:menuItemSelectorDuration,
                ease:menuItemSelectorEase,
                queue:false
            });
            aboutSection.fadeIn(0).css({
               opacity:'1' 
            });
            backgroundColor.css({
               backgroundColor:backgroundColorResume
            });
            menuItemSelector.addClass(onResume).css({
                transform:'translateX(' + resumeSelectorPositionX + ')'
            });
            foregroundResume.addClass(backgroundImageActiveString);
            backgroundResume.addClass(backgroundSkyActiveString);
            bioCache.imagesLoaded(function() {
                bioCache.detach();
                contentBodyInner.detach();
                contactFormTempContainer.hide(0);
                backgroundImage.imagesLoaded(function() {
                            animations.logo();
                            animations.intro.fullPage.resume();
                            animations.intro.content.tiles.bioPic.resume();
                            animations.intro.content.tiles.topHeader.resume();
                            animations.intro.content.tiles.paragraph.resume();
                });
            });

            break;

        case (window.location.hash === '#/portfolio'):
            pageIndex = 2;
            menuItem.eq(2).velocity({
                color:'#ffffff'
            }, {
                duration:menuItemSelectorDuration,
                ease:menuItemSelectorEase,
                queue:false
            }).siblings(menuItem).velocity({
                color:'#000000'
            }, {
                duration:menuItemSelectorDuration,
                ease:menuItemSelectorEase,
                queue:false
            });
            portfolioSection.fadeIn(0).css({
               opacity:'1' 
            });
            backgroundColor.css({
               backgroundColor:backgroundColorPortfolio
            });
            menuItemSelector.addClass(onPortfolio).css({
                transform:'translateX(' + portfolioSelectorPositionX + ')'
            });
            foregroundPortfolio.addClass(backgroundImageActiveString);
            backgroundPortfolio.addClass(backgroundSkyActiveString);
            bioCache.imagesLoaded(function() {
                bioCache.detach();
                contentBodyInner.detach();
                contactFormTempContainer.hide(0);
                backgroundImage.imagesLoaded(function() {
                            animations.logo();
                            animations.intro.fullPage.portfolio();
                            animations.intro.content.tiles.bioPic.portfolio();
                            animations.intro.content.tiles.topHeader.portfolio();
                            animations.intro.content.tiles.paragraph.portfolio();
                });
            });

            break;

        case (window.location.hash === '#/contact'):
            pageIndex = 3;
            menuItem.eq(3).velocity({
                color:'#ffffff'
            }, {
                duration:menuItemSelectorDuration,
                ease:menuItemSelectorEase,
                queue:false
            }).siblings(menuItem).velocity({
                color:'#000000'
            }, {
                duration:menuItemSelectorDuration,
                ease:menuItemSelectorEase,
                queue:false
            });
            contactSection.fadeIn(0).css({
               opacity:'1' 
            });
            backgroundColor.css({
               backgroundColor:backgroundColorContact
            });
            menuItemSelector.addClass(onContact).css({
                transform:'translateX(' + contactSelectorPositionX + ')'
            });
            foregroundContact.addClass(backgroundImageActiveString);
            backgroundContact.addClass(backgroundSkyActiveString);
            bioCache.imagesLoaded(function() {
                bioCache.detach();
                contentBodyInner.detach();
                contactFormTempContainer.hide(0);
                backgroundImage.imagesLoaded(function() {
                            animations.logo();
                            animations.intro.fullPage.contact();
                            animations.intro.content.tiles.bioPic.contact();
                            animations.intro.content.tiles.topHeader.contact();
                            animations.intro.content.tiles.paragraph.contact();
                });
            });

            break;
    }
    
}

function menuItemTotalWidth() {
    for (i = 0; i < menuItemCount; i++) {
        currentMenuItem = menuItem.eq(i);
    }
};

function selectorChecker() {
    switch(true) {
            
        case menuItemSelector.hasClass(onAbout):
            menuItemSelector.velocity({
                translateX:'0px',
                width:menuAboutInnerWidth + 'px'
            }, {
                duration:0,
                queue:false
            });
            menuItem.eq(0).css('color','#ffffff').siblings(menuItem).css('color','#000000');
            break;
            
        case menuItemSelector.hasClass(onResume):
            menuItemSelector.velocity({
                translateX:menuAboutInnerWidth + 'px',
                width:menuResumeInnerWidth + 'px'
            }, {
                duration:0,
                queue:false
            });
            menuItem.eq(1).css('color','#ffffff').siblings(menuItem).css('color','#000000');
            break;
            
        case menuItemSelector.hasClass(onPortfolio):
            menuItemSelector.velocity({
                translateX:(menuAboutInnerWidth + menuResumeInnerWidth) + 'px',
                width:menuPortfolioInnerWidth + 'px'
            }, {
                duration:0,
                queue:false
            });
            menuItem.eq(2).css('color','#ffffff').siblings(menuItem).css('color','#000000');
            break;
            
        case menuItemSelector.hasClass(onContact):
            menuItemSelector.velocity({
                translateX:(menuAboutInnerWidth + menuResumeInnerWidth + menuPortfolioInnerWidth) + 'px',
                width:menuContactInnerWidth + 'px'
            }, {
                duration:0,
                queue:false
            });
            menuItem.eq(3).css('color','#ffffff').siblings(menuItem).css('color','#000000');
            break;
            
    };
};

function loadSiteItems() {
  
    portfolioTileContainerInner.html(
    
        '<div class="portfolio-tile-column"><div class="portfolio-tile"><a href="http://bennettcodes.com/sites/full/ace-of-spades/" target="_blank"><img class="tile" src="images/portfolio/websites/aos.jpg"></a>' +
        '<div class="tile-title"><h2>Ace of Spades</h2></div></div>' +
    
        '<div class="portfolio-tile"><a href="http://infocusadv.com/fazio15" target="_blank"><img class="tile" src="images/portfolio/websites/fc.jpg"></a>' +
        '<div class="tile-title"><h2>Fazio CLeaners</h2></div></div>' +
    
        '<div class="portfolio-tile"><a href="http://kestrelbiologic.com" target="_blank"><img class="tile" src="images/portfolio/websites/kb.jpg"></a>' +
        '<div class="tile-title"><h2>Kestrel Biologic</h2></div></div></div>' +
        
        '<div class="portfolio-tile-column"><div class="portfolio-tile"><a href="http://bennettcodes.com/sites/full/ifa-dec-15" target="_blank"><img class="tile" src="images/portfolio/websites/ifa2.jpg"></a>' +
        '<div class="tile-title"><h2>in Focus Advertising</h2></div></div>' +
    
        '<div class="portfolio-tile"><a href="http://infocusadv.com/comet-live" target="_blank"><img class="tile" src="images/portfolio/websites/ce.jpg"></a>' +
        '<div class="tile-title"><h2>Comet Electric</h2></div></div>' +
    
        '<div class="portfolio-tile"><a href="http://bennettcodes.com/sites/landing/icdc-national-11-15" target="_blank"><img class="tile" src="images/portfolio/websites/icdc.jpg"></a>' +
        '<div class="tile-title"><h2>ICDC College</h2></div></div></div>' +
    
        '<div class="portfolio-tile-column"><div class="portfolio-tile"><a href="http://bennettplays.com" target="_blank"><img class="tile" src="images/portfolio/websites/bp2.jpg"></a>' +
        '<div class="tile-title"><h2>Bennett Plays</h2></div></div>' +
    
        '<div class="portfolio-tile"><a href="http://bennettcodes.com/sites/landing/greenpros-facebook-12-15" target="_blank"><img class="tile" src="images/portfolio/websites/gp.jpg"></a>' +
        '<div class="tile-title"><h2>Green Pros</h2></div></div>' +
    
        '<div class="portfolio-tile"><a href="http://bennettcodes.com/sites/landing/fer-vegas-09-15" target="_blank"><img class="tile" src="images/portfolio/websites/fer.jpg"></a>' +
        '<div class="tile-title"><h2>FER CPE</h2></div></div></div>' +
    
        '<div class="portfolio-tile-column"><div class="portfolio-tile"><a href="http://polachecks.com" target="_blank"><img class="tile" src="images/portfolio/websites/pj.jpg"></a>' +
        '<div class="tile-title"><h2>Polacheck\'s Jewelers</h2></div></div>' +
    
        '<div class="portfolio-tile"><a href="http://cleanroomsplus.com" target="_blank"><img class="tile" src="images/portfolio/websites/crp.jpg"></a>' +
        '<div class="tile-title"><h2>Cleanrooms Plus</h2></div></div></div>'
    
    );
    
};

function loadJavascriptItems() {
  
    portfolioTileContainerInner.html(
    
        '<div class="portfolio-tile-column"><div class="portfolio-tile"><a href="http://bennettcodes.com/sites/full/ace-of-spades/" target="_blank"><img class="tile" src="images/portfolio/websites/aos.jpg"></a>' +
        '<div class="tile-title"><h2>Ace of Spades</h2></div></div>' +
        
        '<div class="portfolio-tile"><a href="http://bennettcodes.com/dev/velocity/planet/" target="_blank"><img class="tile" src="images/portfolio/javascript/planet.jpg"></a>' +
        '<div class="tile-title"><h2>Parallax Planet</h2></div></div>' +
    
        '<div class="portfolio-tile"><a href="http://bennettcodes.com/dev/cursor-move-events/" target="_blank"><img class="tile" src="images/portfolio/javascript/brain.jpg"></a>' +
        '<div class="tile-title"><h2>Left &amp; Right Brain</h2></div></div></div>' +
    
        '<div class="portfolio-tile-column"><div class="portfolio-tile"><a href="http://bennettcodes.com/sites/full/bc2/" target="_blank"><img class="tile" src="images/portfolio/javascript/globe.jpg"></a>' +
        '<div class="tile-title"><h2>Globe One-Pager</h2></div></div>' +
    
        '<div class="portfolio-tile"><a href="http://bennettcodes.com/sites/full/drunk-ball/" target="_blank"><img class="tile" src="images/portfolio/javascript/drunk-ball.jpg"></a>' +
        '<div class="tile-title"><h2>Drunk Ball Test</h2></div></div>' +
    
        '<div class="portfolio-tile"><a href="http://bennettcodes.com/dev/gallery-test/" target="_blank"><img class="tile" src="images/portfolio/javascript/gallery.jpg"></a>' +
        '<div class="tile-title"><h2>Photo Gallery</h2></div></div></div>' +
    
        '<div class="portfolio-tile-column"><div class="portfolio-tile"><a href="http://bennettcodes.com/sites/full/onepage-performance-test/" target="_blank"><img class="tile" src="images/portfolio/javascript/onepage-slider.jpg"></a>' +
        '<div class="tile-title"><h2>Slider Performance Test</h2></div></div>' +
    
        '<div class="portfolio-tile"><a href="http://bennettcodes.com/sites/full/earth-parallax/" target="_blank"><img class="tile" src="images/portfolio/javascript/cycles.jpg"></a>' +
        '<div class="tile-title"><h2>Parallax Day/Night Cycle</h2></div></div>' +
    
        '<div class="portfolio-tile"><a href="http://bennettcodes.com/sites/full/corben-optometry/" target="_blank"><img class="tile" src="images/portfolio/javascript/corben.jpg"></a>' +
        '<div class="tile-title"><h2>Glasses Selection Wizard</h2></div></div></div>' +
    
        '<div class="portfolio-tile-column"><div class="portfolio-tile"><a href="http://bennettcodes.com/sites/full/angular-test/weather" target="_blank"><img class="tile" src="images/portfolio/javascript/angular-weather.jpg"></a>' +
        '<div class="tile-title"><h2>Angular.JS App</h2></div></div>' +
    
        '<div class="portfolio-tile"><a href="http://bennettcodes.com/dev/velocity/transform-test/" target="_blank"><img class="tile" src="images/portfolio/javascript/number-cube.jpg"></a>' +
        '<div class="tile-title"><h2>CSS 3D Transforming</h2></div></div>' +
    
        '<div class="portfolio-tile"><a href="http://bennettcodes.com/dev/css-transform-test/" target="_blank"><img class="tile" src="images/portfolio/javascript/transform.jpg"></a>' +
        '<div class="tile-title"><h2>CSS 3D Transforming</h2></div></div></div>'
    
    );
    
};

function loadBannerItems() {
  
    portfolioTileContainerInner.html(
        
        '<div class="portfolio-tile-column"><div class="portfolio-tile"><img class="tile" src="images/portfolio/banners/longo1.jpg"></div>' +
    
        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/banners/longo2.jpg"></div>' +
    
        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/banners/longo3.jpg"></div></div>' +
    
        '<div class="portfolio-tile-column"><div class="portfolio-tile"><img class="tile" src="images/portfolio/banners/longo4.jpg"></div>' +
    
        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/banners/tvt1.jpg"></div>' +
    
        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/banners/tvt2.jpg"></div></div>' +
    
        '<div class="portfolio-tile-column"><div class="portfolio-tile"><img class="tile" src="images/portfolio/banners/tvt3.jpg"></div>' +
    
        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/banners/tvt4.jpg"></div>' +
    
        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/banners/cbu1.jpg"></div></div>' +
    
        '<div class="portfolio-tile-column"><div class="portfolio-tile"><img class="tile" src="images/portfolio/banners/cbu2.jpg"></div>' +
    
        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/banners/cbu3.jpg"></div>' +
    
        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/banners/cbu4.jpg"></div></div>'
    
    );
    
};

function loadEblastItems() {
  
    portfolioTileContainerInner.html(
        
        '<div class="portfolio-tile-column"><div class="portfolio-tile"><img class="tile" src="images/portfolio/eblasts/vc1.jpg"></div>' +
        
        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/eblasts/ims1.jpg"></div></div>' +
    
        '<div class="portfolio-tile-column"><div class="portfolio-tile"><img class="tile" src="images/portfolio/eblasts/mst1.jpg"></div>' +
    
        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/eblasts/ims2.jpg"></div></div>' +
    
        '<div class="portfolio-tile-column"><div class="portfolio-tile"><img class="tile" src="images/portfolio/eblasts/ims3.jpg"></div>' +
    
        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/eblasts/ims4.jpg"></div></div>' +
    
        '<div class="portfolio-tile-column"><div class="portfolio-tile"><img class="tile" src="images/portfolio/eblasts/pj1.jpg"></div>' +
    
        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/eblasts/pj2-mobile.jpg"></div></div>'
    
    );
    
};

function loadFlyerItems() {
  
    portfolioTileContainerInner.html(
        
        '<div class="portfolio-tile-column"><div class="portfolio-tile"><img class="tile" src="images/portfolio/flyers/sm1.jpg"></div>' +
    
        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/flyers/cbu1-1.jpg"></div></div>' +
    
        '<div class="portfolio-tile-column"><div class="portfolio-tile"><img class="tile" src="images/portfolio/flyers/cbu2.jpg"></div>' +
    
        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/flyers/cbu3.jpg"></div></div>' +
    
        '<div class="portfolio-tile-column"><div class="portfolio-tile"><img class="tile" src="images/portfolio/flyers/fc1.jpg"></div>' +
    
        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/flyers/fc2.jpg"></div></div>' +
        
        '<div class="portfolio-tile-column"><div class="portfolio-tile"><a href="images/portfolio/brochures/cbu-brochure.pdf" target="_blank"><img class="tile" src="images/portfolio/brochures/cbu1.jpg"></a>' +
        '<div class="tile-title"><h2>Click To View</h2></div></div>' +
    
        '<div class="portfolio-tile"><a href="images/portfolio/brochures/lite-brochure.pdf" target="_blank"><img class="tile" src="images/portfolio/brochures/l1.jpg"></a>' +
        '<div class="tile-title"><h2>Click To View</h2></div></div></div>'
    
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
        
        '<div class="portfolio-tile-column-50"><div class="portfolio-tile"><img class="tile" src="images/portfolio/billboards/bb1.jpg"></div>' +
    
        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/billboards/bb2.jpg"></div>' +
    
        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/billboards/bb3.jpg"></div>' +
    
        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/billboards/bb4.jpg"></div>' +
    
        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/billboards/bb5.jpg"></div>' +
    
        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/billboards/bb6.jpg"></div>' +
    
        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/billboards/cbu1.jpg"></div></div>' +
    
        '<div class="portfolio-tile-column-50"><div class="portfolio-tile"><img class="tile" src="images/portfolio/billboards/cbu2.jpg"></div>' +
    
        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/billboards/cbu3.jpg"></div>' +
    
        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/billboards/cbu4.jpg"></div>' +
    
        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/billboards/cbu5.jpg"></div>' +
    
        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/billboards/ims1.jpg"></div>' +
    
        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/billboards/ims2.jpg"></div>' +
    
        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/billboards/ims3.jpg"></div>' +
    
        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/billboards/ims4.jpg"></div></div>'
    
    );
    
};

function loadCartoonItems() {
  
    portfolioTileContainerInner.html(
        
        '<div class="portfolio-tile-column"><div class="portfolio-tile"><img class="tile" src="images/portfolio/drawings/cartoons/mushu-sketch.jpg"></div>' +
    
        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/drawings/cartoons/mushu-color.jpg"></div></div>' +
    
        '<div class="portfolio-tile-column"><div class="portfolio-tile"><img class="tile" src="images/portfolio/drawings/cartoons/beast-sketch.jpg"></div></div>' +
    
        '<div class="portfolio-tile-column"><div class="portfolio-tile"><img class="tile" src="images/portfolio/drawings/cartoons/mufasa-sketch.jpg"></div></div>' +
    
        '<div class="portfolio-tile-column"><div class="portfolio-tile"><img class="tile" src="images/portfolio/drawings/cartoons/kuzco-sketch.jpg"></div></div>'
    
    );
    
};

function loadLifeItems() {
  
    portfolioTileContainerInner.html(
        
        '<div class="portfolio-tile-column"><div class="portfolio-tile"><img class="tile" src="images/portfolio/drawings/life-drawings/animals.jpg"></div>' +
    
        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/drawings/life-drawings/models2.jpg"></div>' +
    
        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/drawings/life-drawings/models3.jpg"></div></div>' +
    
        '<div class="portfolio-tile-column"><div class="portfolio-tile"><img class="tile" src="images/portfolio/drawings/life-drawings/models5.jpg"></div>' +
    
        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/drawings/life-drawings/models4.jpg"></div></div>' +
    
        '<div class="portfolio-tile-column"><div class="portfolio-tile"><img class="tile" src="images/portfolio/drawings/life-drawings/zorro.jpg"></div>' +
    
        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/drawings/life-drawings/models1.jpg"></div>' +
    
        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/drawings/life-drawings/anatomy1.jpg"></div></div>' +
    
        '<div class="portfolio-tile-column"><div class="portfolio-tile"><img class="tile" src="images/portfolio/drawings/life-drawings/anatomy2.jpg"></div>' +
    
        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/drawings/life-drawings/anatomy3.jpg"></div>' +
    
        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/drawings/life-drawings/models6.jpg"></div></div>'
    
    );
    
};

function loadPortraitItems() {
  
    portfolioTileContainerInner.html(
        
        '<div class="portfolio-tile-column"><div class="portfolio-tile"><img class="tile" src="images/portfolio/drawings/portraits/audrey-hepburn.jpg"></div>' +
    
        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/drawings/portraits/monkey.jpg"></div></div>' +
    
        '<div class="portfolio-tile-column"><div class="portfolio-tile"><img class="tile" src="images/portfolio/drawings/portraits/christian-bale.jpg"></div>' +
    
        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/drawings/portraits/joker.jpg"></div></div>' +
    
        '<div class="portfolio-tile-column"><div class="portfolio-tile"><img class="tile" src="images/portfolio/drawings/portraits/model-forward.jpg"></div>' +
    
        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/drawings/portraits/model-side.jpg"></div></div>' +
    
        '<div class="portfolio-tile-column"><div class="portfolio-tile"><img class="tile" src="images/portfolio/drawings/portraits/model-side2.jpg"></div>' +
    
        '<div class="portfolio-tile"><img class="tile" src="images/portfolio/drawings/portraits/zorro.jpg"></div></div>'
    
    );
    
};

function portfolioCategoryClick() {
    
    portfolioCategory.click(function() {

        currentPortfolioCategory = $(this);

        currentPortfolioCategoryText = $(this).find(portfolioCategoryText);

        switch(true) {
            case (currentPortfolioCategory.hasClass(sitesCategoryString)):

                transitions.portfolio.loadIn.sites();

                break;
            case (currentPortfolioCategory.hasClass(javascriptCategoryString)):

                transitions.portfolio.loadIn.javascript();

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
    });
    
};

function portfolioCategoryClickClose() {
    
    portfolioCloseTapRegion.click(function() {
                                            
        switch(true) {
            case (websitesHeader.hasClass(portfolioTileHeaderActiveString)):

                transitions.portfolio.loadOut.sites();

                break;
            case (javascriptHeader.hasClass(portfolioTileHeaderActiveString)):

                transitions.portfolio.loadOut.javascript();

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
    });
    
};

function portfolioCategoryTextVerticalAlign() {
    
    for (i = 0; i < portfolioCategory.length; i++) {
        currentCategory = portfolioCategory.eq(i);
        currentText = currentCategory.find(portfolioCategoryText);
        
        currentText.css({
           top:((portfolioCategory.height() / 2) - (currentText.height() / 2)) + 'px' 
        });
    }
};

function portfolioCategoryAnimateIn() {
    
    for (i = 0; i < portfolioCategory.length; i++) {
        currentCategory = portfolioCategory.eq(i);
        currentText = currentCategory.find(portfolioCategoryText);
        
        currentCategory.stop(1,1).css('opacity','0').velocity({
           /*rotateZ:[zeroDegrees,'180deg'],*/
           scale:['1', 'spring', '0.3'],
           opacity:['1','1'],
           backgroundColor:['#000000', 'swing', '#ffffff']
        }, {
            duration:1000,
            delay:catDelay+=100,
            easing:'easeOutCirc'
        });
    }
};

function portfolioCategoryRollover() {
    portfolioCategory.hover(function() {
       $(this).velocity({
           backgroundColor:'#ffffff',
           scale:['1.2','spring']
       }, {
           duration:500,
           easing:'easeOutQuart',
           queue:false
       });
       $(this).find(portfolioCategoryText).velocity({
           color:'#000000'
       }, {
           duration:500,
           easing:'easeOutQuart',
           queue:false
       });
    }, function() {
       $(this).velocity({
           backgroundColor:['#000000','#ffffff'],
           scale:['1', 'spring', '1.2']
       }, {
           duration:500,
           easing:'swing',
           queue:false
       });
       $(this).find(portfolioCategoryText).velocity({
           color:['#ffffff','#000000']
       }, {
           duration:500,
           easing:'swing',
           queue:false
       });
    });
};

function portfolioCloseRollover() {
    portfolioCloseTapRegion.hover(function() {
        $(this).parent(portfolioClose).velocity({
            backgroundColor:'#000000'
        }, {
            duration:250,
            easing:'swing',
            queue:false
        });
        $(this).parent(portfolioClose).find(portfolioCloseIcon).velocity({
            color:'#ffffff'
        }, {
            duration:250,
            easing:'swing',
            queue:false
        });
    }, function() {
        $(this).parent(portfolioClose).velocity({
            backgroundColor:'#ffffff'
        }, {
            duration:250,
            easing:'swing',
            queue:false
        });
        $(this).parent(portfolioClose).find(portfolioCloseIcon).velocity({
            color:'#000000'
        }, {
            duration:250,
            easing:'swing',
            queue:false
        });
    });
}

function initialProperties() {
    
    logo.css({
       width:lastName.width() 
    });
    
    firstName.css({
       width:lastName.width() 
    });
    
    menuItem.css({
        height:menuContainer.height(),
        lineHeight:menuContainer.height() + 'px'
    });
    
    menuItem.eq(0).css({
       paddingLeft:'30px' 
    });
    
    menuItem.eq(3).css({
       paddingRight:'30px' 
    });
    
    menuItemSelector.css({
        width:menuItem.outerWidth(),
        height:menuContainer.height()
    });
    
    menuContainer.css({
       width:menuItemTotalWidth
    });
    
    menuContainer.css({
       left:($(window).width() / 2) - (menuContainer.width() / 2)
    });
    
    portfolioCloseIcon.velocity({
       rotateZ:'45deg' 
    }, {
        duration:0
    });
    
    
/*    foreground.css({
       left:($(window).width() / 2) - (foreground.width() / 2) + 'px' 
    });
    
    foreground2.css({
       left:(foreground2Container.width() / 2) - (foreground2.width() / 2) + 'px' 
    });*/
    
    /*background.css({
       left:(backgroundContainer.width() / 2) - (background.width() / 2) + 'px' 
    });*/
    
    /*content.css({
       left:($(window).width() / 2) - (content.width() / 2) + 'px'
    });*/
    
};
    
function menuItemRollover() {
    menuItem.mouseover(function() {

        switch(true) {

            case $(this).hasClass(menuAboutString):
                menuAbout.velocity({
                    backgroundColorRed:['0','0'],
                    backgroundColorGreen:['0','0'],
                    backgroundColorBlue:['0','0'],
                    backgroundColorAlpha:['0.1','0']
                }, {
                    duration:1000,
                    easing:'easeOutCirc',
                    queue:false
                });
                break;

            case $(this).hasClass(menuResumeString):
                menuResume.velocity({
                    backgroundColorRed:['0','0'],
                    backgroundColorGreen:['0','0'],
                    backgroundColorBlue:['0','0'],
                    backgroundColorAlpha:['0.1','0']
                }, {
                    duration:1000,
                    easing:'easeOutCirc',
                    queue:false
                });
                break;

            case $(this).hasClass(menuPortfolioString):
                menuPortfolio.velocity({
                    backgroundColorRed:['0','0'],
                    backgroundColorGreen:['0','0'],
                    backgroundColorBlue:['0','0'],
                    backgroundColorAlpha:['0.1','0']
                }, {
                    duration:1000,
                    easing:'easeOutCirc',
                    queue:false
                });
                break;

            case $(this).hasClass(menuContactString):
                menuContact.velocity({
                    backgroundColorRed:['0','0'],
                    backgroundColorGreen:['0','0'],
                    backgroundColorBlue:['0','0'],
                    backgroundColorAlpha:['0.1','0']
                }, {
                    duration:1000,
                    easing:'easeOutCirc',
                    queue:false
                });
                break;
        }

    });
    menuItem.mouseout(function() {

        switch(true) {

            case $(this).hasClass(menuAboutString):
                menuAbout.velocity({
                    backgroundColorRed:['0','0'],
                    backgroundColorGreen:['0','0'],
                    backgroundColorBlue:['0','0'],
                    backgroundColorAlpha:['0','0.1']
                }, {
                    duration:1000,
                    easing:'easeOutCirc',
                    queue:false
                });
                break;

            case $(this).hasClass(menuResumeString):
                menuResume.velocity({
                    backgroundColorRed:['0','0'],
                    backgroundColorGreen:['0','0'],
                    backgroundColorBlue:['0','0'],
                    backgroundColorAlpha:['0','0.1']
                }, {
                    duration:1000,
                    easing:'easeOutCirc',
                    queue:false
                });
                break;

            case $(this).hasClass(menuPortfolioString):
                menuPortfolio.velocity({
                    backgroundColorRed:['0','0'],
                    backgroundColorGreen:['0','0'],
                    backgroundColorBlue:['0','0'],
                    backgroundColorAlpha:['0','0.1']
                }, {
                    duration:1000,
                    easing:'easeOutCirc',
                    queue:false
                });
                break;

            case $(this).hasClass(menuContactString):
                menuContact.velocity({
                    backgroundColorRed:['0','0'],
                    backgroundColorGreen:['0','0'],
                    backgroundColorBlue:['0','0'],
                    backgroundColorAlpha:['0','0.1']
                }, {
                    duration:1000,
                    easing:'easeOutCirc',
                    queue:false
                });
                break;
        }

    });
};
    
function menuItemClick() {
    menuItem.click(function() {

        switch(true) {

            case ($(this).hasClass(menuAboutString) && (pageIndex !== 0)):
                transitions.toPage.about();
                transitions.content.tiles.bioPic.about();
                transitions.content.tiles.topHeader.about();
                transitions.content.tiles.paragraph.about();
                break;

            case ($(this).hasClass(menuResumeString) && (pageIndex !== 1)):
                transitions.toPage.resume();
                transitions.content.tiles.bioPic.resume();
                transitions.content.tiles.topHeader.resume();
                transitions.content.tiles.paragraph.resume();
                break;

            case ($(this).hasClass(menuPortfolioString) && (pageIndex !== 2)):
                $('.portfolio-category').css('opacity','0');
                transitions.toPage.portfolio();
                transitions.content.tiles.bioPic.portfolio();
                transitions.content.tiles.topHeader.portfolio();
                transitions.content.tiles.paragraph.portfolio();
                break;

            case ($(this).hasClass(menuContactString) && (pageIndex !== 3)):
                transitions.toPage.contact();
                transitions.content.tiles.bioPic.contact();
                transitions.content.tiles.topHeader.contact();
                transitions.content.tiles.paragraph.contact();
                break;
        }

    });
};
    
function logoClick() {
    logo.click(function() {
        
        transitions.toPage.about();
        transitions.content.tiles.bioPic.about();
        transitions.content.tiles.topHeader.about();
        transitions.content.tiles.paragraph.about();

    });
};

function lineLightDash() {
var interval = setInterval(function initial() {
    
    aboutColor1.css({'right':'0px','right':''}).velocity({
       scaleX:['1','0'] 
    }, {
        duration:1000,
        easing:'easeInOutQuart',
        delay:0,
        complete:function() {
            aboutColor1.css({'right':'','right':'0px'}).velocity({
               scaleX:['0','1'] 
            }, {
                duration:1000,
                easing:'easeInOutQuart',
                complete:function() {
                    aboutColor1.css({'right':'','right':'0px'}).velocity({
                       scaleX:['1','0'] 
                    }, {
                        duration:1000,
                        easing:'easeInOutQuart',
                        complete:function() {
                            aboutColor1.css({'right':['0','255'],'right':''}).velocity({
                               scaleX:['0','1'] 
                            }, {
                                duration:1000,
                                easing:'easeInOutQuart',
                                complete:function() {

                                }
                            });
                        }
                    });
                }
            });
        }
    });
    
    return initial;
}(), 4000);
};

/*lightFlicker();*/

menuItemTotalWidth();

initialProperties();

portfolioCategoryClick();

portfolioCategoryClickClose();

portfolioCloseRollover();

portfolioCategoryRollover();

logoClick();

$(window).load(function() {
    
    menuItemRollover();
    
    menuItemClick();
    
    hashChecker();
    
    menuAboutInnerWidth = $('.menu-about').innerWidth(),
    menuResumeInnerWidth = $('.menu-resume').innerWidth(),
    menuPortfolioInnerWidth = $('.menu-portfolio').innerWidth(),
    menuContactInnerWidth = $('.menu-contact').innerWidth();
    
    menuItemClick();

$(window).resize(function initial() {

    initialProperties();
    
    menuAboutInnerWidth = $('.menu-about').innerWidth(),
    menuResumeInnerWidth = $('.menu-resume').innerWidth(),
    menuPortfolioInnerWidth = $('.menu-portfolio').innerWidth(),
    menuContactInnerWidth = $('.menu-contact').innerWidth();
    
    selectorChecker();

    /*lightFlicker();*/
    /*lineLightDash();*/

    menuItemTotalWidth();
    
    return initial;
}());
});