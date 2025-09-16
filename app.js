'use strict'

const searchImg = document.getElementById('searchImg');

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

    const dogImg = document.createElement('img')

    const photo = await buscarApiImagens(searched);

    containerPhotos.replaceChildren()

    photo.forEach((url) => {
        const img = document.createElement('img')
        img.src = url;
        console.log(img)
        containerPhotos.appendChild(img)

    });

    
}

searchImg.addEventListener('click', searchImage)
