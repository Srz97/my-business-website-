const infoButton = document.querySelector("#info-button");
const infoText = document.querySelector("#info-text");

infoButton.addEventListener("click", function () {
  infoText.hidden = !infoText.hidden;
});