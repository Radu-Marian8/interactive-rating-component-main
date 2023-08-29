const mainContainer = document.querySelector(".main-container");
const thanksContainer = document.querySelector(".thanks-container");
const submitButton = document.querySelector(".submit");
const rateAgain = document.querySelector(".rate-again");
const rateButtons = document.querySelectorAll(".rating");
const rating = document.getElementById("rating");

submitButton?.addEventListener("click", () => {
  thanksContainer.classList.remove("hidden");
  mainContainer.classList.add("hidden");
});

rateAgain.addEventListener("click", () => {
  thanksContainer.classList.add("hidden");
  mainContainer.classList.remove("hidden");
});

rateButtons.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.innerHTML = rate.innerHTML;
  });
});
