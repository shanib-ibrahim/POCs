const btn = document.getElementById("btn");
const bgColor = document.getElementById("bg-color");

const colors = ["red", "green", "blue", "orange", "yellow"];

btn.addEventListener("click", () => {
  const color = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = color;
  bgColor.innerText = `Background Color:${color}`;
});
