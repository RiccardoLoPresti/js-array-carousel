
const imgList = [
  "01.jpg",
  "02.jpg",
  "03.jpg",
  "04.jpg",
  "05.jpg"
];

let imgTag = '';

const imgWrapper = document.querySelector('.img-wrapper');

for(let i = 0; i < imgList.length; i++){
  imgTag += `
    <img class="items" src="img/${imgList[i]}" alt="${imgList[i]}">
  `;
}

imgWrapper.innerHTML += imgTag;

let elCounter = 0;
const element = document.getElementsByClassName('items');

element[elCounter].classList.add('active');