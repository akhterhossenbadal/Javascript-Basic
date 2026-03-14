// Data Type
// 1. Primitive Data Type
// 2. Non-Primitive Data Type
             
// 🚀Primitive Data Type
// String

let  Data = "Akhter Hossen Badal";
console.log(Data);

const Founder = "Elon Musk";
console.log(Founder);

// Number

let cgpa = 3.50;
console.log(cgpa);

const weight = 10;
console.log(weight);

// Boolean

let Follow = true;
console.log(Follow);

const unfollow = false;
console.log(unfollow);

// undefined

let h;
console.log(h);

// Null

let yes = null;
console.log(yes);

const not = null;
console.log(not);

// Symbol

let word = Symbol("id");
console.log(word);

const wordme = Symbol("id");
console.log(wordme);

// Bigint

let words = BigInt(1234);
console.log(words);

const nice = BigInt(1234);
console.log(nice);


// 🚀Non Primitive Data Type        
// object

const myName = {
  Name: "Akhter Hossen Badal",
  Founder: "Code with Badal",
  cgpa: 3.50,
  yes: null,
  unfollow: true,
}
console.log(myName);


//🚀 Array
// Array te push

let fruit = ["Apple", "Banana", "Cherry"];
fruit.push("Orange");
console.log(fruit);

const fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits);

fruits.push = "Orange";
console.log(fruits);

// Array te Pop

let names = ["Akhter Hossen Badal", "Elon MUsk", "Bil Gates"];
console.log(names);
names.pop = ("Elon Musk");

//🚀Function

let a = 5;
let b = 10;
function helloX() {
  console.log("Hello Elon MUsk");
  console.log(a+b);
}
// ⬇️Funtion Call
helloX();  

function myFunction() {
  console.log("Welcome to Akhter Hossen Badal");
  console.log("Founder of Tesla");
}

myFunction();

function helloFunction(msg) {
  console.log(msg);
}
helloFunction("Amar Sonar Bangla");


function sum(a, b) {
  console.log(a+b);
}
sum(10, 10);


// Function Declaretion

function add(a, b) {
  return a + b;
}
console.log(add(5, 10));

// Function Expretion

let addX = function (a, b) {
  return a + b;
}

console.log(addX(2, 5));

// Aro Function

let addY = (a, b) => a + b;
console.log(addY(2, 3));

// Paramiter and Argument

function great(name) {
  console.log("Hello, "+name);
}

great("John");

// Return Statement

function addZ(a, b) {
  return a + b;
}

let result = addZ(2, 3);
console.log(result);

// Function Scope

let w = 18;
function test() {
  let x = 20;
  console.log(w);
};

