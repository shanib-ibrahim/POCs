let input = document.getElementById("input");
let button = document.querySelectorAll("button");

button.forEach((element) => {
  element.addEventListener("click", (e) => {
    if (e.target.textContent === "C") {
      input.innerText = "";
    } else if (e.target.textContent === "<") {
    } else {
      input.innerText += e.target.textContent;
    }
  });
});
