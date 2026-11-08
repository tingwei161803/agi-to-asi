/* =========================================================================
   multipage · shell.js   (vanilla, no build)

   The SHARED CHROME for every page: app bar, cross-page nav, footer and the
   detail <dialog>. It also owns global state (language + theme) and exposes a
   tiny toolkit on window.LDW that each page's app.js reuses.

   Loaded on EVERY page BEFORE app.js. It:
     1. reads the language from <html lang> and the theme from localStorage,
     2. injects app bar + nav + footer + dialog around <main id="page">,
     3. wires the theme toggle and points the language link at this page's
        counterpart in the other language,
     4. highlights the current page (from <body data-page="...">).

   Language belongs to the URL, not to the visitor: the Chinese pages live at
   the root and the English ones under /en/, so switching language is a
   navigation rather than an in-place repaint. Theme still persists in
   localStorage (an origin-wide store) and survives moving between pages.
   ========================================================================= */
(function () {
  "use strict";

  var META = window.SITE_META || { title: {}, subtitle: {}, footer: {} };
  var PAGES = Array.isArray(window.SITE_PAGES) ? window.SITE_PAGES : [];

  /* ---------- chrome i18n (page content strings live in the data) ---------- */
  var I18N = {
    en: { close: "Close", menu: "Pages", skip: "Skip to content", theme: "Toggle dark mode",
          note: "An unofficial reader's guide to Google DeepMind's \u201cFrom AGI to ASI\u201d. The paper is the authority; read it on arXiv.",
          paper: "The paper on arXiv", home: "peteraim.com" },
    zh: { close: "關閉", menu: "頁面", skip: "跳到內容", theme: "切換深色模式",
          note: "這是 Google DeepMind 論文《From AGI to ASI》的非官方閱讀導覽，一切以原文為準。",
          paper: "arXiv 原文", home: "peteraim.com" }
  };

  /* inline icons — the site no longer loads an icon font */
  var ICON = {
    logo: '<svg class="logo" viewBox="0 0 32 32" aria-hidden="true"><path d="M4 25.5h24" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" opacity=".45"/>' +
          '<path d="M5 25.5C14 25 20 21 27 6" fill="none" stroke="var(--amber)" stroke-width="2.6" stroke-linecap="round"/></svg>',
    moon: '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>',
    sun:  '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" stroke-width="1.7"/>' +
          '<path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M5.3 18.7l1.6-1.6M17.1 6.9l1.6-1.6" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',
    close: '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>'
  };

  /* ---------- sandbox-safe localStorage ---------- */
  function lsGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function lsSet(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* ignore */ } }

  /* ---------- global state ----------
     The URL decides the language, so <html lang> is what we read. localStorage
     must not seed it: a crawler has no localStorage and would always be handed
     the fallback, which is how one half of the site ended up with no address of
     its own — and why a first-time reader of the Chinese pages was shown
     English. Writing the choice back is gone too; the address carries it now. */
  function langFromDocument() {
    var declared = (document.documentElement.getAttribute("lang") || "en").toLowerCase();
    return declared.indexOf("zh") === 0 ? "zh" : "en";
  }

  /* the same page in the other language — mirror the path, never guess */
  var TWIN_DIR = "/en";
  function altLangHref() {
    var path = location.pathname || "/";
    if (path === TWIN_DIR || path.indexOf(TWIN_DIR + "/") === 0) {
      return path.slice(TWIN_DIR.length) || "/";
    }
    return TWIN_DIR + path;
  }

  /* Theme: a saved choice wins; otherwise follow the operating system. The
     choice is only written when the reader presses the toggle, so a visitor who
     never touches it keeps tracking their system setting. */
  var savedTheme = lsGet("theme");
  var darkQuery = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;
  var state = {
    lang:  langFromDocument(),
    theme: savedTheme === "dark" || savedTheme === "light" ? savedTheme
         : (darkQuery && darkQuery.matches ? "dark" : "light")
  };

  /* ---------- helpers shared with app.js ---------- */
  function t(obj) {
    if (obj == null) return "";
    if (typeof obj === "string") return obj;
    return obj[state.lang] || obj.en || obj.zh || "";
  }
  function ui(key) { return (I18N[state.lang] || I18N.en)[key]; }
  function escapeHtml(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (m) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m];
    });
  }
  function r(n) { return Math.round(n * 100) / 100; }

  function pageHref(p) { return p.slug === "home" ? "index.html" : p.slug + ".html"; }
  function currentSlug() { return document.body.getAttribute("data-page") || "home"; }
  function currentPage() {
    var slug = currentSlug();
    for (var i = 0; i < PAGES.length; i++) if (PAGES[i].slug === slug) return PAGES[i];
    return PAGES[0] || null;
  }

  /* =======================================================================
     CHROME INJECTION — app bar, nav, footer, dialog around <main id="page">
     ===================================================================== */
  function injectChrome() {
    var main = document.getElementById("page");
    if (!main) return;

    /* skip link */
    var skip = document.createElement("a");
    skip.className = "skip-link";
    skip.href = "#page";
    skip.id = "skipLink";
    document.body.insertBefore(skip, document.body.firstChild);

    /* app bar */
    var appbar = document.createElement("header");
    appbar.className = "appbar";
    appbar.innerHTML =
      '<div class="appbar__inner">' +
        '<a class="brand" href="index.html">' + ICON.logo +
          '<span class="brand__name" id="brandName"></span>' +
        '</a>' +
        '<div class="appbar__actions">' +
          '<a class="lang-btn" id="langToggle" href="' + escapeHtml(altLangHref()) + '" ' +
             'hreflang="' + (state.lang === "en" ? "zh-Hant" : "en") + '" rel="alternate" ' +
             'lang="' + (state.lang === "en" ? "zh-Hant" : "en") + '" aria-label="' +
             (state.lang === "en" ? "切換到中文版 / View in Chinese" : "View in English / 切換到英文版") + '">' +
            '<span id="langLabel"></span>' +
          '</a>' +
          '<button class="icon-btn" id="themeToggle" type="button" aria-pressed="false">' +
            '<span id="themeIcon"></span>' +
          '</button>' +
        '</div>' +
      '</div>';
    document.body.insertBefore(appbar, main);

    /* cross-page nav — a scrolling row on narrow screens, with faded edges
       that only appear on the side that still has more to show */
    var nav = document.createElement("nav");
    nav.className = "pagenav";
    nav.id = "pageNav";
    nav.innerHTML = '<div class="pagenav__inner" id="pageNavInner"></div>';
    document.body.insertBefore(nav, main);

    /* footer — the static "other language" link that every page ships for
       crawlers and no-JS readers is moved in here instead of floating below */
    var footer = document.createElement("footer");
    footer.className = "footer";
    footer.innerHTML =
      '<div class="footer__inner">' +
        '<div class="footer__brand">' + ICON.logo +
          '<div><p class="footer__title" id="footerTitle"></p><p class="footer__sub" id="footerSub"></p></div>' +
        '</div>' +
        '<p class="footer__note" id="footerNote"></p>' +
        '<ul class="footer__links" id="footerLinks">' +
          '<li><a href="https://arxiv.org/abs/2606.12683" target="_blank" rel="noopener" id="footerPaper"></a></li>' +
          '<li><a href="https://www.peteraim.com" target="_blank" rel="noopener" id="footerHome"></a></li>' +
          '<li><a href="https://www.linkedin.com/in/ai-med/" target="_blank" rel="noopener">LinkedIn</a></li>' +
        '</ul>' +
        '<p class="footer__copy" id="footerText"></p>' +
      '</div>';
    main.parentNode.insertBefore(footer, main.nextSibling);
    var alt = document.querySelector(".lang-alt-link");
    var altA = alt && alt.querySelector("a");
    if (altA) {
      var li = document.createElement("li");
      li.appendChild(altA);
      document.getElementById("footerLinks").insertBefore(li, document.getElementById("footerLinks").firstChild);
      alt.parentNode.removeChild(alt);
    }

    /* shared detail dialog (used by card layouts) */
    var dialog = document.createElement("dialog");
    dialog.className = "dialog";
    dialog.id = "dialog";
    dialog.setAttribute("aria-labelledby", "dialogTitle");
    dialog.innerHTML =
      '<div class="dialog__bar">' +
        '<span class="dialog__spacer"></span>' +
        '<button class="icon-btn" id="dialogClose" type="button" aria-label="Close / 關閉">' + ICON.close + '</button>' +
      '</div>' +
      '<div class="dialog__body" id="dialogBody"></div>';
    document.body.appendChild(dialog);

    /* dialog wiring (shared close behaviour; deep links handled by app.js) */
    document.getElementById("dialogClose").addEventListener("click", function () {
      if (dialog.open) dialog.close();
    });
    dialog.addEventListener("click", function (e) { if (e.target === dialog) dialog.close(); });
  }

  function paintNav() {
    var inner = document.getElementById("pageNavInner");
    if (!inner) return;
    var here = currentSlug();
    var html = "", lastGroup = null;
    PAGES.forEach(function (p) {
      if (p.slug === "home") return;          // the brand already links home
      var group = p.group || "report";
      if (lastGroup && group !== lastGroup) html += '<span class="pagenav__sep" aria-hidden="true"></span>';
      lastGroup = group;
      var on = p.slug === here;
      html += '<a class="navlink' + (on ? " navlink--active" : "") + '" href="' + escapeHtml(pageHref(p)) + '"' +
        (on ? ' aria-current="page"' : "") + ">" +
        (p.mark ? '<span class="navlink__mark" aria-hidden="true">' + escapeHtml(p.mark) + "</span>" : "") +
        "<span>" + escapeHtml(t(p.nav || p.title)) + "</span></a>";
    });
    inner.innerHTML = html;
    var active = inner.querySelector(".navlink--active");
    if (active) inner.scrollLeft = active.offsetLeft - (inner.clientWidth - active.offsetWidth) / 2;
    function edges() {
      var nav = document.getElementById("pageNav");
      var max = inner.scrollWidth - inner.clientWidth;
      nav.classList.toggle("pagenav--more-left", inner.scrollLeft > 4);
      nav.classList.toggle("pagenav--more-right", inner.scrollLeft < max - 4);
    }
    inner.addEventListener("scroll", edges, { passive: true });
    window.addEventListener("resize", edges);
    edges();
  }

  /* ---------- chrome text in the active language ---------- */
  function refreshChrome() {
    var page = currentPage();
    var siteTitle = t(META.title);
    var pageTitle = page ? t(page.title) : "";
    document.title = pageTitle ? pageTitle + " · " + siteTitle : siteTitle;

    var brand = document.getElementById("brandName");
    if (brand) brand.textContent = siteTitle;
    var foot = document.getElementById("footerText");
    if (foot) foot.textContent = "© " + new Date().getFullYear() + " " + siteTitle;
    var ft = document.getElementById("footerTitle");
    if (ft) ft.textContent = siteTitle;
    var fs = document.getElementById("footerSub");
    if (fs) fs.textContent = t(META.subtitle);
    var fn = document.getElementById("footerNote");
    if (fn) fn.textContent = ui("note");
    var fp = document.getElementById("footerPaper");
    if (fp) fp.textContent = ui("paper");
    var fh = document.getElementById("footerHome");
    if (fh) fh.textContent = ui("home");
    var tt = document.getElementById("themeToggle");
    if (tt) { tt.setAttribute("aria-label", ui("theme")); tt.title = ui("theme"); }
    var skip = document.getElementById("skipLink");
    if (skip) skip.textContent = ui("skip");
    var nav = document.getElementById("pageNav");
    if (nav) nav.setAttribute("aria-label", ui("menu"));
    var dc = document.getElementById("dialogClose");
    if (dc) dc.setAttribute("aria-label", ui("close"));
    paintNav();
  }

  /* =======================================================================
     THEME + LANGUAGE
     ===================================================================== */
  function applyTheme() {
    document.documentElement.setAttribute("data-theme", state.theme);
    var icon = document.getElementById("themeIcon");
    if (icon) icon.innerHTML = state.theme === "dark" ? ICON.sun : ICON.moon;
    var btn = document.getElementById("themeToggle");
    if (btn) btn.setAttribute("aria-pressed", state.theme === "dark" ? "true" : "false");
  }
  /* The toggle is a link now, so it is labelled with the language it leads TO,
     not the one already on screen. */
  function applyLangChrome() {
    var label = document.getElementById("langLabel");
    if (label) label.textContent = state.lang === "en" ? "中文" : "EN";
  }

  function wire() {
    document.getElementById("themeToggle").addEventListener("click", function () {
      state.theme = state.theme === "dark" ? "light" : "dark";
      lsSet("theme", state.theme);
      applyTheme();
    });
    /* no saved choice yet: keep following the system if it changes */
    if (darkQuery && !lsGet("theme")) {
      var follow = function (e) {
        if (lsGet("theme")) return;
        state.theme = e.matches ? "dark" : "light";
        applyTheme();
      };
      if (darkQuery.addEventListener) darkQuery.addEventListener("change", follow);
      else if (darkQuery.addListener) darkQuery.addListener(follow);
    }
  }

  /* =======================================================================
     PUBLIC TOOLKIT (app.js uses this)
     ===================================================================== */
  window.LDW = {
    ready: false,          // flipped true once the chrome (incl. #dialog) is injected
    state: state,
    t: t, ui: ui, escapeHtml: escapeHtml, r: r,
    lsGet: lsGet, lsSet: lsSet,
    pages: PAGES, meta: META,
    currentPage: currentPage, currentSlug: currentSlug, pageHref: pageHref,
    refreshChrome: refreshChrome,
    dialog: function () { return document.getElementById("dialog"); }
  };

  /* =======================================================================
     INIT
     ===================================================================== */
  function init() {
    injectChrome();
    applyTheme();
    applyLangChrome();
    refreshChrome();
    wire();
    window.LDW.ready = true;
    document.dispatchEvent(new CustomEvent("ldw:shell-ready"));
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
