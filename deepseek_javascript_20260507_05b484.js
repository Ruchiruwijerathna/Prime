/* ================================================================
   ╔══════════════════════════════════════════════════════════════╗
   ║        ✏️  config.js  —  YOUR CUSTOMIZATION FILE            ║
   ║                                                              ║
   ║   This is the ONLY file you need to edit.                   ║
   ║   Everything else runs automatically.                        ║
   ╚══════════════════════════════════════════════════════════════╝
================================================================ */

const CONFIG = {

  // 🔗 GOOGLE SHEETS CSV URL
  GOOGLE_SHEET_CSV_URL: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRTG_z9yrnCzjeMgqlZBt7BNaGRPXf5MxnaE5_SL_HYk9wz6lGU3Fs3tJWK3vTUlWMLTyZK2U228OuI/pub?gid=2019630569&single=true&output=csv",

  // ─────────────────────────────────────────────
  // 🏢 YOUR COMPANY  (must match the company name in the sheet exactly)
  YOUR_COMPANY: "Home lands",

  // ─────────────────────────────────────────────
  // 📊 DASHBOARD TITLE & SUBTITLE
  DASHBOARD_TITLE:    "Land — Competitor Analysis",
  DASHBOARD_SUBTITLE: "Land Market Dashboard",

  // 📅 DATE LABEL shown in the top-right corner
  DATA_DATE: "📅 Data: 2026 April",

  // 🔄 AUTO REFRESH minutes (0 = off)
  AUTO_REFRESH_MINUTES: 1,

  // 📊 CHART SIZE
  TOP_COMPANIES_COUNT: 15,
  TOP_LOCATIONS_COUNT: 15,

  // ─────────────────────────────────────────────
  // 🗺️ REGION CLASSIFICATION
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
  // Anything not listed above → "Rural"

  // ─────────────────────────────────────────────
  // 🧩 CSV COLUMN MAPPING (Google Sheets → Dashboard)
  //    Write here the EXACT header name from your sheet.
  CSV_HEADER_MAP: {
    company:     "Company Name",   // ← change to your column header
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
