const radioBtn = document.querySelector("#font-size-control");
const textEl = document.querySelector('#text');

radioBtn.addEventListener('change', onTextChangeFont)


function onTextChangeFont(event) {
    textEl.style.fontSize = `${radioBtn.value}px`
    // console.log(radioBtn.value);
}