var animations = {
    intro: {
        fullPage: {
            about: function() {

                foregroundContainer.css('opacity','0');
                backgroundContainer.css('opacity','0');
                
                firstName.css('color',firstNameLight);
                lastName.css('color',darkColorAbout);

                loadingContainer.velocity({
                    opacity:['0','1']
                }, {
                    duration:500,
                    complete:function() {

                        loadingContainer.detach();
                        menuContainer.velocity({
                            scaleX:['1','0.35']
                        }, {
                            duration:2000,
                            delay:1750,
                            easing:'spring',
                            queue:false
                        });
                        menuContainer.velocity({
                            rotateX:[zeroDegrees,'-45deg'],
                            scaleX:['0.35','1'],
                            translateY:['0vh','10vh'],
                            translateZ:['0px','500px'],
                            opacity:['1','0']
                        }, {
                            duration:3250,
                            easing:'easeOutExpo'
                        });
                        menuItemSelector.css('transformOrigin','left center').velocity({
                            scaleX:['1','0'],
                            opacity:['1','1']
                        }, {
                            duration:2000,
                            easing:'easeOutCirc',
                            delay:1750,
                            queue:false
                        });
                        for (i = 0; i < menuItem.length; i++) {
                            currentItem = menuItem.eq(i);

                            currentItem.velocity({
                                opacity:['1','0'],
                                translateX:['0vh','5vw']
                            }, {
                                duration:2000,
                                delay:menuItemDelay+=250,
                                easing:'easeOutCirc'
                            });
                        }
                        foregroundAbout.velocity({
                            opacity:['1','1']
                        }, {
                            duration:1000,
                            easing:'swing',
                            queue:false
                        });
                        foregroundAbout.velocity({
                            translateY:['0vh','101vh'],
                            rotateX:[zeroDegrees,'45deg'],
                            scale:['1','1.5'],
                            translateZ:['0px','400px']
                        }, {
                            duration:1000,
                            easing:'easeOutCirc',
                            complete:function() {
                                $(this).addClass(backgroundImageActiveString);
                            }
                        });
                        backgroundAbout.addClass(backgroundSkyActiveString).velocity({
                            opacity:'1'
                        }, {
                            duration:1000,
                            easing:'swing',
                            queue:false
                        });
                    }
                });
            },
            resume: function() {

                foregroundContainer.css('opacity','0');
                backgroundContainer.css('opacity','0');
                
                firstName.css('color',firstNameLight);
                lastName.css('color',lightColorResume);

                loadingContainer.velocity({
                    opacity:['0','1']
                }, {
                    duration:500,
                    complete:function() {

                        loadingContainer.detach();
                        menuContainer.velocity({
                            scaleX:['1','0.35']
                        }, {
                            duration:2000,
                            delay:1750,
                            easing:'spring',
                            queue:false
                        });
                        menuContainer.velocity({
                            rotateX:[zeroDegrees,'-45deg'],
                            scaleX:['0.35','1'],
                            translateY:['0vh','10vh'],
                            translateZ:['0px','500px'],
                            opacity:['1','0']
                        }, {
                            duration:3250,
                            easing:'easeOutExpo'
                        });
                        menuItemSelector.css('transformOrigin','left center').velocity({
                            scaleX:['1','0'],
                            opacity:['1','1']
                        }, {
                            duration:2000,
                            easing:'easeOutCirc',
                            delay:1750,
                            queue:false
                        });
                        for (i = 0; i < menuItem.length; i++) {
                            currentItem = menuItem.eq(i);

                            currentItem.velocity({
                                opacity:['1','0'],
                                translateX:['0vh','5vw']
                            }, {
                                duration:2000,
                                delay:menuItemDelay+=250,
                                easing:'easeOutCirc'
                            });
                        }
                        foregroundResume.velocity({
                            opacity:['1','1']
                        }, {
                            duration:1000,
                            easing:'swing',
                            queue:false
                        });
                        foregroundResume.velocity({
                            translateY:['0vh','101vh'],
                            rotateX:[zeroDegrees,'45deg'],
                            scale:['1','1.5'],
                            translateZ:['0px','400px']
                        }, {
                            duration:1000,
                            easing:'easeOutCirc',
                            complete:function() {
                                $(this).addClass(backgroundImageActiveString);
                            }
                        });
                        backgroundResume.addClass(backgroundSkyActiveString).velocity({
                            opacity:'1'
                        }, {
                            duration:1000,
                            easing:'swing',
                            queue:false
                        });
                    }
                });
            },
            portfolio: function() {

                foregroundContainer.css('opacity','0');
                backgroundContainer.css('opacity','0');
                
                firstName.css('color',firstNameLight);
                lastName.css('color',lightColorPortfolio);

                loadingContainer.velocity({
                    opacity:['0','1']
                }, {
                    duration:500,
                    complete:function() {

                        loadingContainer.detach();
                        menuContainer.velocity({
                            scaleX:['1','0.35']
                        }, {
                            duration:2000,
                            delay:1750,
                            easing:'spring',
                            queue:false
                        });
                        menuContainer.velocity({
                            rotateX:[zeroDegrees,'-45deg'],
                            scaleX:['0.35','1'],
                            translateY:['0vh','10vh'],
                            translateZ:['0px','500px'],
                            opacity:['1','0']
                        }, {
                            duration:3250,
                            easing:'easeOutExpo'
                        });
                        menuItemSelector.css('transformOrigin','left center').velocity({
                            scaleX:['1','0'],
                            opacity:['1','1']
                        }, {
                            duration:2000,
                            easing:'easeOutCirc',
                            delay:1750,
                            queue:false
                        });
                        for (i = 0; i < menuItem.length; i++) {
                            currentItem = menuItem.eq(i);

                            currentItem.velocity({
                                opacity:['1','0'],
                                translateX:['0vh','5vw']
                            }, {
                                duration:2000,
                                delay:menuItemDelay+=250,
                                easing:'easeOutCirc'
                            });
                        }
                        foregroundPortfolio.velocity({
                            opacity:['1','1']
                        }, {
                            duration:1000,
                            easing:'swing',
                            queue:false
                        });
                        foregroundPortfolio.velocity({
                            translateY:['0vh','101vh'],
                            rotateX:[zeroDegrees,'45deg'],
                            scale:['1','1.5'],
                            translateZ:['0px','400px']
                        }, {
                            duration:1000,
                            easing:'easeOutCirc',
                            complete:function() {
                                $(this).addClass(backgroundImageActiveString);
                            }
                        });
                        backgroundPortfolio.addClass(backgroundSkyActiveString).velocity({
                            opacity:'1'
                        }, {
                            duration:1000,
                            easing:'swing',
                            queue:false
                        });
                    }
                });

            },
            contact: function() {

                foregroundContainer.css('opacity','0');
                backgroundContainer.css('opacity','0');
                
                firstName.css('color',firstNameDark);
                lastName.css('color',lessDarkColorContact);

                loadingContainer.velocity({
                    opacity:['0','1']
                }, {
                    duration:500,
                    complete:function() {

                        loadingContainer.detach();
                        menuContainer.velocity({
                            scaleX:['1','0.35']
                        }, {
                            duration:2000,
                            delay:1750,
                            easing:'spring',
                            queue:false
                        });
                        menuContainer.velocity({
                            rotateX:[zeroDegrees,'-45deg'],
                            scaleX:['0.35','1'],
                            translateY:['0vh','10vh'],
                            translateZ:['0px','500px'],
                            opacity:['1','0']
                        }, {
                            duration:3250,
                            easing:'easeOutExpo'
                        });
                        menuItemSelector.css('transformOrigin','right center').velocity({
                            scaleX:['1','0'],
                            opacity:['1','1']
                        }, {
                            duration:2000,
                            easing:'easeOutCirc',
                            delay:1750,
                            queue:false
                        });
                        for (i = 0; i < menuItem.length; i++) {
                            currentItem = menuItem.eq(i);

                            currentItem.velocity({
                                opacity:['1','0'],
                                translateX:['0vh','5vw']
                            }, {
                                duration:2000,
                                delay:menuItemDelay+=250,
                                easing:'easeOutCirc'
                            });
                        }
                        foregroundContact.velocity({
                            opacity:['1','1']
                        }, {
                            duration:1000,
                            easing:'swing',
                            queue:false
                        });
                        foregroundContact.velocity({
                            translateY:['0vh','101vh'],
                            rotateX:[zeroDegrees,'45deg'],
                            scale:['1','1.5'],
                            translateZ:['0px','400px']
                        }, {
                            duration:1000,
                            easing:'easeOutCirc',
                            complete:function() {
                                $(this).addClass(backgroundImageActiveString);
                            }
                        });
                        backgroundContact.addClass(backgroundSkyActiveString).velocity({
                            opacity:'1'
                        }, {
                            duration:1000,
                            easing:'swing',
                            queue:false
                        });
                    }
                });
            }
        },
        content: {
            tiles: {
                bioPic: {
                    about: function() {
                        
                        bioPicContainer.css({
                           backgroundColor:bioBackgroundColorAbout 
                        });
                
                        bioPicContainer.empty().html(
                            '<img class="bio-pic" src="images/me2.jpg">'
                        );
                        bioPic = $('.bio-pic');
                        bioPic.css({
                            width:'350px',
                            height:'350px',
                            top:'0px',
                            left:'0px',
                            transformOrigin:'left',
                            opacity:'0'
                        });
                        bioPic.velocity({
                            opacity:['1','0'],
                            scaleX:['1','0.5']
                        }, {
                            duration:1000,
                            easing:'easeOutCirc',
                            delay:1750,
                            queue:false
                        });
                        bioPicContainer.css('transformOrigin','right bottom').velocity({
                            opacity:['1','1'],
                            scaleX:['1','0'],
                            translateX:['7vw','25vw'],
                            translateZ:['0px','-1000px'],
                            rotateY:[zeroDegrees,'90deg']
                        }, {
                            duration:500,
                            easing:'easeOutCirc',
                            delay:1500,
                            queue:false,
                            complete:function() {
                                $(this).velocity({
                                   translateX:['0vw','7vw'] 
                                }, {
                                    duration:1000,
                                    easing:'easeInOutCirc'
                                });
                            }
                        });
                    },
                    resume: function() {
                        
                        bioPicContainer.css({
                           backgroundColor:bioBackgroundColorResume 
                        });
                
                        bioPicContainer.empty().html(
                            '<img class="bio-pic" src="images/icons/resume-icon-light.png">'
                        );
                        bioPic = $('.bio-pic');
                        bioPic.css({
                            top:'87px',
                            left:'87px',
                            transformOrigin:'left',
                            opacity:'0'
                        });
                        bioPic.velocity({
                            opacity:['1','0'],
                            scaleX:['1','0.5']
                        }, {
                            duration:1000,
                            easing:'easeOutCirc',
                            delay:1750,
                            queue:false
                        });
                        bioPicContainer.css('transformOrigin','right bottom').velocity({
                            opacity:['1','1'],
                            scaleX:['1','0'],
                            translateX:['7vw','25vw'],
                            translateZ:['0px','-1000px'],
                            rotateY:[zeroDegrees,'90deg']
                        }, {
                            duration:500,
                            easing:'easeOutCirc',
                            delay:1500,
                            queue:false,
                            complete:function() {
                                $(this).velocity({
                                   translateX:['0vw','7vw'] 
                                }, {
                                    duration:1000,
                                    easing:'easeInOutCirc'
                                });
                            }
                        });
                    },
                    portfolio: function() {
                        
                        bioPicContainer.css({
                           backgroundColor:bioBackgroundColorPortfolio 
                        });
                
                        bioPicContainer.empty().html(
                            '<img class="bio-pic" src="images/icons/portfolio-icon-light.png">'
                        );
                        bioPic = $('.bio-pic');
                        bioPic.css({
                            top:'87px',
                            left:'87px',
                            transformOrigin:'left',
                            opacity:'0'
                        });
                        bioPic.velocity({
                            opacity:['1','0'],
                            scaleX:['1','0.5']
                        }, {
                            duration:1000,
                            easing:'easeOutCirc',
                            delay:1750,
                            queue:false
                        });
                        bioPicContainer.css('transformOrigin','right bottom').velocity({
                            opacity:['1','1'],
                            scaleX:['1','0'],
                            translateX:['7vw','25vw'],
                            translateZ:['0px','-1000px'],
                            rotateY:[zeroDegrees,'90deg']
                        }, {
                            duration:500,
                            easing:'easeOutCirc',
                            delay:1500,
                            queue:false,
                            complete:function() {
                                $(this).velocity({
                                   translateX:['0vw','7vw'] 
                                }, {
                                    duration:1000,
                                    easing:'easeInOutCirc'
                                });
                            }
                        });
                    },
                    contact: function() {
                        
                        bioPicContainer.css({
                           backgroundColor:bioBackgroundColorContact 
                        });
                
                        bioPicContainer.empty().html(
                            '<img class="bio-pic" src="images/icons/contact-icon-light.png">'
                        );
                        bioPic = $('.bio-pic');
                        bioPic.css({
                            top:'87px',
                            left:'87px',
                            transformOrigin:'left',
                            opacity:'0'
                        });
                        bioPic.velocity({
                            opacity:['1','0'],
                            scaleX:['1','0.5']
                        }, {
                            duration:1000,
                            easing:'easeOutCirc',
                            delay:1750,
                            queue:false
                        });
                        bioPicContainer.css('transformOrigin','right bottom').velocity({
                            opacity:['1','1'],
                            scaleX:['1','0'],
                            translateX:['7vw','25vw'],
                            translateZ:['0px','-1000px'],
                            rotateY:[zeroDegrees,'90deg']
                        }, {
                            duration:500,
                            easing:'easeOutCirc',
                            delay:1500,
                            queue:false,
                            complete:function() {
                                $(this).velocity({
                                   translateX:['0vw','7vw'] 
                                }, {
                                    duration:1000,
                                    easing:'easeInOutCirc'
                                });
                            }
                        });
                    }
                },
                topHeader: {
                    about: function() {
                
                            headerContainer.eq(0).empty().html(
                            '<h1 class="content-header about-header">' +
                            '<span class="header-line">A</span>' +
                            '<span class="header-line">Bit</span>' +
                            '<span class="header-line">About</span>' +
                            '<span class="header-line">Me</span>' +
                            '</h1>');
                            headerLine = $('.header-line');
                            headerLine.css({
                                opacity:'0',
                                color:headerLineColorAbout
                            });
                            headerContainer.css({'transformOrigin':'left center','height':bioPicContainer.height(),'backgroundColor':firstHeaderBackgroundColorAbout }).velocity({
                        opacity:['1','1'],
                        scaleX:['1','0']
                        /*translateX:['7vw','25vw'],*/
                        /*translateZ:['0px','-1000px'],*/
                        /*rotateY:[zeroDegrees,'90deg']*/
                            }, {
                                duration:1250,
                                delay:2250,
                                easing:'easeOutCirc'
                            });
                            headerLine.eq(0).velocity({
                                opacity:['1','1'],
                                translateX:['25px','-100px'],
                                translateY:['20px','20px']
                            }, {
                                duration:2000,
                                easing:'spring',
                                delay:2550
                            });
                            headerLine.eq(1).velocity({
                                opacity:['1','1'],
                                translateX:['25px','-100px'],
                                translateY:['100px','100px']
                            }, {
                                duration:2000,
                                easing:'spring',
                                delay:2650
                            });
                            headerLine.eq(2).velocity({
                                opacity:['1','1'],
                                translateX:['25px','-100px'],
                                translateY:['180px','180px']
                            }, {
                                duration:2000,
                                easing:'spring',
                                delay:2750
                            });
                            headerLine.eq(3).velocity({
                                opacity:['1','1'],
                                translateX:['25px','-100px'],
                                translateY:['260px','260px']
                            }, {
                                duration:2000,
                                easing:'spring',
                                delay:2850
                            });
                    },
                    resume: function() {
                
                            headerContainer.eq(0).empty().html(
                            '<h1 class="content-header about-header">' +
                            '<span class="header-line">It\'s</span>' +
                            '<span class="header-line">What</span>' +
                            '<span class="header-line">I</span>' +
                            '<span class="header-line">Do</span>' +
                            '</h1>');
                            headerLine = $('.header-line');
                            headerLine.css({
                                opacity:'0',
                                color:headerLineColorResume
                            });
                            headerContainer.css({'transformOrigin':'left center','height':bioPicContainer.height(),'backgroundColor':firstHeaderBackgroundColorResume }).velocity({
                        opacity:['1','1'],
                        scaleX:['1','0']
                        /*translateX:['7vw','25vw'],*/
                        /*translateZ:['0px','-1000px'],*/
                        /*rotateY:[zeroDegrees,'90deg']*/
                            }, {
                                duration:1250,
                                delay:2250,
                                easing:'easeOutCirc'
                            });
                            headerLine.eq(0).velocity({
                                opacity:['1','1'],
                                translateX:['25px','-100px'],
                                translateY:['20px','20px']
                            }, {
                                duration:2000,
                                easing:'spring',
                                delay:2550
                            });
                            headerLine.eq(1).velocity({
                                opacity:['1','1'],
                                translateX:['25px','-100px'],
                                translateY:['100px','100px']
                            }, {
                                duration:2000,
                                easing:'spring',
                                delay:2650
                            });
                            headerLine.eq(2).velocity({
                                opacity:['1','1'],
                                translateX:['25px','-100px'],
                                translateY:['180px','180px']
                            }, {
                                duration:2000,
                                easing:'spring',
                                delay:2750
                            });
                            headerLine.eq(3).velocity({
                                opacity:['1','1'],
                                translateX:['25px','-100px'],
                                translateY:['260px','260px']
                            }, {
                                duration:2000,
                                easing:'spring',
                                delay:2850
                            });
                    },
                    portfolio: function() {
                
                            headerContainer.eq(0).empty().html(
                            '<h1 class="content-header about-header">' +
                            '<span class="header-line">Not</span>' +
                            '<span class="header-line">Work,</span>' +
                            '<span class="header-line">Just</span>' +
                            '<span class="header-line">Play</span>' +
                            '</h1>');
                            headerLine = $('.header-line');
                            headerLine.css({
                                opacity:'0',
                                color:headerLineColorPortfolio
                            });
                            headerContainer.css({'transformOrigin':'left center','height':bioPicContainer.height(),'backgroundColor':firstHeaderBackgroundColorPortfolio }).velocity({
                        opacity:['1','1'],
                        scaleX:['1','0']
                        /*translateX:['7vw','25vw'],*/
                        /*translateZ:['0px','-1000px'],*/
                        /*rotateY:[zeroDegrees,'90deg']*/
                            }, {
                                duration:1250,
                                delay:2250,
                                easing:'easeOutCirc'
                            });
                            headerLine.eq(0).velocity({
                                opacity:['1','1'],
                                translateX:['25px','-100px'],
                                translateY:['20px','20px']
                            }, {
                                duration:2000,
                                easing:'spring',
                                delay:2550
                            });
                            headerLine.eq(1).velocity({
                                opacity:['1','1'],
                                translateX:['25px','-100px'],
                                translateY:['100px','100px']
                            }, {
                                duration:2000,
                                easing:'spring',
                                delay:2650
                            });
                            headerLine.eq(2).velocity({
                                opacity:['1','1'],
                                translateX:['25px','-100px'],
                                translateY:['180px','180px']
                            }, {
                                duration:2000,
                                easing:'spring',
                                delay:2750
                            });
                            headerLine.eq(3).velocity({
                                opacity:['1','1'],
                                translateX:['25px','-100px'],
                                translateY:['260px','260px']
                            }, {
                                duration:2000,
                                easing:'spring',
                                delay:2850
                            });
                    },
                    contact: function() {
                
                            headerContainer.eq(0).empty().html(
                            '<h1 class="content-header about-header">' +
                            '<span class="header-line">Let\'s</span>' +
                            '<span class="header-line">Talk</span>' +
                            '<span class="header-line">About</span>' +
                            '<span class="header-line">Code</span>' +
                            '</h1>');
                            headerLine = $('.header-line');
                            headerLine.css({
                                opacity:'0',
                                color:headerLineColorContact
                            });
                            headerContainer.css({'transformOrigin':'left center','height':bioPicContainer.height(),'backgroundColor':firstHeaderBackgroundColorContact }).velocity({
                        opacity:['1','1'],
                        scaleX:['1','0']
                        /*translateX:['7vw','25vw'],*/
                        /*translateZ:['0px','-1000px'],*/
                        /*rotateY:[zeroDegrees,'90deg']*/
                            }, {
                                duration:1250,
                                delay:2250,
                                easing:'easeOutCirc'
                            });
                            headerLine.eq(0).velocity({
                                opacity:['1','1'],
                                translateX:['25px','-100px'],
                                translateY:['20px','20px']
                            }, {
                                duration:2000,
                                easing:'spring',
                                delay:2550
                            });
                            headerLine.eq(1).velocity({
                                opacity:['1','1'],
                                translateX:['25px','-100px'],
                                translateY:['100px','100px']
                            }, {
                                duration:2000,
                                easing:'spring',
                                delay:2650
                            });
                            headerLine.eq(2).velocity({
                                opacity:['1','1'],
                                translateX:['25px','-100px'],
                                translateY:['180px','180px']
                            }, {
                                duration:2000,
                                easing:'spring',
                                delay:2750
                            });
                            headerLine.eq(3).velocity({
                                opacity:['1','1'],
                                translateX:['25px','-100px'],
                                translateY:['260px','260px']
                            }, {
                                duration:2000,
                                easing:'spring',
                                delay:2850
                            });
                    }
                },
                paragraph: {
                    about: function() {
    
                        contentParagraph.eq(0).css('opacity','0');
                
                        contentParagraph.empty().html(
                        '<p>First off, thanks for taking the time to visit my site - It really does mean a lot to me.<br><br>' +
                    
                        'I\'ve been designing the web for a little over five years now. Having always possessed a deep love and appreciation for gorgeous web experiences, I\'ve carefully honed my abilities in an ongoing effort to become the most seasoned and capable front-end developer that I possibly can.<br><br>Creativity has come naturally to me for as long as I can remember, as has my obsession with computers and technology. By around the age of 20, it occurred to me that these two qualities were begging to be utilized in some harmonious fashion. Such an epiphany propelled me into the vast and evergrowing field of web development and design, with a particular focus on UI and UX (User Interface &amp; User Experience). In years past, I have spent time dabbling in various sectors of web creation, building a mastery over the Adobe suite, HTML5, CSS3, and always courting some of the more heavy-handed coding languages that never seemed to click.</p>'
                        );
                        aboutContent.empty().html(
                    '<div class="content-body about-body">' +
                    '<div class="content-paragraph about-paragraph">' +
                    '<h1 class="content-header about-header">Then, JavaScript Clicked.</h1>' +
                    '<p>It was at this very moment that my already burning passion for the web sprouted into a feverish obsession. Seeing the endless array of dynamic animations and interactions that had resided in my head for so many years finally translate into tangible pixels for the first time was frankly, an indescribable rush. All I knew by this point was that something beautiful had begun. Since then I have not gone a single day without coding anywhere from 6 hours to 16 hours. I build sites for the fun of it and create unique and novel JavaScript widgets. I have an insatiable hunger for creating gorgeous art in the form of websites, and weaving experiences that users are very much unprepared for; experiences that will leave them with a profound and lasting impression.<br><br>' +
                    
'This is what drives me. Knowing that there are so many websites floating around in digital space that are literally hemorrhaging potential by neglecting a much-needed respect and commitment to solid web design; sites that provide an otherwise exemplary service or product, but still struggle when it comes to retaining customer interest.<br><br>' +
                    
                    'My philosophy is that by giving the user an experience that is clean, intuitive and just plain fun, you\'ll be remembered. Moreover, you\'ll be remembered POSITIVELY.<br><br>' +
                    
                        'Let\'s rebuild the web.</p>' +
                    '</div>' +
                '</div>'
                        );
                        contentBody = $('.content-body');
                        aboutBody = $('.about-body');
                        contentParagraph = $('.content-paragraph');
                        aboutParagraph = $('.about-paragraph');
                        contentHeader = $('.content-header');
                        aboutHeader = $('.about-header');
                        aboutContent = $('.about-content');
                        aboutParagraph = $('.about-paragraph');
                        
                        contentParagraph.eq(0).css({
                            marginTop:'350px',
                            backgroundColor:firstParagraphBackgroundColorAbout
                        }).find('p').css({
                            color:firstParagraphColorAbout
                        });
                        contentParagraph.eq(1).css({
                            backgroundColor:secondParagraphBackgroundColorAbout
                        }).find('p').css({
                            color:secondParagraphColorAbout
                        });
                        contentParagraph.eq(1).find('h1').css({
                           marginBottom:'50px',
                           color:secondHeaderColorAbout
                        });
                        contentParagraph.css('transformOrigin','left').velocity({
                            opacity:['1','1'],
                            scaleX:['1','0']
                        }, {
                            duration:1000,
                            easing:'easeOutCirc',
                            delay:2400,
                            queue:false,
                            complete:function() {
                                contentParagraph.eq(0).css({
                                   backgroundColor:backgroundTransparent 
                                });
                                contentParagraph.eq(1).css({
                                   backgroundColor:backgroundTransparent 
                                });
                                aboutContentFirst.css({
                                   backgroundColor: firstParagraphBackgroundColorAbout
                                });
                                aboutContent.css({
                                   backgroundColor: secondParagraphBackgroundColorAbout
                                });
                            }
                        });
                        aboutContent.css('transformOrigin','right').velocity({
                            opacity:['1','1'],
                            scaleX:['1','0']
                        }, {
                            duration:1000,
                            easing:'easeOutCirc',
                            delay:2400,
                            queue:false
                        });
                    },
                    resume: function() {
    
                        contentParagraph.eq(0).css('opacity','0').empty().html(
                            '<h1>Employment</h1><br><br>' +

                            '<h3>Senior Web Developer</h3>' +
                            '<h5>IN FOCUS ADVERTISING: ADVERTISING AGENCY</h5>' +
                            '<h6>October 2013 - Present</h6><br>' +

                                '<p>Take full command of all web-based projects relating to both the front-end and back-end as requested by a diverse catalogue of clients representing a colorful spectrum of industries. Routinely deploy everything from landing pages to full-blown E-commerce solutions complete with responsive design and performance parity across all major browsers and OS’s.</p><br><br>' +

                            '<h3>Post Production Artist</h3>' +
                            '<h5>GRAPHIC ORB: Post-Production Company</h5>' +
                            '<h6>April 2013 - July 2013</h6><br>' +

                                '<p>Handle a wide range of assets for film, including resizing thumbnails for Netflix, preparing key art and one-sheets for print, and coding HTML emails with tables.</p><br><br>' +

                            '<h3>Lead Artist/IT Specialist</h3>' +
                            '<h5>WINNOL.COM: INTERNET START-UP</h5>' +
                            '<h6>October 2011 - March 2013</h6><br>' +

                                '<p>In charge of site’s user interface and experience. Design materials for mediums spanning both web and print. Help with PC and Mac-related issues.' 
                        );
                        aboutContent.empty().html(
                '<div class="content-body about-body">' +
                '<div class="content-paragraph about-paragraph">' +
                            '<h1>Skill Set</h1>' +

                            '<h5><strong>Development</strong></h5>' +

                            '<ul>' +
                                '<li>HTML5</li>' +
                                '<li>CSS3</li>' +
                                '<li>JavaScript</li>' +
                                '<li>jQuery</li>' +
                                '<li>AJAX</li>' +
                                '<li>Velocity.js</li>' +
                            '</ul>' +

                            '<h5><strong>Design</strong></h5>' +

                            '<ul>' +
                                '<li>Photoshop</li>' +
                                '<li>Illustrator</li>' +
                                '<li>InDesign</li>' +
                                '<li>After Effects</li>' +
                                '<li>Premiere Pro</li>' +
                                '<li>Flash</li>' +
                            '</ul>' +

                            '<h5><strong>IT</strong></h5>' +

                            '<ul>' +
                                '<li>MySQL</li>' +
                                '<li>VPN</li>' +
                                '<li>SMB Server Deployment</li>' +
                            '</ul>' +
                '</div>' +
            '</div>'
                        );
                        contentBody = $('.content-body');
                        aboutBody = $('.about-body');
                        contentParagraph = $('.content-paragraph');
                        aboutParagraph = $('.about-paragraph');
                        contentHeader = $('.content-header');
                        aboutHeader = $('.about-header');
                        aboutContent = $('.about-content');
                        aboutParagraph = $('.about-paragraph');
                        
                        contentParagraph.eq(0).css({
                            marginTop:'350px',
                            backgroundColor:firstParagraphBackgroundColorResume,
                            padding:'50px'
                        }).find('p').css({
                            color:firstParagraphColorResume
                        });
                        contentParagraph.eq(1).css({
                            backgroundColor:secondParagraphBackgroundColorResume
                        }).find('p').css({
                            color:secondParagraphColorResume
                        });
                        contentParagraph.eq(1).find('li').css({
                            color:secondParagraphColorResume
                        });
                        contentParagraph.eq(1).find('h5').css({
                            color:secondParagraphColorResume
                        });
                        contentParagraph.eq(1).find('h1').css({
                           marginBottom:'50px',
                           color:secondHeaderColorResume
                        });
                        contentParagraph.css('transformOrigin','left').velocity({
                            opacity:['1','1'],
                            scaleX:['1','0']
                        }, {
                            duration:1000,
                            easing:'easeOutCirc',
                            delay:2400,
                            queue:false,
                            complete:function() {
                                contentParagraph.eq(0).css({
                                   backgroundColor:backgroundTransparent 
                                });
                                contentParagraph.eq(1).css({
                                   backgroundColor:backgroundTransparent 
                                });
                                aboutContentFirst.css({
                                   backgroundColor: firstParagraphBackgroundColorResume
                                });
                                aboutContent.css({
                                   backgroundColor: secondParagraphBackgroundColorResume
                                });
                            }
                        });
                        aboutContent.css('transformOrigin','right').velocity({
                            opacity:['1','1'],
                            scaleX:['1','0']
                        }, {
                            duration:1000,
                            easing:'easeOutCirc',
                            delay:2400,
                            queue:false
                        });
                    },
                    portfolio: function() {
                        
                        aboutContent.css('transformOrigin','right').velocity({
                            opacity:['1','1'],
                            scaleX:['1','0']
                        }, {
                            duration:1000,
                            easing:'easeOutCirc',
                            delay:2400,
                            queue:false
                        });
                        
                        portfolioCategoryAnimateIn();
                        
                        portfolioCategory.detach().appendTo(contentParagraph.eq(0));
                    
                        portfolioCategoryTextVerticalAlign();
                
                        contentParagraph.eq(0).css({
                            opacity:'0',
                            padding:'50px 0px',
                            minHeight:$(window).height() - 565,
                            marginTop:'350px',
                            backgroundColor:firstParagraphBackgroundColorPortfolio,
                            transformOrigin:'left'
                        }).velocity({
                            opacity:['1','1'],
                            scaleX:['1','0']
                        }, {
                            duration:1000,
                            easing:'easeOutCirc',
                            delay:2400,
                            queue:false,
                            complete:function() {
                                contentParagraph.eq(0).css({
                                   backgroundColor:backgroundTransparent 
                                });
                                contentParagraph.eq(1).css({
                                   backgroundColor:backgroundTransparent 
                                });
                                aboutContentFirst.css({
                                   backgroundColor: firstParagraphBackgroundColorPortfolio
                                });
                                aboutContent.css({
                                   backgroundColor: secondParagraphBackgroundColorPortfolio
                                });
                            }
                        }).find('p').css({
                            color:firstParagraphColorPortfolio
                        });
                        
                        contentParagraph.eq(1).css({
                            padding:'0px'
                        });
                    },
                    contact: function() {
                        
                        aboutContent.css('transformOrigin','right').velocity({
                            opacity:['1','1'],
                            scaleX:['1','0']
                        }, {
                            duration:1000,
                            easing:'easeOutCirc',
                            delay:2400,
                            queue:false
                        });
                        
                        /*portfolioCategoryAnimateIn();*/
                        
                        contentBodyInner.appendTo(contentParagraph.eq(0));
                    
                        /*portfolioCategoryTextVerticalAlign();*/
                
                        contentParagraph.eq(0).css({
                            opacity:'0',
                            padding:'50px',
                            minHeight:$(window).height() - 565,
                            marginTop:'350px',
                            backgroundColor:firstParagraphBackgroundColorContact,
                            transformOrigin:'left'
                        }).velocity({
                            opacity:['1','1'],
                            scaleX:['1','0']
                        }, {
                            duration:1000,
                            easing:'easeOutCirc',
                            delay:2400,
                            queue:false,
                            complete:function() {
                                contentParagraph.eq(0).css({
                                   backgroundColor:backgroundTransparent 
                                });
                                contentParagraph.eq(1).css({
                                   backgroundColor:backgroundTransparent 
                                });
                                aboutContentFirst.css({
                                   backgroundColor: firstParagraphBackgroundColorContact
                                });
                                aboutContent.css({
                                   backgroundColor: secondParagraphBackgroundColorContact
                                });
                            }
                        }).find('p').css({
                            color:firstParagraphColorContact
                        });
                        
                        contentParagraph.eq(1).css({
                            padding:'0px'
                        });
                    }
                }
            }
        }
    },
    logo: function() {
        firstName.velocity({
            translateX:['0px',logo.width() + 'px'],
            opacity:['1','1']
        }, {
            duration:1000,
            delay:2400,
            easing:'easeOutCirc'
        });
        lastName.velocity({
            translateX:['0px',logo.width() + 'px'],
            opacity:['1','1']
        }, {
            duration:1000,
            delay:2500,
            easing:'easeOutCirc'
        });
    },
    menu: {
        selector: {
            about: function() {
                menuItemSelector.addClass(onAbout).removeClass(onResume).removeClass(onPortfolio).removeClass(onContact).velocity({
                    translateX:'0px',
                    backgroundColorRed:0,
                    backgroundColorGreen:0,
                    backgroundColorBlue:0,
                    backgroundColorAlpha:1,
                    width:menuAboutInnerWidth + 'px'
                }, {
                    duration:menuItemSelectorDuration,
                    ease:menuItemSelectorEase,
                    queue:false
                });
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
                pageIndex = 0;
            },
            resume: function() {
                menuItemSelector.removeClass(onAbout).addClass(onResume).removeClass(onPortfolio).removeClass(onContact).velocity({
                    translateX:menuAboutInnerWidth + 'px',
                    backgroundColorRed:0,
                    backgroundColorGreen:0,
                    backgroundColorBlue:0,
                    backgroundColorAlpha:1,
                    width:menuResumeInnerWidth + 'px'
                }, {
                    duration:menuItemSelectorDuration,
                    ease:menuItemSelectorEase,
                    queue:false
                });
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
                pageIndex = 1;
            },
            portfolio: function() {
                menuItemSelector.removeClass(onAbout).removeClass(onResume).addClass(onPortfolio).removeClass(onContact).velocity({
                    translateX:(menuAboutInnerWidth + menuResumeInnerWidth) + 'px',
                    backgroundColorRed:0,
                    backgroundColorGreen:0,
                    backgroundColorBlue:0,
                    backgroundColorAlpha:1,
                    width:menuPortfolioInnerWidth + 'px'
                }, {
                    duration:menuItemSelectorDuration,
                    ease:menuItemSelectorEase,
                    queue:false
                });
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
                pageIndex = 2;
            },
            contact: function() {
                menuItemSelector.removeClass(onAbout).removeClass(onResume).removeClass(onPortfolio).addClass(onContact).velocity({
                    translateX:(menuAboutInnerWidth + menuResumeInnerWidth + menuPortfolioInnerWidth) + 'px',
                    backgroundColorRed:0,
                    backgroundColorGreen:0,
                    backgroundColorBlue:0,
                    backgroundColorAlpha:1,
                    width:menuContactInnerWidth + 'px'
                }, {
                    duration:menuItemSelectorDuration,
                    ease:menuItemSelectorEase,
                    queue:false
                });
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
                pageIndex = 3;
            }
        }
    }
}

