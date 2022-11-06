const modal = document.getElementById("modal-container");
const close = document.getElementById("close");
const openModal = document.getElementById("btn-addNote");

openModal.addEventListener("click", () => {
  modal.showModal();
});

close.addEventListener("click", () => {
  modal.close();
});
