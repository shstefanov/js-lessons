// Declare empty array
var empty_array = [];

// Declare numeric array
var other_array  = [ 5, 6, 7, 8, 9 ]; //3
                  // 0, 1, 2
// Array properties
// array.length = number, represents
// number of elements in the array

// Array length
var array_length = other_array.length;

for( var i = 0; i < array_length; i++ ){
  // Get single element from the array
  // i - the position
  // other_array[ i ] - get the value at given position
  // First position is 0
  var element = other_array[i];
  // console.log(i, element);
}


// **************************************
// Using "forEach" method
// **************************************

function array_foreach(element){
  //console.log(element);
}

other_array.forEach( array_foreach );

// Using anonimous function
other_array.forEach( function(element){
  // console.log(element);
});

// other_array.forEach();
// other_array.forEach(function(){});



// **************************************
// Using "filter" method
// **************************************

var numbers = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ];

var even_numbers = numbers.filter( function(element){
  
  // Return true if we want to keep the value
  // Return false if we want to omit the value

  // Short solution
  // return !(element % 2);
  // if expression is 0     -> !0 === true;
  // if expression is not 0 -> !n === false;

  // Long solution
  var result = element % 2;

  if( result === 0 ){
    // The number is even
    return true;
  }

  else{
    // The number is not even
    return false;
  }

});

// **************************************
// Using "map" method


// 1. Creates new array, the length is the same
// 2. Every value in the new array is as returned from map function

// Example:
// var arr = [ 2, 3, 4];
// var result = arr.map( function(num){
//    return num * num;
// } )
// console.log(result); // -> [ 4, 9, 16 ]


// **************************************
numbers = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ];
var number_squares = numbers.map( function(element){
  // The value that we return is at the
  // same position in resulting array
  return element * element;
});
