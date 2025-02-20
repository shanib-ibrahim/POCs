const hamburger = document.getElementById("hamburger");
const close = document.getElementById("close");
const sidebar = document.getElementById("sidebar");

hamburger.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});

close.addEventListener("click", () => {
  sidebar.classList.remove("open");
});
