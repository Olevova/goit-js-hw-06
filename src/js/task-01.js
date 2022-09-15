const categoresLi = document.querySelectorAll("li.item")

// first solution

console.log(`Number of categories: ${categoresLi.length}`);
categoresLi.forEach((item) => {
    console.log(`Category: ${item.firstElementChild.textContent}`)
    console.log(`Elements:: ${item.lastElementChild.children.length}`)
    
})

console.log("***********************************");

// second solution
console.log(`Number of categories: ${categoresLi.length}`);

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

// console.log(document);
// const firstLi = document.querySelectorAll("li");
// console.log(firstLi.length, firstLi);
// const rr = []
// firstLi.forEach((i) => { rr.push(i.textContent) });
// const b = rr.map((i) =>  i + "new"
// );
// console.log(b);