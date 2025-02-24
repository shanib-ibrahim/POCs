const openButtons = document.querySelectorAll(".open-btn");
const faqAnswer = document.querySelectorAll(".faq-answer");
openButtons.forEach((openbtn, index) => {
  openbtn.addEventListener("click", () => {
    faqAnswer[index].classList.toggle("open");
  });
});
