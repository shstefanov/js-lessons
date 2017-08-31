var matrix = [ 
 1, 5, 6,
 2, 9, 12,
 3, 98, 100,
];


var m = [
  [ 1,  2,  3 ],   // m[0], m[0][0] - m[0][1] - m[0][2]
  [ 45, 67, 90],   // m[1], m[1][0] - m[1][1] - m[1][2]
  [ 12, 13, 14],   // m[2], m[2][0] - m[2][1] - m[2][2]
];

function get_at(matrinx, row, col){
  return m[ row - 1 ][ col - 1 ];
}

function determinant(m){
  
}

var value = get_at( m, 1, 3 );
console.log(value);