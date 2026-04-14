const search = document.getElementById("search");
const userDiv = document.getElementById("user");
const reposDiv = document.getElementById("repos");
const statusDiv = document.getElementById("status");

let timeout;

// Debounce
function debounce(fn, delay) {
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
}

// Fetch data
async function fetchData(username) {
  if (!username) {
    userDiv.innerHTML = "";
    reposDiv.innerHTML = "";
    statusDiv.innerHTML = "";
    return;
  }

  statusDiv.innerHTML = "<p class='loading'>Loading...</p>";
  userDiv.innerHTML = "";
  reposDiv.innerHTML = "";

  try {
    // Fetch user
    const userRes = await fetch(`https://api.github.com/users/${username}`);
    if (!userRes.ok) throw new Error("User not found");

    const user = await userRes.json();

    // Fetch repos
    const repoRes = await fetch(user.repos_url);
    const repos = await repoRes.json();

    statusDiv.innerHTML = "";

    // Render user
    userDiv.innerHTML = `
      <div class="user-card">
        <img src="${user.avatar_url}" />
        <h2>${user.name || user.login}</h2>
        <p>${user.bio || "No bio available"}</p>
      </div>
    `;

    // Render repos
    reposDiv.innerHTML = "<h3>Repositories</h3>";

    repos.slice(0, 5).forEach(repo => {
      const div = document.createElement("div");
      div.classList.add("repo");

      div.innerHTML = `
        <strong>${repo.name}</strong><br>
        ⭐ ${repo.stargazers_count}
      `;

      reposDiv.appendChild(div);
    });

  } catch (err) {
    statusDiv.innerHTML = `<p class="error">${err.message}</p>`;
  }
}

// Debounced input
const handleSearch = debounce((e) => {
  fetchData(e.target.value.trim());
}, 500);

search.addEventListener("input", handleSearch);
