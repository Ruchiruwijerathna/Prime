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

   ============ NEW: DSD & LOCATION MATCHING ============
   - The DSD_MAP below contains all Divisional Secretariat Divisions
     extracted from the provided Excel file.
   - If a project location does not match any DSD, it will be listed
     in the dashboard as "unmatched". You can then add a synonym
     in the SYNONYMS object to fix the match.
   - SYNONYMS: add key→value pairs where the key is the raw location
     (as it appears in your data) and the value is the canonical DSD name.
   - The matching is case‑insensitive and tries to clean punctuation.
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

  FACEBOOK_SHEET_CSV_URL: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRTG_z9yrnCzjeMgqlZBt7BNaGRPXf5MxnaE5_SL_HYk9wz6lGU3Fs3tJWK3vTUlWMLTyZK2U228OuI/pub?gid=1318686992&single=true&output=csv",


  /* ════════════════════════════════════════════════════════
     🏢  YOUR COMPANY
     ─────────────────────────────────────────────────────
     Enter your company name EXACTLY as it appears in the
     spreadsheet (capitals and spaces matter).
     Your company will be highlighted in GOLD on all charts.
     Leave "" if you haven't added your data yet.
  ════════════════════════════════════════════════════════ */

  YOUR_COMPANY: "Prime Lands",    // e.g. "Prime Lands"  ← edit this


  /* ════════════════════════════════════════════════════════
     📊  DASHBOARD TITLES  (shown in the header)
  ════════════════════════════════════════════════════════ */

  DASHBOARD_TITLE:    "Land Market — Competitor Analysis",
  DASHBOARD_SUBTITLE: "Real Estate Land Data Dashboard · 2026",
  DATA_DATE:          "Updated: 2026 ",


  /* ════════════════════════════════════════════════════════
     🔄  AUTO REFRESH
     How often (minutes) to re-fetch Google Sheets data.
     Set to 0 to disable.
  ════════════════════════════════════════════════════════ */

  AUTO_REFRESH_MINUTES: 5,


  /* ════════════════════════════════════════════════════════
     📊  CHART SIZES
  ════════════════════════════════════════════════════════ */

  TOP_COMPANIES_COUNT:       25,   // companies shown in bubble & status charts
  TOP_LOCATIONS_COUNT:       25,   // locations in Top Locations chart
  TOP_PRICE_LOCATIONS_COUNT: 25,   // locations in Avg Price chart
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
      text:  "Kadawatha (9 active ads), Homagama (8), Panadura (5), and Piliyandala (4) show the highest confirmed competitor activity based on live Facebook ads — the most reliable current signal. These zones have multiple companies advertising simultaneously. Entry now requires clear price or product differentiation to stand out.",
    },
    {
      icon:  "⚠️",
      title: "Premium Urban Gap",
      text:  "Malabe, Hokandara, Gampaha town, and Piliyandala have active competitor ads at Rs. 950K–Rs. 1.95M per perch. Prime Lands holds one Malabe listing but shows no price — making it invisible to price-comparing buyers. Empire Lands and Ground Worth are establishing premium brand presence in this corridor. This gap narrows each month.",
    },
    {
      icon:  "🟢",
      title: "Pricing Intelligence",
      text:  "From 95 live Facebook priced ads: Budget below Rs. 400K accounts for 53% of active market volume. Mid-range Rs. 400K–900K holds 29%. Premium Rs. 900K–1.5M is 12%. Luxury above Rs. 1.5M is 6%. The mid-range band has the highest number of active competitors. Premium Colombo-adjacent locations — Malabe, Hokandara, Gampaha town — are sustaining Rs. 1M+ asks with confirmed buyer activity.",
    },
    {
      icon:  "📡",
      title: "Digital Ad Intelligence",
      text:  "Prime Lands leads Facebook ad volume with 64 active listings — 40% of all active land ads in Sri Lanka. However, 73% of Prime Lands ads show no price versus Home Lands at 97% price transparency. Withholding price drives inquiry volume but reduces lead pre-qualification. Home Lands (32 ads, 97% transparent) and winroseproperty (13 ads, 85% transparent) are building stronger digital buyer trust through pricing clarity.",
    },
    {
      icon:  "🏗️",
      title: "Plot Size Preference",
      text:  "9–11 perch plots represent the largest share of published market projects and have the highest buyer familiarity. 6–8 perch plots are gaining share in dense urban Colombo and Gampaha zones driven by affordability pressure. 12–15 perch is the preferred format in suburban and semi-rural locations where land cost per perch is lower. Any new project launch should be sized to match the location's buyer profile.",
    },
    {
      icon:  "⚡",
      title: "Top Competitive Threats",
      text:  "{AUTO}",
    },
  ],
  /* ════════════════════════════════════════════════════════
     🗺️  DSD / LOCATION MATCHING (NEW)
     ─────────────────────────────────────────────────────
     - DSD_MAP: keys are normalized DSD names (lowercase, no punctuation)
       values contain the official DSD name and its district.
     - SYNONYMS: manually map a raw location string (as it appears in your
       data) to a canonical DSD name. This overrides automatic matching.
     - The matching order: 
         1. exact synonym match (case-insensitive)
         2. exact match on cleaned string
         3. "contains" match (e.g., "Ella" → "Ella" DSD)
         4. fallback to "Unmatched"
     - If you see many unmatched locations, add synonyms.
  ════════════════════════════════════════════════════════ */

  // Manual synonyms: raw location → official DSD name
  // Add any location from your data that doesn't match correctly
  SYNONYMS: {
    "Athurugiriya Pangoda": "Homagama",
    "Homagama Pitipna": "Homagama",
    "Kadawatha Ranmuthugala": "Gampaha",
    "Kadawatha": "Gampaha",
    "Kandy": "Kandy Four Gravets & Gangawata Korale",
    "Gampaha Ragama": "Gampaha",
    "Negombo Katana": "Katana",
    "Ja Ela": "Ja-Ela",
    "Kirindiwela": "Minuwangoda", // approximate
    "Meerigama": "Mirigama",
    "Delgoda - Udupila": "Gampaha",
    "Athurigiriya": "Homagama",
    "Homagama Kiriwaththuduwa": "Homagama",
    "Habarakada": "Homagama",
    "Mathugama": "Mathugama",
    "Kurunagala - Melsiripura": "Kurunegala",
    "Galle - Karapitiya": "Karapitiya",
    "Galle - Benthara": "Bentota",
    "Homagama - Uduwana": "Homagama",
    "Meepe": "Meepe",
    "Moratuwa - Katubedda": "Moratuwa",
    "Homagama - Watareka": "Homagama",
    "Horana - Ingiriya": "Ingiriya",
    "Homagama - Pitipana": "Homagama",
    "Maravila": "Marawila",
    "Kirimetiyana": "Kirimetiyana",
    "Homagama Thalagala": "Homagama",
    "Kesbewa - Kindelpitiya": "Kesbewa",
    "Hoamagama - Kiriwaththuduwa": "Homagama",
    "Gampaha - Balummahara": "Gampaha",
    "Kadawatha - Webada": "Gampaha",
    "Kadawatha - Trackmo Junction": "Gampaha",
    "Negombo - Kadirana": "Negombo",
    "Athurugiriya, Colombo": "Homagama",
    "Gorakana": "Panadura",
    "Hirana, Panadura": "Panadura",
    "Panadura": "Panadura",
    "Wadduwa": "Wadduwa",
    "Kuruwita, Rathnapura": "Kuruvita",
    "Gonapola Thalagala": "Horana",
    "Deniyaya,Waralla": "Deniyaya",
    "Tangalle,Kurudu pokuna": "Tangalle",
    "Hokandara": "Kaduwela",
    "Piliyandala,Polgasowita": "Polgasowita",
    "Marawila": "Marawila",
    "GANEMULLA": "Ganemulla",
    "Ingiriya": "Ingiriya",
    "Pasyala": "Pasyala",
    "Matara,Kakanadura": "Matara",
    "Mahabage": "Mahabage",
    "Gampaha,Yakkala": "Yakkala",
    "Pothuhera": "Pothuhera",
    "Kesbewa, Polgasowita": "Polgasowita",
    "Homagama, Pitipana": "Homagama",
    "Nittambuwa": "Nittambuwa",
    "Kottawa": "Kottawa",
    "Pitipana, Homagama": "Homagama",
    "Pannala": "Pannala",
    "Matale,Ibuldeniya": "Matale",
    "Matale,Palapathwala": "Matale",
    "Matale,Hulangamuwa": "Matale",
    "Katunayake,Minuwangoda": "Minuwangoda",
    "Kurunegala,Uhumeeya": "Kurunegala",
    "Alawwa": "Alawwa",
    "Ragama,Batuwaththa": "Ragama",
    "Thalgodapitiya,Ibbagamuwa": "Ibbagamuwa",
    "Kurunegala,kiriwawula": "Kurunegala",
    "Yakkala,Gampaha": "Yakkala",
    "Rekawa": "Rekawa",
    "Beliaththa": "Beliatta",
    "Homagama,Wataraka": "Homagama",
    "Kalutara,Galpatha": "Kalutara",
    "Ja-ela,Kotugoda": "Ja-Ela",
    "Negambo,Disagewaththa": "Negombo",
    "Negambo,Kadawala": "Negombo",
    "Kadawatha,Udupila": "Gampaha",
    "Weerabugedara": "Weerambugedara"
  },

  // DSD_MAP generated from the Excel file (190+ entries)
  // Keys are cleaned (lowercase, spaces normalised)
  DSD_MAP: {
    "eheliyagoda": { dsd: "Eheliyagoda", district: "Ratnapura" },
    "oddusuddan": { dsd: "Oddusuddan", district: "Mullaitivu" },
    "ruwanwella": { dsd: "Ruwanwella", district: "Kegalle" },
    "yatinuwara": { dsd: "Yatinuwara", district: "Kandy" },
    "galnewa": { dsd: "Galnewa", district: "Anuradhapura" },
    "ratmalana": { dsd: "Ratmalana", district: "Colombo" },
    "opanayake": { dsd: "Opanayake", district: "Ratnapura" },
    "dambulla": { dsd: "Dambulla", district: "Matale" },
    "agalawatta": { dsd: "Agalawatta", district: "Kalutara" },
    "thawalama": { dsd: "Thawalama", district: "Galle" },
    "mahawilachchiya": { dsd: "Mahawilachchiya", district: "Anuradhapura" },
    "thihagoda": { dsd: "Thihagoda", district: "Matara" },
    "kuliyapitiya east": { dsd: "Kuliyapitiya East", district: "Kurunegala" },
    "verugal (eachchilampattu)": { dsd: "Verugal (Eachchilampattu)", district: "Trincomalee" },
    "udubaddawa": { dsd: "Udubaddawa", district: "Kurunegala" },
    "koralai pattu central": { dsd: "Koralai Pattu Central", district: "Batticaloa" },
    "kolonnawa": { dsd: "Kolonnawa", district: "Colombo" },
    "malimbada": { dsd: "Malimbada", district: "Matara" },
    "pannala": { dsd: "Pannala", district: "Kurunegala" },
    "mihinthale": { dsd: "Mihinthale", district: "Anuradhapura" },
    "kanthale": { dsd: "Kanthale", district: "Trincomalee" },
    "yatawatta": { dsd: "Yatawatta", district: "Matale" },
    "ehetuwewa": { dsd: "Ehetuwewa", district: "Kurunegala" },
    "kirinda puhulwella": { dsd: "Kirinda Puhulwella", district: "Matara" },
    "rideegama": { dsd: "Rideegama", district: "Kurunegala" },
    "maritimepattu": { dsd: "Maritimepattu", district: "Mullaitivu" },
    "kotavehera": { dsd: "Kotavehera", district: "Kurunegala" },
    "seethawaka": { dsd: "Seethawaka", district: "Colombo" },
    "valikamam north (tellipallai)": { dsd: "Valikamam North (Tellipallai)", district: "Jaffna" },
    "passara": { dsd: "Passara", district: "Badulla" },
    "koralai pattu north (vaharai)": { dsd: "Koralai Pattu North (Vaharai)", district: "Batticaloa" },
    "ambalangoda": { dsd: "Ambalangoda", district: "Galle" },
    "valikamam west (chankanai)": { dsd: "Valikamam West (Chankanai)", district: "Jaffna" },
    "deraniyagala": { dsd: "Deraniyagala", district: "Kegalle" },
    "habaraduwa": { dsd: "Habaraduwa", district: "Galle" },
    "neluwa": { dsd: "Neluwa", district: "Galle" },
    "welipitiya": { dsd: "Welipitiya", district: "Matara" },
    "horana": { dsd: "Horana", district: "Kalutara" },
    "wariyapola": { dsd: "Wariyapola", district: "Kurunegala" },
    "nawagattegama": { dsd: "Nawagattegama", district: "Puttalam" },
    "manmunai south-west": { dsd: "Manmunai South-West", district: "Batticaloa" },
    "ambalantota": { dsd: "Ambalantota", district: "Hambantota" },
    "biyagama": { dsd: "Biyagama", district: "Gampaha" },
    "weerambugedara": { dsd: "Weerambugedara", district: "Kurunegala" },
    "niyagama": { dsd: "Niyagama", district: "Galle" },
    "akmeemana": { dsd: "Akmeemana", district: "Galle" },
    "kalawana": { dsd: "Kalawana", district: "Ratnapura" },
    "pathahewaheta": { dsd: "Pathahewaheta", district: "Kandy" },
    "nuwara eliya": { dsd: "Nuwara Eliya", district: "Nuwara Eliya" },
    "vavuniya south": { dsd: "Vavuniya South", district: "Vavuniya" },
    "rambukkana": { dsd: "Rambukkana", district: "Kegalle" },
    "dodangoda": { dsd: "Dodangoda", district: "Kalutara" },
    "ukuwela": { dsd: "Ukuwela", district: "Matale" },
    "dimbulagala": { dsd: "Dimbulagala", district: "Polonnaruwa" },
    "vadamaradchi south-west (karaveddy)": { dsd: "Vadamaradchi South-West (Karaveddy)", district: "Jaffna" },
    "gampaha": { dsd: "Gampaha", district: "Gampaha" },
    "island south (velanai)": { dsd: "Island South (Velanai)", district: "Jaffna" },
    "koralai pattu (valachchenai)": { dsd: "Koralai Pattu (Valachchenai)", district: "Batticaloa" },
    "weeraketiya": { dsd: "Weeraketiya", district: "Hambantota" },
    "kurunegala": { dsd: "Kurunegala", district: "Kurunegala" },
    "nattandiya": { dsd: "Nattandiya", district: "Puttalam" },
    "nildandahinna": { dsd: "Nildandahinna", district: "Nuwara Eliya" },
    "pasbage korale": { dsd: "Pasbage Korale", district: "Kandy" },
    "matara four gravets": { dsd: "Matara Four Gravets", district: "Matara" },
    "hakmana": { dsd: "Hakmana", district: "Matara" },
    "bingiriya": { dsd: "Bingiriya", district: "Kurunegala" },
    "sri jayawardanapura kotte": { dsd: "Sri Jayawardanapura Kotte", district: "Colombo" },
    "deltota": { dsd: "Deltota", district: "Kandy" },
    "badalkumbura": { dsd: "Badalkumbura", district: "Moneragala" },
    "vavuniya north": { dsd: "Vavuniya North", district: "Vavuniya" },
    "karainagar": { dsd: "Karainagar", district: "Jaffna" },
    "nivithigala": { dsd: "Nivithigala", district: "Ratnapura" },
    "ampara": { dsd: "Ampara", district: "Ampara" },
    "bibile": { dsd: "Bibile", district: "Moneragala" },
    "elapatha": { dsd: "Elapatha", district: "Ratnapura" },
    "ganewatta": { dsd: "Ganewatta", district: "Kurunegala" },
    "pasgoda": { dsd: "Pasgoda", district: "Matara" },
    "kuliyapitiya west": { dsd: "Kuliyapitiya West", district: "Kurunegala" },
    "samanthurai": { dsd: "Samanthurai", district: "Ampara" },
    "nikaweratiya": { dsd: "Nikaweratiya", district: "Kurunegala" },
    "colombo": { dsd: "Colombo", district: "Colombo" },
    "nuwaragam palatha east": { dsd: "Nuwaragam Palatha East", district: "Anuradhapura" },
    "panadura": { dsd: "Panadura", district: "Kalutara" },
    "udunuwara": { dsd: "Udunuwara", district: "Kandy" },
    "kattankudy": { dsd: "Kattankudy", district: "Batticaloa" },
    "thumpane": { dsd: "Thumpane", district: "Kandy" },
    "moneragala": { dsd: "Moneragala", district: "Moneragala" },
    "panduwasnuwara east": { dsd: "Panduwasnuwara East", district: "Kurunegala" },
    "mallawapitiya": { dsd: "Mallawapitiya", district: "Kurunegala" },
    "haputale": { dsd: "Haputale", district: "Badulla" },
    "padiyathalawa": { dsd: "Padiyathalawa", district: "Ampara" },
    "welivitiya-divithura": { dsd: "Welivitiya-Divithura", district: "Galle" },
    "mannar town": { dsd: "Mannar Town", district: "Mannar" },
    "medadumbara": { dsd: "Medadumbara", district: "Kandy" },
    "walallavita": { dsd: "Walallavita", district: "Kalutara" },
    "pelmadulla": { dsd: "Pelmadulla", district: "Ratnapura" },
    "chilaw": { dsd: "Chilaw", district: "Puttalam" },
    "thalawakelle": { dsd: "Thalawakelle", district: "Nuwara Eliya" },
    "damana": { dsd: "Damana", district: "Ampara" },
    "kandy four gravets & gangawata korale": { dsd: "Kandy Four Gravets & Gangawata Korale", district: "Kandy" },
    "buttala": { dsd: "Buttala", district: "Moneragala" },
    "panduwasnuwara west": { dsd: "Panduwasnuwara West", district: "Kurunegala" },
    "haldummulla": { dsd: "Haldummulla", district: "Badulla" },
    "vavuniya": { dsd: "Vavuniya", district: "Vavuniya" },
    "harispattuwa": { dsd: "Harispattuwa", district: "Kandy" },
    "ambanganga korale": { dsd: "Ambanganga Korale", district: "Matale" },
    "imaduwa": { dsd: "Imaduwa", district: "Galle" },
    "manmunai south & eruvil pattu": { dsd: "Manmunai South & Eruvil pattu", district: "Batticaloa" },
    "lankapura": { dsd: "Lankapura", district: "Polonnaruwa" },
    "thambuttegama": { dsd: "Thambuttegama", district: "Anuradhapura" },
    "mahiyanganaya": { dsd: "Mahiyanganaya", district: "Badulla" },
    "elpitiya": { dsd: "Elpitiya", district: "Galle" },
    "kothmale west": { dsd: "Kothmale West", district: "Nuwara Eliya" },
    "rajanganaya": { dsd: "Rajanganaya", district: "Anuradhapura" },
    "galewela": { dsd: "Galewela", district: "Matale" },
    "pujapitiya": { dsd: "Pujapitiya", district: "Kandy" },
    "vadamaradchi north (point pedro)": { dsd: "Vadamaradchi North (Point Pedro)", district: "Jaffna" },
    "tangalle": { dsd: "Tangalle", district: "Hambantota" },
    "walasmulla": { dsd: "Walasmulla", district: "Hambantota" },
    "mawanella": { dsd: "Mawanella", district: "Kegalle" },
    "naula": { dsd: "Naula", district: "Matale" },
    "dankotuwa": { dsd: "Dankotuwa", district: "Puttalam" },
    "weligama": { dsd: "Weligama", district: "Matara" },
    "nallur": { dsd: "Nallur", district: "Jaffna" },
    "gonapeenuwala": { dsd: "Gonapeenuwala", district: "Galle" },
    "maho": { dsd: "Maho", district: "Kurunegala" },
    "narammala": { dsd: "Narammala", district: "Kurunegala" },
    "thimbirigasyaya": { dsd: "Thimbirigasyaya", district: "Colombo" },
    "padaviya": { dsd: "Padaviya", district: "Anuradhapura" },
    "karandeniya": { dsd: "Karandeniya", district: "Galle" },
    "thirappane": { dsd: "Thirappane", district: "Anuradhapura" },
    "navithanveli": { dsd: "Navithanveli", district: "Ampara" },
    "aranayaka": { dsd: "Aranayaka", district: "Kegalle" },
    "manmunai north": { dsd: "Manmunai North", district: "Batticaloa" },
    "muttur": { dsd: "Muttur", district: "Trincomalee" },
    "medirigiriya": { dsd: "Medirigiriya", district: "Polonnaruwa" },
    "eravur town": { dsd: "Eravur Town", district: "Batticaloa" },
    "kalmunai north": { dsd: "Kalmunai North", district: "Ampara" },
    "hambantota": { dsd: "Hambantota", district: "Hambantota" },
    "valikamam south-west (sandilipay)": { dsd: "Valikamam South-West (Sandilipay)", district: "Jaffna" },
    "moratuwa": { dsd: "Moratuwa", district: "Colombo" },
    "nagoda": { dsd: "Nagoda", district: "Galle" },
    "kalmunai": { dsd: "Kalmunai", district: "Ampara" },
    "ingiriya": { dsd: "Ingiriya", district: "Kalutara" },
    "koralai pattu south (kiran)": { dsd: "Koralai Pattu South (Kiran)", district: "Batticaloa" },
    "athuraliya": { dsd: "Athuraliya", district: "Matara" },
    "kuruvita": { dsd: "Kuruvita", district: "Ratnapura" },
    "vadamaradchi east": { dsd: "Vadamaradchi East", district: "Jaffna" },
    "thunukkai": { dsd: "Thunukkai", district: "Mullaitivu" },
    "madhu": { dsd: "Madhu", district: "Mannar" },
    "irakkamam": { dsd: "Irakkamam", district: "Ampara" },
    "pitabeddara": { dsd: "Pitabeddara", district: "Matara" },
    "wilgamuwa": { dsd: "Wilgamuwa", district: "Matale" },
    "minipe": { dsd: "Minipe", district: "Kandy" },
    "kaduwela": { dsd: "Kaduwela", district: "Colombo" },
    "seruvila": { dsd: "Seruvila", district: "Trincomalee" },
    "delft": { dsd: "Delft", district: "Jaffna" },
    "akuressa": { dsd: "Akuressa", district: "Matara" },
    "siyambalanduwa": { dsd: "Siyambalanduwa", district: "Moneragala" },
    "baddegama": { dsd: "Baddegama", district: "Galle" },
    "rasnayakapura": { dsd: "Rasnayakapura", district: "Kurunegala" },
    "medawachchiya": { dsd: "Medawachchiya", district: "Anuradhapura" },
    "ambanpola": { dsd: "Ambanpola", district: "Kurunegala" },
    "kahatagasdigiliya": { dsd: "Kahatagasdigiliya", district: "Anuradhapura" },
    "yakkalamulla": { dsd: "Yakkalamulla", district: "Galle" },
    "polgahawela": { dsd: "Polgahawela", district: "Kurunegala" },
    "uva paranagama": { dsd: "Uva Paranagama", district: "Badulla" },
    "okewela": { dsd: "Okewela", district: "Hambantota" },
    "lunugala": { dsd: "Lunugala", district: "Badulla" },
    "ja-ela": { dsd: "Ja-Ela", district: "Gampaha" },
    "wennappuwa": { dsd: "Wennappuwa", district: "Puttalam" },
    "alayadiwembu": { dsd: "Alayadiwembu", district: "Ampara" },
    "pathadumbara": { dsd: "Pathadumbara", district: "Kandy" },
    "kekirawa": { dsd: "Kekirawa", district: "Anuradhapura" },
    "nochchiyagama": { dsd: "Nochchiyagama", district: "Anuradhapura" },
    "mathurata": { dsd: "Mathurata", district: "Nuwara Eliya" },
    "godakawela": { dsd: "Godakawela", district: "Ratnapura" },
    "nanattan": { dsd: "Nanattan", district: "Mannar" },
    "eravur pattu": { dsd: "Eravur Pattu", district: "Batticaloa" },
    "sainthamaruthu": { dsd: "Sainthamaruthu", district: "Ampara" },
    "akurana": { dsd: "Akurana", district: "Kandy" },
    "bentota": { dsd: "Bentota", district: "Galle" },
    "mahaoya": { dsd: "Mahaoya", district: "Ampara" },
    "thirukkovil": { dsd: "Thirukkovil", district: "Ampara" },
    "kesbewa": { dsd: "Kesbewa", district: "Colombo" },
    "kahawatta": { dsd: "Kahawatta", district: "Ratnapura" },
    "kobeigane": { dsd: "Kobeigane", district: "Kurunegala" },
    "kamburupitiya": { dsd: "Kamburupitiya", district: "Matara" },
    "madurawala": { dsd: "Madurawala", district: "Kalutara" },
    "weligepola": { dsd: "Weligepola", district: "Ratnapura" },
    "sooriyawewa": { dsd: "Sooriyawewa", district: "Hambantota" },
    "gomarankadawala": { dsd: "Gomarankadawala", district: "Trincomalee" },
    "mirigama": { dsd: "Mirigama", district: "Gampaha" },
    "hanguranketha": { dsd: "Hanguranketha", district: "Nuwara Eliya" },
    "hali-ela": { dsd: "Hali-Ela", district: "Badulla" },
    "thalawa": { dsd: "Thalawa", district: "Anuradhapura" },
    "palugaswewa": { dsd: "Palugaswewa", district: "Anuradhapura" },
    "nuwaragam palatha central": { dsd: "Nuwaragam Palatha Central", district: "Anuradhapura" },
    "karaitheevu": { dsd: "Karaitheevu", district: "Ampara" },
    "homagama": { dsd: "Homagama", district: "Colombo" },
    "kundasale": { dsd: "Kundasale", district: "Kandy" },
    "ambagamuwa koralaya": { dsd: "Ambagamuwa Koralaya", district: "Nuwara Eliya" },
    "manthai east": { dsd: "Manthai East", district: "Mullaitivu" },
    "arachchikattuwa": { dsd: "Arachchikattuwa", district: "Puttalam" },
    "laggala-pallegama": { dsd: "Laggala-Pallegama", district: "Matale" },
    "welioya": { dsd: "Welioya", district: "Mullaitivu" },
    "katharagama": { dsd: "Katharagama", district: "Moneragala" },
    "galle four gravets": { dsd: "Galle Four Gravets", district: "Galle" },
    "kolonna": { dsd: "Kolonna", district: "Ratnapura" },
    "wanduramba": { dsd: "Wanduramba", district: "Galle" },
    "nachchaduwa": { dsd: "Nachchaduwa", district: "Anuradhapura" },
    "rideemaliyadda": { dsd: "Rideemaliyadda", district: "Badulla" },
    "doluwa": { dsd: "Doluwa", district: "Kandy" },
    "ninthavur": { dsd: "Ninthavur", district: "Ampara" },
    "embilipitiya": { dsd: "Embilipitiya", district: "Ratnapura" },
    "thenmaradchi (chavakachcheri)": { dsd: "Thenmaradchi (Chavakachcheri)", district: "Jaffna" },
    "kiriella": { dsd: "Kiriella", district: "Ratnapura" },
    "valikamam south (uduvil)": { dsd: "Valikamam South (Uduvil)", district: "Jaffna" },
    "welikanda": { dsd: "Welikanda", district: "Polonnaruwa" },
    "hingurakgoda": { dsd: "Hingurakgoda", district: "Polonnaruwa" },
    "uhana": { dsd: "Uhana", district: "Ampara" },
    "porativu pattu": { dsd: "Porativu Pattu", district: "Batticaloa" },
    "dehiwala": { dsd: "Dehiwala", district: "Colombo" },
    "giribawa": { dsd: "Giribawa", district: "Kurunegala" },
    "ratnapura": { dsd: "Ratnapura", district: "Ratnapura" },
    "addalachchenai": { dsd: "Addalachchenai", district: "Ampara" },
    "horowpothana": { dsd: "Horowpothana", district: "Anuradhapura" },
    "vengalacheddikulam": { dsd: "Vengalacheddikulam", district: "Vavuniya" },
    "mahakumbukkadawala": { dsd: "Mahakumbukkadawala", district: "Puttalam" },
    "pallama": { dsd: "Pallama", district: "Puttalam" },
    "bamunakotuwa": { dsd: "Bamunakotuwa", district: "Kurunegala" },
    "kegalle": { dsd: "Kegalle", district: "Kegalle" },
    "matale": { dsd: "Matale", district: "Matale" },
    "ayagama": { dsd: "Ayagama", district: "Ratnapura" },
    "musali": { dsd: "Musali", district: "Mannar" },
    "mahara": { dsd: "Mahara", district: "Gampaha" },
    "karachchi": { dsd: "Karachchi", district: "Kilinochchi" },
    "ibbagamuwa": { dsd: "Ibbagamuwa", district: "Kurunegala" },
    "rathgama": { dsd: "Rathgama", district: "Galle" },
    "puthukkudiyiruppu": { dsd: "Puthukkudiyiruppu", district: "Mullaitivu" },
    "kaltota": { dsd: "Kaltota", district: "Ratnapura" },
    "pachchilaipalli": { dsd: "Pachchilaipalli", district: "Kilinochchi" },
    "walapane": { dsd: "Walapane", district: "Nuwara Eliya" },
    "negombo": { dsd: "Negombo", district: "Gampaha" },
    "kandaketiya": { dsd: "Kandaketiya", district: "Badulla" },
    "warakapola": { dsd: "Warakapola", district: "Kegalle" },
    "kebithigollewa": { dsd: "Kebithigollewa", district: "Anuradhapura" },
    "jaffna": { dsd: "Jaffna", district: "Jaffna" },
    "galgamuwa": { dsd: "Galgamuwa", district: "Kurunegala" },
    "balapitiya": { dsd: "Balapitiya", district: "Galle" },
    "medagama": { dsd: "Medagama", district: "Moneragala" },
    "manmunai pattu (araipattai)": { dsd: "Manmunai Pattu (Araipattai)", district: "Batticaloa" },
    "hatharaliyadda": { dsd: "Hatharaliyadda", district: "Kandy" },
    "palindanuwara": { dsd: "Palindanuwara", district: "Kalutara" },
    "padavi sri pura": { dsd: "Padavi Sri Pura", district: "Trincomalee" },
    "beruwala": { dsd: "Beruwala", district: "Kalutara" },
    "angunakolapelessa": { dsd: "Angunakolapelessa", district: "Hambantota" },
    "manthai west": { dsd: "Manthai West", district: "Mannar" },
    "mahawewa": { dsd: "Mahawewa", district: "Puttalam" },
    "thamankaduwa": { dsd: "Thamankaduwa", district: "Polonnaruwa" },
    "kothmale east": { dsd: "Kothmale East", district: "Nuwara Eliya" },
    "mulatiyana": { dsd: "Mulatiyana", district: "Matara" },
    "bulathsinhala": { dsd: "Bulathsinhala", district: "Kalutara" },
    "poonakary": { dsd: "Poonakary", district: "Kilinochchi" },
    "lunugamvehera": { dsd: "Lunugamvehera", district: "Hambantota" },
    "dickwella": { dsd: "Dickwella", district: "Matara" },
    "bulathkohupitiya": { dsd: "Bulathkohupitiya", district: "Kegalle" },
    "norwood": { dsd: "Norwood", district: "Nuwara Eliya" },
    "wellawaya": { dsd: "Wellawaya", district: "Moneragala" },
    "katuwana": { dsd: "Katuwana", district: "Hambantota" },
    "valikamam east (kopay)": { dsd: "Valikamam East (Kopay)", district: "Jaffna" },
    "devinuwara": { dsd: "Devinuwara", district: "Matara" },
    "kelaniya": { dsd: "Kelaniya", district: "Gampaha" },
    "koralai pattu west (oddamavadi)": { dsd: "Koralai Pattu West (Oddamavadi)", district: "Batticaloa" },
    "rambewa": { dsd: "Rambewa", district: "Anuradhapura" },
    "thanamalvila": { dsd: "Thanamalvila", district: "Moneragala" },
    "millaniya": { dsd: "Millaniya", district: "Kalutara" },
    "meegahakivula": { dsd: "Meegahakivula", district: "Badulla" },
    "dehiattakandiya": { dsd: "Dehiattakandiya", district: "Ampara" },
    "ganga ihala korale": { dsd: "Ganga Ihala Korale", district: "Kandy" },
    "alawwa": { dsd: "Alawwa", district: "Kurunegala" },
    "wattala": { dsd: "Wattala", district: "Gampaha" },
    "thambalagamuwa": { dsd: "Thambalagamuwa", district: "Trincomalee" },
    "soranathota": { dsd: "Soranathota", district: "Badulla" },
    "kalpitiya": { dsd: "Kalpitiya", district: "Puttalam" },
    "pallepola": { dsd: "Pallepola", district: "Matale" },
    "akkaraipattu": { dsd: "Akkaraipattu", district: "Ampara" },
    "lahugala": { dsd: "Lahugala", district: "Ampara" },
    "island north (kayts)": { dsd: "Island North (Kayts)", district: "Jaffna" },
    "galenbindunuwewa": { dsd: "Galenbindunuwewa", district: "Anuradhapura" },
    "madampagama": { dsd: "Madampagama", district: "Galle" },
    "kinniya": { dsd: "Kinniya", district: "Trincomalee" },
    "pothuvil": { dsd: "Pothuvil", district: "Ampara" },
    "manmunai west": { dsd: "Manmunai West", district: "Batticaloa" },
    "kandavalai": { dsd: "Kandavalai", district: "Kilinochchi" },
    "galigamuwa": { dsd: "Galigamuwa", district: "Kegalle" },
    "mundel": { dsd: "Mundel", district: "Puttalam" },
    "rattota": { dsd: "Rattota", district: "Matale" },
    "morawewa": { dsd: "Morawewa", district: "Trincomalee" },
    "elahera": { dsd: "Elahera", district: "Polonnaruwa" },
    "badulla": { dsd: "Badulla", district: "Badulla" },
    "bope-poddala": { dsd: "Bope-Poddala", district: "Galle" },
    "madampe": { dsd: "Madampe", district: "Puttalam" },
    "welimada": { dsd: "Welimada", district: "Badulla" },
    "sevanagala": { dsd: "Sevanagala", district: "Moneragala" },
    "minuwangoda": { dsd: "Minuwangoda", district: "Gampaha" },
    "mathugama": { dsd: "Mathugama", district: "Kalutara" },
    "divulapitiya": { dsd: "Divulapitiya", district: "Gampaha" },
    "imbulpe": { dsd: "Imbulpe", district: "Ratnapura" },
    "hikkaduwa": { dsd: "Hikkaduwa", district: "Galle" },
    "bandarawela": { dsd: "Bandarawela", district: "Badulla" },
    "ipalogama": { dsd: "Ipalogama", district: "Anuradhapura" },
    "attanagalla": { dsd: "Attanagalla", district: "Gampaha" },
    "maharagama": { dsd: "Maharagama", district: "Colombo" },
    "puttalam": { dsd: "Puttalam", district: "Puttalam" },
    "kalutara": { dsd: "Kalutara", district: "Kalutara" },
    "maspotha": { dsd: "Maspotha", district: "Kurunegala" },
    "dehiovita": { dsd: "Dehiovita", district: "Kegalle" },
    "padukka": { dsd: "Padukka", district: "Colombo" },
    "polpithigama": { dsd: "Polpithigama", district: "Kurunegala" },
    "anamaduwa": { dsd: "Anamaduwa", district: "Puttalam" },
    "katana": { dsd: "Katana", district: "Gampaha" },
    "yatiyanthota": { dsd: "Yatiyanthota", district: "Kegalle" },
    "udapalatha": { dsd: "Udapalatha", district: "Kandy" },
    "kotapola": { dsd: "Kotapola", district: "Matara" },
    "panvila": { dsd: "Panvila", district: "Kandy" },
    "kuchchaveli": { dsd: "Kuchchaveli", district: "Trincomalee" },
    "karuwalagaswewa": { dsd: "Karuwalagaswewa", district: "Puttalam" },
    "mawathagama": { dsd: "Mawathagama", district: "Kurunegala" },
    "balangoda": { dsd: "Balangoda", district: "Ratnapura" },
    "palagala": { dsd: "Palagala", district: "Anuradhapura" },
    "vanathawilluwa": { dsd: "Vanathawilluwa", district: "Puttalam" },
    "bandaragama": { dsd: "Bandaragama", district: "Kalutara" },
    "beliatta": { dsd: "Beliatta", district: "Hambantota" },
    "thissamaharama": { dsd: "Thissamaharama", district: "Hambantota" },
    "ella": { dsd: "Ella", district: "Badulla" },
    "dompe": { dsd: "Dompe", district: "Gampaha" },
    "udadumbara": { dsd: "Udadumbara", district: "Kandy" },
    "trincomalee town and gravets": { dsd: "Trincomalee Town and Gravets", district: "Trincomalee" },
    "madulla": { dsd: "Madulla", district: "Moneragala" }
  }
};

// Build DSD_LIST for easy iteration (optional, not used in dashboard)
CONFIG.DSD_LIST = Object.keys(CONFIG.DSD_MAP).map(key => ({
  dsd: CONFIG.DSD_MAP[key].dsd,
  district: CONFIG.DSD_MAP[key].district,
}));
