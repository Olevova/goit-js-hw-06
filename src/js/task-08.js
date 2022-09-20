const formEl = document.querySelector(".login-form");
// const emailPut = document.querySelector("input[email]")

// console.log(formEl);
const forma = (event) => {
  
  event.preventDefault();
  const {elements:{email, password}} = event.currentTarget;
  if (!email.value || !password.value){
    return alert("Всі поля мають бути заповнені");
  }
  const userValues =
  {
    email: email.value,
    password: password.value
  }
  
  console.log(userValues);
  event.currentTarget.reset();
}

formEl.addEventListener("submit", forma);
