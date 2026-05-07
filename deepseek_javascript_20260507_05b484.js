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
  GOOGLE_SHEET_CSV_URL: "",

  // ─────────────────────────────────────────────
  // 🏢 YOUR COMPANY  (must match the company name in the sheet exactly)
  YOUR_COMPANY: "Home lands",

  // ─────────────────────────────────────────────
  // 📊 DASHBOARD TITLE & SUBTITLE
  DASHBOARD_TITLE:    "🏗️ Prime Land — Competitor Analysis",
  DASHBOARD_SUBTITLE: "Sri Lanka Land Market Intelligence Dashboard",

  // 📅 DATE LABEL shown in the top-right corner
  DATA_DATE: "📅 Data: 2026",

  // 🔄 AUTO REFRESH minutes (0 = off)
  AUTO_REFRESH_MINUTES: 10,

  // 📊 CHART SIZE
  TOP_COMPANIES_COUNT: 12,
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
    year:        "Year",
    location:    "Location",
    price:       "Price",
    status:      "Status",
    totalBlocks: "Total Blocks",
    available:   "Available",
    plotSize:    "Plot Size",
    projectName: "Project Name"
  }
};