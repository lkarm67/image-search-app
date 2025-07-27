import axios from "axios";

const API_KEY = '11580437-1a487efdd1ade7df450dc5ee8';
const BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query, page) {
    const params = {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 15,
      page: page,
    };
  
   
  try {
    const response = await axios.get(BASE_URL, { params });
    return response.data;
  } catch (error) {
    console.error('❌ Помилка при запиті до Pixabay:', error);
    throw error;
    }
  };
