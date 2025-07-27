import{a as q,S as P,i}from"./assets/vendor-Dy2ZTtfi.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const R="11580437-1a487efdd1ade7df450dc5ee8",B="https://pixabay.com/api/";async function f(a,o){const e={key:R,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:o};try{return(await q.get(B,{params:e})).data}catch(s){throw console.error("❌ Помилка при запиті до Pixabay:",s),s}}const y=document.querySelector(".gallery"),h=document.querySelector(".loader"),m=document.querySelector(".load-more-btn"),$=new P(".gallery a",{captionsData:"alt",captionDelay:250});function g(a){const o=a.map(e=>`
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
  `).join("");y.insertAdjacentHTML("beforeend",o),$.refresh()}function M(){y.innerHTML=""}function L(){h.classList.remove("hidden")}function b(){h.classList.add("hidden")}function w(){m.classList.remove("hidden")}function c(){m.classList.add("hidden")}const v=document.querySelector(".form"),d=v.querySelector(".search-images-input"),u=document.querySelector(".load-more-btn");let p="",n=1,S=0;v.addEventListener("submit",async a=>{a.preventDefault();const o=d.value.trim();if(!o){i.error({message:"Please enter a search query!",position:"topRight"});return}M(),c(),L(),p=o,n=1;try{const e=await f(p,n);S=e.totalHits,e.hits.length===0?i.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(g(e.hits),e.totalHits>15&&w())}catch{i.error({message:"Oops! Something went wrong. Please try again later.",position:"topRight"})}finally{b(),d.value=""}});u.addEventListener("click",async()=>{n+=1,L(),c();try{const a=await f(p,n);g(a.hits);const o=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:o*2,behavior:"smooth"}),u.scrollIntoView({behavior:"smooth",block:"center"}),n*15>=S?(i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),c()):w()}catch{i.error({message:"Failed to load more images. Please try again.",position:"topRight"})}finally{b()}});
//# sourceMappingURL=index.js.map
