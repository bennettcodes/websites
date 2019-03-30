var fullBody = $('body');

var siteImages = $("img");

var portraitPrompt = $('#portrait-prompt');
var portraitPromptText = $('#portrait-prompt-text');
var portraitPromptTextHeader = $('#portrait-prompt-text h6');

var whiteOverlay = $('#white-overlay');
var whiteOverlayText = $('#white-overlay-text');
var whiteOverlayTextHeader6 = $('#white-overlay-text h6');

var outerContainer = $('#outer-container');
var container = $('#container');
var containerBackground = $('.container-bg');

var homeContainerBackground = $('#home-container-bg');
var resumeContainerBackground = $('#resume-container-bg');
var workContainerBackground = $('#work-container-bg');
var contactContainerBackground = $('#contact-container-bg');

var activeContainerBackground = $('.active-container-bg');
var activeContainerBackgroundString = 'active-container-bg';
var activeContainerBackgroundFindString = '.active-container-bg';

var inactiveContainerBackground = $('.inactive-container-bg');
var inactiveContainerBackgroundString = 'inactive-container-bg';
var inactiveContainerBackgroundFindString = '.inactive-container-bg';

var header = $('#header');

var border = $('.border');

var topBorder = $('.top');
var leftBorder = $('.left');
var rightBorder = $('.right');
var bottomBorder = $('.bottom');

var borderDuration = 1;
var horizontalBorderDuration = 1;
var verticalBorderDuration = horizontalBorderDuration / 3;

var menuItem = $('.menu-item');
var sideMenu = $('.side-menu');
var sideItem = $('.side-item');
var sideItemBackground = $('.side-item-bg');
var sideItemBackgroundString = 'side-item-bg';
var sideItemBackgroundFindString = '.side-item-bg';

var sideItemHeight = sideItem.outerHeight();
var sideItemLength = sideItem.length;
var sideMenuHeight = sideItemHeight * sideItemLength;

var sideItemHoverDuration = 0.5;
var menuTrackerRaftDuration = 1;
var activePageDuration = 1;

var borderEase = Circ.easeInOut;
var sideItemHoverEase = Expo.easeOut;
var sideItemHoverColorEase = Expo.easeOut;
var menuTrackerRaftEase = Elastic.easeOut;
var activePageEase = Elastic.easeOut;

var borderEaseTablet = Quart.easeInOut;
var sideItemHoverEaseTablet = Quart.easeOut;
var sideItemHoverColorEaseTablet = Quart.easeOut;
var menuTrackerRaftEaseTablet = Elastic.easeOut;
var activePageEaseTablet = Elastic.easeOut;

var homeItemHoverActive = false;
var resumeItemHoverActive = false;
var workItemHoverActive = false;
var contactItemHoverActive = false;
var closeBtnActive = false;

var homeBackgroundColor = '62,91,196';
var resumeBackgroundColor = '255,0,0';
var workBackgroundColor = '174,77,224';
var contactBackgroundColor = '52,169,46';

var homeBackgroundColorLight = '159,173,226';
var resumeBackgroundColorLight = '255,128,128';
var workBackgroundColorLight = '215,166,240';
var workBorderColorLight = '247,237,252';
var contactBackgroundColorLight = '154,212,151';

var blackColor = 'rgba(0,0,0,1)';
var whiteColor = 'rgba(255,255,255,1)';

var homeBackgroundColorFull = 'rgba' + homeBackgroundColor + ',1)';
var resumeBackgroundColorFull = 'rgba' + resumeBackgroundColor + ',1)';
var workBackgroundColorFull = 'rgba' + workBackgroundColor + ',1)';
var contactBackgroundColorFull = 'rgba' + contactBackgroundColor + ',1)';

var homeBackgroundColorHalf = 'rgba' + homeBackgroundColorLight + ',1)';
var resumeBackgroundColorHalf = 'rgba' + resumeBackgroundColorLight + ',1)';
var workBackgroundColorHalf = 'rgba' + workBackgroundColorLight + ',1)';
var contactBackgroundColorHalf = 'rgba' + contactBackgroundColorLight + ',1)';

