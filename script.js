(function () {
  "use strict";

  /* ---------- data ---------- */
  const SERVICES = [
    { title: "Dine-in", desc: "A quiet, wood-lit room for 48 guests — walk-ins welcome before 6pm.", icon: "fork" },
    { title: "Private events", desc: "Book the back room for birthdays, offsites or a long family dinner.", icon: "calendar" },
    { title: "Catering", desc: "Our mains and sides, delivered for parties of 15 or more.", icon: "box" },
    { title: "Gift cards", desc: "Digital gift cards delivered by email, any amount.", icon: "gift" }
  ];

  const MENU = [
    { cat: "Starters", name: "Charred Corn & Lime", price: 320, tags: ["veg"], desc: "Street corn, chilli-lime butter, cotija-style crumble.", icon: "corn" },
    { cat: "Starters", name: "Smoked Burrata", price: 480, tags: ["veg", "new"], desc: "Oak-smoked burrata, roast tomato, basil oil, sourdough.", icon: "cheese" },
    { cat: "Starters", name: "Chilli Garlic Prawns", price: 540, tags: ["spicy"], desc: "Pan-seared prawns, bird's-eye chilli, garlic confit.", icon: "shrimp" },
    { cat: "Mains", name: "Wood-Fired Ribeye", price: 1450, tags: [], desc: "28-day aged ribeye, bone marrow butter, charred greens.", icon: "steak" },
    { cat: "Mains", name: "Miso Glazed Salmon", price: 980, tags: ["new"], desc: "Slow-roasted salmon, miso glaze, pickled daikon.", icon: "fish" },
    { cat: "Mains", name: "Wild Mushroom Risotto", price: 720, tags: ["veg"], desc: "Arborio rice, wild mushrooms, aged parmesan, truffle oil.", icon: "risotto" },
    { cat: "Mains", name: "Nashville Hot Chicken", price: 680, tags: ["spicy"], desc: "Buttermilk chicken, Nashville glaze, pickles, milk bun.", icon: "chicken" },
    { cat: "Desserts", name: "Basque Burnt Cheesecake", price: 380, tags: ["veg"], desc: "Caramelised top, soft centre, berry compote.", icon: "cake" },
    { cat: "Desserts", name: "Dark Chocolate Fondant", price: 420, tags: ["veg", "new"], desc: "Molten centre, salted caramel, vanilla bean ice cream.", icon: "fondant" },
    { cat: "Drinks", name: "Smoked Old Fashioned", price: 650, tags: [], desc: "Bourbon, applewood smoke, orange bitters.", icon: "cocktail" },
    { cat: "Drinks", name: "House Lemonade", price: 220, tags: ["veg"], desc: "Fresh lemon, mint, soda, a little ginger heat.", icon: "lemonade" },
    { cat: "Drinks", name: "Cold Brew Espresso", price: 260, tags: ["veg"], desc: "18-hour cold brew, single shot espresso float.", icon: "coffee" }
  ];

  const GALLERY = [
    { cap: "The dining room at dusk", icon: "room", color: "#C9A227" },
    { cap: "Wood-fired ribeye, plated", icon: "steak", color: "#B5533C" },
    { cap: "The bar, mid-service", icon: "cocktail", color: "#6E8B5B" },
    { cap: "Basque cheesecake", icon: "cake", color: "#E7C25F" },
    { cap: "Chef at the pass", icon: "chef", color: "#8E7A4B" },
    { cap: "Private room, set for six", icon: "calendar", color: "#A3674A" }
  ];

  const TESTIMONIALS = [
    { quote: "The ribeye alone is worth the drive across town. Best table I've booked all year.", who: "Ananya R., Google review" },
    { quote: "Quiet enough to talk, loud enough to feel alive. Our go-to for anniversaries.", who: "Karthik M., regular guest" },
    { quote: "The burrata starter changed my evening. Came back three times in a month.", who: "Divya S., Google review" }
  ];

  const ICONS = {
    fork: '<path d="M14 6v14M10 6v8a4 4 0 0 0 8 0V6M10 6v4M14 6v4M30 6v24M34 6v10a4 4 0 0 1-4 4" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/>',
    calendar: '<rect x="6" y="9" width="28" height="23" rx="3" stroke="currentColor" stroke-width="2" fill="none"/><path d="M6 16h28M13 6v6M27 6v6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
    box: '<path d="M20 5 5 12v16l15 7 15-7V12L20 5Z" stroke="currentColor" stroke-width="2" fill="none" stroke-linejoin="round"/><path d="M5 12l15 7 15-7M20 19v16" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>',
    gift: '<rect x="6" y="15" width="28" height="19" rx="2" stroke="currentColor" stroke-width="2" fill="none"/><path d="M6 15h28v7H6zM20 15v19M20 15c-3-7-13-7-13 0h13Zm0 0c3-7 13-7 13 0H20Z" stroke="currentColor" stroke-width="2" fill="none" stroke-linejoin="round"/>',
    corn: '<ellipse cx="20" cy="20" rx="9" ry="15" stroke="currentColor" stroke-width="2" fill="none"/><path d="M14 10c2 2 2 4 0 6m6-7c2 2 2 4 0 6m6-5c2 2 2 4 0 6M14 24c2 2 2 4 0 6m6-7c2 2 2 4 0 6m6-5c2 2 2 4 0 6" stroke="currentColor" stroke-width="1.4"/>',
    cheese: '<circle cx="20" cy="20" r="14" stroke="currentColor" stroke-width="2" fill="none"/><circle cx="16" cy="17" r="1.6" fill="currentColor"/><circle cx="24" cy="23" r="1.6" fill="currentColor"/><circle cx="22" cy="15" r="1.2" fill="currentColor"/>',
    shrimp: '<path d="M10 28c0-10 6-18 16-18 2 8-2 12-8 14-2 4-4 6-8 6Z" stroke="currentColor" stroke-width="2" fill="none" stroke-linejoin="round"/><circle cx="24" cy="12" r="1.4" fill="currentColor"/>',
    steak: '<path d="M10 24c-3-6 2-15 11-16 8-1 13 5 11 11-2 7-9 10-15 9-3-1-5-2-7-4Z" stroke="currentColor" stroke-width="2" fill="none"/><circle cx="18" cy="18" r="2" stroke="currentColor" stroke-width="1.5" fill="none"/><circle cx="25" cy="22" r="2" stroke="currentColor" stroke-width="1.5" fill="none"/>',
    fish: '<path d="M8 20c6-8 16-10 24-4-4 8-18 12-24 4Z" stroke="currentColor" stroke-width="2" fill="none" stroke-linejoin="round"/><path d="M28 14l6-4v16l-6-4" stroke="currentColor" stroke-width="2" fill="none" stroke-linejoin="round"/><circle cx="13" cy="19" r="1.3" fill="currentColor"/>',
    risotto: '<ellipse cx="20" cy="24" rx="14" ry="6" stroke="currentColor" stroke-width="2" fill="none"/><path d="M8 24c0-8 24-8 24 0" stroke="currentColor" stroke-width="2" fill="none"/><circle cx="16" cy="19" r="1.2" fill="currentColor"/><circle cx="22" cy="17" r="1.2" fill="currentColor"/><circle cx="26" cy="20" r="1.2" fill="currentColor"/>',
    chicken: '<path d="M14 30c-4-2-6-7-3-12 2-3 1-6-1-8 4-1 7 1 8 4 3-2 7-1 9 2 3 5 1 11-4 14-3 2-6 2-9 0Z" stroke="currentColor" stroke-width="2" fill="none" stroke-linejoin="round"/>',
    cake: '<path d="M8 32V18l12-9 12 9v14" stroke="currentColor" stroke-width="2" fill="none" stroke-linejoin="round"/><path d="M8 24h24M8 32h24" stroke="currentColor" stroke-width="2"/><path d="M19 8v-3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
    fondant: '<circle cx="20" cy="20" r="13" stroke="currentColor" stroke-width="2" fill="none"/><path d="M20 20c3 3 3 7 0 10M20 20c-3-3-3-7 0-10" stroke="currentColor" stroke-width="2" fill="none"/>',
    cocktail: '<path d="M8 10h24l-12 13v9m0 0h-7m7 0h7" stroke="currentColor" stroke-width="2" fill="none" stroke-linejoin="round"/><path d="M14 10l6 6 6-6" stroke="currentColor" stroke-width="2" fill="none"/>',
    lemonade: '<path d="M12 10h16l-2 22a2 2 0 0 1-2 2H16a2 2 0 0 1-2-2L12 10Z" stroke="currentColor" stroke-width="2" fill="none" stroke-linejoin="round"/><path d="M12 10h16M15 16h10M15 22h10" stroke="currentColor" stroke-width="1.6"/>',
    coffee: '<path d="M9 14h18v8a9 9 0 0 1-9 9 9 9 0 0 1-9-9v-8Z" stroke="currentColor" stroke-width="2" fill="none"/><path d="M27 16h3a4 4 0 0 1 0 8h-3" stroke="currentColor" stroke-width="2" fill="none"/><path d="M13 9c1 2-1 2 0 4m5-4c1 2-1 2 0 4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>',
    room: '<rect x="6" y="18" width="28" height="14" rx="2" stroke="currentColor" stroke-width="2" fill="none"/><path d="M6 18l14-10 14 10" stroke="currentColor" stroke-width="2" fill="none" stroke-linejoin="round"/><rect x="17" y="23" width="6" height="9" stroke="currentColor" stroke-width="1.6" fill="none"/>',
    chef: '<path d="M14 18a6 6 0 0 1 12 0c3 0 4 4 1 6l-1 7H14l-1-7c-3-2-2-6 1-6Z" stroke="currentColor" stroke-width="2" fill="none" stroke-linejoin="round"/><path d="M14 31h12" stroke="currentColor" stroke-width="2"/>'
  };
  function iconSvg(key, size) {
    return `<svg viewBox="0 0 40 40" width="${size}" height="${size}" style="color:var(--gold)">${ICONS[key] || ""}</svg>`;
  }

  const LS = {
    get(k, f) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : f; } catch (e) { return f; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  };

  let reservations = LS.get("eo_reservations", []);
  let preorder = [];
  let activeCat = "Starters";
  let chosenSlot = null;
  let testimonialIdx = 0;

  function toast(msg) {
    const t = document.getElementById("toast");
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(t._timer);
    t._timer = setTimeout(() => t.classList.remove("show"), 2400);
  }

  /* ---------- services ---------- */
  function renderServices() {
    document.getElementById("servicesGrid").innerHTML = SERVICES.map(s => `
      <div class="service-card reveal">
        <div class="icon">${iconSvg(s.icon, 44)}</div>
        <h3>${s.title}</h3>
        <p>${s.desc}</p>
      </div>`).join("");
  }

  /* ---------- menu ---------- */
  function renderMenuTabs() {
    const cats = [...new Set(MENU.map(m => m.cat))];
    document.getElementById("menuTabs").innerHTML = cats.map(c =>
      `<button class="${c === activeCat ? "active" : ""}" data-cat="${c}">${c}</button>`
    ).join("");
    document.querySelectorAll("#menuTabs button").forEach(b =>
      b.addEventListener("click", () => { activeCat = b.dataset.cat; renderMenuTabs(); renderMenu(); })
    );
  }
  function renderMenu() {
    const items = MENU.filter(m => m.cat === activeCat);
    document.getElementById("menuGrid").innerHTML = items.map((m, i) => {
      const inCart = preorder.includes(m.name);
      return `
      <div class="menu-item reveal">
        <div class="icon">${iconSvg(m.icon, 40)}</div>
        <div style="flex:1;">
          <div class="top"><h3>${m.name}</h3><span class="price">₹${m.price}</span></div>
          <div class="tag-row">${m.tags.map(t => `<span class="tag ${t}">${t}</span>`).join("")}</div>
          <p>${m.desc}</p>
          <button class="add-to-table ${inCart ? "added" : ""}" data-name="${m.name}">${inCart ? "Added to table ✓" : "+ Add to table"}</button>
        </div>
      </div>`;
    }).join("");
    document.querySelectorAll(".add-to-table").forEach(b => b.addEventListener("click", () => {
      const name = b.dataset.name;
      const i = preorder.indexOf(name);
      if (i > -1) preorder.splice(i, 1); else preorder.push(name);
      renderMenu();
      renderPreorderChips();
    }));
    revealNew();
  }
  function renderPreorderChips() {
    const el = document.getElementById("preorderChips");
    if (!preorder.length) { el.innerHTML = `<span class="empty-note">No dishes added yet — browse the menu above.</span>`; return; }
    el.innerHTML = preorder.map(name => `<span class="preorder-chip active">${name}</span>`).join("");
  }

  /* ---------- gallery ---------- */
  function galleryArt(g, size) {
    return `<svg viewBox="0 0 200 150" width="${size||'100%'}" style="background:linear-gradient(135deg, ${g.color}22, transparent)">
      <rect width="200" height="150" fill="#1D1812"/>
      <circle cx="100" cy="75" r="46" fill="${g.color}22" stroke="${g.color}" stroke-width="2"/>
      <g transform="translate(80,55) scale(1.1)" style="color:${g.color}">${ICONS[g.icon] || ""}</g>
    </svg>`;
  }
  function renderGallery() {
    document.getElementById("galleryGrid").innerHTML = GALLERY.map((g, i) => `
      <div class="gallery-item reveal" data-i="${i}">
        ${galleryArt(g)}
        <div class="cap">${g.cap}</div>
      </div>`).join("");
    document.querySelectorAll(".gallery-item").forEach(el => el.addEventListener("click", () => openLightbox(+el.dataset.i)));
  }
  function openLightbox(i) {
    const g = GALLERY[i];
    document.getElementById("lightbox").innerHTML = `
      <button class="lb-close" id="lbClose">×</button>
      ${galleryArt(g)}
      <div class="lb-cap">${g.cap}</div>`;
    document.getElementById("lightboxOverlay").classList.add("open");
    document.getElementById("lightbox").classList.add("open");
    document.getElementById("lbClose").addEventListener("click", closeLightbox);
  }
  function closeLightbox() {
    document.getElementById("lightboxOverlay").classList.remove("open");
    document.getElementById("lightbox").classList.remove("open");
  }

  /* ---------- testimonials ---------- */
  function renderTestimonial() {
    const t = TESTIMONIALS[testimonialIdx];
    document.getElementById("testimonialCard").innerHTML = `<p class="quote">“${t.quote}”</p><p class="who">${t.who}</p>`;
    document.getElementById("testimonialDots").innerHTML = TESTIMONIALS.map((_, i) =>
      `<button class="${i === testimonialIdx ? "active" : ""}" data-i="${i}"></button>`).join("");
    document.querySelectorAll("#testimonialDots button").forEach(b =>
      b.addEventListener("click", () => { testimonialIdx = +b.dataset.i; renderTestimonial(); }));
  }
  setInterval(() => { testimonialIdx = (testimonialIdx + 1) % TESTIMONIALS.length; renderTestimonial(); }, 6000);

  /* ---------- reservations ---------- */
  const SLOTS = ["6:00 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:30 PM"];
  const FULL_SLOTS = ["7:30 PM"]; // simulated fully booked slot

  function renderSlots() {
    document.getElementById("slotRow").innerHTML = SLOTS.map(s => {
      const full = FULL_SLOTS.includes(s);
      return `<button type="button" class="slot ${full ? "full" : ""} ${chosenSlot === s ? "active" : ""}" data-slot="${s}" ${full ? "disabled" : ""}>${s}</button>`;
    }).join("");
    document.querySelectorAll(".slot:not(.full)").forEach(b => b.addEventListener("click", () => {
      chosenSlot = b.dataset.slot;
      renderSlots();
    }));
  }

  function renderMyReservations() {
    const el = document.getElementById("myReservations");
    if (!reservations.length) { el.innerHTML = `<p class="empty-note">No reservations yet. Fill in the form to book your table.</p>`; return; }
    el.innerHTML = reservations.map((r, i) => `
      <div class="res-item">
        <div class="res-top"><span>${r.name}</span><span>${r.guests} guest${r.guests == 1 ? "" : "s"}</span></div>
        <div class="res-meta">${r.date} · ${r.slot}${r.dishes.length ? " · " + r.dishes.join(", ") : ""}</div>
        <button class="cancel" data-i="${i}">Cancel reservation</button>
      </div>`).join("");
    el.querySelectorAll(".cancel").forEach(b => b.addEventListener("click", () => {
      reservations.splice(+b.dataset.i, 1);
      LS.set("eo_reservations", reservations);
      renderMyReservations();
      toast("Reservation cancelled");
    }));
  }

  document.getElementById("rDate").min = "2026-11-23";
  document.getElementById("rDate").value = "2026-11-28";

  document.getElementById("reserveForm").addEventListener("submit", e => {
    e.preventDefault();
    if (!chosenSlot) { toast("Please pick a time slot"); return; }
    const r = {
      name: document.getElementById("rName").value,
      guests: document.getElementById("rGuests").value,
      phone: document.getElementById("rPhone").value,
      date: document.getElementById("rDate").value,
      slot: chosenSlot,
      note: document.getElementById("rNote").value,
      dishes: [...preorder]
    };
    reservations.push(r);
    LS.set("eo_reservations", reservations);
    renderMyReservations();
    toast(`Table booked for ${r.name} — ${r.slot} on ${r.date}`);
    e.target.reset();
    chosenSlot = null;
    preorder = [];
    renderSlots();
    renderMenu();
    renderPreorderChips();
    document.getElementById("rDate").value = "2026-11-28";
  });

  /* ---------- newsletter ---------- */
  document.getElementById("newsletterForm").addEventListener("submit", e => {
    e.preventDefault();
    document.getElementById("newsMsg").textContent = "Thanks — you’re on the list for our next seasonal drop.";
    e.target.reset();
  });

  /* ---------- hero art ---------- */
  document.getElementById("heroBg").innerHTML = `
    <svg viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;">
      <ellipse cx="150" cy="430" rx="230" ry="150" fill="#B5533C" opacity=".22"/>
      <ellipse cx="150" cy="440" rx="150" ry="95" fill="#2A1C12" stroke="#C9A227" stroke-width="2" opacity=".55"/>
      <ellipse cx="150" cy="420" rx="120" ry="70" fill="#1D140D" opacity=".7"/>
      <path d="M90 390c6-18 18-18 24-4m18-4c6-18 18-18 24-4m18-2c6-18 18-18 24-4" stroke="#F3EBDD" stroke-width="2" fill="none" opacity=".25" stroke-linecap="round"/>
      <ellipse cx="1040" cy="300" rx="190" ry="160" fill="#C9A227" opacity=".16"/>
      <circle cx="1040" cy="300" r="110" fill="#2A1C12" opacity=".55" stroke="#C9A227" stroke-width="2"/>
      <circle cx="1000" cy="270" r="9" fill="#E7C25F" opacity=".5"/>
      <circle cx="1065" cy="330" r="13" fill="#E7C25F" opacity=".4"/>
      <circle cx="1030" cy="340" r="7" fill="#F3EBDD" opacity=".3"/>
      <ellipse cx="950" cy="560" rx="170" ry="110" fill="#6E8B5B" opacity=".14"/>
    </svg>`;

  /* ---------- map art ---------- */
  document.getElementById("mapArt").innerHTML = `
    <svg viewBox="0 0 400 180" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="180" fill="#1D1812"/>
      <path d="M0 60h400M0 120h400M60 0v180M160 0v180M260 0v180M340 0v180" stroke="#372E23" stroke-width="2"/>
      <path d="M0 90h400" stroke="#C9A227" stroke-width="4" opacity=".5"/>
      <circle cx="200" cy="90" r="9" fill="#C9A227"/>
      <circle cx="200" cy="90" r="16" fill="none" stroke="#C9A227" stroke-width="2" opacity=".5"/>
      <path d="M200 70v-14l-6 6M200 56l6 6" stroke="#F3EBDD" stroke-width="2" fill="none"/>
    </svg>`;

  /* ---------- nav / scroll-spy / mobile ---------- */
  const navLinks = [...document.querySelectorAll("#mainNav a")];
  const sections = navLinks.map(l => document.getElementById(l.dataset.sec)).filter(Boolean);
  function onScroll() {
    let current = sections[0];
    sections.forEach(s => { if (window.scrollY + 110 >= s.offsetTop) current = s; });
    navLinks.forEach(l => l.classList.toggle("active", l.dataset.sec === current.id));
    document.getElementById("siteHeader").style.boxShadow = window.scrollY > 10 ? "0 6px 20px rgba(0,0,0,.25)" : "none";
  }
  window.addEventListener("scroll", onScroll);

  document.getElementById("hamburger").addEventListener("click", () => document.getElementById("mainNav").classList.toggle("open"));
  navLinks.forEach(l => l.addEventListener("click", () => document.getElementById("mainNav").classList.remove("open")));
  document.getElementById("navReserveBtn").addEventListener("click", () => document.getElementById("reserve").scrollIntoView({ behavior: "smooth" }));
  document.getElementById("lightboxOverlay").addEventListener("click", closeLightbox);

  /* ---------- reveal on scroll ---------- */
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.15 });
  function revealNew() { document.querySelectorAll(".reveal:not(.in)").forEach(el => io.observe(el)); }

  /* ---------- init ---------- */
  renderServices();
  renderMenuTabs();
  renderMenu();
  renderPreorderChips();
  renderGallery();
  renderTestimonial();
  renderSlots();
  renderMyReservations();
  revealNew();
  onScroll();
})();
