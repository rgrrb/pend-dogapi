'use strict'

const searchImg = document.getElementById('searchImg');
const inputSearch = document.getElementById('search');
const imgCard = document.getElementsByClassName('containerPhotos');

async function buscarApiImagens (breed){
    const url = `https://dog.ceo/api/breed/${breed}/images`;
    const response = await fetch(url);
    const photos = await response.json();
    //console.log(photos.message);
    return photos.message
    
}

async function searchImage () {
    const containerPhotos = document.getElementById('containerPhotos')
    containerPhotos.classList.add('containerPhotos')

    const searched = document.getElementById('search').value

    const photo = await buscarApiImagens(searched);

    containerPhotos.replaceChildren()

    photo.forEach((url) => {
        const a = document.createElement('a')
        const img = document.createElement('img')
        img.src = url;
        a.href = url;
        a.setAttribute('target', '_blank')
        a.appendChild(img)
        containerPhotos.appendChild(a)

    });

    
}

searchImg.addEventListener('click', searchImage)
inputSearch.addEventListener('keydown', (event) => {
    if (event.key === 'Enter'){
        searchImage()
    }
})
