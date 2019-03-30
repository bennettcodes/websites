var
    container = $('#container'),
    nameString = 'Bennett\'s Latest Work',
    nameContainer = $('#name'),
    codepen = $('#codepen'),
    nameChar,
    
    items = $('#items'),
    itemGroup = $('.item-group'),
    itemGroupHeader = $('.item-group-header'),
    itemColumn = $('.item-column'),
    item = $('.item'),
    
    colDelay = 0.5,
    colDelayInc = 0.1,
    
    introTl = new TimelineMax()