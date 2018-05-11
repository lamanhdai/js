# Some Note

## ES6
<pre>
/* ==================== VAR ==================== */

var score = 100;
if (score > 50) {
  var msg = "WIN";
  console.log(msg);
}
console.log(score);
console.log(msg);

/* ==================== LET ==================== */

let score = 100;
let msg = "";
if (score > 50) {
  msg = "WIN";
  console.log(msg);
}
console.log(score);
console.log(msg);

/* ==================== CASE 04 ==================== */

let todoObj = {
  id: 169,
  name: "Play football",
  status: false
};
for (let index in todoObj) {
  console.log(index + ": " + todoObj[index]);
}

/* ==================== 01 Error ==================== */

let student = {
  name: "John",
  courses: ["Android", "PHP", "Java"],
  showInfo: function(){
    this.courses.forEach(function(course){
      console.log(`${this.name} study ${course}`);
    })
  }
}
*/

/* ==================== 02 _this ==================== */

let student = {
  name: "Peter",
  courses: ["Android", "PHP", "Java"],
  showInfo: function(){
    var _this = this;
    this.courses.forEach(function(course){
      console.log(`${_this.name} study ${course}`);
    })
  }
}
*/

/* ==================== 03 bind ==================== */

let student = {
  name: "Ronaldo",
  courses: ["Android", "PHP", "Java"],
  showInfo: function(){
    this.courses.forEach(function(course){
      console.log(`${this.name} study ${course}`);
    }.bind(this))
  }
}
*/

/* ==================== 04 Arrow Function ==================== */

let student = {
  name: "josh",
  courses: ["Android", "PHP", "Java"],
  showInfo: function(){
    this.courses.forEach(course => console.log(`${this.name} study ${course}`))
  }
}

// John study Android
// John study PHP
// John study Java

student.showInfo();


/* ==================== Class ==================== */

class Student {
  constructor(code, name, age){
    this.code = code;
    this.name = name;
    this.age  = age;
  }

  showInfo(){
    return this.code + " - " + this.name + " - " + this.getAge();
  }

  getAge(){
    let today = new Date();
    let year  = today.getFullYear();
    return year - this.age;
  }
}

let studentObj = new Student("SV001", "john", 1992);
console.log(studentObj);
console.log(studentObj.showInfo());


/* ==================== Inheritance ==================== */

class Person {
	constructor(name, code, age) {
		this.name 	= name;
		this.age 	= age;
		this.code 	= code;
	}

	showInfo(){
		console.log(this.name + " - " + this.code + " - " + this.getAge());
	}

	getAge(){
		let today 	= new Date();
		let year 	= today.getFullYear();
		return year - this.age;
	}
}

class Student extends Person {
	constructor(name, code, age, score){
		super(name, code, age);
		this.score 	= score;
	}

	showInfo(){
		super.showInfo();
		console.log(" - " + this.score);
	}
}

let personObj = new Person("john", "132213", 2000);
personObj.showInfo();

let studentObj = new Student("peter", "123", 1998, 80);
studentObj.showInfo();
</pre>