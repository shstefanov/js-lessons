
// Example:
// node kvadranti.js 5 6

var x = parseInt(process.argv[2]);
var y = parseInt(process.argv[3]);

if( x >= 0 && y >= 0 ){
  console.log("Квадрант 1", x, y);
}

else if( x < 0 && y >= 0 ){
  console.log("Квадрант 2", x, y);
}

else if( x < 0 && y < 0 ){
  console.log("Квадрант 3", x, y);
}

else if( x >= 0 && y < 0 ){
  console.log("Квадрант 4");
}
