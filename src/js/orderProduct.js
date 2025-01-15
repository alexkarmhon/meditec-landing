import { products } from './products';
import { showSuccessToast, showErrorToast } from './toasts';

const currentLang = document.documentElement.lang;
const productOrderModalOverlay = document.getElementById('order-modal');
const form = document.getElementById('orderForm');
const orderTitle = document.getElementById('productTitle');
// const BASE_URL = "http://localhost:3000"; //for localhost
const BASE_URL = 'https://meditec-landing.vercel.app';

function sendOrder(feedback) {
  fetch(`${BASE_URL}/api/order`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(feedback),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      showSuccessToast();
    })
    .catch((error) => {
      showErrorToast();
    });
}

const openProductOrderModal = (productId) => {
  productOrderModalOverlay.style.display = 'block';

  const { id, title, volume, price } = products.find(
    (product) => product.id === `${productId}`
  );

  const lang = currentLang || 'uk';

  orderTitle.innerText = `${title[lang]} (${volume[lang]})`;

  form.addEventListener(
    'submit',
    (e) => {
      e.preventDefault();
      const orderForm = e.target;
      const feedbackFormData = new FormData(e.target);
      feedbackFormData.append('productId', id);
      feedbackFormData.append('productTitle', title[lang]);
      feedbackFormData.append('productVolume', volume[lang]);
      feedbackFormData.append('productPrice', price);

      const feedback = Object.fromEntries(feedbackFormData);
      sendOrder(feedback);
      orderForm.reset();
      closeProductOrderModal();
    },
    { once: true }
  );
};

const closeProductOrderModal = () => {
  productOrderModalOverlay.style.display = 'none';
};

productOrderModalOverlay.addEventListener('click', (e) => {
  e.target === e.currentTarget && closeProductOrderModal();
});

window.openProductOrderModal = openProductOrderModal;
window.closeProductOrderModal = closeProductOrderModal;
