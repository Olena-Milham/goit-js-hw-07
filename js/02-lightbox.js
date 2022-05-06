import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryEl = document.querySelector('.gallery');
const markup = galleryItems
  .map(
    item => `<li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
     
      alt="${item.description}"
    />
  </a>
</li>`,
  )
  .join('');

galleryEl.insertAdjacentHTML('afterbegin', markup);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  //   captionPosition: 'bottom', (default option)
});
