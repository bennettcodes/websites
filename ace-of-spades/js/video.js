videoActions = {
    home: {
        fadeIn: function () {
            /*homeContainer.addClass(liveSectionString).velocity({
                opacity:'1'
            }, {
                duration:1000,
                easing:'swing',
                queue:false
            });*/
            homeBackground.velocity({
                opacity: ['1', 'swing','-1'],
                scale: ['1','3']
            }, {
                duration: 2000,
                easing: 'easeInOutQuad',
                queue: false
            });
            messageIntro.velocity({
                opacity: '1'
            }, {
                duration: 1000,
                delay: 1000,
                easing: 'swing',
                queue: false
            });
            croppedVideo.velocity({
                opacity: '1'
            }, {
                duration: 1000,
                easing: 'swing',
                queue: false
            });
        },
        fadeOut: function () {
            /*homeContainer.velocity({
                opacity:'0'
            }, {
                duration:1000,
                easing:'swing',
                delay:1000,
                queue:false
            });*/
            homeBackground.velocity({
                opacity: ['0', 'swing']
            }, {
                duration: 1000,
                easing: 'easeInQuad',
                queue: false
            });
            messageIntro.velocity({
                opacity: '0'
            }, {
                duration: 1000,
                easing: 'swing',
                queue: false
            });
            croppedVideo.velocity({
                opacity: '0'
            }, {
                duration: 1000,
                easing: 'swing',
                queue: false
            });
        }
    },
    about: {
        fadeIn: function () {
            aboutContainer.velocity({
                opacity: '1'
            }, {
                duration: 1000,
                easing: 'swing',
                queue: false
            });
            aboutContainer.velocity({
                translateX: ['-100vw', '-100vw']
            }, {
                duration: 0,
                easing: 'swing',
                queue: false
            });
        },
        fadeOut: function () {
            aboutContainer.velocity({
                opacity: '0'
            }, {
                duration: 1000,
                easing: 'swing',
                queue: false
            });
            /*aboutContainer.velocity({
                translateX: ['0vw', '0vw']
            }, {
                duration: 0,
                delay: 1000,
                easing: 'swing'
            });*/
        }
    },
    work: {
        fadeIn: function () {
            workContainer.velocity({
                opacity: '1',
                translateX: ['-100vw', '-100vw']
            }, {
                duration: 1000,
                easing: 'swing',
                queue: false
            });
        },
        fadeOut: function () {
            workContainer.velocity({
                opacity: '0'
            }, {
                duration: 1000,
                easing: 'swing',
                queue: false
            });
            workContainer.velocity({
                translateX: ['0vw', '0vw']
            }, {
                duration: 0,
                easing: 'swing',
                delay: 1000,
                queue: false
            });
        }
    },
    philosophy: {
        fadeIn: function () {
            philosophyContainer.velocity({
                opacity: '1',
                translateX: ['-100vw', '-100vw']
            }, {
                duration: 1000,
                easing: 'swing',
                queue: false
            });
        },
        fadeOut: function () {
            philosophyContainer.velocity({
                opacity: '0'
            }, {
                duration: 1000,
                easing: 'swing',
                queue: false
            });
            philosophyContainer.velocity({
                translateX: ['0vw', '0vw']
            }, {
                duration: 0,
                easing: 'swing',
                delay: 1000,
                queue: false
            });
        }
    },
    contact: {
        fadeIn: function () {
            contactContainer.velocity({
                opacity: '1',
                translateX: ['-100vw', '-100vw']
            }, {
                duration: 1000,
                easing: 'swing',
                queue: false
            });
        },
        fadeOut: function () {
            contactContainer.velocity({
                opacity: '0'
            }, {
                duration: 1000,
                easing: 'swing',
                queue: false
            });
            contactContainer.velocity({
                translateX: ['0vw', '0vw']
            }, {
                duration: 0,
                easing: 'swing',
                delay: 1000,
                queue: false
            });
        }
    }
};

videoAnimations = {

};