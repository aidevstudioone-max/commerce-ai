const PRODUCTS_KEY = "commerceai_products";
const WEIGHTS_KEY = "commerceai_weights";

const DEFAULT_WEIGHTS = { sales: 20, rating: 20, conversion: 20, listing: 20, returns: 20 };

// ---------- Seed data ----------
// Every feature string below is the only "factual" information the AI generator is allowed
// to draw from — mirrors the real product's rule of never inventing specs or claims.
function seedProductDefinitions() {
  return [
    {
      id: "P-1001", name: "AeroFit Wireless Earbuds Pro", typeNoun: "Wireless Earbuds", category: "Electronics", price: 2499,
      features: ["24-hour battery life with the charging case", "active noise cancellation", "IPX5 sweat and splash resistance", "stable Bluetooth 5.3 connection", "touch controls for calls and music"],
      listing: { title: "Earbuds", bullets: ["Good sound", "Long battery"], description: "", keywords: ["earbuds"] },
      sales: { orders: 412, units: 430, returnRatePct: 4.2, trend: [38000, 41000, 36000, 29000, 25000, 17400] },
      rating: { avg: 4.3, count: 612, dist: { 5: 360, 4: 150, 3: 60, 2: 25, 1: 17 } },
      reviewThemes: {
        positive: [{ tag: "battery life", count: 120 }, { tag: "sound quality", count: 95 }, { tag: "comfort", count: 60 }],
        negative: [{ tag: "charging case", count: 38 }, { tag: "connectivity drops", count: 24 }, { tag: "call clarity", count: 12 }],
      },
    },
    {
      id: "P-1002", name: "TerraGrip Non-Slip Yoga Mat", typeNoun: "Yoga Mat", category: "Sports & Fitness", price: 1299,
      features: ["6mm non-slip textured surface", "eco-friendly TPE material", "reversible dual-color design", "included carry strap", "lightweight build at 1.1kg"],
      listing: {
        title: "TerraGrip 6mm Non-Slip Yoga Mat — Eco-Friendly TPE, Reversible, With Carry Strap",
        bullets: [
          "6mm non-slip textured surface for secure grip in every pose",
          "Eco-friendly TPE material, free from harmful PVC",
          "Reversible dual-color design gives you two mats in one",
          "Includes a carry strap for easy transport to and from class",
          "Lightweight at 1.1kg — doesn't weigh down your gym bag",
        ],
        description: "The TerraGrip Yoga Mat is built for daily practice. A 6mm cushioned, non-slip surface supports joints during floor work, while the reversible design and eco-friendly TPE material make it a durable, low-impact choice. A carry strap is included so it travels as easily as it rolls out.",
        keywords: ["yoga mat", "non-slip mat", "tpe yoga mat", "eco-friendly mat", "6mm yoga mat", "exercise mat"],
      },
      sales: { orders: 305, units: 310, returnRatePct: 1.8, trend: [13500, 14200, 15100, 16400, 15800, 17100] },
      rating: { avg: 4.7, count: 480, dist: { 5: 390, 4: 70, 3: 14, 2: 4, 1: 2 } },
      reviewThemes: {
        positive: [{ tag: "grip", count: 140 }, { tag: "thickness", count: 88 }, { tag: "value for money", count: 70 }],
        negative: [{ tag: "smell when new", count: 14 }, { tag: "edge fraying over time", count: 6 }],
      },
    },
    {
      id: "P-1003", name: "GlowPeak LED Desk Lamp", typeNoun: "Desk Lamp", category: "Home & Office", price: 1899,
      features: ["3 adjustable color temperature modes", "touch dimmer control", "USB-C charging port", "flexible adjustable arm", "eye-care flicker-free LED"],
      listing: { title: "LED Desk Lamp", bullets: ["Bright light"], description: "", keywords: ["lamp"] },
      sales: { orders: 128, units: 130, returnRatePct: 7.6, trend: [9800, 9200, 8700, 9100, 8600, 8800] },
      rating: { avg: 3.6, count: 214, dist: { 5: 80, 4: 55, 3: 35, 2: 24, 1: 20 } },
      reviewThemes: {
        positive: [{ tag: "brightness control", count: 52 }, { tag: "design", count: 40 }],
        negative: [{ tag: "flickering", count: 46 }, { tag: "arm stability", count: 30 }, { tag: "power adapter", count: 18 }],
      },
    },
    {
      id: "P-1004", name: "Everstride Trail Backpack 28L", typeNoun: "Trail Backpack", category: "Outdoor", price: 2199,
      features: ["water-resistant ripstop fabric", "padded 15-inch laptop sleeve", "adjustable chest and waist straps", "multiple organized compartments", "reflective safety trim"],
      listing: { title: "Trail Backpack 28L", bullets: ["Waterproof", "Laptop pocket"], description: "Backpack for hiking and travel.", keywords: ["backpack", "trail backpack"] },
      sales: { orders: 165, units: 168, returnRatePct: 3.1, trend: [10200, 10800, 11500, 12100, 12900, 13800] },
      rating: { avg: 4.5, count: 298, dist: { 5: 210, 4: 60, 3: 18, 2: 6, 1: 4 } },
      reviewThemes: {
        positive: [{ tag: "durability", count: 80 }, { tag: "organization", count: 64 }, { tag: "comfort", count: 50 }],
        negative: [{ tag: "zipper quality", count: 16 }, { tag: "no rain cover", count: 9 }],
      },
    },
    {
      id: "P-1005", name: "PureSip Insulated Bottle 750ml", typeNoun: "Insulated Bottle", category: "Home & Kitchen", price: 899,
      features: ["24-hour cold / 12-hour hot retention", "leak-proof lid", "BPA-free 18/8 stainless steel", "wide mouth for ice cubes", "matte powder-coat finish"],
      listing: {
        title: "PureSip 750ml Insulated Bottle — 24-Hour Cold, Leak-Proof, BPA-Free Steel",
        bullets: [
          "24-hour cold and 12-hour hot retention for all-day temperature control",
          "Leak-proof lid so it's safe to toss straight into a bag",
          "BPA-free 18/8 stainless steel built to last",
          "Wide mouth makes it easy to add ice cubes and clean",
          "Matte powder-coat finish resists fingerprints and scratches",
        ],
        description: "The PureSip Insulated Bottle keeps drinks cold for 24 hours or hot for 12, thanks to double-wall stainless steel construction. A leak-proof lid and wide mouth make it as practical for the gym as it is for the office, and the matte finish holds up to daily use.",
        keywords: ["insulated bottle", "stainless steel bottle", "leak-proof bottle", "750ml bottle", "bpa-free bottle", "water bottle"],
      },
      sales: { orders: 520, units: 540, returnRatePct: 2.4, trend: [17200, 18100, 19400, 20200, 21100, 22600] },
      rating: { avg: 4.6, count: 890, dist: { 5: 640, 4: 170, 3: 50, 2: 20, 1: 10 } },
      reviewThemes: {
        positive: [{ tag: "insulation performance", count: 210 }, { tag: "leak-proof lid", count: 130 }, { tag: "finish quality", count: 90 }],
        negative: [{ tag: "lid odor over time", count: 28 }, { tag: "weight", count: 14 }],
      },
    },
    {
      id: "P-1006", name: "FlexMount Adjustable Phone Stand", typeNoun: "Phone Stand", category: "Electronics Accessories", price: 499,
      features: ["fully adjustable viewing angle", "foldable aluminum frame", "fits phones up to 7 inches", "anti-slip silicone pads", "also compatible with tablets"],
      listing: { title: "Phone Stand", bullets: [], description: "", keywords: [] },
      sales: { orders: 380, units: 402, returnRatePct: 5.9, trend: [5200, 4900, 4600, 4300, 4000, 3700] },
      rating: { avg: 3.9, count: 340, dist: { 5: 150, 4: 90, 3: 55, 2: 28, 1: 17 } },
      reviewThemes: {
        positive: [{ tag: "stability", count: 70 }, { tag: "portability", count: 45 }],
        negative: [{ tag: "wobbles with heavier phones", count: 38 }, { tag: "hinge loosens over time", count: 22 }, { tag: "paint chipping", count: 10 }],
      },
    },
    {
      id: "P-1007", name: "Nimbus Cooling Memory Foam Pillow", typeNoun: "Memory Foam Pillow", category: "Home", price: 1599,
      features: ["ventilated cooling gel layer", "orthopedic neck support contour", "hypoallergenic removable cover", "machine washable case", "standard size fit"],
      listing: { title: "Nimbus Memory Foam Pillow", bullets: ["Cooling gel layer"], description: "", keywords: ["pillow", "memory foam pillow"] },
      sales: { orders: 142, units: 145, returnRatePct: 8.4, trend: [8600, 8100, 7700, 7300, 6900, 6500] },
      rating: { avg: 3.4, count: 190, dist: { 5: 60, 4: 40, 3: 35, 2: 30, 1: 25 } },
      reviewThemes: {
        positive: [{ tag: "cooling feel", count: 44 }, { tag: "softness", count: 30 }],
        negative: [{ tag: "loses shape", count: 52 }, { tag: "neck support", count: 38 }, { tag: "smell on arrival", count: 20 }],
      },
    },
    {
      id: "P-1008", name: "RapidCharge 65W GaN Charger", typeNoun: "GaN Charger", category: "Electronics", price: 1499,
      features: ["65W fast charging output", "dual USB-C and single USB-A ports", "compact GaN design", "foldable travel plug", "supports laptops, phones and tablets"],
      listing: { title: "65W Charger", bullets: ["Fast charging"], description: "", keywords: ["charger"] },
      sales: { orders: 410, units: 415, returnRatePct: 2.9, trend: [15200, 16400, 17800, 18100, 17600, 18300] },
      rating: { avg: 4.4, count: 505, dist: { 5: 340, 4: 110, 3: 35, 2: 12, 1: 8 } },
      reviewThemes: {
        positive: [{ tag: "charging speed", count: 160 }, { tag: "compact size", count: 100 }],
        negative: [{ tag: "gets warm under load", count: 30 }, { tag: "loose fit in some sockets", count: 14 }],
      },
    },
  ];
}

