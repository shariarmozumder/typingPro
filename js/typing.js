import { sound } from "./app.js";
const TypingStatus = (() => {
  const $wrapper = document.querySelector(".wrapper");
  const $textToType = $wrapper.querySelector(".wrapper__text");
  const $textArea = $wrapper.querySelector("#inputText");
  const $countdown = $wrapper.querySelector(".wrapper__countdown");
  const $modal = document.querySelector(".modal");

  let array = [];

  const IsCorrect = (_) => {
    const inputText = $textArea.value.split("");
    const givenText = $textToType.innerText.split("");
    inputText.forEach((letter, i) => {
      if (letter === givenText[i]) {
        isRight();
      } else {
        isWrong();
        sound.error.play();
      }
    });
  };

  const isCompleted = (_) => {
    const inputText = $textArea.value.split("");
    const givenText = $textToType.innerText.split("");

    if (JSON.stringify(givenText) === JSON.stringify(inputText)) {
      $wrapper.style.backgroundColor = "#2ecc71";
      $textArea.setAttribute("disabled", "true");
      sound.win.play();
      render();
    } else {
      $wrapper.style.backgroundColor = "transparent";
    }
  };
  const finishTime = (tym) => {
    tym.split(":").forEach((unit) => {
      array.push(unit);
    });
    let minute = Number(array[0]);
    let seconds = Number(array[1]);
    return timeConverter(minute, seconds);
  };

  const timeConverter = (min, sec) => {
    const secToMinute = sec / 60;
    return min + secToMinute;
  };

  const wpmCalculate = (timeTaken) => {
    const wordsTyped = $textToType.innerText.length / 5;

    return Math.floor(wordsTyped / timeTaken);
  };

  const isRight = () => {
    $textArea.style.background = "transparent";
    $textArea.style.color = "whitesmoke";
    $textArea.style.borderColor = "whitesmoke";
    $textToType.style.background = "#bb432c";
    $textToType.style.color = "whitesmoke";
  };
  const isWrong = () => {
    $textArea.style.color = "red";
    $textToType.style.color = "red";
    $textArea.style.background = "black";
    $textToType.style.background = "black";
    $textArea.style.borderColor = "red";
    $textArea.style.borderWidth = "10px";
  };

  const render = (_) => {
    const $typingSpeed = document.querySelector(".wpm");
    const $timeTaken = document.querySelector(".time-taken");
    const $showWords = document.querySelector(".words-typed");
    const totalTime = finishTime($countdown.innerText);

    $modal.style.display = "block";
    $wrapper.style.display = "none";
    $typingSpeed.innerText = wpmCalculate(totalTime) + " WPM";
    $showWords.innerText = $textToType.innerText.length;
    $timeTaken.innerText = $countdown.innerText;
  };
  return {
    IsCorrect,
    isCompleted,
  };
})();
export default TypingStatus;
