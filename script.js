const rentByCity = {
  // Tier 1
  ahmedabad: 50000,
  // Tier 2
  surat: 42000,
  vadodara: 38000,
  rajkot: 35000,
  gandhinagar: 32000,
  // Tier 3
  bhavnagar: 28000,
  jamnagar: 26000,
  junagadh: 24000,
  // Tier 4
  anand: 22000,
  nadiad: 21000,
  mehsana: 20000,
  bharuch: 19000,
  navsari: 18000,
  valsad: 17000,
  // Tier 5
  kapadwanj: 15000,
};

// 💼 Tiered salary rates by city (per month)
const salaryRates = {
  // Tier 1
  ahmedabad: { Manager: 30000, Chef: 25000, Waiter: 12000, Baker: 22000, Helper: 10000, Pharmacist: 28000, Agent: 25000, Clerk: 15000, Trainer: 25000, Stylist: 18000, Assistant: 11000, Tutor: 22000, Receptionist: 14000 },
  // Tier 2
  surat: { Manager: 28000, Chef: 22000, Waiter: 11000, Baker: 20000, Helper: 9500, Pharmacist: 25000, Agent: 22000, Clerk: 14000, Trainer: 22000, Stylist: 16000, Assistant: 10000, Tutor: 20000, Receptionist: 13000 },
  vadodara: { Manager: 26000, Chef: 21000, Waiter: 10000, Baker: 19000, Helper: 9000, Pharmacist: 24000, Agent: 21000, Clerk: 13000, Trainer: 21000, Stylist: 15000, Assistant: 9500, Tutor: 19000, Receptionist: 12000 },
  rajkot: { Manager: 25000, Chef: 20000, Waiter: 9500, Baker: 18000, Helper: 8500, Pharmacist: 22000, Agent: 20000, Clerk: 12000, Trainer: 20000, Stylist: 14000, Assistant: 9000, Tutor: 18000, Receptionist: 11000 },
  gandhinagar: { Manager: 24000, Chef: 19000, Waiter: 9000, Baker: 17000, Helper: 8000, Pharmacist: 21000, Agent: 19000, Clerk: 11000, Trainer: 19000, Stylist: 13000, Assistant: 8500, Tutor: 17000, Receptionist: 10000 },
  // Tier 3
  bhavnagar: { Manager: 22000, Chef: 18000, Waiter: 8500, Baker: 16000, Helper: 7500, Pharmacist: 20000, Agent: 18000, Clerk: 10000, Trainer: 18000, Stylist: 12000, Assistant: 8000, Tutor: 16000, Receptionist: 9500 },
  jamnagar: { Manager: 21000, Chef: 17000, Waiter: 8000, Baker: 15000, Helper: 7000, Pharmacist: 19000, Agent: 17000, Clerk: 9500, Trainer: 17000, Stylist: 11500, Assistant: 7500, Tutor: 15000, Receptionist: 9000 },
  junagadh: { Manager: 20000, Chef: 16000, Waiter: 7500, Baker: 14000, Helper: 6500, Pharmacist: 18000, Agent: 16000, Clerk: 9000, Trainer: 16000, Stylist: 11000, Assistant: 7000, Tutor: 14000, Receptionist: 8500 },
   // Tier 4
  anand: { Manager: 19000, Chef: 15000, Waiter: 7000, Baker: 13000, Helper: 6000, Pharmacist: 17000, Agent: 15000, Clerk: 8500, Trainer: 15000, Stylist: 10000, Assistant: 6500, Tutor: 13000, Receptionist: 8000 },
  nadiad: { Manager: 18000, Chef: 14500, Waiter: 6800, Baker: 12500, Helper: 5800, Pharmacist: 16500, Agent: 14500, Clerk: 8200, Trainer: 14500, Stylist: 9800, Assistant: 6200, Tutor: 12500, Receptionist: 7800 },
  mehsana: { Manager: 18500, Chef: 14800, Waiter: 6900, Baker: 12800, Helper: 5900, Pharmacist: 16800, Agent: 14800, Clerk: 8300, Trainer: 14800, Stylist: 9900, Assistant: 6300, Tutor: 12800, Receptionist: 7900 },
  bharuch: { Manager: 17500, Chef: 14000, Waiter: 6500, Baker: 12000, Helper: 5500, Pharmacist: 16000, Agent: 14000, Clerk: 8000, Trainer: 14000, Stylist: 9500, Assistant: 6000, Tutor: 12000, Receptionist: 7500 },
  navsari: { Manager: 17000, Chef: 13500, Waiter: 6200, Baker: 11500, Helper: 5200, Pharmacist: 15500, Agent: 13500, Clerk: 7800, Trainer: 13500, Stylist: 9200, Assistant: 5800, Tutor: 11500, Receptionist: 7200 },
  valsad: { Manager: 16500, Chef: 13000, Waiter: 6000, Baker: 11000, Helper: 5000, Pharmacist: 15000, Agent: 13000, Clerk: 7500, Trainer: 13000, Stylist: 9000, Assistant: 5500, Tutor: 11000, Receptionist: 7000 },
  // Tier 5
  kapadwanj: { Manager: 15000, Chef: 12000, Waiter: 5500, Baker: 10000, Helper: 4500, Pharmacist: 14000, Agent: 12000, Clerk: 7000, Trainer: 12000, Stylist: 8500, Assistant: 5000, Tutor: 10000, Receptionist: 6500 },
};

