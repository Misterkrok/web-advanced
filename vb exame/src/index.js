import Cleave from 'cleave.js';

window.onload = function() {
    console.log('Loaded!!!');

    //Make input sexy
    var input = new Cleave('#albumname', {
        blocks: [4, 4, 3],
        delimiters: ['.', '-'],
        uppercase: true
    });

    //Check for local storage
    const storage = localStorage.getItem('album');
    let personalAlbum = [];
    if(storage){
        personalAlbum = JSON.parse(storage).list;
        refreshPersonalAlbum();
    }
    
    document.getElementById('savebutton')
        .addEventListener('click',function(event){
            //get the name
            const name = document.getElementById('albumname').value;
            // save to localstorage
            const data = {
                name,
                list: personalAlbum
            };
            localStorage.setItem('album', JSON.stringify(data));

        });

    //functions
    async function getAlbums(){
        const response = await fetch('https://jsonplaceholder.typicode.com/albums');
        return await response.json();
    } 
    async function getPhotos(albumId){
        const id = albumId.slice(6);
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/photos?albumId=${id}`);
        return await response.json();
    }
    function addAlbumsToDom(albums){
        for(let index = 0; index < 10; index++){
            let p = document.createElement('p');
            p.innerText = albums[index].title;
            p.id = `album_${albums[index].id}`;
            document.getElementById('albumlist').appendChild(p);
            //add event listener
            p.addEventListener('click', selectAlbum);
        }
    }
    function addPhotosToDom(photos){

        // console.log(photos);
        //Clean current photos
        document.getElementById('photolist').innerHTML = '';
        for(let index = 0; index < 11; index++){
            let img = document.createElement('img');
            img.alt = photos[index].title;
            img.id = `photo_${photos[index].id}`;
            img.src = photos[index].thumbnailUrl;
            document.getElementById('photolist').appendChild(img);
            //add event listener
            img.addEventListener('click', selectPhoto);
        }
    }

    function selectAlbum(event){
    
        // Verwijder de kleur blue van huidige album
        let selectedAlbums = document.getElementsByClassName('blue');
        if(selectedAlbums[0]){
            selectedAlbums[0].className = '';
        }
        // Het gekozen album krijgt een kleur (blauw in bootstrap)
        document.getElementById(event.target.id).className = 'blue';

        //Haal foto's op met album id
        getPhotos(event.target.id).then(photos => {
            addPhotosToDom(photos)
        });
       
    }
    function selectPhoto(event){
    // Geef je album een naam (input veld) en maak een Save knop. 
    // Dit slaagt het album op naar localstorage. De id's van de foto's is voldoende.
        const id = event.target.id.slice(6);
        
        //Do checks
        if(personalAlbum.length < 5 && !personalAlbum.includes(id)){
            personalAlbum.push(id);
            console.log(personalAlbum);
            // Verwijder de border van huidige foto
            let selectedPhotos = document.getElementsByClassName('border');
            if(selectedPhotos[0]){
                selectedPhotos[0].className = '';
            }
            // de gekozen photo krijgt een border
            document.getElementById(event.target.id).className = 'border';

            //refresh het persoonlijk album met de nieuwe foto
            refreshPersonalAlbum();
        }
        
        
    }

    function refreshPersonalAlbum(){
        document.getElementById('personalalbum').innerHTML = '';
        for(p of personalAlbum){
            fetch(`https://jsonplaceholder.typicode.com/photos?id=${p}`).then(
                response => { response.json().then( list => {
                    //add photo to dom
                    let data = list[0];
                    // console.log(data);
                    let img = document.createElement('img');
                    img.alt = data.title;
                    img.id = `personal_${data.id}`;
                    img.src = data.thumbnailUrl;
                    document.getElementById('personalalbum').appendChild(img);
                    //add event listener
                    img.addEventListener('click', unSelectPhoto);

                })}
            );
        }

    }
    function unSelectPhoto(event){
        //filter id eruit
        // let temp = personalAlbum.filter(id => id != event.target.id.slice(9));
        personalAlbum = personalAlbum.filter(id => id != event.target.id.slice(9));
        // personalAlbum = temp;
        refreshPersonalAlbum();
    }


   

    getAlbums().then(result => {
            addAlbumsToDom(result);
        }
    );


    



}