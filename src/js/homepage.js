// Homepage work animation
// ================================================
function initWordAnimation() {
    var words = document.getElementsByClassName('js-word');
    var wordArray = [];
    var currentWord = 0;

    words[currentWord].style.opacity = 1;
    for (var i = 0; i < words.length; i++) {
        splitLetters(words[i]);
    }

    function changeWord() {
        var cw = wordArray[currentWord];
        var nw =
            currentWord == words.length - 1
                ? wordArray[0]
                : wordArray[currentWord + 1];
        for (var i = 0; i < cw.length; i++) {
            animateLetterOut(cw, i);
        }

        for (var i = 0; i < nw.length; i++) {
            nw[i].className = 'letter behind';
            nw[0].parentElement.style.opacity = 1;
            animateLetterIn(nw, i);
        }

        currentWord = currentWord == wordArray.length - 1 ? 0 : currentWord + 1;
    }

    function animateLetterOut(cw, i) {
        setTimeout(function () {
            cw[i].className = 'letter out';
        }, i * 80);
    }

    function animateLetterIn(nw, i) {
        setTimeout(function () {
            nw[i].className = 'letter in';
        }, 340 + i * 80);
    }

    function splitLetters(word) {
        var content = word.innerHTML;
        word.innerHTML = '';
        var letters = [];
        for (var i = 0; i < content.length; i++) {
            var letter = document.createElement('span');
            letter.className = 'letter';
            letter.innerHTML = content.charAt(i);
            word.appendChild(letter);
            letters.push(letter);
        }

        wordArray.push(letters);
    }

    changeWord();
    setInterval(changeWord, 2500);
}

// Homepageslider
// ================================================
$('.js-cTestimonialSlider').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.js-cTestimonialSliderNav',
    cssEase: 'cubic-bezier(.84, 0, .08, .99)',
    vertical: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
});
$('.js-cTestimonialSliderNav').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.js-cTestimonialSlider',
    dots: true,
    centerMode: true,
    fade: true,
    focusOnSelect: true,
    cssEase: 'cubic-bezier(.84, 0, .08, .99)',
    appendDots: $('.slider-dots-box'),
    dotsClass: 'slider-dots',
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
});

// On before slide change
$('.js-cTestimonialSliderNav').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    $('.slider-dots-box button').html('');
}).trigger('beforeChange');

// On before slide change
$('.js-cTestimonialSliderNav').on('afterChange', function(event, slick, currentSlide) {
    $('.slider-dots-box button').html('');
    $('.slider-dots-box .slick-active button')
        .html(`<svg class="progress-svg" width="140" height="140">
                <g transform="translate(0,0)">
                <circle class="circle-go" cx="70" cy="70" r="68" ></circle>
        		</g></svg>`);
}).trigger('afterChange');

// Calling function
// ================================================
$(document).ready(function () {
    initWordAnimation();
});
