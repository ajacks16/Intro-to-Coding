let cl = console.log
cl("Hello World!" + " Hello World!");
let name = "Audrey";
cl(name + " Jacks");

cl("843-471-3030");
cl(843-471-3030);


for (let count = 1; count < 9; count++) {
    cl(count);   
} 
console.log("--------------------")

let tree = "#"
for (let index = 0; index < 7; index++) {  tree += "#"
    console.log(tree);
}
console.log ("#")

console.log("--------------------")

for (let index= 0; index < 12; index++)
{
    if (index % 2 === 0) { continue;}
    console.log(index);
}

console.log("--------------------")


   // let name = "Audrey Jacks";
  //for (let index = 0; index < name.length; index++) {
   // console.log ("name[index]"); 
//}


//fizzbuzz code:

//for (var index = 1; index < 101; index++) {
    //if (index % 15 == 0) console.log("FizzBuzz");
   // else if (index % 3 == 0) console.log("Fizz");
   // else if (index % 5 == 0) console.log("Buzz");
    //else console.log(index);
//}

console.log("--------------------------")
let doSomething = function(){
    //run this code later
}

let fun = function() {
    console.log("Function says hello");
};
fun(); fun(); fun(); fun();

console.log("---------------------------")

let getGreeting = function() {
    return "Hello From a Function!";
};
let greeting = getGreeting();
console.log(greeting);

console.log("---------------------------")
let greet = function(name, timeOfDay) {
    return "Good " + timeOfDay + ", " + name;
}
console.log(greet("Bob", "evening"));
console.log(greet("Quinn", "day"));

console.log("---------------------------")

let add = function(num1, num2) {
    return num1 + num2;
}
console.log("Adding")
console.log(add(5, 10));

let subtract = function(num1, num2) {
    return num1 - num2;
}
console.log("Subtracting")
console.log(subtract(37298, 263));

let multiply = function(num1, num2) {
    return num1 * num2;
}
console.log("Multiplication")
console.log(multiply(84, 12));

let divide = function(num1, num2) {
    return num1 / num2;
}
console.log("Division")
console.log(divide(76, 3));

console.log("------------------------------")

let a = [1, 2, 3];
let b = ["x", "y", "z"];
let c = [a, b]
console.log(a, b, c)

//push and pop
//let a = [1, 2, 3];
//a.push(2);
//a.push(3);
//a.pop();

// arrays use [], and objects use {}
//arrays are organized lists, objects are organized collections

//let o = {}
//o.name = "Nathan";
//o.age = 100;
//cl( o );

//this is the same thing as this ^
let o = {
    name: "Nathan",
    age: 100
};
console.table(o);

console.log("------------------------------")
