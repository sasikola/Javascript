// why we use javascript??
// to make the website/ web application interactive and dynamic
// keywords
// data types
// operators
// arrays
// objects
// functions
// DOM
// loops (1 to 10), we use in arrays forloop, forEach, map
// conditions  (if, if else, if else if, nested if, switch case)

// req --> res
// software
// front end (html, css, javascript) --> front end developer
// backend (server + database) --> backend developer
// API

// restaurent
// you will select food
// you will give an order to waiter (request)
// waiter will go the kitchen (sever)
// chef will prepare the food (process)
// waiter will get back to the table with food (response) from kitchen (server)
// API (waiter)
// API will communicate between the front end (client) and backend
// we can create API using some backend languages
// backend languages (java (spring boot), python(flask, django), node js and express js)

// CRUD --> create (POST), read(GET), update(PUT/PATCH) and delete(DELETE)
// json --> javascript syntax notation
// https://reqres.in/api/users?page=2

// code to display users using fetch method
fetch("https://reqres.in/api/users?page=2")
  .then((response) => {
    return response.json();
  })
  .then((i) => {
    displayUsers(i.data);
  });
function displayUsers(users) {
  users.map((i) => {
    document.getElementById("users").innerHTML += `
           <div class= "user_card">
                <img src="${i.avatar}">
                <p> ${i.first_name} ${i.last_name}</p>
           </div>
       `;
  });
}

// code to post the data using axios
// https://reqres.in/api/users  --> POST API

const button = document.getElementById("btn");
button.addEventListener("click", sendData);

function sendData() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  axios
    .post("https://reqres.in/api/users", {
      username,
      password,
    })
    .then((response) => {
      console.log(response);
      alert("Data sent successfully");
    });
}


// code to change the background color
const colorButton = document.getElementById("colorBtn");

colorButton.addEventListener("click", changeColor);
function changeColor() {
  const colorInput = document.getElementById("colorInput").value;
  document.body.style.backgroundColor = colorInput;
}
