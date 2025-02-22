const openModal = document.getElementById("modal-btn");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close-btn");

openModal.addEventListener("click", () => {
  modal.classList.add("open-modal");
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("open-modal");
});
