document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('[data-menu-button]');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuNav = document.querySelector('.mobile-menu__navigation');
  const buttonIcon = document.querySelector('.mobile-menu-btn__icon');
  const header = document.querySelector('.header');

  mobileMenu.style.transform = `translateY(${header.offsetHeight}px)`;
  mobileMenuNav.style.height = `calc(100vh - ${header.offsetHeight}px)`;
  window.addEventListener('scroll', () => {
    if (header.classList.contains('hidden')) {
      mobileMenuNav.style.height = `100vh`;
    } else {
      mobileMenuNav.style.height = `calc(100vh - ${header.offsetHeight}px)`;
    }
  });
  mobileMenu.style.paddingBottom = `${header.offsetHeight}px`;

  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.classList.toggle('is-open');
    mobileMenu.classList.toggle('is-open', isOpen);
    buttonIcon.classList.toggle('not-active', !isOpen);
    buttonIcon.classList.toggle('active', isOpen);
  });

  mobileMenu.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
      const isOpen = menuButton.classList.toggle('is-open');
      mobileMenu.classList.toggle('is-open', isOpen);
      buttonIcon.classList.toggle('not-active', !isOpen);
      buttonIcon.classList.toggle('active', isOpen);
    }
  });
});
