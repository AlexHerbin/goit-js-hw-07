import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const imgEl = document.querySelector('.gallery')
console.log(imgEl);
const GalleryGrid = createGalleryGrid(galleryItems)
imgEl.innerHTML = GalleryGrid;


function createGalleryGrid(items) {
    return items.map(item => `<ul class="gallery__item"> <li class="gallery__link"> <img class="gallery__image" src = "${item.preview}" alt = "${item.description}"></img> </li> </ul>`).join("");
}

console.log(GalleryGrid);


