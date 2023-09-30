window.onload = () =>{
    console.log('loaded');
}

fetch('https://jsonplaceholder.typicode.com/posts').then(resp => {
    return resp.json();
}).then(data => {
    console.log(data);
});