function seedProductsIfEmpty() {
  if (localStorage.getItem(PRODUCTS_KEY) !== null) return;
  localStorage.setItem(PRODUCTS_KEY, JSON.stringify(seedProductDefinitions()));
}
function loadProducts() {
  return JSON.parse(localStorage.getItem(PRODUCTS_KEY) || "[]");
}
function saveProducts(list) {
  localStorage.setItem(PRODUCTS_KEY, JSON.stringify(list));
}
function loadWeights() {
  return JSON.parse(localStorage.getItem(WEIGHTS_KEY) || "null") || { ...DEFAULT_WEIGHTS };
}
function saveWeights(w) {
  localStorage.setItem(WEIGHTS_KEY, JSON.stringify(w));
}

// ---------- Formatting helpers ----------
function formatINR(n) {
  return "₹" + Math.round(n).toLocaleString("en-IN");
}
function capitalize(s) {
  if (!s) return s;
  return s.charAt(0).toUpperCase() + s.slice(1);
}
function wordCount(s) {
  return (s || "").trim().split(/\s+/).filter(Boolean).length;
}
function clamp(n, lo, hi) {
  return Math.max(lo, Math.min(hi, n));
}
function revenue30d(product) {
  return product.sales.trend.reduce((a, b) => a + b, 0);
}
function revenueChangePct(product) {
  const t = product.sales.trend;
  const first = t[0], last = t[t.length - 1];
  if (!first) return 0;
  return Math.round(((last - first) / first) * 1000) / 10;
}

