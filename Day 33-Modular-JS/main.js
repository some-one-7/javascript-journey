import { getTransactions, saveTransactions } from "./storage.js";
import { renderUI } from "./ui.js";
import { addTransaction } from "./transactions.js";

const form = document.getElementById("form");
const text = document.getElementById("text");
const amount = document.getElementById("amount");

let transactions = getTransactions();

// Initial render
renderUI(transactions);

// Add transaction
form.addEventListener("submit", (e) => {
  e.preventDefault();

  transactions = addTransaction(transactions, {
    id: Date.now(),
    text: text.value,
    amount: +amount.value
  });

  saveTransactions(transactions);
  renderUI(transactions);

  form.reset();
});
