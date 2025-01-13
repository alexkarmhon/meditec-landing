import { products } from './products';

const productCardModalOverlay = document.getElementById('production-modal');
const productCardModalContent = document.getElementById(
  'production-modal-content'
);
const productCards = document.querySelectorAll('.product-card');

const renderCardById = (cardId) => {
  const { id, image, paragraphs, price, title, volume, isSpecial } =
    products.find((product) => product.id === `${cardId}`);

  const specialBadge = isSpecial
    ? `<span>(Спеціальна пропозиція)</span>`
    : `<span>(${volume})</span>`;

  const priceInfo = isSpecial
    ? `<span class="product-card__button-price"></span> Замовити`
    : `<span class="product-card__button-price">Ціна:</span> ${price} грн.`;
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
      ${specialBadge}
    </h3>
    <button class="main-button main-button--modal-product-card">
      <i class="fa-solid fa-cart-arrow-down"></i>
      <p>${priceInfo}</p>
    </button>
  </div>
  <div class="production__modal-description-box">
    ${paragraphs
      .map((paragraph) => {
        return `<p class="production__modal-text">${paragraph}</p>`;
      })
      .join('')}
    <p
      class="production__modal-info-less"
      onclick="closeProductCardModal()"
    >
      Назад... <span><i class="fa-solid fa-minus"></i></span>
    </p>
  </div>`;
};

const openProductCardModal = () => {
  productCardModalOverlay.style.display = 'block';
  productCardModalContent.scrollTop = 0;
};

const closeProductCardModal = () => {
  productCardModalContent.innerHTML = '';
  productCardModalOverlay.style.display = 'none';
};

productCards.forEach((productCard) => {
  productCard.addEventListener('click', () => {
    openProductCardModal;
  });
});

productCardModalOverlay.addEventListener('click', (e) => {
  e.target === e.currentTarget && closeProductCardModal();
});

window.openProductCardModal = openProductCardModal;
window.closeProductCardModal = closeProductCardModal;
window.renderCardById = renderCardById;
