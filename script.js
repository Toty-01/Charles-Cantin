const titreSpans = document.querySelectorAll('h1 span');
const btns = document.querySelectorAll('.btn-first');
const logo = document.querySelectorAll('.logo');
const medias = document.querySelectorAll('.bulle');
const l1 = document.querySelector('.l1');
const l2 = document.querySelector('.l2');

window.addEventListener('load', () => {

  const TL = gsap.timeline({paused: true});

  TL
  .staggerFrom(titreSpans, 1, {top: -50, opacity: 0, ease: "power2.out"}, 0.6)
  .staggerFrom(btns, 1, {opacity: 0, ease: "power2.out"}, 0.6, '-=1')
  .staggerFrom(l1, 1, {width: 0, opacity: 0, ease: "power2.out"}, 0.6,'-=1')
  .staggerFrom(l2, 0.5, {width: 0, opacity: 0, ease: "power2.out"}, 0.6)
  .staggerFrom(logo, 1, {transform: "scale(0)", ease: "power2.out"}, 0.6, '-=2')
  .staggerFrom(medias, 1, {right: -400, ease: "power2.out"}, 0.6, '-=1')

  TL.play();

})

window.addEventListener('hover', () => {
  
}) 


AOS.init();

