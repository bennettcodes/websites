var borderTl = new TimelineMax({
    repeat:-1
});

borderTl.set(topBorder, {
    width: 0,
    top: 0,
    left: 0
});

borderTl.set(leftBorder, {
    height: 0,
    bottom: 0,
    left: 0
});

borderTl.set(rightBorder, {
    height: 0,
    top: 0,
    right: 0
});

borderTl.set(bottomBorder, {
    width: 0,
    bottom: 0,
    right: 0
});

borderTl.to(leftBorder, borderDuration, {
    height: '100%',
    ease: borderEase
}, 0);

borderTl.set(topBorder, {
    top: 0,
    right: 0
});

borderTl.to(leftBorder, borderDuration, {
    height: 0,
    ease: borderEase
}, borderDuration);

borderTl.to(topBorder, borderDuration, {
    width: '100%',
    ease: borderEase
}, 0);

borderTl.set(leftBorder, {
    top: 0,
    left: 0
});

borderTl.to(topBorder, borderDuration, {
    width: 0,
    ease: borderEase
}, borderDuration);

borderTl.to(rightBorder, borderDuration, {
    height: '100%',
    ease: borderEase
}, 0);

borderTl.set(rightBorder, {
    transformOrigin:'bottomLeft'
});

borderTl.to(rightBorder, borderDuration, {
    height: 0,
    ease: borderEase
}, borderDuration);

borderTl.to(bottomBorder, borderDuration, {
    width: '100%',
    ease: borderEase
}, 0);

borderTl.set(bottomBorder, {
    width: '100%',
    bottom: 0,
    left: 0
});

borderTl.to(bottomBorder, borderDuration, {
    width: 0,
    ease: borderEase
}, borderDuration);

borderTl.timeScale(1);