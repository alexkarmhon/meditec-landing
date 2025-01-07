const upBtn = document.getElementById("up-btn");

const scrollFunction = () => {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    upBtn.style.display = "flex";
  } else {
    upBtn.style.display = "none";
  }
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

window.onscroll = function () {
  scrollFunction();
};

upBtn.addEventListener("click", scrollToTop);
