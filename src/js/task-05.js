const inputForm = document.querySelector("input");
const outputValue = document.querySelector("#name-output")

inputForm.addEventListener("input", onOutPutChangeValue);

function onOutPutChangeValue(event) {
    if (!event.currentTarget.value) {
        outputValue.textContent  = "Anonymous"
        console.log(outputValue.textContent, event.currentTarget);
    }
    else {
        console.log(outputValue.textContent, event.currentTarget );
        outputValue.textContent = event.currentTarget.value;
    }
}