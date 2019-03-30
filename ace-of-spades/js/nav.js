navActions = {
    hoverOn: {
        home: function () {
            homeIntervalActive = false;
            aboutIntervalActive = false;
            workIntervalActive = false;
            philosophyIntervalActive = false;
            contactIntervalActive = false;
            homeLink.find(navCircleGlowFindString).velocity({
                opacity: '1'
            }, {
                duration: 500,
                easing: 'easeOutQuad',
                queue: falseQueue
            });
            homeText.velocity({
                opacity: ['1', '0'],
                translateX: ['-35px', '0px']
            }, {
                duration: 500,
                easing: 'easeOutCirc',
                queue: falseQueue
            });
        },
        about: function () {
            homeIntervalActive = false;
            aboutIntervalActive = false;
            workIntervalActive = false;
            philosophyIntervalActive = false;
            contactIntervalActive = false;
            aboutLink.find(navCircleGlowFindString).velocity({
                opacity: '1'
            }, {
                duration: 500,
                easing: 'easeOutQuad',
                queue: falseQueue
            });
            aboutText.velocity({
                opacity: ['1', '0'],
                translateX: ['-35px', '0px']
            }, {
                duration: 500,
                easing: 'easeOutCirc',
                queue: falseQueue
            });
        },
        work: function () {
            homeIntervalActive = false;
            aboutIntervalActive = false;
            workIntervalActive = false;
            philosophyIntervalActive = false;
            contactIntervalActive = false;
            workLink.find(navCircleGlowFindString).velocity({
                opacity: '1'
            }, {
                duration: 500,
                easing: 'easeOutQuad',
                queue: falseQueue
            });
            workText.velocity({
                opacity: ['1', '0'],
                translateX: ['-35px', '0px']
            }, {
                duration: 500,
                easing: 'easeOutCirc',
                queue: falseQueue
            });
        },
        philosophy: function () {
            homeIntervalActive = false;
            aboutIntervalActive = false;
            workIntervalActive = false;
            philosophyIntervalActive = false;
            contactIntervalActive = false;
            philosophyLink.find(navCircleGlowFindString).velocity({
                opacity: '1'
            }, {
                duration: 500,
                easing: 'easeOutQuad',
                queue: falseQueue
            });
            philosophyText.velocity({
                opacity: ['1', '0'],
                translateX: ['-35px', '0px']
            }, {
                duration: 500,
                easing: 'easeOutCirc',
                queue: falseQueue
            });
        },
        contact: function () {
            homeIntervalActive = false;
            aboutIntervalActive = false;
            workIntervalActive = false;
            philosophyIntervalActive = false;
            contactIntervalActive = false;
            contactLink.find(navCircleGlowFindString).velocity({
                opacity: '1'
            }, {
                duration: 500,
                easing: 'easeOutQuad',
                queue: falseQueue
            });
            contactText.velocity({
                opacity: ['1', '0'],
                translateX: ['-35px', '0px']
            }, {
                duration: 500,
                easing: 'easeOutCirc',
                queue: falseQueue
            });
        }
    },
    hoverOff: {
        home: function () {
            if (homeLink.find(navCircleGlowFindString).hasClass(navActiveString)) {
                homeLink.find(navCircleGlowFindString).velocity({
                    opacity: '0.7'
                }, {
                    duration: 500,
                    easing: 'easeOutCirc',
                    queue: falseQueue
                });
            } else {
                homeLink.find(navCircleGlowFindString).velocity({
                    opacity: '0.1'
                }, {
                    duration: 500,
                    easing: 'easeOutCirc',
                    queue: falseQueue
                });
            }
            if (!homeIntervalActive) {
                homeText.velocity({
                    opacity: '0'
                }, {
                    duration: 500,
                    easing: 'easeOutCirc',
                    queue: falseQueue
                });
            }
        },
        about: function () {
            if (aboutLink.find(navCircleGlowFindString).hasClass(navActiveString)) {
                aboutLink.find(navCircleGlowFindString).velocity({
                    opacity: '0.7'
                }, {
                    duration: 500,
                    easing: 'easeOutCirc',
                    queue: falseQueue
                });
            } else {
                aboutLink.find(navCircleGlowFindString).velocity({
                    opacity: '0.1'
                }, {
                    duration: 500,
                    easing: 'easeOutCirc',
                    queue: falseQueue
                });
            }
            if (!aboutIntervalActive) {
                aboutText.velocity({
                    opacity: '0'
                }, {
                    duration: 500,
                    easing: 'easeOutCirc',
                    queue: falseQueue
                });
            }
        },
        work: function () {
            if (workLink.find(navCircleGlowFindString).hasClass(navActiveString)) {
                workLink.find(navCircleGlowFindString).velocity({
                    opacity: '0.7'
                }, {
                    duration: 500,
                    easing: 'easeOutCirc',
                    queue: falseQueue
                });
            } else {
                workLink.find(navCircleGlowFindString).velocity({
                    opacity: '0.1'
                }, {
                    duration: 500,
                    easing: 'easeOutCirc',
                    queue: falseQueue
                });
            }
            if (!workIntervalActive) {
                workText.velocity({
                    opacity: '0'
                }, {
                    duration: 500,
                    easing: 'easeOutCirc',
                    queue: falseQueue
                });
            }
        },
        philosophy: function () {
            if (philosophyLink.find(navCircleGlowFindString).hasClass(navActiveString)) {
                philosophyLink.find(navCircleGlowFindString).velocity({
                    opacity: '0.7'
                }, {
                    duration: 500,
                    easing: 'easeOutCirc',
                    queue: falseQueue
                });
            } else {
                philosophyLink.find(navCircleGlowFindString).velocity({
                    opacity: '0.1'
                }, {
                    duration: 500,
                    easing: 'easeOutCirc',
                    queue: falseQueue
                });
            }
            if (!philosophyIntervalActive) {
                philosophyText.velocity({
                    opacity: '0'
                }, {
                    duration: 500,
                    easing: 'easeOutCirc',
                    queue: falseQueue
                });
            }
        },
        contact: function () {
            if (contactLink.find(navCircleGlowFindString).hasClass(navActiveString)) {
                contactLink.find(navCircleGlowFindString).velocity({
                    opacity: '0.7'
                }, {
                    duration: 500,
                    easing: 'easeOutCirc',
                    queue: falseQueue
                });
            } else {
                contactLink.find(navCircleGlowFindString).velocity({
                    opacity: '0.1'
                }, {
                    duration: 500,
                    easing: 'easeOutCirc',
                    queue: falseQueue
                });
            }
            if (!contactIntervalActive) {
                contactText.velocity({
                    opacity: '0'
                }, {
                    duration: 500,
                    easing: 'easeOutCirc',
                    queue: falseQueue
                });
            }
        }
    },
    clickOff: {



        home: function () {
            homeLink.find(navCircleGlowFindString).addClass(navActiveString).velocity({
                opacity: '0.7'
            }, {
                duration: 500,
                easing: 'easeOutCirc',
                queue: falseQueue
            });
            aboutLink.find(navCircleGlowFindString).removeClass(navActiveString).velocity({
                opacity: '0.1'
            }, {
                duration: 500,
                easing: 'swing',
                queue: falseQueue
            });
            workLink.find(navCircleGlowFindString).removeClass(navActiveString).velocity({
                opacity: '0.1'
            }, {
                duration: 500,
                easing: 'swing',
                queue: falseQueue
            });
            philosophyLink.find(navCircleGlowFindString).removeClass(navActiveString).velocity({
                opacity: '0.1'
            }, {
                duration: 500,
                easing: 'swing',
                queue: falseQueue
            });
            contactLink.find(navCircleGlowFindString).removeClass(navActiveString).velocity({
                opacity: '0.1'
            }, {
                duration: 500,
                easing: 'swing',
                queue: falseQueue
            });
        },



        about: function () {
            homeLink.find(navCircleGlowFindString).removeClass(navActiveString).velocity({
                opacity: '0.1'
            }, {
                duration: 500,
                easing: 'swing',
                queue: falseQueue
            });
            aboutLink.find(navCircleGlowFindString).addClass(navActiveString).velocity({
                opacity: '0.7'
            }, {
                duration: 500,
                easing: 'easeOutCirc',
                queue: falseQueue
            });
            workLink.find(navCircleGlowFindString).removeClass(navActiveString).velocity({
                opacity: '0.1'
            }, {
                duration: 500,
                easing: 'swing',
                queue: falseQueue
            });
            philosophyLink.find(navCircleGlowFindString).removeClass(navActiveString).velocity({
                opacity: '0.1'
            }, {
                duration: 500,
                easing: 'swing',
                queue: falseQueue
            });
            contactLink.find(navCircleGlowFindString).removeClass(navActiveString).velocity({
                opacity: '0.1'
            }, {
                duration: 500,
                easing: 'swing',
                queue: falseQueue
            });
        },



        work: function () {
            homeLink.find(navCircleGlowFindString).removeClass(navActiveString).velocity({
                opacity: '0.1'
            }, {
                duration: 500,
                easing: 'swing',
                queue: falseQueue
            });
            aboutLink.find(navCircleGlowFindString).removeClass(navActiveString).velocity({
                opacity: '0.1'
            }, {
                duration: 500,
                easing: 'swing',
                queue: falseQueue
            });
            workLink.find(navCircleGlowFindString).addClass(navActiveString).velocity({
                opacity: '0.7'
            }, {
                duration: 500,
                easing: 'easeOutCirc',
                queue: falseQueue
            });
            philosophyLink.find(navCircleGlowFindString).removeClass(navActiveString).velocity({
                opacity: '0.1'
            }, {
                duration: 500,
                easing: 'swing',
                queue: falseQueue
            });
            contactLink.find(navCircleGlowFindString).removeClass(navActiveString).velocity({
                opacity: '0.1'
            }, {
                duration: 500,
                easing: 'swing',
                queue: falseQueue
            });
        },



        philosophy: function () {
            homeLink.find(navCircleGlowFindString).removeClass(navActiveString).velocity({
                opacity: '0.1'
            }, {
                duration: 500,
                easing: 'swing',
                queue: falseQueue
            });
            aboutLink.find(navCircleGlowFindString).removeClass(navActiveString).velocity({
                opacity: '0.1'
            }, {
                duration: 500,
                easing: 'swing',
                queue: falseQueue
            });
            workLink.find(navCircleGlowFindString).removeClass(navActiveString).velocity({
                opacity: '0.1'
            }, {
                duration: 500,
                easing: 'swing',
                queue: falseQueue
            });
            philosophyLink.find(navCircleGlowFindString).addClass(navActiveString).velocity({
                opacity: '0.7'
            }, {
                duration: 500,
                easing: 'easeOutCirc',
                queue: falseQueue
            });
            contactLink.find(navCircleGlowFindString).removeClass(navActiveString).velocity({
                opacity: '0.1'
            }, {
                duration: 500,
                easing: 'swing',
                queue: falseQueue
            });
        },



        contact: function () {
            homeLink.find(navCircleGlowFindString).removeClass(navActiveString).velocity({
                opacity: '0.1'
            }, {
                duration: 500,
                easing: 'swing',
                queue: falseQueue
            });
            aboutLink.find(navCircleGlowFindString).removeClass(navActiveString).velocity({
                opacity: '0.1'
            }, {
                duration: 500,
                easing: 'swing',
                queue: falseQueue
            });
            workLink.find(navCircleGlowFindString).removeClass(navActiveString).velocity({
                opacity: '0.1'
            }, {
                duration: 500,
                easing: 'swing',
                queue: falseQueue
            });
            philosophyLink.find(navCircleGlowFindString).removeClass(navActiveString).velocity({
                opacity: '0.1'
            }, {
                duration: 500,
                easing: 'swing',
                queue: falseQueue
            });
            contactLink.find(navCircleGlowFindString).addClass(navActiveString).velocity({
                opacity: '0.7'
            }, {
                duration: 500,
                easing: 'easeOutCirc',
                queue: falseQueue
            });
        }
    }
};

