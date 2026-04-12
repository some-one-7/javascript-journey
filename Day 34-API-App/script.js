const usersDiv = document.getElementById("users");
const search = document.getElementById("search");

let users = [];

// Fetch users
async function fetchUsers() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    users = await res.json();
    render(users);
  } catch (err) {
    usersDiv.innerHTML = "Error loading users";
  }
}

// Render
function render(data) {
  usersDiv.innerHTML = "";

  data.forEach(user => {
    const div = document.createElement("div");
    div.classList.add("user");

    div.innerHTML = `
      <strong>${user.name}</strong><br>
      ${user.email}
    `;

    usersDiv.appendChild(div);
  });
}

// Search
search.addEventListener("input", () => {
  const query = search.value.toLowerCase();

  const filtered = users.filter(u =>
    u.name.toLowerCase().includes(query)
  );

  render(filtered);
});

// Init
fetchUsers();
