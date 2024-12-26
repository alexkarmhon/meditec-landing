import { products } from "./products";

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
     src=${import.meta.env.VITE_BASE_PATH}${image}
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
    ${paragraphs
      .map((paragraph) => `<p class="production__modal-text>${paragraph}</p>`)
      .join("")}
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
    openProductCardModal;
  });
});

productCardModalOverlay.addEventListener("click", (e) => {
  e.target === e.currentTarget && closeProductCardModal();
});

window.openProductCardModal = openProductCardModal;
window.closeProductCardModal = closeProductCardModal;
window.renderCardById = renderCardById;
