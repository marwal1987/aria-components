// Del 1 - 18 rader kod

const openModal = document.getElementById("openModalBtn");
const closeModal = document.getElementById("closeModalBtn");
const accessibleModal = document.getElementById("accessibleModal");

openModal.addEventListener("click", () => {
  accessibleModal.style.display = "flex";
  accessibleModal.setAttribute("aria-hidden", "false");
  closeModal.focus();
});

closeModal.addEventListener("click", () => {
  accessibleModal.style.display = "none";
  accessibleModal.setAttribute("aria-hidden", "true");
  openModal.focus();
});

accessibleModal.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal.click();
  }
});

// Del 2 - 9 rader kod
const openBtn = document.getElementById("openDialogBtn");
const closeBtn = document.getElementById("closeDialogBtn");
const accessibleDialog = document.getElementById("accessibleDialog");

openBtn.addEventListener("click", () => {
  accessibleDialog.showModal();
});

closeBtn.addEventListener("click", () => {
  accessibleDialog.close();
});


// Del 3

const menuButton = document.getElementById('menuButton');
const menuContent = document.getElementById('menuContent');

menuButton.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!expanded));
  menuContent.setAttribute('aria-hidden', String(expanded));
});

menuButton.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    menuButton.click();
  }
});