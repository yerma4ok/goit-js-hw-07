import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const galleryImg = createGalleryItems(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", galleryImg);
galleryContainer.addEventListener("click", galleryClick);

function createGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <div class="gallery__item">
      <a class="gallery__link" href="${original}">
      <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
         />
      </a>
      </div>
      `;
    })
    .join("");
}

function galleryClick(evt) {
  evt.preventDefault();
  const galleryClickElement = evt.target.classList.contains('gallery__image');
  if (!galleryClickElement) {
    return;
  }

  const selectedImage = evt.target.getAttribute('data-source');
  console.log(selectedImage);

  const instance = basicLightbox.create(`
      <img src="${selectedImage}" width="800" height="600">
  `);

  instance.show();

  galleryContainer.addEventListener("keydown", (evt) => {
    if (evt.key === "Escape") {
      
   instance.close();
    }
  });

 

}
