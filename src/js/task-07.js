const radioBtn = document.querySelector("#font-size-control");
const textEl = document.querySelector('#text');

radioBtn.addEventListener('change', onTextChangeFont)


function onTextChangeFont() {
    textEl.style.fontSize = `${radioBtn.value}px`
    // console.log(radioBtn.value);
}