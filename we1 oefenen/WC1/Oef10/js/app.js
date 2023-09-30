'use strict';

function longestString(...list){
  let longest = '';

  for(let country in list){
    if(longest.length < list[country].trim().length){
      longest = list[country].trim();
    }
  }

  return longest;
}

console.log(longestString('            België              ', 'Nederland', 'Spanje', 'Verenigde Staten van Amerika'));
