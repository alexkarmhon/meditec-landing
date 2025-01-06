const productOrderModalOverlay = document.getElementById("order-modal");
const form = document.getElementById("emailForm");

import { products } from "./products";

const getProductOrderForm = (product) => {
  console.log(product);
};

const openProductOrderModal = (productId) => {
  console.log(productId);
  productOrderModalOverlay.style.display = "block";

  const { id, title, volume, price } = products.find(
    (product) => product.id === `${productId}`
  );

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const orderForm = e.target;
    const feedbackFormData = new FormData(e.target);
    feedbackFormData.append("productId", id);
    feedbackFormData.append("productTitle", title);
    feedbackFormData.append("productVolume", volume);
    feedbackFormData.append("productPrice", price);

    console.log(feedbackFormData);
    const feedback = Object.fromEntries(feedbackFormData);
    console.log(feedback);
    sendOrder(feedback);
    orderForm.reset();
    closeProductOrderModal();
  });
};

const closeProductOrderModal = () => {
  productOrderModalOverlay.style.display = "none";
};

productOrderModalOverlay.addEventListener("click", (e) => {
  e.target === e.currentTarget && closeProductOrderModal();
});

window.openProductOrderModal = openProductOrderModal;
window.closeProductOrderModal = closeProductOrderModal;
/////////////////////////////////////////////////////////////////////////////
const BASE_URL = "http://localhost:3000";
function sendOrder(feedback) {
  fetch(`${BASE_URL}/api/feedback`, {
    method: "POST", // Виправлено "metod" на "method"
    headers: {
      "Content-Type": "application/json", // Правильний формат
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
      console.log("Відповідь сервера:", data);
      alert("Success");
    })
    .catch((error) => {
      console.error("Помилка:", error);
    });
}
