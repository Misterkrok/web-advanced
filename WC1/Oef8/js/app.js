'use strict';

function ucFirst(word){
  word = word.trim();
  let words = word.split(" ");

//  for(let part = 0; part < words.length; part++){

  for(let part in words){
    words[part] = words[part].slice(0,1).toUpperCase() + words[part].substr(1);
  }

  console.log(words.join(" "));

}

let name1 = 'mike derycke';       // Resultaat in console: 'Mike Derycke'
let name2 = '   max power    ';   // Resultaat in console: 'Max Power'
let name3 = ' judas de verrader'; // Resultaat in console: 'Judas De Verrader'

ucFirst(name1);
ucFirst(name2);
ucFirst(name3);
