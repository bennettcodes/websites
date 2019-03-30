window.portfolioLoad = function() {

    window.location.hash = "portfolio";
    $.ajax({
        type: 'GET',
        url: 'work-temp2.html',
        success: function(portfolio) {
            $('#content').html(portfolio, function() {});

            function preCachePortfolioBlackIcons() {
                $.each(portfolioCategoriesArray, function() {
                    var img = new Image();
                    img.src = this;
                });
            };

            preCachePortfolioBlackIcons();

        },
        cache: true,
        complete: function() {

            $('#content-body').fadeIn(0);

            $('#loading-container').fadeOut(500);

            $('.image-precache').html(window.portfolioWebsitesArray);

            $('.image-precache').html(window.portfolioBannersArray);

            $('.image-precache').html(window.portfolioEblastsArray);

            $('.image-precache').html(window.portfolioFlyersArray);

            $('.image-precache').html(window.portfolioBrochuresArray);

            $('.image-precache').html(window.portfolioBillboardsArray);

		   	$('#download-resume').stop(true,true).delay(1500).fadeIn(1000);
   			$('#copyright').stop(true,true).delay(2000).fadeIn(1000);
            
            var runOnce = true;
            
            if ($('#header').hasClass('run')) {
            $('#orb-instructions').stop(true,true).fadeIn(0).css('opacity','0').animate({
                opacity:'1'
            },500,'swing',function(){
                $(this).delay(1500).animate({
                    opacity:'0'
                },500,'swing',function(){});
            });
            }

            var portfolioOrb = $(".portfolio-orb"),
                orbSize = 100,

                orbHalfSize = orbSize / 2,
                orbWidth = orbSize,
                orbHeight = orbSize,
                index = portfolioOrb.eq(index) + 1,
                orbIncrement = 20 * index,
                orbPadding = orbSize + orbIncrement,
                pageHalf = $(window).width() / 2,
                orbFromCenter = orbSize + 10,
                header = $('#header'),
                headerHeight = header.height(),
                initialTopLeft = headerHeight + 45,
                orbAndOneQuarter = orbSize * 1.25,
                orbAndThreeQuarters = orbSize * 1.75,
                orbThreeFourths = orbSize * 0.75,
                initialTopRight = initialTopLeft + orbThreeFourths,
                portfolioTitleLeft = $('.portfolio-title-left'),
                portfolioTitleRight = $('.portfolio-title-right'),
                portfolioTitleHeight = portfolioTitleLeft.height(),
                portfolioTitleHalfHeight = portfolioTitleHeight / 2,
                portfolioTitleTop = orbHalfSize - portfolioTitleHalfHeight,
                portfolioTitleTopExpanded = portfolioTitleTop + 10,
                orbPositionX = pageHalf - orbFromCenter,
                orbSideToOtherSide = orbPositionX + orbSize + 20,
                orbSitesPositionX = portfolioOrb.eq(0).position.left,
                orbSitesPositionY = portfolioOrb.eq(0).position.top,
                orbBannersPositionX = portfolioOrb.eq(1).position.left,
                orbBannersPositionY = portfolioOrb.eq(1).position.top,
                orbEblastsPositionX = portfolioOrb.eq(2).position.left,
                orbEblastsPositionY = portfolioOrb.eq(2).position.top,
                orbFlyersPositionX = portfolioOrb.eq(3).position.left,
                orbFlyersPositionY = portfolioOrb.eq(3).position.top,
                orbBrochuresPositionX = portfolioOrb.eq(4).position.left,
                orbBrochuresPositionY = portfolioOrb.eq(4).position.top,
                orbBillboardsPositionX = portfolioOrb.eq(5).position.left,
                orbBillboardsPositionY = portfolioOrb.eq(5).position.top,
                black = $('.black'),
                white = $('.white'),
                blackLogoContainer = $('#black-logo-container'),
                blackLogo = $('#logo.black'),
                logoContainer = $('#logo-container'),
                whiteLogo = $('#logo.white'),
                closeIconContainer = $('#close-icon-container'),
                closeIcon = $('#close-icon'),
                menuIconContainer = $('#menu-icon-container'),
                menuHoverShadow = $('#menu-hover-shadow'),
                portfolioOverlay = $('#portfolio-overlay');

            function addTopLeft(amount) {
                result = initialTopLeft + amount;
                return result;
            };

            function addTopRight(amount) {
                result = initialTopRight + amount;
                return result;
            };

            var addQuarterToLeft = addTopLeft(orbAndOneQuarter),
                addQuarterToRight = addTopRight(orbAndOneQuarter),
                lastLeft = addQuarterToLeft + orbAndOneQuarter,
                lastRight = addQuarterToRight + orbAndOneQuarter;




            blackLogoContainer.on({
                'touchstart': function() {
   					$('#copyright').stop(true,true).fadeOut(0);
   					$('#download-resume').stop(true,true).fadeOut(0);
                    blackLogo.stop(true, false).animate({
                        width: logoWidthExpanded + "px",
                        height: logoHeightExpanded + "px",
                        top: "18.75px",
                        left: "12.5px",
                        opacity: "1"
                    }, 250, 'easeOutCirc', function() {});
                    white.fadeIn(0);
                    whiteLogo.stop(true, false).animate({
                        width: logoWidthExpanded + "px",
                        height: logoHeightExpanded + "px",
                        top: "18.75px",
                        left: "12.5px",
                        opacity: "1"
                    }, 250, 'easeOutCirc', function() {});
                }
            });
            blackLogoContainer.on({
                'touchend': function() {
					$('#download-resume').stop(true,true).delay(500).fadeIn(1000);
   					$('#copyright').stop(true,true).delay(1000).fadeIn(1000);
                    portfolioOverlay.stop(true, false).fadeOut(500, 'swing');
                    blackLogo.animate({
                        width: "163.95px",
                        height: "50px",
                        top: "25px",
                        left: "20px"
                    }, 250, 'easeInCirc', function() {});
                    whiteLogo.animate({
                        width: "163.95px",
                        height: "50px",
                        top: "25px",
                        left: "20px"
                    }, 250, 'easeInCirc', function() {});
                    black.animate({
                        opacity: '0'
                    }, 250, 'swing', function() {
                        $(this).fadeOut(0);
                        blackLogoContainer.fadeOut(0);
                    });
                    $("#content").fadeOut(500, function() {
                        $('.portfolio-tile-header-container').fadeOut(0);
                        $('.portfolio-tile-header').fadeOut(0);
                        $('.portfolio-tile-subheader').fadeOut(0);
                        $(this).empty(0).fadeIn(0);
                        $('#portfolio-tile-container-outer').empty(0);
                    });
                    closeIconContainer.fadeOut(0);
                    menuIconContainer.fadeIn(0);
                    menuHoverShadow.fadeIn(500, 'swing');
                    logoContainer.fadeIn(500, 'swing');
   					$('#download-resume').delay(500).fadeIn(1000);
   					$('#copyright').delay(1000).fadeIn(1000);
                    $("#profile-circle").stop(true, true).fadeIn(0).css({
                        "opacity": "0",
                        "width": "30vw",
                        "height": "30vw",
                        "top": "70vh",
                        "left": "35vw"
                    }).animate({
                        width: "75vw",
                        height: "75vw",
                        opacity: "1",
                        top: "30vh",
                        left: "12.5vw"
                    }, 1000, "easeOutBack", function() {});
                }
            });


            portfolioOrb.css({
                'width': orbWidth,
                'height': orbHeight
            });

            portfolioTitleLeft.eq(0).css({
                'top': (initialTopLeft + orbHalfSize) - portfolioTitleHalfHeight,
                'left': orbPositionX * 1.5
            });

            portfolioTitleLeft.eq(1).css({
                'top': (addTopLeft(orbAndOneQuarter) + orbHalfSize) - portfolioTitleHalfHeight,
                'left': orbPositionX * 1.5
            });

            portfolioTitleLeft.eq(2).css({
                'top': (lastLeft + orbHalfSize) - portfolioTitleHalfHeight,
                'left': orbPositionX * 1.5
            });

            portfolioTitleRight.eq(0).css({
                'top': (initialTopRight + orbHalfSize) - portfolioTitleHalfHeight,
                'right': orbPositionX * 1.5
            });

            portfolioTitleRight.eq(1).css({
                'top': (addTopRight(orbAndOneQuarter) + orbHalfSize) - portfolioTitleHalfHeight,
                'right': orbPositionX * 1.5
            });

            portfolioTitleRight.eq(2).css({
                'top': (lastRight + orbHalfSize) - portfolioTitleHalfHeight,
                'right': orbPositionX * 1.5
            });

            $('#loading-container').stop(true, true).fadeOut(500);
            $("#content-body").stop(true, true).css("marginTop", "50px").animate({
                marginTop: "0",
                opacity: "1"
            }, 3000, "easeOutQuart", function() {});
            portfolioOrb.eq(0).delay(250).css({
                'width': 0,
                'height': 0,
                'left': pageHalf - orbHalfSize,
                'top': initialTopLeft + orbHalfSize,
                'opacity': '1'
            }).animate({
                width: orbSize,
                height: orbSize,
                top: initialTopLeft,
                left: orbPositionX,
                opacity: '1'
            }, 2000, 'easeOutElastic', function() {});

            portfolioOrb.eq(1).delay(750).css({
                'width': 0,
                'height': 0,
                'right': pageHalf - orbHalfSize,
                'top': initialTopRight + orbHalfSize,
                'opacity': '1'
            }).animate({
                width: orbSize,
                height: orbSize,
                top: initialTopRight,
                right: orbPositionX,
                opacity: '1'
            }, 1000, 'easeOutElastic', function() {});

            portfolioOrb.eq(2).delay(900).css({
                'width': 0,
                'height': 0,
                'left': orbPositionX + 25,
                'top': addTopLeft(orbAndOneQuarter) + orbHalfSize,
                'opacity': '1'
            }).animate({
                width: orbSize,
                height: orbSize,
                top: addTopLeft(orbAndOneQuarter),
                left: orbPositionX,
                opacity: '1'
            }, 1000, 'easeOutElastic', function() {});


            portfolioOrb.eq(3).delay(1100).css({
                'width': 0,
                'height': 0,
                'right': pageHalf - orbHalfSize,
                'top': addTopRight(orbAndOneQuarter) + orbHalfSize,
                'opacity': '1'
            }).animate({
                width: orbSize,
                height: orbSize,
                top: addTopRight(orbAndOneQuarter),
                right: orbPositionX,
                opacity: '1'
            }, 1000, 'easeOutElastic', function() {});

            portfolioOrb.eq(4).delay(1200).css({
                'width': 0,
                'height': 0,
                'left': pageHalf - orbHalfSize,
                'top': lastLeft + orbHalfSize,
                'opacity': '1'
            }).animate({
                width: orbSize,
                height: orbSize,
                top: lastLeft,
                left: orbPositionX,
                opacity: '1'
            }, 1000, 'easeOutElastic', function() {});

            portfolioOrb.eq(5).delay(1300).css({
                'width': 0,
                'height': 0,
                'right': pageHalf - orbHalfSize,
                'top': lastRight + orbHalfSize,
                'opacity': '1'
            }).animate({
                width: orbSize,
                height: orbSize,
                top: lastRight,
                right: orbPositionX,
                opacity: '1'
            }, 1000, 'easeOutElastic', function() {
                
                $('#orb-instructions').fadeOut(0);
                $('#header').removeClass('run');
                
            });

            //ORB 1 TOUCH START
            portfolioOrb.eq(0).on({
                'touchstart': function() {
                    "use strict";

                    $('#content-body').stop(true, true);
                    $(this).stop(true, true).css({
                        'backgroundImage': 'url(./images/site-black.svg)',
                        'z-index': '15'
                    }).animate({
                        width: "+=20px",
                        height: "+=20px",
                        top: "-=10px",
                        left: "-=10px",
                        backgroundColor: "#fff2b7"
                    }, 500, 'easeOutExpo', function() {});
                    $(this).parents().find("body").stop(true, true).animate({
                        backgroundColor: "#4c4c4c"
                    }, 250, 'linear', function() {});
                    $(this).parents().find("#container").stop(true, true).animate({
                        backgroundColor: "#000000"
                    }, 250, 'linear', function() {});

                    $(this).parent('div').find('.portfolio-orb').eq(1).stop(true, true).css({
                        'width': orbSize,
                        'height': orbSize,
                        'top': initialTopRight,
                        'right': orbPositionX,
                        'opacity': '1'
                    }).animate({
                        top: '-=15px',
                        right: '+=15px',
                        opacity: "0.3"
                    }, 1000, 'easeOutExpo', function() {});

                    $(this).parent('div').find('.portfolio-orb').eq(2).stop(true, true).css({
                        'width': orbSize,
                        'height': orbSize,
                        'top': addTopLeft(orbAndOneQuarter),
                        'left': orbPositionX,
                        'opacity': '1'
                    }).animate({
                        top: '-=15px',
                        opacity: "0.3"
                    }, 1000, 'easeOutExpo', function() {});

                    $(this).parent('div').find('.portfolio-orb').eq(3).stop(true, true).css({
                        'width': orbSize,
                        'height': orbSize,
                        'top': addTopRight(orbAndOneQuarter),
                        'right': orbPositionX,
                        'opacity': '1'
                    }).animate({
                        top: '-=30px',
                        right: '+=15px',
                        opacity: "0.3"
                    }, 1000, 'easeOutExpo', function() {});

                    $(this).parent('div').find('.portfolio-orb').eq(4).stop(true, true).css({
                        'width': orbSize,
                        'height': orbSize,
                        'top': lastLeft,
                        'left': orbPositionX,
                        opacity: '1'
                    }).animate({
                        top: '-=30px',
                        opacity: "0.3"
                    }, 1000, 'easeOutExpo', function() {});

                    $(this).parent('div').find('.portfolio-orb').eq(5).stop(true, true).css({
                        'width': orbSize,
                        'height': orbSize,
                        'top': lastRight,
                        'right': orbPositionX,
                        opacity: '1'
                    }).animate({
                        top: '-=45px',
                        right: '+=15px',
                        opacity: "0.3"
                    }, 1000, 'easeOutExpo', function() {});

                    portfolioTitleLeft.eq(0).stop(true, true).css('zIndex', '14').animate({
                        left: "+=80px",
                        opacity: '1'
                    }, 1000, 'easeOutExpo', function() {});
                }
            });

            //ORB 1 TOUCH END
            portfolioOrb.eq(0).on({
                'touchend': function() {
                    "use strict";

                    var currentItem = $(this);

                    $(this).animate({
                        width: "-=20px",
                        height: "-=20px",
                        top: "+=10px",
                        left: "+=10px",
                        opacity: '0',
                        backgroundColor: "rgba(0,0,0,0.5)"
                    }, 1000, 'easeOutExpo', function() {
                        $(this).css('zIndex', '10');
                        portfolioTitleLeft.eq(0).css('zIndex', '10');
                        portfolioOverlay.fadeIn(500, 'swing', function() {

                            function correctURL() {
                                if (currentItem.hasClass('web1')) {
                                    return 'web-sites';
                                };
                                if (currentItem.hasClass('web2')) {
                                    return 'web-banners';
                                };
                                if (currentItem.hasClass('web3')) {
                                    return 'web-eblasts';
                                };
                                if (currentItem.hasClass('print1')) {
                                    return 'print-flyers';
                                };
                                if (currentItem.hasClass('print2')) {
                                    return 'print-brochures';
                                };
                                if (currentItem.hasClass('print3')) {
                                    return 'print-billboards';
                                }
                            };

                            console.log(correctURL());

                            // $(this).stop().find('.portfolio-item-title').stop();

                            $.ajax({
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
                            });

                        });
                        blackLogo.css('opacity', '1');
                        closeIcon.css('opacity', '1');
                        black.fadeIn(500, 'swing');
                        white.fadeOut(500, 'swing');
                        closeIconContainer.fadeIn(0);
                        menuIconContainer.fadeOut(0);
                        menuHoverShadow.fadeOut(500, 'swing');
                        logoContainer.fadeOut(500, 'swing');
                        blackLogoContainer.fadeIn(500, 'swing');
                    });
                    $(this).parents().find("body").animate({
                        backgroundColor: "#696969"
                    }, 250, 'linear', function() {});
                    $(this).parents().find("#container").animate({
                        backgroundColor: "#2b2b2b"
                    }, 250, 'linear', function() {});

                    $(this).parent('div').find('.portfolio-orb').eq(1).stop(true, true).animate({
                        top: '+=45px',
                        right: '-=45px',
                        opacity: "1"
                    }, 250, 'easeOutCirc', function() {
                        $(this).animate({
                            top: initialTopLeft,
                            right: orbSideToOtherSide,
                            width: '50px',
                            height: '50px',
                            opacity: '0'
                        }, 500, 'easeInCirc', function() {});
                    });

                    $(this).parent('div').find('.portfolio-orb').eq(2).stop(true, true).animate({
                        top: '+=60px',
                        opacity: "1"
                    }, 500, 'easeOutCirc', function() {
                        $(this).animate({
                            top: initialTopLeft,
                            left: '+=25px',
                            width: '50px',
                            height: '50px',
                            opacity: '0'
                        }, 500, 'easeInCirc', function() {});
                    });

                    $(this).parent('div').find('.portfolio-orb').eq(3).stop(true, true).animate({
                        top: '+=60px',
                        right: '-=45px',
                        opacity: "1"
                    }, 350, 'easeOutCirc', function() {
                        $(this).animate({
                            top: initialTopLeft,
                            right: orbSideToOtherSide,
                            width: '50px',
                            height: '50px',
                            opacity: '0'
                        }, 500, 'easeInCirc', function() {});
                    });

                    $(this).parent('div').find('.portfolio-orb').eq(4).stop(true, true).animate({
                        top: '+=75px',
                        opacity: "1"
                    }, 550, 'easeOutCirc', function() {
                        $(this).animate({
                            top: initialTopLeft,
                            left: '+=25px',
                            width: '50px',
                            height: '50px',
                            opacity: '0'
                        }, 500, 'easeInCirc', function() {});
                    });

                    $(this).parent('div').find('.portfolio-orb').eq(5).stop(true, true).animate({
                        top: '+=75px',
                        right: '-=45px',
                        opacity: "1"
                    }, 450, 'easeOutCirc', function() {
                        $(this).animate({
                            top: initialTopLeft,
                            right: orbSideToOtherSide,
                            width: '50px',
                            height: '50px',
                            opacity: '0'
                        }, 500, 'easeInCirc', function() {});
                    });

                    portfolioTitleLeft.eq(0).animate({
                        left: "+=100px",
                        opacity: '0'
                    }, 500, 'easeInQuart', function() {});
                }
            });

            //ORB 2 TOUCH START
            portfolioOrb.eq(1).delay(750).on({
                'touchstart': function() {
                    "use strict";
                    $(this).stop(true, true).css({
                        'backgroundImage': 'url(./images/banner-black.svg)',
                        'z-index': '15'
                    }).animate({
                        width: "+=20px",
                        height: "+=20px",
                        top: "-=10px",
                        right: "-=10px",
                        backgroundColor: "#fff2b7"
                    }, 500, 'easeOutExpo', function() {});
                    $(this).parents().find("body").stop(true, false).animate({
                        backgroundColor: "#4c4c4c"
                    }, 250, 'linear', function() {});
                    $(this).parents().find("#container").stop(true, false).animate({
                        backgroundColor: "#000000"
                    }, 250, 'linear', function() {});

                    $(this).parent('div').find('.portfolio-orb').eq(0).stop(true, true).css({
                        'width': orbSize,
                        'height': orbSize,
                        'top': initialTopLeft,
                        'left': orbPositionX,
                        opacity: '1'
                    }).animate({
                        top: '+=15px',
                        left: '+=15px',
                        opacity: "0.3"
                    }, 1000, 'easeOutExpo', function() {});

                    $(this).parent('div').find('.portfolio-orb').eq(2).stop(true, true).css({
                        'width': orbSize,
                        'height': orbSize,
                        'top': addTopLeft(orbAndOneQuarter),
                        'left': orbPositionX,
                        'opacity': '1'
                    }).animate({
                        top: '-=15px',
                        left: '+=15px',
                        opacity: "0.3"
                    }, 1000, 'easeOutExpo', function() {});

                    $(this).parent('div').find('.portfolio-orb').eq(3).stop(true, true).css({
                        'width': orbSize,
                        'height': orbSize,
                        'top': addTopRight(orbAndOneQuarter),
                        'right': orbPositionX,
                        'opacity': '1'
                    }).animate({
                        top: '-=15px',
                        opacity: "0.3"
                    }, 1000, 'easeOutExpo', function() {});

                    $(this).parent('div').find('.portfolio-orb').eq(4).stop(true, true).css({
                        'width': orbSize,
                        'height': orbSize,
                        'top': lastLeft,
                        'left': orbPositionX,
                        opacity: '1'
                    }).animate({
                        left: '+=15px',
                        top: '-=30px',
                        opacity: "0.3"
                    }, 1000, 'easeOutExpo', function() {});

                    $(this).parent('div').find('.portfolio-orb').eq(5).stop(true, true).css({
                        'width': orbSize,
                        'height': orbSize,
                        'top': lastRight,
                        'right': orbPositionX,
                        opacity: '1'
                    }).animate({
                        top: '-=30px',
                        opacity: "0.3"
                    }, 1000, 'easeOutExpo', function() {});

                    portfolioTitleRight.eq(0).stop(true, true).css('zIndex', '14').animate({
                        right: "+=80px",
                        opacity: '1'
                    }, 1000, 'easeOutExpo', function() {});
                }
            });

            //ORB 2 TOUCH END
            portfolioOrb.eq(1).delay(750).on({
                'touchend': function() {
                    "use strict";

                    var currentItem = $(this);

                    $(this).animate({
                        width: "-=20px",
                        height: "-=20px",
                        top: "+=10px",
                        right: "+=10px",
                        opacity: '0',
                        backgroundColor: "rgba(0,0,0,0.5)"
                    }, 1000, 'easeOutExpo', function() {
                        $(this).css('zIndex', '10');
                        portfolioTitleRight.eq(0).css('zIndex', '10');
                        portfolioOverlay.stop(true, true).fadeIn(500, 'swing', function() {



                            function correctURL() {
                                if (currentItem.hasClass('web1')) {
                                    return 'web-sites';
                                };
                                if (currentItem.hasClass('web2')) {
                                    return 'web-banners';
                                };
                                if (currentItem.hasClass('web3')) {
                                    return 'web-eblasts';
                                };
                                if (currentItem.hasClass('print1')) {
                                    return 'print-flyers';
                                };
                                if (currentItem.hasClass('print2')) {
                                    return 'print-brochures';
                                };
                                if (currentItem.hasClass('print3')) {
                                    return 'print-billboards';
                                }
                            };

                            console.log(correctURL());

                            // $(this).stop().find('.portfolio-item-title').stop();

                            $.ajax({
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

                                        $('.portfolio-tile-header-container').fadeIn(1000, 'easeOutCirc');

                                        $('.portfolio-tile-header-container').stop(true, true).fadeIn(0).css('opacity', '0').animate({
                                            opacity: '1'
                                        }, 1000, 'swing', function() {});
                                        $('.portfolio-tile-header').stop(true, true).fadeIn(0).css('opacity', '0').animate({
                                            opacity: '1'
                                        }, 1000, 'swing', function() {});
                                        $('.portfolio-tile-subheader').stop(true, true).fadeIn(0).css('opacity', '0').animate({
                                            opacity: '1'
                                        }, 1000, 'swing', function() {});
                                    }

                                    tileFlyIn();

                                    var portfolioTile = $('.portfolio-tile img');




                                }
                            });

                        });
                        blackLogo.css('opacity', '1');
                        closeIcon.css('opacity', '1');
                        black.fadeIn(500, 'swing');
                        white.fadeOut(500, 'swing');
                        closeIconContainer.fadeIn(0);
                        menuIconContainer.fadeOut(0);
                        menuHoverShadow.fadeOut(500, 'swing');
                        logoContainer.fadeOut(500, 'swing');
                        blackLogoContainer.fadeIn(500, 'swing');
                    });
                    $(this).parents().find("body").stop(true, false).animate({
                        backgroundColor: "#696969"
                    }, 250, 'linear', function() {});
                    $(this).parents().find("#container").stop(true, false).animate({
                        backgroundColor: "#2b2b2b"
                    }, 250, 'linear', function() {});

                    $(this).parent('div').find('.portfolio-orb').eq(0).stop(true, true).animate({
                        top: '-=45px',
                        left: '-=45px',
                        opacity: "1"
                    }, 550, 'easeOutCirc', function() {
                        $(this).animate({
                            top: initialTopRight,
                            left: orbSideToOtherSide,
                            width: '50px',
                            height: '50px',
                            opacity: '0'
                        }, 500, 'easeInCirc', function() {});
                    });

                    $(this).parent('div').find('.portfolio-orb').eq(2).stop(true, true).animate({
                        top: '+=45px',
                        left: '-=45px',
                        opacity: "1"
                    }, 500, 'easeOutCirc', function() {
                        $(this).animate({
                            top: initialTopRight,
                            left: orbSideToOtherSide,
                            width: '50px',
                            height: '50px',
                            opacity: '0'
                        }, 500, 'easeInCirc', function() {});
                    });

                    $(this).parent('div').find('.portfolio-orb').eq(3).stop(true, true).animate({
                        top: '+=45px',
                        opacity: "1"
                    }, 250, 'easeOutCirc', function() {
                        $(this).animate({
                            top: initialTopRight,
                            width: '50px',
                            height: '50px',
                            opacity: '0'
                        }, 500, 'easeInCirc', function() {});
                    });

                    $(this).parent('div').find('.portfolio-orb').eq(4).stop(true, true).animate({
                        top: '+=60px',
                        left: '-=45px',
                        opacity: "1"
                    }, 450, 'easeOutCirc', function() {
                        $(this).animate({
                            top: initialTopRight,
                            left: orbSideToOtherSide,
                            width: '50px',
                            height: '50px',
                            opacity: '0'
                        }, 500, 'easeInCirc', function() {});
                    });

                    $(this).parent('div').find('.portfolio-orb').eq(5).stop(true, true).animate({
                        top: '+=60px',
                        opacity: "1"
                    }, 350, 'easeOutCirc', function() {
                        $(this).animate({
                            top: initialTopRight,
                            width: '50px',
                            height: '50px',
                            opacity: '0'
                        }, 500, 'easeInCirc', function() {});
                    });

                    portfolioTitleRight.eq(0).animate({
                        right: "+=100px",
                        opacity: '0'
                    }, 500, 'easeInQuart', function() {});
                }
            });

            //ORB 3 TOUCH START
            portfolioOrb.eq(2).delay(900).on({
                'touchstart': function() {
                    "use strict";
                    $(this).stop(true, true).css({
                        'backgroundImage': 'url(./images/eblast-black.svg)',
                        'z-index': '15'
                    }).animate({
                        width: "+=20px",
                        height: "+=20px",
                        top: "-=10px",
                        left: "-=10px",
                        backgroundColor: "#fff2b7"
                    }, 500, 'easeOutExpo', function() {});
                    $(this).parents().find("body").stop(true, false).animate({
                        backgroundColor: "#4c4c4c"
                    }, 250, 'linear', function() {});
                    $(this).parents().find("#container").stop(true, false).animate({
                        backgroundColor: "#000000"
                    }, 250, 'linear', function() {});

                    $(this).parent('div').find('.portfolio-orb').eq(0).stop(true, true).css({
                        'width': orbSize,
                        'height': orbSize,
                        'top': initialTopLeft,
                        'left': orbPositionX,
                        opacity: '1'
                    }).animate({
                        top: '+=15px',
                        opacity: "0.3"
                    }, 1000, 'easeOutExpo', function() {});

                    $(this).parent('div').find('.portfolio-orb').eq(1).stop(true, true).css({
                        'width': orbSize,
                        'height': orbSize,
                        'top': initialTopRight,
                        'right': orbPositionX,
                        'opacity': '1'
                    }).animate({
                        top: '+=15px',
                        right: '+=15px',
                        opacity: "0.3"
                    }, 1000, 'easeOutExpo', function() {});

                    $(this).parent('div').find('.portfolio-orb').eq(3).stop(true, true).css({
                        'width': orbSize,
                        'height': orbSize,
                        'top': addTopRight(orbAndOneQuarter),
                        'right': orbPositionX,
                        'opacity': '1'
                    }).animate({
                        top: '-=15px',
                        right: '+=15px',
                        opacity: "0.3"
                    }, 1000, 'easeOutExpo', function() {});

                    $(this).parent('div').find('.portfolio-orb').eq(4).stop(true, true).css({
                        'width': orbSize,
                        'height': orbSize,
                        'top': lastLeft,
                        'left': orbPositionX,
                        opacity: '1'
                    }).animate({
                        top: '-=15px',
                        opacity: "0.3"
                    }, 1000, 'easeOutExpo', function() {});

                    $(this).parent('div').find('.portfolio-orb').eq(5).stop(true, true).css({
                        'width': orbSize,
                        'height': orbSize,
                        'top': lastRight,
                        'right': orbPositionX,
                        opacity: '1'
                    }).animate({
                        top: '-=30px',
                        right: '+=15px',
                        opacity: "0.3"
                    }, 1000, 'easeOutExpo', function() {});

                    portfolioTitleLeft.eq(1).stop(true, true).css('zIndex', '14').animate({
                        left: "+=80px",
                        opacity: '1'
                    }, 1000, 'easeOutExpo', function() {});
                }
            });

            //ORB 3 TOUCH END
            portfolioOrb.eq(2).delay(900).on({
                'touchend': function() {
                    "use strict";

                    var currentItem = $(this);

                    $(this).animate({
                        width: "-=20px",
                        height: "-=20px",
                        top: "+=10px",
                        left: "+=10px",
                        opacity: '0',
                        backgroundColor: "rgba(0,0,0,0.5)"
                    }, 1000, 'easeOutExpo', function() {
                        $(this).css('zIndex', '10');
                        portfolioTitleLeft.eq(1).css('zIndex', '10');
                        portfolioOverlay.stop(true, true).fadeIn(500, 'swing', function() {



                            function correctURL() {
                                if (currentItem.hasClass('web1')) {
                                    return 'web-sites';
                                };
                                if (currentItem.hasClass('web2')) {
                                    return 'web-banners';
                                };
                                if (currentItem.hasClass('web3')) {
                                    return 'web-eblasts';
                                };
                                if (currentItem.hasClass('print1')) {
                                    return 'print-flyers';
                                };
                                if (currentItem.hasClass('print2')) {
                                    return 'print-brochures';
                                };
                                if (currentItem.hasClass('print3')) {
                                    return 'print-billboards';
                                }
                            };

                            console.log(correctURL());

                            // $(this).stop().find('.portfolio-item-title').stop();

                            $.ajax({
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

                                        $('.portfolio-tile-header-container').fadeIn(1000, 'easeOutCirc');

                                        $('.portfolio-tile-header-container').stop(true, true).fadeIn(0).css('opacity', '0').animate({
                                            opacity: '1'
                                        }, 1000, 'swing', function() {});
                                        $('.portfolio-tile-header').stop(true, true).fadeIn(0).css('opacity', '0').animate({
                                            opacity: '1'
                                        }, 1000, 'swing', function() {});
                                        $('.portfolio-tile-subheader').stop(true, true).fadeIn(0).css('opacity', '0').animate({
                                            opacity: '1'
                                        }, 1000, 'swing', function() {});
                                    }

                                    tileFlyIn();

                                    var portfolioTile = $('.portfolio-tile img');




                                }
                            });

                        });
                        blackLogo.css('opacity', '1');
                        closeIcon.css('opacity', '1');
                        black.fadeIn(500, 'swing');
                        white.fadeOut(500, 'swing');
                        closeIconContainer.fadeIn(0);
                        menuIconContainer.fadeOut(0);
                        menuHoverShadow.fadeOut(500, 'swing');
                        logoContainer.fadeOut(500, 'swing');
                        blackLogoContainer.fadeIn(500, 'swing');
                    });
                    $(this).parents().find("body").stop(true, false).animate({
                        backgroundColor: "#696969"
                    }, 250, 'linear', function() {});
                    $(this).parents().find("#container").stop(true, false).animate({
                        backgroundColor: "#2b2b2b"
                    }, 250, 'linear', function() {});

                    $(this).parent('div').find('.portfolio-orb').eq(0).stop(true, true).animate({
                        top: '-=45px',
                        opacity: "1"
                    }, 250, 'easeOutCirc', function() {
                        $(this).animate({
                            top: addTopLeft(orbAndOneQuarter),
                            width: '50px',
                            height: '50px',
                            opacity: '0'
                        }, 500, 'easeInCirc', function() {});
                    });

                    $(this).parent('div').find('.portfolio-orb').eq(1).stop(true, true).animate({
                        top: '-=45px',
                        right: '-=45px',
                        opacity: "1"
                    }, 350, 'easeOutCirc', function() {
                        $(this).animate({
                            top: addTopLeft(orbAndOneQuarter),
                            width: '50px',
                            height: '50px',
                            right: orbSideToOtherSide,
                            opacity: '0'
                        }, 500, 'easeInCirc', function() {});
                    });

                    $(this).parent('div').find('.portfolio-orb').eq(3).stop(true, true).animate({
                        top: '+=45px',
                        right: '-=45px',
                        opacity: "1"
                    }, 450, 'easeOutCirc', function() {
                        $(this).animate({
                            top: addTopLeft(orbAndOneQuarter),
                            width: '50px',
                            height: '50px',
                            right: orbSideToOtherSide,
                            opacity: '0'
                        }, 500, 'easeInCirc', function() {});
                    });

                    $(this).parent('div').find('.portfolio-orb').eq(4).stop(true, true).animate({
                        top: '+=45px',
                        opacity: "1"
                    }, 550, 'easeOutCirc', function() {
                        $(this).animate({
                            top: addTopLeft(orbAndOneQuarter),
                            width: '50px',
                            height: '50px',
                            opacity: '0'
                        }, 500, 'easeInCirc', function() {});
                    });

                    $(this).parent('div').find('.portfolio-orb').eq(5).stop(true, true).animate({
                        top: '+=60px',
                        right: '-=45px',
                        opacity: "1"
                    }, 500, 'easeOutCirc', function() {
                        $(this).animate({
                            top: addTopLeft(orbAndOneQuarter),
                            width: '50px',
                            height: '50px',
                            right: orbSideToOtherSide,
                            opacity: '0'
                        }, 500, 'easeInCirc', function() {});
                    });

                    portfolioTitleLeft.eq(1).animate({
                        left: "+=100px",
                        opacity: '0'
                    }, 500, 'easeInQuart', function() {});
                }
            });

            //ORB 4 TOUCH START
            portfolioOrb.eq(3).delay(1100).on({
                'touchstart': function() {
                    "use strict";
                    $(this).stop(true, true).css({
                        'backgroundImage': 'url(./images/flyer-black.svg)',
                        'z-index': '15'
                    }).animate({
                        width: "+=20px",
                        height: "+=20px",
                        top: "-=10px",
                        right: "-=10px",
                        backgroundColor: "#fff2b7"
                    }, 500, 'easeOutExpo', function() {});
                    $(this).parents().find("body").stop(true, false).animate({
                        backgroundColor: "#4c4c4c"
                    }, 250, 'linear', function() {});
                    $(this).parents().find("#container").stop(true, false).animate({
                        backgroundColor: "#000000"
                    }, 250, 'linear', function() {});

                    $(this).parent('div').find('.portfolio-orb').eq(0).stop(true, true).css({
                        'width': orbSize,
                        'height': orbSize,
                        'top': initialTopLeft,
                        'left': orbPositionX,
                        opacity: '1'
                    }).animate({
                        top: '+=30px',
                        left: '+=15px',
                        opacity: "0.3"
                    }, 1000, 'easeOutExpo', function() {});

                    $(this).parent('div').find('.portfolio-orb').eq(1).stop(true, true).css({
                        'width': orbSize,
                        'height': orbSize,
                        'top': initialTopRight,
                        'right': orbPositionX,
                        'opacity': '1'
                    }).animate({
                        top: '+=15px',
                        opacity: "0.3"
                    }, 1000, 'easeOutExpo', function() {});

                    $(this).parent('div').find('.portfolio-orb').eq(2).stop(true, true).css({
                        'width': orbSize,
                        'height': orbSize,
                        'top': addTopLeft(orbAndOneQuarter),
                        'left': orbPositionX,
                        'opacity': '1'
                    }).animate({
                        top: '+=15px',
                        left: '+=15px',
                        opacity: "0.3"
                    }, 1000, 'easeOutExpo', function() {});

                    $(this).parent('div').find('.portfolio-orb').eq(4).stop(true, true).css({
                        'width': orbSize,
                        'height': orbSize,
                        'top': lastLeft,
                        'left': orbPositionX,
                        opacity: '1'
                    }).animate({
                        top: '-=15px',
                        left: '+=15px',
                        opacity: "0.3"
                    }, 1000, 'easeOutExpo', function() {});

                    $(this).parent('div').find('.portfolio-orb').eq(5).stop(true, true).css({
                        'width': orbSize,
                        'height': orbSize,
                        'top': lastRight,
                        'right': orbPositionX,
                        opacity: '1'
                    }).animate({
                        top: '-=15px',
                        opacity: "0.3"
                    }, 1000, 'easeOutExpo', function() {});

                    portfolioTitleRight.eq(1).stop(true, true).css('zIndex', '14').animate({
                        right: "+=80px",
                        opacity: '1'
                    }, 1000, 'easeOutExpo', function() {});
                }
            });

            //ORB 4 TOUCH END
            portfolioOrb.eq(3).delay(1100).on({
                'touchend': function() {
                    "use strict";

                    var currentItem = $(this);

                    $(this).animate({
                        width: "-=20px",
                        height: "-=20px",
                        top: "+=10px",
                        right: "+=10px",
                        opacity: '0',
                        backgroundColor: "rgba(0,0,0,0.5)"
                    }, 1000, 'easeOutExpo', function() {
                        $(this).css('zIndex', '10');
                        portfolioTitleRight.eq(1).css('zIndex', '10');
                        portfolioOverlay.stop(true, true).fadeIn(500, 'swing', function() {



                            function correctURL() {
                                if (currentItem.hasClass('web1')) {
                                    return 'web-sites';
                                };
                                if (currentItem.hasClass('web2')) {
                                    return 'web-banners';
                                };
                                if (currentItem.hasClass('web3')) {
                                    return 'web-eblasts';
                                };
                                if (currentItem.hasClass('print1')) {
                                    return 'print-flyers';
                                };
                                if (currentItem.hasClass('print2')) {
                                    return 'print-brochures';
                                };
                                if (currentItem.hasClass('print3')) {
                                    return 'print-billboards';
                                }
                            };

                            console.log(correctURL());

                            // $(this).stop().find('.portfolio-item-title').stop();

                            $.ajax({
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

                                        $('.portfolio-tile-header-container').fadeIn(1000, 'easeOutCirc');

                                        $('.portfolio-tile-header-container').stop(true, true).fadeIn(0).css('opacity', '0').animate({
                                            opacity: '1'
                                        }, 1000, 'swing', function() {});
                                        $('.portfolio-tile-header').stop(true, true).fadeIn(0).css('opacity', '0').animate({
                                            opacity: '1'
                                        }, 1000, 'swing', function() {});
                                        $('.portfolio-tile-subheader').stop(true, true).fadeIn(0).css('opacity', '0').animate({
                                            opacity: '1'
                                        }, 1000, 'swing', function() {});
                                    }

                                    tileFlyIn();

                                    var portfolioTile = $('.portfolio-tile img');




                                }
                            });

                        });
                        blackLogo.css('opacity', '1');
                        closeIcon.css('opacity', '1');
                        black.fadeIn(500, 'swing');
                        white.fadeOut(500, 'swing');
                        closeIconContainer.fadeIn(0);
                        menuIconContainer.fadeOut(0);
                        menuHoverShadow.fadeOut(500, 'swing');
                        logoContainer.fadeOut(500, 'swing');
                        blackLogoContainer.fadeIn(500, 'swing');
                    });
                    $(this).parents().find("body").stop(true, false).animate({
                        backgroundColor: "#696969"
                    }, 250, 'linear', function() {});
                    $(this).parents().find("#container").stop(true, false).animate({
                        backgroundColor: "#2b2b2b"
                    }, 250, 'linear', function() {});

                    $(this).parent('div').find('.portfolio-orb').eq(0).stop(true, true).animate({
                        top: '-=60px',
                        left: '-=45px',
                        opacity: "1"
                    }, 550, 'easeOutCirc', function() {
                        $(this).animate({
                            top: addTopRight(orbAndOneQuarter),
                            left: orbSideToOtherSide,
                            width: '50px',
                            height: '50px',
                            opacity: '0'
                        }, 500, 'easeInCirc', function() {});
                    });

                    $(this).parent('div').find('.portfolio-orb').eq(1).stop(true, true).animate({
                        top: '-=45px',
                        opacity: "1"
                    }, 500, 'easeOutCirc', function() {
                        $(this).animate({
                            top: addTopRight(orbAndOneQuarter),
                            width: '50px',
                            height: '50px',
                            opacity: '0'
                        }, 500, 'easeInCirc', function() {});
                    });

                    $(this).parent('div').find('.portfolio-orb').eq(2).stop(true, true).animate({
                        top: '-=45px',
                        left: '-=45px',
                        opacity: "1"
                    }, 450, 'easeOutCirc', function() {
                        $(this).animate({
                            top: addTopRight(orbAndOneQuarter),
                            width: '50px',
                            height: '50px',
                            left: orbSideToOtherSide,
                            opacity: '0'
                        }, 500, 'easeInCirc', function() {});
                    });

                    $(this).parent('div').find('.portfolio-orb').eq(4).stop(true, true).animate({
                        top: '+=45px',
                        left: '-=45px',
                        opacity: "1"
                    }, 350, 'easeOutCirc', function() {
                        $(this).animate({
                            top: addTopRight(orbAndOneQuarter),
                            width: '50px',
                            height: '50px',
                            left: orbSideToOtherSide,
                            opacity: '0'
                        }, 500, 'easeInCirc', function() {});
                    });

                    $(this).parent('div').find('.portfolio-orb').eq(5).stop(true, true).animate({
                        top: '+=45px',
                        opacity: "1"
                    }, 250, 'easeOutCirc', function() {
                        $(this).animate({
                            top: addTopRight(orbAndOneQuarter),
                            width: '50px',
                            height: '50px',
                            opacity: '0'
                        }, 500, 'easeInCirc', function() {});
                    });

                    portfolioTitleRight.eq(1).animate({
                        right: "+=100px",
                        opacity: '0'
                    }, 500, 'easeInQuart', function() {});
                }
            });

            //ORB 5 TOUCH START
            portfolioOrb.eq(4).delay(1200).on({
                'touchstart': function() {
                    "use strict";
                    $(this).stop(true, true).css({
                        'backgroundImage': 'url(./images/brochure-black.svg)',
                        'z-index': '15'
                    }).animate({
                        width: "+=20px",
                        height: "+=20px",
                        top: "-=10px",
                        left: "-=10px",
                        backgroundColor: "#fff2b7"
                    }, 500, 'easeOutExpo', function() {});
                    $(this).parents().find("body").stop(true, false).animate({
                        backgroundColor: "#4c4c4c"
                    }, 250, 'linear', function() {});
                    $(this).parents().find("#container").stop(true, false).animate({
                        backgroundColor: "#000000"
                    }, 250, 'linear', function() {});

                    $(this).parent('div').find('.portfolio-orb').eq(0).stop(true, true).css({
                        'width': orbSize,
                        'height': orbSize,
                        'top': initialTopLeft,
                        'left': orbPositionX,
                        opacity: '1'
                    }).animate({
                        top: '+=30px',
                        opacity: "0.3"
                    }, 1000, 'easeOutExpo', function() {});

                    $(this).parent('div').find('.portfolio-orb').eq(1).stop(true, true).css({
                        'width': orbSize,
                        'height': orbSize,
                        'top': initialTopRight,
                        'right': orbPositionX,
                        'opacity': '1'
                    }).animate({
                        top: '+=30px',
                        right: '+=15px',
                        opacity: "0.3"
                    }, 1000, 'easeOutExpo', function() {});

                    $(this).parent('div').find('.portfolio-orb').eq(2).stop(true, true).css({
                        'width': orbSize,
                        'height': orbSize,
                        'top': addTopLeft(orbAndOneQuarter),
                        'left': orbPositionX,
                        'opacity': '1'
                    }).animate({
                        top: '+=15px',
                        opacity: "0.3"
                    }, 1000, 'easeOutExpo', function() {});

                    $(this).parent('div').find('.portfolio-orb').eq(3).stop(true, true).css({
                        'width': orbSize,
                        'height': orbSize,
                        'top': addTopRight(orbAndOneQuarter),
                        'right': orbPositionX,
                        'opacity': '1'
                    }).animate({
                        top: '+=15px',
                        right: '+=15px',
                        opacity: "0.3"
                    }, 1000, 'easeOutExpo', function() {});

                    $(this).parent('div').find('.portfolio-orb').eq(5).stop(true, true).css({
                        'width': orbSize,
                        'height': orbSize,
                        'top': lastRight,
                        'right': orbPositionX,
                        opacity: '1'
                    }).animate({
                        right: '+=15px',
                        opacity: "0.3"
                    }, 1000, 'easeOutExpo', function() {});

                    portfolioTitleLeft.eq(2).stop(true, true).css('zIndex', '14').animate({
                        left: "+=80px",
                        opacity: '1'
                    }, 1000, 'easeOutExpo', function() {});
                }
            });

            //ORB 5 TOUCH END
            portfolioOrb.eq(4).delay(1200).on({
                'touchend': function() {
                    "use strict";

                    var currentItem = $(this);

                    $(this).animate({
                        width: "-=20px",
                        height: "-=20px",
                        top: "+=10px",
                        left: "+=10px",
                        opacity: '0',
                        backgroundColor: "rgba(0,0,0,0.5)"
                    }, 1000, 'easeOutExpo', function() {
                        $(this).css('zIndex', '10');
                        portfolioTitleLeft.eq(2).css('zIndex', '10');
                        portfolioOverlay.stop(true, true).fadeIn(500, 'swing', function() {



                            function correctURL() {
                                if (currentItem.hasClass('web1')) {
                                    return 'web-sites';
                                };
                                if (currentItem.hasClass('web2')) {
                                    return 'web-banners';
                                };
                                if (currentItem.hasClass('web3')) {
                                    return 'web-eblasts';
                                };
                                if (currentItem.hasClass('print1')) {
                                    return 'print-flyers';
                                };
                                if (currentItem.hasClass('print2')) {
                                    return 'print-brochures';
                                };
                                if (currentItem.hasClass('print3')) {
                                    return 'print-billboards';
                                }
                            };

                            console.log(correctURL());

                            // $(this).stop().find('.portfolio-item-title').stop();

                            $.ajax({
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

                                        $('.portfolio-tile-header-container').fadeIn(1000, 'easeOutCirc');

                                        $('.portfolio-tile-header-container').stop(true, true).fadeIn(0).css('opacity', '0').animate({
                                            opacity: '1'
                                        }, 1000, 'swing', function() {});
                                        $('.portfolio-tile-header').stop(true, true).fadeIn(0).css('opacity', '0').animate({
                                            opacity: '1'
                                        }, 1000, 'swing', function() {});
                                        $('.portfolio-tile-subheader').stop(true, true).fadeIn(0).css('opacity', '0').animate({
                                            opacity: '1'
                                        }, 1000, 'swing', function() {});
                                    }

                                    tileFlyIn();

                                    var portfolioTile = $('.portfolio-tile img');




                                }
                            });

                        });
                        blackLogo.css('opacity', '1');
                        closeIcon.css('opacity', '1');
                        black.fadeIn(500, 'swing');
                        white.fadeOut(500, 'swing');
                        closeIconContainer.fadeIn(0);
                        menuIconContainer.fadeOut(0);
                        menuHoverShadow.fadeOut(500, 'swing');
                        logoContainer.fadeOut(500, 'swing');
                        blackLogoContainer.fadeIn(500, 'swing');
                    });
                    $(this).parents().find("body").stop(true, false).animate({
                        backgroundColor: "#696969"
                    }, 250, 'linear', function() {});
                    $(this).parents().find("#container").stop(true, false).animate({
                        backgroundColor: "#2b2b2b"
                    }, 250, 'linear', function() {});

                    $(this).parent('div').find('.portfolio-orb').eq(0).stop(true, true).animate({
                        top: '-=75px',
                        opacity: "1"
                    }, 350, 'easeOutCirc', function() {
                        $(this).animate({
                            top: lastLeft,
                            width: '50px',
                            height: '50px',
                            opacity: '0'
                        }, 500, 'easeInCirc', function() {});
                    });

                    $(this).parent('div').find('.portfolio-orb').eq(1).stop(true, true).animate({
                        top: '-=75px',
                        right: '-=45px',
                        opacity: "1"
                    }, 550, 'easeOutCirc', function() {
                        $(this).animate({
                            top: lastLeft,
                            right: orbSideToOtherSide,
                            width: '50px',
                            height: '50px',
                            opacity: '0'
                        }, 500, 'easeInCirc', function() {});
                    });

                    $(this).parent('div').find('.portfolio-orb').eq(2).stop(true, true).animate({
                        top: '-=45px',
                        opacity: "1"
                    }, 250, 'easeOutCirc', function() {
                        $(this).animate({
                            top: lastLeft,
                            width: '50px',
                            height: '50px',
                            opacity: '0'
                        }, 500, 'easeInCirc', function() {});
                    });

                    $(this).parent('div').find('.portfolio-orb').eq(3).stop(true, true).animate({
                        top: '-=45px',
                        right: '-=45px',
                        opacity: "1"
                    }, 500, 'easeOutCirc', function() {
                        $(this).animate({
                            top: lastLeft,
                            right: orbSideToOtherSide,
                            width: '50px',
                            height: '50px',
                            opacity: '0'
                        }, 500, 'easeInCirc', function() {});
                    });

                    $(this).parent('div').find('.portfolio-orb').eq(5).stop(true, true).animate({
                        top: '+=45px',
                        right: '-=45px',
                        opacity: "1"
                    }, 450, 'easeOutCirc', function() {
                        $(this).animate({
                            top: lastLeft,
                            right: orbSideToOtherSide,
                            width: '50px',
                            height: '50px',
                            opacity: '0'
                        }, 500, 'easeInCirc', function() {});
                    });

                    portfolioTitleLeft.eq(2).animate({
                        left: "+=100px",
                        opacity: '0'
                    }, 500, 'easeInQuart', function() {});
                }
            });

            //ORB 6 TOUCH START
            portfolioOrb.eq(5).delay(1300).on({
                'touchstart': function() {
                    "use strict";
                    $(this).stop(true, true).css({
                        'backgroundImage': 'url(./images/billboard-black.svg)',
                        'z-index': '15'
                    }).animate({
                        width: "+=20px",
                        height: "+=20px",
                        top: "-=10px",
                        right: "-=10px",
                        backgroundColor: "#fff2b7"
                    }, 500, 'easeOutExpo', function() {});
                    $(this).parents().find("body").stop(true, false).animate({
                        backgroundColor: "#4c4c4c"
                    }, 250, 'linear', function() {});
                    $(this).parents().find("#container").stop(true, false).animate({
                        backgroundColor: "#000000"
                    }, 250, 'linear', function() {});

                    $(this).parent('div').find('.portfolio-orb').eq(0).stop(true, true).css({
                        'width': orbSize,
                        'height': orbSize,
                        'top': initialTopLeft,
                        'left': orbPositionX,
                        opacity: '1'
                    }).animate({
                        top: '+=45px',
                        left: '+=15px',
                        opacity: "0.3"
                    }, 1000, 'easeOutExpo', function() {});

                    $(this).parent('div').find('.portfolio-orb').eq(1).stop(true, true).css({
                        'width': orbSize,
                        'height': orbSize,
                        'top': initialTopRight,
                        'right': orbPositionX,
                        'opacity': '1'
                    }).animate({
                        top: '+=30px',
                        opacity: "0.3"
                    }, 1000, 'easeOutExpo', function() {});

                    $(this).parent('div').find('.portfolio-orb').eq(2).stop(true, true).css({
                        'width': orbSize,
                        'height': orbSize,
                        'top': addTopLeft(orbAndOneQuarter),
                        'left': orbPositionX,
                        'opacity': '1'
                    }).animate({
                        top: '+=30px',
                        left: '+=15px',
                        opacity: "0.3"
                    }, 1000, 'easeOutExpo', function() {});

                    $(this).parent('div').find('.portfolio-orb').eq(3).stop(true, true).css({
                        'width': orbSize,
                        'height': orbSize,
                        'top': addTopRight(orbAndOneQuarter),
                        'right': orbPositionX,
                        'opacity': '1'
                    }).animate({
                        top: '+=15px',
                        opacity: "0.3"
                    }, 1000, 'easeOutExpo', function() {});

                    $(this).parent('div').find('.portfolio-orb').eq(4).stop(true, true).css({
                        'width': orbSize,
                        'height': orbSize,
                        'top': lastLeft,
                        'left': orbPositionX,
                        opacity: '1'
                    }).animate({
                        top: '+=15px',
                        left: '+=15px',
                        opacity: "0.3"
                    }, 1000, 'easeOutExpo', function() {});

                    portfolioTitleRight.eq(2).stop(true, true).css('zIndex', '14').animate({
                        right: "+=80px",
                        opacity: '1'
                    }, 1000, 'easeOutExpo', function() {});
                }
            });

            //ORB 6 TOUCH END
            portfolioOrb.eq(5).delay(1300).on({
                'touchend': function() {
                    "use strict";

                    var currentItem = $(this);

                    $(this).animate({
                        width: "-=20px",
                        height: "-=20px",
                        top: "+=10px",
                        right: "+=10px",
                        opacity: '0',
                        backgroundColor: "rgba(0,0,0,0.5)"
                    }, 1000, 'easeOutExpo', function() {
                        $(this).css('zIndex', '10');
                        portfolioTitleRight.eq(2).css('zIndex', '10');
                        portfolioOverlay.stop(true, true).fadeIn(500, 'swing', function() {



                            function correctURL() {
                                if (currentItem.hasClass('web1')) {
                                    return 'web-sites';
                                };
                                if (currentItem.hasClass('web2')) {
                                    return 'web-banners';
                                };
                                if (currentItem.hasClass('web3')) {
                                    return 'web-eblasts';
                                };
                                if (currentItem.hasClass('print1')) {
                                    return 'print-flyers';
                                };
                                if (currentItem.hasClass('print2')) {
                                    return 'print-brochures';
                                };
                                if (currentItem.hasClass('print3')) {
                                    return 'print-billboards';
                                }
                            };

                            console.log(correctURL());

                            // $(this).stop().find('.portfolio-item-title').stop();

                            $.ajax({
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

                                        $('.portfolio-tile-header-container').fadeIn(1000, 'easeOutCirc');

                                        $('.portfolio-tile-header-container').stop(true, true).fadeIn(0).css('opacity', '0').animate({
                                            opacity: '1'
                                        }, 1000, 'swing', function() {});
                                        $('.portfolio-tile-header').stop(true, true).fadeIn(0).css('opacity', '0').animate({
                                            opacity: '1'
                                        }, 1000, 'swing', function() {});
                                        $('.portfolio-tile-subheader').stop(true, true).fadeIn(0).css('opacity', '0').animate({
                                            opacity: '1'
                                        }, 1000, 'swing', function() {});
                                    }

                                    tileFlyIn();

                                    var portfolioTile = $('.portfolio-tile img');




                                }
                            });

                        });
                        blackLogo.css('opacity', '1');
                        closeIcon.css('opacity', '1');
                        black.fadeIn(500, 'swing');
                        white.fadeOut(500, 'swing');
                        closeIconContainer.fadeIn(0);
                        menuIconContainer.fadeOut(0);
                        menuHoverShadow.fadeOut(500, 'swing');
                        logoContainer.fadeOut(500, 'swing');
                        blackLogoContainer.fadeIn(500, 'swing');
                    });
                    $(this).parents().find("body").stop(true, false).animate({
                        backgroundColor: "#696969"
                    }, 250, 'linear', function() {});
                    $(this).parents().find("#container").stop(true, false).animate({
                        backgroundColor: "#2b2b2b"
                    }, 250, 'linear', function() {});

                    $(this).parent('div').find('.portfolio-orb').eq(0).stop(true, true).animate({
                        top: '-=75px',
                        left: '-=45px',
                        opacity: "1"
                    }, 550, 'easeOutCirc', function() {
                        $(this).animate({
                            top: lastRight,
                            left: orbSideToOtherSide,
                            width: '50px',
                            height: '50px',
                            opacity: '0'
                        }, 500, 'easeInCirc', function() {});
                    });

                    $(this).parent('div').find('.portfolio-orb').eq(1).stop(true, true).animate({
                        top: '-=60px',
                        opacity: "1"
                    }, 500, 'easeOutCirc', function() {
                        $(this).animate({
                            top: lastRight,
                            width: '50px',
                            height: '50px',
                            opacity: '0'
                        }, 500, 'easeInCirc', function() {});
                    });

                    $(this).parent('div').find('.portfolio-orb').eq(2).stop(true, true).animate({
                        top: '-=45px',
                        left: '-=45px',
                        opacity: "1"
                    }, 450, 'easeOutCirc', function() {
                        $(this).animate({
                            top: lastRight,
                            left: orbSideToOtherSide,
                            width: '50px',
                            height: '50px',
                            opacity: '0'
                        }, 500, 'easeInCirc', function() {});
                    });

                    $(this).parent('div').find('.portfolio-orb').eq(3).stop(true, true).animate({
                        top: '-=45px',
                        opacity: "1"
                    }, 350, 'easeOutCirc', function() {
                        $(this).animate({
                            top: lastRight,
                            width: '50px',
                            height: '50px',
                            opacity: '0'
                        }, 500, 'easeInCirc', function() {});
                    });

                    $(this).parent('div').find('.portfolio-orb').eq(4).stop(true, true).animate({
                        top: '-=45px',
                        left: '-=45px',
                        opacity: "1"
                    }, 250, 'easeOutCirc', function() {
                        $(this).animate({
                            top: lastRight,
                            left: orbSideToOtherSide,
                            width: '50px',
                            height: '50px',
                            opacity: '0'
                        }, 500, 'easeInCirc', function() {});
                    });

                    portfolioTitleRight.eq(2).animate({
                        right: "+=100px",
                        opacity: '0'
                    }, 500, 'easeInQuart', function() {});
                }
            });

        }
    })
};



