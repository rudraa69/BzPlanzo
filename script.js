// script.js for index.html

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const budget = parseFloat(document.getElementById("budget").value);
  const city = document.getElementById("city").value;
  const businessType = document.getElementById("business-type").value;

  if (isNaN(budget) || budget <= 0) {
    alert("Please enter a valid investment amount.");
    return;
  }

  // Define cost ratio based on business type
  const businessBreakdowns = {
    bakery:    { rent: 0.15, salaries: 0.35, equipment: 0.2, marketing: 0.1, legal: 0.05, misc: 0.15 },
    cafe:      { rent: 0.18, salaries: 0.3, equipment: 0.22, marketing: 0.1, legal: 0.05, misc: 0.15 },
    gym:       { rent: 0.25, salaries: 0.3, equipment: 0.25, marketing: 0.1, legal: 0.05, misc: 0.05 }
    // Add more businesses here if needed
  };

  const breakdown = businessBreakdowns[businessType];
  const fixedCosts = {};
  let totalFixedCost = 0;

  for (const key in breakdown) {
    fixedCosts[key] = Math.round(budget * breakdown[key]);
    totalFixedCost += fixedCosts[key];
  }

  const monthly = Math.round(totalFixedCost / 12);
  const breakeven = Math.round(totalFixedCost / 0.4);

  const potential = getBusinessPotential(city, businessType); // basic AI insight

  const resultData = {
    city,
    businessType,
    budget,
    breakdown: fixedCosts,
    totalFixedCost,
    monthly,
    breakeven,
    potential
  };

  localStorage.setItem("resultData", JSON.stringify(resultData));
  window.location.href = "output.html";
});

function getBusinessPotential(city, businessType) {
  // Simulate AI insight with basic logic
  const redFlags = {
    godhra: ["cafe", "gym"],
    kapadwanj: ["gym"],
    nadiad: ["bakery"]
  };

  if (redFlags[city] && redFlags[city].includes(businessType)) {
    return "⚠️ This business might face challenges in this city due to low demand.";
  }

  return "✅ This business has promising potential in the selected city.";
}
