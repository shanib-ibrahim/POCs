const offscreen = document.getElementById("offscreen");
const hamburger = document.getElementById("check");

hamburger.addEventListener("click", () => {
  offscreen.classList.toggle("active");
});
