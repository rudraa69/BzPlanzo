// 🏢 Rent per city per month
const rentByCity = {
  ahmedabad: 50000,
  surat: 40000,
  vadodara: 35000,
  rajkot: 30000,
  anand: 25000,
  nadiad: 22000,
  kapadwanj: 18000,
  bhavnagar: 26000,
  junagadh: 20000,
  mehsana: 23000,
  navsari: 21000,
  bharuch: 23000,
  jamnagar: 25000,
  valsad: 22000
};

// 💼 Salary rates by city
const salaryRates = {
  ahmedabad: {
    Manager: 30000, Chef: 25000, Waiter: 12000,
    Baker: 20000, Helper: 10000, Pharmacist: 25000,
    Agent: 20000, Clerk: 12000, Technician: 20000,
    Trainer: 22000, Stylist: 15000, Assistant: 9000,
    Tutor: 20000, Sales: 15000, Receptionist: 15000
  },
  nadiad: {
    Manager: 18000, Chef: 15000, Waiter: 9000,
    Baker: 12000, Helper: 7000, Pharmacist: 15000,
    Agent: 14000, Clerk: 8000, Technician: 12000,
    Trainer: 10000, Stylist: 10000, Assistant: 7000,
    Tutor: 12000, Sales: 10000, Receptionist: 8000
  }
};

// Spread Nadiad values to all smaller cities
[
  "surat", "vadodara", "rajkot", "anand", "kapadwanj",
  "bhavnagar", "junagadh", "mehsana", "navsari",
  "bharuch", "jamnagar", "valsad"
].forEach(city => {
  salaryRates[city] = salaryRates["nadiad"];
});

// 🧠 Business config (per city minInvestment, profitMargin, roles, equipment%)
const businessConfig = {
  bakery: {
    name: "Bakery",
    staff: ["Baker", "Helper"],
    equipmentPercent: {
      ahmedabad: 0.45, rajkot: 0.4, nadiad: 0.35, default: 0.4
    },
    minInvestment: {
      ahmedabad: 650000, vadodara: 450000, rajkot: 400000, nadiad: 300000
    },
    profitMargins: {
      ahmedabad: 0.22, rajkot: 0.26, nadiad: 0.28
    }
  },
  cafe: {
    name: "Cafe",
    staff: ["Manager", "Chef", "Waiter"],
    equipmentPercent: { ahmedabad: 0.4, rajkot: 0.35, nadiad: 0.3, default: 0.35 },
    minInvestment: {
      ahmedabad: 900000, surat: 700000, rajkot: 600000, nadiad: 450000
    },
    profitMargins: {
      ahmedabad: 0.25, surat: 0.3, rajkot: 0.32, nadiad: 0.34
    }
  },
  gym: {
    name: "Gym",
    staff: ["Trainer", "Receptionist"],
    equipmentPercent: { ahmedabad: 0.6, surat: 0.55, nadiad: 0.4, default: 0.45 },
    minInvestment: { ahmedabad: 1000000, surat: 800000, nadiad: 600000 },
    profitMargins: { ahmedabad: 0.35, surat: 0.4, nadiad: 0.45 }
  },
  saloon: {
    name: "Saloon",
    staff: ["Stylist", "Assistant"],
    equipmentPercent: { ahmedabad: 0.35, nadiad: 0.3 },
    minInvestment: { ahmedabad: 400000, nadiad: 250000 },
    profitMargins: { ahmedabad: 0.28, nadiad: 0.3 }
  },
  coaching: {
    name: "Coaching Class",
    staff: ["Tutor", "Clerk"],
    equipmentPercent: { default: 0.1 },
    minInvestment: { ahmedabad: 300000, nadiad: 150000 },
    profitMargins: { ahmedabad: 0.45, nadiad: 0.4 }
  },
  medical: {
    name: "Medical Store",
    staff: ["Pharmacist", "Helper"],
    equipmentPercent: { ahmedabad: 0.5, nadiad: 0.45 },
    minInvestment: { ahmedabad: 600000, nadiad: 400000 },
    profitMargins: { ahmedabad: 0.2, nadiad: 0.16 }
  },
  realestate: {
    name: "Real Estate Office",
    staff: ["Agent", "Clerk"],
    equipmentPercent: { default: 0.15 },
    minInvestment: { ahmedabad: 450000, nadiad: 250000 },
    profitMargins: { ahmedabad: 0.4, nadiad: 0.2 }
  },
  clothing: {
    name: "Clothing Store",
    staff: ["Manager", "Helper"],
    equipmentPercent: { default: 0.3 },
    minInvestment: { ahmedabad: 700000, nadiad: 400000 },
    profitMargins: { ahmedabad: 0.3, nadiad: 0.35 }
  },
  mobile: {
    name: "Mobile Store",
    staff: ["Sales"],
    equipmentPercent: { default: 0.25 },
    minInvestment: { ahmedabad: 400000, nadiad: 280000 },
    profitMargins: { ahmedabad: 0.28, nadiad: 0.32 }
  },
  electronics: {
    name: "Electronics Repair",
    staff: ["Technician"],
    equipmentPercent: { default: 0.5 },
    minInvestment: { ahmedabad: 300000, nadiad: 150000 },
    profitMargins: { ahmedabad: 0.38, nadiad: 0.4 }
  }
};

