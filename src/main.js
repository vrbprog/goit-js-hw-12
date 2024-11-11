import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import createGalleryHTML from './js/render-functions';
import getPixabayImages from './js/pixabay-api';

const HIDE = 'none';
const SHOW = 'block';


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
  currentRequest = event.target.search.value.trim();
  if (currentRequest != '') {

    numberPage = 1;
    gallery.innerHTML = '';

    lastRequest = currentRequest;
    changeMoreState(HIDE);
    changeLoadingState(SHOW);
    getPixabayImages(lastRequest, numberPage)
      .then(response => validateResponse(response))
      .then(images => showGallery(images))
      .catch(error => console.log(error))
      .finally(() => changeLoadingState(HIDE));
  } else {
    gallery.innerHTML = '';
    changeMoreState(HIDE);
    iziToast.error({ title: 'Error', message: 'Empty request' });
  }
});

const more_submit = document.querySelector('.but_more');
more_submit.addEventListener('click', event => {
    numberPage++;
    changeMoreState(HIDE);
    changeLoadingState(SHOW);
    getPixabayImages(lastRequest, numberPage)
      .then(response => validateResponse(response))
      .then(images => showGallery(images))
      .catch(error => console.log(error))
      .finally(() => changeLoadingState(HIDE));
});

const validateResponse = response => {
  if (response.status != 200) {
    throw new Error(response.status);
  }
  return response.data;
};

const showGallery = images => {
  if (images.totalHits != 0) {
    gallery.insertAdjacentHTML('beforeend', createGalleryHTML(images));
    simpleGallery.refresh();
    if (numberPage > 1) {
        window.scrollBy({
        top: 464,
        left: 0,
        behavior: "smooth",
    });
    }

    if ((images.totalHits - numberPage * 15) > 0) {
      changeMoreState(SHOW);
    }
    else {
      iziToast.info({ title: 'Info', position: 'center', message: "We're sorry, but you've reached the end of search results." });
    }
  } else {
    iziToast.warning({ title: 'Warning', message: 'Images dont fined!' });
  }
};

const changeLoadingState = state =>
  (document.querySelector('.loader').style.display = state);

const changeMoreState = state =>
  (document.querySelector('.but_more').style.display = state);

