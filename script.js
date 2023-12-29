const circleEl = document.querySelector(".circle");
const btnEl = document.querySelector(".icon");
const svgEl = document.querySelector("svg");

window.addEventListener("mousemove", function (detail) {
  let xAxis = detail.clientX;
  let yAxis = detail.clientY;
  setTimeout(function () {
    circleEl.style.top = `${yAxis}px`;
    circleEl.style.left = `${xAxis}px`;
  }, 100);
});

btnEl.addEventListener("click", function () {
  tl.reverse();
  setTimeout(function () {
    svgEl.classList.add("svg-animation");
  }, 5000);
});

//* GSAP Library

//* timeline likhne se ham gasp ki jagah tl use karenge kyun ki hame animation ke sath nahi ek ke bad ke chahie...
let tl = gsap.timeline();

tl.from(".logo", {
  duration: 3,
  scale: 0.7,
  opacity: 0,
  ease: "Expo.easeInOut",
}) //? Timeline me sab ek sath likha ja sakhta hai.
  .from(
    ".white-strip",
    {
      duration: 2,
      width: 0,
      ease: "Expo.easeInOut",
    },
    "-=2"
  ) //? -=2.5 yani ki aap ye wali animation 2.5s se pehle karna chate ho kyun ki logo wali 4s se 2s tak akeli hogi aur 2s tak dono sathme calenge ge aur 2s tak hi ho jaae gi.
  .from(
    ".black-card",
    {
      duration: 2,
      x: 50,
      opacity: 0,
      ease: "Expo.easeInOut",
    },
    "-=1"
  )
  .from(
    ".white-content",
    {
      duration: 2,
      x: 50,
      opacity: 0,
      ease: "Expo.easeInOut",
    },
    "-=1.5"
  )
  .from(
    ".line",
    {
      duration: 2,
      width: 0,
      opacity: 0,
      ease: "Expo.easeInOut",
    },
    "-=1"
  )
  .from(
    ".content",
    {
      duration: 1.5,
      y: 40,
      opacity: 0,
      ease: "Expo.easeInOut",
    },
    "-=1.5"
  )
  .from(
    ".side-text",
    {
      duration: 2,
      x: 40,
      opacity: 0,
      ease: "Expo.easeInOut",
    },
    "-=1"
  );