var homeBackgroundColorClear = 'rgba' + homeBackgroundColor + ',0)';
var resumeBackgroundColorClear = 'rgba' + resumeBackgroundColor + ',0)';
var workBackgroundColorClear = 'rgba' + workBackgroundColor + ',0)';
var contactBackgroundColorClear = 'rgba' + contactBackgroundColor + ',0)';

var currentColor = homeBackgroundColorHalf;
var currentColorRGB = homeBackgroundColor;
var currentColorClear = homeBackgroundColorClear;

var menuTrackerContainer = $('#menu-tracker-container');
var menuTrackerContainerHeight = sideMenuHeight;

var menuTrackerRaft = $('#menu-tracker-raft');
var menuTrackerRaftHeight = sideItemHeight;

var menuTracker = $('#menu-tracker');

var trackerHomePositionY = 0;
var trackerResumePositionY = sideItemHeight;
var trackerWorkPositionY = sideItemHeight * 2;
var trackerContactPositionY = sideItemHeight * 3;
var mouseOverTl = new TimelineMax();

var pageContainer = $('#page-container');
var pageSection  = $('.page-section');
var home = $('#home');
var resume = $('#resume');
var work = $('#work');
var contact = $('#contact');

var activePageSection = $('.active-page-section');
var activePageSectionString = 'active-page-section';
var activePageSectionFindString = '.active-page-section';

var inactivePageSection = $('.inactive-page-section');
var inactivePageSectionString = 'inactive-page-section';
var inactivePageSectionFindString = '.inactive-page-section';

var activeMasthead = $('.active-masthead');
var activeMastheadString = 'active-masthead';
var activeMastheadFindString = '.active-masthead';

var inactiveMasthead = $('.inactive-masthead');
var inactiveMastheadString = 'inactive-masthead';
var inactiveMastheadFindString = '.inactive-masthead';

var activeMastheadBackground = $('.active-masthead-background');
var activeMastheadBackgroundString = 'active-masthead-background';
var activeMastheadBackgroundFindString = '.active-masthead-background';

var inactiveMastheadBackground = $('.inactive-masthead-background');
var inactiveMastheadBackgroundString = 'inactive-masthead-background';
var inactiveMastheadBackgroundFindString = '.inactive-masthead-background';

var pageIndex = 0;

var isiOS = navigator.userAgent.match(/(iPod|iPhone|iPad)/);

var scrollBar = ('::webkit-scrollbar');

var userInput = $('input');

var textArea = $('textarea');

var formButton = $('button');

var mastheadContainer = $('#masthead-container');

var mastheadBackgroundContainer = $('#masthead-background-container');
var mastheadBackground = $('.masthead-background');
var mastheadHomeBackground = $('#masthead-home-background');
var mastheadResumeBackground = $('#masthead-resume-background');
var mastheadWorkBackground = $('#masthead-work-background');
var mastheadContactBackground = $('#masthead-contact-background');

var masthead = $('.masthead');
var mastheadHeader = $('.masthead h1');

var homeMasthead = $('#home-masthead');
var resumeMasthead = $('#resume-masthead');
var workMasthead = $('#work-masthead');
var contactMasthead = $('#contact-masthead');

var verticalBreak = $('#vertical-break');

var verticalBreakBackgroundContainer = $('#vertical-break-background-container');
var verticalBreakBackground = $('.vertical-break-background');
var verticalBreakHomeBackground = $('#vertical-break-home-background');
var verticalBreakResumeBackground = $('#vertical-break-resume-background');
var verticalBreakWorkBackground = $('#vertical-break-work-background');
var verticalBreakContactBackground = $('#vertical-break-contact-background');

