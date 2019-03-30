var 

    //ANIMATION PROPERTIES
        
    //DURATIONS
    headerInitialDuration = 1000,
    imageInitialDuration = 3000,
    backgroundInitialDuration = 3000,
    imageInitialOpacityDuration = 1000,
    imageInitialOpacityDuration = 1000,
    backgroundInitialOpacityDuration = 1000,
    
    slideHeaderDuration = 750,
    imageSlideDuration = 1500,
    imageSlideOpacityDuration = 1000,
    lastNameColorDuration = 500,
    
    pageSlideDuration = 1000,
    pageExpandDuration = 1000,
        
    portfolioCloseDuration = pageExpandDuration,
    
    menuItemHoverDuration = 250,
        
    portfolioCategoryFlyInDuration = 1000,
        
    portfolioTileFlyInDuration = 500,
    portfolioTileFlyOutDuration = 1000,
        
    portfolioTileTouchOnDuration = 250,
    portfolioTileTouchOffDuration = 250,
    portfolioTileTouchOnScaleDuration = 250,
    portfolioTileTouchOffScaleDuration = 250,
        
    portfolioCategoryFlyInColorDuration = 500,
        
    portfolioTileFlyInColorDuration = 500,
    
    noDuration = 0,
        
    //DELAYS
    headerInitialDelay = 5000,
    imageInitialOpacityDelay = 1000,
    imageForegroundInitialOpacityDelay = 1250,
    imageSlideOpacityDelay = 250,
    middleBackgroundOpacitySlideUpDelay = 100,
    portfolioTileDelayInitial = 500,
    portfolioTileDelay = portfolioTileDelayInitial,
        
    //EASES
    imageInitialEase = 'easeOutQuad',
    backgroundInitialEase = 'easeInOutQuad',
    slideHeaderEase = 'easeInOutQuart',
    imageSlideEase = 'easeOutQuad',
    backgroundSlideEase = 'easeInOutQuad',
    
    pageExpandEaseSlideUp = 'easeOutQuart',
    pageExpandEaseSlideDown = 'easeInOutQuad',
    portfolioCloseEaseSlideUp = pageExpandEaseSlideUp,
    portfolioCloseEaseSlideDown = pageExpandEaseSlideDown,
    headerEaseSlideUp = 'easeOutQuart',
    headerEaseSlideDown = 'easeInOutQuad',
    
    pageSlideEase = 'easeInOutQuart',
    
    menuTouchOnEase = 'easeOutQuad',
    menuTouchOffEase = 'easeInQuad',
        
    portfolioTileLoadInEase = 'easeOutQuart',
    portfolioTileLoadOutEase = 'swing',
        
    portfolioTileFlyInEase = 'spring',
    portfolioTileFlyOutEase = 'swing',
        
    portfolioTileTouchOnEase = 'easeOutQuart',
    portfolioTileTouchOffEase = 'easeInQuart',
    portfolioTileTouchOnScaleEase = 'easeOutQuart',
    portfolioTileTouchOffScaleEase = 'easeInQuart',
        
    portfolioTileFlyInColorEase = 'easeInQuart',
        
    //PAGE COLORS
    aboutColorPrimary = '#fa2e61',
    resumeColorPrimary = '#68b107',
    portfolioColorPrimary = '#fa37ff',
    contactColorPrimary = '#f98717',
    
    genericColorPrimary = '#ffffff',
    
    //SCALE
    scaleStart = 1.3,
    scaleEnd = 1,
        
    portfolioTileScaleStart = 0.5,
    portfolioTileScaleEnd = 1,
        
    portfolioTileTouchOnScaleStart = 1,
    portfolioTileTouchOnScaleEnd = 1.25,
    
    //TRANSLATE X
    portfolioTileTranslateXStart = '50vw',
    portfolioTileTranslateXEnd = '0vw',
    
    //TRANSLATE Y
    headerTranslateYStart = '10vh',
    headerTranslateYEnd = '0vh',
    headerSiblingsTranslateY = '-10vh',
    foregroundImageTranslateYStart = '75vw',
    foregroundImageTranslateYEnd = '0vw',
    middleBackgroundTranslateYStart = '20vw',
    middleBackgroundTranslateYEnd = '0vw',
        
    portfolioCategoryTranslateYStart = '15vh',
    portfolioCategoryTranslateYEnd = '0vh',
        
    portfolioTileTranslateYStart = '50vh',
    portfolioTileTranslateYEnd = '0vh',
    
    //TRANSLATE Z
    portfolioTileTranslateZStart = '450px',
    portfolioTileTranslateZEnd = '0px',
    
    menuTranslateYSlideUp = '32vw',
    menuTranslateYSlideDown = '0vw',
    headerTranslateYSlideUp = '-12vh',
    headerTranslateYSlideDown = '0vh',
    bennettContainer2TranslateYSlideUp = '32vw',
    bennettContainer2TranslateYSlideDown = '0vw',
    bodyTranslateYSlideUp = '-100vh',
    bodyTranslateYSlideDown = '0vh',
    foregroundImageTranslateYSlideUp = '42vw',
    foregroundImageTranslateYSlideDown = '0vw',
    middleBackgroundTranslateYSlideUp = '-8vh',
    middleBackgroundTranslateYSlideDown = '0vh',
    
    desertRocksTranslateYStart = '75vw',
    desertRocksTranslateYEnd = '20vw',
    desertRocksTranslateYSlideUp = '62vw',
    desertRocksTranslateYSlideDown = '20vw',
    desertBackdropTranslateYStart = '10vw',
    desertBackdropTranslateYEnd = '0vw',
    desertBackdropTranslateYSlideUp = '-8vh',
    desertBackdropTranslateYSlideDown = '0vw',
    
    backgroundSkyTranslateYStart = '-10vw',
    backgroundSkyTranslateYEnd = '0vw',
    
    pageExpandTranslateYSlideUp = '-12vh',
    pageExpandTranslateYSlideDown = '0vh',
    
    portfolioCloseTranslateYSlideUp = pageExpandTranslateYSlideUp,
    portfolioCloseTranslateYSlideDown = pageExpandTranslateYSlideDown,
    
    //ROTATE X
    portfolioTileRotateXStart = '25deg',
    portfolioTileRotateXEnd = '0.1deg',
    
    //ROTATE Y
    portfolioTileRotateYStart = '25deg',
    portfolioTileRotateYEnd = '0.1deg',
    
    //ROTATE Z
    pageExpandIconRotateZSlideUp = '135deg',
    pageExpandIconRotateZSlideDown = '0.1deg',
    portfolioCloseIconRotateZSlideUp = pageExpandIconRotateZSlideUp,
    portfolioCloseIconRotateZSlideDown = pageExpandIconRotateZSlideDown,
        
    portfolioTileRotateZStart = '90deg',
    portfolioTileRotateZEnd = '0.1deg',
    
    //OPACITY
    activeMenuItemOpacityStart = 1,
    activeMenuItemOpacityEnd = 0.5,
    genericMenuItemOpacity = 0.1,
    activeMenuItemBorderAlpha = 1,
    genericMenuItemBorderAlpha = 0.5,
        
    portfolioTileOpacityStart = 0,
    portfolioTileOpacityEnd = 1,
    portfolioTileOpacityTouchOn = 1,
    portfolioTileOpacityTouchOff = 0.5,
    
    
    loadingContainer = $('.loading-container'),
    loadingTrackbar = $('#loading-trackbar'),
    loadingTrackbarActive = $('.loading-trackbar-active'),
    loadingTrackbarActiveString = 'loading-trackbar-active',
    container = $('.container'),
    contentContainer = $('.content-container'),
    content = $('.content'),
    contentBody = $('.content-body'),
    
    backgroundImageContainer = $('.background-image-container'),
    backgroundImageSection = $('.background-image-section'),
    aboutSection = $('.about-section'),
    resumeSection = $('.about-section'),
    portfolioSection = $('.about-section'),
    contactSection = $('.about-section'),
    backgroundImage = $('.background-image'),
    sky = $('.sky'),
    backgroundContainer = $('.background-container'),
    backgroundContainerString = 'background-container',
    backgroundContainerSiblingsString = '.background-container',
    background = $('.background'),
    foregroundContainer = $('.foreground-container'),
    foregroundContainerString = 'foreground-container',
    foregroundContainerSiblingsString = '.foreground-container',
    foregroundContainer = $('.foreground-container'),
    foreground = $('.foreground'),
    foreground2Container = $('.foreground2-container'),
    foreground2 = $('.foreground2'),
    scape2 = $('#scape2'),
    lightsTexture = $('#lights-texture'),
    buildings = $('#buildings'),
    
    bioCache = $('.bio-cache'),
    
    logo = $('.logo'),
    firstName = $('.first-name'),
    lastName = $('.last-name'),
    
    menuContainer = $('.menu-container'),
    
    scrollTop = $(window).scrollTop(),
    
    lineLight = $('.line-light'),
    aboutColor1 = $('.about-color1'),
    aboutColor2 = $('.about-color2'),
    aboutColor3 = $('.about-color3'),
    aboutColor4 = $('.about-color4'),
    aboutColor5 = $('.about-color5'),
    aboutColor6 = $('.about-color6'),
    
    menuItem = $('.menu-item'),
    menuItemSelector = $('.menu-item-selector'),
    menuItemWidth = menuItem.width(),
    menuItemCount = menuItem.length,
    menuItemTotalWidth = menuItemCount * menuItemWidth,
    currentMenuItem = '',
    
    aboutContent = $('.about-content'),
    aboutContentFirst = $('.about-content-first'),
    
    menuItemSelectorDuration = 250,
    menuItemSelectorEase = 'easeOutCirc',
    
    catDelayInitial = 0,
    catDelay = 2600,
    
    menuItemDelay = 1500,
    
    contentHeader = $('.content-header'),
    
    contentParagraph = $('.content-paragraph'),
    aboutParagraph = $('.about-paragraph'),
    
    contentParagraphText = contentParagraph.eq(0).find('p'),
    
    headerContainer = $('.header-container'),
    aboutHeaderContainer = $('.about-header-container'),
    
    headerLine = $('.header-line'),
    
    aboutBackgroundImages = $('.about-bg'),
    resumeBackgroundImages = $('.resume-bg'),
    portfolioBackgroundImages = $('.portfolio-bg'),
    contactBackgroundImages = $('.contact-bg'),
    
    portfolioCategoryTempContainer = $('.portfolio-category-temp-container'),
    
    portfolioCategory = $('.portfolio-category'),
    portfolioCategoryText = $('.portfolio-category-text'),
    
    contactFormTempContainer = $('.contact-form-temp-container'),
    
    contentBodyInner = $('.content-body-inner'),
    smartContainer = $('.smart-container'),
    smartForm = $('#smart-form'),
    smartForms = $('.smart-forms'),
    formBody = $('.form-body'),
    section = $('.section'),
    contactField = $('.section input'),
    
    foregroundAbout = $('.foreground-about'),
    foregroundAboutString = 'foreground-about',
    foregroundAboutSiblingsString = '.foreground-about',
    backgroundAbout = $('.background-about'),
    backgroundAboutString = 'background-about',
    backgroundAboutSiblingsString = '.background-about',
    foregroundResume = $('.foreground-resume'),
    foregroundResumeString = 'foreground-resume',
    foregroundResumeSiblingsString = '.foreground-resume',
    backgroundResume = $('.background-resume'),
    backgroundResumeString = 'background-resume',
    backgroundResumeSiblingsString = '.background-resume',
    foregroundPortfolio = $('.foreground-portfolio'),
    foregroundPortfolioString = 'foreground-portfolio',
    foregroundPortfolioSiblingsString = '.foreground-portfolio',
    backgroundPortfolio = $('.background-portfolio'),
    backgroundPortfolioString = 'background-portfolio',
    backgroundPortfolioSiblingsString = '.background-portfolio',
    foregroundContact = $('.foreground-contact'),
    foregroundContactString = 'foreground-contact',
    foregroundContactSiblingsString = '.foreground-contact',
    backgroundContact = $('.background-contact'),
    backgroundContactString = 'background-contact',
    backgroundContactSiblingsString = '.background-contact',
    
    backgroundImageInactive = $('.background-image-inactive'),
    backgroundImageInactiveString = 'background-image-inactive',
    backgroundImageInactiveSiblingsString = '.background-image-inactive',
    
    backgroundImageActive = $('.background-image-active'),
    backgroundImageActiveString = 'background-image-active',
    backgroundImageActiveSiblingsString = '.background-image-active',
    
    backgroundSkyInactive = $('.background-sky-inactive'),
    backgroundSkyInactiveString = 'background-sky-inactive',
    backgroundSkyInactiveSiblingsString = '.background-sky-inactive',
    
    backgroundSkyActive = $('.background-sky-active'),
    backgroundSkyActiveString = 'background-sky-active',
    backgroundSkyActiveSiblingsString = '.background-sky-active',
    
    backgroundColor = $('.background-color'),
    
    backgroundTransparent = 'transparent',
    
    firstNameDark = '#000000',
    firstNameLight = '#ffffff',
    
    lightColorAbout = '#ffffff',
    lessLightColorAbout = '#efefef',
    darkColorAbout = '#000000',
    lessDarkColorAbout = '#373737',
    
    bioBackgroundColorAbout = lessLightColorAbout,
    headerLineColorAbout = darkColorAbout,
    firstHeaderColorAbout = darkColorAbout,
    secondHeaderColorAbout = darkColorAbout,
    firstHeaderBackgroundColorAbout = lightColorAbout,
    secondHeaderBackgroundColorAbout = lightColorAbout,
    firstParagraphColorAbout = lightColorAbout,
    secondParagraphColorAbout = darkColorAbout,
    firstParagraphBackgroundColorAbout = darkColorAbout,
    secondParagraphBackgroundColorAbout = lightColorAbout,
    backgroundColorAbout = '#82ccff',
    backgroundColorAboutRed = 130,
    backgroundColorAboutGreen = 204,
    backgroundColorAboutBlue = 255,
    backgroundColorAboutAlpha = '100%',
    
    lightColorResume = '#fffca9',
    lessLightColorResume = '#e1de8b',
    darkColorResume = '#191919',
    lessDarkColorResume = '#646464',
    
    bioBackgroundColorResume = lessLightColorResume,
    headerLineColorResume = darkColorResume,
    firstHeaderColorResume = darkColorResume,
    secondHeaderColorResume = darkColorResume,
    firstHeaderBackgroundColorResume = lightColorResume,
    secondHeaderBackgroundColorResume = lightColorResume,
    firstParagraphColorResume = lightColorResume,
    secondParagraphColorResume = darkColorResume,
    firstParagraphBackgroundColorResume = darkColorResume,
    secondParagraphBackgroundColorResume = lightColorResume,
    backgroundColorResume = '#000000',
    backgroundColorResumeRed = 0,
    backgroundColorResumeGreen = 0,
    backgroundColorResumeBlue = 0,
    backgroundColorResumeAlpha = '100%',
    
    lightColorPortfolio = '#fec7fe',
    lessLightColorPortfolio = '#e4a3e4',
    darkColorPortfolio = '#29019f',
    lessDarkColorPortfolio = '#5b26f7',
    
    bioBackgroundColorPortfolio = lessLightColorPortfolio,
    headerLineColorPortfolio = darkColorPortfolio,
    firstHeaderColorPortfolio = darkColorPortfolio,
    secondHeaderColorPortfolio = darkColorPortfolio,
    firstHeaderBackgroundColorPortfolio = lightColorPortfolio,
    secondHeaderBackgroundColorPortfolio = lightColorPortfolio,
    firstParagraphColorPortfolio = lightColorPortfolio,
    secondParagraphColorPortfolio = darkColorPortfolio,
    firstParagraphBackgroundColorPortfolio = darkColorPortfolio,
    secondParagraphBackgroundColorPortfolio = lightColorPortfolio,
    backgroundColorPortfolio = '#1d0a38',
    backgroundColorPortfolioRed = 29,
    backgroundColorPortfolioGreen = 10,
    backgroundColorPortfolioBlue = 56,
    backgroundColorPortfolioAlpha = '100%',
    
    lightColorContact = '#ffe7a1',
    lessLightColorContact = '#ddc682',
    darkColorContact = '#3c7e06',
    lessDarkColorContact = '#64c019',
    
    bioBackgroundColorContact = lessLightColorContact,
    headerLineColorContact = darkColorContact,
    firstHeaderColorContact = darkColorContact,
    secondHeaderColorContact = darkColorContact,
    firstHeaderBackgroundColorContact = lightColorContact,
    secondHeaderBackgroundColorContact = lightColorContact,
    firstParagraphColorContact = lightColorContact,
    secondParagraphColorContact = darkColorContact,
    firstParagraphBackgroundColorContact = darkColorContact,
    secondParagraphBackgroundColorContact = lightColorContact,
    backgroundColorContact = '#fbeaff',
    backgroundColorContactRed = 251,
    backgroundColorContactGreen = 234,
    backgroundColorContactBlue = 255,
    backgroundColorContactAlpha = '100%',
        
    portfolioTileHeaders = $('.portfolio-tile-headers'),
    portfolioTileHeader = $('.portfolio-tile-header'),
    portfolioTileHeadersString = 'portfolio-tile-headers',
    portfolioTileHeaderString = 'portfolio-tile-header',
    portfolioTileHeadersActive = $('.portfolio-tile-headers-active'),
    portfolioTileHeadersActiveString = 'portfolio-tile-headers-active',
    portfolioTileHeaderActive = $('.portfolio-tile-header-active'),
    portfolioTileHeaderActiveString = 'portfolio-tile-header-active',
        
    websitesHeader = $('.websites-header'),
    javascriptHeader = $('.javascript-header'),
    bannersHeader = $('.banners-header'),
    eblastsHeader = $('.eblasts-header'),
    flyersHeader = $('.flyers-header'),
    brochuresHeader = $('.brochures-header'),
    billboardsHeader = $('.billboards-header'),
        
    drawingsHeader = $('.drawings-header'),
    cartoonsHeader = $('.cartoons-header'),
    lifeHeader = $('.life-header'),
    portraitsHeader = $('.portraits-header'),
        
    pageExpand = $('.page-expand'),
    pageExpandIcon = $('.page-expand h1'),
    tapRegion = $('.tap-region'),
        
    portfolioClose = $('.portfolio-close'),
    portfolioCloseIcon = $('.portfolio-close h1'),
    portfolioCloseTapRegion = $('.portfolio-close-tap-region'),
        
    portfolioCloseActive = $('.portfolio-close-active'),
    portfolioCloseActiveString = 'portfolio-close-active',
        
    aboutHeader = $('.about-header'),
    resumeHeader = $('.resume-header'),
    portfolioHeader = $('.portfolio-header'),
    contactHeader = $('.contact-header'),
        
    portfolioTileContainer = $('.portfolio-tile-container'),
    portfolioTileContainerFade = $('.portfolio-tile-container-fade'),
    portfolioTileContainerBackground = $('.portfolio-tile-container-bg'),
    portfolioTileContainerInner = $('.portfolio-tile-container-inner'),
    portfolioTileColumn = $('.portfolio-tile-column'),
    portfolioTileColumn50 = $('.portfolio-tile-column-50'),
    portfolioTile = '',
    tile = '',
        
    portfolioTileContainerActive = $('.portfolio-tile-container-active'),
    portfolioTileContainerActiveString = 'portfolio-tile-container-active',
        
    portfolioTileContainerFadeActive = $('.portfolio-tile-container-fade-active'),
    portfolioTileContainerFadeActiveString = 'portfolio-tile-container-fade-active',
    portfolioTileContainerBackgroundActive = $('.portfolio-tile-container-bg-active'),
    portfolioTileContainerBackgroundActiveString = 'portfolio-tile-container-bg-active',
        
    currentPortfolioCategory = '',
    currentPortfolioCategoryText = '',
        
    currentPortfolioTile = '',
    currentPortfolioTileTitleH3 = '',
        
    activePortfolioCategory = $('.active-portfolio-category'),
    activePortfolioCategoryString = 'active-portfolio-category',
        
    sitesCategory = $('.sites-category'),
    sitesCategoryString = 'sites-category',
    javascriptCategory = $('.javascript-category'),
    javascriptCategoryString = 'javascript-category',
    bannersCategory = $('.banners-category'),
    bannersCategoryString = 'banners-category',
        
    drawingsCategory = $('.drawings-category'),
    drawingsCategoryString = 'drawings-category',
    cartoonsCategory = $('.cartoons-category'),
    cartoonsCategoryString = 'cartoons-category',
    lifeCategory = $('.life-category'),
    lifeCategoryString = 'life-category',
    portraitsCategory = $('.portraits-category'),
    portraitsCategoryString = 'portraits-category',
        
    eblastsCategory = $('.eblasts-category'),
    eblastsCategoryString = 'eblasts-category',
    flyersCategory = $('.flyers-category'),
    flyersCategoryString = 'flyers-category',
    brochuresCategory = $('.brochures-category'),
    brochuresCategoryString = 'brochures-category',
    billboardsCategory = $('.billboards-category'),
    billboardsCategoryString = 'billboards-category',
    
    zeroDegrees = '0deg',
    
    menuAbout = $('.menu-about'),
    menuAboutString = 'menu-about',
    menuAboutInnerWidth = menuAbout.innerWidth(),
    menuAboutOuterWidth = menuAbout.outerWidth(),
    menuResume = $('.menu-resume'),
    menuResumeString = 'menu-resume',
    menuResumeInnerWidth = menuResume.innerWidth(),
    menuResumeOuterWidth = menuResume.outerWidth(),
    menuPortfolio = $('.menu-portfolio'),
    menuPortfolioString = 'menu-portfolio',
    menuPortfolioInnerWidth = menuPortfolio.innerWidth(),
    menuPortfolioOuterWidth = menuPortfolio.outerWidth(),
    menuContact = $('.menu-contact'),
    menuContactString = 'menu-contact',
    menuContactInnerWidth = menuContact.innerWidth(),
    menuContactOuterWidth = menuContact.outerWidth(),
    
    portfolioClose = $('.portfolio-close'),
    portfolioCloseTapRegion = $('.portfolio-close-tap-region'),
    
    portfolioTileContainer = $('.portfolio-tile-container'),
    portfolioTileContainerInner = $('.portfolio-tile-container-inner'),
    portfolioTile = $('.portfolio-tile'),
    tile = $('.tile'),
    tileTitle = $('.tile-title'),
    
    menuContainerLeftValue = (($(window).width() / 2) - menuItemTotalWidth) + 'px',
    
    bioPicContainer = $('.bio-pic-container'),
    bioPic = $('.bio-pic'),
    
    pageIndex = '',
    
    onAbout = 'on-about',
    onResume = 'on-resume',
    onPortfolio = 'on-portfolio',
    onContact = 'on-contact',
    
    aboutSelectorPositionX = '0px',
    resumeSelectorPositionX = menuAboutInnerWidth + 'px',
    portfolioSelectorPositionX = menuAboutInnerWidth + menuResumeInnerWidth + 'px',
    contactSelectorPositionX = menuAboutInnerWidth + menuResumeInnerWidth + menuPortfolioInnerWidth + 'px'
    ; 
    