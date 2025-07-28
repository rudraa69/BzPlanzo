
// output.js – BizPlanner Results Page Logic

function goHome() {
  window.location.href = "index.html";
}

const data = JSON.parse(localStorage.getItem("resultData"));

if (!data) {
  document.getElementById("summarySection").innerHTML = "<p>Something went wrong. Please return to the homepage and try again.</p>";
} else {
  const { city, businessType, budget, breakdown, totalFixedCost, monthly, breakeven, potential } = data;

  const cap = s => s.charAt(0).toUpperCase() + s.slice(1);

  document.getElementById("summarySection").innerHTML = `
    <h2>📍 ${cap(city)} - ${cap(businessType)}</h2>
    <p><strong>Total Investment:</strong> ₹${budget.toLocaleString()}</p>
    <p><strong>Estimated Annual Fixed Cost:</strong> ₹${totalFixedCost.toLocaleString()}</p>
    <p><strong>Estimated Monthly Cost:</strong> ₹${monthly.toLocaleString()}</p>
    <p><strong>Breakeven Sales Required (at 40% margin):</strong> ₹${breakeven.toLocaleString()}</p>
    <p><strong>AI Insight:</strong> ${potential}</p>
  `;

  const grid = document.getElementById("breakdownGrid");
  const labels = [], values = [], icons = {
    rent: "🏢",
    salaries: "💼",
    equipment: "🛠",
    marketing: "📢",
    legal: "📄",
    misc: "⚙"
  };
  const colors = ["#f1c40f", "#f39c12", "#e67e22", "#d35400", "#e74c3c", "#c0392b"];

  let i = 0;
  for (let key in breakdown) {
    labels.push(cap(key));
    values.push(breakdown[key]);
    grid.innerHTML += `
      <div>
        <h4>${icons[key] || "❓"} ${cap(key)}</h4>
        <p>₹${breakdown[key].toLocaleString()}</p>
      </div>
    `;
  }

  const ctx = document.getElementById("costChart").getContext("2d");
  new Chart(ctx, {
    type: "pie",
    data: {
      labels: labels,
      datasets: [{
        label: "Budget Breakdown",
        data: values,
        backgroundColor: colors,
        borderWidth: 1
      }]
    },
    options: {
      plugins: {
        legend: {
          labels: {
            color: "#fff"
          }
        }
      }
    }
  });
}
