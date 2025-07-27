import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-more-btn');


const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images.map(img => `
    <li class="gallery-item">
      <a href="${img.largeImageURL}">
        <img src="${img.webformatURL}" alt="${img.tags}" />
      </a>
      <ul class="info">
        <li class="prop">
          <p class="prop-label">Likes</p>
          <p class="prop-value">${img.likes}</p>
        </li>
        <li class="prop">
          <p class="prop-label">Views</p>
          <p class="prop-value">${img.views}</p>
        </li>
        <li class="prop">
          <p class="prop-label">Comments</p>
          <p class="prop-value">${img.comments}</p>
        </li>
        <li class="prop">
          <p class="prop-label">Downloads</p>
          <p class="prop-value">${img.downloads}</p>
        </li>
      </ul>
    </li>
  `).join('');

  galleryContainer.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  galleryContainer.innerHTML = '';
}

export function showLoader() {
  loader.classList.remove('hidden'); 
}

export function hideLoader() {
  loader.classList.add('hidden');  
}

export function showLoadMoreButton() {
  loadMoreBtn.classList.remove('hidden');
}

export function hideLoadMoreButton() {
  loadMoreBtn.classList.add('hidden');
}