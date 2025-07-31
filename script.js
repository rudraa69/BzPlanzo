// --- DATABASE (VERSION 2.0 - COMPLETE DATA) ---

// Corrected city list for all 3 states
const citiesByState = {
  gujarat: [
    { value: "ahmedabad", name: "Ahmedabad" },
    { value: "surat", name: "Surat" },
    { value: "vadodara", name: "Vadodara" },
    { value: "rajkot", name: "Rajkot" },
    { value: "gandhinagar", name: "Gandhinagar" },
    { value: "bhavnagar", name: "Bhavnagar" },
    { value: "jamnagar", name: "Jamnagar" },
    { value: "junagadh", name: "Junagadh" },
    { value: "bhuj", name: "Bhuj (Kutch)" },
    { value: "anand", name: "Anand" },
    { value: "nadiad", name: "Nadiad" },
    { value: "mehsana", name: "Mehsana" },
    { value: "bharuch", name: "Bharuch" },
    { value: "navsari", name: "Navsari" },
    { value: "valsad", name: "Valsad" },
  ],
  maharashtra: [
    { value: "mumbai", name: "Mumbai" },
    { value: "pune", name: "Pune" },
    { value: "nagpur", name: "Nagpur" },
    { value: "thane", name: "Thane" },
    { value: "navi_mumbai", name: "Navi Mumbai" },
    { value: "nashik", name: "Nashik" },
    { value: "kolhapur", name: "Kolhapur" },
    { value: "aurangabad", name: "Aurangabad (Ch. Sambhajinagar)" },
    { value: "solapur", name: "Solapur" },
    { value: "amravati", name: "Amravati" },
    { value: "sangli", name: "Sangli" },
    { value: "jalgaon", name: "Jalgaon" },
    { value: "satara", name: "Satara" },
    { value: "akola", name: "Akola" },
    { value: "latur", name: "Latur" },
  ],
  karnataka: [
    { value: "bengaluru", name: "Bengaluru" },
    { value: "mysuru", name: "Mysuru" },
    { value: "mangaluru", name: "Mangaluru" },
    { value: "hubli_dharwad", name: "Hubli-Dharwad" },
    { value: "belagavi", name: "Belagavi" },
    { value: "davanagere", name: "Davanagere" },
    { value: "ballari", name: "Ballari" },
    { value: "vijayapura", name: "Vijayapura" },
    { value: "kalaburagi", name: "Kalaburagi" },
    { value: "shimoga", name: "Shivamogga (Shimoga)" },
    { value: "udupi", name: "Udupi" },
    { value: "tumakuru", name: "Tumakuru" },
    { value: "hassan", name: "Hassan" },
    { value: "mandya", name: "Mandya" },
    { value: "chitradurga", name: "Chitradurga" },
  ],
};

// Complete rent data for all 45 cities
const rentByCity = {
  // Gujarat
  ahmedabad: 50000, surat: 42000, vadodara: 38000, rajkot: 35000, gandhinagar: 32000, bhavnagar: 28000, jamnagar: 26000, junagadh: 24000, bhuj: 23000, anand: 22000, nadiad: 21000, mehsana: 20000, bharuch: 19000, navsari: 18000, valsad: 17000,
  // Maharashtra
  mumbai: 120000, pune: 80000, nagpur: 45000, thane: 75000, navi_mumbai: 90000, nashik: 40000, kolhapur: 38000, aurangabad: 35000, solapur: 30000, amravati: 28000, sangli: 27000, jalgaon: 26000, satara: 25000, akola: 24000, latur: 22000,
  // Karnataka
  bengaluru: 95000, mysuru: 45000, mangaluru: 50000, hubli_dharwad: 35000, belagavi: 32000, davanagere: 28000, ballari: 26000, vijayapura: 24000, kalaburagi: 25000, shimoga: 27000, udupi: 40000, tumakuru: 22000, hassan: 23000, mandya: 21000, chitradurga: 20000,
};

