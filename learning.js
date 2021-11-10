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

for (var index = 1; index < 101; index++) {
    if (index % 15 == 0) console.log("FizzBuzz");
    else if (index % 3 == 0) console.log("Fizz");
    else if (index % 5 == 0) console.log("Buzz");
    else console.log(index);
}