// 🧠 Business configurations with data for ALL cities
const businessConfig = {
  cafe: {
    name: "Cafe",
    staff: ["Manager", "Chef", "Waiter"],
    equipmentPercent: 0.40,
    minInvestment: { ahmedabad: 900000, surat: 800000, vadodara: 750000, rajkot: 700000, gandhinagar: 650000, bhavnagar: 600000, jamnagar: 580000, junagadh: 550000, anand: 500000, nadiad: 480000, mehsana: 470000, bharuch: 460000, navsari: 450000, valsad: 440000, kapadwanj: 400000 },
    profitMargin: 0.28,
  },
  bakery: {
    name: "Bakery",
    staff: ["Baker", "Helper"],
    equipmentPercent: 0.45,
    minInvestment: { ahmedabad: 700000, surat: 600000, vadodara: 550000, rajkot: 500000, gandhinagar: 480000, bhavnagar: 450000, jamnagar: 430000, junagadh: 400000, anand: 380000, nadiad: 360000, mehsana: 350000, bharuch: 340000, navsari: 330000, valsad: 320000, kapadwanj: 300000 },
    profitMargin: 0.25,
  },
  realestate: {
    name: "Real Estate Office",
    staff: ["Agent", "Clerk"],
    equipmentPercent: 0.15,
    minInvestment: { ahmedabad: 500000, surat: 450000, vadodara: 420000, rajkot: 400000, gandhinagar: 380000, bhavnagar: 350000, jamnagar: 330000, junagadh: 300000, anand: 280000, nadiad: 270000, mehsana: 260000, bharuch: 250000, navsari: 240000, valsad: 230000, kapadwanj: 200000 },
    profitMargin: 0.40,
  },
  medical: {
    name: "Medical Store",
    staff: ["Pharmacist", "Helper"],
    equipmentPercent: 0.50, // Inventory is key
    minInvestment: { ahmedabad: 800000, surat: 700000, vadodara: 650000, rajkot: 600000, gandhinagar: 580000, bhavnagar: 550000, jamnagar: 530000, junagadh: 500000, anand: 480000, nadiad: 460000, mehsana: 450000, bharuch: 440000, navsari: 430000, valsad: 420000, kapadwanj: 400000 },
    profitMargin: 0.18,
  },
  gym: {
    name: "Gym",
    staff: ["Trainer", "Receptionist"],
    equipmentPercent: 0.60,
    minInvestment: { ahmedabad: 1200000, surat: 1000000, vadodara: 900000, rajkot: 850000, gandhinagar: 800000, bhavnagar: 750000, jamnagar: 700000, junagadh: 650000, anand: 600000, nadiad: 580000, mehsana: 550000, bharuch: 530000, navsari: 520000, valsad: 510000, kapadwanj: 500000 },
    profitMargin: 0.35,
  },
  saloon: {
    name: "Saloon",
    staff: ["Stylist", "Assistant"],
    equipmentPercent: 0.35,
    minInvestment: { ahmedabad: 500000, surat: 450000, vadodara: 400000, rajkot: 380000, gandhinagar: 350000, bhavnagar: 320000, jamnagar: 300000, junagadh: 280000, anand: 260000, nadiad: 250000, mehsana: 240000, bharuch: 230000, navsari: 220000, valsad: 210000, kapadwanj: 200000 },
    profitMargin: 0.30,
  },
  coaching: {
    name: "Coaching Class",
    staff: ["Tutor", "Clerk"],
    equipmentPercent: 0.10,
    minInvestment: { ahmedabad: 400000, surat: 350000, vadodara: 320000, rajkot: 300000, gandhinagar: 280000, bhavnagar: 250000, jamnagar: 230000, junagadh: 220000, anand: 200000, nadiad: 180000, mehsana: 170000, bharuch: 160000, navsari: 150000, valsad: 140000, kapadwanj: 120000 },
    profitMargin: 0.45,
  }
};

