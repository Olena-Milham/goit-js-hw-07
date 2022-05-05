import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// 1.Creating and rendering markup
// from the galleryItems data array
// and provided gallery item template.

// Однотипная (шаблонная) разметка создается из
// массива данных.Приём заключается в переборе этого
// массива и составлении одной строки с HTML тегами,
// которую потом записываем в innerHTML элемента.

// Create a gallery with the ability to click
// on its items and view full size images in a modal window.

// const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
// const list = document.querySelector(".list");

// const markup = technologies
//   .map((technology) => `<li class="list-item">${technology}</li>`)
//   .join("");

// // Check the console, you'll see a single string with HTML tags
// console.log(markup);

// // Adding all the markup in one operation
// list.innerHTML = markup;

const galleryEl = document.querySelector('.gallery');
const markup = galleryItems
  .map(
    item => `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`,
  )
  .join('');

// console.log(markup);
// galleryEl.innerHTML = markup;

galleryEl.insertAdjacentHTML('afterbegin', markup);

// *Please note that the image is wrapped in a link,
//  which means that, when clicked, the user will
// be redirected to another page by default.
//  Disable this behavior by default.

// const linkEl = document.querySelector('gallery__link');

// linkEl.addEventListener('click', handleClick);

// function handleClick(event) {
//   event.preventDefault();
//   console.log('Image was clicked');
// }

// 2.Implementing delegation to div.gallery
// and getting the url of a large image.

// фильтр цели клика
galleryEl.addEventListener('click', onClick);

function onClick(event) {
  event.preventDefault();
  //   console.log(event.target);
  // console.log(event.target.nodeName);
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const instance = basicLightbox.create(`
      <img src="${event.target.dataset.source}"
      data-source="${event.target.dataset.source}">
  `);

  document.addEventListener('keydown', onEscKeyPress);
  function onEscKeyPress(event) {
    const isEscKey = event.code === 'Escape';
    if (isEscKey) {
      instance.close();
    }
    document.removeEventListener('keydown', onEscKeyPress);
  }
  instance.show();
}
