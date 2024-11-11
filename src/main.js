import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import createGalleryHTML from './js/render-functions';
import getPixabayImages from './js/pixabay-api';

const HIDE = '#f8f8f8';
const SHOW = '#4e75ff';

iziToast.settings({
  timeout: 1000,
  resetOnHover: true,
  transitionIn: 'flipInX',
  transitionOut: 'flipOutX',
  position: 'topCenter',
});

const simpleGallery = new SimpleLightbox('.gallery-item a', {
  captionType: 'alt',
  captionDelay: 250,
});
simpleGallery.on('show.simplelightbox');
const gallery = document.querySelector('ul.gallery');
let lastRequest = '';
let currentRequest = '';
let numberPage = 1;

const submit = document.querySelector('.search');
submit.addEventListener('submit', event => {
  event.preventDefault();
  currentRequest = event.target.search.value;
  if (currentRequest != '') {
    if (currentRequest === lastRequest) numberPage++;
    else numberPage = 1;
    lastRequest = currentRequest;
    gallery.innerHTML = '';
    changeLoadingState(SHOW);
    getPixabayImages(lastRequest, numberPage)
      .then(response => validateResponse(response))
      .then(images => showGallery(images))
      .catch(error => console.log(error))
      .finally(() => changeLoadingState(HIDE));
  } else {
    gallery.innerHTML = '';
    iziToast.error({ title: 'Error', message: 'Empty request' });
  }
});

const validateResponse = response => {
  if (!response.ok) {
    throw new Error(response.status);
  }
  return response.json();
};

const showGallery = images => {
  if (images.totalHits != 0) {
    gallery.insertAdjacentHTML('beforeend', createGalleryHTML(images));
    simpleGallery.refresh();
  } else {
    iziToast.warning({ title: 'Warning', message: 'Images dont fined!' });
  }
};

const changeLoadingState = state =>
  (document.querySelector('.loader').style.borderColor = state);
