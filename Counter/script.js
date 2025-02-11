const counter = document.getElementById("counter");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");

let count = 0;

increase.addEventListener("click", () => {
  count++;
  counter.innerText = count;
  increase.style.border = "1px solid green";
  decrease.style.border = "1px solid black";
});

decrease.addEventListener("click", () => {
  count--;
  if (count < 0) {
    count = 0;
  }
  counter.innerText = count;
  decrease.style.border = "1px solid red";
  increase.style.border = "1px solid black";
});

reset.addEventListener("click", () => {
  count = 0;
  counter.innerText = count;
  decrease.style.border = "1px solid black";
  increase.style.border = "1px solid black";
});
