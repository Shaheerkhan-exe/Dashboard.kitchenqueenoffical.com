/* Kitchen Queen Admin — frontend session + shared UI */
(function () {
  const AUTH_KEY = "kq_admin_session";
  const STORE_KEY = "kq_store_online";
  const MENU_KEY = "kq_menu_stock";
  const REV_KEY = "kq_reviews";
  const SET_KEY = "kq_settings";

  const path = location.pathname.replace(/\\/g, "/");
  const isAuthPage = /\/auth\//.test(path);
  const rootPrefix = isAuthPage ? "../" : "";

  function session() {
    try { return JSON.parse(localStorage.getItem(AUTH_KEY) || "null"); } catch { return null; }
  }
  function saveSession(data) { localStorage.setItem(AUTH_KEY, JSON.stringify(data)); }
  function clearSession() { localStorage.removeItem(AUTH_KEY); }

  if (!isAuthPage && !(session() && session().verified)) {
    location.replace(rootPrefix + "auth/login.html");
    return;
  }
  if (/verify\.html/.test(path) && !session()) {
    location.replace("login.html");
    return;
  }
  if (isAuthPage && session() && session().verified && !/register\.html/.test(path)) {
    location.replace("../index.html");
    return;
  }

  window.KQApp = {
    session, saveSession, clearSession,
    toast(msg) {
      let t = document.getElementById("kq-toast");
      if (!t) {
        t = document.createElement("div");
        t.id = "kq-toast";
        t.className = "toast";
        document.body.appendChild(t);
      }
      t.textContent = msg;
      t.classList.add("show");
      setTimeout(() => t.classList.remove("show"), 2400);
    },
    isOnline() {
      const v = localStorage.getItem(STORE_KEY);
      return v === null ? true : v === "1";
    },
    setOnline(on) { localStorage.setItem(STORE_KEY, on ? "1" : "0"); },
    menu() {
      const saved = JSON.parse(localStorage.getItem(MENU_KEY) || "null");
      const base = (window.KQ && KQ.MENU) ? KQ.MENU.map(x => ({ ...x })) : [];
      if (!saved) return base;
      return base.map(item => saved[item.id] !== undefined ? { ...item, stock: !!saved[item.id] } : item);
    },
    setStock(id, stock) {
      const saved = JSON.parse(localStorage.getItem(MENU_KEY) || "{}");
      saved[id] = stock;
      localStorage.setItem(MENU_KEY, JSON.stringify(saved));
    },
    reviews() {
      const saved = JSON.parse(localStorage.getItem(REV_KEY) || "null");
      return saved || ((window.KQ && KQ.REVIEWS) ? KQ.REVIEWS.map(r => ({ ...r })) : []);
    },
    saveReviews(list) { localStorage.setItem(REV_KEY, JSON.stringify(list)); },
    settings() {
      const def = {
        store: "Kitchen Queen",
        email: "hello@kitchenqueen.pk",
        phone: "03xx-xxxxxxx",
        hours: (window.KQ && KQ.HOURS_DEFAULT) ? KQ.HOURS_DEFAULT : {},
        holidays: []
      };
      return Object.assign(def, JSON.parse(localStorage.getItem(SET_KEY) || "{}"));
    },
    saveSettings(s) { localStorage.setItem(SET_KEY, JSON.stringify(s)); },
    fmtPKR(n) { return "PKR " + Number(n || 0).toLocaleString("en-PK"); },
    statusClass(st) {
      const map = {
        Accepted: "b-accepted", Preparing: "b-preparing", Ready: "b-ready",
        "In Delivery": "b-delivery", Completed: "b-completed", Cancelled: "b-cancelled"
      };
      return map[st] || "b-accepted";
    },
    todayOrders() {
      return (KQ.ORDERS || []).filter(o => o.date.slice(0, 10) === "2026-09-10" && o.status !== "Cancelled");
    }
  };

  function navActive(href) {
    const file = path.split("/").pop() || "index.html";
    return file === href ? "active" : "";
  }

  function injectLayout() {
    if (isAuthPage) return;
    const s = session() || { name: "Admin" };
    const online = KQApp.isOnline();
    const initials = (s.name || "KQ").split(" ").map(p => p[0]).join("").slice(0, 2).toUpperCase();

    const sidebar = `
      <aside class="sidebar">
        <div class="side-brand">
          <img src="images/logo.svg" alt="Kitchen Queen">
          <div><strong>Kitchen Queen</strong><span>Admin Desk</span></div>
        </div>
        <nav class="nav-list">
          <a class="nav-item ${navActive("index.html")}" href="index.html"><i class="bi bi-grid-1x2-fill"></i> Overview</a>
          <a class="nav-item ${navActive("orders.html")}" href="orders.html"><i class="bi bi-bag-check-fill"></i> Orders</a>
          <a class="nav-item ${navActive("menu.html")}" href="menu.html"><i class="bi bi-egg-fried"></i> Menu & Stock</a>
          <a class="nav-item ${navActive("analytics.html")}" href="analytics.html"><i class="bi bi-graph-up-arrow"></i> Analytics</a>
          <a class="nav-item ${navActive("reviews.html")}" href="reviews.html"><i class="bi bi-star-fill"></i> Reviews</a>
          <a class="nav-item ${navActive("finance.html")}" href="finance.html"><i class="bi bi-cash-stack"></i> Finance</a>
          <a class="nav-item ${navActive("settings.html")}" href="settings.html"><i class="bi bi-gear-fill"></i> Settings</a>
        </nav>
        <div class="side-foot">
          <div class="online-chip">
            <span>${online ? "Store Online" : "Store Offline"}</span>
            <span class="dot ${online ? "" : "off"}"></span>
          </div>
          <button class="btn btn-ghost btn-sm" style="width:100%;margin-top:10px" id="logoutBtn"><i class="bi bi-box-arrow-left"></i> Logout</button>
        </div>
      </aside>`;

    const pageTitle = document.body.dataset.title || "Dashboard";
    const header = `
      <header class="topbar">
        <div class="top-left">
          <h2>${pageTitle}</h2>
          <small>North Nazimabad · Karachi</small>
        </div>
        <div class="top-right">
          <div class="status-toggle ${online ? "online" : "offline"}" id="statusWrap">
            <span id="statusLabel">${online ? "ONLINE" : "OFFLINE"}</span>
            <label class="switch">
              <input type="checkbox" id="storeSwitch" ${online ? "checked" : ""}>
              <span class="slider"></span>
            </label>
          </div>
          <div class="avatar" title="${s.name || "Admin"}">${initials}</div>
        </div>
      </header>`;

    const dock = `
      <nav class="dock">
        <a class="${navActive("index.html")}" href="index.html"><i class="bi bi-house-door-fill"></i>Home</a>
        <a class="${navActive("orders.html")}" href="orders.html"><i class="bi bi-bag-fill"></i>Orders</a>
        <a class="${navActive("menu.html")}" href="menu.html"><i class="bi bi-journal-richtext"></i>Menu</a>
        <a class="${navActive("analytics.html")}" href="analytics.html"><i class="bi bi-bar-chart-fill"></i>Stats</a>
        <a class="${navActive("settings.html")}" href="settings.html"><i class="bi bi-person-fill"></i>More</a>
      </nav>`;

    const wrap = document.createElement("div");
    wrap.className = "app";
    wrap.innerHTML = sidebar + `<div class="main">${header}<div class="content" id="page-root"></div></div>`;
    const page = document.getElementById("page");
    const contentHTML = page ? page.innerHTML : "";
    if (page) page.remove();
    document.body.prepend(wrap);
    document.getElementById("page-root").innerHTML = contentHTML;
    document.body.insertAdjacentHTML("beforeend", dock);

    document.getElementById("logoutBtn")?.addEventListener("click", () => {
      clearSession();
      location.href = "auth/login.html";
    });
    document.getElementById("storeSwitch")?.addEventListener("change", (e) => {
      KQApp.setOnline(e.target.checked);
      const wrapEl = document.getElementById("statusWrap");
      const label = document.getElementById("statusLabel");
      wrapEl.classList.toggle("online", e.target.checked);
      wrapEl.classList.toggle("offline", !e.target.checked);
      label.textContent = e.target.checked ? "ONLINE" : "OFFLINE";
      document.querySelectorAll(".dot").forEach(d => d.classList.toggle("off", !e.target.checked));
      KQApp.toast(e.target.checked ? "Store is now ONLINE" : "Store is now OFFLINE");
    });
  }

  document.addEventListener("DOMContentLoaded", injectLayout);
})();
