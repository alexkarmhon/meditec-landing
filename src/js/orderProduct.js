import { products } from "./products";

const productOrderModalOverlay = document.getElementById("order-modal");
const form = document.getElementById("orderForm");
const orderTitle = document.getElementById("productTitle");
// const BASE_URL = "http://localhost:3000"; //for localhost
const BASE_URL = "https://meditec-landing.vercel.app";

function sendOrder(feedback) {
  fetch(`${BASE_URL}/api/order`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
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

const openProductOrderModal = (productId) => {
  console.log(productId);
  productOrderModalOverlay.style.display = "block";

  const { id, title, volume, price } = products.find(
    (product) => product.id === `${productId}`
  );

  orderTitle.innerText = `${title} (${volume})`;

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
