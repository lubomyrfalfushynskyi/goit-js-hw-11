import axios from 'axios';

const API_KEY = '53481341-e80ac65b3d507f200d27055db';
const BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  };

  const response = await axios.get(BASE_URL, { params });
  return response.data;
}