// ---------- AI Listing Optimizer ----------
// Templates only recombine the seller-supplied `features` array — nothing about
// specs, certifications or claims is invented, matching the factual-accuracy rule.
const TITLE_TEMPLATES = [
  (p) => `${p.name} — ${capitalize(shortFeature(p.features[0]))}, ${shortFeature(p.features[1])} | ${p.typeNoun}`,
  (p) => `${p.name} | ${p.typeNoun} with ${shortFeature(p.features[0])} & ${shortFeature(p.features[1])}`,
  (p) => `${capitalize(shortFeature(p.features[0]))} ${p.typeNoun} — ${p.name}`,
];
const DESC_CLOSERS = [
  (p) => `It's a practical choice for anyone who wants a reliable ${p.typeNoun.toLowerCase()} without compromise.`,
  (p) => `Built from real product details, not marketing filler — what you see is what ships.`,
  (p) => `A straightforward pick for buyers who know exactly what they need from a ${p.typeNoun.toLowerCase()}.`,
];

function shortFeature(feature) {
  return (feature || "").replace(/^(the|a|an)\s+/i, "");
}

function generateListing(product, variant) {
  const v = variant % 3;
  const f = product.features;
  const title = TITLE_TEMPLATES[v](product).slice(0, 150);

  const bullets = f.map((feat, i) => {
    if (v === 2) return `✓ ${capitalize(feat)}`;
    if (v === 1) return `${capitalize(feat.split(" ").slice(0, 2).join(" "))}: ${feat}.`;
    return `${capitalize(feat)}.`;
  });

  const order = v === 1 ? [2, 3, 4, 0, 1] : [0, 1, 2, 3, 4];
  const chosen = order.map((i) => f[i]).filter(Boolean);
  const desc =
    `The ${product.name} is a ${product.typeNoun.toLowerCase()} built around ${chosen.slice(0, 3).join(", ")}. ` +
    `${capitalize(chosen[3] || "")} and ${chosen[4] || "thoughtful design"} round it out. ` +
    DESC_CLOSERS[v](product);

  const keywordSet = new Set();
  product.name.toLowerCase().split(/\s+/).forEach((w) => w.length > 2 && keywordSet.add(w));
  product.typeNoun.toLowerCase().split(/\s+/).forEach((w) => w.length > 2 && keywordSet.add(w));
  product.category.toLowerCase().split(/[\s&]+/).forEach((w) => w.length > 2 && keywordSet.add(w));
  f.forEach((feat) => {
    const words = feat.toLowerCase().replace(/[^a-z0-9\s-]/g, "").split(/\s+/).filter((w) => w.length > 3);
    if (words[0]) keywordSet.add(words[0]);
    if (words[1]) keywordSet.add(words[0] + " " + words[1]);
  });
  const keywords = Array.from(keywordSet).slice(0, 10);

  return { title, bullets, description: desc, keywords };
}

