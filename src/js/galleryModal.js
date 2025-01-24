const modal = document.getElementById('galleryModal');
const images = document.querySelectorAll('.gallery__image');
const slides = document.getElementsByClassName('gallery__modal-slide');
const dots = document.getElementsByClassName('gallery__modal-image-demo');
const captionText = document.getElementById('caption');

let slideIndex = 1;
let startX = 0;
let endX = 0;

function openModal() {
  modal.style.display = 'block';
}

function closeModal() {
  modal.style.display = 'none';
}

showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
  captionText.innerHTML = dots[slideIndex - 1].alt;
}

modal.addEventListener('click', (e) => {
  if (e.target === e.currentTarget) {
    closeModal();
  }
});

images.forEach((img, index) => {
  img.addEventListener('click', () => {
    openModal();
    currentSlide(index + 1);
  });
});

modal.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

modal.addEventListener('touchmove', (e) => {
  endX = e.touches[0].clientX;
});

modal.addEventListener('touchend', () => {
  const swipeThreshold = 50;

  if (startX - endX > swipeThreshold) {
    plusSlides(1);
  } else if (endX - startX > swipeThreshold) {
    plusSlides(-1);
  }
});

window.openModal = openModal;
window.closeModal = closeModal;
window.currentSlide = currentSlide;
window.plusSlides = plusSlides;
