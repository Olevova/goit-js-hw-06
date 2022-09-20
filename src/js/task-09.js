function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonEl = document.querySelector(".widget")
const spanEl = document.querySelector(".color")
const bodyPart = document.body
console.log(bodyPart);

const onBodyChangeColor = (event) => {
  const newColor = getRandomHexColor();
  spanEl.textContent = newColor;
  bodyPart.style.backgroundColor  = newColor;

}

buttonEl.addEventListener("click", onBodyChangeColor);