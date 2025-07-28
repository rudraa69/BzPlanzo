function goHome() {
  window.location.href = "index.html";
}

// 🏙️ Salary rates for ALL cities (customize as needed)
const salaryRates = {
  ahmedabad: {
    Manager: 30000, Chef: 25000, Waiter: 12000,
    Baker: 20000, Helper: 10000, Pharmacist: 25000,
    Agent: 20000, Clerk: 12000, Technician: 20000,
    Trainer: 22000, Stylist: 15000, Assistant: 9000,
    Tutor: 20000, Receptionist: 15000, Sales: 15000
  },
  surat: {
    Manager: 20000, Chef: 18000, Waiter: 9000,
    Baker: 15000, Helper: 8000, Pharmacist: 18000,
    Agent: 16000, Clerk: 9000, Technician: 15000,
    Trainer: 15000, Stylist: 12000, Assistant: 8000,
    Tutor: 15000, Receptionist: 10000, Sales: 10000
  },
  vadodara: {
    Manager: 19000, Chef: 17000, Waiter: 8500,
    Baker: 14000, Helper: 7500, Pharmacist: 17000,
    Agent: 15000, Clerk: 8500, Technician: 14000,
    Trainer: 14000, Stylist: 11000, Assistant: 7500,
    Tutor: 14000, Receptionist: 9500, Sales: 9500
  },
  rajkot: {
    Manager: 18000, Chef: 16000, Waiter: 8000,
    Baker: 13000, Helper: 7000, Pharmacist: 16000,
    Agent: 14000, Clerk: 8000, Technician: 13000,
    Trainer: 13000, Stylist: 10000, Assistant: 7000,
    Tutor: 13000, Receptionist: 9000, Sales: 9000
  },
  anand: {
    Manager: 17000, Chef: 15000, Waiter: 8000,
    Baker: 12000, Helper: 7000, Pharmacist: 15000,
    Agent: 13000, Clerk: 7500, Technician: 12000,
    Trainer: 12000, Stylist: 9000, Assistant: 7000,
    Tutor: 12000, Receptionist: 8500, Sales: 8500
  },
  nadiad: {
    Manager: 17000, Chef: 15000, Waiter: 8000,
    Baker: 12000, Helper: 7000, Pharmacist: 15000,
    Agent: 13000, Clerk: 7500, Technician: 12000,
    Trainer: 12000, Stylist: 9000, Assistant: 7000,
    Tutor: 12000, Receptionist: 8500, Sales: 8500
  },
  kapadwanj: {
    Manager: 15000, Chef: 12000, Waiter: 7000,
    Baker: 10000, Helper: 6000, Pharmacist: 12000,
    Agent: 11000, Clerk: 6000, Technician: 10000,
    Trainer: 10000, Stylist: 8000, Assistant: 6000,
    Tutor: 10000, Receptionist: 7000, Sales: 7000
  },
  bhavnagar: {
    Manager: 16000, Chef: 13000, Waiter: 7500,
    Baker: 11000, Helper: 6500, Pharmacist: 13000,
    Agent: 12000, Clerk: 7000, Technician: 11000,
    Trainer: 11000, Stylist: 8500, Assistant: 6500,
    Tutor: 11000, Receptionist: 8000, Sales: 8000
  },
  junagadh: {
    Manager: 15000, Chef: 12000, Waiter: 7000,
    Baker: 10000, Helper: 6000, Pharmacist: 12000,
    Agent: 11000, Clerk: 6000, Technician: 10000,
    Trainer: 10000, Stylist: 8000, Assistant: 6000,
    Tutor: 10000, Receptionist: 7000, Sales: 7000
  },
  mehsana: {
    Manager: 16000, Chef: 13000, Waiter: 7500,
    Baker: 11000, Helper: 6500, Pharmacist: 13000,
    Agent: 12000, Clerk: 7000, Technician: 11000,
    Trainer: 11000, Stylist: 8500, Assistant: 6500,
    Tutor: 11000, Receptionist: 8000, Sales: 8000
  },
  navsari: {
    Manager: 15000, Chef: 12000, Waiter: 7000,
    Baker: 10000, Helper: 6000, Pharmacist: 12000,
    Agent: 11000, Clerk: 6000, Technician: 10000,
    Trainer: 10000, Stylist: 8000, Assistant: 6000,
    Tutor: 10000, Receptionist: 7000, Sales: 7000
  },
  bharuch: {
    Manager: 15000, Chef: 12000, Waiter: 7000,
    Baker: 10000, Helper: 6000, Pharmacist: 12000,
    Agent: 11000, Clerk: 6000, Technician: 10000,
    Trainer: 10000, Stylist: 8000, Assistant: 6000,
    Tutor: 10000, Receptionist: 7000, Sales: 7000
  },
  jamnagar: {
    Manager: 15000, Chef: 12000, Waiter: 7000,
    Baker: 10000, Helper: 6000, Pharmacist: 12000,
    Agent: 11000, Clerk: 6000, Technician: 10000,
    Trainer: 10000, Stylist: 8000, Assistant: 6000,
    Tutor: 10000, Receptionist: 7000, Sales: 7000
  },
  valsad: {
    Manager: 15000, Chef: 12000, Waiter: 7000,
    Baker: 10000, Helper: 6000, Pharmacist: 12000,
    Agent: 11000, Clerk: 6000, Technician: 10000,
    Trainer: 10000, Stylist: 8000, Assistant: 6000,
    Tutor: 10000, Receptionist: 7000, Sales: 7000
  }
};

