const form = document.getElementById("inv-form");
// const BASE_URL = "http://localhost:3000"; //for localhost
const BASE_URL = "https://meditec-landing.vercel.app";
const sendInvitation = (invitation) => {
  fetch(`${BASE_URL}/api/invitation`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // Правильний формат
    },
    body: JSON.stringify(invitation),
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
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Invitation");

  const invForm = e.target;
  const invFormData = new FormData(invForm);
  const invUserData = Object.fromEntries(invFormData);
  console.log(invUserData);
  sendInvitation(invUserData);

  invForm.reset();
});
