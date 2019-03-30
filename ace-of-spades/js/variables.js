var

    loading = $('.loading'),
    loadingText = $('.loading-text'),

    introLoaderBar = $('.intro-loader-bar'),
    introLoaderBarSegment = $('.intro-loader-bar-segment'),

    container = $('.container'),
    
    svgObject = $('.svg-object'),
    spadeBlackContainer = $('.spade-black-container'),
    spadeWhiteContainer = $('.spade-white-container'),
    ofOWhiteContainer = $('.of-o-white-container'),
    ofFWhiteContainer = $('.of-f-white-container'),

    logo = $('.logo'),
    logoClickRegion = $('.logo-click-region'),
    logoWhiteBlack = $('.logo-white-black'),
    logoBlack = $('.logo-black'),
    logoWhite = $('.logo-white'),
    logoFront = $('.logo-front'),
    logoBack = $('.logo-back'),
    
    logoOfOWhite = $('#of-o-white'),
    logoOfFWhite = $('#of-f-white'),
    
    logoPiece = $('.logo-piece'),
    logoPieceString = 'logo-piece',
    logoPieceFindString = '.logo-piece',
    logoSpade = $('.logo-spade'),
    logoOf = $('.logo-of'),
    
    logoSpadeBlack = $('#spade-black'),
    logoSpadeWhite = $('#spade-white'),
    logoSpadeFirst = svgObject.find('#spade-white'),
    logoSpadeSecond = svgObject.find('#spade-black'),
    headerGraphic = $('.header-inner'),
    
    logoFill = logo.find('.st0'),
    
    aboutHeaderGraphicFill = $('#who-makes-us'),
    
    workHeaderGraphicFill = $('#made-by-us'),
    
    philosophyHeaderGraphicFill = $('#what-drives-us'),
    
    contactHeaderGraphicFill = $('#talk-with-us'),
    
    logoOfO = $('.of-o'),
    logoOfF = $('.of-f'),
    ofBlack = $('.of-black'),
    ofWhite = $('.of-white'),
    
    logoTransitionActive = false,
    
    gradientDuration = 1000,
    pieceDuration = 500,
    pieceDelay = 0,
    frontPieceDelay = 0,
    backPieceDelay = 0,
    
    textBody = $('.text-body'),
    textBodyInner = $('.text-body-inner'),
    textBodyInnerString = 'text-body-inner',
    textBodyInnerFindString = '.text-body-inner',

    letter = $('.letter'),
    loadingLetter = $('.loading-letter'),
    
    logoTop = ((($(window).height() * 0.5) - (logo.height() / 2))) - (logoClickRegion.height() - logo.height()),
    logoDistanceFromTop = (($(window).height() * 0.5) - (logo.height() / 2)),
    bodyContentMinHeight = ($(window).height() * 0.6) - 100,
    spaceFromTopToContent = ($(window).height() - bodyContentMinHeight) / 2,
    logoTranslateYFirst = 0,
    logoTranslateYSecond = logoTranslateYFirst / 2,
    bodyTranslateY = logoTranslateYFirst / 2,
    currentLogoTranslateY = logoTranslateYFirst,
    bodyDistanceFromTop = logoTop - logoTranslateYSecond,
    
    croppedVideo = $('.cropped-video'),
    
    soon = $('.soon'),

    navCircleContainer = $('.nav-circle-container'),
    nav = $('.nav'),
    navCircle = $('.nav-circle'),

    homeBackground = $('.home-bg'),

    textBodyContainer = $('.text-body-container'),
    
    svgHeader = $('.svg-header'),
    
    bodyContent = $('.body-content'),
    aboutBody = $('.about-body'),
    aboutBodyContent = $('.about-body-content'),
    workBody = $('.work-body'),
    workBodyContent = $('.work-body-content'),
    philosophyBody = $('.philosophy-body'),
    philosophyBodyContent = $('.philosophy-body-content'),
    contactBody = $('.contact-body'),
    contactBodyContent = $('.contact-body-content'),
    
    textBodyBackground = $('.text-body-bg'),
    textBodyBackgroundString = 'text-body-bg',
    textBodyBackgroundFindString = '.text-body-bg',

    strokeOuterContainer = $('.stroke-outer-container'),
    aboutStrokeOuterContainer = $('.about-stroke-outer-container'),
    workStrokeOuterContainer = $('.work-stroke-outer-container'),
    philosophyStrokeOuterContainer = $('.philosophy-stroke-outer-container'),
    contactStrokeOuterContainer = $('.contact-stroke-outer-container'),
    
    strokeContainer = $('.stroke-container'),
    stroke = $('.stroke'),
    topStrokeContainer = $('.top-stroke-container'),
    topStrokeContainerString = 'top-stroke-container',
    topStrokeContainerFindString = '.top-stroke-container',
    topStroke = $('.top-stroke'),
    topStrokeString = 'top-stroke',
    topStrokeFindString = '.top-stroke',
    topStrokeInner = $('.top-stroke-inner'),
    topStrokeInnerString = 'top-stroke-inner',
    topStrokeInnerFindString = '.top-stroke-inner',
    bottomStrokeContainer = $('.bottom-stroke-container'),
    bottomStrokeContainerString = 'bottom-stroke-container',
    bottomStrokeContainerFindString = '.bottom-stroke-container',
    bottomStroke = $('.bottom-stroke'),
    bottomStrokeString = 'bottom-stroke',
    bottomStrokeFindString = '.bottom-stroke',
    bottomStrokeInner = $('.bottom-stroke-inner'),
    bottomStrokeInnerString = 'bottom-stroke-inner',
    bottomStrokeInnerFindString = '.bottom-stroke-inner',
    leftStrokeContainer = $('.left-stroke-container'),
    leftStrokeContainerString = 'left-stroke-container',
    leftStrokeContainerFindString = '.left-stroke-container',
    leftStroke = $('.left-stroke'),
    leftStrokeString = 'left-stroke',
    leftStrokeFindString = '.left-stroke',
    leftStrokeInner = $('.left-stroke-inner'),
    leftStrokeInnerString = 'left-stroke-inner',
    leftStrokeInnerFindString = '.left-stroke-inner',
    rightStrokeContainer = $('.right-stroke-container'),
    rightStrokeContainerString = 'right-stroke-container',
    rightStrokeContainerFindString = '.right-stroke-container',
    rightStroke = $('.right-stroke'),
    rightStrokeString = 'right-stroke',
    rightStrokeFindString = '.right-stroke',
    rightStrokeInner = $('.right-stroke-inner'),
    rightStrokeInnerString = 'right-stroke-inner',
    rightStrokeInnerFindString = '.right-stroke-inner',
    
    strokeBackgroundActive = false,

    strokeBackgroundOuterContainer = $('.stroke-bg-outer-container'),
    strokeBackgroundInnerContainer = $('.stroke-bg-inner-container'),
    strokeBackgroundInnerContainerString = 'stroke-bg-inner-container',
    strokeBackgroundInnerContainerFindString = '.stroke-bg-inner-container',
    strokeBackgroundContainer = $('.stroke-bg-container'),
    strokeBackground = $('.stroke-bg'),
    topStrokeBackgroundContainer = $('.top-stroke-bg-container'),
    topStrokeBackground = $('.top-stroke-bg'),
    topStrokeBackgroundInner = $('.top-stroke-bg-inner'),
    bottomStrokeBackgroundContainer = $('.bottom-stroke-bg-container'),
    bottomStrokeBackground = $('.bottom-stroke-bg'),
    bottomStrokeBackgroundInner = $('.bottom-stroke-bg-inner'),
    leftStrokeBackgroundContainer = $('.left-stroke-bg-container'),
    leftStrokeBackground = $('.left-stroke-bg'),
    leftStrokeBackgroundInner = $('.left-stroke-bg-inner'),
    rightStrokeBackgroundContainer = $('.right-stroke-bg-container'),
    rightStrokeBackground = $('.right-stroke-bg'),
    rightStrokeBackgroundInner = $('.right-stroke-bg-inner'),

    topStrokeBackgroundContainerString = 'top-stroke-bg-container',
    bottomStrokeBackgroundContainerString = 'bottom-stroke-bg-container',
    leftStrokeBackgroundContainerString = 'left-stroke-bg-container',
    rightStrokeBackgroundContainerString = 'right-stroke-bg-container',

    homeLink = $('.home-link'),
    homeLinkString = 'home-link',
    aboutLink = $('.about-link'),
    aboutLinkString = 'about-link',
    workLink = $('.work-link'),
    workLinkString = 'work-link',
    philosophyLink = $('.philosophy-link'),
    philosophyLinkString = 'philosophy-link',
    contactLink = $('.contact-link'),
    contactLinkString = 'contact-link',

    navActive = $('.nav-active'),
    navActiveString = 'nav-active',
    navInactive = $('.nav-inactive'),
    navInactiveString = 'nav-inactive',

    navCircleGlow = $('.nav-circle-glow'),
    navCircleGlowString = 'nav-circle-glow',
    navCircleGlowFindString = '.nav-circle-glow',

    navHoverRegion = $('.nav-hover-region'),
    homeRegion = $('.home-region'),
    homeRegionString = 'home-region',
    aboutRegion = $('.about-region'),
    aboutRegionString = 'about-region',
    workRegion = $('.work-region'),
    workRegionString = 'work-region',
    philosophyRegion = $('.philosophy-region'),
    philosophyRegionString = 'philosophy-region',
    contactRegion = $('.contact-region'),
    contactRegionString = 'contact-region',

    navText = $('.nav-text'),
    homeText = $('.home-text'),
    homeTextHtml = 'Home',
    aboutText = $('.about-text'),
    aboutTextHtml = 'About',
    workText = $('.work-text'),
    workTextHtml = 'Work',
    philosophyText = $('.philosophy-text'),
    philosophyTextHtml = 'Philosophy',
    contactText = $('.contact-text'),
    contactTextHtml = 'Contact',

    newHomeText = '',
    newAboutText = '',
    newWorkText = '',
    newPhilosophyText = '',
    newContactText = '',

    linkLetter = $('.link-letter'),

    homeLinkLetter = '',
    aboutLinkLetter = '',
    workLinkLetter = '',
    philosophyLinkLetter = '',
    contactLinkLetter = '',

    linkLetterFindString = '.link-letter',
    homeLinkLetterWidth = '',
    aboutLinkLetterWidth = '',
    workLinkLetterWidth = '',
    philosophyLinkLetterWidth = '',
    contactLinkLetterWidth = '',
    linkLetterLength = '',
    homeLinkLetterLength = '',
    aboutLinkLetterLength = '',
    workLinkLetterLength = '',
    philosophyLinkLetterLength = '',
    contactLinkLetterLength = '',

    zeroDegrees = '0deg',

    navLinkEndDelay = '',

    homeIntervalActive = false,
    aboutIntervalActive = false,
    workIntervalActive = false,
    philosophyIntervalActive = false,
    contactIntervalActive = false,
    
    pageBackgroundContainer = $('.page-background-container'),
    pageBackgroundBlackFadeover = $('.page-background-container-black-fadeover'),
    
    pageBackground = $('.page-background'),
    pageBackgroundString = 'page-background',
    pageBackgroundFindString = '.page-background',
    
    activeBackground = $('.active-background'),
    activeBackgroundString = 'active-background',
    activeBackgroundFindString = '.active-background',
    
    previousBackground = $('.previous-background'),
    previousBackgroundString = 'previous-background',
    previousBackgroundFindString = '.previous-background',
    
    aboutBackground = $('.about-background'),
    workBackground = $('.work-background'),
    philosophyBackground = $('.philosophy-background'),
    contactBackground = $('.contact-background'),
    
    backgroundImage = $('.background-image'),
    backgroundImageString = 'background-image',
    backgroundImageFindString = '.background-image',
    
    aboutBackgroundImage = $('.about-background-image'),
    workBackgroundImage = $('.work-background-image'),
    philosophyBackgroundImage = $('.philosophy-background-image'),
    contactBackgroundImage = $('.contact-background-image'),
    
    blackRGBHex = '#000000',
    blackRGBRed = 0,
    blackRGBGreen = 0,
    blackRGBBlue = 0,
    blackRGBAlpha = '100%',
    
    whiteRGBHex = '#ffffff',
    whiteRGBRed = 255,
    whiteRGBGreen = 255,
    whiteRGBBlue = 255,
    whiteRGBAlpha = '100%',
    
    purpleRGBHex = '#E1D8FF',
    purpleRGBRed = 225,
    purpleRGBGreen = 216,
    purpleRGBBlue = 255,
    purpleRGBAlpha = '100%',
    
    blueRGBHex = '#7DB9E8',
    blueRGBRed = 125,
    blueRGBGreen = 185,
    blueRGBBlue = 232,
    blueRGBAlpha = '100%',
    
    greenRGBHex = '#77ebcc',
    greenRGBRed = 119,
    greenRGBGreen = 235,
    greenRGBBlue = 204,
    greenRGBAlpha = '100%',

    strokeMarkup = '',

    strokeDirections = ['top', 'bottom', 'left', 'right'],
    topStrokeInnerContent = [
    '<div class="top-stroke-bg-inner first"></div>' +
    '<div class="top-stroke-bg-inner white-fade-bottom middle"></div>' +
    '<div class="top-stroke-bg-inner white-fade-top last"></div>',

    '<div class="bottom-stroke-bg-inner white-fade-bottom last"></div>' +
    '<div class="bottom-stroke-bg-inner white-fade-top middle"></div>' +
    '<div class="bottom-stroke-bg-inner first"></div>',

    '<div class="left-stroke-bg-inner first"></div>' +
    '<div class="left-stroke-bg-inner white-fade-right middle"></div>' +
    '<div class="left-stroke-bg-inner white-fade-left last"></div>',

    '<div class="right-stroke-bg-inner white-fade-right last"></div>' +
    '<div class="right-stroke-bg-inner white-fade-left middle"></div>' +
    '<div class="right-stroke-bg-inner first"></div>',
    ],
    randomStroke = '',

    breakQueue = false,
    falseQueue = false,

    homeTextInterval = '',
    aboutTextInterval = '',
    workTextInterval = '',
    philosophyTextInterval = '',
    contactTextInterval = '',
    
    chromeClosed = false,
    
    chromeMessage = $('.chrome-message'),
    chromeClose = $('.chrome-close'),
    
    headerStaggerIn = $('.header-stagger-in'),
    headerStaggerInString = 'header-stagger-in',
    headerStaggerInFindString = '.header-stagger-in',
    
    paragraphStaggerIn = $('.paragraph-stagger-in'),
    paragraphStaggerInString = 'paragraph-stagger-in',
    paragraphStaggerInFindString = '.paragraph-stagger-in',

    randomOpacity = Math.random(),
    randomOpacity2 = Math.random(),

    whichDuration = [10000, 9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000],
    whichDelay = [0, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000],
    whichEase = ['easeInQuad', 'easeOutQuad', 'easeInQuart', 'easeOutQuart', 'easeInOutQuint', 'easeOutQuint', 'easeInOutCirc', 'swing'],
    whichEaseOld = ['easeInOutQuad', 'easeInQuad', 'easeOutQuad', 'easeInOutCirc', 'easeInCirc', 'easeOutCirc', 'easeInOutExpo', 'easeInExpo', 'easeOutExpo'],

    whichDuration2 = [10000, 9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000],
    whichDelay2 = [0, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000],
    whichEase2 = ['easeInQuad', 'easeOutQuad', 'easeInQuart', 'easeOutQuart', 'easeInOutQuint', 'easeOutQuint', 'easeInOutCirc', 'swing'],
    whichEase2Old = ['easeInOutQuad', 'easeInQuad', 'easeOutQuad', 'easeInOutCirc', 'easeInCirc', 'easeOutCirc', 'easeInOutExpo', 'easeInExpo', 'easeOutExpo'],

    pageIndex = 0,

    strokeComplete = false,
    strokeInMotion = false,

    strokeBackgroundComplete = false,
    strokeBackgroundInMotion = false,

    strokeBackgroundPatternComplete = false,
    strokeBackgroundPatternInMotion = false,

    videoActions = '',
    videoAnimations = '',

    aboutContainer = $('.about-container'),
    aboutContainerBackground = $('.about-container-bg'),

    workContainer = $('.work-container'),
    workContainerBackground = $('.work-container-bg'),

    philosophyContainer = $('.philosophy-container'),
    philosophyContainerBackground = $('.philosophy-container-bg'),

    contactContainer = $('.contact-container'),
    contactContainerBackground = $('.contact-container-bg'),

    liveSection = $('.live-section'),
    liveSectionString = 'live-section',
    liveSectionFindString = '.live-section',

    messageContainer = $('.message-container'),
    messageContent = $('.message-content'),
    messageContentInnerGlow = $('.message-content-inner-glow'),
    messageIntro = $('.message-intro'),
    inner = $('.inner'),
    outer = $('.outer'),
    messageBackground = $('.message-bg'),
    messageBackgroundGradient = $('.message-bg-gradient'),
    messageBackgroundGradientString = 'message-bg-gradient',
    messageBackgroundGradientFindString = 'div .message-bg-gradient',
    activeGradient = $('.active-gradient'),
    activeGradientString = 'active-gradient',
    breakDelay = 2500,
    navDelay = 2500,

    grayscaleVideo = $('.grayscale-video'),

    currentGradient = '',
    nextGradientIndex = '',

    vid0 = $('#vid0'),
    vid1 = $('#vid1'),
    vid2 = $('#vid2'),

    i = 0,

    firstGradient = messageBackgroundGradient.eq(0),

    gradientDelayIncrement = gradientDelay += 1000,

    gradientSpeed = 1000,
    gradientDelayInitial = 0,
    gradientDelay = 1000,
    gradientCount = messageBackgroundGradient.length,
    gradientSpeedTotal = gradientSpeed * (gradientCount - 1),

    remainingMessageSpace = '',
    logoWidth = '',
    logoHorizontalAlign = '',

    bluePurple = $('.top-blue-to-bottom-purple'),
    brownOrange = $('.top-brown-to-bottom-orange'),
    navActions,
    navAnimations;