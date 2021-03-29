'use strict';

// function shredder(arr, callback) {
  
//   let array = [];

//   for (let i = 0; i < arr.length; i++) {
//     array.push( callback(arr[i], i) );
//   }

//   return array;
// }

/* const shredder = {
  map: function(arr, callback) {
  
    let array = [];

    for (let i = 0; i < arr.length; i++) {
      array.push( callback(arr[i],i) );
    }

    return array;
  }
} */



const shredder = {
  filter: function(arr, callback) {
  
    let array = [];

    for (let i = 0; i < arr.length; i++) {
      if (!callback(arr[i])) {
      array.push(arr[i]);
      }
    }
    return array;
  }
}






module.exports = shredder;
