const formEl = document.querySelector(".login-form");
// const emailPut = document.querySelector("input[email]")

// console.log(formEl);
const forma = (event) => {
    event.preventDefault();
    console.log(event.currentTarget.elements);
    const {elements:{ email, password }
  } = event.currentTarget;
  console.log(email.value, password.value);
}

formEl.addEventListener("submit", forma);
