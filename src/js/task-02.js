const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.querySelector("ul");

const elemLi = ingredients.map((text) => {
const item = document.createElement("li");
item.textContent = text;
console.log(item);
return item
})

list.append(...elemLi);


// second solution of spread
// elemLi.forEach((i) => list.append(i));
// console.log(elemLi);




