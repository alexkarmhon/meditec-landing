document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector("[data-menu-button]");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileMenuNav = document.querySelector(".mobile-menu__navigation");
  const buttonIcon = document.querySelector(".mobile-menu-btn__icon");
  const header = document.querySelector(".header");

  // ///// Var.1 /////
  // menuButton.addEventListener("click", () => {
  //   const isOpen = menuButton.classList.toggle("is-open");
  //   mobileMenu.classList.toggle("is-open", isOpen);
  //   buttonIcon.classList.toggle("is-open", isOpen);
  // });

  mobileMenu.style.transform = `translateY(${header.offsetHeight}px)`;
  mobileMenuNav.style.height = `calc(100vh - ${header.offsetHeight}px)`;
  mobileMenu.style.paddingBottom = `${header.offsetHeight}px`;

  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.classList.toggle("is-open");
    mobileMenu.classList.toggle("is-open", isOpen);
    buttonIcon.classList.toggle("not-active", !isOpen);
    buttonIcon.classList.toggle("active", isOpen);
  });

  mobileMenu.addEventListener("click", (e) => {
    if (e.target === e.currentTarget) {
      const isOpen = menuButton.classList.toggle("is-open");
      mobileMenu.classList.toggle("is-open", isOpen);
      buttonIcon.classList.toggle("not-active", !isOpen);
      buttonIcon.classList.toggle("active", isOpen);
    }
  });
});
