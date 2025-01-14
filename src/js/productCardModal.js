import { products } from './products';
import { translations } from './translations';

const currentLang = document.documentElement.lang;

const productCardModalOverlay = document.getElementById('production-modal');
const productCardModalContent = document.getElementById(
  'production-modal-content'
);
const productCards = document.querySelectorAll('.product-card');

const getTranslation = (key) =>
  translations[currentLang]?.[key] || translations['uk'][key];

const renderCardById = (cardId) => {
  const lang = currentLang || 'uk';

  const { id, image, paragraphs, price, title, volume, isSpecial } =
    products.find((product) => product.id === `${cardId}`);

  const specialBadge = isSpecial
    ? `<span>${getTranslation('specialBadge')}</span>`
    : `<span>(${volume[lang] || getTranslation('volumeLabel')})</span>`;

  const priceInfo = isSpecial
    ? `<span class="product-card__button-price"></span> ${getTranslation(
        'order'
      )}`
    : `<span class="product-card__button-price">${getTranslation(
        'price'
      )}</span> ${price} ${getTranslation('currency')}`;

  productCardModalContent.innerHTML = `
  <div class="production__modal-image-box">
    <img
     src=${image}
      alt=${title[lang]}
      loading="lazy"
      data-lazy="true"
    />
    <h3 class="production__modal-title">
      ${title[lang]}
      ${specialBadge}
    </h3>
    <button onclick="openProductOrderModal('${id}')" class="main-button main-button--modal-product-card">
      <i class="fa-solid fa-cart-arrow-down"></i>
      <p>${priceInfo}</p>
    </button>
  </div>
  <div class="production__modal-description-box">
    ${paragraphs[lang]
      .map((paragraph) => {
        return `<p class="production__modal-text">${paragraph}</p>`;
      })
      .join('')}
    <p
      class="production__modal-info-less"
      onclick="closeProductCardModal()"
    >
      ${getTranslation(
        'back'
      )}... <span><i class="fa-solid fa-minus"></i></span>
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
