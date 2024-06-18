// const title = document.querySelector('.title');
// const leaf1 = document.querySelector('.leaf1');
// const leaf2 = document.querySelector('.leaf2');
// const bush2 = document.querySelector('.bush2');
// const mount1 = document.querySelector('.mount1');
// const mount2 = document.querySelector('.mount2');
// const higher = document.querySelector('.higher');

// document.addEventListener('scroll', function() {
//   let value = window.scrollY;
//   title.style.marginTop = value * 1.1 + 'px';

//   leaf1.style.marginLeft = -value + 'px';
//   leaf2.style.marginLeft = value + 'px';

//   bush2.style.marginBottom = -value + 'px';

//   mount1.style.marginBottom = -value * 1.1 + 'px';
//   mount2.style.marginBottom = -value * 1.2 + 'px';
// });
const title = document.querySelector('.title');
const leaf1 = document.querySelector('.leaf1');
const leaf2 = document.querySelector('.leaf2');
const bush2 = document.querySelector('.bush2');
const mount1 = document.querySelector('.mount1');
const mount2 = document.querySelector('.mount2');
const higher = document.querySelector('.higher');

const homeHeight = window.innerHeight * 1.3; // Calculate the height of the home section (130% of viewport height)

document.addEventListener('scroll', function() {
  let value = window.scrollY;
  let scrollPercentage = value / homeHeight; // Calculate the scroll percentage relative to the home section height

  title.style.marginTop = value * 1.1 + 'px';

  leaf1.style.marginLeft = -value + 'px';
  leaf2.style.marginLeft = value + 'px';

  bush2.style.marginBottom = -value + 'px';

  mount1.style.marginBottom = -value * 1.1 + 'px';
  mount2.style.marginBottom = -value * 1.2 + 'px';

  // Adjust the animation based on the scroll percentage
  if (scrollPercentage <= 1) {
    // Animation should only occur within the home section
    title.style.opacity = 1 - scrollPercentage;
    leaf1.style.transform = `translateX(${-scrollPercentage * 100}%)`;
    leaf2.style.transform = `translateX(${scrollPercentage * 100}%)`;
    bush2.style.transform = `translateY(${scrollPercentage * 100}%)`;
    mount1.style.transform = `translateY(${scrollPercentage * 110}%)`;
    mount2.style.transform = `translateY(${scrollPercentage * 120}%)`;
  }
});

gsap.registerPlugin(ScrollTrigger);

gsap.from(".benefits", {
  scrollTrigger: {
    trigger: ".benefits",
    start: "top 95%",
    // markers: true,
    toggleActions: "restart none none none",
    // scrub: true,
  },
  x: -200,
  rotation: 0,
  duration: 1
});

gsap.from(".benefits2", {
  scrollTrigger: {
    trigger: ".benefits2",
    start: "top 95%",
    // markers: true,
    toggleActions: "restart none none none",
    // scrub: true,
  },
  x: 200,
  rotation: 0,
  duration: 1
});