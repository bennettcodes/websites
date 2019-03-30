document.addEventListener("touchstart", function () {}, true);

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

function positionCategoryTitles() {
    for (i = 0; i < categoryTitleLength; i++) {
        currentTitle = categoryTitle.eq(i);
        currentTitleParent = currentTitle.parent(categoryFindString);
        currentTitleHeight = currentTitle.height();
        currentTitleParentHeight = currentTitleParent.height();

        TweenMax.set(currentTitle, {
            top: (category.eq(i).height() / 2) - (categoryTitle.eq(i).height() / 2),
            left: (category.eq(i).width() / 2) - (categoryTitle.eq(i).width() / 2)
        });

        console.log('Current Parent Height: ' + currentTitleParentHeight + '<br>Current Title Height: ' + currentTitleHeight);
    };
};

$(window).load(function () {

    work.removeClass('active-page-section').addClass('inactive-page-section');

    /*    siteImages.on("contextmenu",function(){
           return false;
        }); */

    siteImage.imagesLoaded(function () {
        TweenMax.to(whiteOverlayText, 0.5, {
            opacity: 0,
            onComplete: function () {
                TweenMax.to(whiteOverlay, 0.5, {
                    opacity: 0,
                    onComplete: function () {
                        whiteOverlay.hide();
                    }
                });
            }
        });
    });

    /*work.css({
        display: 'none'
    });*/

    function cssDefinitions() {

        if ($(window).height() < 648) {
            mastheadContainer.css('opacity', '0');
            whiteBar.css('opacity', '0');
        } else {
            mastheadContainer.css('opacity', '1');
            whiteBar.css('opacity', '1');
        };

        /*TweenMax.set(portraitPrompt, {
            perspective: 800,
            perspectiveOrigin: 'center',
            transformStyle: 'flat'
        });

        TweenMax.set(portraitPromptText, {
            transformOrigin: 'center'
        });*/

        TweenMax.set(temporaryBlockLayer, {
            transformOrigin: 'center'
        });
        TweenMax.set(container, {
            perspective: 800,
            perspectiveOrigin: 'center',
            transformStyle: 'flat'
        });
        TweenMax.set(sideMenu, {
            userSelect: 'none'
        });
        TweenMax.set(category, {
            userSelect: 'none'
        });
        sideMenu.css({
            top: ($(window).height() / 2) - (sideMenuHeight / 2)
        });
        TweenMax.set(menuTrackerContainer, {
            perspective: 800,
            perspectiveOrigin: 'center',
            opacity: 1,
            transformStyle: 'flat',
            height: menuTrackerContainerHeight,
            top: ($(window).height() / 2) - (menuTrackerContainerHeight / 2),
            left: sideMenu.width() - 50
        });
        /*TweenMax.set(sideItem, {
            color:homeBackgroundColorHalf
        });*/
        TweenMax.set(menuTrackerRaft, {
            transformOrigin: 'center',
            height: menuTrackerRaftHeight,
            lineHeight: menuTrackerRaftHeight
        });
        TweenMax.set(menuTracker, {
            backgroundColor: currentColor
        });
        /*TweenMax.set(containerBackground, {
            backgroundColor: currentColor
        });*/
        TweenMax.set(pageContainer, {
            perspective: 800,
            perspectiveOrigin: 'center',
            transformStyle: 'flat'
        });
        TweenMax.set(pageSection, {
            transformOrigin: 'center',
            top: sideItem.eq(0).offset().top
        });
        userInput.css({
            fontSize: '16px',
            lineHeight: '1em',
            border: '5px solid rgba(0,0,0,0.05)'
        });
        textArea.css({
            fontSize: '16px',
            height: '80px',
            minHeight: '0px',
            lineHeight: '80px',
            border: '5px solid rgba(0,0,0,0.05)'
        });
        formButton.css({
            height: '80px',
            margin: 0,
            fontSize: '16px',
            lineHeight: '1.5em'
        });
        mastheadContainer.css({
            width: (($(window).width()) - (activePageSection.offset().left)) + 50,
            height: (sideMenu.offset().top - containerBackground.height()) - 100
        });
        /*TweenMax.set(mastheadContainer, {
            backgroundColor: currentColor
        });*/
        TweenMax.set(mastheadContainer.find('h1'), {
            lineHeight: mastheadContainer.outerHeight() + 'px',
            padding: '0 50px'
        });
        TweenMax.set(verticalBreak, {
            x: Math.ceil(mastheadContainer.offset().left) - 5
        });
        TweenMax.set(category, {
            perspective: 800,
            perspectiveOrigin: 'center',
            transformStyle: 'flat',
            borderColor: 'rgba(' + workBorderColorLight + ',1)'
        });
        TweenMax.set(portfolioItemHeaderContainer, {
            perspective: 800,
            perspectiveOrigin: 'center',
            userSelect: 'none',
            transformStyle: 'flat'
        });
        TweenMax.set(portfolioItemHeader, {
            transformOrigin: 'center'
        });
        TweenMax.set(categoryTitle, {
            transformOrigin: 'center'
        });
        TweenMax.set(categoryThumbCorner, {
            transformOrigin: 'center',
            skewX: -45,
            x: categoryThumbCornerXStart,
            y: categoryThumbCornerYStart
        });
        TweenMax.set(categoryThumb, {
            transformOrigin: 'center',
            x: categoryThumbXStart,
            y: categoryThumbYStart
        });
        TweenMax.set(portfolioItemOverlay, {
            perspective: 800,
            perspectiveOrigin: 'center',
            transformStyle: 'flat'
        });
        TweenMax.set(portfolioItems, {
            perspective: 800,
            perspectiveOrigin: 'center',
            transformStyle: 'flat',
        });
        TweenMax.set(portfolioItemsColumn, {
            perspective: 800,
            perspectiveOrigin: 'center',
            transformStyle: 'flat',
        });
        TweenMax.set(portfolioItem, {
            transformOrigin: 'center',
            userSelect: 'none'
        });

        TweenMax.set(portfolioClose, {
            transformOrigin: 'center',
            userSelect: 'none',
            scale: 1
        });
        TweenMax.set(portfolioCloseHeader1, {
            color: blackColor
        });
        TweenMax.set(mastheadHeader, {
            userSelect: 'none'
        });
        whiteBar.css({
            width: $(window).width() - mastheadContainer.width()
        });
        TweenMax.set(resumeIconsColumn, {
            height: resumeSkillsetColumn.outerHeight()
        });
        TweenMax.set(homeContainerBackground, {
            backgroundColor: 'rgba(' + homeBackgroundColorLight + ',1)'
        });
        TweenMax.set(resumeContainerBackground, {
            backgroundColor: 'rgba(' + resumeBackgroundColorLight + ',1)'
        });
        TweenMax.set(workContainerBackground, {
            backgroundColor: 'rgba(' + workBackgroundColorLight + ',1)'
        });
        TweenMax.set(contactContainerBackground, {
            backgroundColor: 'rgba(' + contactBackgroundColorLight + ',1)'
        });
        TweenMax.set(verticalBreakHomeBackground, {
            backgroundColor: 'rgba(' + homeBackgroundColorLight + ',0.1)'
        });
        TweenMax.set(verticalBreakResumeBackground, {
            backgroundColor: 'rgba(' + resumeBackgroundColorLight + ',0.1)'
        });
        TweenMax.set(verticalBreakWorkBackground, {
            backgroundColor: 'rgba(' + workBackgroundColorLight + ',0.1)'
        });
        TweenMax.set(verticalBreakContactBackground, {
            backgroundColor: 'rgba(' + contactBackgroundColorLight + ',0.1)'
        });
        TweenMax.set(mastheadHomeBackground, {
            backgroundColor: 'rgba(' + homeBackgroundColorLight + ',1)'
        });
        TweenMax.set(mastheadResumeBackground, {
            backgroundColor: 'rgba(' + resumeBackgroundColorLight + ',1)'
        });
        TweenMax.set(mastheadWorkBackground, {
            backgroundColor: 'rgba(' + workBackgroundColorLight + ',1)'
        });
        TweenMax.set(mastheadContactBackground, {
            backgroundColor: 'rgba(' + contactBackgroundColorLight + ',1)'
        });

    }

    TweenMax.set(fullBody, {

        color: currentColor
    });

    if (/iPad/i.test(navigator.userAgent)) {

        /*TweenMax.set(resumeIconsColumn, {
            backgroundImage: 'url(./images/laptop-tablet.jpg)',
            backgroundPosition: 'right center'
        });*/

        function readDeviceOrientation() {
            if (window.matchMedia("(orientation: portrait)").matches) {
                portraitPrompt.show();
            }

            if (window.matchMedia("(orientation: landscape)").matches) {
                portraitPrompt.hide();
            }
        };

        $(window).resize(function initial() {
            readDeviceOrientation();

            return initial;
        }());
    }

    $(window).resize(function initial(event) {

        if ($(window).height() < 648) {
            mastheadContainer.hide();
            /*whiteBar.hide();*/
        } else {
            mastheadContainer.show();
            /*whiteBar.show();*/
        };
        sideItemHeight = sideItem.outerHeight();
        sideItemLength = sideItem.length;
        sideMenuHeight = sideItemHeight * sideItemLength;
        menuTrackerContainerHeight = sideMenuHeight;
        menuTrackerRaftHeight = sideItemHeight;
        trackerResumePositionY = sideItemHeight;
        trackerWorkPositionY = sideItemHeight * 2;
        trackerContactPositionY = sideItemHeight * 3;

        cssDefinitions();

        positionCategoryTitles();

        return initial;
    }());

    if (isiOS) {

        animations.menu.item.mouseOverTablet();
        animations.menu.item.mouseOutTablet();
        animations.menu.item.mouseUpTablet();

        categoryAnimations.category.mouseOverTablet();
        categoryAnimations.category.mouseOutTablet();
        categoryAnimations.category.mouseUpTablet();

        categoryAnimations.portfolioClose.mouseOverTablet();
        categoryAnimations.portfolioClose.mouseOutTablet();
        categoryAnimations.portfolioClose.mouseUpTablet();
    } else {
        animations.menu.item.mouseOver();
        animations.menu.item.mouseOut();
        animations.menu.item.mouseUp();

        categoryAnimations.category.mouseOver();
        categoryAnimations.category.mouseOut();
        categoryAnimations.category.mouseUp();

        categoryAnimations.portfolioClose.mouseOver();
        categoryAnimations.portfolioClose.mouseOut();
        categoryAnimations.portfolioClose.mouseUp();
    }
});