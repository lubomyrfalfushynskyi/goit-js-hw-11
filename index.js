import{a as u,S as f,i}from"./assets/vendor-DvfmeZXB.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const m="53481341-e80ac65b3d507f200d27055db",g="https://pixabay.com/api/";async function h(s){const r={key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"};return(await u.get(g,{params:r})).data}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),y=new f(".gallery a");function b(s){const r=s.map(({webformatURL:n,largeImageURL:o,tags:e,likes:t,views:a,comments:p,downloads:d})=>`
        <li class="gallery-item">
          <a href="${o}">
            <img src="${n}" alt="${e}" />
            <div class="info">
              <p><b>Likes</b><span>${t}</span></p>
              <p><b>Views</b><span>${a}</span></p>
              <p><b>Comments</b><span>${p}</span></p>
              <p><b>Downloads</b><span>${d}</span></p>
            </div>
          </a>
        </li>
      `).join("");c.insertAdjacentHTML("beforeend",r),y.refresh()}function L(){c.innerHTML=""}function w(){l.classList.remove("hidden")}function S(){l.classList.add("hidden")}const P=document.querySelector(".form");P.addEventListener("submit",q);async function q(s){s.preventDefault();const n=new FormData(s.target).get("search-text").trim();if(!n){i.warning({title:"Warning",message:"Please enter a search term!",position:"topRight"});return}L(),w();try{const o=await h(n);o.hits.length===0?i.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):b(o.hits)}catch{i.error({title:"Error",message:"Something went wrong. Please try again!",position:"topRight"})}finally{S()}}
//# sourceMappingURL=index.js.map
