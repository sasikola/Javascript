// variables
// keywords -- let, var, const
// arrays
// objects
// operators
// functions
// dom -> document object model

// software
// 1. front end  --> front end developer
// 2. backend (server + database)   -->  backend developer

// amazon --> laptop (request)
// response with some data

// 5 star resturent
// 1. food(biryani) (request) to waiter (front end)
// 2. he will take the request and he will go the kitchen
// 3. chef will prepare the food(biryani)  (process) (backend)
// 4. waiter will get back with food(respose) (front end)

// using API(application programming interface)
// we can create API using java, python(flask, django), node js and express

// CRUD
// c - create --> POST
// r - read  --> GET
// u - update --> PUT
// d - delete --> DELETE
// https://reqres.in/api/users?page=2

fetch("https://reqres.in/api/users?page=2")
  .then((response) => {
    return response.json();
  })
  .then((i) => {
    displayUsers(i.data);
  });

function displayUsers(users) {
  // map
  users.map((user) => {
    document.getElementById("users").innerHTML += `
                <div class="user_card">
                    <img src = "${user.avatar}" >
                    <p> ${user.first_name} ${user.last_name} </p>
                    <p> ${user.email} </p>
                </div>
        `;
  });
}

// https://reqres.in/api/users  --> POST API

let button = document.getElementById("btn");
button.addEventListener("click", sendUser);
function sendUser() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  axios
    .post("https://reqres.in/api/users", { username, password })
    .then((response) => {
      alert("User logged in successfully!");
    });
}






const colorBtn = document.getElementById("colorBtn");

colorBtn.addEventListener("click", changeColor);
function changeColor() {
  let colorInput = document.getElementById("colorInput").value;
  document.body.style.backgroundColor = colorInput;
}
