headerTl = new TimelineMax();

headerTl.set(header, {
    perspective: 800,
    perspectiveOrigin: 'center',
    transformStyle: 'flat',
    backgroundColor: 'rgba(0, 0, 0, 0.05)'
});

headerTl.from(header, borderDuration * 3, {
    backgroundColor: 'rgba(0, 0, 0, 0)'
}, 0);