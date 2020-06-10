const inputRange = document.querySelector(".inputRange"),
  inputNumber = document.querySelector(".inputNumber"),
  playBtn = document.querySelector(".playBtn"),
  result = document.querySelector(".result"),
  showingError = document.querySelector(".showingError");

const yourNumber = document.querySelector(".yourNumber"),
  machineNumber = document.querySelector(".machineNumber"),
  numberGenerator = document.querySelector(".numberGenerator");

function checkInputNumberRange() {
  const rangeMax = Number(inputRange.max, 2);
  if (rangeMax > 150) {
    showingError.innerHTML = `pick a number between 0 and ${rangeMax}`;
  } //왜 alert는 되는데 innerHTML은 안되는지??

  const checkingNum = Number(inputNumber.value, 2);
  if (checkingNum < 0) {
    inputNumber.value = Math.abs(checkingNum);
  }
  if (inputRange.value < checkingNum) {
    result.innerHTML = `pick a number smaller than ${inputRange.value}`;
    inputNumber.value = "";
  }
  if (Number(inputRange.value, 2) === 0) {
    result.innerHTML = `set the range`;
    yourNumber.innerHTML = "nothing";
    machineNumber.innerHTML = "nothing"; //왜 출력안됨???
    result.innerHTML = "You haven't set the range of number";
  }
}

function handleBtn(event) {
  // event.preventDefault();  << 찾아보기
  const currentValue = inputNumber.value;
  yourNumber.innerHTML = currentValue;

  const currentRange = inputRange.value;
  const randomNumber = Math.round(Math.random() * currentRange);
  machineNumber.innerHTML = randomNumber;

  if (Number(currentValue, 2) === randomNumber) {
    result.innerHTML = "You won";
  } else {
    result.innerHTML = "You lost";
  }
}

function handleRange(event) {
  const currentValue = inputRange.value;
  numberGenerator.innerHTML = currentValue;
}

function init() {
  playBtn.addEventListener("click", checkInputNumberRange);
  playBtn.addEventListener("click", handleBtn);
  inputRange.addEventListener("input", handleRange);
}
init();
