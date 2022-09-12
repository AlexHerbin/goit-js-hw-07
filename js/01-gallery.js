import { galleryItems } from './gallery-items.js';
// Change code below this line

const containerImg = document.querySelector('.gallery');
const galleryGrid = createGalleryGrid(galleryItems);
containerImg.innerHTML = galleryGrid;

function createGalleryGrid(items) {
    return items.map(item => `<div class="gallery__item"> <a class="gallery__link" href="${item.original}"> <img class="gallery__image" src = "${item.preview}" data-source = "${item.original}" alt = "${item.description}"/> </a> </div>`).join("");
};

containerImg.addEventListener('click', onImgClick);

function onImgClick(evt) {
    evt.preventDefault();
    
    if (evt.target.nodeName !== "IMG") {
        return
    };

    const originalImg = evt.target.dataset.source;

    const modal = basicLightbox.create(`
    <img src="${originalImg}">
    `,
        {
            onShow: () => { window.addEventListener('keydown', onEscPress)},
            
            onClose: () => { window.removeEventListener('keydown', onEscPress)}
        }
    );
    modal.show();

    function onEscPress(evt) {
        const ESC_KEY_COD = 'Escape';
        if (evt.code === ESC_KEY_COD) {
            modal.close()
        }
    }
};




