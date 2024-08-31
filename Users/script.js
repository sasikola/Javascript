// const userList = document.getElementById('user-list');
// const loadMoreBtn = document.createElement('button');
// loadMoreBtn.className = 'load-more';
// loadMoreBtn.innerText = 'Load More';
// let currentPage = 1;
// const totalPages = 2; // Adjust based on API's total pages

// // Fetch users from API
// async function fetchUsers(page) {
//     try {
//         const response = await fetch(`https://reqres.in/api/users?page=${page}`);
//         const data = await response.json();
//         displayUsers(data.data);

//         // Show load more button if there are more pages
//         if (page < data.total_pages) {
//             currentPage++;
//             document.querySelector('.container').appendChild(loadMoreBtn);
//         } else {
//             loadMoreBtn.remove();
//         }
//     } catch (error) {
//         console.error('Error fetching users:', error);
//     }
// }

// // Display users on the page
// function displayUsers(users) {
//     users.forEach(user => {
//         const userCard = document.createElement('div');
//         userCard.className = 'user-card';

//         userCard.innerHTML = `
//             <img src="${user.avatar}" alt="${user.first_name} ${user.last_name}">
//             <h2>${user.first_name} ${user.last_name}</h2>
//             <p>${user.email}</p>
//         `;

//         userList.appendChild(userCard);
//     });
// }

// // Load more users on button click
// loadMoreBtn.addEventListener('click', () => {
//     fetchUsers(currentPage);
// });

// // Initial fetch
// fetchUsers(currentPage);

const userList = document.getElementById("user-list");
// Fetch data from the API
fetch("https://reqres.in/api/users")
  .then((response) => response.json())
  .then((data) => {
    const users = data.data;

    // Use map to generate an array of HTML strings
    const userCards = users
      .map(
        (user) => `
                <div class="user-card">
                    <img src="${user.avatar}" alt="${user.first_name} ${user.last_name}" width="50">
                    <div class="user-details">
                        <h2>${user.first_name} ${user.last_name}</h2>
                        <p>${user.email}</p>
                    </div>
                </div>
            `
      )
      .join(""); // Join the array into a single string

    // Insert the generated HTML into the userList element
    userList.innerHTML = userCards;
  })
  .catch((error) => console.error("Error fetching users:", error));
