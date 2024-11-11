import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '46844494-ff9f555a2e638e0a9d57299e3';

const getPixabayImages = async (request, numPage = 1) => {

  // return await axios.get('https://pixabay.com/api',
  //   {
  //      headers: {
  //      'Access-Control-Allow-Origin' : '*',
  //      'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
  //    },
  //     params: {
  //       key: API_KEY,
  //       q: `${request}`,
  //       image_type: 'photo',
  //       orientation: 'horizontal',
  //       per_page: 15,
  //       page: `${numPage}`,
  //       safesearch: true
  //     }
  // }
  // )

  return await axios({
    method: 'get',
    url: BASE_URL +
      `/?key=` +
      API_KEY +
      `&q=${request}` +
      `&image_type=photo` +
      `&orientation=horizontal` +
      `&per_page=15` +
      `&page=${numPage}` +
      `&safesearch=true`
  });
  
};  

export default getPixabayImages;