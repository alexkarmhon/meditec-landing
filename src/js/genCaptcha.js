// (function () {
//   const fonts = ["cursive"];
//   let captchaValue = "";

//   function genCaptcha() {
//     let value = btoa(Math.random() * 1000000000);
//     value = value.substr(0, 5 + Math.random() * 5);
//     captchaValue = value;
//   }

//   function setCaptcha() {
//     let html = captchaValue
//       .split("")
//       .map((char) => {
//         const rotate = -20 + Math.random() * 30;
//         const font = Math.trunc(Math.random() * fonts.length);
//         return `<span
//             style="
//             transform:rotate(${rotate}deg);
//             font-family:${font[font]};
//             "
//            >${char} </span>`;
//       })
//       .join("");
//     document.querySelector(".form__preview").innerHTML = html;
//   }

//   function initCaptcha() {
//     document
//       .querySelector(".form__captcha--refresh")
//       .addEventListener("click", function (e) {
//         e.preventDefault();
//         genCaptcha();
//         setCaptcha();
//       });
//     genCaptcha();
//     setCaptcha();
//   }

//   initCaptcha();

//   document
//     .querySelector(".main-button--form")
//     .addEventListener("click", function (e) {
//       e.preventDefault();

//       let inputcaptchavalue = document.querySelector(
//         ".form__input--captcha"
//       ).value;

//       if (inputcaptchavalue === captchaValue) {
//         alert("Ok");
//       } else {
//         alert("Invalid Captcha");
//       }
//     });
// })();
