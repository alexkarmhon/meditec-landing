const modal = document.getElementById("galleryModal");
const slides = document.getElementsByClassName("gallery__modal-slide");
const dots = document.getElementsByClassName("gallery__modal-image-demo");
const captionText = document.getElementById("caption");

let slideIndex = 1;

function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
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
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}

window.openModal = openModal;
window.closeModal = closeModal;
window.currentSlide = currentSlide;
window.plusSlides = plusSlides;