// ---------- Listing Quality Score ----------
function scoreListing(listing) {
  const title = listing.title || "";
  const bullets = listing.bullets || [];
  const description = listing.description || "";
  const keywords = listing.keywords || [];

  const completeness = clamp(
    (title.length >= 25 ? 25 : title.length > 0 ? 12 : 0) +
      clamp(bullets.length * 5, 0, 25) +
      (wordCount(description) >= 50 ? 25 : Math.round((wordCount(description) / 50) * 25)) +
      clamp(keywords.length * 3, 0, 25),
    0,
    100
  );

  let clarity = 100;
  if (bullets.length < 3) clarity -= 30;
  if (bullets.length > 7) clarity -= 10;
  bullets.forEach((b) => {
    if (b.length < 20 || b.length > 130) clarity -= 10;
  });
  clarity = clamp(clarity, 0, 100);

  const coverage = clamp(keywords.length * 12, 0, 100);

  let readability = 0;
  if (description) {
    const sentences = description.split(/[.!?]+/).filter((s) => s.trim().length > 0);
    const words = wordCount(description);
    const avgWords = sentences.length ? words / sentences.length : words;
    readability = Math.round(clamp(100 - Math.abs(avgWords - 15) * 5, 0, 100));
  }

  let consistency = 0;
  if (description || bullets.length) {
    const bodyText = (description + " " + bullets.join(" ")).toLowerCase();
    const titleWords = title.toLowerCase().replace(/[^a-z0-9\s-]/g, "").split(/\s+/).filter((w) => w.length > 3);
    const uniqueTitleWords = Array.from(new Set(titleWords));
    if (uniqueTitleWords.length) {
      const matched = uniqueTitleWords.filter((w) => bodyText.includes(w)).length;
      consistency = clamp(Math.round((matched / uniqueTitleWords.length) * 100), 0, 100);
    }
  }

  const overall = Math.round((completeness + clarity + coverage + readability + consistency) / 5);
  return { completeness, clarity, coverage, readability, consistency, overall };
}

function contentRecommendations(listing) {
  const recs = [];
  const title = listing.title || "";
  const bullets = listing.bullets || [];
  const description = listing.description || "";
  const keywords = listing.keywords || [];
  const s = scoreListing(listing);

  if (title.length < 25) recs.push("Title is short — add a key attribute or benefit to improve search visibility.");
  if (bullets.length < 4) recs.push("Add more bullet points — aim for 4–6 covering distinct features.");
  if (wordCount(description) < 40) recs.push("Description is thin — expand with more detail on materials, use case or care instructions.");
  if (keywords.length < 6) recs.push("Add more targeted keywords to widen search coverage.");
  if (s.consistency < 50 && description) recs.push("Title and description don't share enough language — align wording for consistency.");
  if (!recs.length) recs.push("Listing looks complete — no major gaps detected.");
  return recs;
}

// ---------- Product Health Score ----------
function computeHealthScore(product, weights, maxRevenue) {
  const salesScore = clamp((revenue30d(product) / (maxRevenue || 1)) * 100, 0, 100);
  const ratingScore = clamp((product.rating.avg / 5) * 100, 0, 100);
  const conversionScore = clamp(50 + revenueChangePct(product), 0, 100);
  const listingScore = scoreListing(product.listing).overall;
  const returnsScore = clamp(100 - product.sales.returnRatePct * 10, 0, 100);

  const w = weights;
  const totalW = w.sales + w.rating + w.conversion + w.listing + w.returns || 1;
  const weighted =
    (salesScore * w.sales + ratingScore * w.rating + conversionScore * w.conversion + listingScore * w.listing + returnsScore * w.returns) / totalW;

  return {
    overall: Math.round(weighted),
    breakdown: { salesScore: Math.round(salesScore), ratingScore: Math.round(ratingScore), conversionScore: Math.round(conversionScore), listingScore, returnsScore: Math.round(returnsScore) },
  };
}