var transitions = {
    toPage: {
        about: function() {
                
            firstName.velocity({
               color:firstNameLight 
            }, {
                duration:500,
                easing:'swing',
                queue:false
            });
            lastName.velocity({
               color:darkColorAbout 
            }, {
                duration:500,
                easing:'swing',
                queue:false
            });
            
            foregroundAbout.removeClass(backgroundImageInactiveString).addClass(backgroundImageActiveString).velocity({
                translateY:['0vh','100vh'],
                opacity:['1','1']
            }, {
                duration:1000,
                easing:'easeOutCirc',
                queue:false
            }).siblings(backgroundImageActiveSiblingsString).removeClass(backgroundImageActiveString).addClass(backgroundImageInactiveString).velocity({
                translateY:'300vh',
                opacity:['0','1']
            }, {
                duration:1000,
                easing:'easeInCirc',
                queue:false
            });
            backgroundAbout.removeClass(backgroundSkyInactiveString).addClass(backgroundSkyActiveString).velocity({
                opacity:'1'
            }, {
                duration:1000,
                easing:'swing',
                queue:false
            }).siblings(backgroundSkyActiveSiblingsString).removeClass(backgroundSkyActiveString).addClass(backgroundSkyInactiveString).velocity({
                opacity:'0'
            }, {
                duration:1000,
                easing:'swing',
                queue:false
            });
            backgroundColor.velocity({
               backgroundColorRed:backgroundColorAboutRed,
               backgroundColorGreen:backgroundColorAboutGreen,
               backgroundColorBlue:backgroundColorAboutBlue
            }, {
                duration:500,
                easing:'swing',
                queue:false
            });
            
            //SELECTOR
            menuItemSelector.addClass(onAbout).removeClass(onResume).removeClass(onPortfolio).removeClass(onContact).velocity({
                translateX:'0px',
                backgroundColorRed:0,
                backgroundColorGreen:0,
                backgroundColorBlue:0,
                backgroundColorAlpha:1,
                width:menuAboutInnerWidth + 'px'
            }, {
                duration:menuItemSelectorDuration,
                ease:menuItemSelectorEase,
                queue:false
            });
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
            pageIndex = 0;
            window.location.hash = '#/about';
        },
        resume: function() {
                
            firstName.velocity({
               color:firstNameLight 
            }, {
                duration:500,
                easing:'swing',
                queue:false
            });
            lastName.velocity({
               color:lightColorResume 
            }, {
                duration:500,
                easing:'swing',
                queue:false
            });
            
            foregroundResume.removeClass(backgroundImageInactiveString).addClass(backgroundImageActiveString).velocity({
                translateY:['0vh','100vh'],
                opacity:['1','1']
            }, {
                duration:1000,
                easing:'easeOutCirc',
                queue:false
            }).siblings(backgroundImageActiveSiblingsString).removeClass(backgroundImageActiveString).addClass(backgroundImageInactiveString).velocity({
                translateY:'300vh',
                opacity:['0','1']
            }, {
                duration:1000,
                easing:'easeInCirc',
                queue:false
            });
            backgroundResume.removeClass(backgroundSkyInactiveString).addClass(backgroundSkyActiveString).velocity({
                opacity:'1'
            }, {
                duration:1000,
                easing:'swing',
                queue:false
            }).siblings(backgroundSkyActiveSiblingsString).removeClass(backgroundSkyActiveString).addClass(backgroundSkyInactiveString).velocity({
                opacity:'0'
            }, {
                duration:1000,
                easing:'swing',
                queue:false
            });
            backgroundColor.velocity({
               backgroundColorRed:backgroundColorResumeRed,
               backgroundColorGreen:backgroundColorResumeGreen,
               backgroundColorBlue:backgroundColorResumeBlue
            }, {
                duration:500,
                easing:'swing',
                queue:false
            });
            
            //SELECTOR
            menuItemSelector.removeClass(onAbout).addClass(onResume).removeClass(onPortfolio).removeClass(onContact).velocity({
                translateX:menuAboutInnerWidth + 'px',
                backgroundColorRed:0,
                backgroundColorGreen:0,
                backgroundColorBlue:0,
                backgroundColorAlpha:1,
                width:menuResumeInnerWidth + 'px'
            }, {
                duration:menuItemSelectorDuration,
                ease:menuItemSelectorEase,
                queue:false
            });
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
            pageIndex = 1;
            window.location.hash = '#/resume';
        },
        portfolio: function() {
                
            firstName.velocity({
               color:firstNameLight 
            }, {
                duration:500,
                easing:'swing',
                queue:false
            });
            lastName.velocity({
               color:lightColorPortfolio 
            }, {
                duration:500,
                easing:'swing',
                queue:false
            });
            
            foregroundPortfolio.removeClass(backgroundImageInactiveString).addClass(backgroundImageActiveString).velocity({
                translateY:['0vh','100vh'],
                opacity:['1','1']
            }, {
                duration:1000,
                easing:'easeOutCirc',
                queue:false
            }).siblings(backgroundImageActiveSiblingsString).removeClass(backgroundImageActiveString).addClass(backgroundImageInactiveString).velocity({
                translateY:'300vh',
                opacity:['0','1']
            }, {
                duration:1000,
                easing:'easeInCirc',
                queue:false
            });
            backgroundPortfolio.removeClass(backgroundSkyInactiveString).addClass(backgroundSkyActiveString).velocity({
                opacity:'1'
            }, {
                duration:1000,
                easing:'swing',
                queue:false
            }).siblings(backgroundSkyActiveSiblingsString).removeClass(backgroundSkyActiveString).addClass(backgroundSkyInactiveString).velocity({
                opacity:'0'
            }, {
                duration:1000,
                easing:'swing',
                queue:false
            });
            backgroundColor.velocity({
               backgroundColorRed:backgroundColorPortfolioRed,
               backgroundColorGreen:backgroundColorPortfolioGreen,
               backgroundColorBlue:backgroundColorPortfolioBlue
            }, {
                duration:500,
                easing:'swing',
                queue:false
            });
            
            //SELECTOR
            menuItemSelector.removeClass(onAbout).removeClass(onResume).addClass(onPortfolio).removeClass(onContact).velocity({
                translateX:(menuAboutInnerWidth + menuResumeInnerWidth) + 'px',
                backgroundColorRed:0,
                backgroundColorGreen:0,
                backgroundColorBlue:0,
                backgroundColorAlpha:1,
                width:menuPortfolioInnerWidth + 'px'
            }, {
                duration:menuItemSelectorDuration,
                ease:menuItemSelectorEase,
                queue:false
            });
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
            pageIndex = 2;
            window.location.hash = '#/portfolio';
        },
        contact: function() {
                
            firstName.velocity({
               color:firstNameDark 
            }, {
                duration:500,
                easing:'swing',
                queue:false
            });
            lastName.velocity({
               color:lessDarkColorContact 
            }, {
                duration:500,
                easing:'swing',
                queue:false
            });
            
            foregroundContact.removeClass(backgroundImageInactiveString).addClass(backgroundImageActiveString).velocity({
                translateY:['0vh','100vh'],
                opacity:['1','1']
            }, {
                duration:1000,
                easing:'easeOutCirc',
                queue:false
            }).siblings(backgroundImageActiveSiblingsString).removeClass(backgroundImageActiveString).addClass(backgroundImageInactiveString).velocity({
                translateY:'300vh',
                opacity:['0','1']
            }, {
                duration:1000,
                easing:'easeInCirc',
                queue:false
            });
            backgroundContact.removeClass(backgroundSkyInactiveString).addClass(backgroundSkyActiveString).velocity({
                opacity:'1'
            }, {
                duration:1000,
                easing:'swing',
                queue:false
            }).siblings(backgroundSkyActiveSiblingsString).removeClass(backgroundSkyActiveString).addClass(backgroundSkyInactiveString).velocity({
                opacity:'0'
            }, {
                duration:1000,
                easing:'swing',
                queue:false
            });
            backgroundColor.velocity({
               backgroundColorRed:backgroundColorContactRed,
               backgroundColorGreen:backgroundColorContactGreen,
               backgroundColorBlue:backgroundColorContactBlue
            }, {
                duration:500,
                easing:'swing',
                queue:false
            });
            
            //SELECTOR
            menuItemSelector.removeClass(onAbout).removeClass(onResume).removeClass(onPortfolio).addClass(onContact).velocity({
                translateX:(menuAboutInnerWidth + menuResumeInnerWidth + menuPortfolioInnerWidth) + 'px',
                backgroundColorRed:0,
                backgroundColorGreen:0,
                backgroundColorBlue:0,
                backgroundColorAlpha:1,
                width:menuContactInnerWidth + 'px'
            }, {
                duration:menuItemSelectorDuration,
                ease:menuItemSelectorEase,
                queue:false
            });
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
            pageIndex = 3;
            window.location.hash = '#/contact';
        }
    }, 
    content: {
        tiles: {
            bioPic: {
                about: function() {
                        
                    bioPicContainer.velocity({
                       backgroundColor:bioBackgroundColorAbout 
                    }, {
                        duration:500,
                        easing:'swing'
                    });
                    
                    bioPic.stop(1,1).velocity({
                        opacity:'0'
                    }, {
                        duration:500,
                        easing:'swing',
                        complete:function() {
                            bioPicContainer.empty().html(
                            '<img class="bio-pic" src="images/me2.jpg">'
                            );
                            bioPic = $('.bio-pic');
                            bioPic.css({
                                width:'350px',
                                height:'350px',
                                top:'0px',
                                left:'0px',
                                transformOrigin:'left',
                                opacity:'0'
                            }).velocity({
                                opacity:['1', 'swing', '0'],
                                scaleX:['1', '0.5']
                            }, {
                                duration:500,
                                easing:'easeOutCirc'
                            });
                        }
                    });
                },
                resume: function() {
                        
                    bioPicContainer.velocity({
                       backgroundColor:bioBackgroundColorResume 
                    }, {
                        duration:500,
                        easing:'swing'
                    });
                    
                    bioPic.stop(1,1).velocity({
                        opacity:'0'
                    }, {
                        duration:500,
                        easing:'swing',
                        complete:function() {
                            bioPicContainer.empty().html(
                            '<img class="bio-pic" src="images/icons/resume-icon-light.png">'
                            );
                            bioPic = $('.bio-pic');
                            bioPic.css('opacity','0').velocity({
                                opacity:['1', 'swing', '0'],
                                scaleX:['1', '0.5']
                            }, {
                                duration:500,
                                easing:'easeOutCirc'
                            });
                        }
                    });
                },
                portfolio: function() {
                        
                    bioPicContainer.velocity({
                       backgroundColor:bioBackgroundColorPortfolio 
                    }, {
                        duration:500,
                        easing:'swing'
                    });
                    
                    bioPic.stop(1,1).velocity({
                        opacity:'0'
                    }, {
                        duration:500,
                        easing:'swing',
                        complete:function() {
                            bioPicContainer.empty().html(
                            '<img class="bio-pic" src="images/icons/portfolio-icon-light.png">'
                            );
                            bioPic = $('.bio-pic');
                            bioPic.css('opacity','0').velocity({
                                opacity:['1', 'swing', '0'],
                                scaleX:['1', '0.5']
                            }, {
                                duration:500,
                                easing:'easeOutCirc'
                            });
                        }
                    });
                },
                contact: function() {
                        
                    bioPicContainer.velocity({
                       backgroundColor:bioBackgroundColorContact 
                    }, {
                        duration:500,
                        easing:'swing'
                    });
                    
                    bioPic.stop(1,1).velocity({
                        opacity:'0'
                    }, {
                        duration:500,
                        easing:'swing',
                        complete:function() {
                            bioPicContainer.empty().html(
                            '<img class="bio-pic" src="images/icons/contact-icon-light.png">'
                            );
                            bioPic = $('.bio-pic');
                            bioPic.css('opacity','0').velocity({
                                opacity:['1', 'swing', '0'],
                                scaleX:['1', '0.5']
                            }, {
                                duration:500,
                                easing:'easeOutCirc'
                            });
                        }
                    });
                }
            },
            topHeader: {
                about: function() {
                    
                        headerContainer.eq(0).velocity({
                            backgroundColor:firstHeaderBackgroundColorAbout
                        }, {
                            duration:500,
                            easing:'swing',
                            queue:false
                        });
                        
                        headerLine.stop(1,1).velocity({
                            opacity:'0'
                        }, {
                            duration:500,
                            easing:'swing',
                            complete:function() {
                                headerContainer.eq(0).empty().html(
                                '<h1 class="content-header about-header">' +
                                '<span class="header-line">A</span>' +
                                '<span class="header-line">Bit</span>' +
                                '<span class="header-line">About</span>' +
                                '<span class="header-line">Me</span>' +
                                '</h1>');
                                headerLine = $('.header-line');
                                headerLine.css({
                                    opacity:'0',
                                    color:headerLineColorAbout
                                });
                                headerLine.eq(0).velocity({
                                    opacity:['1','1'],
                                    translateX:['25px','-100px'],
                                    translateY:['20px','20px']
                                }, {
                                    duration:2000,
                                    easing:'spring'
                                });
                                headerLine.eq(1).velocity({
                                    opacity:['1','1'],
                                    translateX:['25px','-100px'],
                                    translateY:['100px','100px']
                                }, {
                                    duration:2000,
                                    easing:'spring',
                                    delay:100
                                });
                                headerLine.eq(2).velocity({
                                    opacity:['1','1'],
                                    translateX:['25px','-100px'],
                                    translateY:['180px','180px']
                                }, {
                                    duration:2000,
                                    easing:'spring',
                                    delay:200
                                });
                                headerLine.eq(3).velocity({
                                    opacity:['1','1'],
                                    translateX:['25px','-100px'],
                                    translateY:['260px','260px']
                                }, {
                                    duration:2000,
                                    easing:'spring',
                                    delay:300
                                });
                            }
                        });
                },
                resume: function() {
                    
                        headerContainer.eq(0).velocity({
                            backgroundColor:firstHeaderBackgroundColorResume
                        }, {
                            duration:500,
                            easing:'swing',
                            queue:false
                        });
                        
                        headerLine.stop(1,1).velocity({
                            opacity:'0'
                        }, {
                            duration:500,
                            easing:'swing',
                            complete:function() {
                                headerContainer.eq(0).empty().html(
                                '<h1 class="content-header about-header">' +
                                '<span class="header-line">It\'s</span>' +
                                '<span class="header-line">What</span>' +
                                '<span class="header-line">I</span>' +
                                '<span class="header-line">Do</span>' +
                                '</h1>');
                                headerLine = $('.header-line');
                                headerLine.css({
                                    opacity:'0',
                                    color:headerLineColorResume
                                });
                                headerLine.eq(0).velocity({
                                    opacity:['1','1'],
                                    translateX:['25px','-100px'],
                                    translateY:['20px','20px']
                                }, {
                                    duration:2000,
                                    easing:'spring'
                                });
                                headerLine.eq(1).velocity({
                                    opacity:['1','1'],
                                    translateX:['25px','-100px'],
                                    translateY:['100px','100px']
                                }, {
                                    duration:2000,
                                    easing:'spring',
                                    delay:100
                                });
                                headerLine.eq(2).velocity({
                                    opacity:['1','1'],
                                    translateX:['25px','-100px'],
                                    translateY:['180px','180px']
                                }, {
                                    duration:2000,
                                    easing:'spring',
                                    delay:200
                                });
                                headerLine.eq(3).velocity({
                                    opacity:['1','1'],
                                    translateX:['25px','-100px'],
                                    translateY:['260px','260px']
                                }, {
                                    duration:2000,
                                    easing:'spring',
                                    delay:300
                                });
                            }
                        });
                },
                portfolio: function() {
                    
                        headerContainer.eq(0).velocity({
                            backgroundColor:firstHeaderBackgroundColorPortfolio
                        }, {
                            duration:500,
                            easing:'swing',
                            queue:false
                        });
                        
                        headerLine.stop(1,1).velocity({
                            opacity:'0'
                        }, {
                            duration:500,
                            easing:'swing',
                            complete:function() {
                                headerContainer.eq(0).empty().html(
                                '<h1 class="content-header about-header">' +
                                '<span class="header-line">Not</span>' +
                                '<span class="header-line">Work,</span>' +
                                '<span class="header-line">Just</span>' +
                                '<span class="header-line">Play</span>' +
                                '</h1>');
                                headerLine = $('.header-line');
                                headerLine.css({
                                    opacity:'0',
                                    color:headerLineColorPortfolio
                                });
                                headerLine.eq(0).velocity({
                                    opacity:['1','1'],
                                    translateX:['25px','-100px'],
                                    translateY:['20px','20px']
                                }, {
                                    duration:2000,
                                    easing:'spring'
                                });
                                headerLine.eq(1).velocity({
                                    opacity:['1','1'],
                                    translateX:['25px','-100px'],
                                    translateY:['100px','100px']
                                }, {
                                    duration:2000,
                                    easing:'spring',
                                    delay:100
                                });
                                headerLine.eq(2).velocity({
                                    opacity:['1','1'],
                                    translateX:['25px','-100px'],
                                    translateY:['180px','180px']
                                }, {
                                    duration:2000,
                                    easing:'spring',
                                    delay:200
                                });
                                headerLine.eq(3).velocity({
                                    opacity:['1','1'],
                                    translateX:['25px','-100px'],
                                    translateY:['260px','260px']
                                }, {
                                    duration:2000,
                                    easing:'spring',
                                    delay:300
                                });
                            }
                        });
                },
                contact: function() {
                    
                        headerContainer.eq(0).velocity({
                            backgroundColor:firstHeaderBackgroundColorContact
                        }, {
                            duration:500,
                            easing:'swing',
                            queue:false
                        });
                        
                        headerLine.stop(1,1).velocity({
                            opacity:'0'
                        }, {
                            duration:500,
                            easing:'swing',
                            complete:function() {
                                headerContainer.eq(0).empty().html(
                                '<h1 class="content-header about-header">' +
                                '<span class="header-line">Let\'s</span>' +
                                '<span class="header-line">Talk</span>' +
                                '<span class="header-line">About</span>' +
                                '<span class="header-line">Code</span>' +
                                '</h1>');
                                headerLine = $('.header-line');
                                headerLine.css({
                                    opacity:'0',
                                    color:headerLineColorContact
                                });
                                headerLine.eq(0).velocity({
                                    opacity:['1','1'],
                                    translateX:['25px','-100px'],
                                    translateY:['20px','20px']
                                }, {
                                    duration:2000,
                                    easing:'spring'
                                });
                                headerLine.eq(1).velocity({
                                    opacity:['1','1'],
                                    translateX:['25px','-100px'],
                                    translateY:['100px','100px']
                                }, {
                                    duration:2000,
                                    easing:'spring',
                                    delay:100
                                });
                                headerLine.eq(2).velocity({
                                    opacity:['1','1'],
                                    translateX:['25px','-100px'],
                                    translateY:['180px','180px']
                                }, {
                                    duration:2000,
                                    easing:'spring',
                                    delay:200
                                });
                                headerLine.eq(3).velocity({
                                    opacity:['1','1'],
                                    translateX:['25px','-100px'],
                                    translateY:['260px','260px']
                                }, {
                                    duration:2000,
                                    easing:'spring',
                                    delay:300
                                });
                            }
                        });
                }
            },
            paragraph: {
                about: function() {
                    aboutContentFirst.velocity({
                       backgroundColor: firstParagraphBackgroundColorAbout
                    }, {
                        duration:500,
                        easing:'swing',
                        queue:false
                    });
                    aboutContent.velocity({
                       backgroundColor: firstParagraphBackgroundColorAbout
                    }, {
                        duration:500,
                        easing:'swing',
                        queue:false
                    });
                    contentParagraph.eq(0).stop(1,1).velocity({
                        opacity:'0'
                    }, {
                        duration:500,
                        easing:'swing',
                        complete:function() {
                            contentBodyInner.detach();
                            portfolioCategory.detach();
                            portfolioCategory.stop(1,1).css('opacity','0');
                            contentParagraph.eq(0).empty().html(
                            '<p>First off, thanks for taking the time to visit my site - It really does mean a lot to me.<br><br>' +

                            'I\'ve been designing the web for a little over five years now. Having always possessed a deep love and appreciation for gorgeous web experiences, I\'ve carefully honed my abilities in an ongoing effort to become the most seasoned and capable front-end developer that I possibly can.<br><br>Creativity has come naturally to me for as long as I can remember, as has my obsession with computers and technology. By around the age of 20, it occurred to me that these two qualities were begging to be utilized in some harmonious fashion. Such an epiphany propelled me into the vast and evergrowing field of web development and design, with a particular focus on UI and UX (User Interface &amp; User Experience). In years past, I have spent time dabbling in various sectors of web creation, building a mastery over the Adobe suite, HTML5, CSS3, and always courting some of the more heavy-handed coding languages that never seemed to click.</p>'
                            );
                            contentParagraph.eq(0).css({'marginTop':'350px','opacity':'0','transformOrigin':'right',backgroundColor:backgroundTransparent,minHeight:'0px',padding:'50px'}).velocity(
                                'transition.slideRightBigIn', {
                                duration:1000
                            });
                            aboutContent.empty().html(
                                '<div class="content-body about-body">' +
                                    '<div class="content-paragraph about-paragraph">' +
                                        '<h1 class="content-header about-header">Then, JavaScript Clicked.</h1>' +
                                        '<p>It was at this very moment that my already burning passion for the web sprouted into a feverish obsession. Seeing the endless array of dynamic animations and interactions that had resided in my head for so many years finally translate into tangible pixels for the first time was frankly, an indescribable rush. All I knew by this point was that something beautiful had begun. Since then I have not gone a single day without coding anywhere from 6 hours to 16 hours. I build sites for the fun of it and create unique and novel JavaScript widgets. I have an insatiable hunger for creating gorgeous art in the form of websites, and weaving experiences that users are very much unprepared for; experiences that will leave them with a profound and lasting impression.<br><br>' +

                                        'This is what drives me. Knowing that there are so many websites floating around in digital space that are literally hemorrhaging potential by neglecting a much-needed respect and commitment to solid web design; sites that provide an otherwise exemplary service or product, but still struggle when it comes to retaining customer interest.<br><br>' +

                                        'My philosophy is that by giving the user an experience that is clean, intuitive and just plain fun, you\'ll be remembered. Moreover, you\'ll be remembered POSITIVELY.<br><br>' +

                                        'Let\'s rebuild the web.</p>' +
                                    '</div>' +
                                '</div>'
                                );
                            contentBody = $('.content-body');
                            aboutBody = $('.about-body');
                            contentParagraph = $('.content-paragraph');
                            aboutParagraph = $('.about-paragraph');
                            contentHeader = $('.content-header');
                            aboutHeader = $('.about-header');
                            aboutContent = $('.about-content');
                            aboutParagraph = $('.about-paragraph');

                            contentParagraph.eq(0).find('p').stop(1,1).css({
                                color:firstParagraphColorAbout
                            });

                            contentParagraph.eq(1).find('p').stop(1,1).css({
                                color:secondParagraphColorAbout
                            });
                            
                            aboutContent.velocity({
                               backgroundColor: secondParagraphBackgroundColorAbout
                            }, {
                                duration:500,
                                easing:'swing',
                                queue:false
                            });

                            contentParagraph.eq(1).css({'backgroundColor':
                                backgroundTransparent,'opacity':'0','transformOrigin':'left',padding:'50px'}).velocity(
                            'transition.slideLeftBigIn', {
                            duration:1000
                        }).find('h1').stop(1,1).css({
                               marginBottom:'50px',
                               color:secondHeaderColorAbout
                            });
                        }
                    });
                    contentParagraph.eq(1).stop(1,1).velocity({
                        opacity:'0'
                    }, {
                        duration:500,
                        easing:'swing'
                    });
                },
                resume: function() {
                    aboutContentFirst.velocity({
                       backgroundColor: firstParagraphBackgroundColorResume
                    }, {
                        duration:500,
                        easing:'swing',
                        queue:false
                    });
                    aboutContent.velocity({
                       backgroundColor: firstParagraphBackgroundColorResume
                    }, {
                        duration:500,
                        easing:'swing',
                        queue:false
                    });
                    contentParagraph.eq(0).stop(1,1).velocity({
                        opacity:'0'
                    }, {
                        duration:500,
                        easing:'swing',
                        complete:function() {
                            contentBodyInner.detach();
                            portfolioCategory.detach();
                            portfolioCategory.stop(1,1).css('opacity','0');
                            contentParagraph.eq(0).empty().html(
                            '<h1>Employment</h1><br><br>' +

                            '<h3>Senior Web Developer</h3>' +
                            '<h5>IN FOCUS ADVERTISING: ADVERTISING AGENCY</h5>' +
                            '<h6>October 2013 - Present</h6><br>' +

                                '<p>Take full command of all web-based projects relating to both the front-end and back-end as requested by a diverse catalogue of clients representing a colorful spectrum of industries. Routinely deploy everything from landing pages to full-blown E-commerce solutions complete with responsive design and performance parity across all major browsers and OS’s.</p><br><br>' +

                            '<h3>Post Production Artist</h3>' +
                            '<h5>GRAPHIC ORB: Post-Production Company</h5>' +
                            '<h6>April 2013 - July 2013</h6><br>' +

                                '<p>Handle a wide range of assets for film, including resizing thumbnails for Netflix, preparing key art and one-sheets for print, and coding HTML emails with tables.</p><br><br>' +

                            '<h3>Lead Artist/IT Specialist</h3>' +
                            '<h5>WINNOL.COM: INTERNET START-UP</h5>' +
                            '<h6>October 2011 - March 2013</h6><br>' +

                                '<p>In charge of site’s user interface and experience. Design materials for mediums spanning both web and print. Help with PC and Mac-related issues.' 
                            );
                            contentParagraph.eq(0).css({'marginTop':'350px','opacity':'0','transformOrigin':'right',backgroundColor:backgroundTransparent,minHeight:'0px',padding:'50px'}).velocity(
                                'transition.slideRightBigIn', {
                                duration:1000
                            });
                            aboutContent.empty().html(
                '<div class="content-body about-body">' +
                '<div class="content-paragraph about-paragraph">' +
                            '<h1>Skill Set</h1>' +

                            '<h5><strong>Development</strong></h5>' +

                            '<ul>' +
                                '<li>HTML5</li>' +
                                '<li>CSS3</li>' +
                                '<li>JavaScript</li>' +
                                '<li>jQuery</li>' +
                                '<li>AJAX</li>' +
                                '<li>Velocity.js</li>' +
                            '</ul>' +

                            '<h5><strong>Design</strong></h5>' +

                            '<ul>' +
                                '<li>Photoshop</li>' +
                                '<li>Illustrator</li>' +
                                '<li>InDesign</li>' +
                                '<li>After Effects</li>' +
                                '<li>Premiere Pro</li>' +
                                '<li>Flash</li>' +
                            '</ul>' +

                            '<h5><strong>IT</strong></h5>' +

                            '<ul>' +
                                '<li>MySQL</li>' +
                                '<li>VPN</li>' +
                                '<li>SMB Server Deployment</li>' +
                            '</ul>' +
                '</div>' +
            '</div>'
                                );
                            contentBody = $('.content-body');
                            aboutBody = $('.about-body');
                            contentParagraph = $('.content-paragraph');
                            aboutParagraph = $('.about-paragraph');
                            contentHeader = $('.content-header');
                            aboutHeader = $('.about-header');
                            aboutContent = $('.about-content');
                            aboutParagraph = $('.about-paragraph');
                            
                            aboutContent.velocity({
                               backgroundColor: secondParagraphBackgroundColorResume
                            }, {
                                duration:500,
                                easing:'swing',
                                queue:false
                            });

                            contentParagraph.eq(0).find('p').stop(1,1).css({
                                color:firstParagraphColorResume
                            });

                            contentParagraph.eq(1).find('p').stop(1,1).css({
                                color:secondParagraphColorResume
                            });

                            contentParagraph.eq(1).find('li').css({
                                color:secondParagraphColorResume
                            });

                            contentParagraph.eq(1).find('h5').css({
                                color:secondParagraphColorResume
                            });

                            contentParagraph.eq(1).css({'backgroundColor':
                                backgroundTransparent,'opacity':'0','transformOrigin':'left',padding:'50px'}).velocity(
                            'transition.slideLeftBigIn', {
                            duration:1000
                        }).find('h1').stop(1,1).css({
                               marginBottom:'50px',
                               color:secondHeaderColorResume
                            });
                        }
                    });
                    contentParagraph.eq(1).stop(1,1).velocity({
                        opacity:'0'
                    }, {
                        duration:500,
                        easing:'swing'
                    });
                },
                portfolio: function() {
                    
                    catDelay = catDelayInitial;
                    
                    portfolioCategory.stop(1,1).css('opacity','0');
                    
                    aboutContentFirst.velocity({
                       backgroundColor: firstParagraphBackgroundColorPortfolio
                    }, {
                        duration:500,
                        easing:'swing',
                        queue:false
                    });
                    aboutContent.velocity({
                       backgroundColor: firstParagraphBackgroundColorPortfolio
                    }, {
                        duration:500,
                        easing:'swing',
                        queue:false
                    });
                    contentParagraph.eq(0).stop(1,1).velocity({
                        opacity:'0'
                    }, {
                        duration:500,
                        easing:'swing',
                        complete:function() {
                
                            contentBodyInner.detach();
                            contentParagraph.eq(0).empty();
                            portfolioCategory.appendTo(contentParagraph.eq(0));
                            portfolioCategoryTextVerticalAlign();
                            portfolioCategoryAnimateIn();
                            aboutContent.empty().html();
                            contentParagraph.eq(0).css({
                            opacity:'0',
                            padding:'50px 0px',
                            marginTop:'350px',
                            transformOrigin:'right',
                            backgroundColor:backgroundTransparent,
                            minHeight:$(window).height() - 565
                        }).velocity({
                                opacity:['1','1']    
                            }, {
                                duration:0
                            });
                        }
                    });
                    contentParagraph.eq(1).stop(1,1).velocity({
                        opacity:'0'
                    }, {
                        duration:500,
                        easing:'swing',
                        complete:function() {
                    
                                contentParagraph.eq(0).find('p').stop(1,1).css({
                                    color:firstParagraphColorPortfolio
                                });
                    
                                contentParagraph.eq(1).find('p').stop(1,1).css({
                                    color:secondParagraphColorPortfolio
                                });
                            
                                contentParagraph.eq(1).empty().css('padding','0px');
                        }
                    });
                },
                contact: function() {
                    
                    aboutContentFirst.velocity({
                       backgroundColor: firstParagraphBackgroundColorContact
                    }, {
                        duration:500,
                        easing:'swing',
                        queue:false
                    });
                    aboutContent.velocity({
                       backgroundColor: firstParagraphBackgroundColorContact
                    }, {
                        duration:500,
                        easing:'swing',
                        queue:false
                    });
                    contentParagraph.eq(0).stop(1,1).velocity({
                        opacity:'0'
                    }, {
                        duration:500,
                        easing:'swing',
                        complete:function() {
                
                            portfolioCategory.detach();
                            contentParagraph.eq(0).empty().css({'marginTop':'350px','opacity':'0','transformOrigin':'right',backgroundColor:backgroundTransparent,minHeight:'0px',padding:'50px'});
                            contentParagraph.eq(0).velocity(
                                'transition.slideRightBigIn', {
                                duration:1000
                            });
                            contentBodyInner.appendTo(contentParagraph.eq(0));
                            aboutContent.empty().html();
                            contentParagraph.eq(0).css({
                            opacity:'0',
                            padding:'50px',
                            marginTop:'350px',
                            transformOrigin:'right',
                            backgroundColor:backgroundTransparent,
                            minHeight:$(window).height() - 565
                        }).velocity({
                                opacity:['1','1']    
                            }, {
                                duration:0
                            });
                        }
                    });
                    contentParagraph.eq(1).stop(1,1).velocity({
                        opacity:'0'
                    }, {
                        duration:500,
                        easing:'swing',
                        complete:function() {
                    
                                contentParagraph.eq(0).find('p').stop(1,1).css({
                                    color:firstParagraphColorContact
                                });
                    
                                contentParagraph.eq(1).find('p').stop(1,1).css({
                                    color:secondParagraphColorContact
                                });
                            
                                contentParagraph.eq(1).empty().css('padding','0px');
                        }
                    });
                }
            }
        }
    },
    portfolio: {
        loadIn: {
            sites: function() {
                
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
                
                portfolioTileContainer.css({opacity:'0',overflowY:'hidden'}).addClass(portfolioTileContainerActiveString).velocity({
                    opacity:['1','0'],
                    scale:['1','0.75']
                }, {
                    duration:1000,
                    easing:'easeInOutQuart',
                    queue:false,
                    complete:function() {
                        
                        portfolioTileContainer.css({overflowY:'scroll'});
                
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
                        
                        portfolioTileColumn = $('.portfolio-tile-column');
    
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
            
                            for (i = 0; i < portfolioTileColumn.length; i++) {

                            currentPortfolioColumn = portfolioTileColumn.eq(i);

                            currentPortfolioColumn.velocity({
                                opacity:[portfolioTileOpacityEnd,portfolioTileOpacityStart],
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
            javascript: function() {
                
                portfolioTileHeaders.addClass(portfolioTileHeadersActiveString);
                
                portfolioTileHeader.css('opacity','0');
                
                javascriptHeader.addClass(portfolioTileHeaderActiveString);
                
                javascriptHeader.siblings(portfolioTileHeader).removeClass(portfolioTileHeaderActiveString);
                
                javascriptHeader.velocity({
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
                
                portfolioTileContainer.css({opacity:'0',overflowY:'hidden'}).addClass(portfolioTileContainerActiveString).velocity({
                    opacity:['1','0'],
                    scale:['1','0.75']
                }, {
                    duration:1000,
                    easing:'easeInOutQuart',
                    queue:false,
                    complete:function() {
                        
                        portfolioTileContainer.css({overflowY:'scroll'});
                
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
                        
                        loadJavascriptItems();
                
                        portfolioTile = $('.portfolio-tile');
                        
                        tile = $('.tile');
                        
                        portfolioTileColumn = $('.portfolio-tile-column');
    
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
            
                            for (i = 0; i < portfolioTileColumn.length; i++) {

                            currentPortfolioColumn = portfolioTileColumn.eq(i);

                            currentPortfolioColumn.velocity({
                                opacity:[portfolioTileOpacityEnd,portfolioTileOpacityStart],
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
                
                portfolioTileContainer.css({opacity:'0',overflowY:'hidden'}).addClass(portfolioTileContainerActiveString).velocity({
                    opacity:['1','0'],
                    scale:['1','0.75']
                }, {
                    duration:1000,
                    easing:'easeInOutQuart',
                    queue:false,
                    complete:function() {
                        
                        portfolioTileContainer.css({overflowY:'scroll'});
                
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
                        
                        portfolioTileColumn = $('.portfolio-tile-column');
    
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
            
                            for (i = 0; i < portfolioTileColumn.length; i++) {

                            currentPortfolioColumn = portfolioTileColumn.eq(i);

                            currentPortfolioColumn.velocity({
                                opacity:[portfolioTileOpacityEnd,portfolioTileOpacityStart],
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
                
                portfolioTileContainer.css({opacity:'0',overflowY:'hidden'}).addClass(portfolioTileContainerActiveString).velocity({
                    opacity:['1','0'],
                    scale:['1','0.75']
                }, {
                    duration:1000,
                    easing:'easeInOutQuart',
                    queue:false,
                    complete:function() {
                        
                        portfolioTileContainer.css({overflowY:'scroll'});
                
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
                        
                        portfolioTileColumn = $('.portfolio-tile-column');
    
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
            
                            for (i = 0; i < portfolioTileColumn.length; i++) {

                            currentPortfolioColumn = portfolioTileColumn.eq(i);

                            currentPortfolioColumn.velocity({
                                opacity:[portfolioTileOpacityEnd,portfolioTileOpacityStart],
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
                
                portfolioTileContainer.css({opacity:'0',overflowY:'hidden'}).addClass(portfolioTileContainerActiveString).velocity({
                    opacity:['1','0'],
                    scale:['1','0.75']
                }, {
                    duration:1000,
                    easing:'easeInOutQuart',
                    queue:false,
                    complete:function() {
                        
                        portfolioTileContainer.css({overflowY:'scroll'});
                
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
                        
                        portfolioTileColumn = $('.portfolio-tile-column');
    
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
            
                            for (i = 0; i < portfolioTileColumn.length; i++) {

                            currentPortfolioColumn = portfolioTileColumn.eq(i);

                            currentPortfolioColumn.velocity({
                                opacity:[portfolioTileOpacityEnd,portfolioTileOpacityStart],
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
                
                portfolioTileContainer.css({opacity:'0',overflowY:'hidden'}).addClass(portfolioTileContainerActiveString).velocity({
                    opacity:['1','0'],
                    scale:['1','0.75']
                }, {
                    duration:1000,
                    easing:'easeInOutQuart',
                    queue:false,
                    complete:function() {
                        
                        portfolioTileContainer.css({overflowY:'scroll'});
                
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
                        
                        portfolioTileColumn = $('.portfolio-tile-column');
    
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
            
                            for (i = 0; i < portfolioTileColumn.length; i++) {

                            currentPortfolioColumn = portfolioTileColumn.eq(i);

                            currentPortfolioColumn.velocity({
                                opacity:[portfolioTileOpacityEnd,portfolioTileOpacityStart],
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
                
                portfolioTileContainer.css({opacity:'0',overflowY:'hidden'}).addClass(portfolioTileContainerActiveString).velocity({
                    opacity:['1','0'],
                    scale:['1','0.75']
                }, {
                    duration:1000,
                    easing:'easeInOutQuart',
                    queue:false,
                    complete:function() {
                        
                        portfolioTileContainer.css({overflowY:'scroll'});
                
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

                        portfolioTileColumn50 = $('.portfolio-tile-column-50');
    
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
            
                            for (i = 0; i < portfolioTileColumn50.length; i++) {

                            currentPortfolioColumn50 = portfolioTileColumn50.eq(i);

                            currentPortfolioColumn50.velocity({
                                opacity:[portfolioTileOpacityEnd,portfolioTileOpacityStart],
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
                
                portfolioTileContainer.css({opacity:'0',overflowY:'hidden'}).addClass(portfolioTileContainerActiveString).velocity({
                    opacity:['1','0'],
                    scale:['1','0.75']
                }, {
                    duration:1000,
                    easing:'easeInOutQuart',
                    queue:false,
                    complete:function() {
                        
                        portfolioTileContainer.css({overflowY:'scroll'});
                
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

portfolioTileColumn = $('.portfolio-tile-column');
    
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
            
                            for (i = 0; i < portfolioTileColumn.length; i++) {

                            currentPortfolioColumn = portfolioTileColumn.eq(i);

                            currentPortfolioColumn.velocity({
                                opacity:[portfolioTileOpacityEnd,portfolioTileOpacityStart],
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
                
                portfolioTileContainer.css({opacity:'0',overflowY:'hidden'}).addClass(portfolioTileContainerActiveString).velocity({
                    opacity:['1','0'],
                    scale:['1','0.75']
                }, {
                    duration:1000,
                    easing:'easeInOutQuart',
                    queue:false,
                    complete:function() {
                        
                        portfolioTileContainer.css({overflowY:'scroll'});
                
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

portfolioTileColumn = $('.portfolio-tile-column');
    
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
            
                            for (i = 0; i < portfolioTileColumn.length; i++) {

                            currentPortfolioColumn = portfolioTileColumn.eq(i);

                            currentPortfolioColumn.velocity({
                                opacity:[portfolioTileOpacityEnd,portfolioTileOpacityStart],
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
                
                portfolioTileContainer.css({opacity:'0',overflowY:'hidden'}).addClass(portfolioTileContainerActiveString).velocity({
                    opacity:['1','0'],
                    scale:['1','0.75']
                }, {
                    duration:1000,
                    easing:'easeInOutQuart',
                    queue:false,
                    complete:function() {
                        
                        portfolioTileContainer.css({overflowY:'scroll'});
                
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

portfolioTileColumn = $('.portfolio-tile-column');
    
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
            
                            for (i = 0; i < portfolioTileColumn.length; i++) {

                            currentPortfolioColumn = portfolioTileColumn.eq(i);

                            currentPortfolioColumn.velocity({
                                opacity:[portfolioTileOpacityEnd,portfolioTileOpacityStart],
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
                
                websitesHeader.stop(1,0).velocity({
                    opacity:'0'
                }, {
                   duration:500,
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
                    duration:500,
                    queue:false
                });
                
                portfolioTileDelay = portfolioTileDelayInitial;
                
                portfolioTile = $('.portfolio-tile');
                
                portfolioClose.css('opacity','1');
                
                portfolioClose.velocity({
                    opacity:['0','1']
                }, {
                    duration:500,
                    easing:'swing',
                    queue:false,
                    complete:function() {
                        portfolioClose.removeClass(portfolioCloseActiveString);
                
                        portfolioCloseTapRegion.removeClass(portfolioCloseActiveString);
                    }
                });
                
                portfolioTileContainerFade.stop(1,1).velocity({
                    opacity:['0', 'swing'],
                    translateY:Math.floor(($(window).height() * 0.125)) + 'px'
                }, {
                    duration:500,
                    easing:'easeInOutQuart',
                    queue:false,
                    complete:function() {
                        $(this).removeClass(portfolioTileContainerFadeActiveString);
                    }
                });
                
                portfolioTileContainerBackground.velocity({
                    opacity:['0','0.9']
                }, {
                    duration:500,
                    easing:'swing',
                    queue:false,
                    complete:function() {
                        $(this).removeClass(portfolioTileContainerBackgroundActiveString);
                    }
                });
                
                portfolioTileContainer.stop(1,0).velocity({
                    opacity:['0','1']
                }, {
                    duration:500,
                    easing:'swing',
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
            javascript: function() {
                
                websitesHeader.stop(1,0).velocity({
                    opacity:'0'
                }, {
                   duration:500,
                   easing:'swing',
                   queue:false,
                   complete:function() {
                       portfolioTileHeaders.removeClass(portfolioTileHeadersActiveString);
                       javascriptHeader.removeClass(portfolioTileHeaderActiveString);
                   }
                }).siblings(portfolioTileHeader).css('opacity','0');

                loadingTrackbar.stop(1,1).velocity({
                    width:['100vw','100vw'],
                    opacity:['0','0']
                }, {
                    duration:500,
                    queue:false
                });
                
                portfolioTileDelay = portfolioTileDelayInitial;
                
                portfolioTile = $('.portfolio-tile');
                
                portfolioClose.css('opacity','1');
                
                portfolioClose.velocity({
                    opacity:['0','1']
                }, {
                    duration:500,
                    easing:'swing',
                    queue:false,
                    complete:function() {
                        portfolioClose.removeClass(portfolioCloseActiveString);
                
                        portfolioCloseTapRegion.removeClass(portfolioCloseActiveString);
                    }
                });
                
                portfolioTileContainerFade.stop(1,1).velocity({
                    opacity:['0', 'swing'],
                    translateY:Math.floor(($(window).height() * 0.125)) + 'px'
                }, {
                    duration:500,
                    easing:'easeInOutQuart',
                    queue:false,
                    complete:function() {
                        $(this).removeClass(portfolioTileContainerFadeActiveString);
                    }
                });
                
                portfolioTileContainerBackground.velocity({
                    opacity:['0','0.9']
                }, {
                    duration:500,
                    easing:'swing',
                    queue:false,
                    complete:function() {
                        $(this).removeClass(portfolioTileContainerBackgroundActiveString);
                    }
                });
                
                portfolioTileContainer.stop(1,0).velocity({
                    opacity:['0','1']
                }, {
                    duration:500,
                    easing:'swing',
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
                
                bannersHeader.stop(1,0).velocity({
                    opacity:'0'
                }, {
                   duration:500,
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
                    duration:500,
                    queue:false
                });
                
                portfolioTileDelay = portfolioTileDelayInitial;
                
                portfolioTile = $('.portfolio-tile');
                
                portfolioClose.css('opacity','1');
                
                portfolioClose.velocity({
                    opacity:['0','1']
                }, {
                    duration:500,
                    easing:'swing',
                    queue:false,
                    complete:function() {
                        portfolioClose.removeClass(portfolioCloseActiveString);
                
                        portfolioCloseTapRegion.removeClass(portfolioCloseActiveString);
                    }
                });
                
                portfolioTileContainerFade.stop(1,1).velocity({
                    opacity:['0', 'swing'],
                    translateY:Math.floor(($(window).height() * 0.125)) + 'px'
                }, {
                    duration:500,
                    easing:'easeInOutQuart',
                    queue:false,
                    complete:function() {
                        $(this).removeClass(portfolioTileContainerFadeActiveString);
                    }
                });
                
                portfolioTileContainerBackground.velocity({
                    opacity:['0','0.9']
                }, {
                    duration:500,
                    easing:'swing',
                    queue:false,
                    complete:function() {
                        $(this).removeClass(portfolioTileContainerBackgroundActiveString);
                    }
                });
                
                portfolioTileContainer.stop(1,0).velocity({
                    opacity:['0','1']
                }, {
                    duration:500,
                    easing:'swing',
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
                
                eblastsHeader.stop(1,0).velocity({
                    opacity:'0'
                }, {
                   duration:500,
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
                    duration:500,
                    queue:false
                });
                
                portfolioTileDelay = portfolioTileDelayInitial;
                
                portfolioTile = $('.portfolio-tile');
                
                portfolioClose.css('opacity','1');
                
                portfolioClose.velocity({
                    opacity:['0','1']
                }, {
                    duration:500,
                    easing:'swing',
                    queue:false,
                    complete:function() {
                        portfolioClose.removeClass(portfolioCloseActiveString);
                
                        portfolioCloseTapRegion.removeClass(portfolioCloseActiveString);
                    }
                });
                
                portfolioTileContainerFade.stop(1,1).velocity({
                    opacity:['0', 'swing'],
                    translateY:Math.floor(($(window).height() * 0.125)) + 'px'
                }, {
                    duration:500,
                    easing:'easeInOutQuart',
                    queue:false,
                    complete:function() {
                        $(this).removeClass(portfolioTileContainerFadeActiveString);
                    }
                });
                
                portfolioTileContainerBackground.velocity({
                    opacity:['0','0.9']
                }, {
                    duration:500,
                    easing:'swing',
                    queue:false,
                    complete:function() {
                        $(this).removeClass(portfolioTileContainerBackgroundActiveString);
                    }
                });
                
                portfolioTileContainer.stop(1,0).velocity({
                    opacity:['0','1']
                }, {
                    duration:500,
                    easing:'swing',
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
                
                flyersHeader.stop(1,0).velocity({
                    opacity:'0'
                }, {
                   duration:500,
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
                    duration:500,
                    queue:false
                });
                
                portfolioTileDelay = portfolioTileDelayInitial;
                
                portfolioTile = $('.portfolio-tile');
                
                portfolioClose.css('opacity','1');
                
                portfolioClose.velocity({
                    opacity:['0','1']
                }, {
                    duration:500,
                    easing:'swing',
                    queue:false,
                    complete:function() {
                        portfolioClose.removeClass(portfolioCloseActiveString);
                
                        portfolioCloseTapRegion.removeClass(portfolioCloseActiveString);
                    }
                });
                
                portfolioTileContainerFade.stop(1,1).velocity({
                    opacity:['0', 'swing'],
                    translateY:Math.floor(($(window).height() * 0.125)) + 'px'
                }, {
                    duration:500,
                    easing:'easeInOutQuart',
                    queue:false,
                    complete:function() {
                        $(this).removeClass(portfolioTileContainerFadeActiveString);
                    }
                });
                
                portfolioTileContainerBackground.velocity({
                    opacity:['0','0.9']
                }, {
                    duration:500,
                    easing:'swing',
                    queue:false,
                    complete:function() {
                        $(this).removeClass(portfolioTileContainerBackgroundActiveString);
                    }
                });
                
                portfolioTileContainer.stop(1,0).velocity({
                    opacity:['0','1']
                }, {
                    duration:500,
                    easing:'swing',
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
                
                brochuresHeader.stop(1,0).velocity({
                    opacity:'0'
                }, {
                   duration:500,
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
                    duration:500,
                    queue:false
                });
                
                portfolioTileDelay = portfolioTileDelayInitial;
                
                portfolioTile = $('.portfolio-tile');
                
                portfolioClose.css('opacity','1');
                
                portfolioClose.velocity({
                    opacity:['0','1']
                }, {
                    duration:500,
                    easing:'swing',
                    queue:false,
                    complete:function() {
                        portfolioClose.removeClass(portfolioCloseActiveString);
                
                        portfolioCloseTapRegion.removeClass(portfolioCloseActiveString);
                    }
                });
                
                portfolioTileContainerFade.stop(1,1).velocity({
                    opacity:['0', 'swing'],
                    translateY:Math.floor(($(window).height() * 0.125)) + 'px'
                }, {
                    duration:500,
                    easing:'easeInOutQuart',
                    queue:false,
                    complete:function() {
                        $(this).removeClass(portfolioTileContainerFadeActiveString);
                    }
                });
                
                portfolioTileContainerBackground.velocity({
                    opacity:['0','0.9']
                }, {
                    duration:500,
                    easing:'swing',
                    queue:false,
                    complete:function() {
                        $(this).removeClass(portfolioTileContainerBackgroundActiveString);
                    }
                });
                
                portfolioTileContainer.stop(1,0).velocity({
                    opacity:['0','1']
                }, {
                    duration:500,
                    easing:'swing',
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
                
                billboardsHeader.stop(1,0).velocity({
                    opacity:'0'
                }, {
                   duration:500,
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
                    duration:500,
                    queue:false
                });
                
                portfolioTileDelay = portfolioTileDelayInitial;
                
                portfolioTile = $('.portfolio-tile');
                
                portfolioClose.css('opacity','1');
                
                portfolioClose.velocity({
                    opacity:['0','1']
                }, {
                    duration:500,
                    easing:'swing',
                    queue:false,
                    complete:function() {
                        portfolioClose.removeClass(portfolioCloseActiveString);
                
                        portfolioCloseTapRegion.removeClass(portfolioCloseActiveString);
                    }
                });
                
                portfolioTileContainerFade.stop(1,1).velocity({
                    opacity:['0', 'swing'],
                    translateY:Math.floor(($(window).height() * 0.125)) + 'px'
                }, {
                    duration:500,
                    easing:'easeInOutQuart',
                    queue:false,
                    complete:function() {
                        $(this).removeClass(portfolioTileContainerFadeActiveString);
                    }
                });
                
                portfolioTileContainerBackground.velocity({
                    opacity:['0','0.9']
                }, {
                    duration:500,
                    easing:'swing',
                    queue:false,
                    complete:function() {
                        $(this).removeClass(portfolioTileContainerBackgroundActiveString);
                    }
                });
                
                portfolioTileContainer.stop(1,0).velocity({
                    opacity:['0','1']
                }, {
                    duration:500,
                    easing:'swing',
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
                
                cartoonsHeader.stop(1,0).velocity({
                    opacity:'0'
                }, {
                   duration:500,
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
                    duration:500,
                    queue:false
                });
                
                portfolioTileDelay = portfolioTileDelayInitial;
                
                portfolioTile = $('.portfolio-tile');
                
                portfolioClose.css('opacity','1');
                
                portfolioClose.velocity({
                    opacity:['0','1']
                }, {
                    duration:500,
                    easing:'swing',
                    queue:false,
                    complete:function() {
                        portfolioClose.removeClass(portfolioCloseActiveString);
                
                        portfolioCloseTapRegion.removeClass(portfolioCloseActiveString);
                    }
                });
                
                portfolioTileContainerFade.stop(1,1).velocity({
                    opacity:['0', 'swing'],
                    translateY:Math.floor(($(window).height() * 0.125)) + 'px'
                }, {
                    duration:500,
                    easing:'easeInOutQuart',
                    queue:false,
                    complete:function() {
                        $(this).removeClass(portfolioTileContainerFadeActiveString);
                    }
                });
                
                portfolioTileContainerBackground.velocity({
                    opacity:['0','0.9']
                }, {
                    duration:500,
                    easing:'swing',
                    queue:false,
                    complete:function() {
                        $(this).removeClass(portfolioTileContainerBackgroundActiveString);
                    }
                });
                
                portfolioTileContainer.stop(1,0).velocity({
                    opacity:['0','1']
                }, {
                    duration:500,
                    easing:'swing',
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
                
                lifeHeader.stop(1,0).velocity({
                    opacity:'0'
                }, {
                   duration:500,
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
                    duration:500,
                    queue:false
                });
                
                portfolioTileDelay = portfolioTileDelayInitial;
                
                portfolioTile = $('.portfolio-tile');
                
                portfolioClose.css('opacity','1');
                
                portfolioClose.velocity({
                    opacity:['0','1']
                }, {
                    duration:500,
                    easing:'swing',
                    queue:false,
                    complete:function() {
                        portfolioClose.removeClass(portfolioCloseActiveString);
                
                        portfolioCloseTapRegion.removeClass(portfolioCloseActiveString);
                    }
                });
                
                portfolioTileContainerFade.stop(1,1).velocity({
                    opacity:['0', 'swing'],
                    translateY:Math.floor(($(window).height() * 0.125)) + 'px'
                }, {
                    duration:500,
                    easing:'easeInOutQuart',
                    queue:false,
                    complete:function() {
                        $(this).removeClass(portfolioTileContainerFadeActiveString);
                    }
                });
                
                portfolioTileContainerBackground.velocity({
                    opacity:['0','0.9']
                }, {
                    duration:500,
                    easing:'swing',
                    queue:false,
                    complete:function() {
                        $(this).removeClass(portfolioTileContainerBackgroundActiveString);
                    }
                });
                
                portfolioTileContainer.stop(1,0).velocity({
                    opacity:['0','1']
                }, {
                    duration:500,
                    easing:'swing',
                    queue:false,
                    complete:function() {
                        $(this).removeClass(portfolioTileContainerActiveString);
                        portfolioTileContainer.scrollTop(0).css('opacity','0');
                        portfolioTile.css('opacity','0');
                        portfolioTileContainerInner.empty();
                    }
                });

            },
            portraits: function() {
                
                portraitsHeader.stop(1,0).velocity({
                    opacity:'0'
                }, {
                   duration:500,
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
                    duration:500,
                    queue:false
                });
                
                portfolioTileDelay = portfolioTileDelayInitial;
                
                portfolioTile = $('.portfolio-tile');
                
                portfolioClose.css('opacity','1');
                
                portfolioClose.velocity({
                    opacity:['0','1']
                }, {
                    duration:500,
                    easing:'swing',
                    queue:false,
                    complete:function() {
                        portfolioClose.removeClass(portfolioCloseActiveString);
                
                        portfolioCloseTapRegion.removeClass(portfolioCloseActiveString);
                    }
                });
                
                portfolioTileContainerFade.stop(1,1).velocity({
                    opacity:['0', 'swing'],
                    translateY:Math.floor(($(window).height() * 0.125)) + 'px'
                }, {
                    duration:500,
                    easing:'easeInOutQuart',
                    queue:false,
                    complete:function() {
                        $(this).removeClass(portfolioTileContainerFadeActiveString);
                    }
                });
                
                portfolioTileContainerBackground.velocity({
                    opacity:['0','0.9']
                }, {
                    duration:500,
                    easing:'swing',
                    queue:false,
                    complete:function() {
                        $(this).removeClass(portfolioTileContainerBackgroundActiveString);
                    }
                });
                
                portfolioTileContainer.stop(1,0).velocity({
                    opacity:['0','1']
                }, {
                    duration:500,
                    easing:'swing',
                    queue:false,
                    complete:function() {
                        $(this).removeClass(portfolioTileContainerActiveString);
                        portfolioTileContainer.scrollTop(0).css('opacity','0');
                        portfolioTile.css('opacity','0');
                        portfolioTileContainerInner.empty();
                    }
                });

            }
        }
    }
}