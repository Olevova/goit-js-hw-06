const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const ingredients2 = [
//   'Potatoes',
//   'Mushrooms',
// ];


const list = document.querySelector("ul");

function elemMaker(ingredients) {
  return ingredients.map((text) => {
  const item = document.createElement("li");
  item.textContent = text;
  console.log(item);
  return item
  })
}

const elemLi = elemMaker(ingredients);
list.append(...elemLi);

// const elemLi2 = elemMaker(ingredients2);
// list.append(...elemLi2);



// ***********************second solution of spread********************
// elemLi.forEach((i) => list.append(i));
// console.log(elemLi);




