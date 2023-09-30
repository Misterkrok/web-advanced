'use strict'


window.onload = () => {

    

    let inputtitle = document.getElementById("inputTitle")
    inputtitle.addEventListener("keyup",() =>{
        let intput =document.getElementById("inputTitle").value

     fetch(`http://www.omdbapi.com/?t=${intput}&apikey=e9ca29e4`)
        
        
  .then(response => response.json())
  .then(data => { 
      console.log(data.Title) 
      document.getElementById("title").innerHTML=data.Title
      console.log(data.Year)
        document.getElementById("year").innerHTML=data.Year

      document.getElementById("foto").src=data.Poster
  })
  console.log(intput)
  })

}