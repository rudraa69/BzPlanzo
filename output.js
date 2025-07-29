// --- GLOBAL VARIABLES ---
let myChart = null; // To hold the chart instance
const originalData = JSON.parse(localStorage.getItem("resultData"));

// --- UTILITY FUNCTIONS ---
function formatCurrency(value) {
  return `₹${Math.round(value).toLocaleString("en-IN")}`;
}

// --- CORE RENDERING LOGIC ---
function renderReport(data) {
  const { city, businessName, budget, breakdown, monthly, breakeven, profitMargin, staffRoles } = data;
  const cityName = city.charAt(0).toUpperCase() + city.slice(1);

  // 1. Summary Section
  document.getElementById("summarySection").innerHTML = `
    <h2>📍 ${cityName} - ${businessName}</h2>
    <p><strong>Total Investment:</strong> ${formatCurrency(budget)}</p>
    <p><strong>Estimated Monthly Operating Cost:</strong> ${formatCurrency(monthly)}</p>
    <p><strong>Profit Margin Used for Calculation:</strong> ${(profitMargin * 100).toFixed(0)}%</p>
    <p><strong><mark>Estimated Time to Breakeven: ${breakeven} months</mark></strong></p>
  `;
    
  // Update total investment display value
  document.getElementById("totalInvestmentValue").textContent = formatCurrency(budget);

  // 2. Breakdown Grid
  const grid = document.getElementById("breakdownGrid");
  grid.innerHTML = "";
  const icons = { rent: "🏢", salaries: "💼", equipment: "🛠️", marketing: "📢", legal: "📄", misc: "⚙️" };
  const chartLabels = [];
  const chartValues = [];

  for (let key in breakdown) {
    if (!icons[key]) continue;
    
    const label = key.charAt(0).toUpperCase() + key.slice(1);
    chartLabels.push(label);
    chartValues.push(breakdown[key]);
    
    let description = `<p>${formatCurrency(breakdown[key])} (One-Time)</p>`;
    if (key === "rent" || key === "salaries") {
        description = `<p>${formatCurrency(breakdown[key])} / year<br>
        <span style="font-size:0.85em; color: #aaa;">(${formatCurrency(breakdown[key] / 12)} / month)</span></p>`;
    }

    grid.innerHTML += `
      <div>
        <h4>${icons[key]} ${label}</h4>
        ${description}
      </div>
    `;
  }

  // 3. Chart
  if (myChart) {
    myChart.destroy();
  }
  const ctx = document.getElementById("costChart").getContext("2d");
  myChart = new Chart(ctx, {
    type: "pie",
    data: {
      labels: chartLabels,
      datasets: [{
        label: "Cost Distribution",
        data: chartValues,
        backgroundColor: ["#f1c40f", "#f39c12", "#e67e22", "#d35400", "#e74c3c", "#c0392b"],
        borderColor: '#1a1a1a',
        borderWidth: 2,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { labels: { color: "#fff", font: { size: 14 } } },
        tooltip: {
            callbacks: {
                label: function(context) {
                    let label = context.label || '';
                    if (label) {
                        label += ': ';
                    }
                    if (context.parsed !== null) {
                        label += formatCurrency(context.parsed);
                    }
                    return label;
                }
            }
        }
      }
    }
  });

  // 4. AI Assistant Insight
  let suggestion = "";
    if (breakeven > 36) {
        suggestion = "⚠️ **High Risk:** The estimated breakeven period is over 3 years. This suggests that either the initial investment is very high for the projected monthly costs, or the profit margins are thin. Consider ways to significantly lower initial costs or find a business model with higher profitability.";
    } else if (breakeven > 18) {
        suggestion = "🤔 **Moderate Outlook:** A breakeven between 1.5 to 3 years is standard but requires careful management. Keep a close eye on your monthly expenses and focus on achieving your revenue goals consistently to stay on track.";
    } else if (breakeven <= 18) {
        suggestion = "✅ **Strong Potential:** A breakeven point under 18 months is excellent. This indicates a healthy balance between your investment and potential returns. If you can control costs and grow revenue, this could be a very profitable venture.";
    }
  document.getElementById("aiAssistant").innerHTML = `
    <h2>🤖 AI Assistant Insight</h2>
    <p>${suggestion}</p>
  `;

  // 5. Revenue Forecast
  const revenueToCoverCosts = monthly / profitMargin;
  document.getElementById("revenueForecast").innerHTML = `
    <h2>📈 Monthly Revenue Target</h2>
    <p>To cover your monthly operating costs of <strong>${formatCurrency(monthly)}</strong>, you need to generate at least <strong>${formatCurrency(revenueToCoverCosts)}</strong> in revenue each month.</p>
    <p>💡 Your ultimate goal is to generate enough profit to recover your total investment of <strong>${formatCurrency(budget)}</strong>. Achieving the target above is the first step.</p>
  `;

  // 6. Update Editable Fields
  document.getElementById('editRentInput').value = Math.round(breakdown.rent / 12);
  document.getElementById('editSalaryInput').value = Math.round(breakdown.salaries / 12);
}

// --- EDIT LOGIC ---
window.applyEdits = function() {
    const newRentMonthly = parseInt(document.getElementById('editRentInput').value) || 0;
    const newSalariesMonthly = parseInt(document.getElementById('editSalaryInput').value) || 0;

    // Create a new copy of the data to modify
    const editedData = JSON.parse(JSON.stringify(originalData));
    
    // Recalculate costs based on new inputs
    const newRentTotal = newRentMonthly * 12;
    const newSalaryTotal = newSalariesMonthly * 12;
    
    const oldFixedCosts = editedData.breakdown.rent + editedData.breakdown.salaries;
    const newFixedCosts = newRentTotal + newSalaryTotal;

    // The "one-time" costs (equipment, etc.) are adjusted based on the change in rent/salaries
    const changeInFixed = oldFixedCosts - newFixedCosts;
    const newRemainingForOneTime = (editedData.budget - oldFixedCosts) + changeInFixed;

    if (newRemainingForOneTime <= 0) {
        alert("❌ With these new rent and salary figures, there is no budget left for one-time costs like equipment. Please adjust.");
        return;
    }

    // Recalculate one-time costs based on original proportions
    const equipmentPercent = editedData.breakdown.equipment / (editedData.breakdown.equipment + editedData.breakdown.marketing + editedData.breakdown.legal + editedData.breakdown.misc);
    const marketingPercent = editedData.breakdown.marketing / (editedData.breakdown.equipment + editedData.breakdown.marketing + editedData.breakdown.legal + editedData.breakdown.misc);
    const legalPercent = editedData.breakdown.legal / (editedData.breakdown.equipment + editedData.breakdown.marketing + editedData.breakdown.legal + editedData.breakdown.misc);
    
    editedData.breakdown.rent = newRentTotal;
    editedData.breakdown.salaries = newSalaryTotal;
    editedData.breakdown.equipment = Math.round(newRemainingForOneTime * equipmentPercent);
    editedData.breakdown.marketing = Math.round(newRemainingForOneTime * marketingPercent);
    editedData.breakdown.legal = Math.round(newRemainingForOneTime * legalPercent);
    editedData.breakdown.misc = newRemainingForOneTime - editedData.breakdown.equipment - editedData.breakdown.marketing - editedData.breakdown.legal; // Remainder

    // Recalculate monthly costs and breakeven
    editedData.monthly = newRentMonthly + newSalariesMonthly;
    const monthlyRevenueToBreakeven = editedData.monthly / editedData.profitMargin;
    editedData.breakeven = Math.ceil(editedData.budget / monthlyRevenueToBreakeven);

    // Re-render the entire report with the new, temporary data
    renderReport(editedData);
    alert("✅ Preview updated! The report has been recalculated with your new cost estimates.");
};


// --- INITIAL PAGE LOAD ---
document.addEventListener("DOMContentLoaded", () => {
  if (!originalData) {
    document.getElementById("reportContainer").innerHTML = `
      <div class="brand">😢 Oops!</div>
      <div class="section">
          <h2>No Data Found</h2>
          <p>We couldn't find any report data. This can happen if you navigate to this page directly.</p>
          <div class="button-wrapper">
              <a href="index.html" class="btn-try-again">🚀 Start a New Plan</a>
          </div>
      </div>
      <div class="footer">
          © Created by Rudra Patel, Student of GTU
      </div>
    `;
    return;
  }
  
  // Initial render with data from localStorage
  renderReport(originalData);
});
