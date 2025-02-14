const reviews = [
  {
    id: 1234,
    name: "Alice",
    designation: "Developer",
    review:
      "I was really impressed with the final product. The development team paid great attention to detail and delivered the project on time. Communication was smooth throughout the process, and I felt confident that my requirements were being met. Overall, an excellent experience!",
  },
  {
    id: 5678,
    name: "Bob",
    designation: "Manager",
    review:
      "The service provided was good, but there were a few hiccups along the way. Some deadlines were slightly missed, and there were minor issues with the final result that required adjustments. However, the team was responsive to feedback and made the necessary improvements. Overall, I'm satisfied with the outcome but there's room for growth.",
  },
  {
    id: 9101,
    name: "Charlie",
    designation: "Designer",
    review:
      "I had high expectations, but unfortunately, the final design did not meet my needs. There were several areas that were not aligned with my vision, and I felt that more attention to detail was needed in certain sections. That being said, the team was open to making revisions, and we were able to work together to get closer to the desired result.",
  },
  {
    id: 1121,
    name: "Diana",
    designation: "Product Owner",
    review:
      "Absolutely amazing experience! The team went above and beyond to understand our product goals and deliver exactly what we were looking for. They demonstrated excellent problem-solving skills and kept us updated every step of the way. The final product exceeded my expectations, and I couldn’t be happier with the results.",
  },
  {
    id: 3141,
    name: "Eve",
    designation: "Engineer",
    review:
      "The overall experience was okay. The team delivered the product on time, but I was expecting a bit more in terms of functionality. While the product meets the basic requirements, there were some features I had hoped for that didn’t make it into the final version. Still, the support was helpful and they were quick to address any concerns.",
  },
];

const name = document.getElementById("review-details__name");
const designation = document.getElementById("review-details__designation");
const review = document.getElementById("review-description");
const leftButton = document.getElementById("slider-btn__left");
const rightButton = document.getElementById("slider-btn__right");

const randomGenerate = () => Math.floor(Math.random() * reviews.length);

leftButton.addEventListener("click", () => {
  const review = reviews[randomGenerate()];
  name.innerText = review.name;
  designation.innerText = review.designation;
  review.innerText = review.designation;
});

rightButton.addEventListener("click", () => {
  const review = reviews[randomGenerate()];
  name.innerText = review.name;
  designation.innerText = review.designation;
  review.innerText = review.designation;
});