// 100% COMPLETE salary data for all 45 cities and all roles
const salaryRates = {
  // Gujarat (15 cities)
  ahmedabad:   { Manager: 30000, Chef: 25000, Waiter: 12000, Baker: 22000, Helper: 10000, Pharmacist: 28000, Agent: 25000, Clerk: 15000, Trainer: 25000, Stylist: 18000, Assistant: 11000, Tutor: 22000, Receptionist: 14000, 'Digital Marketer': 28000, 'Fashion Designer': 26000, 'Delivery Coordinator': 14000 },
  surat:       { Manager: 28000, Chef: 22000, Waiter: 11000, Baker: 20000, Helper: 9500,  Pharmacist: 25000, Agent: 22000, Clerk: 14000, Trainer: 22000, Stylist: 16000, Assistant: 10000, Tutor: 20000, Receptionist: 13000, 'Digital Marketer': 25000, 'Fashion Designer': 23000, 'Delivery Coordinator': 13000 },
  vadodara:    { Manager: 26000, Chef: 21000, Waiter: 10000, Baker: 19000, Helper: 9000,  Pharmacist: 24000, Agent: 21000, Clerk: 13000, Trainer: 21000, Stylist: 15000, Assistant: 9500,  Tutor: 19000, Receptionist: 12000, 'Digital Marketer': 23000, 'Fashion Designer': 21000, 'Delivery Coordinator': 12500 },
  rajkot:      { Manager: 25000, Chef: 20000, Waiter: 9500,  Baker: 18000, Helper: 8500,  Pharmacist: 22000, Agent: 20000, Clerk: 12000, Trainer: 20000, Stylist: 14000, Assistant: 9000,  Tutor: 18000, Receptionist: 11000, 'Digital Marketer': 21000, 'Fashion Designer': 20000, 'Delivery Coordinator': 12000 },
  gandhinagar: { Manager: 24000, Chef: 19000, Waiter: 9000,  Baker: 17000, Helper: 8000,  Pharmacist: 21000, Agent: 19000, Clerk: 11000, Trainer: 19000, Stylist: 13000, Assistant: 8500,  Tutor: 17000, Receptionist: 10000, 'Digital Marketer': 20000, 'Fashion Designer': 19000, 'Delivery Coordinator': 11500 },
  bhavnagar:   { Manager: 22000, Chef: 18000, Waiter: 8500,  Baker: 16000, Helper: 7500,  Pharmacist: 20000, Agent: 18000, Clerk: 10000, Trainer: 18000, Stylist: 12000, Assistant: 8000,  Tutor: 16000, Receptionist: 9500,  'Digital Marketer': 18000, 'Fashion Designer': 17000, 'Delivery Coordinator': 11000 },
  jamnagar:    { Manager: 21000, Chef: 17000, Waiter: 8000,  Baker: 15000, Helper: 7000,  Pharmacist: 19000, Agent: 17000, Clerk: 9500,  Trainer: 17000, Stylist: 11500, Assistant: 7500,  Tutor: 15000, Receptionist: 9000,  'Digital Marketer': 17000, 'Fashion Designer': 16000, 'Delivery Coordinator': 10500 },
  junagadh:    { Manager: 20000, Chef: 16000, Waiter: 7500,  Baker: 14000, Helper: 6500,  Pharmacist: 18000, Agent: 16000, Clerk: 9000,  Trainer: 16000, Stylist: 11000, Assistant: 7000,  Tutor: 14000, Receptionist: 8500,  'Digital Marketer': 16000, 'Fashion Designer': 15000, 'Delivery Coordinator': 10000 },
  bhuj:        { Manager: 19500, Chef: 15500, Waiter: 7200,  Baker: 13500, Helper: 6200,  Pharmacist: 17500, Agent: 15500, Clerk: 8800,  Trainer: 15500, Stylist: 10500, Assistant: 6800,  Tutor: 13500, Receptionist: 8200,  'Digital Marketer': 15500, 'Fashion Designer': 14500, 'Delivery Coordinator': 9800  },
  anand:       { Manager: 19000, Chef: 15000, Waiter: 7000,  Baker: 13000, Helper: 6000,  Pharmacist: 17000, Agent: 15000, Clerk: 8500,  Trainer: 15000, Stylist: 10000, Assistant: 6500,  Tutor: 13000, Receptionist: 8000,  'Digital Marketer': 15000, 'Fashion Designer': 14000, 'Delivery Coordinator': 9500  },
  nadiad:      { Manager: 18000, Chef: 14500, Waiter: 6800,  Baker: 12500, Helper: 5800,  Pharmacist: 16500, Agent: 14500, Clerk: 8200,  Trainer: 14500, Stylist: 9800,  Assistant: 6200,  Tutor: 12500, Receptionist: 7800,  'Digital Marketer': 14500, 'Fashion Designer': 13500, 'Delivery Coordinator': 9200  },
  mehsana:     { Manager: 18500, Chef: 14800, Waiter: 6900,  Baker: 12800, Helper: 5900,  Pharmacist: 16800, Agent: 14800, Clerk: 8300,  Trainer: 14800, Stylist: 9900,  Assistant: 6300,  Tutor: 12800, Receptionist: 7900,  'Digital Marketer': 14800, 'Fashion Designer': 13800, 'Delivery Coordinator': 9300  },
  bharuch:     { Manager: 17500, Chef: 14000, Waiter: 6500,  Baker: 12000, Helper: 5500,  Pharmacist: 16000, Agent: 14000, Clerk: 8000,  Trainer: 14000, Stylist: 9500,  Assistant: 6000,  Tutor: 12000, Receptionist: 7500,  'Digital Marketer': 14000, 'Fashion Designer': 13000, 'Delivery Coordinator': 9000  },
  navsari:     { Manager: 17000, Chef: 13500, Waiter: 6200,  Baker: 11500, Helper: 5200,  Pharmacist: 15500, Agent: 13500, Clerk: 7800,  Trainer: 13500, Stylist: 9200,  Assistant: 5800,  Tutor: 11500, Receptionist: 7200,  'Digital Marketer': 13500, 'Fashion Designer': 12500, 'Delivery Coordinator': 8800  },
  valsad:      { Manager: 16500, Chef: 13000, Waiter: 6000,  Baker: 11000, Helper: 5000,  Pharmacist: 15000, Agent: 13000, Clerk: 7500,  Trainer: 13000, Stylist: 9000,  Assistant: 5500,  Tutor: 11000, Receptionist: 7000,  'Digital Marketer': 13000, 'Fashion Designer': 12000, 'Delivery Coordinator': 8500  },
  // Maharashtra (15 cities)
  mumbai:      { Manager: 55000, Chef: 45000, Waiter: 20000, Baker: 35000, Helper: 15000, Pharmacist: 40000, Agent: 45000, Clerk: 22000, Trainer: 40000, Stylist: 30000, Assistant: 18000, Tutor: 35000, Receptionist: 20000, 'Digital Marketer': 50000, 'Fashion Designer': 48000, 'Delivery Coordinator': 22000 },
  pune:        { Manager: 45000, Chef: 38000, Waiter: 18000, Baker: 30000, Helper: 14000, Pharmacist: 35000, Agent: 40000, Clerk: 20000, Trainer: 35000, Stylist: 25000, Assistant: 16000, Tutor: 30000, Receptionist: 18000, 'Digital Marketer': 45000, 'Fashion Designer': 42000, 'Delivery Coordinator': 20000 },
  nagpur:      { Manager: 32000, Chef: 26000, Waiter: 13000, Baker: 23000, Helper: 11000, Pharmacist: 30000, Agent: 28000, Clerk: 16000, Trainer: 28000, Stylist: 20000, Assistant: 12000, Tutor: 24000, Receptionist: 15000, 'Digital Marketer': 30000, 'Fashion Designer': 28000, 'Delivery Coordinator': 15000 },
  thane:       { Manager: 42000, Chef: 36000, Waiter: 17000, Baker: 28000, Helper: 13500, Pharmacist: 33000, Agent: 38000, Clerk: 19000, Trainer: 33000, Stylist: 24000, Assistant: 15500, Tutor: 28000, Receptionist: 17000, 'Digital Marketer': 42000, 'Fashion Designer': 40000, 'Delivery Coordinator': 19000 },
  navi_mumbai: { Manager: 48000, Chef: 40000, Waiter: 19000, Baker: 32000, Helper: 14500, Pharmacist: 37000, Agent: 42000, Clerk: 21000, Trainer: 37000, Stylist: 27000, Assistant: 17000, Tutor: 32000, Receptionist: 19000, 'Digital Marketer': 47000, 'Fashion Designer': 44000, 'Delivery Coordinator': 21000 },
  nashik:      { Manager: 30000, Chef: 24000, Waiter: 12000, Baker: 21000, Helper: 10000, Pharmacist: 28000, Agent: 26000, Clerk: 15000, Trainer: 26000, Stylist: 19000, Assistant: 11000, Tutor: 22000, Receptionist: 14000, 'Digital Marketer': 28000, 'Fashion Designer': 26000, 'Delivery Coordinator': 14000 },
  kolhapur:    { Manager: 29000, Chef: 23000, Waiter: 11500, Baker: 20000, Helper: 9500,  Pharmacist: 27000, Agent: 25000, Clerk: 14000, Trainer: 25000, Stylist: 18000, Assistant: 10500, Tutor: 21000, Receptionist: 13000, 'Digital Marketer': 27000, 'Fashion Designer': 25000, 'Delivery Coordinator': 13000 },
  aurangabad:  { Manager: 28000, Chef: 22000, Waiter: 11000, Baker: 19000, Helper: 9000,  Pharmacist: 26000, Agent: 24000, Clerk: 13000, Trainer: 24000, Stylist: 17000, Assistant: 10000, Tutor: 20000, Receptionist: 12000, 'Digital Marketer': 26000, 'Fashion Designer': 24000, 'Delivery Coordinator': 12500 },
  solapur:     { Manager: 26000, Chef: 21000, Waiter: 10000, Baker: 18000, Helper: 8500,  Pharmacist: 24000, Agent: 22000, Clerk: 12000, Trainer: 22000, Stylist: 16000, Assistant: 9500,  Tutor: 19000, Receptionist: 11000, 'Digital Marketer': 24000, 'Fashion Designer': 22000, 'Delivery Coordinator': 12000 },
  amravati:    { Manager: 25000, Chef: 20000, Waiter: 9500,  Baker: 17000, Helper: 8000,  Pharmacist: 23000, Agent: 21000, Clerk: 11500, Trainer: 21000, Stylist: 15000, Assistant: 9000,  Tutor: 18000, Receptionist: 10500, 'Digital Marketer': 23000, 'Fashion Designer': 21000, 'Delivery Coordinator': 11500 },
  sangli:      { Manager: 24000, Chef: 19000, Waiter: 9000,  Baker: 16000, Helper: 7500,  Pharmacist: 22000, Agent: 20000, Clerk: 11000, Trainer: 20000, Stylist: 14000, Assistant: 8500,  Tutor: 17000, Receptionist: 10000, 'Digital Marketer': 22000, 'Fashion Designer': 20000, 'Delivery Coordinator': 11000 },
  jalgaon:     { Manager: 23000, Chef: 18000, Waiter: 8500,  Baker: 15000, Helper: 7000,  Pharmacist: 21000, Agent: 19000, Clerk: 10500, Trainer: 19000, Stylist: 13000, Assistant: 8000,  Tutor: 16000, Receptionist: 9500,  'Digital Marketer': 21000, 'Fashion Designer': 19000, 'Delivery Coordinator': 10500 },
  satara:      { Manager: 22000, Chef: 17000, Waiter: 8000,  Baker: 14000, Helper: 6500,  Pharmacist: 20000, Agent: 18000, Clerk: 10000, Trainer: 18000, Stylist: 12000, Assistant: 7500,  Tutor: 15000, Receptionist: 9000,  'Digital Marketer': 20000, 'Fashion Designer': 18000, 'Delivery Coordinator': 10000 },
  akola:       { Manager: 21000, Chef: 16000, Waiter: 7500,  Baker: 13000, Helper: 6000,  Pharmacist: 19000, Agent: 17000, Clerk: 9500,  Trainer: 17000, Stylist: 11000, Assistant: 7000,  Tutor: 14000, Receptionist: 8500,  'Digital Marketer': 19000, 'Fashion Designer': 17000, 'Delivery Coordinator': 9500  },
  latur:       { Manager: 20000, Chef: 15000, Waiter: 7000,  Baker: 12000, Helper: 5500,  Pharmacist: 18000, Agent: 16000, Clerk: 9000,  Trainer: 16000, Stylist: 10000, Assistant: 6500,  Tutor: 13000, Receptionist: 8000,  'Digital Marketer': 18000, 'Fashion Designer': 16000, 'Delivery Coordinator': 9000  },
  // Karnataka (15 cities)
  bengaluru:     { Manager: 50000, Chef: 42000, Waiter: 19000, Baker: 32000, Helper: 15000, Pharmacist: 38000, Agent: 42000, Clerk: 21000, Trainer: 38000, Stylist: 28000, Assistant: 17000, Tutor: 32000, Receptionist: 19000, 'Digital Marketer': 55000, 'Fashion Designer': 45000, 'Delivery Coordinator': 21000 },
  mysuru:        { Manager: 35000, Chef: 28000, Waiter: 14000, Baker: 25000, Helper: 12000, Pharmacist: 32000, Agent: 30000, Clerk: 17000, Trainer: 30000, Stylist: 22000, Assistant: 13000, Tutor: 26000, Receptionist: 16000, 'Digital Marketer': 35000, 'Fashion Designer': 30000, 'Delivery Coordinator': 16000 },
  mangaluru:     { Manager: 38000, Chef: 30000, Waiter: 15000, Baker: 26000, Helper: 13000, Pharmacist: 34000, Agent: 32000, Clerk: 18000, Trainer: 32000, Stylist: 24000, Assistant: 14000, Tutor: 28000, Receptionist: 17000, 'Digital Marketer': 38000, 'Fashion Designer': 34000, 'Delivery Coordinator': 17000 },
  hubli_dharwad: { Manager: 28000, Chef: 22000, Waiter: 11000, Baker: 19000, Helper: 9000,  Pharmacist: 26000, Agent: 24000, Clerk: 13000, Trainer: 24000, Stylist: 17000, Assistant: 10000, Tutor: 20000, Receptionist: 12000, 'Digital Marketer': 26000, 'Fashion Designer': 24000, 'Delivery Coordinator': 12500 },
  belagavi:      { Manager: 27000, Chef: 21000, Waiter: 10500, Baker: 18000, Helper: 8500,  Pharmacist: 25000, Agent: 23000, Clerk: 12500, Trainer: 23000, Stylist: 16000, Assistant: 9500,  Tutor: 19000, Receptionist: 11500, 'Digital Marketer': 25000, 'Fashion Designer': 23000, 'Delivery Coordinator': 12000 },
  davanagere:    { Manager: 26000, Chef: 20000, Waiter: 10000, Baker: 17000, Helper: 8000,  Pharmacist: 24000, Agent: 22000, Clerk: 12000, Trainer: 22000, Stylist: 15000, Assistant: 9000,  Tutor: 18000, Receptionist: 11000, 'Digital Marketer': 24000, 'Fashion Designer': 22000, 'Delivery Coordinator': 11500 },
  ballari:       { Manager: 25000, Chef: 19000, Waiter: 9500,  Baker: 16000, Helper: 7500,  Pharmacist: 23000, Agent: 21000, Clerk: 11500, Trainer: 21000, Stylist: 14000, Assistant: 8500,  Tutor: 17000, Receptionist: 10500, 'Digital Marketer': 23000, 'Fashion Designer': 21000, 'Delivery Coordinator': 11000 },
  vijayapura:    { Manager: 23000, Chef: 18000, Waiter: 9000,  Baker: 15000, Helper: 7000,  Pharmacist: 22000, Agent: 20000, Clerk: 11000, Trainer: 20000, Stylist: 13000, Assistant: 8000,  Tutor: 16000, Receptionist: 10000, 'Digital Marketer': 22000, 'Fashion Designer': 20000, 'Delivery Coordinator': 10500 },
  kalaburagi:    { Manager: 24000, Chef: 18500, Waiter: 9200,  Baker: 15500, Helper: 7200,  Pharmacist: 22500, Agent: 20500, Clerk: 11200, Trainer: 20500, Stylist: 13500, Assistant: 8200,  Tutor: 16500, Receptionist: 10200, 'Digital Marketer': 22500, 'Fashion Designer': 20500, 'Delivery Coordinator': 10800 },
  shimoga:       { Manager: 25500, Chef: 19500, Waiter: 9800,  Baker: 16500, Helper: 7800,  Pharmacist: 23500, Agent: 21500, Clerk: 11800, Trainer: 21500, Stylist: 14500, Assistant: 8800,  Tutor: 17500, Receptionist: 10800, 'Digital Marketer': 23500, 'Fashion Designer': 21500, 'Delivery Coordinator': 11200 },
  udupi:         { Manager: 32000, Chef: 26000, Waiter: 13000, Baker: 22000, Helper: 11000, Pharmacist: 30000, Agent: 28000, Clerk: 16000, Trainer: 28000, Stylist: 20000, Assistant: 12000, Tutor: 24000, Receptionist: 15000, 'Digital Marketer': 30000, 'Fashion Designer': 28000, 'Delivery Coordinator': 15000 },
  tumakuru:      { Manager: 22000, Chef: 17000, Waiter: 8500,  Baker: 14000, Helper: 6500,  Pharmacist: 21000, Agent: 19000, Clerk: 10500, Trainer: 19000, Stylist: 12500, Assistant: 7500,  Tutor: 15000, Receptionist: 9500,  'Digital Marketer': 21000, 'Fashion Designer': 19000, 'Delivery Coordinator': 10000 },
  hassan:        { Manager: 22500, Chef: 17500, Waiter: 8800,  Baker: 14500, Helper: 6800,  Pharmacist: 21500, Agent: 19500, Clerk: 10800, Trainer: 19500, Stylist: 12800, Assistant: 7800,  Tutor: 15500, Receptionist: 9800,  'Digital Marketer': 21500, 'Fashion Designer': 19500, 'Delivery Coordinator': 10200 },
  mandya:        { Manager: 21500, Chef: 16500, Waiter: 8200,  Baker: 13500, Helper: 6200,  Pharmacist: 20500, Agent: 18500, Clerk: 10200, Trainer: 18500, Stylist: 12200, Assistant: 7200,  Tutor: 14500, Receptionist: 9200,  'Digital Marketer': 20500, 'Fashion Designer': 18500, 'Delivery Coordinator': 9800  },
  chitradurga:   { Manager: 20000, Chef: 16000, Waiter: 8000,  Baker: 13000, Helper: 6000,  Pharmacist: 20000, Agent: 18000, Clerk: 10000, Trainer: 18000, Stylist: 12000, Assistant: 7000,  Tutor: 14000, Receptionist: 9000,  'Digital Marketer': 20000, 'Fashion Designer': 18000, 'Delivery Coordinator': 9500  },
};