var activeVerticalBreakBackground = $('.active-vertical-break-background');
var activeVerticalBreakBackgroundString = 'active-vertical-break-background';
var activeVerticalBreakBackgroundFindString = '.active-vertical-break-background';

var inactiveVerticalBreakBackground = $('.inactive-vertical-break-background');
var inactiveVerticalBreakBackgroundString = 'inactive-vertical-break-background';
var inactiveVerticalBreakBackgroundFindString = '.inactive-vertical-break-background';

var whiteBar = $('#white-bar');

var categoryContainer = $('#category-container');
var category = $('.category');
var categoryString = 'category';
var categoryFindString = '.category';

var bannersCategory = $('#banners-category');
var billboardsCategory = $('#billboards-category');
var drawingsCartoonsCategory = $('#drawings-cartoons-category');
var drawingsLifeCategory = $('#drawings-life-category');
var drawingsPortraitsCategory = $('#drawings-portraits-category');
var eblastsCategory = $('#eblasts-category');
var flyersBrochuresCategory = $('#flyers-brochures-category');
var javascriptTestsCategory = $('#javascript-tests-category');
var sitesCategory = $('#sites-category');

var categoryClickRegion = $('.category-click-region');

var bannersCategoryRegion = $('#banners-category-region');
var billboardsCategoryRegion = $('#billboards-category-region');
var drawingsCartoonsCategoryRegion = $('#drawings-cartoons-category-region');
var drawingsLifeCategoryRegion = $('#drawings-life-category-region');
var drawingsPortraitsCategoryRegion = $('#drawings-portraits-category-region');
var eblastsCategoryRegion = $('#eblasts-category-region');
var flyersBrochuresCategoryRegion = $('#flyers-brochures-category-region');
var javascriptTestsCategoryRegion = $('#javascript-tests-category-region');
var sitesCategoryRegion = $('#sites-category-region');

var categoryTitle = $('.category-title');
var categoryTitleString = 'category-title';
var categoryTitleFindString = '.category-title';
var categoryTitleLength = categoryTitle.length;
var categoryTitleHeader = $('.category-title h4');
var categoryTitleHeaderString = 'category-title h4';
var categoryTitleHeaderFindString = '.category-title h4';
var Header3 = $('h3');
var Header3String = 'h3';
var Header3FindString = 'h3';
var Header4 = $('h4');
var Header4String = 'h4';
var Header4FindString = 'h4';

var categoryTitleHeaderColorStart = workBackgroundColorHalf;
var categoryTitleHeaderColorFinish = 'rgba(255,255,255,1)';

var currentTitle, currentTitleParent, i;

var categoryThumbCorner = $('.category-thumb-corner');
var categoryThumbCornerString = 'category-thumb-corner';
var categoryThumbCornerFindString = '.category-thumb-corner';
var categoryThumb = $('.category-thumb');
var categoryThumbString = 'category-thumb';
var categoryThumbFindString = '.category-thumb';

var categoryThumbXStart = 0;
var categoryThumbXFinish = '-' + category.width() * 0.1;

var categoryThumbYStart = category.height() * 0.1;
var categoryThumbYFinish = 0;

var categoryThumbScaleStart = 1.2;
var categoryThumbScaleFinish = 1.5;

var categoryThumbCornerXStart = 0;
var categoryThumbCornerXFinish = '-' + category.width();

var categoryThumbCornerYStart = 0;
var categoryThumbCornerYFinish = 0;

var categoryThumbDuration = 0.25;
var categoryThumbCornerDuration = 0.25;
var categoryThumbEaseStart = Quad.easeOut;
var categoryThumbCornerEaseStart = Quad.easeOut;
var categoryThumbEaseEnd = Quad.easeOut;
var categoryThumbCornerEaseEnd = Quad.easeOut;

var siteImage = $('img');

var portfolioItemOverlay = $('#portfolio-item-overlay');
var portfolioItemOverlayInner = $('#portfolio-item-overlay-inner');
var portfolioItemHeaderContainer = $('#portfolio-item-header-container');
var portfolioItemHeader = $('#portfolio-item-header');
var portfolioItemContainer = $('#portfolio-item-container');
var portfolioItem = $('#portfolio-item');

