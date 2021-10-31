import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

const galleryRef = document.querySelector('.gallery');

const galleryItem = galleryItems.map(({ preview, original, description }) => {
  return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
    />
    </a>
    </li>`;
}).join('');

galleryRef.insertAdjacentHTML('beforeend', galleryItem);



const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  nav: true,
  captionDelay: 250,
  captionPosition: 'bottom',
  overlay: true,
  spinner: true,
  animationSpeed: 500
});


