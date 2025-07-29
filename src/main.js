import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions.js';

const form = document.querySelector('.form');
const input = form.querySelector('.search-images-input');
const loadMoreBtn = document.querySelector('.load-more-btn');

let currentQuery = '';
let currentPage = 1;
let totalHits = 0;
let alreadyLoaded = 0; 

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const query = input.value.trim();
  
    if (!query) {
      iziToast.error({
        message: 'Please enter a search query!',
        position: 'topRight',
      });
      hideLoader();
      return;
    }
  
    clearGallery();
    hideLoadMoreButton();
    showLoader();
    currentQuery = query;
    currentPage = 1;
  
    try {
      const data = await getImagesByQuery(currentQuery, currentPage);
      totalHits = data.totalHits;
      alreadyLoaded = data.hits.length; 
        
      if (data.hits.length === 0) {
          
          iziToast.info({
            message: 'Sorry, there are no images matching your search query. Please try again!',
            position: 'topRight',
          });
      } else {
          createGallery(data.hits);
            
          if (alreadyLoaded >= totalHits) {
            iziToast.info({
              message: "We're sorry, but you've reached the end of search results.",
              position: 'topRight',
          });
          hideLoadMoreButton();
          } else {
          showLoadMoreButton();
          }
      }
    } catch(error) {
        iziToast.error({
          message: 'Oops! Something went wrong. Please try again later.',
          position: 'topRight',
        });
    } finally {
      hideLoader();
    } 
});

loadMoreBtn.addEventListener('click', async () => {
  currentPage += 1;
  showLoader();
  hideLoadMoreButton();
    
  try {
    const data = await getImagesByQuery(currentQuery, currentPage);
    createGallery(data.hits);
    alreadyLoaded += data.hits.length; 

    
    const cardHeight = document.querySelector('.gallery-item').getBoundingClientRect().height;
    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth'
    });
    
    if (alreadyLoaded >= totalHits) {
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
      hideLoadMoreButton();
    } else {
      showLoadMoreButton();
    }
  } catch (error) {
    iziToast.error({
      message: 'Failed to load more images. Please try again.',
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
});  

