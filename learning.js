//ok since im kinda stupid all of the practice exercises from thejsway are in this file
//all the original code from this file is in learning02.js


//CHAPTER 1 (all)
console.log("Auden")
console.log("15")

console.log(6 + 3)
console.log(6 - 3)
console.log(6 * 3)
console.log(6 / 3)
console.log(4 + 5)

console.log("4 + 5")
console.log("4" + "5")

console.log("------------------------------------")





//CHAPTER 2 (all)
const firstName = ("Auden");
const lastName = ("Jacks");
console.log("Hello, " + firstName + " " + lastName);

let a = 2;
a -= 1;
a++;
let b = 8;
b += 2;
const c = a + b * b;
const d = a * b + b;
const e = a * (b + b);
const f = a * b / a;
const g = b / a * a;
console.log(a, b, c, d, e, f, g);

const rawPrice = Number("Enter the raw price:");
// VAT rate = 20.6%
const vatRate = 20.6 / 100;
const finalPrice = rawPrice * (1 + vatRate);
console.log(`The final price is ${finalPrice}`);

const tempCel = Number("30:");
const tempFar = tempCel * 9 / 5 + 32;
console.log(`${30}°C = ${86}°F`);

let number1 = 5;
let number2 = 3;
console.log(number1);
console.log(number2);

console.log("-------------------------------------")





//CHAPTER 3 (following day)

const day = ("Enter a day of the week:");

if (day === "monday") {
    console.log("Tomorrow is tuesday");
  } else if (day === "tuesday") {
    console.log("Tomorrow is wednesday");
  } else if (day === "wednesday") {
    console.log("Tomorrow is thursday");
  } else if (day === "thursday") {
    console.log("Tomorrow is friday");
  } else if (day === "friday") {
    console.log("Tomorrow is saturday");
  } else if (day === "saturday") {
    console.log("Tomorrow is sunday");
  } else if (day === "sunday") {
    console.log("Tomorrow is monday");
  } else {
    console.log("Unrecognized day!");
}

console.log("------------------------------------------")





//CHAPTER 4 (parity, multiplication table, fizzbuzz)
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(`${i} is even`);
    }
}

for (let i = 1; i <= 10; i++) {
    console.log(`${4} x ${i} = ${4 * i}`);
}

for (let number = 1; number <= 100; number++) {
    if (number % 3 === 0 && number % 5 === 0) console.log("FizzBuzz");
    else if (number % 3 === 0) console.log("Fizz");
    else if (number % 5 === 0) console.log("Buzz");
    else console.log(number);
  }

  console.log("------------------------------------------")





  //CHAPTER 5 (improved hello, number squaring, minimum, calculator)
  function sayHello(Auden, Jacks) {
      return `Hello, ${Auden} ${Jacks}!`;
  }

  function square1(x) {
      return x * x;
  }
  const square2 = x => x * x;
  console.log(square1(0));
  console.log(square1(2));
  console.log(square1(5));
  console.log(square2(0));
  console.log(square2(2));
  console.log(square2(5));
  for (let i = 0; i <= 10; i++){
      console.log(square1(i));
  }

  const min = (a, b) => {
      if (a < b) {
          return a;
      }
      return b;
  }
  console.log(min(4.5, 5));
  console.log(min(19, 9));
  console.log(min(1, 1));

  function calculate(leftNumber, operation, rightNumber) {
    let result;
    switch (operation) {
      case "+":
        result = leftNumber + rightNumber;
        break;
      case "-":
        result = leftNumber - rightNumber;
        break;
      case "*":
        result = leftNumber * rightNumber;
        break;
      case "/":
        result = leftNumber / rightNumber;
        break;
    }
    return result;
  }
  console.log(calculate(4, "+", 6));
  console.log(calculate(4, "-", 6));
  console.log(calculate(2, "*", 0))
  console.log(calculate(12, "/", 0));
console.log("---------------------------------------------")





//CHAPTER 6 (bank account)
const account = {
    owner: "Alex",
    balance: 0,
    credit(amount) {
        this.balance += amount;
      },
      describe() {
        return `owner: ${this.owner}, balance: ${this.balance}`;
      }
    };
    
    console.log(account.describe());
    account.credit(250);
    account.credit(-80);
    console.log(account.describe());
    console.log("-----------------------------------------")





    //CHAPTER 7 (all)
    const musketeers = ["Athos", "Porthos", "Aramis"];
console.log("Here are the three musketeers:");
for (let i = 0; i < musketeers.length; i++) {
  console.log(musketeers[i]);
}
musketeers.push("D'Artagnan");
console.log("Now there are four of them:");
musketeers.forEach(musketeer => {
  console.log(musketeer);
});
musketeers.splice(2, 1);
console.log("Poor Aramis has died!");
for (const musketeer of musketeers) {
  console.log(musketeer);
}

const values = [3, 11, 7, 2, 9, 10];
let sum = 0;
values.forEach(value => {
    sum += value;
  });
  console.log(sum);


  


  //CHAPTER 8
//const word = prompt("shark:");
//console.log(`The word ${word} is ${word.length} characters long`);
//console.log(`Its lowercase value is ${word.toLowerCase()}`);
//console.log(`Its uppercase value is ${word.toUpperCase()}`);
//let vowelCount = 0;
//let backwardWord = "";
//[...word].forEach(letter => {
 // const lowerLetter = letter.toLowerCase();
 // if (
 //   lowerLetter === "a" ||
 //   lowerLetter === "e" ||
 //   lowerLetter === "i" ||
  //  lowerLetter === "o" ||
  //  lowerLetter === "u" ||
  //  lowerLetter === "y"
 // ) {
 //   vowelCount++;
 // }
 // backwardWord = letter + backwardWord;
//});
//console.log(`It has ${vowelCount} vowels`);
//console.log(`Its backwards value is ${backwardWord}`);
//if (word.toLowerCase() === backwardWord.toLowerCase()) {
 // console.log("It's a palindrome");
//}






//THIS IS RANDOM CODE FROM CLASS
let n = new Date();
