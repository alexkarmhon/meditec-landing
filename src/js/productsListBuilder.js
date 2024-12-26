import { products } from "./products";

const productList = document.getElementById("product-list");

const cards = products
  .map(
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
  )
  .join("");

productList.innerHTML = cards;
