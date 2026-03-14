
console.log("Hello Javascript");
console.log("A man will die but not his ideas!");
// alert('Hi Javascript');

 // this is statment
document.getElementById('title').innerHTML = 'Hello';
document.getElementById('title').innerHTML = 'A man will die but not his ideas!';

console.log('Hello');

 let sum = 50 + 50;
 console.log(sum);

// !this is variable
let firstNames = 'Akhter Hossen Badal';
// let sum= 1 + 1;
// console.log(sum);

// !this is statement
console.log('firstNames');


let food = 'Apple';
// console.log('$food')Good,${'Food'} tasty; 

// !let variable
// !you can not re declare
// !you can re assaign
// !let is not hosted.

let B = 10;
 B = 15;
console.log(B);


// !Const is not re declare
// !const is not re assaign
// !const is a block scooped
// !const is not hosted

const c = 10;

{
  const d = 50;
  console.log(c);
  console.log(d);
}

 
// !const is a variable
// !parson is a object

const parson = {
  firstName: 'AKhter Hossen Badal',
  age: 20,
};

parson.country = 'Bangladesh';
parson.age = '18';
console.log(parson);



// !javascript variables names are case-sensitive.
// !variables names cannot contain spaces.
// !variables can not be the same as reserved keyword such as if or const.
// !By convention,javascript variables names are written in camelcase.
// !variables should be given descriptive names that indicate their content and usage (e.g.selling price and costprice rather than x and y).
// !you cannot add number first.
// !_,$ is acceptable but - not acceptable.



// !Javascript Operator 6 ti.
// !Arithmetic operators.
// !conditional operators.
// !Comparison operator
// !logical operator.
// !Assignment Operator.


//  1.Arithmetic Operator
// plus krar jonno

let a = 50;
let b = 20;
console.log(a + b);

// mainas ar jonnno
// let a = 20;
// let b = 30;
// let d = a - b;
// console.log(d);



let Name = 'Badal';
console.log(Name);

let sujon = 20;
let Shaown = 30;
let some = 'Bondhu';
let calculation = sujon + Shaown + 'some';
console.log(calculation);




// Operator Presidents!
console.log(5 + 2 * 3 - 6);

// javascript function one

function MyFunction(fullName,age,dateofbirth) {
  console.log('Hello ' + fullName,'I am '+age,'My Date of Birth is '+dateofbirth);
}

MyFunction('Badal', 18,2007,'true');
MyFunction('Ali',30,2001, 'true');

// javascript Funtion two
function isSubscribed() {
  console.log('Subscribed');
}
document.getElementById('btn').addEventListener('click', isSubscribed);

// javascript Function three

(function (message) {
  console.log('I am very Hungry', message);
})('Hello Give me some foods!');

// variable function
let maths = function (x, y) {
 console.log('This service is not running');
  return x * y;
}
console.log(maths(3, 4));
console.log(maths(10, 10));


// Akoi namer function akadhikbar use kra jabe!
// javascript Arrays!
// const lang1 = 'Html';
// const lang2 = 'Css';
// const lang3 = 'Javascript';
// Javascript a array 2 vabe new jaw
// 1
// const language1 = ['Html', 'Css', 'Javascript', 'php,', 'larabel'];
// 2
// const language2 = New Array('Html', 'Css', 'Javascript', 'php,', 'larabel');
// console.log(language1);
// console.log(language2);

// javascript suru hw 0 number theke!
// console.log(language[2]);


