const list = document.getElementById("list");
const search = document.getElementById("search");
const sort = document.getElementById("sort");

let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

function render() {
  list.innerHTML = "";

  let filtered = [...transactions];

  // Search
  const query = search.value.toLowerCase();
  filtered = filtered.filter(t => 
    t.text.toLowerCase().includes(query)
  );

  // Sort
  if (sort.value === "newest") {
    filtered.sort((a, b) => b.id - a.id);
  } else if (sort.value === "oldest") {
    filtered.sort((a, b) => a.id - b.id);
  } else if (sort.value === "high") {
    filtered.sort((a, b) => b.amount - a.amount);
  } else if (sort.value === "low") {
    filtered.sort((a, b) => a.amount - b.amount);
  }

  filtered.forEach(t => {
    const li = document.createElement("li");
    li.classList.add(t.amount > 0 ? "income" : "expense");

    li.innerHTML = `
      ${t.text}
      <span>₹${t.amount}</span>
    `;

    list.appendChild(li);
  });
}

// Events
search.addEventListener("input", render);
sort.addEventListener("change", render);

// Initial
render();
