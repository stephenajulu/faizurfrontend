// Menu hamburger + Magnet button
// ================================================
$("button.menu-btn__toggleBtn").click(function() {
  $("html").toggleClass("-is-scroll-disable");
  $(".menu .menuNav").toggleClass("hidden");
  $(".menuPanel").toggleClass("menu-open");
  $(this).toggleClass("-active");
});


$(document).ready(function()
{
     $(window).on("resize",function() {
          var bodyheight = $(document).height();
       $(".www-navigation__desktop__menus__top-offset").height(bodyheight);
     });

});


$('.js-btn--effectMagnetic').mouseleave(function(e){
  TweenMax.to(this, 0.3,{scale:1, x: 0, y: 0});
});

$('.js-btn--effectMagnetic').mouseenter(function(e){
  TweenMax.to(this, 0.3,{scale:1, x: 0, y: 0});
});

$('.js-btn--effectMagnetic').mousemove(function(e){
  callParallax(e);
});

function callParallax(e){
  parallaxIt(e, '.menu-btn__toggleBtn', 9);
}

function parallaxIt(e, target, movement){
  var $this = $('.menu-btn__toggleBtn');
  var relX = e.pageX - $this.offset().left;
  var relY = e.pageY - $this.offset().top;

  TweenMax.to(target, 0.3, {
    x: (relX - $this.width()/2) / $this.width() * movement,
    y: (relY - $this.height()/2) / $this.height() * movement,
    ease: Power4.easeOut
  });
}





// Link hover effect + gsap
// ================================================
gsap.defaults({
  duration: 0.4
})
gsap.set([".linkHoverWrap"], {
  visibility: "visible",
  xPercent: -101,
  ease: "power3.inOut"

}); // for 'fouc' sakes

const links = document.querySelectorAll('.js-linkHover'); // create triggers

function enter(hoverEffect) { // mouseenter function
  return gsap.fromTo(hoverEffect, {
    xPercent: -101
  }, {
    xPercent: -40,
    ease: "power3.inOut"
  });
}

function leave(aside) { // mouseleave function
  return gsap.to(aside, {
    xPercent: 101,
    ease: "power4.inOut",
    delay: 0.1
  });
}

links.forEach(function(el) {

  const hoverEffect = el.querySelector('.linkHoverWrap');
  let animation = null;
  let isHovering = false;
  el.addEventListener("mouseenter", onEnter);
  el.addEventListener("mouseleave", onLeave);

  function onEnter() {

    isHovering = true;

    if (!animation) {
      animation = gsap.timeline({
        onComplete: () => {
          animation = null;
          if (!isHovering) {
            onLeave();
          }
        }
      }).add(enter(hoverEffect));
    }
  }

  function onLeave() {
    isHovering = false;

    if (!animation) {

      animation = gsap.timeline({
        onComplete: () => {
          animation = null;
          if (isHovering) {
            onEnter();
          }
        }
      }).add(leave(hoverEffect));
    }
  }

});