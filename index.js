import{a as S,S as q,i}from"./assets/vendor-Dy2ZTtfi.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const p of r.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&a(p)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const P="11580437-1a487efdd1ade7df450dc5ee8",R="https://pixabay.com/api/";async function f(s,o){const e={key:P,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:o};try{return(await S.get(R,{params:e})).data}catch(a){throw console.error("❌ Помилка при запиті до Pixabay:",a),a}}const y=document.querySelector(".gallery"),m=document.querySelector(".loader"),g=document.querySelector(".load-more-btn"),B=new q(".gallery a",{captionsData:"alt",captionDelay:250});function L(s){const o=s.map(e=>`
    <li class="gallery-item">
      <a href="${e.largeImageURL}">
        <img src="${e.webformatURL}" alt="${e.tags}" />
      </a>
      <ul class="info">
        <li class="prop">
          <p class="prop-label">Likes</p>
          <p class="prop-value">${e.likes}</p>
        </li>
        <li class="prop">
          <p class="prop-label">Views</p>
          <p class="prop-value">${e.views}</p>
        </li>
        <li class="prop">
          <p class="prop-label">Comments</p>
          <p class="prop-value">${e.comments}</p>
        </li>
        <li class="prop">
          <p class="prop-label">Downloads</p>
          <p class="prop-value">${e.downloads}</p>
        </li>
      </ul>
    </li>
  `).join("");y.insertAdjacentHTML("beforeend",o),B.refresh()}function $(){y.innerHTML=""}function b(){m.classList.remove("hidden")}function d(){m.classList.add("hidden")}function w(){g.classList.remove("hidden")}function n(){g.classList.add("hidden")}const v=document.querySelector(".form"),M=v.querySelector(".search-images-input"),O=document.querySelector(".load-more-btn");let u="",l=1,h=0,c=0;v.addEventListener("submit",async s=>{s.preventDefault();const o=M.value.trim();if(!o){i.error({message:"Please enter a search query!",position:"topRight"}),d();return}$(),n(),b(),u=o,l=1;try{const e=await f(u,l);h=e.totalHits,c=e.hits.length,e.hits.length===0?i.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(L(e.hits),c>=h?(i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),n()):w())}catch{i.error({message:"Oops! Something went wrong. Please try again later.",position:"topRight"})}finally{d()}});O.addEventListener("click",async()=>{l+=1,b(),n();try{const s=await f(u,l);L(s.hits),c+=s.hits.length;const o=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:o*2,behavior:"smooth"}),c>=h?(i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),n()):w()}catch{i.error({message:"Failed to load more images. Please try again.",position:"topRight"})}finally{d()}});
//# sourceMappingURL=index.js.map
