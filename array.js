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
  console.log(i, element);
}