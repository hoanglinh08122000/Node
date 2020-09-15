var student={
	ho : "nguyen",
	ten : "linh",
	chao : function(){
		console.log("chao ban " + this.ho + " " + this.ten);
	}
}
student.chao();

console.log(student["ho"]);
