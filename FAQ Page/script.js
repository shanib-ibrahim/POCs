const openButtons = document.querySelectorAll(".open-btn");
const faqAnswer = document.querySelectorAll(".faq-answer");

openButtons.forEach((openbtn, index) => {
  openbtn.addEventListener("click", (e) => {
    faqAnswer[index].classList.toggle("open");
    e.target.classList.toggle("open");
  });
});
