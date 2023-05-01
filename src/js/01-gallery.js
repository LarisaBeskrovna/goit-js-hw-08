import "simplelightbox/dist/simple-lightbox.min.css";

const list = document.querySelector('.gallery');
let instance;
list.insertAdjacentHTML('beforeend', itemContauner());

function itemContauner() {
  return galleryItems
  .map(({original,preview, description}) => {
     return `<li class="gallery__item"> 
     <a class="gallery__link" href=${original}>
     <img class="gallery__image" 
     src=${preview} 
     alt="${description}"></img> </a> </li>`
  })
    .join('');}


  const lightbox = new SimpleLightbox('.gallery__link', {captionsData:"alt", captionDelay:250});

console.log(galleryItems);