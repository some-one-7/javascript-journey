const ctx = document.getElementById("chart").getContext("2d");

// Load transactions
const transactions = JSON.parse(localStorage.getItem("transactions")) || [];

// Group by category
const dataMap = {};

transactions.forEach(t => {
  const cat = t.category || "Other";

  if (!dataMap[cat]) {
    dataMap[cat] = 0;
  }

  dataMap[cat] += Math.abs(t.amount);
});

// Prepare chart data
const labels = Object.keys(dataMap);
const values = Object.values(dataMap);

// Create chart
new Chart(ctx, {
  type: "pie",
  data: {
    labels: labels,
    datasets: [{
      label: "Expenses",
      data: values,
      borderWidth: 1
    }]
  }
});
