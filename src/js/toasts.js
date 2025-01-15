import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

import { translations } from './translations';

const currentLang = document.documentElement.lang;
const getTranslation = (key) =>
  translations[currentLang]?.[key] || translations['uk'][key];

export const showSuccessToast = () => {
  Toastify({
    text: getTranslation('successToastText'),
    duration: 3000,
    close: true,
    gravity: 'top',
    position: 'center',
    style: {
      background:
        'linear-gradient(to right,rgba(69, 181, 127, 0.70),rgba(61, 201, 122, 0.70))',
    },
    stopOnFocus: true,
  }).showToast();
};

export const showErrorToast = (errorText) => {
  Toastify({
    text: getTranslation('errorToastText'),
    duration: 3000,
    close: true,
    gravity: 'top',
    position: 'center',
    style: {
      background:
        'linear-gradient(to right,rgba(255, 95, 108, 0.70),rgba(255, 139, 113, 0.7))',
    },
    stopOnFocus: true,
  }).showToast();
};
