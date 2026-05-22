function Student(name,age,course){

this.name=name;
this.age=age;
this.course=course;

this.introduce=function(){
return `Hi I am ${this.name}`;
}

this.courseInfo=function(){
return `Course: ${this.course}`;
}
}

let students=[];

function addStudent(){

let name=document.getElementById("name").value;
let age=document.getElementById("age").value;
let course=document.getElementById("course").value;

if(name==""||age==""||course==""){
alert("Fill all fields");
return;
}

let newStudent=
new Student(name,age,course);

students.push(newStudent);

showStudents();

document.getElementById("name").value="";
document.getElementById("age").value="";
document.getElementById("course").value="";
}

function showStudents(){

let output=
document.getElementById("output");

output.innerHTML="";

students.forEach(student=>{

output.innerHTML+=`

<div class="student">

<h3>${student.name}</h3>

<p>Age: ${student.age}</p>

<p>${student.courseInfo()}</p>

<p>${student.introduce()}</p>

</div>

`;

});

document.getElementById("total")
.innerText=students.length;

let unique=
[...new Set(students.map(x=>x.course))];

document.getElementById("courses")
.innerText=unique.length;

let avg=
students.reduce((a,b)=>
a+Number(b.age),0)
/
students.length||0;

document.getElementById("avg")
.innerText=Math.floor(avg);
}

function searchStudent(){

let value=
document.getElementById("search")
.value.toLowerCase();

let cards=
document.querySelectorAll(".student");

cards.forEach(card=>{

card.style.display=
card.innerText.toLowerCase()
.includes(value)
? "block":"none";

});

}

setInterval(()=>{

document.getElementById("clock")
.innerText=
new Date()
.toLocaleTimeString();

},1000);


let sec=0;
let run;

function startTimer(){

run=setInterval(()=>{

sec++;

let m=Math.floor(sec/60);

let s=sec%60;

document.getElementById("timer")
.innerText=
`${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;

},1000);

}

function stopTimer(){

clearInterval(run);

} 