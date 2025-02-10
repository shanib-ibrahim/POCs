const typingText = document.querySelector(".typing-text p");
const input = document.querySelector(".wrapper .input-field");
const time = document.querySelector(".time span b");
const mistakes = document.querySelector(".mistakes span");
const wpm = document.querySelector(".wpm span");
const cpm = document.querySelector(".cpm span");
const btn = document.querySelector(".button");

//set value
let timer;
let maxTime = 60;
let timeLeft = maxTime;
let charIndex = 0;
let mistake = 0;
let isTyping = false;

function loadParagraph() {
  let paragraph = [
    "Avoid daydreaming about the years to come.",
    "You are the most important person in your whole life.",
    "Always be true to who you are, and ignore what other people have to say about you.",
    "Always be true to who you are, and ignore what other people have to say about you.",
    "Only demonstrate your strength when it’s really required.",
    "Subscribe to Drop X Out",
  ];

  const randomIndex = Math.floor(Math.random() * paragraph.length);

  typingText.innerHTML = "";
  for (const char of paragraph[randomIndex]) {
    typingText.innerHTML += `<span>${char}</span>`;
  }
  typingText.querySelectorAll("span")[0].classList.add("active");
}

//Handle User Input
function initTyping() {
  const char = typingText.querySelectorAll("span");
  const typeChar = input.value.charAt(charIndex);
  if (charIndex < char.length && timeLeft > 0) {
    if (char[charIndex].innerText === typeChar) {
      char[charIndex].classList.add("correct");
      console.log("correct");
    } else {
      mistake++;
      char[charIndex].classList.add("incorrect");
      console.log("incorrect");
    }
    charIndex++;
  }
}

input.addEventListener("input", initTyping);
loadParagraph();
