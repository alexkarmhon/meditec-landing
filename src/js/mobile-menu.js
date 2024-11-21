document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector("[data-menu-button]");
  const mobileMenu = document.getElementById("mobile-menu");
  const buttonIcon = document.getElementsByClassName("mobile-menu-btn__icon");

  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.classList.toggle("is-open"); // Додаємо/знімаємо клас `is-open`
    mobileMenu.classList.toggle("is-open", isOpen); // Синхронізуємо стан меню
    buttonIcon.classList.toggle("is-open", isOpen);
  });
});
