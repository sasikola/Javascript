console.log("Hello world");

// API --> application program interface
// using python, java, node js and express js

// get, post, update, and delete

//5 star hotel

// 1. waiter
// 2. he will go to kitchen
// 3. they will prepate the food item
// 4.

// req --> waiter
// res --> kitchen
// https://reqres.in/api/users?page=1

// fetch
// let person = [
//   {
//     name: "John ",
//     age: 30,
//     email: "johndoe@example.com",
//   },
//   {
//     name: " Doe",
//     age: 30,
//     email: "johndoe@example.com",
//   },
//   {
//     name: "John2",
//     age: 30,
//     email: "johndoe@example.com",
//   },
// ];

// CRUD
// create - POST API
// read - GET API
// update - PUT API /patch
// delete - DELETE API
// fetch(api)

// to display the data dynamically we use fetch()  and api(get)
// we can send the data to server using POST method
// using axios(this is a library)

fetch("https://reqres.in/api/users?page=1")
  .then((res) => {
    return res.json();
  })
  .then((i) => {
    console.log(i);
    displayUsers(i.data);
  });

function displayUsers(user) {
  user.map((i) => {
    document.getElementById("user").innerHTML += `
        <div>
            <p>Full name: ${i.first_name} ${i.last_name}</p>
            <p> Email: ${i.email}</p>
            <img src = "${i.avatar}" >
        </div>
        `;
  });
}




const btn = document.getElementById("btn");
btn.addEventListener("click", myFunction);
function myFunction() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  axios
    .post("https://reqres.in/api/users", {
      username: username,
      password: password,
    })
    .then((res) => {
      console.log(res);
    });
}










const colorButton = document.getElementById("btnColor");
colorButton.addEventListener("click", changeColor);
function changeColor() {
  const inputColor = document.getElementById("inputColor").value;
  document.body.style.backgroundColor = inputColor;
}
