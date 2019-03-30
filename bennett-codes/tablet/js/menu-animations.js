var animations = {
    menu: {
        item: {
            mouseOver: function () {

                sideItem.mouseover(function () {
                    switch (true) {
                    case ($(this).hasClass('page1')) && (containerBackground.css('backgroundColor') !== homeBackgroundColorHalf) && (!homeItemHoverActive):
                        resumeItemHoverActive = false;
                        workItemHoverActive = false;
                        contactItemHoverActive = false;
                        TweenMax.to($(this).find(sideItemBackgroundFindString), 0, {
                            backgroundColor: homeBackgroundColorHalf
                        }, 0);
                        TweenMax.to($(this), 0, {
                            color: '#ffffff'
                        }, 0);
                        TweenMax.to($(this), sideItemHoverDuration, {
                            x: 50,
                            ease: sideItemHoverEase
                        }, 0);
                        break;
                    case ($(this).hasClass('page2')) && (containerBackground.css('backgroundColor') !== resumeBackgroundColorHalf) && (!resumeItemHoverActive):
                        homeItemHoverActive = false;
                        workItemHoverActive = false;
                        contactItemHoverActive = false;
                        TweenMax.to($(this).find(sideItemBackgroundFindString), 0, {
                            backgroundColor: resumeBackgroundColorHalf
                        }, 0);
                        TweenMax.to($(this), 0, {
                            color: '#ffffff'
                        }, 0);
                        TweenMax.to($(this), sideItemHoverDuration, {
                            x: 50,
                            ease: sideItemHoverEase
                        }, 0);
                        break;
                    case ($(this).hasClass('page3')) && (containerBackground.css('backgroundColor') !== workBackgroundColorHalf) && (!workItemHoverActive):
                        homeItemHoverActive = false;
                        resumeItemHoverActive = false;
                        contactItemHoverActive = false;
                        TweenMax.to($(this).find(sideItemBackgroundFindString), 0, {
                            backgroundColor: workBackgroundColorHalf
                        }, 0);
                        TweenMax.to($(this), 0, {
                            color: '#ffffff'
                        }, 0);
                        TweenMax.to($(this), sideItemHoverDuration, {
                            x: 50,
                            ease: sideItemHoverEase
                        }, 0);
                        break;
                    case ($(this).hasClass('page4')) && (containerBackground.css('backgroundColor') !== contactBackgroundColorHalf) && (!contactItemHoverActive):
                        homeItemHoverActive = false;
                        resumeItemHoverActive = false;
                        workItemHoverActive = false;
                        TweenMax.to($(this).find(sideItemBackgroundFindString), 0, {
                            backgroundColor: contactBackgroundColorHalf
                        }, 0);
                        TweenMax.to($(this), 0, {
                            color: '#ffffff'
                        }, 0);
                        TweenMax.to($(this), sideItemHoverDuration, {
                            x: 50,
                            ease: sideItemHoverEase
                        }, 0);
                        break;
                    }
                });
            },
            mouseOverTablet: function () {

                sideItem.on('vmouseover', function (e) {
                    /*e.preventDefault();*/
                    switch (true) {
                    case ($(this).hasClass('page1')) && (containerBackground.css('backgroundColor') !== homeBackgroundColorHalf) && (!homeItemHoverActive):
                        resumeItemHoverActive = false;
                        workItemHoverActive = false;
                        contactItemHoverActive = false;
                        TweenMax.to($(this).find(sideItemBackgroundFindString), 0, {
                            backgroundColor: homeBackgroundColorHalf
                        }, 0);
                        TweenMax.to($(this), 0, {
                            color: '#ffffff'
                        }, 0);
                        TweenMax.to($(this), sideItemHoverDuration * 0.75, {
                            x: 50,
                            ease: sideItemHoverEaseTablet
                        }, 0);
                        break;
                    case ($(this).hasClass('page2')) && (containerBackground.css('backgroundColor') !== resumeBackgroundColorHalf) && (!resumeItemHoverActive):
                        homeItemHoverActive = false;
                        workItemHoverActive = false;
                        contactItemHoverActive = false;
                        TweenMax.to($(this).find(sideItemBackgroundFindString), 0, {
                            backgroundColor: resumeBackgroundColorHalf
                        }, 0);
                        TweenMax.to($(this), 0, {
                            color: '#ffffff'
                        }, 0);
                        TweenMax.to($(this), sideItemHoverDuration * 0.75, {
                            x: 50,
                            ease: sideItemHoverEaseTablet
                        }, 0);
                        break;
                    case ($(this).hasClass('page3')) && (containerBackground.css('backgroundColor') !== workBackgroundColorHalf) && (!workItemHoverActive):
                        homeItemHoverActive = false;
                        resumeItemHoverActive = false;
                        contactItemHoverActive = false;
                        TweenMax.to($(this).find(sideItemBackgroundFindString), 0, {
                            backgroundColor: workBackgroundColorHalf
                        }, 0);
                        TweenMax.to($(this), 0, {
                            color: '#ffffff'
                        }, 0);
                        TweenMax.to($(this), sideItemHoverDuration * 0.75, {
                            x: 50,
                            ease: sideItemHoverEaseTablet
                        }, 0);
                        break;
                    case ($(this).hasClass('page4')) && (containerBackground.css('backgroundColor') !== contactBackgroundColorHalf) && (!contactItemHoverActive):
                        homeItemHoverActive = false;
                        resumeItemHoverActive = false;
                        workItemHoverActive = false;
                        TweenMax.to($(this).find(sideItemBackgroundFindString), 0, {
                            backgroundColor: contactBackgroundColorHalf
                        }, 0);
                        TweenMax.to($(this), 0, {
                            color: '#ffffff'
                        }, 0);
                        TweenMax.to($(this), sideItemHoverDuration * 0.75, {
                            x: 50,
                            ease: sideItemHoverEaseTablet
                        }, 0);
                        break;
                    }
                });
            },
            mouseOut: function () {

                sideItem.mouseout(function () {
                    switch (true) {
                    case $(this).hasClass('page1'):
                        TweenMax.to($(this).find(sideItemBackgroundFindString), 0, {
                            backgroundColor: homeBackgroundColorClear
                        }, 0);
                        break;
                    case $(this).hasClass('page2'):
                        TweenMax.to($(this).find(sideItemBackgroundFindString), 0, {
                            backgroundColor: resumeBackgroundColorClear
                        }, 0);
                        break;
                    case $(this).hasClass('page3'):
                        TweenMax.to($(this).find(sideItemBackgroundFindString), 0, {
                            backgroundColor: workBackgroundColorClear
                        }, 0);
                        break;
                    case $(this).hasClass('page4'):
                        TweenMax.to($(this).find(sideItemBackgroundFindString), 0, {
                            backgroundColor: contactBackgroundColorClear
                        }, 0);
                        break;
                    }
                    TweenMax.to($(this), 0, {
                        color: currentColor
                    }, 0);
                    TweenMax.to($(this), sideItemHoverDuration, {
                        x: 0,
                        ease: sideItemHoverEase
                    }, 0);
                });
            },
            mouseOutTablet: function () {

                sideItem.on('vmouseout', function () {
                    switch (true) {
                    case $(this).hasClass('page1'):
                        TweenMax.to($(this).find(sideItemBackgroundFindString), 0, {
                            backgroundColor: homeBackgroundColorClear
                        }, 0);
                        break;
                    case $(this).hasClass('page2'):
                        TweenMax.to($(this).find(sideItemBackgroundFindString), 0, {
                            backgroundColor: resumeBackgroundColorClear
                        }, 0);
                        break;
                    case $(this).hasClass('page3'):
                        TweenMax.to($(this).find(sideItemBackgroundFindString), 0, {
                            backgroundColor: workBackgroundColorClear
                        }, 0);
                        break;
                    case $(this).hasClass('page4'):
                        TweenMax.to($(this).find(sideItemBackgroundFindString), 0, {
                            backgroundColor: contactBackgroundColorClear
                        }, 0);
                        break;
                    }
                    TweenMax.to($(this), 0, {
                        color: currentColor
                    }, 0);
                    TweenMax.to($(this), sideItemHoverDuration, {
                        x: 0,
                        ease: sideItemHoverEase
                    }, 0);
                });
            },
            mouseUp: function () {
                sideItem.mouseup(function () {
                    switch (true) {
                    case (pageIndex !== 0) && ($(this).hasClass('page1')) && (containerBackground.css('backgroundColor') !== homeBackgroundColorHalf):
                        pageIndex = 0;
                        
                            
                        TweenMax.set(outerContainer, {
                           overflowY:'hidden' 
                        });
                            
                        TweenMax.set(outerContainer, {
                           overflowY:'scroll',
                            scrollTop:0
                        });

                        /*TweenMax.to(verticalBreak, activePageDuration, {
                            backgroundColor: 'rgba(' + homeBackgroundColor + ',0.1)'
                        }, 0);*/

                        /*TweenMax.to(mastheadContainer, activePageDuration, {
                            backgroundColor: homeBackgroundColorHalf
                        }, 0);*/
                        homeContainerBackground.removeClass(activeContainerBackgroundString).removeClass(inactiveContainerBackgroundString).addClass(activeContainerBackgroundString);
                        resumeContainerBackground.removeClass(activeContainerBackgroundString).removeClass(inactiveContainerBackgroundString).addClass(inactiveContainerBackgroundString);
                        workContainerBackground.removeClass(activeContainerBackgroundString).removeClass(inactiveContainerBackgroundString).addClass(inactiveContainerBackgroundString);
                        contactContainerBackground.removeClass(activeContainerBackgroundString).removeClass(inactiveContainerBackgroundString).addClass(inactiveContainerBackgroundString);
                        verticalBreakHomeBackground.removeClass(activeVerticalBreakBackgroundString).removeClass(inactiveVerticalBreakBackgroundString).addClass(activeVerticalBreakBackgroundString);
                        verticalBreakResumeBackground.removeClass(activeVerticalBreakBackgroundString).removeClass(inactiveVerticalBreakBackgroundString).addClass(inactiveVerticalBreakBackgroundString);
                        verticalBreakWorkBackground.removeClass(activeVerticalBreakBackgroundString).removeClass(inactiveVerticalBreakBackgroundString).addClass(inactiveVerticalBreakBackgroundString);
                        verticalBreakContactBackground.removeClass(activeVerticalBreakBackgroundString).removeClass(inactiveVerticalBreakBackgroundString).addClass(inactiveVerticalBreakBackgroundString);
                        mastheadHomeBackground.removeClass(activeMastheadBackgroundString).removeClass(inactiveMastheadBackgroundString).addClass(activeMastheadBackgroundString);
                        mastheadResumeBackground.removeClass(activeMastheadBackgroundString).removeClass(inactiveMastheadBackgroundString).addClass(inactiveMastheadBackgroundString);
                        mastheadWorkBackground.removeClass(activeMastheadBackgroundString).removeClass(inactiveMastheadBackgroundString).addClass(inactiveMastheadBackgroundString);
                        mastheadContactBackground.removeClass(activeMastheadBackgroundString).removeClass(inactiveMastheadBackgroundString).addClass(inactiveMastheadBackgroundString);
                        home.removeClass(activePageSectionString).removeClass(inactivePageSectionString).addClass(activePageSectionString);
                        resume.removeClass(activePageSectionString).removeClass(inactivePageSectionString).addClass(inactivePageSectionString);
                        work.removeClass(activePageSectionString).removeClass(inactivePageSectionString).addClass(inactivePageSectionString);
                        contact.removeClass(activePageSectionString).removeClass(inactivePageSectionString).addClass(inactivePageSectionString);
                        activePageSection = pageContainer.find(activePageSectionFindString);
                        TweenMax.set(activePageSection, {
                            y: 0,
                            z: 0
                        });
                        TweenMax.from(pageContainer.find(activePageSectionFindString), activePageDuration, {
                            y: 100,
                            z: 300,
                            ease: activePageEase
                        }, 0);
                        break;
                    case (pageIndex !== 1) && ($(this).hasClass('page2')) && (containerBackground.css('backgroundColor') !== resumeBackgroundColorHalf):
                        pageIndex = 1;
                        
                            
                        TweenMax.set(outerContainer, {
                           overflowY:'hidden' 
                        });
                            
                        TweenMax.set(outerContainer, {
                           overflowY:'scroll',
                            scrollTop:0
                        });

                        /*TweenMax.to(verticalBreak, activePageDuration, {
                            backgroundColor: 'rgba(' + resumeBackgroundColor + ',0.1)'
                        }, 0);*/

                        /*TweenMax.to(mastheadContainer, activePageDuration, {
                            backgroundColor: resumeBackgroundColorHalf
                        }, 0);*/
                        homeContainerBackground.removeClass(activeContainerBackgroundString).removeClass(inactiveContainerBackgroundString).addClass(inactiveContainerBackgroundString);
                        resumeContainerBackground.removeClass(activeContainerBackgroundString).removeClass(inactiveContainerBackgroundString).addClass(activeContainerBackgroundString);
                        workContainerBackground.removeClass(activeContainerBackgroundString).removeClass(inactiveContainerBackgroundString).addClass(inactiveContainerBackgroundString);
                        contactContainerBackground.removeClass(activeContainerBackgroundString).removeClass(inactiveContainerBackgroundString).addClass(inactiveContainerBackgroundString);
                        verticalBreakHomeBackground.removeClass(activeVerticalBreakBackgroundString).removeClass(inactiveVerticalBreakBackgroundString).addClass(inactiveVerticalBreakBackgroundString);
                        verticalBreakResumeBackground.removeClass(activeVerticalBreakBackgroundString).removeClass(inactiveVerticalBreakBackgroundString).addClass(activeVerticalBreakBackgroundString);
                        verticalBreakWorkBackground.removeClass(activeVerticalBreakBackgroundString).removeClass(inactiveVerticalBreakBackgroundString).addClass(inactiveVerticalBreakBackgroundString);
                        verticalBreakContactBackground.removeClass(activeVerticalBreakBackgroundString).removeClass(inactiveVerticalBreakBackgroundString).addClass(inactiveVerticalBreakBackgroundString);
                        mastheadHomeBackground.removeClass(activeMastheadBackgroundString).removeClass(inactiveMastheadBackgroundString).addClass(inactiveMastheadBackgroundString);
                        mastheadResumeBackground.removeClass(activeMastheadBackgroundString).removeClass(inactiveMastheadBackgroundString).addClass(activeMastheadBackgroundString);
                        mastheadWorkBackground.removeClass(activeMastheadBackgroundString).removeClass(inactiveMastheadBackgroundString).addClass(inactiveMastheadBackgroundString);
                        mastheadContactBackground.removeClass(activeMastheadBackgroundString).removeClass(inactiveMastheadBackgroundString).addClass(inactiveMastheadBackgroundString);
                        home.removeClass(activePageSectionString).removeClass(inactivePageSectionString).addClass(inactivePageSectionString);
                        resume.removeClass(activePageSectionString).removeClass(inactivePageSectionString).addClass(activePageSectionString);
                        work.removeClass(activePageSectionString).removeClass(inactivePageSectionString).addClass(inactivePageSectionString);
                        contact.removeClass(activePageSectionString).removeClass(inactivePageSectionString).addClass(inactivePageSectionString);
                        activePageSection = pageContainer.find(activePageSectionFindString);
                        TweenMax.set(activePageSection, {
                            y: 0,
                            z: 0
                        });
                        TweenMax.from(pageContainer.find(activePageSectionFindString), activePageDuration, {
                            y: 100,
                            z: 300,
                            ease: activePageEase
                        }, 0);
                        break;
                    case (pageIndex !== 2) && ($(this).hasClass('page3')) && (containerBackground.css('backgroundColor') !== workBackgroundColorHalf):
                        pageIndex = 2;
                            
                        TweenMax.set(outerContainer, {
                           overflowY:'hidden' 
                        });
                            
                        TweenMax.set(outerContainer, {
                           overflowY:'scroll',
                            scrollTop:0
                        });

                        /*TweenMax.to(verticalBreak, activePageDuration, {
                            backgroundColor: 'rgba(' + workBackgroundColor + ',0.1)'
                        }, 0);*/

                        /*TweenMax.to(mastheadContainer, activePageDuration, {
                            backgroundColor: workBackgroundColorHalf
                        }, 0);*/
                        homeContainerBackground.removeClass(activeContainerBackgroundString).removeClass(inactiveContainerBackgroundString).addClass(inactiveContainerBackgroundString);
                        resumeContainerBackground.removeClass(activeContainerBackgroundString).removeClass(inactiveContainerBackgroundString).addClass(inactiveContainerBackgroundString);
                        workContainerBackground.removeClass(activeContainerBackgroundString).removeClass(inactiveContainerBackgroundString).addClass(activeContainerBackgroundString);
                        contactContainerBackground.removeClass(activeContainerBackgroundString).removeClass(inactiveContainerBackgroundString).addClass(inactiveContainerBackgroundString);
                        verticalBreakHomeBackground.removeClass(activeVerticalBreakBackgroundString).removeClass(inactiveVerticalBreakBackgroundString).addClass(inactiveVerticalBreakBackgroundString);
                        verticalBreakHomeBackground.removeClass(activeVerticalBreakBackgroundString).removeClass(inactiveVerticalBreakBackgroundString).addClass(inactiveVerticalBreakBackgroundString);
                        verticalBreakResumeBackground.removeClass(activeVerticalBreakBackgroundString).removeClass(inactiveVerticalBreakBackgroundString).addClass(inactiveVerticalBreakBackgroundString);
                        verticalBreakWorkBackground.removeClass(activeVerticalBreakBackgroundString).removeClass(inactiveVerticalBreakBackgroundString).addClass(activeVerticalBreakBackgroundString);
                        verticalBreakContactBackground.removeClass(activeVerticalBreakBackgroundString).removeClass(inactiveVerticalBreakBackgroundString).addClass(inactiveVerticalBreakBackgroundString);
                        mastheadHomeBackground.removeClass(activeMastheadBackgroundString).removeClass(inactiveMastheadBackgroundString).addClass(inactiveMastheadBackgroundString);
                        mastheadResumeBackground.removeClass(activeMastheadBackgroundString).removeClass(inactiveMastheadBackgroundString).addClass(inactiveMastheadBackgroundString);
                        mastheadWorkBackground.removeClass(activeMastheadBackgroundString).removeClass(inactiveMastheadBackgroundString).addClass(activeMastheadBackgroundString);
                        mastheadContactBackground.removeClass(activeMastheadBackgroundString).removeClass(inactiveMastheadBackgroundString).addClass(inactiveMastheadBackgroundString);
                        home.removeClass(activePageSectionString).removeClass(inactivePageSectionString).addClass(inactivePageSectionString);
                        resume.removeClass(activePageSectionString).removeClass(inactivePageSectionString).addClass(inactivePageSectionString);
                        work.removeClass(activePageSectionString).removeClass(inactivePageSectionString).addClass(activePageSectionString);
                        contact.removeClass(activePageSectionString).removeClass(inactivePageSectionString).addClass(inactivePageSectionString);
                        activePageSection = pageContainer.find(activePageSectionFindString);
                        TweenMax.set(activePageSection, {
                            y: 0,
                            z: 0
                        });
                        TweenMax.from(pageContainer.find(activePageSectionFindString), activePageDuration, {
                            y: 100,
                            z: 300,
                            ease: activePageEase
                        }, 0);
                            
                        positionCategoryTitles();
                            
                        break;
                    case (pageIndex !== 3) && ($(this).hasClass('page4')) && (containerBackground.css('backgroundColor') !== contactBackgroundColorHalf):
                        pageIndex = 3;
                        
                            
                        TweenMax.set(outerContainer, {
                           overflowY:'hidden' 
                        });
                            
                        TweenMax.set(outerContainer, {
                           overflowY:'scroll',
                            scrollTop:0
                        });

                        /*TweenMax.to(verticalBreak, activePageDuration, {
                            backgroundColor: 'rgba(' + contactBackgroundColor + ',0.1)'
                        }, 0);*/

                        /*TweenMax.to(mastheadContainer, activePageDuration, {
                            backgroundColor: contactBackgroundColorHalf
                        }, 0);*/
                        homeContainerBackground.removeClass(activeContainerBackgroundString).removeClass(inactiveContainerBackgroundString).addClass(inactiveContainerBackgroundString);
                        resumeContainerBackground.removeClass(activeContainerBackgroundString).removeClass(inactiveContainerBackgroundString).addClass(inactiveContainerBackgroundString);
                        workContainerBackground.removeClass(activeContainerBackgroundString).removeClass(inactiveContainerBackgroundString).addClass(inactiveContainerBackgroundString);
                        contactContainerBackground.removeClass(activeContainerBackgroundString).removeClass(inactiveContainerBackgroundString).addClass(activeContainerBackgroundString);
                        verticalBreakHomeBackground.removeClass(activeVerticalBreakBackgroundString).removeClass(inactiveVerticalBreakBackgroundString).addClass(inactiveVerticalBreakBackgroundString);
                        verticalBreakHomeBackground.removeClass(activeVerticalBreakBackgroundString).removeClass(inactiveVerticalBreakBackgroundString).addClass(inactiveVerticalBreakBackgroundString);
                        verticalBreakResumeBackground.removeClass(activeVerticalBreakBackgroundString).removeClass(inactiveVerticalBreakBackgroundString).addClass(inactiveVerticalBreakBackgroundString);
                        verticalBreakWorkBackground.removeClass(activeVerticalBreakBackgroundString).removeClass(inactiveVerticalBreakBackgroundString).addClass(inactiveVerticalBreakBackgroundString);
                        verticalBreakContactBackground.removeClass(activeVerticalBreakBackgroundString).removeClass(inactiveVerticalBreakBackgroundString).addClass(activeVerticalBreakBackgroundString);
                        mastheadHomeBackground.removeClass(activeMastheadBackgroundString).removeClass(inactiveMastheadBackgroundString).addClass(inactiveMastheadBackgroundString);
                        mastheadResumeBackground.removeClass(activeMastheadBackgroundString).removeClass(inactiveMastheadBackgroundString).addClass(inactiveMastheadBackgroundString);
                        mastheadWorkBackground.removeClass(activeMastheadBackgroundString).removeClass(inactiveMastheadBackgroundString).addClass(inactiveMastheadBackgroundString);
                        mastheadContactBackground.removeClass(activeMastheadBackgroundString).removeClass(inactiveMastheadBackgroundString).addClass(activeMastheadBackgroundString);
                        home.removeClass(activePageSectionString).removeClass(inactivePageSectionString).addClass(inactivePageSectionString);
                        resume.removeClass(activePageSectionString).removeClass(inactivePageSectionString).addClass(inactivePageSectionString);
                        work.removeClass(activePageSectionString).removeClass(inactivePageSectionString).addClass(inactivePageSectionString);
                        contact.removeClass(activePageSectionString).removeClass(inactivePageSectionString).addClass(activePageSectionString);
                        activePageSection = pageContainer.find(activePageSectionFindString);
                        TweenMax.set(activePageSection, {
                            y: 0,
                            z: 0
                        });
                        TweenMax.from(pageContainer.find(activePageSectionFindString), activePageDuration, {
                            y: 100,
                            z: 300,
                            ease: activePageEase
                        }, 0);
                        break;
                    }
                    switch (true) {
                    case ($(this).hasClass('page1')) && (containerBackground.css('backgroundColor') !== homeBackgroundColorHalf):
                        homeItemHoverActive = true;
                        /*TweenMax.to(containerBackground, sideItemHoverDuration, {
                            backgroundColor: homeBackgroundColorHalf,
                            onComplete: function () {
                                homeItemHoverActive = false;
                            }
                        }, 0);*/
                        TweenMax.set(menuTrackerRaft, {
                            rotation:0,
                            ease:Expo.easeOut
                        });
                        TweenMax.to(menuTrackerRaft, menuTrackerRaftDuration, {
                            y: trackerHomePositionY,
                            rotation:720,
                            ease: menuTrackerRaftEase
                        }, 0);
                        TweenMax.to(menuTracker, 0, {
                            backgroundColor: homeBackgroundColorHalf
                        }, 0);
                        TweenMax.to(sideItem, 0, {
                            color: homeBackgroundColorHalf
                        }, 0);
                        TweenMax.to(fullBody, 0, {
                            color: homeBackgroundColorHalf
                        }, 0);
                        TweenMax.to($(this).find(sideItemBackgroundFindString), 0, {
                            backgroundColor: homeBackgroundColorClear
                        }, 0);
                        currentColor = homeBackgroundColorHalf;
                        currentColorClear = homeBackgroundColorClear;
                        break;
                    case ($(this).hasClass('page2')) && (containerBackground.css('backgroundColor') !== resumeBackgroundColorHalf):
                        resumeItemHoverActive = true;
                        TweenMax.set(resumeIconsColumn, {
                            height: resumeSkillsetColumn.outerHeight()
                        });
                        /*TweenMax.to(containerBackground, sideItemHoverDuration, {
                            backgroundColor: resumeBackgroundColorHalf,
                            onComplete: function () {
                                resumeItemHoverActive = false;
                            }
                        }, 0);*/
                        TweenMax.set(menuTrackerRaft, {
                            rotation:0,
                            ease:Expo.easeOut
                        });
                        TweenMax.to(menuTrackerRaft, menuTrackerRaftDuration, {
                            y: trackerResumePositionY,
                            rotation:720,
                            ease: menuTrackerRaftEase
                        }, 0);
                        TweenMax.to(menuTracker, 0, {
                            backgroundColor: resumeBackgroundColorHalf
                        }, 0);
                        TweenMax.to(sideItem, 0, {
                            color: resumeBackgroundColorHalf
                        }, 0);
                        TweenMax.to(fullBody, 0, {
                            color: resumeBackgroundColorHalf
                        }, 0);
                        TweenMax.to($(this).find(sideItemBackgroundFindString), 0, {
                            backgroundColor: resumeBackgroundColorClear
                        }, 0);
                        currentColor = resumeBackgroundColorHalf;
                        currentColorClear = resumeBackgroundColorClear;
                        break;
                    case ($(this).hasClass('page3')) && (containerBackground.css('backgroundColor') !== workBackgroundColorHalf):
                        workItemHoverActive = true;
                        /*TweenMax.to(containerBackground, sideItemHoverDuration, {
                            backgroundColor: workBackgroundColorHalf,
                            onComplete: function () {
                                workItemHoverActive = false;
                            }
                        }, 0);*/
                        TweenMax.set(menuTrackerRaft, {
                            rotation:0,
                            ease:Expo.easeOut
                        });
                        TweenMax.to(menuTrackerRaft, menuTrackerRaftDuration, {
                            y: trackerWorkPositionY,
                            rotation:720,
                            ease: menuTrackerRaftEase
                        }, 0);
                        TweenMax.to(menuTracker, 0, {
                            backgroundColor: workBackgroundColorHalf
                        }, 0);
                        TweenMax.to(sideItem, 0, {
                            color: workBackgroundColorHalf
                        }, 0);
                        TweenMax.to(fullBody, 0, {
                            color: workBackgroundColorHalf
                        }, 0);
                        TweenMax.to($(this).find(sideItemBackgroundFindString), 0, {
                            backgroundColor: workBackgroundColorClear
                        }, 0);
                        currentColor = workBackgroundColorHalf;
                        currentColorClear = workBackgroundColorClear;
                        break;
                    case ($(this).hasClass('page4')) && (containerBackground.css('backgroundColor') !== contactBackgroundColorHalf):
                        contactItemHoverActive = true;
                        /*TweenMax.to(containerBackground, sideItemHoverDuration, {
                            backgroundColor: contactBackgroundColorHalf,
                            onComplete: function () {
                                contactItemHoverActive = false;
                            }
                        }, 0);*/
                        TweenMax.set(menuTrackerRaft, {
                            rotation:0,
                            ease:Expo.easeOut
                        });
                        TweenMax.to(menuTrackerRaft, menuTrackerRaftDuration, {
                            y: trackerContactPositionY,
                            rotation:720,
                            ease: menuTrackerRaftEase
                        }, 0);
                        TweenMax.to(menuTracker, 0, {
                            backgroundColor: contactBackgroundColorHalf
                        }, 0);
                        TweenMax.to(sideItem, 0, {
                            color: contactBackgroundColorHalf
                        }, 0);
                        TweenMax.to(fullBody, 0, {
                            color: contactBackgroundColorHalf
                        }, 0);
                        TweenMax.to($(this).find(sideItemBackgroundFindString), 0, {
                            backgroundColor: contactBackgroundColorClear
                        }, 0);
                        currentColor = contactBackgroundColorHalf;
                        currentColorClear = contactBackgroundColorClear;
                        break;
                    }
                    TweenMax.to($(this), sideItemHoverDuration, {
                        x: 0,
                        ease: sideItemHoverEase
                    }, 0);
                });
            },
            mouseUpTablet: function () {
                sideItem.on('vclick', function (e) {
                    /*e.preventDefault();*/
                    switch (true) {
                    case (pageIndex !== 0) && ($(this).hasClass('page1')) && (containerBackground.css('backgroundColor') !== homeBackgroundColorHalf):
                        pageIndex = 0;
                        
                            
                        TweenMax.set(outerContainer, {
                           overflowY:'hidden' 
                        });
                            
                        TweenMax.set(outerContainer, {
                           overflowY:'scroll',
                            scrollTop:0
                        });

                        /*TweenMax.to(verticalBreak, activePageDuration, {
                            backgroundColor: 'rgba(' + homeBackgroundColor + ',0.1)'
                        }, 0);*/

                        /*TweenMax.to(mastheadContainer, activePageDuration, {
                            backgroundColor: homeBackgroundColorHalf
                        }, 0);*/
                        homeContainerBackground.removeClass(activeContainerBackgroundString).removeClass(inactiveContainerBackgroundString).addClass(activeContainerBackgroundString);
                        resumeContainerBackground.removeClass(activeContainerBackgroundString).removeClass(inactiveContainerBackgroundString).addClass(inactiveContainerBackgroundString);
                        workContainerBackground.removeClass(activeContainerBackgroundString).removeClass(inactiveContainerBackgroundString).addClass(inactiveContainerBackgroundString);
                        contactContainerBackground.removeClass(activeContainerBackgroundString).removeClass(inactiveContainerBackgroundString).addClass(inactiveContainerBackgroundString);
                        verticalBreakHomeBackground.removeClass(activeVerticalBreakBackgroundString).removeClass(inactiveVerticalBreakBackgroundString).addClass(inactiveVerticalBreakBackgroundString);
                        verticalBreakHomeBackground.removeClass(activeVerticalBreakBackgroundString).removeClass(inactiveVerticalBreakBackgroundString).addClass(activeVerticalBreakBackgroundString);
                        verticalBreakResumeBackground.removeClass(activeVerticalBreakBackgroundString).removeClass(inactiveVerticalBreakBackgroundString).addClass(inactiveVerticalBreakBackgroundString);
                        verticalBreakWorkBackground.removeClass(activeVerticalBreakBackgroundString).removeClass(inactiveVerticalBreakBackgroundString).addClass(inactiveVerticalBreakBackgroundString);
                        verticalBreakContactBackground.removeClass(activeVerticalBreakBackgroundString).removeClass(inactiveVerticalBreakBackgroundString).addClass(inactiveVerticalBreakBackgroundString);
                        mastheadHomeBackground.removeClass(activeMastheadBackgroundString).removeClass(inactiveMastheadBackgroundString).addClass(activeMastheadBackgroundString);
                        mastheadResumeBackground.removeClass(activeMastheadBackgroundString).removeClass(inactiveMastheadBackgroundString).addClass(inactiveMastheadBackgroundString);
                        mastheadWorkBackground.removeClass(activeMastheadBackgroundString).removeClass(inactiveMastheadBackgroundString).addClass(inactiveMastheadBackgroundString);
                        mastheadContactBackground.removeClass(activeMastheadBackgroundString).removeClass(inactiveMastheadBackgroundString).addClass(inactiveMastheadBackgroundString);
                        home.removeClass(activePageSectionString).removeClass(inactivePageSectionString).addClass(activePageSectionString);
                        resume.removeClass(activePageSectionString).removeClass(inactivePageSectionString).addClass(inactivePageSectionString);
                        work.removeClass(activePageSectionString).removeClass(inactivePageSectionString).addClass(inactivePageSectionString);
                        contact.removeClass(activePageSectionString).removeClass(inactivePageSectionString).addClass(inactivePageSectionString);
                        activePageSection = pageContainer.find(activePageSectionFindString);
                        TweenMax.set(activePageSection, {
                            y: 0,
                            z: 0
                        });
                        TweenMax.from(pageContainer.find(activePageSectionFindString), activePageDuration, {
                            y: 100,
                            /*z: 100,*/
                            ease: activePageEaseTablet
                        }, 0);
                        break;
                    case (pageIndex !== 1) && ($(this).hasClass('page2')) && (containerBackground.css('backgroundColor') !== resumeBackgroundColorHalf):
                        pageIndex = 1;
                        
                            
                        TweenMax.set(outerContainer, {
                           overflowY:'hidden' 
                        });
                            
                        TweenMax.set(outerContainer, {
                           overflowY:'scroll',
                            scrollTop:0
                        });

                        /*TweenMax.to(verticalBreak, activePageDuration, {
                            backgroundColor: 'rgba(' + resumeBackgroundColor + ',0.1)'
                        }, 0);*/

                        /*TweenMax.to(mastheadContainer, activePageDuration, {
                            backgroundColor: resumeBackgroundColorHalf
                        }, 0);*/
                        homeContainerBackground.removeClass(activeContainerBackgroundString).removeClass(inactiveContainerBackgroundString).addClass(inactiveContainerBackgroundString);
                        resumeContainerBackground.removeClass(activeContainerBackgroundString).removeClass(inactiveContainerBackgroundString).addClass(activeContainerBackgroundString);
                        workContainerBackground.removeClass(activeContainerBackgroundString).removeClass(inactiveContainerBackgroundString).addClass(inactiveContainerBackgroundString);
                        contactContainerBackground.removeClass(activeContainerBackgroundString).removeClass(inactiveContainerBackgroundString).addClass(inactiveContainerBackgroundString);
                        verticalBreakHomeBackground.removeClass(activeVerticalBreakBackgroundString).removeClass(inactiveVerticalBreakBackgroundString).addClass(inactiveVerticalBreakBackgroundString);
                        verticalBreakHomeBackground.removeClass(activeVerticalBreakBackgroundString).removeClass(inactiveVerticalBreakBackgroundString).addClass(inactiveVerticalBreakBackgroundString);
                        verticalBreakResumeBackground.removeClass(activeVerticalBreakBackgroundString).removeClass(inactiveVerticalBreakBackgroundString).addClass(activeVerticalBreakBackgroundString);
                        verticalBreakWorkBackground.removeClass(activeVerticalBreakBackgroundString).removeClass(inactiveVerticalBreakBackgroundString).addClass(inactiveVerticalBreakBackgroundString);
                        verticalBreakContactBackground.removeClass(activeVerticalBreakBackgroundString).removeClass(inactiveVerticalBreakBackgroundString).addClass(inactiveVerticalBreakBackgroundString);
                        mastheadHomeBackground.removeClass(activeMastheadBackgroundString).removeClass(inactiveMastheadBackgroundString).addClass(inactiveMastheadBackgroundString);
                        mastheadResumeBackground.removeClass(activeMastheadBackgroundString).removeClass(inactiveMastheadBackgroundString).addClass(activeMastheadBackgroundString);
                        mastheadWorkBackground.removeClass(activeMastheadBackgroundString).removeClass(inactiveMastheadBackgroundString).addClass(inactiveMastheadBackgroundString);
                        mastheadContactBackground.removeClass(activeMastheadBackgroundString).removeClass(inactiveMastheadBackgroundString).addClass(inactiveMastheadBackgroundString);
                        home.removeClass(activePageSectionString).removeClass(inactivePageSectionString).addClass(inactivePageSectionString);
                        resume.removeClass(activePageSectionString).removeClass(inactivePageSectionString).addClass(activePageSectionString);
                        work.removeClass(activePageSectionString).removeClass(inactivePageSectionString).addClass(inactivePageSectionString);
                        contact.removeClass(activePageSectionString).removeClass(inactivePageSectionString).addClass(inactivePageSectionString);
                        activePageSection = pageContainer.find(activePageSectionFindString);
                        TweenMax.set(activePageSection, {
                            y: 0,
                            z: 0
                        });
                        TweenMax.from(pageContainer.find(activePageSectionFindString), activePageDuration, {
                            y: 100,
                            /*z: 100,*/
                            ease: activePageEaseTablet
                        }, 0);
                        break;
                    case (pageIndex !== 2) && ($(this).hasClass('page3')) && (containerBackground.css('backgroundColor') !== workBackgroundColorHalf):
                        pageIndex = 2;
                            
                        TweenMax.set(outerContainer, {
                           overflowY:'hidden' 
                        });
                            
                        TweenMax.set(outerContainer, {
                           overflowY:'scroll',
                            scrollTop:0
                        });

                        /*TweenMax.to(verticalBreak, activePageDuration, {
                            backgroundColor: 'rgba(' + workBackgroundColor + ',0.1)'
                        }, 0);*/

                        /*TweenMax.to(mastheadContainer, activePageDuration, {
                            backgroundColor: workBackgroundColorHalf
                        }, 0);*/
                        homeContainerBackground.removeClass(activeContainerBackgroundString).removeClass(inactiveContainerBackgroundString).addClass(inactiveContainerBackgroundString);
                        resumeContainerBackground.removeClass(activeContainerBackgroundString).removeClass(inactiveContainerBackgroundString).addClass(inactiveContainerBackgroundString);
                        workContainerBackground.removeClass(activeContainerBackgroundString).removeClass(inactiveContainerBackgroundString).addClass(activeContainerBackgroundString);
                        contactContainerBackground.removeClass(activeContainerBackgroundString).removeClass(inactiveContainerBackgroundString).addClass(inactiveContainerBackgroundString);
                        verticalBreakHomeBackground.removeClass(activeVerticalBreakBackgroundString).removeClass(inactiveVerticalBreakBackgroundString).addClass(inactiveVerticalBreakBackgroundString);
                        verticalBreakHomeBackground.removeClass(activeVerticalBreakBackgroundString).removeClass(inactiveVerticalBreakBackgroundString).addClass(inactiveVerticalBreakBackgroundString);
                        verticalBreakResumeBackground.removeClass(activeVerticalBreakBackgroundString).removeClass(inactiveVerticalBreakBackgroundString).addClass(inactiveVerticalBreakBackgroundString);
                        verticalBreakWorkBackground.removeClass(activeVerticalBreakBackgroundString).removeClass(inactiveVerticalBreakBackgroundString).addClass(activeVerticalBreakBackgroundString);
                        verticalBreakContactBackground.removeClass(activeVerticalBreakBackgroundString).removeClass(inactiveVerticalBreakBackgroundString).addClass(inactiveVerticalBreakBackgroundString);
                        mastheadHomeBackground.removeClass(activeMastheadBackgroundString).removeClass(inactiveMastheadBackgroundString).addClass(inactiveMastheadBackgroundString);
                        mastheadResumeBackground.removeClass(activeMastheadBackgroundString).removeClass(inactiveMastheadBackgroundString).addClass(inactiveMastheadBackgroundString);
                        mastheadWorkBackground.removeClass(activeMastheadBackgroundString).removeClass(inactiveMastheadBackgroundString).addClass(activeMastheadBackgroundString);
                        mastheadContactBackground.removeClass(activeMastheadBackgroundString).removeClass(inactiveMastheadBackgroundString).addClass(inactiveMastheadBackgroundString);
                        home.removeClass(activePageSectionString).removeClass(inactivePageSectionString).addClass(inactivePageSectionString);
                        resume.removeClass(activePageSectionString).removeClass(inactivePageSectionString).addClass(inactivePageSectionString);
                        work.removeClass(activePageSectionString).removeClass(inactivePageSectionString).addClass(activePageSectionString);
                        contact.removeClass(activePageSectionString).removeClass(inactivePageSectionString).addClass(inactivePageSectionString);
                        activePageSection = pageContainer.find(activePageSectionFindString);
                        TweenMax.set(activePageSection, {
                            y: 0,
                            z: 0
                        });
                        TweenMax.from(pageContainer.find(activePageSectionFindString), activePageDuration, {
                            y: 100,
                            /*z: 100,*/
                            ease: activePageEaseTablet
                        }, 0);
                            
                        positionCategoryTitles();
                            
                        break;
                    case (pageIndex !== 3) && ($(this).hasClass('page4')) && (containerBackground.css('backgroundColor') !== contactBackgroundColorHalf):
                        pageIndex = 3;
                        
                            
                        TweenMax.set(outerContainer, {
                           overflowY:'hidden' 
                        });
                            
                        TweenMax.set(outerContainer, {
                           overflowY:'scroll',
                            scrollTop:0
                        });

                        /*TweenMax.to(verticalBreak, activePageDuration, {
                            backgroundColor: 'rgba(' + contactBackgroundColor + ',0.1)'
                        }, 0);*/

                        /*TweenMax.to(mastheadContainer, activePageDuration, {
                            backgroundColor: contactBackgroundColorHalf
                        }, 0);*/
                        homeContainerBackground.removeClass(activeContainerBackgroundString).removeClass(inactiveContainerBackgroundString).addClass(inactiveContainerBackgroundString);
                        resumeContainerBackground.removeClass(activeContainerBackgroundString).removeClass(inactiveContainerBackgroundString).addClass(inactiveContainerBackgroundString);
                        workContainerBackground.removeClass(activeContainerBackgroundString).removeClass(inactiveContainerBackgroundString).addClass(inactiveContainerBackgroundString);
                        contactContainerBackground.removeClass(activeContainerBackgroundString).removeClass(inactiveContainerBackgroundString).addClass(activeContainerBackgroundString);
                        verticalBreakHomeBackground.removeClass(activeVerticalBreakBackgroundString).removeClass(inactiveVerticalBreakBackgroundString).addClass(inactiveVerticalBreakBackgroundString);
                        verticalBreakHomeBackground.removeClass(activeVerticalBreakBackgroundString).removeClass(inactiveVerticalBreakBackgroundString).addClass(inactiveVerticalBreakBackgroundString);
                        verticalBreakResumeBackground.removeClass(activeVerticalBreakBackgroundString).removeClass(inactiveVerticalBreakBackgroundString).addClass(inactiveVerticalBreakBackgroundString);
                        verticalBreakWorkBackground.removeClass(activeVerticalBreakBackgroundString).removeClass(inactiveVerticalBreakBackgroundString).addClass(inactiveVerticalBreakBackgroundString);
                        verticalBreakContactBackground.removeClass(activeVerticalBreakBackgroundString).removeClass(inactiveVerticalBreakBackgroundString).addClass(activeVerticalBreakBackgroundString);
                        mastheadHomeBackground.removeClass(activeMastheadBackgroundString).removeClass(inactiveMastheadBackgroundString).addClass(inactiveMastheadBackgroundString);
                        mastheadResumeBackground.removeClass(activeMastheadBackgroundString).removeClass(inactiveMastheadBackgroundString).addClass(inactiveMastheadBackgroundString);
                        mastheadWorkBackground.removeClass(activeMastheadBackgroundString).removeClass(inactiveMastheadBackgroundString).addClass(inactiveMastheadBackgroundString);
                        mastheadContactBackground.removeClass(activeMastheadBackgroundString).removeClass(inactiveMastheadBackgroundString).addClass(activeMastheadBackgroundString);
                        home.removeClass(activePageSectionString).removeClass(inactivePageSectionString).addClass(inactivePageSectionString);
                        resume.removeClass(activePageSectionString).removeClass(inactivePageSectionString).addClass(inactivePageSectionString);
                        work.removeClass(activePageSectionString).removeClass(inactivePageSectionString).addClass(inactivePageSectionString);
                        contact.removeClass(activePageSectionString).removeClass(inactivePageSectionString).addClass(activePageSectionString);
                        activePageSection = pageContainer.find(activePageSectionFindString);
                        TweenMax.set(activePageSection, {
                            y: 0,
                            z: 0
                        });
                        TweenMax.from(pageContainer.find(activePageSectionFindString), activePageDuration, {
                            y: 100,
                            /*z: 100,*/
                            ease: activePageEaseTablet
                        }, 0);
                        break;
                    }
                    switch (true) {
                    case ($(this).hasClass('page1')) && (containerBackground.css('backgroundColor') !== homeBackgroundColorHalf):
                        homeItemHoverActive = true;
                        /*TweenMax.to(containerBackground, sideItemHoverDuration, {
                            backgroundColor: homeBackgroundColorHalf,
                            onComplete: function () {
                                homeItemHoverActive = false;
                            }
                        }, 0);*/
                        TweenMax.set(menuTrackerRaft, {
                            rotation:0,
                            ease:Expo.easeOut
                        });
                        TweenMax.to(menuTrackerRaft, menuTrackerRaftDuration, {
                            y: trackerHomePositionY,
                            rotation:720,
                            ease: menuTrackerRaftEaseTablet
                        }, 0);
                        TweenMax.to(menuTracker, 0, {
                            backgroundColor: homeBackgroundColorHalf
                        }, 0);
                        TweenMax.to(sideItem, 0, {
                            color: homeBackgroundColorHalf
                        }, 0);
                        TweenMax.to(fullBody, 0, {
                            color: homeBackgroundColorHalf
                        }, 0);
                        TweenMax.to($(this).find(sideItemBackgroundFindString), 0, {
                            backgroundColor: homeBackgroundColorClear
                        }, 0);
                        currentColor = homeBackgroundColorHalf;
                        currentColorClear = homeBackgroundColorClear;
                        break;
                    case ($(this).hasClass('page2')) && (containerBackground.css('backgroundColor') !== resumeBackgroundColorHalf):
                        resumeItemHoverActive = true;
                        TweenMax.set(resumeIconsColumn, {
                            height: resumeSkillsetColumn.outerHeight()
                        });
                        /*TweenMax.to(containerBackground, sideItemHoverDuration, {
                            backgroundColor: resumeBackgroundColorHalf,
                            onComplete: function () {
                                resumeItemHoverActive = false;
                            }
                        }, 0);*/
                        TweenMax.set(menuTrackerRaft, {
                            rotation:0,
                            ease:Expo.easeOut
                        });
                        TweenMax.to(menuTrackerRaft, menuTrackerRaftDuration, {
                            y: trackerResumePositionY,
                            rotation:720,
                            ease: menuTrackerRaftEaseTablet
                        }, 0);
                        TweenMax.to(menuTracker, 0, {
                            backgroundColor: resumeBackgroundColorHalf
                        }, 0);
                        TweenMax.to(sideItem, 0, {
                            color: resumeBackgroundColorHalf
                        }, 0);
                        TweenMax.to(fullBody, 0, {
                            color: resumeBackgroundColorHalf
                        }, 0);
                        TweenMax.to($(this).find(sideItemBackgroundFindString), 0, {
                            backgroundColor: resumeBackgroundColorClear
                        }, 0);
                        currentColor = resumeBackgroundColorHalf;
                        currentColorClear = resumeBackgroundColorClear;
                        break;
                    case ($(this).hasClass('page3')) && (containerBackground.css('backgroundColor') !== workBackgroundColorHalf):
                        workItemHoverActive = true;
                        /*TweenMax.to(containerBackground, sideItemHoverDuration, {
                            backgroundColor: workBackgroundColorHalf,
                            onComplete: function () {
                                workItemHoverActive = false;
                            }
                        }, 0);*/
                        TweenMax.set(menuTrackerRaft, {
                            rotation:0,
                            ease:Expo.easeOut
                        });
                        TweenMax.to(menuTrackerRaft, menuTrackerRaftDuration, {
                            y: trackerWorkPositionY,
                            rotation:720,
                            ease: menuTrackerRaftEaseTablet
                        }, 0);
                        TweenMax.to(menuTracker, 0, {
                            backgroundColor: workBackgroundColorHalf
                        }, 0);
                        TweenMax.to(sideItem, 0, {
                            color: workBackgroundColorHalf
                        }, 0);
                        TweenMax.to(fullBody, 0, {
                            color: workBackgroundColorHalf
                        }, 0);
                        TweenMax.to($(this).find(sideItemBackgroundFindString), 0, {
                            backgroundColor: workBackgroundColorClear
                        }, 0);
                        currentColor = workBackgroundColorHalf;
                        currentColorClear = workBackgroundColorClear;
                        break;
                    case ($(this).hasClass('page4')) && (containerBackground.css('backgroundColor') !== contactBackgroundColorHalf):
                        contactItemHoverActive = true;
                        /*TweenMax.to(containerBackground, sideItemHoverDuration, {
                            backgroundColor: contactBackgroundColorHalf,
                            onComplete: function () {
                                contactItemHoverActive = false;
                            }
                        }, 0);*/
                        TweenMax.set(menuTrackerRaft, {
                            rotation:0,
                            ease:Expo.easeOut
                        });
                        TweenMax.to(menuTrackerRaft, menuTrackerRaftDuration, {
                            y: trackerContactPositionY,
                            rotation:720,
                            ease: menuTrackerRaftEaseTablet
                        }, 0);
                        TweenMax.to(menuTracker, 0, {
                            backgroundColor: contactBackgroundColorHalf
                        }, 0);
                        TweenMax.to(sideItem, 0, {
                            color: contactBackgroundColorHalf
                        }, 0);
                        TweenMax.to(fullBody, 0, {
                            color: contactBackgroundColorHalf
                        }, 0);
                        TweenMax.to($(this).find(sideItemBackgroundFindString), 0, {
                            backgroundColor: contactBackgroundColorClear
                        }, 0);
                        currentColor = contactBackgroundColorHalf;
                        currentColorClear = contactBackgroundColorClear;
                        break;
                    }
                    TweenMax.to($(this), sideItemHoverDuration, {
                        x: 0,
                        ease: sideItemHoverEaseTablet
                    }, 0);
                });
            }
        }
    }
};