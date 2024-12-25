(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity)
      fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy)
      fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const style = "";
document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector("[data-menu-button]");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileMenuNav = document.querySelector(".mobile-menu__navigation");
  const buttonIcon = document.querySelector(".mobile-menu-btn__icon");
  const header = document.querySelector(".header");
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
(async () => {
  const response = await fetch("/db/productsData.json");
  const productsData = await response.json();
  const products = productsData.products;
  const productList = document.getElementById("product-list");
  const cards = products.map(
    ({ id, image, title, volume, price }) => `
  <li class="production__item" onclick="openProductCardModal(); renderCardById(${id})">
                  <div id="${id}" class="product-card">
                    <div class="product-card__image">
                        <img
                          src=${image}
                          alt=${title}                        
                          loading="lazy"
                          data-lazy="true"
                        />
                    </div>
                    <h3 class="product-card__title">
                    ${title}
                      <span>(${volume})</span>
                    </h3>
                   <p class="product-card__info-more">
                      Докладніше...
                      <span><i class="fa-solid fa-plus"></i></span>
                    </p>
                    <button class="main-button main-button--product-card">
                      <i class="fa-solid fa-cart-arrow-down"></i>
                      <p>
                        <span class="product-card__button-price">Ціна:</span>
                        ${price} грн.
                      </p>
                    </button>
                  </div>
                </li>
  `
  ).join("");
  productList.innerHTML = cards;
})();
(async () => {
  const response = await fetch("/db/productsData.json");
  const productsData = await response.json();
  const products = productsData.products;
  const productCardModalOverlay = document.getElementById("production-modal");
  const productCardModalContent = document.getElementById(
    "production-modal-content"
  );
  const productCards = document.querySelectorAll(".product-card");
  const renderCardById = (cardId) => {
    const { image, paragraphs, price, title, volume } = products.find(
      (product) => product.id === `${cardId}`
    );
    productCardModalContent.innerHTML = `
  <div class="production__modal-image-box">
    <img
      src=${image}
      alt=${title}
      loading="lazy"
      data-lazy="true"
    />
    <h3 class="production__modal-title">
      ${title}
      <span>(${volume})</span>
    </h3>
    <button class="main-button main-button--modal-product-card">
      <i class="fa-solid fa-cart-arrow-down"></i>
      <p>
        <span class="product-card__button-price">Ціна:</span>
        ${price} грн.
      </p>
    </button>
  </div>
  <div class="production__modal-description-box">
    ${paragraphs.map((paragraph) => `<p class="production__modal-text>${paragraph}</p>`).join("")}
    <p
      class="production__modal-info-less"
      onclick="closeProductCardModal()"
    >
      Назад... <span><i class="fa-solid fa-minus"></i></span>
    </p>
  </div>`;
  };
  const openProductCardModal = () => {
    productCardModalOverlay.style.display = "block";
    productCardModalContent.scrollTop = 0;
  };
  const closeProductCardModal = () => {
    productCardModalContent.innerHTML = "";
    productCardModalOverlay.style.display = "none";
  };
  productCards.forEach((productCard) => {
    productCard.addEventListener("click", () => {
    });
  });
  productCardModalOverlay.addEventListener("click", (e) => {
    e.target === e.currentTarget && closeProductCardModal();
  });
  window.openProductCardModal = openProductCardModal;
  window.closeProductCardModal = closeProductCardModal;
  window.renderCardById = renderCardById;
})();
(function() {
  const fonts = ["cursive"];
  let captchaValue = "";
  function genCaptcha() {
    let value = btoa(Math.random() * 1e9);
    value = value.substr(0, 5 + Math.random() * 5);
    captchaValue = value;
  }
  function setCaptcha() {
    let html = captchaValue.split("").map((char) => {
      const rotate = -20 + Math.random() * 30;
      const font = Math.trunc(Math.random() * fonts.length);
      return `<span
            style="
            transform:rotate(${rotate}deg);
            font-family:${font[font]};
            "
           >${char} </span>`;
    }).join("");
    document.querySelector(".form__preview").innerHTML = html;
  }
  function initCaptcha() {
    document.querySelector(".form__captcha--refresh").addEventListener("click", function(e) {
      e.preventDefault();
      genCaptcha();
      setCaptcha();
    });
    genCaptcha();
    setCaptcha();
  }
  initCaptcha();
  document.querySelector(".main-button--form").addEventListener("click", function(e) {
    e.preventDefault();
    let inputcaptchavalue = document.querySelector(
      ".form__input--captcha"
    ).value;
    if (inputcaptchavalue === captchaValue) {
      alert("Ok");
    } else {
      alert("Invalid Captcha");
    }
  });
})();
const modal = document.getElementById("galleryModal");
const images = document.querySelectorAll(".gallery__image");
const slides = document.getElementsByClassName("gallery__modal-slide");
const dots = document.getElementsByClassName("gallery__modal-image-demo");
const captionText = document.getElementById("caption");
let slideIndex = 1;
function openModal() {
  modal.style.display = "block";
}
function closeModal() {
  modal.style.display = "none";
}
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}
modal.addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    closeModal();
  }
});
window.openModal = openModal;
window.closeModal = closeModal;
window.currentSlide = currentSlide;
window.plusSlides = plusSlides;
images.forEach((img, index) => {
  img.addEventListener("click", () => {
    openModal();
    currentSlide(index + 1);
  });
});
let lastScrollY = window.scrollY;
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  const currentScrollY = window.scrollY;
  if (currentScrollY > lastScrollY) {
    header.classList.add("hidden");
  } else {
    header.classList.remove("hidden");
  }
  lastScrollY = currentScrollY;
});
console.log("Hello. If you see this string - code is normal");
