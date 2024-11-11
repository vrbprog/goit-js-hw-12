import{i as p,S as m}from"./assets/vendor-BrddEoy-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))u(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&u(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function u(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function y(e){return`<li class="gallery-item">
    <a class="gallery-link" href="${e.largeImageURL}">
        <img
        class="gallery-image"
        src="${e.webformatURL}"
        title="${e.tags}"
        />
    </a>
    <div class="properties">
        <div class="property">
            <p class="nameProp">Likes</p>
            <p>${e.likes}</p>
        </div>
        <div class="property">
            <p class="nameProp">Views</p>
            <p>${e.views}</p>
        </div>
        <div class="property">
            <p class="nameProp">Comments</p>
            <p>${e.comments}</p>
        </div>
        <div class="property">
            <p class="nameProp">Downloads</p>
            <p>${e.downloads}</p>
        </div>
    </div>
    </li>`}function g(e){let t="";for(const n of e.hits)t+=y(n);return t}const h="https://pixabay.com/api/",L="46844494-ff9f555a2e638e0a9d57299e3",v=(e,t=1)=>fetch(h+"?key="+L+`&q=${e}&image_type=photo&orientation=horizontal&per_page=9&page=${t}&safesearch=true`),b="#f8f8f8",w="#4e75ff";p.settings({timeout:1e3,resetOnHover:!0,transitionIn:"flipInX",transitionOut:"flipOutX",position:"topCenter"});const d=new m(".gallery-item a",{captionType:"alt",captionDelay:250});d.on("show.simplelightbox");const c=document.querySelector("ul.gallery");let a="",o="",l=1;const H=document.querySelector(".search");H.addEventListener("submit",e=>{e.preventDefault(),o=e.target.search.value,o!=""?(o===a?l++:l=1,a=o,c.innerHTML="",f(w),v(a,l).then(t=>P(t)).then(t=>O(t)).catch(t=>console.log(t)).finally(()=>f(b))):(c.innerHTML="",p.error({title:"Error",message:"Empty request"}))});const P=e=>{if(!e.ok)throw new Error(e.status);return e.json()},O=e=>{e.totalHits!=0?(c.insertAdjacentHTML("beforeend",g(e)),d.refresh()):p.warning({title:"Warning",message:"Images dont fined!"})},f=e=>document.querySelector(".loader").style.borderColor=e;
//# sourceMappingURL=index.js.map
