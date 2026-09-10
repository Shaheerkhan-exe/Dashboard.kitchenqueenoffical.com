/* Kitchen Queen — shared demo data (frontend only) */
window.KQ = window.KQ || {};

KQ.MENU = [
  { id: "d1", name: "Friday Family Deal", category: "Deals", price: 1250, stock: true, sold: 48, revenue: 60000, img: "images/chicken biryani.png", desc: "Chicken Biryani (2 servings) + Salad + Raita + 1.5L Cold Drink." },
  { id: "d2", name: "Home Kitchen Box", category: "Deals", price: 1250, stock: true, sold: 36, revenue: 45000, img: "images/Daal Chawal.jpg", desc: "Any daal + any salan + white rice + 4 roti — a full desi spread." },
  { id: "d3", name: "Yellow Daal Chawal with 1 Shami", category: "Daal & Sabzi", price: 450, stock: true, sold: 112, revenue: 50400, img: "images/Yellow daal.png", desc: "Ghee-tarka moong daal served with one hand-pressed beef shami kabab." },
  { id: "d4", name: "Lauki Ki Sabzi", category: "Daal & Sabzi", price: 260, stock: true, sold: 41, revenue: 10660, img: "images/Lauki-Sabzi.png", desc: "Bottle gourd slow-cooked in tomato, garlic and desi masala." },
  { id: "d5", name: "Moong Masoor Ki Daal", category: "Daal & Sabzi", price: 280, stock: true, sold: 67, revenue: 18760, img: "images/Moong masoor daal.png", desc: "Moong and masoor cooked together, finished with a sizzling zeera tarka." },
  { id: "d6", name: "Daal Palak", category: "Daal & Sabzi", price: 300, stock: true, sold: 54, revenue: 16200, img: "images/Daal-Palak.jpg", desc: "Lentils folded through fresh spinach with garlic and green chilli." },
  { id: "d7", name: "Kali Daal", category: "Daal & Sabzi", price: 300, stock: true, sold: 58, revenue: 17400, img: "images/kali daal.png", desc: "Daal maash simmered overnight on low flame with butter and cream." },
  { id: "d8", name: "Bhindi Sabzi", category: "Daal & Sabzi", price: 320, stock: true, sold: 49, revenue: 15680, img: "images/bhindi sabzi.png", desc: "Crisp okra bhujia with onion, tomato and hand-crushed spice." },
  { id: "d9", name: "Chicken Karahi", category: "Chicken", price: 850, stock: true, sold: 91, revenue: 77350, img: "images/karahi.jpg", desc: "Wok-tossed chicken in tomato, ginger and green chilli, finished with coriander." },
  { id: "d10", name: "Chicken Chana Daal", category: "Chicken", price: 450, stock: true, sold: 62, revenue: 27900, img: "images/chicken chana.png", desc: "Chicken slow-cooked with chana daal until the gravy turns thick and glossy." },
  { id: "d11", name: "Chicken Aloo Salan", category: "Chicken", price: 450, stock: true, sold: 88, revenue: 39600, img: "images/chicken-aloo-salan.png", desc: "Everyday Karachi favourite — chicken and potato in a light red salan." },
  { id: "d12", name: "Beef Bhuna Gosht", category: "Beef & Mutton", price: 600, stock: true, sold: 73, revenue: 43800, img: "images/bhuna gohst.png", desc: "Beef cooked down for an hour until the masala clings to every piece." },
  { id: "d13", name: "Chicken Qorma", category: "Chicken", price: 450, stock: true, sold: 64, revenue: 28800, img: "images/chicken qourma.png", desc: "Slow-cooked chicken in a silky fried-onion and yogurt qorma." },
  { id: "d14", name: "Arvi Gosht", category: "Beef & Mutton", price: 450, stock: true, sold: 39, revenue: 17550, img: "images/Arvi.png", desc: "Tender mutton and arvi in a rich brown gravy — a Sunday classic." },
  { id: "d15", name: "Aloo Gosht", category: "Beef & Mutton", price: 450, stock: true, sold: 57, revenue: 25650, img: "images/Aloo gohst.png", desc: "Mutton and potato simmered together in traditional desi masala." },
  { id: "d16", name: "Qeema Aloo", category: "Beef & Mutton", price: 450, stock: true, sold: 61, revenue: 27450, img: "images/keema-Aaloo.png", desc: "Minced beef cooked with soft potato cubes, whole spice and green chilli." },
  { id: "d17", name: "Beef Haleem", category: "Haleem", price: 480, stock: true, sold: 84, revenue: 40320, img: "images/beef haleem.png", desc: "Seven-hour stone-ground wheat and lentils with shredded beef and crisp onion." },
  { id: "d18", name: "Chicken Haleem", category: "Haleem", price: 480, stock: true, sold: 52, revenue: 24960, img: "images/chicken haleem.png", desc: "Lighter haleem with shredded chicken, ginger julienne and lemon on the side." },
  { id: "d19", name: "White Rice", category: "Rice", price: 250, stock: true, sold: 96, revenue: 24000, img: "images/plain-white-rice.jpg", desc: "Steamed long-grain basmati, separated grain by grain." },
  { id: "d20", name: "Daal Chawal", category: "Rice", price: 350, stock: true, sold: 108, revenue: 37800, img: "images/Daal Chawal.jpg", desc: "The ultimate comfort plate — tarka daal poured over hot white rice." },
  { id: "d21", name: "Chicken Biryani", category: "Rice", price: 350, stock: true, sold: 140, revenue: 49000, img: "images/chicken biryani.png", desc: "Basmati layered with masala chicken, kewra, aloo and fried onion." },
  { id: "d22", name: "Egg Khagina", category: "Sides & Raita", price: 300, stock: true, sold: 44, revenue: 13200, img: "images/khagina.png", desc: "Desi scrambled eggs with tomato, onion and green chilli." },
  { id: "d23", name: "Shami Kabab (6 pcs)", category: "Sides & Raita", price: 500, stock: true, sold: 70, revenue: 35000, img: "images/shami.png", desc: "Melt-in-mouth beef and chana daal patties, pan-seared in ghee." },
  { id: "d24", name: "Dahi Phulki with Tarka", category: "Sides & Raita", price: 280, stock: true, sold: 38, revenue: 10640, img: "images/dahi phulki.png", desc: "Soft phulki in whisked yoghurt with a red chilli and curry-leaf tarka." },
  { id: "d25", name: "Sweet Dahi Phulki", category: "Sides & Raita", price: 280, stock: true, sold: 33, revenue: 9240, img: "images/Sweet phulki.png", desc: "Sweetened yoghurt, soft phulki and mint — cooling and mildly sweet." },
  { id: "d26", name: "Baingan Ka Raita", category: "Sides & Raita", price: 280, stock: true, sold: 47, revenue: 13160, img: "images/baingan raita.png", desc: "Roasted aubergine whisked into yoghurt with zeera and black salt." },
  { id: "d27", name: "Tandoori Naan (4 pcs)", category: "Sides & Raita", price: 200, stock: true, sold: 125, revenue: 25000, img: "images/naan.jpg", desc: "Fresh from the clay oven, brushed with butter." },
  { id: "d32", name: "Homemade Chapati (4 pcs)", category: "Sides & Raita", price: 120, stock: true, sold: 132, revenue: 15840, img: "images/chapati.png", desc: "Soft homemade whole-wheat chapati, cooked on tawa and served hot." },
  { id: "d28", name: "Cold Drink", category: "Beverages", price: 150, stock: true, sold: 98, revenue: 14700, img: "images/pepsi.avif", desc: "345ml chilled bottle — your choice of flavour." },
  { id: "d29", name: "Lassi", category: "Beverages", price: 250, stock: true, sold: 56, revenue: 14000, img: "images/lassi.png", desc: "Hand-churned yoghurt lassi — sweet or salted, served ice cold." },
  { id: "d30", name: "Mango Milk Shake", category: "Beverages", price: 250, stock: true, sold: 42, revenue: 10500, img: "images/mango.png", desc: "Thick shake blended with fresh Sindhri mango pulp and chilled milk." },
  { id: "d31", name: "Shahi Kheer", category: "Dessert", price: 180, stock: true, sold: 63, revenue: 11340, img: "images/kheer.png", desc: "Slow-reduced rice pudding with cardamom, pistachio and almond flakes." },
  { id: "d35", name: "1.5L Cold Drink", category: "Beverages", price: 250, stock: true, sold: 51, revenue: 12750, img: "images/pepsi 1.5 L.png", desc: "1.5 litre chilled bottle, as listed on the Wow Deals banner." },
  { id: "d36", name: "Wow Deal", category: "Special Deals", price: 1250, stock: true, sold: 22, revenue: 27500, img: "images/chicken biryani.png", desc: "1 Chicken Biryani + 1 Chicken Karahi + 2 Naan + Salad + Raita + 1L Pepsi. Sunday only." },
  { id: "d37", name: "Weekend Deal", category: "Special Deals", price: 1450, stock: false, sold: 18, revenue: 26100, img: "images/chicken qourma.png", desc: "1 Beef Biryani + 1 Chicken Qorma + 2 Naan + Salad + Raita. Sunday only." }
];

