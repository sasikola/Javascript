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
// if (true) {
//   console.log("Hello world");
// } else {
//   console.log("Goodbye world");
// }

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

// logical operators
// && , ||, !
// to check the two conditions we have to use logical operators

// &&
// T && T --> T
// T F --> F
// F F --> F
// F T --> F

// ||
// true and true --> true
// true and false --> true
// false and true --> true
// false and false --> false

// !
// true --> false
// fale --> true

// let x = 2;

// console.log(x === 2);
// console.log(x !== 3);
// if (x === 2 && x === 3) {
//   console.log("Hello world");
// }

// let username = "user12";
// let password = "password1234";

// if (username === "user123" || password === "password123") {
//   console.log("Login successful");
// } else {
//   console.log("Invalid credentials");
// }

// let age = 20;
// let hasPermission = false;

// if (age >= 18 && hasPermission) {
//   console.log("Eligible for vote");
// } else {
//   console.log("Not eligible for vote");
// }

// let isWeekend = false;
// let isHoliday = true;

// if (isWeekend || isHoliday) {
//   console.log("You can relax today");
// } else {
//   console.log("It's a working day");
// }

// let numbers = [3, 7, 1, 8, 2, 5];
// // 1. iterate an array
// // 2. we have to compare the numbers to each other
// let maxNum = numbers[0];  //8
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > maxNum) {  //2 > 8  --> false
//     maxNum = numbers[i];
//   }
// }
// console.log(`The maximum number is ${maxNum}`);

// let numbers = [3, -1, 0, -2, 4, -3, -5, 0, 8];
// positiveNumbes = 3
// negativeNumbres = 4
// zero = 2

// 1. loop the array to extract the elements
//

// let positiveNum = 0;
// let negativeNum = 0;
// let zeroCount = 0;

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > 0) {
//     positiveNum++;
//   } else if (numbers[i] < 0) {
//     negativeNum++;
//   }else{
//     zeroCount++;
//   }
// }

// console.log("Postive numbers = ", positiveNum);
// console.log("Negative numbers = ", negativeNum);
// console.log("Zero count = ", zeroCount);

// we can call the js as a functional language
// to re-use the block of code to perform particular task

// function greet(a,b, c) {
//   console.log("Hello world");
// }

// greet(1,2,3,4);

// general function / normal function
// arrow function
// ananymous function
// self-invoking function

// function functionName(a, b, c) {
//   return a + b + c;
//   return a - b - c;
// }

// console.log(functionName(2, 3, 4));

// let x = (a,v,b) => {
//   console.log("Hello world");
// };
// x(4,4,5)

// let x = function(){
//   console.log("Hello world");
// }
// x()

// function filterProducts(products) {
//   for (let i = 0; i < products.length; i++) {
//     if (products[i].price > 800) {
//       console.log(products[i].name);
//     }
//   }
// }
// let products = [
//   { name: "iPhone 12", price: 1000 },
//   { name: "Samsung Galaxy S21", price: 800 },
//   { name: "OnePlus 8T", price: 700 },
//   { name: "Google Pixel 5", price: 600 },
//   { name: "Xiaomi Mi 11", price: 500 },
//   { name: "Huawei P40", price: 400 },
// ];
// filterProducts(products);
// strings --> it is a group of characters enclosed with in a double quotes or single quotes
// it is a primitive data type
// let x = "true";
// let y = "john";
// let z = `john`;
// console.log(typeof x);
// console.log(typeof y);
// console.log(typeof z);
// // string interpolation
// let age = 30;
// let name = "john";
// console.log("My name is " + name + "and my age is " + age);

// console.log(`My name is ${name} and my age is ${age}`);

// let x = "Hello world Hello";
// // length --> it will return the length of a string
// console.log(x.length);
// // charAt() --> it will return  the character at a specified index position in a string
// console.log(x.charAt(6));

// slice(start, end)--> it will extract the part of a string and return the extracted part
// start index --> 0 (H)
// end index --> 4 (l)

// let part = x.slice(0, 5);
// console.log(part);
// subStr()
// subString()

// searching methods in string
// indexOf() --> it will return the index position of the first occurance

// console.log(x.indexOf("Hello"));

// lastIndexOf() --> it will return the index from the last occurance

// console.log(x.lastIndexOf("Hell"));

// let text = "it will return the index from the last occurance";
// let index = text.lastIndexOf("the");
// console.log(index);

// searh()--> search method return position of the match
// let text = "It will     Return the index from the last Occurance";
// console.log(text.search("will"));
// // toUpperCase() -->
// let upperCase = text.toUpperCase();
// console.log(upperCase);

// toLowerCase()
// console.log(text.toLowerCase());

// let str1 = "Hello";
// let str2 = "World";
// console.log(str1 + str2);
// console.log(str2.concat(str1));

// trim() --> trim method will removes the whitespaces from the string
// it will remove the whitespaced from both the ends
// let string = "   Hello,  Word!  ";
// console.log(string);
// let trimmedString = string.trim(" ");
// console.log(trimmedString);
// string.trimStart();
// string.trimEnd()

// replace()--> it will replace the specified value with  another value
// let string = "It will Return the index from the last Occurance";
// let newString = string.replace("Return", "Give");
// console.log(newString);
// let img1 = "image1.png";
// let img2 = "image2.png";
// console.log(img1.replace(".png", ".jpg"));

// split() --> it is used to convert the string to array
// console.log(string.lastIndexOf("e"));  //e
// let greet = "hello";
// h --> 1
// e  ->1
// l --> 2
// console.log(string.indexOf("h"))

// console.log(greet.substring(0, 2));

// charCodeAt()
// 0 - 65535
// console.log(string.charCodeAt(1));
// console.log(string.includes("return"));

// padding method -->  padStart and padEnd
// it will allow us to add a additional characters in a string

// let str = "123";
// let paddStart = str.padEnd(6, "abc");
// console.log(paddStart);

// repeat(2);
// it will repeat the string for the specified number of times
// console.log(str.repeat(10));

// anagram
// listen
// silent

// arrays
// arrays are used to store the multiple values in a single variable
// it is denoted using []
// let arr = [1, 2, 3, "hello", true];
// console.log(arr);
// console.log(arr[3]);

// push  --> push method add element to the array from the ending position and it will return new array
// pop  --> removes the element from the last position, and it will return the new array
// shift  --> removes the element from the starting position and return new array
// unshift  --> add element from the starting position and return new array
// arr.push("World");
// console.log(arr);

// arr.pop();
// console.log(arr);

// arr.shift();
// console.log(arr);

// arr.unshift("Hello");
// console.log(arr);

// concat() --> concat method merge two or more arrays

// let arr1 = [1, 2, 3];
// let arr2 = ["a", "b", "c"];
// let arr3 = ["orange", "banana"];

// let mergedArr = arr1.concat(arr2, arr3);
// console.log(mergedArr);

// slice() --> it will return the shallow copy of a portion of an array into new array. it does not modify the original array

// let fruits = ["orange", "banana", "apple", "banana"];
// console.log(fruits);
// let slicedArray = fruits.slice(0, 3);

// console.log(slicedArray);

// // splice() -->
// let splicedArray = fruits.splice(0, 1, "hello world", "Grapes")
// console.log(splicedArray)
// console.log(fruits)

// indexOf()--> it will returns the index position

// console.log(fruits.indexOf("banana"));
// console.log(fruits.lastIndexOf("banana"));

// find() --> find method will return the value of first element in the array that satifies the providing logic/ testing function, otherwise it will return undefined

// let fruits = ["orange", "banana", "apple", "banana"];

// let newValue = fruits.find((i) => {
//   return i === "bana";
// });

// console.log(newValue);

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// let found = numbers.find((i) => i % 2 === 0);
// console.log("find method", found);

// map
// filter
// reduce
// find
// forEach

// let modifiedArray = numbers.map((i) => {
//   return i + 2;
// });
// console.log(modifiedArray);

// let filteredArray = numbers.filter((i) => i % 2 == 0);
// console.log("filteredArray", filteredArray);

// let number = [1, 2, 3, 4];
// let sum = number.reduce((pre, curr) => pre * curr);
// console.log(sum);

// flipkart
// mobile (cart) 1000
// charger (cart) 100
// earphones (cart) 100
// total -> 1200

// let products = [
//   {
//     name: "Laptop",
//     price: 900,
//     inStock: true,
//   },
//   {
//     name: "Mobile",
//     price: 1000,
//     inStock: true,
//   },
//   {
//     name: "Charger",
//     price: 100,
//     inStock: true,
//   },
//   {
//     name: "Earphones",
//     price: 100,
//     inStock: false,
//   },
// ];

// console.log(products);
// let inStockProducts = products.filter((i) => i.inStock === true);
// console.log(inStockProducts);

// for (let i = 0; i < inStockProducts.length; i++) {
//   console.log(inStockProducts[i].price);
// }

// let singleProduct = inStockProducts.map((i) => i.price);
// console.log(singleProduct);

// let totalPrice = singleProduct.reduce((pre, curr) => pre + curr);

// console.log(totalPrice);

// const students = [
//   { name: "Alice", score: 85 },
//   { name: "Bob", score: 95 },
//   { name: "Charlie", score: 67 },
//   { name: "David", score: 74 },
//   { name: "Eve", score: 88 },
//   { name: "Frank", score: 50 },
// ];

// // filter the students  who got score above the 70 marks

// // let highScores = students.filter((student) => student.score > 70);
// // console.log(highScores);

// let topScoreStudent = students
//   .filter((i) => i.score > 70)
//   .reduce((preValue, currValue) => {
//     console.log(currValue.score);
//     return currValue.score > preValue.score ? currValue : preValue;
//   }).name;

// console.log("topScoreStudent", topScoreStudent);

// const students = [
//   { name: "Alice", score: 85, },
//   { name: "Bob", score: 95 },
//   { name: "Charlie", score: 67 },
//   { name: "David", score: 74 },
//   { name: "Eve", score: 88 },
//   { name: "Frank", score: 50 },
// ];

// let filteredStudents1 = students.forEach((student, index) => {
//   return student.score > 90 ? student.name : "";
// });

// console.log(filteredStudents1);

// let filteredStudents2 = students.map((student, index) => {
//   return student.score > 70 ? student.name : "";
// });
// console.log(filteredStudents2);

// forEach()-->it is used to iterate the array of elements and execute provided function once for each element.
// forEach it will print undefined

// map()--> map is used o create a new array by applying a provided function
// it will return a new array
// the length of the returned array is same as the original array

// let fruits = ["orange", "banana", "apple"];
// sort()-> sort method will sort the array and return new array
// by default the sorting order is ascending
// fruits.sort((a, b) => a - b);

// console.log(fruits);

// let numbers = [1, 2, [3, 4], 5, 6, [7, 8]];
// // [1,2,3,4,5,6,7,8]  flatten the array
// // flat()--> it will return a new array with all sub-array elements concatenated into the single array

// console.log(numbers.flat());

// objects
// car --> color, cost, speed,
// {}
// key : value
// let car = {};

// car.color = "Red"
// car.name = "Benz"
// car.price = 1099084
// console.log(car.color)

// using new keyword

// const car = new Object();

// car.color = "Red";
// car.name = "Benz";
// car.price = 1099084;
// console.log(car);

// function MyObject(color, price, name) {
//   this.name = name;
//   this.price = price;
//   this.color = color;
// }

// let car = new MyObject("Red", 1099084, "Benz");
// console.log(car)

// let person = {
//   username: "John",
//   age: 30,
// };

// Object.freeze(person);
// person.username = "Tony";
// console.log(person.name);

// shallow copy -->a shallow copy of an object is a copy where the first level of the object is duplicated
// person.username = "Tony"

// method 1
// let shallowCopy = Object.assign({}, person);

// shallowCopy.username = "tony"
// console.log("shallowCopy", shallowCopy)

// method2

// let shallowCopy2 = { ...person };

// shallowCopy2.username = "tony";
// console.log("shallowCopy2", shallowCopy2);

// deep copy --> deep copy duplicates everything, including nested objects. this means that the copied object is completely independent of the original

// let person = {
//   username: "John",
//   age: 30,
//   address: {
//     street: "123 Main St",
//     city: "New York",
//     state: "NY",
//     zip: 10001,
//   },
// };

// let shallowCopy2 = { ...person };
// shallowCopy2.address.city = "America";
// console.log("shallowCopy2", shallowCopy2);
// console.log("Original object", person);

// let deepCopy = JSON.parse(JSON.stringify(person));
// deepCopy.address.city = "America";
// console.log("deepCopy", deepCopy)
// console.log("Original object", person)

// 1. how many ways we can create an object
// 2. shallow copy and deep copy
// 3. freeze()

// callback function --> a callback is a function that is passed as an argument to another function

// callback function is used to perform a specific task after another function has completed its execution

// map, filter, reduce, find,
// software  --> front-end + backend(server)
// front-end --> html, css, javascript

// we use javascript to make the webpages interactive and dynamic
// API
// API integration
// API --> application programming interface
// CRUD --> create (POST), read/retrive (GET), update(PUT/PATCH), delete(DELETE)
// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((response) => {
//     return response.json();
//   })
//   .then((i) => {
//     console.log(i);
//   });

// pending
// reject
// fulfill
// axios
// get and post
// pending --> reject
// pending --> resolve or fulfill

// axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
//   console.log("success", res.data);
// });

// DOM --> document object model
// using id --> it will access first occurance
// using className []
// using tagName []
// using querySelector --> it will access first occurance
// using querySelectorAll []

// let title = document.getElementById("heading");

// title.style.backgroundColor = "red";
// title.style.color = "white";
// title.style.margin = "20px";
// title.style.padding = "20px";

// let title = document.getElementsByClassName("heading");

// for (let i = 0; i < title.length; i++) {
//   console.log(title[i]);
//   title[i].style.backgroundColor = "red";
//   title[i].style.color = "green";
// }

// let title = document.getElementsByTagName("h1")

// for (let i = 0; i < title.length; i++) {
//   title[i].style.backgroundColor = "green";
// }

// querySelector
// using class
// using id

// let title = document.querySelector("#heading");
// console.log(title);

// title.style.backgroundColor = "red"

// querySelectorAll
// using class
// using id

// let title = document.querySelectorAll("#heading");

// console.log(typeof typeof 1)
// let string = "hello"
// console.log(string[0])
// string[0] = "H"
// console.log(string)

// let array = [1,2,3,4]
// array[0] = 10
// console.log(array)
// array[2] = 30
// console.log(array)

// 5
// using id --> it will access the first occurance
// using class  --> it will store the elements in an array
// querySelector  --> it will access the first occurance (# for id, . for class)
// querySelectorAll --> it will store the elements in an array (# for id, . for class)
// using tagName  --> it will store the elements in an array h1, p

// let button = document.getElementById("btn");
// button.addEventListener("click", toggleTheme);
// let isLightTheme = true;

// function toggleTheme() {
//   if (isLightTheme) {
//     document.body.style.backgroundColor = "white";
//     document.body.style.color = "black";
//     button.innerHTML = "White mode"
//   }else{
//     document.body.style.backgroundColor = "black";
//     document.body.style.color = "white";
//     button.innerHTML = "Dark mode"
//   }

//   isLightTheme = !isLightTheme
// }

let output = document.getElementById("output");

function displayData(data) {
  data.map((i) => {
    output.innerHTML += `
    <div class ="container">
      <p>${i.first_name} ${i.last_name}</p>
      <p>${i.email}</p>
      <img src = "${i.avatar}" >
    </div>
    `;
  });
}

// fetch()
//jsonplaceholder.typicode.com/todos
https: fetch("https://reqres.in/api/users")
  .then((response) => {
    return response.json(); //parse
  })
  .then((i) => {
    displayData(i.data);
  })
  .catch((err) => {
    console.log(err);
  });

// axios
//   .get("https://jsonplaceholder.typicode.com/todos")
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
