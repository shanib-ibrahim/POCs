const hamburger = document.getElementById("hamburger");
const close = document.getElementById("close");
const sidebar = document.getElementById("sidebar");

hamburger.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});

close.addEventListener("click", () => {
  sidebar.classList.remove("open");
});

document.addEventListener("click", (e) => {
  if (!hamburger.contains(e.target) && !sidebar.contains(e.target)) {
    sidebar.classList.remove("open");
  }
});
