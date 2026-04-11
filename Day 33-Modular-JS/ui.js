export function renderUI(transactions) {
  const list = document.getElementById("list");
  list.innerHTML = "";

  transactions.forEach(t => {
    const li = document.createElement("li");

    li.innerHTML = `
      ${t.text}
      <span>₹${t.amount}</span>
    `;

    list.appendChild(li);
  });
}
