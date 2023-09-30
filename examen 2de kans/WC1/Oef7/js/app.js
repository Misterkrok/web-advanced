'use strict';

function ucFirst(word){
  console.log(word.slice(0,1).toUpperCase() + word.substr(1));
}

ucFirst('dit is een zin');
ucFirst('een naam');
ucFirst('woord');
