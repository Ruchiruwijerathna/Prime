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

   HOW TO CONNECT FACEBOOK ADS SHEET:
   ────────────────────────────────────
   Same steps as above, but for your Facebook Ads sheet
   (columns: Company, Location, Price, Published Date)
   Paste the URL into FACEBOOK_SHEET_CSV_URL below

================================================================ */

const CONFIG = {

  /* ════════════════════════════════════════════════════════
     🔗  MAIN DATA — GOOGLE SHEETS CONNECTION
     ─────────────────────────────────────────────────────
     Paste your published Google Sheets CSV URL here.
     Leave "" to use the offline data.json file instead.
  ════════════════════════════════════════════════════════ */

  GOOGLE_SHEET_CSV_URL: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRTG_z9yrnCzjeMgqlZBt7BNaGRPXf5MxnaE5_SL_HYk9wz6lGU3Fs3tJWK3vTUlWMLTyZK2U228OuI/pub?gid=2019630569&single=true&output=csv",


  /* ════════════════════════════════════════════════════════
     📘  FACEBOOK ADS — GOOGLE SHEETS CONNECTION
     ─────────────────────────────────────────────────────
     Paste your published Facebook Ads Sheet CSV URL here.
     Sheet must have columns: Company, Location, Price, Published Date
     Leave "" to use the offline fb_data.json file instead.
  ════════════════════════════════════════════════════════ */

  FACEBOOK_SHEET_CSV_URL: "",


  /* ════════════════════════════════════════════════════════
     🏢  YOUR COMPANY
     ─────────────────────────────────────────────────────
     Enter your company name EXACTLY as it appears in the
     spreadsheet (capitals and spaces matter).
     Your company will be highlighted in GOLD on all charts.
     Leave "" if you haven't added your data yet.
  ════════════════════════════════════════════════════════ */

  YOUR_COMPANY: "",    // e.g. "Prime Lands"  ← edit this


  /* ════════════════════════════════════════════════════════
     📊  DASHBOARD TITLES  (shown in the header)
  ════════════════════════════════════════════════════════ */

  DASHBOARD_TITLE:    "Land Market — Competitor Analysis",
  DASHBOARD_SUBTITLE: "Real Estate Land Data Dashboard · 2026",
  DATA_DATE:          "📅 Updated: 2026 April",


  /* ════════════════════════════════════════════════════════
     🔄  AUTO REFRESH
     How often (minutes) to re-fetch Google Sheets data.
     Set to 0 to disable.
  ════════════════════════════════════════════════════════ */

  AUTO_REFRESH_MINUTES: 1,


  /* ════════════════════════════════════════════════════════
     📊  CHART SIZES
  ════════════════════════════════════════════════════════ */

  TOP_COMPANIES_COUNT:       20,   // companies shown in bubble & status charts
  TOP_LOCATIONS_COUNT:       20,   // locations in Top Locations chart
  TOP_PRICE_LOCATIONS_COUNT: 20,   // locations in Avg Price chart
  CURRENT_YEAR:              2026, // used to calculate years in business


  /* ════════════════════════════════════════════════════════
     💰  PRICE FILTERING
     ─────────────────────────────────────────────────────
     Prices outside this range are treated as data entry
     errors and excluded from all price charts and averages.
  ════════════════════════════════════════════════════════ */

  MIN_VALID_PRICE:  50000,      // Rs. 50,000  — below this = ignored
  MAX_VALID_PRICE:  15000000,   // Rs. 15,000,000 — above this = ignored


  /* ════════════════════════════════════════════════════════
     📐  PLOT SIZE BUCKETS
     ─────────────────────────────────────────────────────
     Controls the groupings in "Plot Size Distribution" chart.
     Groups must be in ascending order.
     Last group has max: 9999 (means "anything larger").
  ════════════════════════════════════════════════════════ */

  PLOT_BUCKETS: [
    { label: "6–8 perches",   max: 8    },
    { label: "9–11 perches",  max: 11   },
    { label: "12–15 perches", max: 15   },
    { label: "16–20 perches", max: 20   },
    { label: "20+ perches",   max: 9999 },
  ],


  /* ════════════════════════════════════════════════════════
     🗺️  REGION CLASSIFICATION
     ─────────────────────────────────────────────────────
     Each project's Location is checked against these lists.
     Partial matches work — "Thala" matches "Thalawathugoda".
     The check is NOT case-sensitive.
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
    "Kadawatha",      "Gampaha",         "Negombo",
    "Ja-Ela",         "Wattala",         "Kelaniya",
    "Bandaragama",    "Panadura",        "Kalutara",
    "Moratuwa",       "Wadduwa",         "Beruwala",
    "Kahathuduwa",    "Meegoda",         "Horana",
    "Avissawella",    "Hanwella",        "Kegalle",
    "Kurunegala",     "Kandy",           "Peradeniya",
    "Polgasowita",    "Panagoda",        "Godagama",
    "Meepe",          "Karapitiya",      "Udugampola",
    "Seeduwa",        "Nittambuwa",      "Veyangoda",
    "Minuwangoda",    "Ganemulla",       "Divulapitiya",
    "Alawwa",         "Warakapola",      "Rambukkana",
  ],


  /* ════════════════════════════════════════════════════════
     📝  EXECUTIVE SUMMARY TEXT BOXES
     ─────────────────────────────────────────────────────
     Edit the icon, title and text for each insight box.
     The last box with text "{AUTO}" fills itself from live
     data automatically — keep it as "{AUTO}".
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