// ---------- AI Insights ----------
function generateInsights(products) {
  const insights = [];
  products.forEach((p) => {
    const change = revenueChangePct(p);
    const listingScore = scoreListing(p.listing).overall;
    const topNeg = [...p.reviewThemes.negative].sort((a, b) => b.count - a.count)[0];

    if (change <= -10 && p.rating.avg >= 4.0) {
      insights.push({
        productId: p.id, priority: "High",
        message: `Sales for ${p.name} declined ${Math.abs(change)}% over the last 30 days while its rating held steady at ${p.rating.avg}★. Review pricing, traffic and competitor positioning before changing the listing.`,
      });
    }
    if (p.sales.returnRatePct >= 6 && topNeg) {
      insights.push({
        productId: p.id, priority: "High",
        message: `${p.name} has a ${p.sales.returnRatePct}% return rate — reviews repeatedly mention "${topNeg.tag}". Investigate the underlying product issue and consider clarifying this in the listing.`,
      });
    }
    if (listingScore < 55) {
      insights.push({
        productId: p.id, priority: "Medium",
        message: `${p.name}'s listing quality score is ${listingScore}/100 — the title and description are under-optimized. Run the AI Listing Optimizer to improve it.`,
      });
    }
    if (change >= 15) {
      insights.push({
        productId: p.id, priority: "Low",
        message: `${p.name} is trending up ${change}% over the last 30 days — consider broadening keyword coverage to capture more of this demand.`,
      });
    }
  });
  const order = { High: 0, Medium: 1, Low: 2 };
  return insights.sort((a, b) => order[a.priority] - order[b.priority]).slice(0, 6);
}

