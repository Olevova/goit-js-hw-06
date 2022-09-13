// console.log(document);
// const firstLi = document.querySelectorAll("li");
// console.log(firstLi.length, firstLi);
// const rr = []
// firstLi.forEach((i) => { rr.push(i.textContent) });
// const b = rr.map((i) =>  i + "new"
// );
// console.log(b);

const categoresLi = document.querySelectorAll("li.item")

console.log(`Number of categories: ${categoresLi.length}`);

// console.log(categoresLi);
categoresLi.forEach((item) => {
    const title = item.querySelector("h2");
    const categoryLi = item.querySelectorAll("li")
    console.log(`Category: ${title.textContent}\nElements: ${categoryLi.length}`);
});



// const title = document.querySelector(".bb");
// console.log(title);

// const categoresUl = document.querySelectorAll("li.item ul li")



// // const categoresUlLi = categoresUl.querySelectorAll("li");
// const t = [...categoresUl];
// console.log(t.length);