// 🚀 Main Logic
document.getElementById("plannerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const budget = parseFloat(document.getElementById("budget").value);
  const city = document.getElementById("city").value;
  const business = document.getElementById("business-type").value;

  if (!budget || budget <= 0) {
    return alert("⚠️ Please enter a valid investment amount.");
  }

  const config = businessConfig[business];
  if (!config) return alert("❌ Invalid business type.");

  const minInvestment = config.minInvestment[city];
  if (!minInvestment || budget < minInvestment) {
    return alert(`❌ Minimum investment required for ${config.name} in ${city}: ₹${minInvestment.toLocaleString()}`);
  }

  // Rent
  const rentMonthly = rentByCity[city] || rentByCity["anand"];
  const rentTotal = rentMonthly * 12;

  // Salaries
  const roles = config.staff;
  const salaryList = salaryRates[city] || salaryRates["nadiad"];
  let monthlySalaries = 0;
  for (let role of roles) {
    monthlySalaries += salaryList[role] || 10000;
  }
  const salaryTotal = monthlySalaries * 12;

  const fixedCosts = rentTotal + salaryTotal;
  const remaining = budget - fixedCosts;

  if (remaining <= 0) {
    return alert("❌ Remaining budget is too low after covering rent and salaries.");
  }

  // 🔧 Equipment %
  const equipCfg = config.equipmentPercent;
  const equipPercent = typeof equipCfg === "object"
    ? (equipCfg[city] || equipCfg.default || 0.3)
    : (equipCfg || 0.3);

  const equipment = Math.round(remaining * equipPercent);
  const afterEquip = remaining - equipment;

  const breakdown = {
    rent: rentTotal,
    salaries: salaryTotal,
    equipment: equipment,
    marketing: Math.round(afterEquip * 0.4),
    legal: Math.round(afterEquip * 0.2),
    misc: Math.round(afterEquip * 0.4)
  };

  const monthly = Math.round(fixedCosts / 12);
  const margin = config.profitMargins[city] || 0.3;
  const breakeven = Math.ceil(budget / (monthly * margin));

  const potential =
    city === "kapadwanj" && business === "realestate"
      ? "⚠️ Small town, slower real estate turnover."
      : "✅ Seems like a viable setup.";

  const result = {
    city,
    businessType: business,
    businessName: config.name,
    budget,
    breakdown,
    totalFixedCost: budget,
    monthly,
    breakeven,
    profitMargin: margin,
    staffRoles: roles,
    salariesPerMonth: monthlySalaries,
    rentPerMonth: rentMonthly,
    potential
  };

  localStorage.setItem("resultData", JSON.stringify(result));
  window.location.href = "output.html";
});