// ---------- Sparkline ----------
function sparklineSVG(trend, color) {
  const w = 108, h = 32, pad = 3;
  const min = Math.min(...trend), max = Math.max(...trend);
  const range = max - min || 1;
  const pts = trend
    .map((v, i) => {
      const x = pad + (i / (trend.length - 1)) * (w - pad * 2);
      const y = h - pad - ((v - min) / range) * (h - pad * 2);
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");
  return `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" fill="none"><polyline points="${pts}" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
}

// ---------- Toast ----------
let toastTimer;
function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}

// ---------- State ----------
let selectedProductId = null;
let currentVariant = 0;
let pendingListing = null;

// ---------- Dashboard ----------
function renderDashboard() {
  const products = loadProducts();
  const weights = loadWeights();
  const maxRevenue = Math.max(...products.map(revenue30d));

  const totalRevenue = products.reduce((a, p) => a + revenue30d(p), 0);
  const avgListingScore = Math.round(products.reduce((a, p) => a + scoreListing(p.listing).overall, 0) / products.length);
  const avgRating = (products.reduce((a, p) => a + p.rating.avg, 0) / products.length).toFixed(1);

  document.getElementById("dashStats").innerHTML = `
    <div class="stat-card"><div class="stat-label"><svg class="icon"><use href="#icon-box"/></svg> Total Products</div><div class="stat-value">${products.length}</div></div>
    <div class="stat-card"><div class="stat-label"><svg class="icon"><use href="#icon-spark"/></svg> Avg Listing Score</div><div class="stat-value">${avgListingScore}</div></div>
    <div class="stat-card"><div class="stat-label"><svg class="icon"><use href="#icon-chart"/></svg> 30-Day Revenue</div><div class="stat-value">${formatINR(totalRevenue)}</div></div>
    <div class="stat-card"><div class="stat-label"><svg class="icon"><use href="#icon-star"/></svg> Avg Rating</div><div class="stat-value">${avgRating}★</div></div>`;

  const ranked = [...products].sort((a, b) => computeHealthScore(a, weights, maxRevenue).overall - computeHealthScore(b, weights, maxRevenue).overall);
  document.getElementById("healthLeaderboard").innerHTML = ranked
    .slice(0, 5)
    .map((p) => {
      const h = computeHealthScore(p, weights, maxRevenue).overall;
      const cls = h >= 70 ? "good" : h >= 45 ? "warn" : "bad";
      return `<div class="health-row">
        <div class="health-row-name">${p.name}</div>
        <div class="health-bar-track"><div class="health-bar-fill ${cls}" style="width:${h}%"></div></div>
        <div class="health-row-score ${cls}">${h}</div>
      </div>`;
    })
    .join("");

  const insights = generateInsights(products);
  const insightsEl = document.getElementById("insightsFeed");
  if (!insights.length) {
    insightsEl.innerHTML = `<div class="empty-state">No urgent insights right now — all products are performing within healthy ranges.</div>`;
  } else {
    insightsEl.innerHTML = insights
      .map((ins) => {
        const p = products.find((pp) => pp.id === ins.productId);
        return `<div class="insight-card ${ins.priority.toLowerCase()}">
          <div class="insight-top"><span class="insight-priority ${ins.priority.toLowerCase()}">${ins.priority} priority</span></div>
          <p>${ins.message}</p>
          <button class="btn btn-outline btn-sm" data-view-product="${p.id}">View ${p.name}</button>
        </div>`;
      })
      .join("");
    insightsEl.querySelectorAll("[data-view-product]").forEach((btn) =>
      btn.addEventListener("click", () => {
        switchView("listings");
        selectProduct(btn.dataset.viewProduct);
      })
    );
  }

  renderWeightSliders();
}

function renderWeightSliders() {
  const weights = loadWeights();
  ["sales", "rating", "conversion", "listing", "returns"].forEach((key) => {
    const slider = document.getElementById("w-" + key);
    const label = document.getElementById("w-" + key + "-val");
    if (!slider) return;
    slider.value = weights[key];
    label.textContent = weights[key] + "%";
  });
}

// ---------- Listings (master-detail optimizer) ----------
function renderProductList() {
  const products = loadProducts();
  const weights = loadWeights();
  const maxRevenue = Math.max(...products.map(revenue30d));
  const wrap = document.getElementById("productList");
  wrap.innerHTML = products
    .map((p) => {
      const score = scoreListing(p.listing).overall;
      const health = computeHealthScore(p, weights, maxRevenue).overall;
      const scoreCls = score >= 70 ? "good" : score >= 45 ? "warn" : "bad";
      return `<button class="product-row ${p.id === selectedProductId ? "active" : ""}" data-id="${p.id}">
        <div>
          <div class="product-row-name">${p.name}</div>
          <div class="product-row-meta">${p.category} · ${formatINR(p.price)}</div>
        </div>
        <div class="product-row-badges">
          <span class="badge-score ${scoreCls}" title="Listing score">${score}</span>
          <span class="badge-health" title="Health score">${health}</span>
        </div>
      </button>`;
    })
    .join("");
  wrap.querySelectorAll(".product-row").forEach((btn) => btn.addEventListener("click", () => selectProduct(btn.dataset.id)));
}

function selectProduct(id) {
  selectedProductId = id;
  currentVariant = 0;
  pendingListing = null;
  renderProductList();
  renderDetailPanel();
}

function renderDetailPanel() {
  const detail = document.getElementById("productDetail");
  const products = loadProducts();
  const product = products.find((p) => p.id === selectedProductId);
  if (!product) {
    detail.innerHTML = `<div class="empty-state">Select a product from the list to view and optimize its listing.</div>`;
    return;
  }

  const current = product.listing;
  const currentScore = scoreListing(current);
  const gen = pendingListing;
  const genScore = gen ? scoreListing(gen) : null;
  const recs = contentRecommendations(gen || current);

  detail.innerHTML = `
    <div class="detail-head">
      <div>
        <h2>${product.name}</h2>
        <p class="detail-sub">${product.category} · ${formatINR(product.price)} · ${product.features.length} known features</p>
      </div>
      <div class="detail-actions">
        <button class="btn btn-primary btn-sm" id="btnGenerate">Generate AI Listing</button>
        ${gen ? `<button class="btn btn-outline btn-sm" id="btnRegenerate">Regenerate</button>` : ""}
        ${gen ? `<button class="btn btn-primary btn-sm" id="btnApprove">Approve &amp; Publish</button>` : ""}
      </div>
    </div>

    <div class="listing-columns">
      <div class="listing-col">
        <div class="listing-col-head"><h3>Current listing</h3><span class="score-pill ${scoreClass(currentScore.overall)}">${currentScore.overall}</span></div>
        ${listingBlock(current)}
      </div>
      <div class="listing-col">
        <div class="listing-col-head"><h3>${gen ? "AI-generated listing" : "AI-generated listing"}</h3>${gen ? `<span class="score-pill ${scoreClass(genScore.overall)}">${genScore.overall}</span>` : ""}</div>
        ${gen ? listingBlock(gen) : `<div class="empty-state small">Click "Generate AI Listing" to create an optimized title, bullets, description and keywords from this product's known features.</div>`}
      </div>
    </div>

    <div class="score-breakdown">
      <h3>Listing quality score breakdown</h3>
      ${scoreBars(gen ? genScore : currentScore)}
    </div>

    <div class="recs-panel">
      <h3>Content recommendations</h3>
      <ul>${recs.map((r) => `<li>${r}</li>`).join("")}</ul>
    </div>
  `;

  document.getElementById("btnGenerate").addEventListener("click", () => {
    pendingListing = generateListing(product, currentVariant);
    renderDetailPanel();
  });
  const btnRegen = document.getElementById("btnRegenerate");
  if (btnRegen) btnRegen.addEventListener("click", () => {
    currentVariant += 1;
    pendingListing = generateListing(product, currentVariant);
    renderDetailPanel();
  });
  const btnApprove = document.getElementById("btnApprove");
  if (btnApprove) btnApprove.addEventListener("click", () => {
    const list = loadProducts();
    const idx = list.findIndex((p) => p.id === product.id);
    list[idx].listing = pendingListing;
    saveProducts(list);
    pendingListing = null;
    renderProductList();
    renderDetailPanel();
    renderDashboard();
    showToast(`${product.name}'s listing published`);
  });
}

