window.onload=function(){console.log("Loaded!");const e=localStorage.getItem("album");let t=[];function n(e){let t=document.getElementsByClassName("blue");t[0]&&(t[0].className=""),document.getElementById(e.target.id).className="blue",async function(e){const t=e.slice(6),n=await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${t}`);return await n.json()}(e.target.id).then((e=>{!function(e){console.log(e),document.getElementById("photolist").innerHTML="";for(let t=0;t<5;t++){let n=document.createElement("img");n.alt=e[t].title,n.id=`photo_${e[t].id}`,n.src=e[t].thumbnailUrl,document.getElementById("photolist").appendChild(n),n.addEventListener("click",l)}}(e)}))}function l(e){const n=e.target.id.slice(6);if(t.length<5&&!t.includes(n)){t.push(n),console.log(t);let l=document.getElementsByClassName("border");l[0]&&(l[0].className=""),document.getElementById(e.target.id).className="border",o()}}function o(){for(p of(document.getElementById("personalalbum").innerHTML="<h1>Persoonlijk album</h1>",t))fetch(`https://jsonplaceholder.typicode.com/photos?id=${p}`).then((e=>{e.json().then((e=>{let t=e[0],n=document.createElement("img");n.alt=t.title,n.id=`personal_${t.id}`,n.src=t.thumbnailUrl,document.getElementById("personalalbum").appendChild(n),n.addEventListener("click",c)}))}))}function c(e){t=t.filter((t=>t!=e.target.id.slice(9))),o()}e&&(t=JSON.parse(e).list,o()),document.getElementById("savebutton").addEventListener("click",(function(e){const n={name:document.getElementById("albumname").value,list:t};localStorage.setItem("album",JSON.stringify(n))})),async function(){const e=await fetch("https://jsonplaceholder.typicode.com/albums");return await e.json()}().then((e=>{!function(e){for(let t=0;t<10;t++){let l=document.createElement("p");l.innerText=e[t].title,l.id=`album_${e[t].id}`,document.getElementById("albumlist").appendChild(l),l.addEventListener("click",n)}}(e)}))};