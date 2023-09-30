'use strict'

function ucfirst(word) {
    word = word.trim();
    let words = word.split(" ");


    for (let part in words) {
        words[part] = words[part].charAt(0).toUpperCase() + words[part].slice(1);
    }
    console.log(words.join(" "));
}

let name1 = 'mike derycke';
let name2 = '   max power    ';
let name3 = ' judas de verrader';

ucfirst(name1);
ucfirst(name2);
ucfirst(name3);

let text = ("Javascript is the main focus of Web Essentials");
console.log(text.replace('Essentials', 'Advanced'));


function longestString(...list){
let longest = "";
    for(let land in list)
    {
        if (longest.length < list[land].trim().length)
        {
            longest = list[land].trim();
        }
    }
    return longest;
}

console.log(longestString('België', 'Nederland', 'Frankrijk', 'Duitsland', 'Luxemburg'));

