function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector("input")
const divEl = document.querySelector('#boxes');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');


function createBoxes(amount) {
  let width = 30;
  let height = 30;
  const divArr = [];
  const divForDel = document.createElement("div");
  divForDel.classList.add("temporary");
  divEl.append(divForDel);
  for (let i = 0; i < amount; i += 1){
    let divColor = getRandomHexColor();
    const elem = document.createElement("div");
    elem.style.width = `${width}px`;
    elem.style.height = `${height}px`;
    elem.style.backgroundColor = divColor;
    width += 10;
    height += 10;
    console.log(elem, i);
    divArr.push(elem);

  }
  return divForDel.append(...divArr);
}

function onBtnCreateDiv(event) {
  // const { elements: { number } } = event.currentTarget;
  console.log(inputEl.value);
  const amount = Number(inputEl.value);
  // console.log(amount);
  createBoxes(amount)
  // return createBoxes
}

// console.log(createBoxes(5));

createBtn.addEventListener("click", onBtnCreateDiv);

console.log(divEl.children);



const destroyBoxes = (event) => {
  const divElForDel = document.querySelector(".temporary");
  console.log(divElForDel);
  divElForDel.remove();
  inputEl.value = "";
};


destroyBtn.addEventListener("click", destroyBoxes)
// const divElForDel = divEl.children;
// console.log(divElForDel);