// Complete business configuration data with new businesses
const businessConfig = {
  cafe: { name: "Cafe", staff: ["Manager", "Chef", "Waiter"], equipmentPercent: 0.40, profitMargin: 0.28,
    minInvestment: { tier1: 1500000, tier2: 1000000, tier3: 700000, tier4: 450000 } },
  bakery: { name: "Bakery", staff: ["Baker", "Helper"], equipmentPercent: 0.45, profitMargin: 0.25,
    minInvestment: { tier1: 1200000, tier2: 800000, tier3: 500000, tier4: 350000 } },
  cloudkitchen: { name: "Cloud Kitchen", staff: ["Chef", "Helper", "Delivery Coordinator"], equipmentPercent: 0.50, profitMargin: 0.30,
    minInvestment: { tier1: 800000, tier2: 600000, tier3: 400000, tier4: 250000 } },
  boutique: { name: "Fashion Boutique", staff: ["Manager", "Assistant"], equipmentPercent: 0.40, profitMargin: 0.40,
    minInvestment: { tier1: 2000000, tier2: 1500000, tier3: 1000000, tier4: 600000 } },
  digitalagency: { name: "Digital Marketing Agency", staff: ["Manager", "Digital Marketer"], equipmentPercent: 0.10, profitMargin: 0.50,
    minInvestment: { tier1: 600000, tier2: 400000, tier3: 250000, tier4: 150000 } },
  realestate: { name: "Real Estate Office", staff: ["Agent", "Clerk"], equipmentPercent: 0.15, profitMargin: 0.40,
    minInvestment: { tier1: 800000, tier2: 600000, tier3: 400000, tier4: 250000 } },
  medical: { name: "Medical Store", staff: ["Pharmacist", "Helper"], equipmentPercent: 0.50, profitMargin: 0.18,
    minInvestment: { tier1: 1400000, tier2: 1000000, tier3: 700000, tier4: 400000 } },
  gym: { name: "Gym", staff: ["Trainer", "Receptionist"], equipmentPercent: 0.60, profitMargin: 0.35,
    minInvestment: { tier1: 2500000, tier2: 1800000, tier3: 1000000, tier4: 600000 } },
  saloon: { name: "Saloon", staff: ["Stylist", "Assistant"], equipmentPercent: 0.35, profitMargin: 0.30,
    minInvestment: { tier1: 800000, tier2: 600000, tier3: 400000, tier4: 250000 } },
  coaching: { name: "Coaching Class", staff: ["Tutor", "Clerk"], equipmentPercent: 0.10, profitMargin: 0.45,
    minInvestment: { tier1: 700000, tier2: 500000, tier3: 300000, tier4: 150000 } }
};

