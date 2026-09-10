/* Kitchen Queen — shared demo data (frontend only) */
window.KQ = window.KQ || {};

KQ.MENU = [
  { id: "m1", name: "Fry Daal Mash", category: "Curries", price: 420, stock: true, sold: 86, revenue: 36120, img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80", desc: "Street-style fried mash daal with tadka" },
  { id: "m2", name: "Chicken Keema Karahi", category: "Curries", price: 890, stock: true, sold: 64, revenue: 56960, img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80", desc: "Minced chicken karahi, home-style masala" },
  { id: "m3", name: "Chicken Aloo Salan", category: "Curries", price: 750, stock: true, sold: 91, revenue: 68250, img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80", desc: "Comfort chicken & potato curry" },
  { id: "m4", name: "Mutton Bhuna Gosht", category: "Curries", price: 1450, stock: true, sold: 42, revenue: 60900, img: "https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&w=600&q=80", desc: "Slow-cooked bhuna mutton" },
  { id: "m5", name: "Shimla Mirch Qeema", category: "Curries", price: 820, stock: false, sold: 38, revenue: 31160, img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=600&q=80", desc: "Capsicum keema with whole spices" },
  { id: "m6", name: "Chicken Karahi", category: "Curries", price: 980, stock: true, sold: 77, revenue: 75460, img: "https://images.unsplash.com/photo-1603262119260-3048fc786038?auto=format&fit=crop&w=600&q=80", desc: "Classic wok-tossed chicken karahi" },
  { id: "m7", name: "Beef Nihari", category: "Curries", price: 780, stock: true, sold: 55, revenue: 42900, img: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=600&q=80", desc: "Overnight slow nihari with nalli" },
  { id: "m8", name: "Chicken Handi", category: "Curries", price: 920, stock: true, sold: 49, revenue: 45080, img: "https://images.unsplash.com/photo-1631452180519-c014fe946bcc?auto=format&fit=crop&w=600&q=80", desc: "Creamy handi gravy chicken" },
  { id: "m9", name: "Chicken Biryani", category: "Rice", price: 650, stock: true, sold: 112, revenue: 72800, img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80", desc: "Layered dum biryani" },
  { id: "m10", name: "Chana Pulao", category: "Rice", price: 380, stock: true, sold: 58, revenue: 22040, img: "https://images.unsplash.com/photo-1596560548464-f010549b84d7?auto=format&fit=crop&w=600&q=80", desc: "Aromatic chickpea pulao" },
  { id: "m11", name: "Jeera Rice", category: "Rice", price: 220, stock: true, sold: 40, revenue: 8800, img: "https://images.unsplash.com/photo-1516684669134-de6f7c473a2a?auto=format&fit=crop&w=600&q=80", desc: "Cumin tempered basmati" },
  { id: "m12", name: "Chicken Pulao", category: "Rice", price: 520, stock: true, sold: 33, revenue: 17160, img: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=600&q=80", desc: "Home-style yakhni pulao" },
  { id: "m13", name: "Seekh Kabab (4 pcs)", category: "BBQ", price: 560, stock: true, sold: 71, revenue: 39760, img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=600&q=80", desc: "Charcoal seekh kabab" },
  { id: "m14", name: "Chicken Tikka", category: "BBQ", price: 720, stock: true, sold: 66, revenue: 47520, img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=600&q=80", desc: "Tandoori chicken tikka" },
  { id: "m15", name: "Malai Boti", category: "BBQ", price: 780, stock: false, sold: 29, revenue: 22620, img: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=600&q=80", desc: "Creamy malai chicken boti" },
  { id: "m16", name: "Mixed BBQ Platter", category: "BBQ", price: 1890, stock: true, sold: 18, revenue: 34020, img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80", desc: "Seekh, tikka & boti platter" },
  { id: "m17", name: "Baigan Raita", category: "Beverages", price: 180, stock: true, sold: 47, revenue: 8460, img: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=600&q=80", desc: "Smoky baigan raita" },
  { id: "m18", name: "Mint Lassi", category: "Beverages", price: 160, stock: true, sold: 54, revenue: 8640, img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80", desc: "Chilled sweet mint lassi" },
  { id: "m19", name: "Doodh Patti Chai", category: "Beverages", price: 90, stock: true, sold: 120, revenue: 10800, img: "https://images.unsplash.com/photo-1571934811356-5cc061b6821e?auto=format&fit=crop&w=600&q=80", desc: "Strong home-style chai" },
  { id: "m20", name: "Fresh Salad", category: "Beverages", price: 120, stock: true, sold: 61, revenue: 7320, img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80", desc: "Kachumber salad" },
  { id: "m21", name: "Tandoori Paratha", category: "Rice", price: 80, stock: true, sold: 140, revenue: 11200, img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80", desc: "Flaky tandoor paratha" },
  { id: "m22", name: "Arvi Gosht", category: "Curries", price: 980, stock: true, sold: 24, revenue: 23520, img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=600&q=80", desc: "Colocasia mutton curry" }
];

KQ.ORDERS = [
  {
    id: "KQ-1042", date: "2026-09-10T13:40:00", customer: "Ayesha Khan", phone: "0300-1112233",
    status: "Preparing", payment: "COD", type: "Delivery",
    items: [
      { name: "Chicken Aloo Salan", qty: 1, price: 750, extra: "Extra gravy" },
      { name: "Tandoori Paratha", qty: 4, price: 80, extra: "" },
      { name: "Baigan Raita", qty: 1, price: 180, extra: "" }
    ],
    subtotal: 1250, discount: 50, delivery: 80, tax: 64, net: 1344,
    address: "House 12, Block D, North Nazimabad, Karachi",
    timeline: { received: "13:40", accepted: "13:42", prepared: "", delivered: "" }
  },
  {
    id: "KQ-1041", date: "2026-09-10T12:15:00", customer: "Kamran Ali", phone: "0321-5556677",
    status: "In Delivery", payment: "JazzCash", type: "Delivery",
    items: [
      { name: "Mutton Bhuna Gosht", qty: 1, price: 1450, extra: "Bone-in" },
      { name: "Jeera Rice", qty: 1, price: 220, extra: "" }
    ],
    subtotal: 1670, discount: 0, delivery: 80, tax: 87, net: 1837,
    address: "Flat 4, Block A, North Nazimabad",
    timeline: { received: "12:15", accepted: "12:16", prepared: "12:55", delivered: "" }
  },
  {
    id: "KQ-1040", date: "2026-09-10T11:02:00", customer: "Zoja Ahmed", phone: "0333-2223344",
    status: "Completed", payment: "EasyPaisa", type: "Pickup",
    items: [
      { name: "Chicken Biryani", qty: 2, price: 650, extra: "" },
      { name: "Mint Lassi", qty: 2, price: 160, extra: "" }
    ],
    subtotal: 1620, discount: 100, delivery: 0, tax: 76, net: 1596,
    address: "Pickup — Kitchen Queen counter",
    timeline: { received: "11:02", accepted: "11:03", prepared: "11:35", delivered: "11:48" }
  },
  {
    id: "KQ-1039", date: "2026-09-10T10:20:00", customer: "Ubair Sheikh", phone: "0345-7788990",
    status: "Ready", payment: "COD", type: "Delivery",
    items: [
      { name: "Fry Daal Mash", qty: 2, price: 420, extra: "" },
      { name: "Chicken Keema Karahi", qty: 1, price: 890, extra: "Less spicy" }
    ],
    subtotal: 1730, discount: 0, delivery: 80, tax: 90, net: 1900,
    address: "Shop 8, Super Market, Block L",
    timeline: { received: "10:20", accepted: "10:21", prepared: "10:58", delivered: "" }
  },
  {
    id: "KQ-1038", date: "2026-09-10T09:10:00", customer: "Asma Fatima", phone: "0312-9090887",
    status: "Accepted", payment: "COD", type: "Delivery",
    items: [
      { name: "Beef Nihari", qty: 1, price: 780, extra: "Extra nalli" },
      { name: "Tandoori Paratha", qty: 3, price: 80, extra: "" },
      { name: "Doodh Patti Chai", qty: 2, price: 90, extra: "" }
    ],
    subtotal: 1200, discount: 0, delivery: 80, tax: 64, net: 1344,
    address: "A-90, Block D, North Nazimabad",
    timeline: { received: "09:10", accepted: "09:12", prepared: "", delivered: "" }
  },
  {
    id: "KQ-1032", date: "2026-09-09T19:40:00", customer: "Sharjeel", phone: "0308-1122334",
    status: "Completed", payment: "JazzCash", type: "Delivery",
    items: [{ name: "Chicken Karahi", qty: 1, price: 980, extra: "" }, { name: "Fresh Salad", qty: 1, price: 120, extra: "" }],
    subtotal: 1100, discount: 0, delivery: 80, tax: 59, net: 1239,
    address: "Block H, North Nazimabad",
    timeline: { received: "19:40", accepted: "19:41", prepared: "20:10", delivered: "20:32" }
  },
  {
    id: "KQ-1028", date: "2026-09-08T18:05:00", customer: "Nubah", phone: "0331-4455667",
    status: "Cancelled", payment: "COD", type: "Delivery",
    items: [{ name: "Malai Boti", qty: 1, price: 780, extra: "" }],
    subtotal: 780, discount: 0, delivery: 80, tax: 43, net: 0,
    address: "Buffer Zone",
    timeline: { received: "18:05", accepted: "", prepared: "", delivered: "" }
  },
  {
    id: "KQ-1019", date: "2026-09-05T14:22:00", customer: "Farah", phone: "0300-9988776",
    status: "Completed", payment: "EasyPaisa", type: "Delivery",
    items: [{ name: "Mixed BBQ Platter", qty: 1, price: 1890, extra: "" }],
    subtotal: 1890, discount: 150, delivery: 80, tax: 91, net: 1911,
    address: "Gulberg, Karachi",
    timeline: { received: "14:22", accepted: "14:23", prepared: "14:55", delivered: "15:20" }
  },
  {
    id: "KQ-1011", date: "2026-08-20T13:00:00", customer: "Mutahir", phone: "0322-6677889",
    status: "Completed", payment: "COD", type: "Pickup",
    items: [{ name: "Chana Pulao", qty: 2, price: 380, extra: "" }, { name: "Chicken Aloo Salan", qty: 1, price: 750, extra: "" }],
    subtotal: 1510, discount: 0, delivery: 0, tax: 75, net: 1585,
    address: "Pickup",
    timeline: { received: "13:00", accepted: "13:01", prepared: "13:30", delivered: "13:40" }
  }
];

KQ.REVIEWS = [
  { id: "r1", name: "Zoja Ahmed", orderId: "KQ-1040", stars: 5, date: "2026-09-10", text: "Food was fresh and good quality. Packaging was neat. Will order again.", reply: "" },
  { id: "r2", name: "Kamran Ali", orderId: "KQ-1041", stars: 5, date: "2026-09-10", text: "Order was perfect. Highly recommended. Keeps quality same.", reply: "Shukriya Kamran bhai — Kitchen Queen family!" },
  { id: "r3", name: "Asma Fatima", orderId: "KQ-1038", stars: 4, date: "2026-09-10", text: "Baigan raita was super. A bit extra spicy in the salan, please reduce chilli.", reply: "" },
  { id: "r4", name: "Sharjeel", orderId: "KQ-1032", stars: 5, date: "2026-09-09", text: "Bhai maza agaya. Hamesha ki tarah tasty khana.", reply: "Allah barkat de — thank you!" },
  { id: "r5", name: "Nubah", orderId: "KQ-1028", stars: 3, date: "2026-09-08", text: "Taste is excellent just a little too spicy.", reply: "" },
  { id: "r6", name: "Farah", orderId: "KQ-1019", stars: 5, date: "2026-09-05", text: "BBQ platter was outstanding. Juicy tikka.", reply: "" },
  { id: "r7", name: "Aaqib", orderId: "KQ-1011", stars: 5, date: "2026-08-20", text: "One of the best home chefs out there.", reply: "JazakAllah — means a lot." },
  { id: "r8", name: "Muniba", orderId: "KQ-1011", stars: 4, date: "2026-08-18", text: "Chana pulao and salad were best.", reply: "" }
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