var portfolioActive = $('.portfolio-active');
var portfolioActiveString = 'portfolio-active';
var portfolioActiveFindString = '.portfolio-active';

var portfolioInactive = $('.portfolio-inactive');
var portfolioInactiveString = 'portfolio-inactive';
var portfolioInactiveFindString = '.portfolio-inactive';

var portfolioClose = $('#portfolio-close');
var portfolioCloseString = 'portfolio-close';
var portfolioCloseFindString = '#portfolio-close';
var portfolioCloseClickRegion = $('#portfolio-close-click-region');
var portfolioCloseHeader1 = $('#portfolio-close h1');
var portfolioCloseHeader1String = 'portfolio-close h1';
var portfolioCloseHeader1FindString = '#portfolio-close h1';

var portfolioItemHeader = $('.portfolio-item-header');
var bannersHeader = $('#banners-header');
var billboardsHeader = $('#billboards-header');
var cartoonsHeader = $('#cartoons-header');
var lifeHeader = $('#life-header');
var portraitsHeader = $('#portraits-header');
var eblastsHeader = $('#eblasts-header');
var flyersHeader = $('#flyers-header');
var javascriptHeader = $('#javascript-header');
var sitesHeader = $('#sites-header');

var portfolioItems = $('.portfolio-items');
var portfolioItemsString = 'portfolio-items';
var portfolioItemsFindString = '.portfolio-items';
var bannerItems = $('#banner-items');
var billboardItems = $('#billboard-items');
var cartoonItems = $('#cartoon-items');
var lifeItems = $('#life-items');
var portraitItems = $('#portrait-items');
var eblastItems = $('#eblast-items');
var flyerItems = $('#flyer-items');
var javascriptItems = $('#javascript-items');
var siteItems = $('#site-items');

var portfolioItemHeaderActive = $('.portfolio-item-header-active');
var portfolioItemHeaderActiveString = 'portfolio-item-header-active';
var portfolioItemHeaderActiveFindString = '.portfolio-item-header-active';

var portfolioItemHeaderInactive = $('.portfolio-item-header-inactive');
var portfolioItemHeaderInactiveString = 'portfolio-item-header-inactive';
var portfolioItemHeaderInactiveFindString = '.portfolio-item-header-inactive';

var portfolioItemsActive = $('.portfolio-items-active');
var portfolioItemsActiveString = 'portfolio-items-active';
var portfolioItemsActiveFindString = '.portfolio-items-active';

var portfolioItemsInactive = $('.portfolio-items-inactive');
var portfolioItemsInactiveString = 'portfolio-items-inactive';
var portfolioItemsInactiveFindString = '.portfolio-items-inactive';

var portfolioItemContainer = $('#portfolio-item-container');
var portfolioItem = $('.portfolio-item');
var portfolioItemString = 'portfolio-item';
var portfolioItemFindString = '.portfolio-item';

var scrollY = $('.scroll-y');
var scrollYString = 'scroll-y';
var scrollYFindString = '.scroll-y';

var noScrollY = $('.no-scroll-y');
var noScrollYString = 'no-scroll-y';
var noScrollYFindString = '.no-scroll-y';

var portfolioItemsColumn = $('.portfolio-items-column');
var portfolioItemsColumnString = 'portfolio-items-column';
var portfolioItemsColumnFindString = '.portfolio-items-column';

var temporaryBlockLayer = $('.temp-block-layer');

var resumeColumnContainer = $('#resume-column-container');
var resumeColumn = $('.resume-column');
var resumeRow = $('.resume-row');

var resumeIconsColumn = $('#resume-icons-column');
var resumeSkillsetColumn = $('#resume-skillset-column');
var codeColumn = $('#code-column');
var designColumn = $('#design-column');