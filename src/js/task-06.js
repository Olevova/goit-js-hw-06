const inputForm = document.querySelector("#validation-input")

console.log(inputForm);

const onBlureChangeColor = (event) => {
    inputForm.classList.add("invalid")
    if (inputForm.value.length === 6) {
        console.dir(inputForm, event.currentTarget);
        console.log(inputForm.value);
        inputForm.classList.replace("invalid","valid");
    }
    else {
        inputForm.classList.replace("valid", "invalid");
        console.dir(inputForm, event.currentTarget);
        console.log(inputForm.value);
    }
}

inputForm.addEventListener("blur", onBlureChangeColor);

