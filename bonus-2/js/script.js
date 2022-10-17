
const imgList = [
  "01.jpg",
  "02.jpg",
  "03.jpg",
  "04.jpg",
  "05.jpg"
];

let imgTag = '';
let carouselTag = ''

const imgWrapper = document.querySelector('.img-wrapper');
const carousel = document.querySelector('.carousel');

for(let i = 0; i < imgList.length; i++){
  imgTag += `
    <img class="items" src="img/${imgList[i]}" alt="${imgList[i]}">
  `;
  carouselTag += `
  <img class="carousel-items" src="img/${imgList[i]}" alt="${imgList[i]}">
`;
}

imgWrapper.innerHTML += imgTag;
carousel.innerHTML += carouselTag;

let elCounter = 0;
const element = document.getElementsByClassName('items');
const elementCarousel = document.getElementsByClassName('carousel-items');

element[elCounter].classList.add('active');
elementCarousel[elCounter].classList.add('active');

const prev = document.querySelector('.up');
const next = document.querySelector('.down');

if(elCounter === 0){
  prev.classList.add('hide');
}

next.addEventListener('click', function(){
  element[elCounter].classList.remove('active');
  elementCarousel[elCounter].classList.remove('active');
  elCounter++;
  element[elCounter].classList.add('active');
  elementCarousel[elCounter].classList.add('active');

  prev.classList.remove('hide');
  
  if(elCounter === (imgList.length - 1)){
    next.classList.add('hide');
  }
});

prev.addEventListener('click', function(){
  element[elCounter].classList.remove('active');
  elementCarousel[elCounter].classList.remove('active');
  elCounter--;
  element[elCounter].classList.add('active');
  elementCarousel[elCounter].classList.add('active');

  next.classList.remove('hide');

  if(elCounter === 0){
    prev.classList.add('hide');
  }
});










