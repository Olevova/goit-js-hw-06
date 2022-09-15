const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.querySelector("ul");
const elemLi = ingredients.map((i) => {
const item = document.createElement("li");
  item.textContent = i;
  item.classList.add("item")
  console.log(item);
return item
})


elemLi.forEach((i) => list.append(i));
// console.log(elemLi);



