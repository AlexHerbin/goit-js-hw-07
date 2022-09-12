import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const containerImg = document.querySelector('.gallery');
const galleryGrid = createGalleryGrid(galleryItems);
containerImg.innerHTML = galleryGrid;

function createGalleryGrid(items) {
    return items.map(item => `<div class="gallery__item"> <a class="gallery__link" href="${item.original}"> <img class="gallery__image" src = "${item.preview}"  alt = "${item.description}"/> </a> </div>`).join("");
};

new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
});
