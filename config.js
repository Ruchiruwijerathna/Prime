/* ================================================================
   ╔══════════════════════════════════════════════════════════════╗
   ║        ✏️  config.js  —  YOUR CUSTOMIZATION FILE            ║
   ║                                                              ║
   ║   Edit ONLY this file on GitHub to change the dashboard.    ║
   ║   After saving, the live site updates in ~60 seconds.       ║
   ╚══════════════════════════════════════════════════════════════╝

   HOW TO EDIT ON GITHUB:
   ──────────────────────
   1. Go to your GitHub repo → click config.js
   2. Click the ✏️ pencil icon (top right of the file view)
   3. Make your changes below
   4. Scroll down → click "Commit changes"
   5. Dashboard updates automatically in ~60 seconds

   HOW TO CONNECT GOOGLE SHEETS:
   ─────────────────────────────
   1. Open your Google Sheet
   2. File → Share → Publish to web
   3. First dropdown  → your sheet tab name (e.g. Sheet3)
   4. Second dropdown → "Comma-separated values (.csv)"
   5. Click Publish → copy the URL
   6. Paste it into GOOGLE_SHEET_CSV_URL below

================================================================ */

const CONFIG = {

  /* ════════════════════════════════════════════════════════
     🔗  GOOGLE SHEETS CONNECTION
  ════════════════════════════════════════════════════════ */

  // Paste your published Google Sheets CSV URL here
  // Leave "" to use the offline data.json file instead
  GOOGLE_SHEET_CSV_URL: "",


  /* ════════════════════════════════════════════════════════
     🏢  YOUR COMPANY
  ════════════════════════════════════════════════════════ */

  // Your company name — must match the spelling in your
  // spreadsheet EXACTLY (capital letters, spaces matter)
  // Your company highlights in GOLD on all charts.
  // Leave "" if your data is not added to the sheet yet.
  YOUR_COMPANY: "",


  /* ════════════════════════════════════════════════════════
     📊  DASHBOARD TITLES  (shown in the header)
  ════════════════════════════════════════════════════════ */

  DASHBOARD_TITLE:    "🏗️ Sri Lanka Land Market — Competitor Analysis",
  DASHBOARD_SUBTITLE: "Real Estate Intelligence Dashboard · 2026",
  DATA_DATE:          "📅 Updated: 2026",


  /* ════════════════════════════════════════════════════════
     🔄  AUTO REFRESH
     How often (minutes) to re-fetch Google Sheets data.
     Set to 0 to disable.
  ════════════════════════════════════════════════════════ */

  AUTO_REFRESH_MINUTES: 10,


  /* ════════════════════════════════════════════════════════
     📊  CHART SIZES
  ════════════════════════════════════════════════════════ */

  TOP_COMPANIES_COUNT:       12,   // companies shown in bar charts
  TOP_LOCATIONS_COUNT:       15,   // locations in Top Locations chart
  TOP_PRICE_LOCATIONS_COUNT: 12,   // locations in Avg Price chart
  CURRENT_YEAR:              2026, // used to calculate years in business


  /* ════════════════════════════════════════════════════════
     💰  PRICE FILTERING
     ─────────────────────────────────────────────────────
     Prices outside this range are treated as data entry
     errors and excluded from all price charts and averages.
     
     Adjust these if your market uses different price bands.
  ════════════════════════════════════════════════════════ */

  MIN_VALID_PRICE:  50000,      // Rs. 50,000  — below this = ignored
  MAX_VALID_PRICE:  15000000,   // Rs. 15,000,000 — above this = ignored


  /* ════════════════════════════════════════════════════════
     📐  PLOT SIZE BUCKETS
     ─────────────────────────────────────────────────────
     Controls the groupings in "Plot Size Distribution" chart.
     
     HOW TO EDIT:
     • Change "label" text to rename a group
     • Change "max" to make a group wider or narrower
     • Groups must be in ascending order
     • Last group has max: 9999 (means "anything larger")
  ════════════════════════════════════════════════════════ */

  PLOT_BUCKETS: [
    { label: "1–5 perches",   max: 5    },
    { label: "6–8 perches",   max: 8    },
    { label: "9–11 perches",  max: 11   },
    { label: "12–15 perches", max: 15   },
    { label: "16–20 perches", max: 20   },
    { label: "20+ perches",   max: 9999 },
  ],


  /* ════════════════════════════════════════════════════════
     🗺️  REGION CLASSIFICATION
     ─────────────────────────────────────────────────────
     HOW IT WORKS:
     Each project's Location is checked against these lists.
     
     • Location contains a name in URBAN_AREAS   → "Urban"
     • Location contains a name in SUBURBAN_AREAS → "Suburban"
     • Not in either list                          → "Rural"
     
     The check is NOT case-sensitive.
     Partial matches work — "Thala" matches "Thalawathugoda".
     
     HOW TO ADD A LOCATION:
       Add  "NewArea",   inside the brackets (with the comma)
     
     HOW TO MOVE A LOCATION (e.g. Suburban → Urban):
       Delete from SUBURBAN_AREAS, add to URBAN_AREAS
     
     HOW TO RENAME THE LABELS (Urban/Suburban/Rural):
       Change REGION_LABELS below
  ════════════════════════════════════════════════════════ */

  REGION_LABELS: ["Urban", "Suburban", "Rural"],

  URBAN_AREAS: [
    "Colombo",        "Malabe",          "Rajagiriya",
    "Battaramulla",   "Nugegoda",        "Kotte",
    "Dehiwala",       "Mount Lavinia",   "Borella",
    "Kiribathgoda",   "Kaduwela",        "Athurugiriya",
    "Maharagama",     "Piliyandala",     "Homagama",
    "Kottawa",        "Pannipitiya",     "Wellampitiya",
    "Thalawathugoda", "Madiwela",        "Hokandara",
    "Malwana",        "Welikade",        "Kesbewa",
    "Narahenpita",    "Gangodawila",     "Pita Kotte",
  ],

  SUBURBAN_AREAS: [
    "Kadawatha",    "Gampaha",       "Negombo",
    "Ja-Ela",       "Wattala",       "Kelaniya",
    "Bandaragama",  "Panadura",      "Kalutara",
    "Moratuwa",     "Wadduwa",       "Beruwala",
    "Kahathuduwa",  "Meegoda",       "Horana",
    "Avissawella",  "Hanwella",      "Kegalle",
    "Kurunegala",   "Kandy",         "Peradeniya",
    "Polgasowita",  "Panagoda",      "Godagama",
    "Meepe",        "Karapitiya",    "Udugampola",
    "Seeduwa",      "Nittambuwa",    "Veyangoda",
    "Minuwangoda",  "Ganemulla",     "Divulapitiya",
    "Alawwa",       "Warakapola",    "Rambukkana",
  ],
  // Everything NOT in the above two lists → "Rural"


  /* ════════════════════════════════════════════════════════
     📝  EXECUTIVE SUMMARY TEXT BOXES  (bottom of dashboard)
     ─────────────────────────────────────────────────────
     Edit the title and text for each insight box here.
     Leave text as "{AUTO}" for the last box — it fills
     itself from the live data automatically.
  ════════════════════════════════════════════════════════ */

  INSIGHTS: [
    {
      icon:  "🔴",
      title: "Market Saturation Zones",
      text:  "Homagama, Athurugiriya, and Piliyandala show the highest project density. Differentiating through premium amenities or unique plot sizes is key to standing out.",
    },
    {
      icon:  "🟡",
      title: "Growth Opportunities",
      text:  "Emerging corridors — Kurunegala, Tangalle, and Matara — show less competition with growing demand. First-mover advantage is available in these areas.",
    },
    {
      icon:  "🟢",
      title: "Pricing Strategy",
      text:  "The Rs. 200,000–500,000/perch band shows the highest absorption rate. Premium Colombo-adjacent locations command Rs. 1M+ successfully.",
    },
    {
      icon:  "📊",
      title: "Project Scale Sweet Spot",
      text:  "Projects with 20–60 blocks show the fastest sell-through. Mega projects (100+ blocks) succeed best in emerging areas with lower per-perch pricing.",
    },
    {
      icon:  "🏗️",
      title: "Plot Size Preference",
      text:  "10-perch plots dominate the market. 6-perch plots are trending in urban areas. 12–15 perch is preferred in suburban and rural markets.",
    },
    {
      icon:  "⚡",
      title: "Top Competitive Threats",
      text:  "{AUTO}",   // ← keep as {AUTO} — filled automatically from data
    },
  ],

};