// --- DYNAMIC UI LOGIC ---

const stateSelect = document.getElementById("state");
const citySelect = document.getElementById("city");
const plannerForm = document.getElementById("plannerForm");

function populateCities() {
  const selectedState = stateSelect.value;
  citySelect.innerHTML = "";
  citySelect.disabled = true;

  if (selectedState && citiesByState[selectedState]) {
    citySelect.disabled = false;
    citySelect.innerHTML = '<option value="">-- Select a City --</option>';
    citiesByState[selectedState].forEach(city => {
      const option = document.createElement("option");
      option.value = city.value;
      option.textContent = city.name;
      citySelect.appendChild(option);
    });
  } else {
    citySelect.innerHTML = '<option value="">-- Select a State First --</option>';
  }
}

stateSelect.addEventListener("change", populateCities);

// --- CORE CALCULATION LOGIC ---

plannerForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const budget = parseFloat(document.getElementById("budget").value);
  const city = citySelect.value;
  const business = document.getElementById("business-type").value;

  if (!budget || budget <= 0) { return alert("⚠️ Please enter a valid and positive investment amount."); }
  if (!city) { return alert("⚠️ Please select a city."); }

  const config = businessConfig[business];
  
  let minInvestment = 0;
  const cityRent = rentByCity[city] || 0;
  if (cityRent >= 70000) minInvestment = config.minInvestment.tier1;
  else if (cityRent >= 40000) minInvestment = config.minInvestment.tier2;
  else if (cityRent >= 25000) minInvestment = config.minInvestment.tier3;
  else minInvestment = config.minInvestment.tier4;

  if (budget < minInvestment) {
    const cityName = citySelect.options[citySelect.selectedIndex].text;
    return alert(`❌ Minimum investment for a ${config.name} in a city like ${cityName} is estimated to be ₹${minInvestment.toLocaleString()}. Your budget may be too low for this venture.`);
  }

  const rentMonthly = rentByCity[city];
  const rentTotal = rentMonthly * 12;

  const roles = config.staff;
  const citySalaries = salaryRates[city];
  let monthlySalaries = 0;
  for (let role of roles) {
    monthlySalaries += citySalaries[role] || 0;
  }
  const salaryTotal = monthlySalaries * 12;

  const fixedCosts = rentTotal + salaryTotal;
  const remainingForOneTime = budget - fixedCosts;

  if (remainingForOneTime <= 0) {
    return alert("❌ Your budget is too low to cover even the first year of estimated rent and salaries. Please increase your budget or consider a smaller scale venture.");
  }

  const equipPercent = config.equipmentPercent;
  const equipment = Math.round(remainingForOneTime * equipPercent);
  const remainingAfterEquipment = remainingForOneTime - equipment;
  
  const breakdown = {
    rent: rentTotal,
    salaries: salaryTotal,
    equipment: equipment,
    marketing: Math.round(remainingAfterEquipment * 0.5),
    legal: Math.round(remainingAfterEquipment * 0.2),
    misc: Math.round(remainingAfterEquipment * 0.3)
  };

  const monthlyOperatingCost = Math.round(fixedCosts / 12);
  const profitMargin = config.profitMargin;
  
  const monthlyRevenueToBreakeven = monthlyOperatingCost / profitMargin;
  const breakevenInMonths = Math.ceil(budget / monthlyRevenueToBreakeven);

  const result = {
    city: citySelect.options[citySelect.selectedIndex].text,
    businessName: config.name,
    budget,
    breakdown,
    monthly: monthlyOperatingCost,
    breakeven: breakevenInMonths,
    profitMargin: profitMargin,
    staffRoles: roles,
  };

  localStorage.setItem("resultData", JSON.stringify(result));
  window.location.href = "report/";
});
