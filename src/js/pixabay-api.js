const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '46844494-ff9f555a2e638e0a9d57299e3';

const getPixabayImages = (request, numPage = 1) => {
  return fetch(
    BASE_URL +
      '?key=' +
      API_KEY +
      '&q=' +
      `${request}` +
      '&image_type=photo' +
      '&orientation=horizontal' +
      '&per_page=9' +
      '&page=' +
      `${numPage}` +
      '&safesearch=true'
  );
};

export default getPixabayImages;