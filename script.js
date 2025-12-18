// assets/script.js

// ----- Mobile menu toggle -----
const menuBtn = document.querySelector("[data-menu-btn]");
const menu = document.querySelector("[data-menu]");

if (menuBtn && menu) {
  menuBtn.addEventListener("click", () => {
    const open = menu.getAttribute("data-open") === "true";
    menu.setAttribute("data-open", String(!open));
    menuBtn.setAttribute("aria-expanded", String(!open));
  });

  // Close menu when clicking a link (mobile)
  menu.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      menu.setAttribute("data-open", "false");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });
}

// ----- Smooth scroll for on-page anchors -----
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const id = link.getAttribute("href");
    const el = document.querySelector(id);
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// ----- Back to top button -----
const topBtn = document.createElement("button");
topBtn.textContent = "↑ Top";
topBtn.className = "btn";
topBtn.style.position = "fixed";
topBtn.style.right = "16px";
topBtn.style.bottom = "16px";
topBtn.style.display = "none";
topBtn.style.zIndex = "999";
document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {
  topBtn.style.display = window.scrollY > 600 ? "inline-flex" : "none";
});

topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ----- Contact form validation (works with mailto) -----
const form = document.querySelector("form[data-contact-form]");
if (form) {
  form.addEventListener("submit", (e) => {
    const name = form.querySelector('input[name="name"]')?.value.trim();
    const email = form.querySelector('input[name="email"]')?.value.trim();
    const msg = form.querySelector('textarea[name="message"]')?.value.trim();

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email || "");

    if (!name || !emailOk || !msg) {
      e.preventDefault();
      alert("Please fill your name, a valid email, and your message.");
      return;
    }

    // Optional: show a friendly confirmation (still opens email app after)
    alert("Thanks! Your email app will open now to send your message.");
  });
}
