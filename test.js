
function f_x( a, b, c, k ){
 
  // a * (x*x) + b * x + c = 0
  return ( -b + k*Math.sqrt( ( b * b ) - 4 * a * c ) ) / 
          ( 2 * a ); // 14
}

var result_x_1 = f_x( 1, 6, 4,  1 );
var result_x_2 = f_x( 1, 6, 4, -1 );

console.log( result_x );
