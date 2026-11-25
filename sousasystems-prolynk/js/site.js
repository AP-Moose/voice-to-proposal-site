(function () {
  var C = window.PL_CONFIG || {};
  var app = (C.APP_URL || "https://try.prolynk.io").replace(/\/$/, "");
  var incoming = new URLSearchParams(location.search);
  var params = new URLSearchParams();
  var hasUtm = false;
  incoming.forEach(function (v, k) {
    if (/^utm_/.test(k) || k === "ref") { params.set(k, v); if (/^utm_/.test(k)) hasUtm = true; }
  });
  if (!hasUtm) {
    var d = C.CTA_DEFAULT_PARAMS || {};
    Object.keys(d).forEach(function (k) { if (!params.has(k)) params.set(k, d[k]); });
  }
  var qs = params.toString();
  var ctaHref = app + (C.CTA_PATH || "/get") + (qs ? "?" + qs : "");
  document.querySelectorAll("[data-cta]").forEach(function (a) {
    a.href = ctaHref;
    a.addEventListener("click", function () {
      if (window.twq && C.X_EVENT_CTA) { try { window.twq("event", C.X_EVENT_CTA, {}); } catch (e) {} }
    });
  });

  // Done-with-you setup price: fill data-setup-price in index.html when decided.
  document.querySelectorAll("[data-setup-price]").forEach(function (el) {
    var p = el.getAttribute("data-setup-price");
    if (p && p !== "TBD") el.textContent = p;
  });

  // Sticky mobile CTA: only once the hero CTA has scrolled out of view.
  var hero = document.getElementById("hero-cta"), sticky = document.getElementById("sticky");
  if (hero && sticky && "IntersectionObserver" in window) {
    sticky.classList.add("off");
    new IntersectionObserver(function (e) { sticky.classList.toggle("off", e[0].isIntersecting || e[0].boundingClientRect.top > 0); }).observe(hero);
  }

  // Year in footer
  document.querySelectorAll("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });

  // X pixel: only with an id, and never when the browser sends Do Not Track or GPC.
  var dnt = navigator.doNotTrack === "1" || window.doNotTrack === "1" || navigator.msDoNotTrack === "1";
  var gpc = navigator.globalPrivacyControl === true;
  if (C.X_PIXEL_ID && !dnt && !gpc) {
    !function (e, t, n, s, u, a) {
      e.twq || (s = e.twq = function () { s.exe ? s.exe.apply(s, arguments) : s.queue.push(arguments); },
        s.version = "1.1", s.queue = [], u = t.createElement(n), u.async = !0,
        u.src = "https://static.ads-twitter.com/uwt.js",
        a = t.getElementsByTagName(n)[0], a.parentNode.insertBefore(u, a));
    }(window, document, "script");
    window.twq("config", C.X_PIXEL_ID);
  }
})();
