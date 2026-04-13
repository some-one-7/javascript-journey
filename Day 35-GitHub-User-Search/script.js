const search = document.getElementById("search");
const userDiv = document.getElementById("user");
const statusDiv = document.getElementById("status");

let timeout;

// Debounce function
function debounce(fn, delay) {
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
}

// Fetch GitHub user
async function fetchUser(username) {
  if (!username) {
    userDiv.innerHTML = "";
    statusDiv.innerHTML = "";
    return;
  }

  statusDiv.innerHTML = "<p class='loading'>Loading...</p>";
  userDiv.innerHTML = "";

  try {
    const res = await fetch(`https://api.github.com/users/${username}`);

    if (!res.ok) throw new Error("User not found");

    const data = await res.json();

    statusDiv.innerHTML = "";

    userDiv.innerHTML = `
      <div class="user-card">
        <img src="${data.avatar_url}" />
        <h2>${data.name || data.login}</h2>
        <p>${data.bio || "No bio available"}</p>
        <p>Followers: ${data.followers}</p>
        <p>Following: ${data.following}</p>
      </div>
    `;
  } catch (err) {
    statusDiv.innerHTML = `<p class="error">${err.message}</p>`;
  }
}

// Debounced search
const handleSearch = debounce((e) => {
  fetchUser(e.target.value.trim());
}, 500);

search.addEventListener("input", handleSearch);
