
function createCardHTML(image) {
    const cardHTML = `<li class="gallery-item">
    <a class="gallery-link" href="${image.largeImageURL}">
        <img
        class="gallery-image"
        src="${image.webformatURL}"
        title="${image.tags}"
        />
    </a>
    <div class="properties">
        <div class="property">
            <p class="nameProp">Likes</p>
            <p>${image.likes}</p>
        </div>
        <div class="property">
            <p class="nameProp">Views</p>
            <p>${image.views}</p>
        </div>
        <div class="property">
            <p class="nameProp">Comments</p>
            <p>${image.comments}</p>
        </div>
        <div class="property">
            <p class="nameProp">Downloads</p>
            <p>${image.downloads}</p>
        </div>
    </div>
    </li>`;

    return cardHTML;
}
            
export default function createGalleryHTML(images) {
    let strGallery = '';
    for (const image of images.hits) {
      strGallery += createCardHTML(image);
    }
    return strGallery;
}

            