navAnimations = {
    navText: {
        breakOut: {
            start: {
                home: function () {
                    navDelay = -50;
                    homeIntervalActive = true;
                    homeLinkLetter.css('opacity', '0');
                    for (i = homeLinkLetterLength - 1; i >= 0; i--) {
                        if (homeIntervalActive) {
                            currentLetter = homeLinkLetter.eq(i);
                            currentLetter.siblings('.link-letter').css('opacity', '0');

                            currentLetter.css('opacity', '0').velocity({
                                translateX: ['-25px', '0px'],
                                translateY: ['0px', '0px'],
                                rotateX: [zeroDegrees, zeroDegrees],
                                rotateY: [zeroDegrees, zeroDegrees],
                                rotateZ: [zeroDegrees, zeroDegrees],
                                opacity: ['1', '0']
                            }, {
                                duration: 500,
                                easing: 'easeOutCirc',
                                delay: navDelay += 50,
                                queue: falseQueue
                            });
                        }
                    }
                },
                about: function () {
                    navDelay = -50;
                    aboutIntervalActive = true;
                    aboutLinkLetter.css('opacity', '0');
                    for (i = aboutLinkLetterLength - 1; i >= 0; i--) {
                        if (aboutIntervalActive) {
                            currentLetter = aboutLinkLetter.eq(i);
                            currentLetter.siblings('.link-letter').css('opacity', '0');

                            currentLetter.css('opacity', '0').velocity({
                                translateX: ['-25px', '0px'],
                                translateY: ['0px', '0px'],
                                rotateX: [zeroDegrees, zeroDegrees],
                                rotateY: [zeroDegrees, zeroDegrees],
                                rotateZ: [zeroDegrees, zeroDegrees],
                                opacity: ['1', '0']
                            }, {
                                duration: 500,
                                easing: 'easeOutCirc',
                                delay: navDelay += 50,
                                queue: falseQueue
                            });
                        }
                    }
                },
                work: function () {
                    navDelay = -50;
                    workIntervalActive = true;
                    workLinkLetter.css('opacity', '0');
                    for (i = workLinkLetterLength - 1; i >= 0; i--) {
                        if (workIntervalActive) {
                            currentLetter = workLinkLetter.eq(i);
                            currentLetter.siblings('.link-letter').css('opacity', '0');

                            currentLetter.css('opacity', '0').velocity({
                                translateX: ['-25px', '0px'],
                                translateY: ['0px', '0px'],
                                rotateX: [zeroDegrees, zeroDegrees],
                                rotateY: [zeroDegrees, zeroDegrees],
                                rotateZ: [zeroDegrees, zeroDegrees],
                                opacity: ['1', '0']
                            }, {
                                duration: 500,
                                easing: 'easeOutCirc',
                                delay: navDelay += 50,
                                queue: falseQueue
                            });
                        }
                    }
                },
                philosophy: function () {
                    navDelay = -50;
                    philosophyIntervalActive = true;
                    philosophyLinkLetter.css('opacity', '0');
                    for (i = philosophyLinkLetterLength - 1; i >= 0; i--) {
                        if (philosophyIntervalActive) {
                            currentLetter = philosophyLinkLetter.eq(i);
                            currentLetter.siblings('.link-letter').css('opacity', '0');

                            currentLetter.css('opacity', '0').velocity({
                                translateX: ['-25px', '0px'],
                                translateY: ['0px', '0px'],
                                rotateX: [zeroDegrees, zeroDegrees],
                                rotateY: [zeroDegrees, zeroDegrees],
                                rotateZ: [zeroDegrees, zeroDegrees],
                                opacity: ['1', '0']
                            }, {
                                duration: 500,
                                easing: 'easeOutCirc',
                                delay: navDelay += 50,
                                queue: falseQueue
                            });
                        }
                    }
                },
                contact: function () {
                    navDelay = -50;
                    contactIntervalActive = true;
                    contactLinkLetter.css('opacity', '0');
                    for (i = contactLinkLetterLength - 1; i >= 0; i--) {
                        if (contactIntervalActive) {
                            currentLetter = contactLinkLetter.eq(i);
                            currentLetter.siblings('.link-letter').css('opacity', '0');

                            currentLetter.css('opacity', '0').velocity({
                                translateX: ['-25px', '0px'],
                                translateY: ['0px', '0px'],
                                rotateX: [zeroDegrees, zeroDegrees],
                                rotateY: [zeroDegrees, zeroDegrees],
                                rotateZ: [zeroDegrees, zeroDegrees],
                                opacity: ['1', '0']
                            }, {
                                duration: 500,
                                easing: 'easeOutCirc',
                                delay: navDelay += 50,
                                queue: falseQueue
                            });
                        }
                    }
                }
            },
            startInstant: {
                home: function () {
                    for (i = homeLinkLetterLength - 1; i >= 0; i--) {
                        currentLetter = homeLinkLetter.eq(i);

                        currentLetter.css('opacity', '0').velocity({
                            translateX: '-25px',
                            translateY: '0px',
                            rotateX: zeroDegrees,
                            rotateY: zeroDegrees,
                            rotateZ: zeroDegrees,
                            opacity: '1'
                        }, {
                            duration: 0,
                            queue: falseQueue
                        });
                    }
                },
                about: function () {
                    for (i = aboutLinkLetterLength - 1; i >= 0; i--) {
                        currentLetter = aboutLinkLetter.eq(i);

                        currentLetter.css('opacity', '0').velocity({
                            translateX: '-25px',
                            translateY: '0px',
                            rotateX: zeroDegrees,
                            rotateY: zeroDegrees,
                            rotateZ: zeroDegrees,
                            opacity: '1'
                        }, {
                            duration: 0,
                            queue: falseQueue
                        });
                    }
                },
                work: function () {
                    for (i = workLinkLetterLength - 1; i >= 0; i--) {
                        currentLetter = workLinkLetter.eq(i);

                        currentLetter.css('opacity', '0').velocity({
                            translateX: '-25px',
                            translateY: '0px',
                            rotateX: zeroDegrees,
                            rotateY: zeroDegrees,
                            rotateZ: zeroDegrees,
                            opacity: '1'
                        }, {
                            duration: 0,
                            queue: falseQueue
                        });
                    }
                },
                philosophy: function () {
                    for (i = philosophyLinkLetterLength - 1; i >= 0; i--) {
                        currentLetter = philosophyLinkLetter.eq(i);

                        currentLetter.css('opacity', '0').velocity({
                            translateX: '-25px',
                            translateY: '0px',
                            rotateX: zeroDegrees,
                            rotateY: zeroDegrees,
                            rotateZ: zeroDegrees,
                            opacity: '1'
                        }, {
                            duration: 0,
                            queue: falseQueue
                        });
                    }
                },
                contact: function () {
                    for (i = contactLinkLetterLength - 1; i >= 0; i--) {
                        currentLetter = contactLinkLetter.eq(i);

                        currentLetter.css('opacity', '0').velocity({
                            translateX: '-25px',
                            translateY: '0px',
                            rotateX: zeroDegrees,
                            rotateY: zeroDegrees,
                            rotateZ: zeroDegrees,
                            opacity: '1'
                        }, {
                            duration: 0,
                            queue: falseQueue
                        });
                    }
                }
            },
            end: {
                home: function () {

                    navLinkEndDelay = 0;
                    homeIntervalActive = true;
                    console.log(homeIntervalActive);

                    for (i = 0; i < homeLinkLetterLength; i++) {
                        currentLetter = homeLinkLetter.eq(i),
                            randomRotateX = r(0, 45),
                            randomRotateY = r(0, 45),
                            randomRotateZ = r(0, 45),
                            randomTranslateX = r(25, 75),
                            randomTranslateY = r(0, 400);

                        currentLetter.velocity({
                            rotateX: randomRotateX + 'deg',
                            rotateY: randomRotateY + 'deg',
                            rotateZ: randomRotateZ + 'deg',
                            translateX: '-' + randomTranslateX + 'vw',
                            translateY: '-' + randomTranslateY + 'px'
                        }, {
                            duration: 3000,
                            easing: 'easeOutQuad',
                            delay: navLinkEndDelay,
                            queue: falseQueue
                        });

                        currentLetter.velocity({
                            opacity: ['0', Math.random()]
                        }, {
                            duration: 2500,
                            easing: 'easeInQuad',
                            delay: navLinkEndDelay,
                            queue: falseQueue
                        });
                    }

                },
                about: function () {

                    navLinkEndDelay = 0;
                    aboutIntervalActive = true;
                    console.log(aboutIntervalActive);

                    for (i = 0; i < aboutLinkLetterLength; i++) {
                        currentLetter = aboutLinkLetter.eq(i),
                            randomRotateX = r(0, 45),
                            randomRotateY = r(0, 45),
                            randomRotateZ = r(0, 45),
                            randomTranslateX = r(25, 75),
                            randomTranslateY = r(0, 400);

                        currentLetter.velocity({
                            rotateX: randomRotateX + 'deg',
                            rotateY: randomRotateY + 'deg',
                            rotateZ: randomRotateZ + 'deg',
                            translateX: '-' + randomTranslateX + 'vw',
                            translateY: '-' + randomTranslateY + 'px'
                        }, {
                            duration: 3000,
                            easing: 'easeOutQuad',
                            delay: navLinkEndDelay,
                            queue: falseQueue
                        });

                        currentLetter.velocity({
                            opacity: ['0', Math.random()]
                        }, {
                            duration: 2500,
                            easing: 'easeInQuad',
                            delay: navLinkEndDelay,
                            queue: falseQueue
                        });
                    }

                },
                work: function () {

                    navLinkEndDelay = 0;
                    workIntervalActive = true;
                    console.log(workIntervalActive);

                    for (i = 0; i < workLinkLetterLength; i++) {
                        currentLetter = workLinkLetter.eq(i),
                            randomRotateX = r(0, 45),
                            randomRotateY = r(0, 45),
                            randomRotateZ = r(0, 45),
                            randomTranslateX = r(25, 75),
                            randomTranslateY = r(0, 400);

                        currentLetter.velocity({
                            rotateX: randomRotateX + 'deg',
                            rotateY: randomRotateY + 'deg',
                            rotateZ: randomRotateZ + 'deg',
                            translateX: '-' + randomTranslateX + 'vw',
                            translateY: '-' + randomTranslateY + 'px'
                        }, {
                            duration: 3000,
                            easing: 'easeOutQuad',
                            delay: navLinkEndDelay,
                            queue: falseQueue
                        });

                        currentLetter.velocity({
                            opacity: ['0', Math.random()]
                        }, {
                            duration: 2500,
                            easing: 'easeInQuad',
                            delay: navLinkEndDelay,
                            queue: falseQueue
                        });
                    }

                },
                philosophy: function () {

                    navLinkEndDelay = 0;
                    philosophyIntervalActive = true;
                    console.log(philosophyIntervalActive);

                    for (i = 0; i < philosophyLinkLetterLength; i++) {
                        currentLetter = philosophyLinkLetter.eq(i),
                            randomRotateX = r(0, 45),
                            randomRotateY = r(0, 45),
                            randomRotateZ = r(0, 45),
                            randomTranslateX = r(25, 75),
                            randomTranslateY = r(0, 400);

                        currentLetter.velocity({
                            rotateX: randomRotateX + 'deg',
                            rotateY: randomRotateY + 'deg',
                            rotateZ: randomRotateZ + 'deg',
                            translateX: '-' + randomTranslateX + 'vw',
                            translateY: '-' + randomTranslateY + 'px'
                        }, {
                            duration: 3000,
                            easing: 'easeOutQuad',
                            delay: navLinkEndDelay,
                            queue: falseQueue
                        });

                        currentLetter.velocity({
                            opacity: ['0', Math.random()]
                        }, {
                            duration: 2500,
                            easing: 'easeInQuad',
                            delay: navLinkEndDelay,
                            queue: falseQueue
                        });
                    }

                },
                contact: function () {

                    navLinkEndDelay = 0;
                    contactIntervalActive = true;
                    console.log(contactIntervalActive);

                    for (i = 0; i < contactLinkLetterLength; i++) {
                        currentLetter = contactLinkLetter.eq(i),
                            randomRotateX = r(0, 45),
                            randomRotateY = r(0, 45),
                            randomRotateZ = r(0, 45),
                            randomTranslateX = r(25, 75),
                            randomTranslateY = r(0, 400);

                        currentLetter.velocity({
                            rotateX: randomRotateX + 'deg',
                            rotateY: randomRotateY + 'deg',
                            rotateZ: randomRotateZ + 'deg',
                            translateX: '-' + randomTranslateX + 'vw',
                            translateY: '-' + randomTranslateY + 'px'
                        }, {
                            duration: 3000,
                            easing: 'easeOutQuad',
                            delay: navLinkEndDelay,
                            queue: falseQueue
                        });

                        currentLetter.velocity({
                            opacity: ['0', Math.random()]
                        }, {
                            duration: 2500,
                            easing: 'easeInQuad',
                            delay: navLinkEndDelay,
                            queue: falseQueue
                        });
                    }

                }
            },
            infinite: {
                home: function () {
                    homeIntervalActive = true;
                    homeTextInterval = setInterval(function initial() {
                        for (i = 0; i < homeLinkLetterLength; i++) {
                            currentLetter = homeLinkLetter.eq(i),
                                randomRotateX = r(0, 45),
                                randomRotateY = r(0, 45),
                                randomRotateZ = r(0, 45),
                                randomTranslateX = r(0, 30),
                                randomTranslateY = r(0, 400);

                            currentLetter.velocity({
                                rotateX: [randomRotateX + 'deg', zeroDegrees],
                                rotateY: [randomRotateY + 'deg', zeroDegrees],
                                rotateZ: [randomRotateZ + 'deg', zeroDegrees],
                                translateX: ['-' + (randomTranslateX * 15) + 'px', '0px'],
                                translateY: ['-' + randomTranslateY + 'px', '0px']
                            }, {
                                duration: 500,
                                easing: 'easeOutCirc',
                                queue: falseQueue
                            });
                        }

                        return initial;
                    }(), 25);
                },
                about: function () {
                    aboutIntervalActive = true;
                    aboutTextInterval = setInterval(function initial() {
                        for (i = 0; i < aboutLinkLetterLength; i++) {
                            currentLetter = aboutLinkLetter.eq(i),
                                randomRotateX = r(0, 45),
                                randomRotateY = r(0, 45),
                                randomRotateZ = r(0, 45),
                                randomTranslateX = r(0, 30),
                                randomTranslateY = r(0, 400);

                            currentLetter.velocity({
                                rotateX: [randomRotateX + 'deg', zeroDegrees],
                                rotateY: [randomRotateY + 'deg', zeroDegrees],
                                rotateZ: [randomRotateZ + 'deg', zeroDegrees],
                                translateX: ['-' + (randomTranslateX * 15) + 'px', '0px'],
                                translateY: ['-' + randomTranslateY + 'px', '0px']
                            }, {
                                duration: 1000,
                                easing: 'easeOutCirc',
                                queue: falseQueue
                            });
                        }

                        return initial;
                    }(), 25);
                },
                work: function () {
                    workIntervalActive = true;
                    workTextInterval = setInterval(function initial() {
                        for (i = 0; i < workLinkLetterLength; i++) {
                            currentLetter = workLinkLetter.eq(i),
                                randomRotateX = r(0, 45),
                                randomRotateY = r(0, 45),
                                randomRotateZ = r(0, 45),
                                randomTranslateX = r(0, 30),
                                randomTranslateY = r(0, 400);

                            currentLetter.velocity({
                                rotateX: [randomRotateX + 'deg', zeroDegrees],
                                rotateY: [randomRotateY + 'deg', zeroDegrees],
                                rotateZ: [randomRotateZ + 'deg', zeroDegrees],
                                translateX: ['-' + (randomTranslateX * 15) + 'px', '0px'],
                                translateY: ['-' + randomTranslateY + 'px', '0px']
                            }, {
                                duration: 1000,
                                easing: 'easeOutCirc',
                                queue: falseQueue
                            });
                        }

                        return initial;
                    }(), 25);
                },
                philosophy: function () {
                    philosophyIntervalActive = true;
                    philosophyTextInterval = setInterval(function initial() {
                        for (i = 0; i < philosophyLinkLetterLength; i++) {
                            currentLetter = philosophyLinkLetter.eq(i),
                                randomRotateX = r(0, 45),
                                randomRotateY = r(0, 45),
                                randomRotateZ = r(0, 45),
                                randomTranslateX = r(0, 30),
                                randomTranslateY = r(0, 400);

                            currentLetter.velocity({
                                rotateX: [randomRotateX + 'deg', zeroDegrees],
                                rotateY: [randomRotateY + 'deg', zeroDegrees],
                                rotateZ: [randomRotateZ + 'deg', zeroDegrees],
                                translateX: ['-' + (randomTranslateX * 15) + 'px', '0px'],
                                translateY: ['-' + randomTranslateY + 'px', '0px']
                            }, {
                                duration: 1000,
                                easing: 'easeOutCirc',
                                queue: falseQueue
                            });
                        }

                        return initial;
                    }(), 25);
                },
                contact: function () {
                    contactIntervalActive = true;
                    contactTextInterval = setInterval(function initial() {
                        for (i = 0; i < contactLinkLetterLength; i++) {
                            currentLetter = contactLinkLetter.eq(i),
                                randomRotateX = r(0, 45),
                                randomRotateY = r(0, 45),
                                randomRotateZ = r(0, 45),
                                randomTranslateX = r(0, 30),
                                randomTranslateY = r(0, 400);

                            currentLetter.velocity({
                                rotateX: [randomRotateX + 'deg', zeroDegrees],
                                rotateY: [randomRotateY + 'deg', zeroDegrees],
                                rotateZ: [randomRotateZ + 'deg', zeroDegrees],
                                translateX: ['-' + (randomTranslateX * 15) + 'px', '0px'],
                                translateY: ['-' + randomTranslateY + 'px', '0px']
                            }, {
                                duration: 1000,
                                easing: 'easeOutCirc',
                                queue: falseQueue
                            });
                        }

                        return initial;
                    }(), 25);
                }
            },
            reverse: {
                home: function () {

                    for (i = 0; i < homeLinkLetterLength; i++) {
                        currentLetter = homeLinkLetter.eq(i);

                        currentLetter.velocity(
                            'reverse', {
                                duration: 1000,
                                easing: 'easeOutCirc',
                                queue: falseQueue
                            });
                    }
                },
                about: function () {

                    for (i = 0; i < aboutLinkLetterLength; i++) {
                        currentLetter = aboutLinkLetter.eq(i);

                        currentLetter.velocity(
                            'reverse', {
                                duration: 1000,
                                easing: 'easeOutCirc',
                                queue: falseQueue
                            });
                    }
                },
                work: function () {

                    for (i = 0; i < workLinkLetterLength; i++) {
                        currentLetter = workLinkLetter.eq(i);

                        currentLetter.velocity(
                            'reverse', {
                                duration: 1000,
                                easing: 'easeOutCirc',
                                queue: falseQueue
                            });
                    }
                },
                philosophy: function () {

                    for (i = 0; i < philosophyLinkLetterLength; i++) {
                        currentLetter = philosophyLinkLetter.eq(i);

                        currentLetter.velocity(
                            'reverse', {
                                duration: 1000,
                                easing: 'easeOutCirc',
                                queue: falseQueue
                            });
                    }
                },
                contact: function () {

                    for (i = 0; i < contactLinkLetterLength; i++) {
                        currentLetter = contactLinkLetter.eq(i);

                        currentLetter.velocity(
                            'reverse', {
                                duration: 1000,
                                easing: 'easeOutCirc',
                                queue: falseQueue
                            });
                    }
                }
            },
            reverseInstant: {
                home: function () {

                    for (i = 0; i < homeLinkLetterLength; i++) {
                        currentLetter = homeLinkLetter.eq(i);

                        currentLetter.velocity({
                            rotateX: zeroDegrees,
                            rotateY: zeroDegrees,
                            rotateZ: zeroDegrees,
                            translateX: '0px',
                            translateY: '0px'
                        }, {
                            duration: 0,
                            queue: falseQueue
                        });
                    }
                },
                about: function () {

                    for (i = 0; i < aboutLinkLetterLength; i++) {
                        currentLetter = aboutLinkLetter.eq(i);

                        currentLetter.velocity({
                            rotateX: zeroDegrees,
                            rotateY: zeroDegrees,
                            rotateZ: zeroDegrees,
                            translateX: '0px',
                            translateY: '0px'
                        }, {
                            duration: 0,
                            queue: falseQueue
                        });
                    }
                },
                work: function () {

                    for (i = 0; i < workLinkLetterLength; i++) {
                        currentLetter = workLinkLetter.eq(i);

                        currentLetter.velocity({
                            rotateX: zeroDegrees,
                            rotateY: zeroDegrees,
                            rotateZ: zeroDegrees,
                            translateX: '0px',
                            translateY: '0px'
                        }, {
                            duration: 0,
                            queue: falseQueue
                        });
                    }
                },
                philosophy: function () {

                    for (i = 0; i < philosophyLinkLetterLength; i++) {
                        currentLetter = philosophyLinkLetter.eq(i);

                        currentLetter.velocity({
                            rotateX: zeroDegrees,
                            rotateY: zeroDegrees,
                            rotateZ: zeroDegrees,
                            translateX: '0px',
                            translateY: '0px'
                        }, {
                            duration: 0,
                            queue: falseQueue
                        });
                    }
                },
                contact: function () {

                    for (i = 0; i < contactLinkLetterLength; i++) {
                        currentLetter = contactLinkLetter.eq(i);

                        currentLetter.velocity({
                            rotateX: zeroDegrees,
                            rotateY: zeroDegrees,
                            rotateZ: zeroDegrees,
                            translateX: '0px',
                            translateY: '0px'
                        }, {
                            duration: 0,
                            queue: falseQueue
                        });
                    }
                }
            }
        }
    }
};