$('#close-icon-container').on({
    'touchstart': function() {
   		$('#copyright').stop(true,true).fadeOut(0);
   		$('#download-resume').stop(true,true).fadeOut(0);
        $(this).stop(true, false).css('backgroundColor', 'rgba(0,0,0,0.2)')
    }
});
$('#close-icon-container').on({
    'touchend': function() {

		$('#download-resume').stop(true,true).delay(1500).fadeIn(1000);
   		$('#copyright').stop(true,true).delay(2000).fadeIn(1000);
        $('#portfolio-overlay').stop(true, false).fadeOut(500, 'swing');
        $('.black').fadeOut(500, 'swing');
        $('.white').fadeIn(500, 'swing');
        $(this).stop(true, false).animate({
            backgroundColor: "rgba(0,0,0,0)"
        }, 500, 'swing', function() {
            $('#close-icon-container').stop(true, true).fadeOut(0);
            $('#menu-icon-container').stop(true, true).fadeIn(0);
            $('#menu-hover-shadow').stop(true, true).fadeIn(500, 'swing', function() {});
            $('.portfolio-tile-header-container').fadeOut(0);
            $('.portfolio-tile-header').fadeOut(0);
            $('.portfolio-tile-subheader').fadeOut(0);
            $('#portfolio-tile-container-outer').empty(0);

        });
        $('#loading-container').fadeIn(500).delay(200, function() {
            window.portfolioLoad();
        });
    }
});