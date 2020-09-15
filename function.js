// cach 1
function sum(a,b){
	return a+b;
}

var x=sum(6,7);
console.log(x);

// canh 2
function text(){
	console.log("text");
}

function callfunction(namefunction){
	namefunction();
}

callfunction(text);

//canh3
var sum = function(){
	console.log("test sum");
}
sum();