function scoreClass(score) {
  return score >= 70 ? "good" : score >= 45 ? "warn" : "bad";
}

function listingBlock(listing) {
  return `
    <div class="listing-field"><label>Title</label><p class="listing-title">${listing.title || "<span class='muted'>No title set</span>"}</p></div>
    <div class="listing-field"><label>Bullet points</label>${
      listing.bullets && listing.bullets.length
        ? `<ul class="listing-bullets">${listing.bullets.map((b) => `<li>${b}</li>`).join("")}</ul>`
        : `<p class="muted">No bullet points yet</p>`
    }</div>
    <div class="listing-field"><label>Description</label><p class="listing-desc">${listing.description || "<span class='muted'>No description yet</span>"}</p></div>
    <div class="listing-field"><label>Keywords</label>${
      listing.keywords && listing.keywords.length
        ? `<div class="keyword-pills">${listing.keywords.map((k) => `<span class="kw-pill">${k}</span>`).join("")}</div>`
        : `<p class="muted">No keywords yet</p>`
    }</div>`;
}

function scoreBars(score) {
  const rows = [
    ["Completeness", score.completeness],
    ["Clarity", score.clarity],
    ["Keyword coverage", score.coverage],
    ["Readability", score.readability],
    ["Consistency", score.consistency],
  ];
  return rows
    .map(
      ([label, val]) => `<div class="metric-row">
        <span class="metric-label">${label}</span>
        <div class="metric-track"><div class="metric-fill ${scoreClass(val)}" style="width:${val}%"></div></div>
        <span class="metric-val">${val}</span>
      </div>`
    )
    .join("");
}

// ---------- Add product (import) ----------
function handleAddProductSubmit(e) {
  e.preventDefault();
  const name = document.getElementById("newName").value.trim();
  const typeNoun = document.getElementById("newType").value.trim();
  const category = document.getElementById("newCategory").value.trim();
  const price = parseFloat(document.getElementById("newPrice").value);
  const featuresRaw = document.getElementById("newFeatures").value.trim();
  const features = featuresRaw.split("\n").map((f) => f.trim()).filter(Boolean);

  if (!name || !typeNoun || !category || !price || features.length < 3) {
    showToast("Fill in all fields with at least 3 features (one per line)");
    return;
  }

  const products = loadProducts();
  const id = "P-" + (2000 + products.length + Math.floor(Math.random() * 900));
  products.push({
    id, name, typeNoun, category, price,
    features,
    listing: { title: name, bullets: [], description: "", keywords: [] },
    sales: { orders: 0, units: 0, returnRatePct: 0, trend: [0, 0, 0, 0, 0, 0] },
    rating: { avg: 0, count: 0, dist: { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 } },
    reviewThemes: { positive: [], negative: [] },
  });
  saveProducts(products);
  closeAddForm();
  renderProductList();
  renderDashboard();
  selectProduct(id);
  showToast(`${name} imported — ready for AI optimization`);
}
function openAddForm() {
  document.getElementById("addProductForm").classList.add("open");
}
function closeAddForm() {
  document.getElementById("addProductForm").classList.remove("open");
  document.getElementById("productForm").reset();
}

// ---------- Analytics ----------
function renderAnalytics() {
  const products = loadProducts();
  const sorted = [...products].sort((a, b) => revenue30d(b) - revenue30d(a));
  const wrap = document.getElementById("analyticsGrid");
  wrap.innerHTML = sorted
    .map((p) => {
      const change = revenueChangePct(p);
      const trendCls = change > 0 ? "up" : change < 0 ? "down" : "flat";
      const color = change > 0 ? "#22A06B" : change < 0 ? "#DC4C4C" : "#93A2B5";
      return `<div class="analytics-card">
        <div class="analytics-top">
          <div>
            <div class="analytics-name">${p.name}</div>
            <div class="analytics-cat">${p.category}</div>
          </div>
          ${sparklineSVG(p.sales.trend, color)}
        </div>
        <div class="analytics-stats">
          <div><span class="a-label">Revenue (30d)</span><span class="a-val">${formatINR(revenue30d(p))}</span></div>
          <div><span class="a-label">Orders</span><span class="a-val">${p.sales.orders}</span></div>
          <div><span class="a-label">Units sold</span><span class="a-val">${p.sales.units}</span></div>
          <div><span class="a-label">AOV</span><span class="a-val">${p.sales.orders ? formatINR(revenue30d(p) / p.sales.orders) : "—"}</span></div>
          <div><span class="a-label">Return rate</span><span class="a-val">${p.sales.returnRatePct}%</span></div>
          <div><span class="a-label">Trend</span><span class="a-val trend ${trendCls}">${change > 0 ? "▲" : change < 0 ? "▼" : "—"} ${Math.abs(change)}%</span></div>
        </div>
      </div>`;
    })
    .join("");
}