KQ.ORDERS = [
  {
    id: "KQ-1042", date: "2026-09-10T13:40:00", customer: "Ayesha Khan", phone: "0300-1112233",
    status: "Preparing", payment: "COD", type: "Delivery",
    items: [
      { name: "Chicken Aloo Salan", qty: 1, price: 450, extra: "Extra gravy" },
      { name: "Homemade Chapati (4 pcs)", qty: 1, price: 120, extra: "" },
      { name: "Baingan Ka Raita", qty: 1, price: 280, extra: "" }
    ],
    subtotal: 850, discount: 0, delivery: 80, tax: 46, net: 976,
    address: "House 12, Block D, North Nazimabad, Karachi",
    timeline: { received: "13:40", accepted: "13:42", prepared: "", delivered: "" }
  },
  {
    id: "KQ-1041", date: "2026-09-10T12:15:00", customer: "Kamran Ali", phone: "0321-5556677",
    status: "In Delivery", payment: "JazzCash", type: "Delivery",
    items: [
      { name: "Beef Bhuna Gosht", qty: 1, price: 600, extra: "Bone-in" },
      { name: "White Rice", qty: 1, price: 250, extra: "" }
    ],
    subtotal: 850, discount: 0, delivery: 80, tax: 46, net: 976,
    address: "Flat 4, Block A, North Nazimabad",
    timeline: { received: "12:15", accepted: "12:16", prepared: "12:55", delivered: "" }
  },
  {
    id: "KQ-1040", date: "2026-09-10T11:02:00", customer: "Zoja Ahmed", phone: "0333-2223344",
    status: "Completed", payment: "EasyPaisa", type: "Pickup",
    items: [
      { name: "Chicken Biryani", qty: 2, price: 350, extra: "" },
      { name: "Lassi", qty: 2, price: 250, extra: "" }
    ],
    subtotal: 1200, discount: 50, delivery: 0, tax: 57, net: 1207,
    address: "Pickup — Kitchen Queen counter",
    timeline: { received: "11:02", accepted: "11:03", prepared: "11:35", delivered: "11:48" }
  },
  {
    id: "KQ-1039", date: "2026-09-10T10:20:00", customer: "Ubair Sheikh", phone: "0345-7788990",
    status: "Ready", payment: "COD", type: "Delivery",
    items: [
      { name: "Yellow Daal Chawal with 1 Shami", qty: 2, price: 450, extra: "" },
      { name: "Chicken Karahi", qty: 1, price: 850, extra: "Less spicy" }
    ],
    subtotal: 1750, discount: 0, delivery: 80, tax: 91, net: 1921,
    address: "Shop 8, Super Market, Block L",
    timeline: { received: "10:20", accepted: "10:21", prepared: "10:58", delivered: "" }
  },
  {
    id: "KQ-1038", date: "2026-09-10T09:10:00", customer: "Asma Fatima", phone: "0312-9090887",
    status: "Accepted", payment: "COD", type: "Delivery",
    items: [
      { name: "Beef Haleem", qty: 1, price: 480, extra: "Extra fried onion" },
      { name: "Tandoori Naan (4 pcs)", qty: 1, price: 200, extra: "" },
      { name: "Cold Drink", qty: 2, price: 150, extra: "" }
    ],
    subtotal: 980, discount: 0, delivery: 80, tax: 53, net: 1113,
    address: "A-90, Block D, North Nazimabad",
    timeline: { received: "09:10", accepted: "09:12", prepared: "", delivered: "" }
  },
  {
    id: "KQ-1032", date: "2026-09-09T19:40:00", customer: "Sharjeel", phone: "0308-1122334",
    status: "Completed", payment: "JazzCash", type: "Delivery",
    items: [
      { name: "Chicken Karahi", qty: 1, price: 850, extra: "" },
      { name: "Homemade Chapati (4 pcs)", qty: 1, price: 120, extra: "" }
    ],
    subtotal: 970, discount: 0, delivery: 80, tax: 52, net: 1102,
    address: "Block H, North Nazimabad",
    timeline: { received: "19:40", accepted: "19:41", prepared: "20:10", delivered: "20:32" }
  },
  {
    id: "KQ-1028", date: "2026-09-08T18:05:00", customer: "Nubah", phone: "0331-4455667",
    status: "Cancelled", payment: "COD", type: "Delivery",
    items: [{ name: "Weekend Deal", qty: 1, price: 1450, extra: "" }],
    subtotal: 1450, discount: 0, delivery: 80, tax: 76, net: 0,
    address: "Buffer Zone",
    timeline: { received: "18:05", accepted: "", prepared: "", delivered: "" }
  },
  {
    id: "KQ-1019", date: "2026-09-05T14:22:00", customer: "Farah", phone: "0300-9988776",
    status: "Completed", payment: "EasyPaisa", type: "Delivery",
    items: [
      { name: "Friday Family Deal", qty: 1, price: 1250, extra: "" },
      { name: "Shahi Kheer", qty: 1, price: 180, extra: "" }
    ],
    subtotal: 1430, discount: 100, delivery: 80, tax: 70, net: 1480,
    address: "Gulberg, Karachi",
    timeline: { received: "14:22", accepted: "14:23", prepared: "14:55", delivered: "15:20" }
  },
  {
    id: "KQ-1011", date: "2026-08-20T13:00:00", customer: "Mutahir", phone: "0322-6677889",
    status: "Completed", payment: "COD", type: "Pickup",
    items: [
      { name: "Daal Chawal", qty: 2, price: 350, extra: "" },
      { name: "Chicken Aloo Salan", qty: 1, price: 450, extra: "" }
    ],
    subtotal: 1150, discount: 0, delivery: 0, tax: 57, net: 1207,
    address: "Pickup",
    timeline: { received: "13:00", accepted: "13:01", prepared: "13:30", delivered: "13:40" }
  }
];

