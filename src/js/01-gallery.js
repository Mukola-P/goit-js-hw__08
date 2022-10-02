import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

const galleryRef = document.querySelector('.gallery');

function galleryMarkup(items) {
  const markup = items
    .map(item => {
      return `<a class="gallery__item" href="${item.original}">
                <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
                </a>`;
    })
    .join('');

  galleryRef.innerHTML = markup;
}
console.log(galleryRef);

galleryMarkup(galleryItems);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
