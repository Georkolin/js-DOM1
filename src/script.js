const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");

const addButton = document.getElementById("add");
const subtractButton = document.getElementById("subtract");
const multiplyButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");

const resultElement = document.getElementById("result");

console.log("Елементи завантажено:", {
  num1Input,
  num2Input,
  addButton,
  resultElement,
});

function getInputValues() {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
  return { num1, num2 };
}

divideButton.addEventListener("click", function () {
  const { num1, num2 } = getInputValues();
  const div = num1 / num2;
  resultElement.textContent = div.toFixed(2);
});

multiplyButton.addEventListener("click", function () {
  const { num1, num2 } = getInputValues();
  const pow = num1 * num2;
  resultElement.textContent = pow.toFixed(2);
});

subtractButton.addEventListener("click", function () {
  const { num1, num2 } = getInputValues();
  const vid = num1 - num2;
  resultElement.textContent = vid.toFixed(2);
});

addButton.addEventListener("click", function () {
  const { num1, num2 } = getInputValues();
  const sum = num1 + num2;
  resultElement.textContent = sum.toFixed(2);
});
