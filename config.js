const CONFIG = {

  // 🔗 GOOGLE SHEETS CSV URL – leave empty to use offline data.json
  GOOGLE_SHEET_CSV_URL: "",

  // 🏢 YOUR COMPANY (must match exactly as in your data)
  YOUR_COMPANY: "Home lands",

  // 📊 DASHBOARD TITLES
  DASHBOARD_TITLE:    "🏗️ Prime Land — Competitor Analysis",
  DASHBOARD_SUBTITLE: "Sri Lanka Land Market Intelligence Dashboard",

  DATA_DATE: "📅 Data: 2026 April",

  AUTO_REFRESH_MINUTES: 0,   // off for offline testing

  TOP_COMPANIES_COUNT: 15,
  TOP_LOCATIONS_COUNT: 15,

  // 🗺️ REGION CLASSIFICATION (add/remove as needed)
  URBAN_AREAS: [
    "Colombo","Malabe","Rajagiriya","Battaramulla","Nugegoda",
    "Kotte","Dehiwala","Mount Lavinia","Borella","Kiribathgoda",
    "Kaduwela","Athurugiriya","Maharagama","Piliyandala","Homagama",
    "Kottawa","Pannipitiya","Wellampitiya","Thalawathugoda","Madiwela","Hokandara"
  ],
  SUBURBAN_AREAS: [
    "Kadawatha","Gampaha","Negombo","Ja-Ela","Wattala","Kelaniya",
    "Bandaragama","Panadura","Kalutara","Moratuwa","Wadduwa","Beruwala",
    "Kahathuduwa","Meegoda","Horana","Avissawella","Hanwella","Kegalle",
    "Kurunegala","Kandy","Peradeniya"
  ],

  // 🧩 CSV COLUMN MAPPING (must match your Google Sheet column titles EXACTLY)
  CSV_HEADER_MAP: {
    company:     "Company Name",
    year:        "Company Start Year",
    location:    "Location",
    price:       "Price Rs.(LKR)",
    status:      "Status",
    totalBlocks: "Total Blocks",
    available:   "Available",
    plotSize:    "Extent singlePlot",
    projectName: "Project Name"
  }
};