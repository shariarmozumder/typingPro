import Timer from "./timer.js";
import TypingStatus from "./typing.js";
import Text from "./text.js";

const $wrapper = document.querySelector(".wrapper");
const $textToType = $wrapper.querySelector(".wrapper__text");
const $textArea = $wrapper.querySelector("#inputText");
const $btn = $wrapper.querySelector(".wrapper__btn");
const $modal = document.querySelector(".modal");
const $close = document.querySelector(".close");

export const sound = {
  win: new Audio("./../media/win.mp3"),
  error: new Audio("./../../media/error.mp3"),
  click: new Audio("./../media/click.mp3"),
};

$textArea.setAttribute("placeholder", "Start typing...");
$textToType.innerHTML = `${Text.randomPara()}`;

const spellCheck = (_) => {
  TypingStatus.IsCorrect();
  TypingStatus.isCompleted();
};

const startClock = (_) => {
  const givenText = $textToType.innerText.length - 1;
  const inputTextLength = $textArea.value.length;
  if (inputTextLength === 0) {
    Timer.countStart();
  }
  if (inputTextLength === givenText) {
    Timer.countPause();
  }
};

const resetApp = (_) => {
  Timer.countReset();
  $textArea.removeAttribute("disabled");
  $textArea.value = "";
  $textArea.style.borderColor = "whitesmoke";
  $textArea.style.borderWidth = "5px";
  $wrapper.style.backgroundColor = "transparent";
  $textToType.innerHTML = `${Text.randomPara()}`;

  sound.click.play();
};
const closeModal = () => {
  $modal.style.display = "none";
  $wrapper.style.display = "grid";
  resetApp();
};
const init = (_) => {
  $textArea.addEventListener("keydown", startClock, false);
  $textArea.addEventListener("keyup", spellCheck, false);
  $btn.addEventListener("click", resetApp, false);
  $modal.style.display = "none";
  $close.addEventListener("click", closeModal, false);
};
init();
