const buttonMinusEl = document.querySelector("button[data-action = 'decrement']")
const buttonPlusEl = document.querySelector("button[data-action = 'increment']")
const counterEl = document.querySelector("#value");


let counter = Number(counterEl.textContent);
console.log(counter);

const onPlusClick = (event) => {
    console.log(event);
    let value = counter += 1
    return counterEl.textContent = value};
const onMinusClick = (event) => {
    console.log(event);
    let value = counter -= 1
    return counterEl.textContent = value
}
    ;

buttonPlusEl.addEventListener("click", onPlusClick);
buttonMinusEl.addEventListener("click", onMinusClick);