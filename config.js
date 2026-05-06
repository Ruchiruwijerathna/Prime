/* ================================================================
   ╔══════════════════════════════════════════════════════════════╗
   ║        ✏️  config.js  —  YOUR CUSTOMIZATION FILE            ║
   ║                                                              ║
   ║   This is the ONLY file you need to edit.                   ║
   ║   Everything else runs automatically.                        ║
   ╚══════════════════════════════════════════════════════════════╝

   HOW TO CONNECT GOOGLE SHEETS:
   ───────────────────────────────
   1. Open your Google Sheet
   2. Click  File → Share → Publish to web
   3. First dropdown  → choose your sheet tab name (e.g. Sheet3)
   4. Second dropdown → choose  "Comma-separated values (.csv)"
   5. Click Publish → copy the URL it shows
   6. Paste that URL below into  GOOGLE_SHEET_CSV_URL

================================================================ */

const CONFIG = {

  // 🔗 GOOGLE SHEETS CSV URL
  //    Paste your published CSV link here (between the quotes)
  //    Leave empty ("") to use the embedded offline data instead
  GOOGLE_SHEET_CSV_URL: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRTG_z9yrnCzjeMgqlZBt7BNaGRPXf5MxnaE5_SL_HYk9wz6lGU3Fs3tJWK3vTUlWMLTyZK2U228OuI/pub?gid=2019630569&single=true&output=csv",

  // ─────────────────────────────────────────────
  // 🏢 YOUR COMPANY
  //    Your company will be highlighted in GOLD on all charts
  //    Must match the spelling in your spreadsheet exactly
  YOUR_COMPANY: "Home lands",

  // ─────────────────────────────────────────────
  // 📊 DASHBOARD TITLE & SUBTITLE
  DASHBOARD_TITLE:    "Competitor Analysis",
  DASHBOARD_SUBTITLE: "Sri Lanka Land Market Intelligence Dashboard",

  // ─────────────────────────────────────────────
  // 📅 DATE LABEL shown in the top-right corner
  DATA_DATE: "📅 Data: 2026",

  // ─────────────────────────────────────────────
  // 🔄 AUTO REFRESH
  //    How often (minutes) to re-fetch Google Sheets data
  //    Set to 0 to turn off auto-refresh
  AUTO_REFRESH_MINUTES: 10,

  // ─────────────────────────────────────────────
  // 📊 CHART SIZE — how many companies / locations to show
  TOP_COMPANIES_COUNT: 12,   // number of companies in bar charts
  TOP_LOCATIONS_COUNT: 15,   // number of locations in location chart

  // ─────────────────────────────────────────────
  // 🗺️ REGION CLASSIFICATION
  //    List location names under the correct region type.
  //    The Price by Region chart uses this to group locations.
  //    Add more names as needed — just separate with commas.
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
  ]
  // Anything not listed above is automatically classified as "Rural"

};
