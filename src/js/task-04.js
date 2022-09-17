const buttonMinusEl = document.querySelector("button[data-action = 'decrement']")
const buttonPlusEl = document.querySelector("button[data-action = 'increment']")
const counterEl = document.querySelector("#value");


let counter = Number(counterEl.textContent);
console.log(counter);

const plus = () => {
    let value = counter += 1
    return counterEl.textContent = value};
const minus = () => {
    let value = counter -= 1
    return counterEl.textContent = value
}
    ;

buttonPlusEl.addEventListener("click", plus);
buttonMinusEl.addEventListener("click", minus);