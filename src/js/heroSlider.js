let myIndex = 0;

(() => {
  const carousel = () => {
    const slides = document.getElementsByClassName("hero__slide");

    Array.from(slides).forEach((slide) => {
      slide.style.display = "none";
    });

    myIndex++;

    if (myIndex > slides.length) {
      myIndex = 1;
    }

    slides[myIndex - 1].style.display = "block";

    setTimeout(carousel, 20000);
  };

  carousel();
})();
