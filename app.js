const memberDirection = function () {
  // Your code here
};

gsap.registerPlugin(ScrollTrigger);

gsap.to(".member__list", {
  x: -(1000 + window.innerWidth / 2),
  ease: "none",
  scrollTrigger: {
    trigger: ".member",
    pin: ".member__window",
    pinSpacing: false,
    anticipatePin: 1,
    start: "top top",
    end: "bottom+=".concat(window.innerWidth, " bottom"),
    // end: "bottom+=".concat(window.innerWidth, " bottom"),
    scrub: 0.3,
    // start: ScrollTrigger.parsePosition(n.d ? "top top+=20%" : "top bottom"),
  },
});

var e = 0,
  r = 0;
window.addEventListener("scroll", function () {
  var c = window.scrollY;
  (r = c - e),
    (e = c),
    Math.abs(0.5 * r) > 90 ||
      gsap.to(".member__item", {
        rotate: "".concat(-0.5 * r, "deg"),
        duration: 1,
        onComplete: function () {
          gsap.to(".member__item", {
            rotate: 0,
          });
        },
      });
});
