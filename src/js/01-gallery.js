// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

// ----------------------------Формуємо розмітку-------------------------------------------
const getGalleryRef = document.querySelector(".gallery");
const addGalleryPictures = galleryItems.map(({ preview, original, description }) => {
    console.log(description)
    return `<a class="gallery__item" href=${original}>
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>`;
}).join("");


// ----------------------------Рендеримо розмітку-------------------------------------------

getGalleryRef.innerHTML = addGalleryPictures;


// ----------------------------Скидаємо всю роботу на simplelightbox -------------------------------------------
new SimpleLightbox('.gallery a', {
    scrollZoom: true,
    captions: true,
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
});