const data = JSON.parse(localStorage.getItem("resultData"));

if (!data) {
  document.getElementById("summarySection").innerHTML = "<p>Something went wrong. Please return to the homepage and try again.</p>";
} else {
  function renderReport(breakdown, monthly, breakeven, profitMargin, staffRoles, rentPerMonth, salariesPerMonth) {
    // 1. Summary
    document.getElementById("summarySection").innerHTML = `
      <h2>📍 ${data.city.charAt(0).toUpperCase() + data.city.slice(1)} - ${data.businessName}</h2>
      <p><strong>Total Investment:</strong> ₹${data.budget.toLocaleString()}</p>
      <p><strong>Estimated Monthly Cost:</strong> ₹${monthly.toLocaleString()}</p>
      <p><strong>Profit Margin Used:</strong> ${(profitMargin * 100).toFixed(0)}%</p>
      <p><strong>Estimated Time to Breakeven:</strong> ${breakeven} months</p>
    `;

    // 2. Breakdown
    const grid = document.getElementById("breakdownGrid");
    grid.innerHTML = "";
    const icons = {
      rent: "🏢",
      salaries: "💼",
      equipment: "🛠",
      marketing: "📢",
      legal: "📄",
      misc: "⚙️"
    };
    const labels = [];
    const values = [];
    for (let key in breakdown) {
      if (!icons[key]) continue;
      labels.push(key.charAt(0).toUpperCase() + key.slice(1));
      values.push(breakdown[key]);
      if (key === "rent" || key === "salaries") {
        grid.innerHTML += `
          <div>
            <h4>${icons[key]} ${key.charAt(0).toUpperCase() + key.slice(1)}</h4>
            <p>
              ₹${breakdown[key].toLocaleString()} / year<br>
              🗓️ ₹${Math.round(breakdown[key] / 12).toLocaleString()} / month
            </p>
          </div>
        `;
      } else {
        grid.innerHTML += `
          <div>
            <h4>${icons[key]} ${key.charAt(0).toUpperCase() + key.slice(1)}</h4>
            <p>₹${breakdown[key].toLocaleString()} (one-time)</p>
          </div>
        `;
      }
      // Show roles for salaries
      if (key === "salaries" && Array.isArray(staffRoles) && staffRoles.length) {
        const salaryRef = salaryRates[data.city] || salaryRates["ahmedabad"];
        const roleText = staffRoles
          .map(role => `${role}: ₹${(salaryRef[role] || 10000).toLocaleString()}/month`)
          .join("<br>");
        grid.innerHTML += `<div style="margin-top: -10px; font-size: 0.95rem; color: #ccc;">${roleText}</div>`;
      }
    }

    // 3. Chart
    if (window.myChart) window.myChart.destroy();
    const ctx = document.getElementById("costChart").getContext("2d");
    window.myChart = new Chart(ctx, {
      type: "pie",
      data: {
        labels: labels,
        datasets: [{
          label: "Cost Distribution",
          data: values,
          backgroundColor: [
            "#f1c40f", "#f39c12", "#e67e22",
            "#d35400", "#e74c3c", "#c0392b"
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: {
              color: "#fff"
            }
          }
        }
      }
    });

    // 4. AI Assistant
    const aiBox = document.getElementById("aiAssistant");
    let suggestion = "";
    if (data.budget <= breakdown.rent + breakdown.salaries) {
      suggestion = "⚠️ Your budget barely covers rent and staff. Consider increasing your budget or simplifying setup like using shared spaces or home-office.";
    } else if (breakeven > 36) {
      suggestion = "⚠️ Break-even period is over 3 years. Consider raising prices or lowering costs for better ROI.";
    } else if (profitMargin >= 0.4 && breakeven <= 12) {
      suggestion = "✅ Strong margins with quick return. Great opportunity to pursue!";
    } else {
      suggestion = "🧠 Model looks okay, but keep monitoring cost-to-revenue carefully.";
    }
    aiBox.innerHTML = `
      <h2>🤖 AI Assistant Insight</h2>
      <p>${suggestion}</p>
    `;

    // 5. Revenue Forecast
    const forecast = document.getElementById("revenueForecast");
    const neededMonthly = Math.round(monthly / profitMargin);
    const recommended = Math.round(neededMonthly * 1.2);
    forecast.innerHTML = `
      <h2>📈 Monthly Revenue Forecast</h2>
      <p>🧮 To break even in ${breakeven} months, you must earn at least <strong>₹${neededMonthly.toLocaleString()}/month</strong>.</p>
      <p>💡 Recommended goal with buffer: <strong>₹${recommended.toLocaleString()}/month</strong></p>
    `;

    // 6. Update editable fields
    document.getElementById('editRent').value = Math.round(breakdown.rent / 12);
    document.getElementById('editSalary').value = Math.round(breakdown.salaries / 12);
  }

  // --- Initial Render ---
  renderReport(
    data.breakdown,
    data.monthly,
    data.breakeven,
    data.profitMargin,
    data.staffRoles,
    data.rentPerMonth,
    data.salariesPerMonth
  );

  // --- Editable cost logic ---
  window.applyEdits = function() {
    const newRent = parseInt(document.getElementById('editRent').value) || data.rentPerMonth;
    const newSal = parseInt(document.getElementById('editSalary').value) || data.salariesPerMonth;
    const newRentYear = newRent * 12;
    const newSalYear = newSal * 12;
    const budget = data.budget;
    const fixedCosts = newRentYear + newSalYear;
    const remaining = budget - fixedCosts;

    // Use same equipment percent as before
    const equipPercent = data.breakdown.equipment / (budget - (data.breakdown.rent + data.breakdown.salaries));
    const equipment = Math.round(remaining * equipPercent);
    const afterEquip = remaining - equipment;

    const newBreakdown = {
      rent: newRentYear,
      salaries: newSalYear,
      equipment: equipment,
      marketing: Math.round(afterEquip * 0.4),
      legal: Math.round(afterEquip * 0.2),
      misc: Math.round(afterEquip * 0.4)
    };

    const monthly = Math.round((newRentYear + newSalYear) / 12);
    const profitMargin = data.profitMargin;
    const breakeven = Math.ceil(budget / (monthly * profitMargin));

    renderReport(
      newBreakdown,
      monthly,
      breakeven,
      profitMargin,
      data.staffRoles,
      newRent,
      newSal
      
    );
  };
