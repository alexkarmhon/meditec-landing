import { showSuccessToast, showErrorToast } from './toasts';

const form = document.getElementById('contact-form');
// const BASE_URL = "http://localhost:3000"; //for localhost
const BASE_URL = 'https://meditec-landing.vercel.app';

const sendContact = (contact) => {
  fetch(`${BASE_URL}/api/contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(contact),
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
};

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const contactForm = e.target;
  const contactFormData = new FormData(contactForm);
  const contactUserData = Object.fromEntries(contactFormData);
  sendContact(contactUserData);

  contactForm.reset();
});