// ---------- Reviews ----------
function renderReviews() {
  const products = loadProducts();
  const wrap = document.getElementById("reviewsGrid");
  wrap.innerHTML = products
    .map((p) => {
      const total = p.rating.count || 1;
      const distBars = [5, 4, 3, 2, 1]
        .map((star) => {
          const count = p.rating.dist[star] || 0;
          const pct = Math.round((count / total) * 100);
          return `<div class="dist-row"><span>${star}★</span><div class="dist-track"><div class="dist-fill" style="width:${pct}%"></div></div><span class="dist-count">${count}</span></div>`;
        })
        .join("");
      const posPills = p.reviewThemes.positive.map((t) => `<span class="theme-pill pos">${t.tag} · ${t.count}</span>`).join("") || `<span class="muted">No reviews yet</span>`;
      const negPills = p.reviewThemes.negative.map((t) => `<span class="theme-pill neg">${t.tag} · ${t.count}</span>`).join("") || `<span class="muted">No reviews yet</span>`;
      const topNeg = [...p.reviewThemes.negative].sort((a, b) => b.count - a.count)[0];
      const aiRec = topNeg
        ? `A recurring issue appears in customer reviews around <strong>"${topNeg.tag}"</strong>. Consider investigating the underlying product issue and clarifying this in the listing where appropriate.`
        : `Not enough review data yet to generate a recommendation.`;

      return `<div class="review-card">
        <div class="review-top">
          <div>
            <div class="review-name">${p.name}</div>
            <div class="review-rating">${p.rating.avg > 0 ? p.rating.avg + "★" : "—"} <span class="muted">(${p.rating.count} reviews)</span></div>
          </div>
        </div>
        <div class="review-dist">${distBars}</div>
        <div class="review-themes">
          <div><span class="theme-label pos">Positive themes</span><div class="theme-pills">${posPills}</div></div>
          <div><span class="theme-label neg">Negative themes</span><div class="theme-pills">${negPills}</div></div>
        </div>
        <div class="ai-rec"><svg class="icon"><use href="#icon-spark"/></svg><p>${aiRec}</p></div>
      </div>`;
    })
    .join("");
}

// ---------- View switching ----------
function switchView(name) {
  document.querySelectorAll(".view").forEach((v) => v.classList.toggle("active", v.id === "view-" + name));
  document.querySelectorAll(".app-tab").forEach((t) => t.classList.toggle("active", t.dataset.view === name));
  if (name === "dashboard") renderDashboard();
  if (name === "listings") { renderProductList(); renderDetailPanel(); }
  if (name === "analytics") renderAnalytics();
  if (name === "reviews") renderReviews();
}

// ---------- Init ----------
document.addEventListener("DOMContentLoaded", () => {
  seedProductsIfEmpty();

  document.getElementById("appTabs").addEventListener("click", (e) => {
    const btn = e.target.closest(".app-tab");
    if (btn) switchView(btn.dataset.view);
  });

  document.getElementById("toggleAddForm").addEventListener("click", () => {
    const panel = document.getElementById("addProductForm");
    panel.classList.contains("open") ? closeAddForm() : openAddForm();
  });
  document.getElementById("cancelAddForm").addEventListener("click", closeAddForm);
  document.getElementById("productForm").addEventListener("submit", handleAddProductSubmit);

  ["sales", "rating", "conversion", "listing", "returns"].forEach((key) => {
    const slider = document.getElementById("w-" + key);
    slider.addEventListener("input", () => {
      const weights = loadWeights();
      weights[key] = parseInt(slider.value, 10);
      saveWeights(weights);
      document.getElementById("w-" + key + "-val").textContent = weights[key] + "%";
      renderDashboard();
    });
  });
  document.getElementById("resetWeights").addEventListener("click", () => {
    saveWeights({ ...DEFAULT_WEIGHTS });
    renderDashboard();
    showToast("Scoring weights reset to default");
  });

  const products = loadProducts();
  if (products.length) selectedProductId = products[0].id;

  renderDashboard();
  renderProductList();
  renderDetailPanel();
  renderAnalytics();
  renderReviews();
});
