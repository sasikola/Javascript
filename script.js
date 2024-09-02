// keywords
// var, let and const

// var firstName;    // variable declaration
// var lastName;
// firstName = "John"  //value assignment
// lastName = "Doe"

// console.log(firstName + lastName);

// firstName = "Tony"   //re-assignment
// console.log(firstName)

// var firstName = "Thor"  //re-declaration
// console.log(firstName)

// let firstName;
// firstName = "Thor";
// console.log(firstName);

// firstName = "Hulk"; //re-assignment
// console.log(firstName);

// hoisting

// console.log(myVar);
// var myVar = "Hello";
// temporal deadzone

// var --> global scope
// let and const --> block scope

// {
//   const x = 10;
//   console.log(x);
// }

// console.log(x)

// {
//   var x = 10;
//   console.log(x);
// }

// console.log(x);

// data types
// primitive

// string --> "10", '', ``
// number --> 98.5
// boolean --> true or false
// null --> object (null)
// undefined  -->

// let x;
// console.log(x);

// non-primitive
// object
// functions
// arrays

// default value of a declared variable
// synchronous programming language
// key: value
// let person = {
//   name: "John",
//   age: 30,
//   city: "New York",
// };
// json --> javascript object notation

// arrays
// let x = [1, 2, 3, 4, 5, 4, 4, 6, , 7, 3, 45, 43, 46];
// index value starting from 0
// 1 - 0;
// 2 - 1
// let lastItem = x[x.length - 1];
// console.log(lastItem);

// javascript operators
// operators are used to perform some operation on operands
// arithmetic operator (+, -, *, /, %,)
// unary operator (++, --)
// assignment operator
// comparison operator
// logical operator

// ++ increment (pre and post)
// -- decrement (pre and post)

// console.log(x++);//x = x+1
// x++
// console.log(x)
// x++
// console.log(x)
// console.log(x)
// x = 20
// console.log(x)
// let sum = x + y;
// console.log(sum)
// let sum1 = sum + x;
// console.log(sum1)
// let x = 10;
// let y = 20;
// // x - 1  --> 9
// console.log(x-- + ++x)  //9 + (10+1)10

// conditional operators
// it will allow you to control the flow of execution based on certain condtions.

let num = 5;

// console.log("This is odd number");

// / --> it will return quotient
// % --> it will return remainder
// 2
// remainder
// %
// console.log(num % 2 === 0)

// if (num % 2 === 0) {
//   console.log("This is even number");
// }

// alert  -> it will display the small info to the end user
// confirm ->
// prompt

// const x = confirm("Hello world")
// console.log(x)

// const x = parseInt(prompt("Enter your name"));
// parseInt
// Number

// if (x % 2 === 0) {
//   console.log(`${x} is a even number`);
// } else if (x % 2 === 1) {
//   console.log(`${x} is a odd number`);
// } else if (x === 0) {
//   console.log(`${x} is zero`);
// } else if (x < 0) {
//   console.log(`${x} is a negative number`);
// }

// if (x >= 0) {
//   if (x % 2 === 0) {
//     console.log(`${x} is a even number`);
//   } else {
//     console.log(`${x} is a odd number`);
//   }
// } else {
//   console.log(`${x} is a negative number`);
// }

// if (x >= 18) {
//   console.log("Eligible for vote");
// } else {
//   console.log("Not eligible for vote");
// }

// if
// if else
// if else if  -> if we have more then two conditions
// nested if
// switch case
// ternary operator

//  condition ? statement1 : statement2
// if else
if (true) {
  console.log("Hello world");
} else {
  console.log("Goodbye world");
}

// let x = 3;
// x % 2 === 0 ? console.log("Even") : console.log("Odd");

// loops
// loops are used to repetedly execute a block of code as long as specified condition is true
// while loop
// do while loop
// for loop
// forEach

//  print 1- 20
// let i = 2;
// while (i < 20) {
//   console.log(i);
//   i++; //1+1
// }

// for (let i = 0; i <= 20; i++) {
//   console.log(i);
// }

// let mobiles = [
//   { name: "iPhone 12", price: 1000 },
//   { name: "Samsung Galaxy S21", price: 800 },
//   { name: "OnePlus 8T", price: 700 },
//   { name: "Google Pixel 5", price: 600 },
//   { name: "Xiaomi Mi 11", price: 500 },
//   { name: "Huawei P40", price: 400 },
//   { name: "Apple iPhone 12 Pro", price: 1200 },
//   { name: "Samsung Galaxy S21 Ultra", price: 1000 },
//   { name: "OnePlus 8T Pro", price: 900 },
//   { name: "Google Pixel 5 Pro", price: 800 },
// ];

// for (let i = 0; i < mobiles.length; i++) {
//   if (mobiles[i].name.includes("OnePlus")) {
//     document.writeln(mobiles[i].name + mobiles[i].price);
//   }
// }

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     console.log(numbers[i]);
//   }
// }
// for (let i = 1; i <= 60; i++) {
//   console.log(i);
// }

// 1. extract numbers from 1 to 30
// 2. use if else if
// 3. if number is multiples of 5, print "Fizz"
// 4. if number is multiples of 3, print "Buzz"
// 5. if number is multipes of both 3 and 5, print "FizzBuzz"
