// imagesLoaded
imagesLoaded(document.querySelector('body'), function (instance) {
    $('img').addClass('loaded');
});

// Start marquee
$('.marqueeText-root').marquee({
    direction: 'left',
    duration: 20000,
    gap: 0,
    delayBeforeStart: 0,
    duplicated: true,
    startVisible: true
});