KQ.REVIEWS = [
  { id: "r1", name: "Zoja Ahmed", orderId: "KQ-1040", stars: 5, date: "2026-09-10", text: "Food was fresh and good quality. Packaging was neat. Will order again.", reply: "" },
  { id: "r2", name: "Kamran Ali", orderId: "KQ-1041", stars: 5, date: "2026-09-10", text: "Order was perfect. Highly recommended. Quality stays consistent.", reply: "Thank you Kamran — Kitchen Queen family!" },
  { id: "r3", name: "Asma Fatima", orderId: "KQ-1038", stars: 4, date: "2026-09-10", text: "Baingan raita was excellent. The salan was a little extra spicy — please reduce the chilli next time.", reply: "" },
  { id: "r4", name: "Sharjeel", orderId: "KQ-1032", stars: 5, date: "2026-09-09", text: "Loved it. Tasty home-style food, just like always.", reply: "Thank you — glad it hit the spot!" },
  { id: "r5", name: "Nubah", orderId: "KQ-1028", stars: 3, date: "2026-09-08", text: "Taste is excellent, just a little too spicy.", reply: "" },
  { id: "r6", name: "Farah", orderId: "KQ-1019", stars: 5, date: "2026-09-05", text: "Family deal was outstanding. Biryani was fragrant and the drink was ice cold.", reply: "" },
  { id: "r7", name: "Aaqib", orderId: "KQ-1011", stars: 5, date: "2026-08-20", text: "One of the best home kitchens in the city.", reply: "Thank you — that means a lot." },
  { id: "r8", name: "Muniba", orderId: "KQ-1011", stars: 4, date: "2026-08-18", text: "Daal chawal and salad were the best part of the order.", reply: "" }
];

KQ.HOURS_DEFAULT = {
  Monday:    { open: "12:00", close: "23:30", off: false },
  Tuesday:   { open: "12:00", close: "23:30", off: false },
  Wednesday: { open: "12:00", close: "23:30", off: false },
  Thursday:  { open: "12:00", close: "23:30", off: false },
  Friday:    { open: "14:00", close: "23:59", off: false },
  Saturday:  { open: "12:00", close: "23:59", off: false },
  Sunday:    { open: "12:00", close: "23:30", off: false }
};

KQ.SALES_DAILY = [2100, 2850, 3200, 1900, 4100, 3680, 3962];
KQ.SALES_WEEKLY = [18400, 22100, 19850, 24300, 21640, 25890, 23110];
KQ.SALES_MONTHLY = [72000, 81000, 76500, 89000, 94000, 88000, 102400, 97000, 110200, 108500, 115000, 98000];
KQ.PEAK_HOURS = [0,0,0,0,0,0,0,2,8,14,22,18,25,30,16,12,10,18,28,35,24,14,6,2];
