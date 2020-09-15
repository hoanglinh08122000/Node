function Khoahoc(name, classs){
	this.name = name;
	this.classs = classs;
}
Khoahoc.prototype.mota = function() {
	console.log("hoc sinh " + this.name + " lop " + this.classs);
};

var test = new Khoahoc("Linh","A8");
test.mota();