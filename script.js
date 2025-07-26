const cityData = {
  ahmedabad: { rent: 0.15, salaries: 0.35 },
  surat: { rent: 0.14, salaries: 0.34 },
  vadodara: { rent: 0.13, salaries: 0.33 },
  rajkot: { rent: 0.12, salaries: 0.32 },
  anand: { rent: 0.11, salaries: 0.31 },
  nadiad: { rent: 0.10, salaries: 0.30 },
  kapadwanj: { rent: 0.09, salaries: 0.29 },
  bhavnagar: { rent: 0.11, salaries: 0.30 },
  junagadh: { rent: 0.10, salaries: 0.28 },
  mehsana: { rent: 0.10, salaries: 0.28 },
  navsari: { rent: 0.09, salaries: 0.27 },
  bharuch: { rent: 0.09, salaries: 0.26 },
  jamnagar: { rent: 0.10, salaries: 0.27 },
  valsad: { rent: 0.09, salaries: 0.25 }
};

const businessTypes = {
  bakery: { rent: 0.15, salaries: 0.35, equipment: 0.2, marketing: 0.1, legal: 0.05, misc: 0.15 },
  cafe: { rent: 0.18, salaries: 0.30, equipment: 0.22, marketing: 0.1, legal: 0.05, misc: 0.15 },
  gym: { rent: 0.25, salaries: 0.30, equipment: 0.25, marketing: 0.1, legal: 0.05, misc: 0.05 },
  saloon: { rent: 0.20, salaries: 0.40, equipment: 0.15, marketing: 0.1, legal: 0.05, misc: 0.1 },
  realestate: { rent: 0.30, salaries: 0.40, equipment: 0.05, marketing: 0.15, legal: 0.05, misc: 0.05 },
  cloudkitchen: { rent: 0.18, salaries: 0.33, equipment: 0.22, marketing: 0.12, legal: 0.05, misc: 0.10 },
  coaching: { rent: 0.12, salaries: 0.45, equipment: 0.10, marketing: 0.15, legal: 0.05, misc: 0.13 },
  medical: { rent: 0.20, salaries: 0.35, equipment: 0.18, marketing: 0.1, legal: 0.05, misc: 0.12 },
  clothing: { rent: 0.22, salaries: 0.30, equipment: 0.18, marketing: 0.15, legal: 0.05, misc: 0.1 },
  stationery: { rent: 0.15, salaries: 0.25, equipment: 0.10, marketing: 0.2, legal: 0.05, misc: 0.25 },
  mobile: { rent: 0.18, salaries: 0.30, equipment: 0.20, marketing: 0.15, legal: 0.05, misc: 0.12 },
  electronics: { rent: 0.20, salaries: 0.30, equipment: 0.22, marketing: 0.1, legal: 0.05, misc: 0.13 }
};

document.getElementById("plannerForm").addEventListener("submit", e => {
  e.preventDefault();

  const budget = parseFloat(document.getElementById("budget").value);
  const city = document.getElementById("city").value;
  const business = document.getElementById("business-type").value;

  if (!budget || budget <= 0) return alert("Enter a valid investment amount.");

  const cityRatio = cityData[city];
  const bizRatio = businessTypes[business];

  let breakdown = {};
  let total = 0;
  for (let key in bizRatio) {
    if (key === "rent" || key === "salaries") {
      breakdown[key] = budget * (bizRatio[key] * cityRatio[key] / 0.15);
    } else {
      breakdown[key] = budget * bizRatio[key];
    }
    total += breakdown[key];
  }

  // Normalize values
  let scale = budget / total;
  for (let key in breakdown) {
    breakdown[key] = Math.round(breakdown[key] * scale);
  }

  const monthly = Math.round(Object.values(breakdown).reduce((a, b) => a + b) / 12);
  const breakeven = Math.round((monthly * 12) / 0.4);

  const potential = (city === "kapadwanj" && business === "realestate")
    ? "⚠️ Low potential due to limited demand in smaller town."
    : "✅ Good opportunity based on city-business compatibility.";

  const result = {
    city, businessType: business, budget,
    breakdown,
    totalFixedCost: budget,
    monthly,
    breakeven,
    potential
  };

  localStorage.setItem("resultData", JSON.stringify(result));
  window.location.href = "output.html";
});
