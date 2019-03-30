<!doctype html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Bennett Waisbren</title>
    <meta name="viewport" content="width=device-width, user-scalable=no" />
    <script type="text/javascript" src="js/jquery-1.11.3.min.js"></script>
    <script type="text/javascript" src="js/jquery.mobile.js"></script>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/gfonts.css">
    <!--<link rel="stylesheet" href="css/jquery.mobile.min.css">-->
    <link href="css/smart-addons.css" rel="stylesheet">
    <link href="css/smart-forms.css" rel="stylesheet">
    <!--<style>
        input,
        textarea,
        button,
        select,
        a {
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            -ms-tap-highlight-color: rgba(0, 0, 0, 0);
            -moz-tap-highlight-color: rgba(0, 0, 0, 0);
            -o-tap-highlight-color: rgba(0, 0, 0, 0);
            tap-highlight-color: rgba(0, 0, 0, 0);
        }
    </style>-->
</head>

<body>
    <div id="portrait-prompt">
        <div id="portrait-prompt-text">
            <h6>Please orient your device to landscape mode.</h6>
        </div>
    </div>

    <div class="temp-block-layer"></div>

    <div id="portfolio-item-overlay" class="portfolio-inactive">
        <div id="portfolio-item-overlay-inner">
            <div id="portfolio-close">
                <div id="portfolio-close-click-region"></div>
                <h1>x</h1>
            </div>

            <div id="portfolio-item-header-container">
                <div id="banners-header" class="portfolio-item-header portfolio-item-header-inactive">
                    <h2>Banners</h2>
                </div>
                <div id="billboards-header" class="portfolio-item-header portfolio-item-header-inactive">
                    <h2>Billboards</h2>
                </div>
                <div id="cartoons-header" class="portfolio-item-header portfolio-item-header-inactive">
                    <h2>Drawings:<br>Cartoons</h2>
                </div>
                <div id="life-header" class="portfolio-item-header portfolio-item-header-inactive">
                    <h2>Drawings:<br>Life</h2>
                </div>
                <div id="portraits-header" class="portfolio-item-header portfolio-item-header-inactive">
                    <h2>Drawings:<br>Portraits</h2>
                </div>
                <div id="eblasts-header" class="portfolio-item-header portfolio-item-header-inactive">
                    <h2>Eblasts</h2>
                </div>
                <div id="flyers-header" class="portfolio-item-header portfolio-item-header-inactive">
                    <h2>Flyers &amp;<br>Brochures</h2>
                </div>
                <div id="javascript-header" class="portfolio-item-header portfolio-item-header-inactive">
                    <h2>JavaScript<br>Tests</h2>
                </div>
                <div id="sites-header" class="portfolio-item-header portfolio-item-header-inactive">
                    <h2>Websites</h2>
                </div>
            </div>
            <div id="portfolio-item-container">

                <div id="banner-items" class="portfolio-items portfolio-items-inactive">
                    <div class="portfolio-items-column col-1-4">
                        <img class="portfolio-item" src="images/portfolio/banners/longo1.jpg">
                        <img class="portfolio-item" src="images/portfolio/banners/longo2.jpg">
                        <img class="portfolio-item" src="images/portfolio/banners/longo3.jpg">
                    </div>
                    <div class="portfolio-items-column col-1-4">
                        <img class="portfolio-item" src="images/portfolio/banners/longo4.jpg">
                        <img class="portfolio-item" src="images/portfolio/banners/tvt1.jpg">
                        <img class="portfolio-item" src="images/portfolio/banners/tvt2.jpg">
                    </div>
                    <div class="portfolio-items-column col-1-4">
                        <img class="portfolio-item" src="images/portfolio/banners/tvt3.jpg">
                        <img class="portfolio-item" src="images/portfolio/banners/tvt4.jpg">
                        <img class="portfolio-item" src="images/portfolio/banners/cbu1.jpg">
                    </div>
                    <div class="portfolio-items-column col-1-4">
                        <img class="portfolio-item" src="images/portfolio/banners/cbu2.jpg">
                        <img class="portfolio-item" src="images/portfolio/banners/cbu3.jpg">
                        <img class="portfolio-item" src="images/portfolio/banners/cbu4.jpg">
                    </div>
                </div>

                <div id="billboard-items" class="portfolio-items portfolio-items-inactive">
                    <div class="portfolio-items-column col-1-2">
                        <img class="portfolio-item" src="images/portfolio/billboards/bb1.jpg">
                        <img class="portfolio-item" src="images/portfolio/billboards/bb2.jpg">
                        <img class="portfolio-item" src="images/portfolio/billboards/bb3.jpg">
                        <img class="portfolio-item" src="images/portfolio/billboards/bb4.jpg">
                        <img class="portfolio-item" src="images/portfolio/billboards/bb5.jpg">
                        <img class="portfolio-item" src="images/portfolio/billboards/bb6.jpg">
                        <img class="portfolio-item" src="images/portfolio/billboards/cbu1.jpg">
                    </div>
                    <div class="portfolio-items-column col-1-2">
                        <img class="portfolio-item" src="images/portfolio/billboards/cbu2.jpg">
                        <img class="portfolio-item" src="images/portfolio/billboards/cbu3.jpg">
                        <img class="portfolio-item" src="images/portfolio/billboards/cbu4.jpg">
                        <img class="portfolio-item" src="images/portfolio/billboards/cbu5.jpg">
                        <img class="portfolio-item" src="images/portfolio/billboards/ims1.jpg">
                        <img class="portfolio-item" src="images/portfolio/billboards/ims2.jpg">
                        <img class="portfolio-item" src="images/portfolio/billboards/ims3.jpg">
                        <img class="portfolio-item" src="images/portfolio/billboards/ims4.jpg">
                    </div>
                </div>

                <div id="cartoon-items" class="portfolio-items portfolio-items-inactive">
                    <div class="portfolio-items-column col-1-4">
                        <img class="portfolio-item" src="images/portfolio/drawings/cartoons/mushu-sketch.jpg">
                        <img class="portfolio-item" src="images/portfolio/drawings/cartoons/mushu-color.jpg">
                    </div>
                    <div class="portfolio-items-column col-1-4">
                        <img class="portfolio-item" src="images/portfolio/drawings/cartoons/beast-sketch.jpg">
                    </div>
                    <div class="portfolio-items-column col-1-4">
                        <img class="portfolio-item" src="images/portfolio/drawings/cartoons/mufasa-sketch.jpg">
                    </div>
                    <div class="portfolio-items-column col-1-4">
                        <img class="portfolio-item" src="images/portfolio/drawings/cartoons/kuzco-sketch.jpg">
                    </div>
                </div>

                <div id="life-items" class="portfolio-items portfolio-items-inactive">
                    <div class="portfolio-items-column col-1-4">
                        <img class="portfolio-item" src="images/portfolio/drawings/life-drawings/animals.jpg">
                        <img class="portfolio-item" src="images/portfolio/drawings/life-drawings/models2.jpg">
                        <img class="portfolio-item" src="images/portfolio/drawings/life-drawings/models3.jpg">
                    </div>
                    <div class="portfolio-items-column col-1-4">
                        <img class="portfolio-item" src="images/portfolio/drawings/life-drawings/models5.jpg">
                        <img class="portfolio-item" src="images/portfolio/drawings/life-drawings/models4.jpg">
                    </div>
                    <div class="portfolio-items-column col-1-4">
                        <img class="portfolio-item" src="images/portfolio/drawings/life-drawings/zorro.jpg">
                        <img class="portfolio-item" src="images/portfolio/drawings/life-drawings/models1.jpg">
                        <img class="portfolio-item" src="images/portfolio/drawings/life-drawings/anatomy1.jpg">
                    </div>
                    <div class="portfolio-items-column col-1-4">
                        <img class="portfolio-item" src="images/portfolio/drawings/life-drawings/anatomy2.jpg">
                        <img class="portfolio-item" src="images/portfolio/drawings/life-drawings/anatomy3.jpg">
                        <img class="portfolio-item" src="images/portfolio/drawings/life-drawings/models6.jpg">
                    </div>
                </div>

                <div id="portrait-items" class="portfolio-items portfolio-items-inactive">
                    <div class="portfolio-items-column col-1-4">
                        <img class="portfolio-item" src="images/portfolio/drawings/portraits/audrey-hepburn.jpg">
                        <img class="portfolio-item" src="images/portfolio/drawings/portraits/monkey.jpg">
                    </div>
                    <div class="portfolio-items-column col-1-4">
                        <img class="portfolio-item" src="images/portfolio/drawings/portraits/christian-bale.jpg">
                        <img class="portfolio-item" src="images/portfolio/drawings/portraits/joker.jpg">
                    </div>
                    <div class="portfolio-items-column col-1-4">
                        <img class="portfolio-item" src="images/portfolio/drawings/portraits/model-forward.jpg">
                        <img class="portfolio-item" src="images/portfolio/drawings/portraits/model-side.jpg">
                    </div>
                    <div class="portfolio-items-column col-1-4">
                        <img class="portfolio-item" src="images/portfolio/drawings/portraits/model-side2.jpg">
                        <img class="portfolio-item" src="images/portfolio/drawings/portraits/zorro.jpg">
                    </div>
                </div>

                <div id="eblast-items" class="portfolio-items portfolio-items-inactive">
                    <div class="portfolio-items-column col-1-4">
                        <img class="portfolio-item" src="images/portfolio/eblasts/vc1.jpg">
                        <img class="portfolio-item" src="images/portfolio/eblasts/ims1.jpg">
                    </div>
                    <div class="portfolio-items-column col-1-4">
                        <img class="portfolio-item" src="images/portfolio/eblasts/mst1.jpg">
                        <img class="portfolio-item" src="images/portfolio/eblasts/ims2.jpg">
                    </div>
                    <div class="portfolio-items-column col-1-4">
                        <img class="portfolio-item" src="images/portfolio/eblasts/ims3.jpg">
                        <img class="portfolio-item" src="images/portfolio/eblasts/ims4.jpg">
                    </div>
                    <div class="portfolio-items-column col-1-4">
                        <img class="portfolio-item" src="images/portfolio/eblasts/pj1.jpg">
                        <img class="portfolio-item" src="images/portfolio/eblasts/pj2-mobile.jpg">
                    </div>
                </div>

                <div id="flyer-items" class="portfolio-items portfolio-items-inactive">
                    <div class="portfolio-items-column col-1-4">
                        <img class="portfolio-item" src="images/portfolio/flyers/sm1.jpg">
                        <img class="portfolio-item" src="images/portfolio/flyers/cbu1-1.jpg">
                    </div>
                    <div class="portfolio-items-column col-1-4">
                        <img class="portfolio-item" src="images/portfolio/flyers/cbu2.jpg">
                        <img class="portfolio-item" src="images/portfolio/flyers/cbu3.jpg">
                    </div>
                    <div class="portfolio-items-column col-1-4">
                        <img class="portfolio-item" src="images/portfolio/flyers/fc1.jpg">
                        <img class="portfolio-item" src="images/portfolio/flyers/fc2.jpg">
                    </div>
                    <div class="portfolio-items-column col-1-4">
                        <a href="images/portfolio/brochures/cbu-brochure.pdf" target="_blank"><img class="portfolio-item" src="images/portfolio/brochures/cbu1.jpg"></a>
                        <a href="images/portfolio/brochures/lite-brochure.pdf" target="_blank"><img class="portfolio-item" src="images/portfolio/brochures/l1.jpg"></a>
                    </div>
                </div>

                <div id="javascript-items" class="portfolio-items portfolio-items-inactive">
                    <div class="portfolio-items-column col-1-4">
                        <a href="http://bennettcodes.com/sites/full/ace-of-spades/" target="_blank"><img class="portfolio-item" src="images/portfolio/websites/aos.jpg"></a>
                        <a href="http://bennettcodes.com/dev/velocity/planet/" target="_blank"><img class="portfolio-item" src="images/portfolio/javascript/planet.jpg"></a>
                        <a href="http://bennettcodes.com/dev/cursor-move-events/" target="_blank"><img class="portfolio-item" src="images/portfolio/javascript/brain.jpg"></a>
                    </div>
                    <div class="portfolio-items-column col-1-4">
                        <a href="http://bennettcodes.com/sites/full/bc2/" target="_blank"><img class="portfolio-item" src="images/portfolio/javascript/globe.jpg"></a>
                        <a href="http://bennettcodes.com/sites/full/drunk-ball/" target="_blank"><img class="portfolio-item" src="images/portfolio/javascript/drunk-ball.jpg"></a>
                        <a href="http://bennettcodes.com/dev/gallery-test/" target="_blank"><img class="portfolio-item" src="images/portfolio/javascript/gallery.jpg"></a>
                    </div>
                    <div class="portfolio-items-column col-1-4">
                        <a href="http://bennettcodes.com/sites/full/onepage-performance-test/" target="_blank"><img class="portfolio-item" src="images/portfolio/javascript/onepage-slider.jpg"></a>
                        <a href="http://bennettcodes.com/sites/full/earth-parallax/" target="_blank"><img class="portfolio-item" src="images/portfolio/javascript/cycles.jpg"></a>
                        <a href="http://bennettcodes.com/sites/full/corben-optometry/" target="_blank"><img class="portfolio-item" src="images/portfolio/javascript/corben.jpg"></a>
                    </div>
                    <div class="portfolio-items-column col-1-4">
                        <a href="http://bennettcodes.com/sites/full/angular-test/weather" target="_blank"><img class="portfolio-item" src="images/portfolio/javascript/angular-weather.jpg"></a>
                        <a href="http://bennettcodes.com/dev/velocity/transform-test/" target="_blank"><img class="portfolio-item" src="images/portfolio/javascript/number-cube.jpg"></a>
                        <a href="http://bennettcodes.com/dev/css-transform-test/" target="_blank"><img class="portfolio-item" src="images/portfolio/javascript/transform.jpg"></a>
                    </div>
                </div>

                <div id="site-items" class="portfolio-items portfolio-items-inactive">
                    <div class="portfolio-items-column col-1-4">
                        <a href="http://bennettcodes.com/sites/full/ace-of-spades/" target="_blank"><img class="portfolio-item" src="images/portfolio/websites/aos.jpg"></a>
                        <a href="http://infocusadv.com/fazio15" target="_blank"><img class="portfolio-item" src="images/portfolio/websites/fc.jpg"></a>
                        <a href="http://kestrelbiologic.com" target="_blank"><img class="portfolio-item" src="images/portfolio/websites/kb.jpg"></a>
                    </div>
                    <div class="portfolio-items-column col-1-4">
                        <a href="http://bennettcodes.com/sites/full/ifa-dec-15" target="_blank"><img class="portfolio-item" src="images/portfolio/websites/ifa2.jpg"></a>
                        <a href="http://infocusadv.com/comet-live" target="_blank"><img class="portfolio-item" src="images/portfolio/websites/ce.jpg"></a>
                        <a href="http://bennettcodes.com/sites/landing/icdc-national-11-15" target="_blank"><img class="portfolio-item" src="images/portfolio/websites/icdc.jpg"></a>
                    </div>
                    <div class="portfolio-items-column col-1-4">
                        <a href="http://bennettplays.com" target="_blank"><img class="portfolio-item" src="images/portfolio/websites/bp2.jpg"></a>
                        <a href="http://bennettcodes.com/sites/landing/greenpros-facebook-12-15" target="_blank"><img class="portfolio-item" src="images/portfolio/websites/gp.jpg"></a>
                        <a href="http://bennettcodes.com/sites/landing/fer-vegas-09-15" target="_blank"><img class="portfolio-item" src="images/portfolio/websites/fer.jpg"></a>
                    </div>
                    <div class="portfolio-items-column col-1-4">
                        <a href="http://polachecks.com" target="_blank"><img class="portfolio-item" src="images/portfolio/websites/pj.jpg"></a>
                        <a href="http://cleanroomsplus.com" target="_blank"><img class="portfolio-item" src="images/portfolio/websites/crp.jpg"></a>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <div id="outer-container">
        <div id="white-overlay">
            <div id="white-overlay-text">
                <h6>Loading...</h6>
            </div>
        </div>
        <div class="white-fadeover top-fadeover"></div>
        <div class="white-fadeover bottom-fadeover"></div>
        <div id="vertical-break">
            <div id="vertical-break-background-container">
                <div id="vertical-break-home-background" class="vertical-break-background active-vertical-break-background"></div>
                <div id="vertical-break-resume-background" class="vertical-break-background inactive-vertical-break-background"></div>
                <div id="vertical-break-work-background" class="vertical-break-background inactive-vertical-break-background"></div>
                <div id="vertical-break-contact-background" class="vertical-break-background inactive-vertical-break-background"></div>
            </div>
        </div>

        <div id="masthead-container">
            <div id="masthead-background-container">
                <div id="masthead-home-background" class="masthead-background active-masthead-background"></div>
                <div id="masthead-resume-background" class="masthead-background inactive-masthead-background"></div>
                <div id="masthead-work-background" class="masthead-background inactive-masthead-background"></div>
                <div id="masthead-contact-background" class="masthead-background inactive-masthead-background"></div>
            </div>
            <div id="masthead-white-overlay"></div>
            <div id="home-masthead" class="masthead active-masthead">
                <h1>Bennett</h1></div>
            <div id="resume-masthead" class="masthead inactive-masthead">
                <h1>Resume</h1></div>
            <div id="work-masthead" class="masthead inactive-masthead">
                <h1>Work</h1></div>
            <div id="contact-masthead" class="masthead inactive-masthead">
                <h1>Contact</h1></div>
        </div>
        <div id="container-bg-outer">
            <div id="home-container-bg" class="container-bg active-container-bg"></div>
            <div id="resume-container-bg" class="container-bg inactive-container-bg"></div>
            <div id="work-container-bg" class="container-bg inactive-container-bg"></div>
            <div id="contact-container-bg" class="container-bg inactive-container-bg"></div>
        </div>
        <div id="white-bar"></div>
        <div class="menu side-menu">

            <div class="page1 menu-item side-item">
                Bennett
                <div class="side-item-bg"></div>
            </div>
            <div class="page2 menu-item side-item">
                Resume
                <div class="side-item-bg"></div>
            </div>
            <div class="page3 menu-item side-item">
                Work
                <div class="side-item-bg"></div>
            </div>
            <div class="page4 menu-item side-item">
                Contact
                <div class="side-item-bg"></div>
            </div>

        </div>
        <div id="menu-tracker-container">
            <div id="menu-tracker-raft">
                <div id="menu-tracker"></div>
            </div>
        </div>

        <div id="container">
            <!--<div id="header">
            <div class="border white top"></div>
            <div class="border white left"></div>
            <div class="border white right"></div>
            <div class="border white bottom"></div>
        </div>-->
            <div id="page-container">
                <div id="home" class="page-section active-page-section">
                    <p>First off, thanks for taking the time to visit my site - It really does mean a lot to me.
                        <br>
                        <br> I've been designing the web for a little over five years now. Having always possessed a deep love and appreciation for gorgeous web experiences, I've carefully honed my abilities in an ongoing effort to become the most seasoned and capable front-end developer that I possibly can.
                        <br>
                        <br> Creativity has come naturally to me for as long as I can remember, as has my obsession with computers and technology. By around the age of 20, it occurred to me that these two qualities were begging to be utilized in some harmonious fashion. Such an epiphany propelled me into the vast and evergrowing field of web development and design, with a particular focus on UI and UX (User Interface &amp; User Experience). In years past, I have spent time dabbling in various sectors of web creation, building a mastery over the Adobe suite, HTML5, CSS3, and always courting some of the more heavy-handed coding languages that never seemed to click.
                        <br>
                        <br> Then, JavaScript clicked.
                        <br>
                        <br> It was at this very moment that my already burning passion for the web sprouted into a feverish obsession. Seeing the endless array of dynamic animations and interactions that had resided in my head for so many years finally translate into tangible pixels for the first time was frankly, an indescribable rush. All I knew by this point was that something beautiful had begun. Since then I have not gone a single day without coding anywhere from 6 hours to 16 hours. I build sites for the fun of it and create unique and novel JavaScript widgets. I have an insatiable hunger for creating gorgeous art in the form of websites, and weaving experiences that users are very much unprepared for; experiences that will leave them with a profound and lasting impression.
                        <br>
                        <br> This is what drives me. Knowing that there are so many websites floating around in digital space that are literally hemorrhaging potential by neglecting a much-needed respect and commitment to solid web design; sites that provide an otherwise exemplary service or product, but still struggle when it comes to retaining customer interest.
                        <br>
                        <br> My philosophy is that by giving the user an experience that is clean, intuitive and just plain fun, you'll be remembered. Moreover, you'll be remembered POSITIVELY.
                        <br>
                        <br> Let's rebuild the web.</p>
                </div>
                <div id="resume" class="page-section inactive-page-section">
                    <!--<hr class="section-hr">-->
                    <h3>Employment</h3>

                    <h4>Senior Web Developer</h4>
                    <h5>in Focus Advertising: Advertising Agency</h5>
                    <h6>&#8212; October 2013 - March 2016</h6>
                    <br>
                    <p>Take full command of all web-based projects relating to both the front-end and back-end as requested by a diverse catalogue of clients representing a colorful spectrum of industries. Routinely deploy everything from landing pages to full-blown E-commerce solutions complete with responsive design and performance parity across all major browsers and OS’s.</p>
                    <br>


                    <h4>Post Production Artist</h4>
                    <h5>Graphic Orb: Post-Production Company</h5>
                    <h6>&#8212; April 2013 - July 2013</h6>
                    <br>
                    <p>Handle a wide range of assets for film, including resizing thumbnails for Netflix, preparing key art and one-sheets for print, and coding HTML emails with tables.</p>
                    <br>


                    <h4>Lead Artist/IT Specialist</h4>
                    <h5>Winnol.com - Internet Start-Up</h5>
                    <h6>&#8212; October 2011 - March 2013</h6>
                    <br>
                    <p>In charge of site’s user interface and experience. Design materials for mediums spanning both web and print. Help with PC and Mac-related issues.</p>
                    <br>
                    <!--<hr class="section-hr">-->
                    <br>

                    <div id="resume-column-container">
                        <!--<div id="resume-icons-column" class="resume-column"></div>-->
                        <div id="resume-skillset-column" class="resume-column">
                            <div class="resume-row">
                                <h3>Skill Set</h3>
                            </div>
                            <div class="resume-row">
                                <div id="code-column" class="resume-column">
                                    <h4>Code</h4>
                                    <p>&#8212; HTML5</p>
                                    <p>&#8212; CSS3</p>
                                    <p>&#8212; JavaScript</p>
                                    <p>&#8212; Angular.js</p>
                                    <p>&#8212; jQuery</p>
                                    <p>&#8212; AJAX</p>
                                    <p>&#8212; Velocity.js</p>
                                    <p>&#8212; Greensock.js</p>
                                    <p>&#8212; Node.js</p>
                                    <p>&#8212; Three.js</p>
                                </div>

                                <div id="design-column" class="resume-column">
                                    <h4>Design</h4>
                                    <p>&#8212; Photoshop</p>
                                    <p>&#8212; Illustrator</p>
                                    <p>&#8212; InDesign</p>
                                    <p>&#8212; After Effects</p>
                                    <p>&#8212; Premiere Pro</p>
                                    <p>&#8212; Flash</p>
                                </div>

                                <div id="it-column" class="resume-column">
                                    <h4>IT</h4>
                                    <p>&#8212; VPN</p>
                                    <p>&#8212; MySQL &amp; SMB</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div id="work" class="page-section active-page-section">
                    <div id="category-container">
                        <div id="banners-category" class="category">
                            <div id="banners-category-region" class="category-click-region"></div>
                            <div class="category-title">
                                <h4>Banners</h4></div>
                            <div class="category-thumb-corner">
                            </div>
                            <img class="category-thumb" src="images/portfolio/banners/banners-thumb.jpg">
                        </div>
                        <div id="billboards-category" class="category">
                            <div id="billboards-category-region" class="category-click-region"></div>
                            <div class="category-title">
                                <h4>Billboards</h4></div>
                            <div class="category-thumb-corner">
                            </div>
                            <img class="category-thumb" src="images/portfolio/billboards/billboards-thumb.jpg">
                        </div>
                        <div id="drawings-cartoons-category" class="category">
                            <div id="drawings-cartoons-category-region" class="category-click-region"></div>
                            <div class="category-title">
                                <h4>Drawings:<br>Cartoons</h4></div>
                            <div class="category-thumb-corner">
                            </div>
                            <img class="category-thumb" src="images/portfolio/drawings/cartoons/cartoons-thumb.jpg">
                        </div>
                        <div id="drawings-life-category" class="category">
                            <div id="drawings-life-category-region" class="category-click-region"></div>
                            <div class="category-title">
                                <h4>Drawings:<br>Life</h4></div>
                            <div class="category-thumb-corner">
                            </div>
                            <img class="category-thumb" src="images/portfolio/drawings/life-drawings/life-thumb.jpg">
                        </div>
                        <div id="drawings-portraits-category" class="category">
                            <div id="drawings-portraits-category-region" class="category-click-region"></div>
                            <div class="category-title">
                                <h4>Drawings:<br>Portraits</h4></div>
                            <div class="category-thumb-corner">
                            </div>
                            <img class="category-thumb" src="images/portfolio/drawings/portraits/portraits-thumb.jpg">
                        </div>
                        <div id="eblasts-category" class="category">
                            <div id="eblasts-category-region" class="category-click-region"></div>
                            <div class="category-title">
                                <h4>Eblasts</h4></div>
                            <div class="category-thumb-corner">
                            </div>
                            <img class="category-thumb" src="images/portfolio/eblasts/eblasts-thumb.jpg">
                        </div>
                        <div id="flyers-brochures-category" class="category">
                            <div id="flyers-brochures-category-region" class="category-click-region"></div>
                            <div class="category-title">
                                <h4>Flyers &amp;<br>Brochures</h4></div>
                            <div class="category-thumb-corner">
                            </div>
                            <img class="category-thumb" src="images/portfolio/flyers/flyers-thumb.jpg">
                        </div>
                        <div id="javascript-tests-category" class="category">
                            <div id="javascript-tests-category-region" class="category-click-region"></div>
                            <div class="category-title">
                                <h4>JavaScript<br>Tests</h4></div>
                            <div class="category-thumb-corner">
                            </div>
                            <img class="category-thumb" src="images/portfolio/javascript/javascript-thumb.jpg">
                        </div>
                        <div id="sites-category" class="category">
                            <div id="sites-category-region" class="category-click-region"></div>
                            <div class="category-title">
                                <h4>Websites</h4></div>
                            <div class="category-thumb-corner">
                            </div>
                            <img class="category-thumb" src="images/portfolio/websites/sites-thumb.jpg">
                        </div>
                    </div>
                </div>
                <div id="contact" class="page-section inactive-page-section">
                    <div class="content-body-inner" allowtransparency="true">
                        <div class="smart-forms smart-container wrap-2">
                            <!-- end .form-header section -->

                            <form method="post" action="php/smartprocess.php" id="smart-form" autocomplete="off">
                                <div class="form-body">
                                    <div class="section">
                                        <div class="result"></div>
                                    </div>

                                    <div class="section section-field">
                                        <div class="result"></div>
                                        <label class="field prepend-icon">
                                            <input type="text" name="firstname" id="firstname" class="gui-input" placeholder="NAME">
                                        </label>
                                    </div>
                                    <!-- end section -->

                                    <div class="section section-field">
                                        <div class="result"></div>
                                        <label class="field prepend-icon">
                                            <input type="email" name="emailaddress" id="emailaddress" class="gui-input" placeholder="EMAIL">
                                        </label>
                                    </div>
                                    <!-- end section -->

                                    <div class="section section-field">
                                        <div class="result"></div>
                                        <textarea class="gui-textarea" id="inquiry" name="inquiry" placeholder="INQUIRY"></textarea>
                                    </div>
                                    <!-- end section -->


                                </div>
                                <!-- end .form-body section -->
                                <div class="form-footer" style="margin-bottom:38px; font-size:11px; float:left;">
                                    <button type="submit" data-btntext-sending="Thank you, I'll get back to you shortly." class="button btn-primary" style=" border:none;">Submit</button>
                                </div>
                                <!-- end .form-footer section -->
                            </form>
                        </div>
                        <!--<p>Contact form coming soon. Please email me at <a class="contact-color" href="mailto:bennettcodes@gmail.com">bennettcodes@gmail.com</a> for the quickest response, or visit <a class="contact-color" href="http://bennettcodes.com" target="_blank">http://bennettcodes.com</a> from a desktop to access my current formfill in the meantime.</p>-->
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script type="text/javascript" src="js/jquery-initial.js"></script>
    <script type="text/javascript" src="js/imagesloaded.pkgd.min.js"></script>
    <script type="text/javascript" src="js/smoothscroll.js"></script>
    <script type="text/javascript" src="js/fastclick.js"></script>
    <script type="text/javascript" src="js/TweenMax.min.js"></script>
    <!--<script type="text/javascript" src="js/mobile-touch-fix.js"></script>-->
    <script type="text/javascript" src="js/jquery.form.min.js"></script>
    <script type="text/javascript" src="js/jquery.validate.min.js"></script>
    <script type="text/javascript" src="js/smart-form.js"></script>
    <script type="text/javascript" src="js/variables.js"></script>
    <script type="text/javascript" src="js/objects.js"></script>
    <script type="text/javascript" src="js/menu-animations.js"></script>
    <script type="text/javascript" src="js/category-animations.js"></script>
    <script type="text/javascript" src="js/main.js"></script>
    <!--<script type="text/javascript" src="js/header-timeline.js"></script>-->
    <!--<script type="text/javascript" src="js/border-timeline.js"></script>-->
    <script language=javascript>
    </script>
</body>

</html>