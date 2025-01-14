import { products } from './products';
import { translations } from './translations';

const productList = document.getElementById('product-list');
const currentLang = document.documentElement.lang;

const getTranslation = (key) =>
  translations[currentLang]?.[key] || translations['uk'][key];

const createProductCardUk = ({
  id,
  image,
  title,
  volume,
  price,
  isSpecial,
  discount,
}) => {
  const lang = currentLang || 'uk';

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

  const discountLabel =
    isSpecial && discount
      ? `<div class="discount">
          <p class="value">-${discount}</p>
        </div>`
      : '';

  return `
    <li class="production__item${
      isSpecial ? ' production__item--special' : ''
    }">
      <div id="${id}" class="product-card${
    isSpecial ? ' product-card--special' : ''
  }">
        <div onclick="openProductCardModal(); renderCardById('${id}')">
        ${discountLabel}
          <div class="product-card__image">
            <img
              src="${image}"
              alt="${title[lang]}"
              loading="lazy"
              data-lazy="true"
            />
          </div>
          <h3 class="product-card__title">
            ${title[lang]}
            ${specialBadge}
          </h3>
          <p class="product-card__info-more">
             ${getTranslation('learnMore')}...
            <span><i class="fa-solid fa-plus"></i></span>
          </p>
        </div>

        <button onclick="openProductOrderModal('${id}')" class="main-button main-button--product-card">
          <i class="fa-solid fa-cart-arrow-down"></i>
          <p>${priceInfo}</p>
        </button>
      </div>
    </li>
  `;
};

const cards = products.map(createProductCardUk).join('');
productList.innerHTML = cards;
