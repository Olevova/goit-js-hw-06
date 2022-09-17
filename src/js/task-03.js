const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
]

//++++++++++++++++++++First solution+++++++++++++++++++++

const myImage = images.map(({ url, alt }) => 
  `<li> <img src=${url} alt=${alt} /> </li>`
).join("");

console.log(myImage);

const list = document.querySelector(".gallery");
list.classList.add("third-task-img");
list.insertAdjacentHTML("beforeend", myImage);



// +++++++++Second Solution++++++++++++
// const list = document.querySelector(".gallery");
// list.classList.add("third-task-img");


// const makeImage = ({ url, alt }) => {
//     const image = document.createElement("img");
//     image.src = url;
//     image.alt = alt;
//     console.log(`<li>${image}</li>`);
//     return image;

// }

// const makeImgBlock = (arr) => arr.map(makeImage);

// const myImage =  makeImgBlock(images);
// list.append(...myImage);

// ++++++++++++Third solution++++++++++++++++++++++
// const list = document.querySelector(".gallery");
// list.classList.add("third-task-img");
// const makeImage = (arr) => arr.map(({ url, alt }) => {
//     const image = document.createElement("img");
//     image.src = url;
//     image.alt = alt;
//     console.log(image);
//     return image;

//   });

// const myImage2 = makeImage(images);
// list.append(...myImage2);

