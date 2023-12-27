const circleEl = document.querySelector(".circle");

window.addEventListener("mousemove", function (detail) {
  let xAxis = detail.clientX;
  let yAxis = detail.clientY;
  setTimeout(function () {
    circleEl.style.top = `${yAxis}px`;
    circleEl.style.left = `${xAxis}px`;
  }, 100);
});