// 🚀 Main Logic
document.getElementById("plannerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const budget = parseFloat(document.getElementById("budget").value);
  const city = document.getElementById("city").value;
  const business = document.getElementById("business-type").value;

  // --- Robust Validation ---
  if (!budget || budget <= 0) {
    return alert("⚠️ Please enter a valid and positive investment amount.");
  }

  const config = businessConfig[business];
  const minInvestment = config.minInvestment[city];

  if (budget < minInvestment) {
    const cityName = city.charAt(0).toUpperCase() + city.slice(1);
    return alert(`❌ Minimum investment for a ${config.name} in ${cityName} is ₹${minInvestment.toLocaleString()}. Your budget is too low.`);
  }

  // --- Calculations ---

  // 1. Rent (Annual)
  const rentMonthly = rentByCity[city];
  const rentTotal = rentMonthly * 12;

  // 2. Salaries (Annual)
  const roles = config.staff;
  const citySalaries = salaryRates[city];
  let monthlySalaries = 0;
  for (let role of roles) {
    monthlySalaries += citySalaries[role];
  }
  const salaryTotal = monthlySalaries * 12;

  // 3. One-Time Costs
  const fixedCosts = rentTotal + salaryTotal;
  const remainingForOneTime = budget - fixedCosts;

  if (remainingForOneTime <= 0) {
    return alert("❌ Your budget is too low to cover even the first year of rent and salaries. Please increase your budget.");
  }

  const equipPercent = config.equipmentPercent;
  const equipment = Math.round(remainingForOneTime * equipPercent);
  
  const remainingAfterEquipment = remainingForOneTime - equipment;
  
  const breakdown = {
    rent: rentTotal,
    salaries: salaryTotal,
    equipment: equipment,
    // Distribute the rest among marketing, legal, and misc
    marketing: Math.round(remainingAfterEquipment * 0.5),
    legal: Math.round(remainingAfterEquipment * 0.2),
    misc: Math.round(remainingAfterEquipment * 0.3)
  };

  // 4. Breakeven Calculation
  const monthlyOperatingCost = Math.round(fixedCosts / 12);
  const profitMargin = config.profitMargin;
  
  // Breakeven is the point where total revenue covers the total investment
  const monthlyRevenueToBreakeven = monthlyOperatingCost / profitMargin;
  const breakevenInMonths = Math.ceil(budget / monthlyRevenueToBreakeven);


  // --- Store and Redirect ---
  const result = {
    city,
    businessType: business,
    businessName: config.name,
    budget,
    breakdown,
    monthly: monthlyOperatingCost,
    breakeven: breakevenInMonths,
    profitMargin: profitMargin,
    staffRoles: roles,
    salariesPerMonth: monthlySalaries,
    rentPerMonth: rentMonthly,
  };

    localStorage.setItem("resultData", JSON.stringify(result));
    window.location.href = "output.html";
  });
