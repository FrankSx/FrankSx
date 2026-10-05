// Franks Electric Dreams - FX v1.1 | loaded via jsDelivr/Pages
(function(){
  "use strict";
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (window.__fxLoaded) return; window.__fxLoaded = true;

  var GLYPHS = "01<>/\\|#$%&@FRANKSX♥▌█";   // same alphabet as the banner art

  /* ── 1. subtle rain strip pinned to the page bottom ── */
  (function rain(){
    var cv = document.createElement("canvas");
    cv.setAttribute("aria-hidden","true");
    cv.style.cssText = "position:fixed;left:0;bottom:0;width:100%;height:130px;"+
      "z-index:1;pointer-events:none;opacity:.07";
    document.body.appendChild(cv);
    var ctx = cv.getContext("2d"), cols, drops, fs = 13;
    function size(){
      cv.width = innerWidth; cv.height = 130;
      cols = Math.ceil(cv.width / fs);
      drops = []; for (var i=0;i<cols;i++) drops[i] = Math.random()*-40;
    }
    size(); addEventListener("resize", size);
    setInterval(function(){
      ctx.fillStyle = "rgba(0,0,0,0.09)"; ctx.fillRect(0,0,cv.width,cv.height);
      ctx.fillStyle = "#7CFC00"; ctx.font = fs+"px monospace";
      for (var i=0;i<cols;i++){
        ctx.fillText(GLYPHS[(Math.random()*GLYPHS.length)|0], i*fs, drops[i]*fs);
        if (drops[i]*fs > cv.height && Math.random() > 0.985) drops[i] = 0;
        drops[i]++;
      }
    }, 90);
  })();

  /* ── 2. scramble-on-hover for titles & section headers ── */
  function scramble(el){
    if (el.__fxBusy) return; el.__fxBusy = true;
    var orig = el.__fxText || (el.__fxText = el.textContent);
    var frame = 0, total = Math.max(10, orig.length);
    var tick = setInterval(function(){
      frame++;
      var out = "";
      for (var i=0;i<orig.length;i++){
        var ch = orig[i];
        if (ch === " " || frame/total > i/orig.length) out += ch;
        else out += GLYPHS[(Math.random()*GLYPHS.length)|0];
      }
      el.textContent = out;
      if (frame >= total){ clearInterval(tick); el.textContent = orig; el.__fxBusy = false; }
    }, 28);
  }
  function armHover(sel){
    document.querySelectorAll(sel).forEach(function(el){
      if (el.__fxArmed) return; el.__fxArmed = true;
      el.addEventListener("mouseenter", function(){ scramble(el); });
    });
  }
  var HOVER_SEL = ".post-title a, .post-title, .widget-title, .widget .title, h2.date-header, .jump-link a";
  armHover(HOVER_SEL);
  // Blogger ajaxifies some widgets after load; re-arm periodically, cheap
  setInterval(function(){ armHover(HOVER_SEL); }, 4000);

  /* ── 3. block caret on READ MORE / jump links ── */
  function armCaret(sel){
    document.querySelectorAll(sel).forEach(function(a){
      if (a.__fxCaret) return; a.__fxCaret = true;
      var s = document.createElement("span");
      s.className = "fx-caret"; s.textContent = "\u258E"; // ▎
      a.appendChild(s);
    });
  }
  var CARET_SEL = ".jump-link a, a.read-more, .post-more-link a";
  armCaret(CARET_SEL);
  setInterval(function(){ armCaret(CARET_SEL); }, 4000);

  /* ── 4. one-shot decode as headers scroll into view ── */
  var seen = new WeakSet();
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if (!e.isIntersecting || seen.has(e.target)) return;
      seen.add(e.target); scramble(e.target); io.unobserve(e.target);
    });
  }, {threshold: .6});
  document.querySelectorAll(".widget-title, h3.post-title, .post-title").forEach(function(el){ io.observe(el); });
})();
