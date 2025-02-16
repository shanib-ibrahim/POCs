const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", (e) => {
  Array.from(hamburger.children).forEach((item) => {
    item.classList.toggle("click");
  });
});
