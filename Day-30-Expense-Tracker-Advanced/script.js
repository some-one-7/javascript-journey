const balance = document.getElementById("balance");
const income = document.getElementById("income");
const expense = document.getElementById("expense");
const list = document.getElementById("list");

const form = document.getElementById("form");
const text = document.getElementById("text");
const amount = document.getElementById("amount");
const category = document.getElementById("category");
const filter = document.getElementById("filter");

let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

// Add transaction
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const transaction = {
    id: Date.now(),
    text: text.value,
    amount: +amount.value,
    category: category.value
  };

  transactions.push(transaction);
  updateLocalStorage();
  render();

  form.reset();
});

// Delete
function deleteTransaction(id) {
  transactions = transactions.filter(t => t.id !== id);
  updateLocalStorage();
  render();
}

// Render
function render() {
  const selected = filter.value;

  list.innerHTML = "";

  let total = 0, inc = 0, exp = 0;

  const filtered = selected === "All"
    ? transactions
    : transactions.filter(t => t.category === selected);

  filtered.forEach(t => {
    total += t.amount;
    if (t.amount > 0) inc += t.amount;
    else exp += t.amount;

    const li = document.createElement("li");
    li.classList.add(t.amount > 0 ? "income" : "expense");

    li.innerHTML = `
      <div>
        ${t.text}
        <div class="category">${t.category}</div>
      </div>
      <span>₹${t.amount}</span>
      <button onclick="deleteTransaction(${t.id})">x</button>
    `;

    list.appendChild(li);
  });

  balance.innerText = total;
  income.innerText = inc;
  expense.innerText = Math.abs(exp);
}

// Save
function updateLocalStorage() {
  localStorage.setItem("transactions", JSON.stringify(transactions));
}

filter.addEventListener("change", render);

render();
