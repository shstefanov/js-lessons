var a = 5;

// Define function with name "my_function"
function my_function(n, m){
  // Function body
  var b = (6 * n) / m;
  console.log(b);
}

my_function(4);
my_function(7, 10);
my_function(9, 100);
my_function(9, 1000);
my_function("test", 10000);


// Call function "my_function" with 1-st parameter 4
// This is an expression. It has a value of undefined
// There is no "return" in function body.
my_function(4);


console.log("--- Return value ---");
// This function computes n^m and returns the result
function other_function(n, m){
  var result = Math.pow( n, m );
  return result;
}

var square = other_function( 4, 2 );
var cube   = other_function( 4, 3 );
var fourth = other_function( 4, 4 );

console.log(square, cube, fourth);


console.log("--- Function calls ---");

function circle_area(r){
  // Here we can call other functions 
  var area = other_function(r, 2) * Math.PI;
  return area;
}

var small_circle_area  = circle_area(5);
var medium_circle_area = circle_area(25);
var large_circle_area  = circle_area(125);


console.log("--- Arrays ---");

// Ограничен ред от стойности
var A = [ 1, 2, 3, 4 ];

// Масива винаги има дължина и тя е цяло число
console.log( A.length );

// Example empty function
A.forEach( function(){} );


console.log("--- Arrays ( forEach ) ---");

// Define function
function my_array_foreach(n){
  console.log(n);
}


// The function "my_array_foreach"
// will be called once for
// every element in the array
// In order of appearance
A.forEach( my_array_foreach );


console.log("--- Arrays ( map ) ---");

var B = [ 1, 2, 3, 4 ];

function my_array_map(n){
  return n * n;
}

// Array map function returns result
// The result is other array with the same length
// The array will contain all returned values from 
// function call

var C = B.map( my_array_map );


// var B = [ 1, 2, 3, 4  ];
// var C = [ 1, 4, 9, 16 ];

console.log(C);

console.log("--- Arrays ( filter ) ---");

// Array filter returns result
// The result is always array
// The result can be with other length
// The maximum length is the length of 
// original array

var D = [ 1, 2, 3, 4 ];

function is_even_number(n){
  var result = ( n % 2 ) === 0; // if 0 - true
  return result;
}

// When called, D.filter uses the function to check
// every value in the array. If returned value is true,
// filter keeps te value in the result array.
// Otherwise the value is omitted
var E = D.filter(is_even_number);
// [2, 4]
console.log(E);
