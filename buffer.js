// var buff = new Buffer("Linh","utf-8");

// console.log(buff);
// console.log(buff.toString());
// console.log(buff.toJSON());

var fs = require('fs');

var text = fs.readFileSync(__dirname + "/text.txt");

console.log(text);
console.log(text.toString());