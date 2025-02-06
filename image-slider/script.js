let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const totalSlides = slides.length;

const showSlides = () => {
  if (slideIndex < 0) {
    slideIndex = totalSlides - 1;
  } else if (slideIndex >= totalSlides) {
    slideIndex = 0;
  }
  slides.forEach((slide, index) => {
    if (slideIndex === index) {
      slide.style.display = "block";
    } else {
      slide.style.display = "none";
    }
  });
};

const prevSlide = () => {
  slideIndex--;
  showSlides();
};

const nextSlide = () => {
  slideIndex++;
  showSlides();
};

prev.addEventListener("click", prevSlide);
next.addEventListener("click", nextSlide);
