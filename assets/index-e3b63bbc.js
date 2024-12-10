(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity)
      fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy)
      fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const style = "";
document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector("[data-menu-button]");
  const mobileMenu = document.getElementById("mobile-menu");
  const buttonIcon = document.querySelector(".mobile-menu-btn__icon");
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.classList.toggle("is-open");
    mobileMenu.classList.toggle("is-open", isOpen);
    buttonIcon.classList.toggle("not-active", !isOpen);
    buttonIcon.classList.toggle("active", isOpen);
  });
});
(function() {
  const fonts = ["cursive"];
  let captchaValue = "";
  function genCaptcha() {
    let value = btoa(Math.random() * 1e9);
    value = value.substr(0, 5 + Math.random() * 5);
    captchaValue = value;
  }
  function setCaptcha() {
    let html = captchaValue.split("").map((char) => {
      const rotate = -20 + Math.random() * 30;
      const font = Math.trunc(Math.random() * fonts.length);
      return `<span
            style="
            transform:rotate(${rotate}deg);
            font-family:${font[font]};
            "
           >${char} </span>`;
    }).join("");
    document.querySelector(".form__preview").innerHTML = html;
  }
  function initCaptcha() {
    document.querySelector(".form__captcha--refresh").addEventListener("click", function(e) {
      e.preventDefault();
      genCaptcha();
      setCaptcha();
    });
    genCaptcha();
    setCaptcha();
  }
  initCaptcha();
  document.querySelector(".form__button").addEventListener("click", function(e) {
    e.preventDefault();
    let inputcaptchavalue = document.querySelector(
      ".form__input--captcha"
    ).value;
    if (inputcaptchavalue === captchaValue) {
      alert("Ok");
    } else {
      alert("Invalid Captcha");
    }
  });
})();
