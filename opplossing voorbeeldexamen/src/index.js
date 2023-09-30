import Cleave from 'cleave.js';

// Get `amount` of albums from the placeholder api


// Get `amount` of photos from the supplied album id
async function getPhotos(amount, id) {
    try {
        // De foto's haal je op met een fetch call met de volgende url:
        // https://jsonplaceholder.typicode.com/photosLinks to an external site.
        const response = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`);
        const json = await response.json();
        let photos = [];
        for (let i = 0; i < amount; i++) {
            photos.push(json[i]);
        }
        return photos;
    } catch (error) {
        console.log(error);
    }
}

// Adds the provided albums to the DOM
function addAlbums(albums) {
    for (let i in albums) {
        let album = albums[i];
        let p = document.createElement('p');
        // Elk album in de lijst wordt getoond met zijn titel.
        p.innerText = album.title;
        p.id = `album_${album.id}`;
        document.getElementById('albumlist').appendChild(p);
        //Bij het genereren van de lijst plaats je een click event listener op de knop
        //NA dat de items op de webpagina staan.
        p.addEventListener('click', albumClickEvent);
    }
}

// Adds the provided photos to the DOM
// Rechts van de lijst toon je de eerste 5 foto's
function addPhotos(photos) {
    let list = document.getElementById('photolist');
    // Je kan blijven klikken op verschillende items,
    // rechts worden enkel de foto's getoond van het huidig geselecteerde album.
    list.innerHTML = '';
    for (let i in photos) {
        let photo = photos[i];
        let img = document.createElement('img');
        img.alt = photos[i].title;
        img.id = `photo_${photo.id}`;
        img.src = photo.thumbnailUrl
        list.appendChild(img);
        //Bij het genereren van de lijst plaats je een click event listener op de knop
        //NA dat de items op de webpagina staan.
        img.addEventListener('click', photoClickEvent);
    }
}

// Click handler for album click event
// Bij het klikken op een item gebeurt het volgende
async function albumClickEvent(event) {
    let selected = document.getElementsByClassName('blue')[0];
    if (selected)
        selected.className = '';
    //Het gekozen album krijgt een kleur (blauw in bootstrap)
    event.target.className = 'blue';
    const albumId = event.target.id.replace("album_", "");
    // Rechts van de lijst toon je de eerste 5 foto's
    const photos = await getPhotos(5, albumId);
    addPhotos(photos);
}

var personalAlbum = [];

// Click handler for photo click event
async function photoClickEvent(event) {
    const photoId = event.target.id.replace("photo_", "");
    //Wanneer je een foto selecteert uit een album, zorg dat dit visueel aangegeven wordt.
    //Mag een eigen invulling zijn.
    let selected = document.getElementsByClassName('bordered')[0];
    if (selected)
        selected.className = '';
    event.target.className = 'bordered';
    // Je mag geen duplicaten toelaten.
    if (personalAlbum.includes(photoId)) {
        return;
    }
    personalAlbum.push(photoId);
    //Limiet van 5 foto's in je persoonlijk album.
    if (personalAlbum.length >= 5) {
        // Should never be the case but just in case this works even
        // if more than 5 elements in the list
        for (let over = (personalAlbum.length - 5); over > 0; over--) {
            personalAlbum.shift();
        }
    }
    await refreshPersonalAlbum();
}

async function personalAlbumPhotoClickListener(event) {
    personalAlbum = personalAlbum.filter(id => id != event.target.id.replace("personal_", ""));
    await refreshPersonalAlbum();
}

async function refreshPersonalAlbum() {
    let element = document.getElementById('personalalbum');
    element.innerHTML = '';
    for (let i in personalAlbum) {
        let id = personalAlbum[i];
        const response = await fetch(`https://jsonplaceholder.typicode.com/photos?id=${id}`)
        const json = await response.json();
        let data = json[0];
        // console.log(data);
        let img = document.createElement('img');
        img.alt = data.title;
        img.id = `personal_${data.id}`;
        img.src = data.thumbnailUrl;
        document.getElementById('personalalbum').appendChild(img);
        //add event listener
        img.addEventListener('click', personalAlbumPhotoClickListener);
    }
}

window.onload = async () => {
    //Check for local storage
    const storage = localStorage.getItem('album');
    if (storage) {
        personalAlbum = JSON.parse(storage).list;
    }
    await refreshPersonalAlbum();

    //Geef je album een naam (input veld) en maak een Save knop.
    //Dit slaagt het album op naar localstorage. De id's van de foto's is voldoende.
    document.getElementById('savebutton')
        .addEventListener('click', () => {
            //get the name
            const name = document.getElementById('albumname').value;
            // save to localstorage
            const data = {
                name,
                list: personalAlbum
            };
            localStorage.setItem('album', JSON.stringify(data));
        });

    //Make input sexy
    new Cleave('#albumname', {
        blocks: [4, 4, 3],
        delimiters: ['.', '-'],
        uppercase: true
    });

    // Toon enkel de eerste 10.
    addAlbums(await getAlbums(10));
}
