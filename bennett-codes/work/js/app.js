TweenMax.set(nameContainer, {
    perspective: 800,
    perspectiveOrigin: 'center center',
    transformStyle: '2d'
});

$(window).resize(function init() {
    TweenMax.set(codepen, {
        y: itemGroupHeader.height() / 2 - codepen.outerHeight() / 2
    });
    return init;
}());

TweenMax.set(itemGroup.last(), {
    marginBottom: nameContainer.offset().top
});

function createName(name) {

    var nameArr = nameString.split('');
    nameContainer.empty();

    nameArr.map(function (item, i) {
        nameContainer.append(`
            <div class="name-char ${item === ' ' ? 'name-space' : "name-letter"}">${item}</div>
        `);
    });
    nameChar = $('.name-char');

    introTl.set(nameChar, {
        transformOrigin: 'center',
        z: -50,
        y: 10
    });

    introTl.staggerTo(nameChar, 1, {
        z: 0,
        y: 0,
        ease: Back.easeOut.config(5)
    }, 0.025, 0);

    introTl.staggerTo(nameChar, 1, {
        opacity: 1
    }, 0.025, 0);

    introTl.staggerTo(itemGroupHeader, 1, {
        opacity: 1
    }, 0.025, 0.5);

    for (var i = 0; i < itemColumn.length; i++) {
        var currentColumn = itemColumn.eq(i),
            currentColumnItem = currentColumn.find('.item')

        introTl.staggerTo(currentColumnItem, 1, {
            opacity: 1
        }, 0.025, colDelay += colDelayInc);
    }
}

createName(nameString);

item.on('mouseover', function () {
    var current = $(this)

    TweenMax.to(current, 0.5, {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        ease: Expo.easeOut
    }, 0);
});

item.on('touchstart', function () {
    var current = $(this)

    TweenMax.to(current, 0.5, {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        ease: Expo.easeOut
    }, 0);
});

item.on('mouseout', function () {
    var current = $(this)

    TweenMax.to(current, 0.5, {
        backgroundColor: 'rgba(255, 255, 255, 0)',
        ease: Expo.easeOut
    }, 0);
});

item.on('touchend', function () {
    var current = $(this)

    TweenMax.to(current, 0.5, {
        backgroundColor: 'rgba(255, 255, 255, 0)',
        ease: Expo.easeOut
    }, 0);
});

codepen.on('mouseover', function () {
    var current = $(this)

    TweenMax.to(current, 0.5, {
        backgroundColor: '#ffffff',
        color: '#000000',
        ease: Expo.easeOut
    }, 0);
});

codepen.on('mouseout', function () {
    var current = $(this)

    TweenMax.to(current, 0.5, {
        backgroundColor: '#000000',
        color: '#ffffff',
        ease: Expo.easeOut
    }, 0);
});

codepen.on('touchstart', function () {
    var current = $(this)

    TweenMax.to(current, 0.5, {
        backgroundColor: '#ffffff',
        color: '#000000',
        ease: Expo.easeOut
    }, 0);
});

codepen.on('touchend', function () {
    var current = $(this)

    TweenMax.to(current, 0.5, {
        backgroundColor: '#000000',
        color: '#ffffff',
        ease: Expo.easeOut
    }, 0);
});