const balance = document.getElementById("balance");
const income = document.getElementById("income");
const expense = document.getElementById("expense");
const list = document.getElementById("list");
const form = document.getElementById("form");
const text = document.getElementById("text");
const amount = document.getElementById("amount");

// Load from localStorage
let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

// Add transaction
function addTransaction(e) {
  e.preventDefault();

  const transaction = {
    id: Date.now(),
    text: text.value,
    amount: +amount.value
  };

  transactions.push(transaction);
  updateLocalStorage();
  render();

  text.value = "";
  amount.value = "";
}

// Delete transaction
function deleteTransaction(id) {
  transactions = transactions.filter(t => t.id !== id);
  updateLocalStorage();
  render();
}

// Update UI
function render() {
  list.innerHTML = "";

  let total = 0;
  let inc = 0;
  let exp = 0;

  transactions.forEach(t => {
    total += t.amount;
    if (t.amount > 0) inc += t.amount;
    else exp += t.amount;

    const li = document.createElement("li");
    li.classList.add(t.amount > 0 ? "income" : "expense");

    li.innerHTML = `
      ${t.text} <span>₹${t.amount}</span>
      <button class="delete-btn" onclick="deleteTransaction(${t.id})">x</button>
    `;

    list.appendChild(li);
  });

  balance.innerText = total;
  income.innerText = inc;
  expense.innerText = Math.abs(exp);
}

// Save to localStorage
function updateLocalStorage() {
  localStorage.setItem("transactions", JSON.stringify(transactions));
}

form.addEventListener("submit", addTransaction);

// Initial render
render();
