import { products } from './products';

const productList = document.getElementById('product-list');

const createProductCard = ({
  id,
  image,
  title,
  volume,
  price,
  isSpecial,
  discount,
}) => {
  const specialBadge = isSpecial
    ? `<span>(Спеціальна пропозиція)</span>`
    : `<span>(${volume})</span>`;

  const priceInfo = isSpecial
    ? `<span class="product-card__button-price"></span> Замовити`
    : `<span class="product-card__button-price">Ціна:</span> ${price} грн.`;

  const discountLable = isSpecial
    ? `<div class="discount">
      <p class="value">-${discount}</p>
    </div>`
    : ``;

  return `
    <li class="production__item${
      isSpecial ? ' production__item--special' : ''
    }">
      <div id="${id}" class="product-card${
    isSpecial ? ' product-card--special' : ''
  }">
        <div onclick="openProductCardModal(); renderCardById('${id}')">
        ${discountLable}
          <div class="product-card__image">
            <img
              src="${image}"
              alt="${title}"
              loading="lazy"
              data-lazy="true"
            />
          </div>
          <h3 class="product-card__title">
            ${title}
            ${specialBadge}
          </h3>
          <p class="product-card__info-more">
            Докладніше...
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

const cards = products.map(createProductCard).join('');
productList.innerHTML = cards;
