import{a as b,i,S as w}from"./assets/vendor-BzajH6aU.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))y(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const p of o.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&y(p)}).observe(document,{childList:!0,subtree:!0});function c(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function y(r){if(r.ep)return;r.ep=!0;const o=c(r);fetch(r.href,o)}})();function H(e){return`<li class="gallery-item">
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
    </li>`}function S(e){let t="";for(const c of e.hits)t+=H(c);return t}const P="https://pixabay.com/api",q="46844494-ff9f555a2e638e0a9d57299e3",h=async(e,t=1)=>await b({method:"get",url:P+"/?key="+q+`&q=${e}&image_type=photo&orientation=horizontal&per_page=15&page=${t}&safesearch=true`}),n="none",m="block";i.settings({timeout:1e3,resetOnHover:!0,transitionIn:"flipInX",transitionOut:"flipOutX",position:"topCenter"});const g=new w(".gallery-item a",{captionType:"alt",captionDelay:250});g.on("show.simplelightbox");const d=document.querySelector("ul.gallery");let f="",u="",s=1;const O=document.querySelector(".search");O.addEventListener("submit",e=>{e.preventDefault(),u=e.target.search.value.trim(),u!=""?(s=1,d.innerHTML="",f=u,l(n),a(m),h(f,s).then(t=>v(t)).then(t=>L(t)).catch(t=>console.log(t)).finally(()=>a(n))):(d.innerHTML="",l(n),i.error({title:"Error",message:"Empty request"}))});const E=document.querySelector(".but_more");E.addEventListener("click",e=>{s++,l(n),a(m),h(f,s).then(t=>v(t)).then(t=>L(t)).catch(t=>console.log(t)).finally(()=>a(n))});const v=e=>{if(e.status!=200)throw new Error(e.status);return e.data},L=e=>{e.totalHits!=0?(d.insertAdjacentHTML("beforeend",S(e)),g.refresh(),s>1&&window.scrollBy({top:464,left:0,behavior:"smooth"}),e.totalHits-s*15>0?l(m):i.info({title:"Info",position:"center",message:"We're sorry, but you've reached the end of search results."})):i.warning({title:"Warning",message:"Images dont fined!"})},a=e=>document.querySelector(".loader").style.display=e,l=e=>document.querySelector(".but_more").style.display=e;
//# sourceMappingURL=index.js.map
