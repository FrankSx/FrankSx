// ticker.js - self-mounting gadget. Host on GitHub, load via jsDelivr.
// Blogger: Layout > Add Gadget > HTML/JavaScript > paste ONE line:
//   <script src="https://cdn.jsdelivr.net/gh/FrankSx/franks-electric-dreams@main/gadgets/ticker.js"></script>
(function(){
  if (window.__fxg-ticker) return; window.__fxg-ticker = 1;
  var st = document.createElement("style"); st.textContent = `.fxtk{font-family:"Courier New",monospace;font-size:12px;color:#9e9e9e}
.fxtk .fxtk-chrome{background:#111;border:1px solid #2a2a2a;border-bottom:none;border-radius:6px 6px 0 0;padding:5px 10px;color:#555;font-size:11px}
.fxtk .fxtk-chrome i{display:inline-block;width:9px;height:9px;border-radius:50%;margin-right:5px}
.fxtk .fxtk-body{background:#0a0a0a;border:1px solid #2a2a2a;border-top:none;height:230px;overflow:hidden;position:relative}
.fxtk .fxtk-track{animation:fxtk-scroll 45s linear infinite}
.fxtk:hover .fxtk-track{animation-play-state:paused}
@keyframes fxtk-scroll{from{transform:translateY(0)}to{transform:translateY(-50%)}}
.fxtk .fxtk-item{padding:7px 12px;border-bottom:1px dashed #1c1c1c;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.fxtk .fxtk-item a{color:#7CFC00;text-decoration:none;font-weight:bold}
.fxtk .fxtk-item a:hover{text-decoration:underline}
.fxtk .fxtk-item .fxtk-meta{color:#4a6b4a;font-size:11px}
.fxtk .fxtk-item .fxtk-desc{color:#777}
.fxtk .fxtk-foot{background:#0a0a0a;border:1px solid #2a2a2a;border-top:none;border-radius:0 0 6px 6px;padding:6px 12px;font-size:11px;color:#4a6b4a}
.fxtk .fxtk-foot a{color:#7CFC00;text-decoration:none}
@media (prefers-reduced-motion:reduce){.fxtk .fxtk-track{animation:none}}`; document.head.appendChild(st);
  var el = document.createElement("div"); el.className = "fxg-ticker";
  el.innerHTML = `<div class="fxtk">
  <div class="fxtk-chrome"><i style="background:#dc2626"></i><i style="background:#d7a825"></i><i style="background:#2ea043"></i>root@franksx:~/repos$ git ls-remote --heads origin</div>
  <div class="fxtk-body"><div class="fxtk-track" id="fxtk-track"></div></div>
  <div class="fxtk-foot">&gt; <a href="https://github.com/FrankSx?tab=repositories">github.com/FrankSx</a> — <span id="fxtk-count">syncing…</span></div>
</div>`;
  var s = document.currentScript; (s ? s.parentNode : document.body).appendChild(el);
  (function(){
    var FALLBACK = [
      ["INJECTRIX","browser-console JS recon & injection arsenal","HTML","2026-09-29"],
      ["reflex-chain-builder","chained reflex exploitation PoC builder","HTML","2026-09-28"],
      ["Substance-D","A-Scanner-Darkly scramble suit","HTML","2026-09-28"],
      ["Kimi-sysinternals","Kimi environment internals & recon","HTML","2026-09-27"],
      ["WorldVQA-Red-Team-SCA-Research-Arsenal","WorldVQA benchmark red teaming","HTML","2026-09-27"],
      ["CC-SCA","cross-container side-channel toolkit","Python","2026-09-27"],
      ["facebook-comet-prelude-files","Comet prelude de-minification series","","2026-09-25"],
      ["BottomUp-Payload-Lab","spec-driven audio/AI parser payloads","Python","2026-09-24"],
      ["kimi-3.0-internal-leaks","Kimi 3.0 system files & prior art","Python","2026-09-23"],
      ["Siren","first TTS-audio polyglot PoC","Python","2026-09-23"],
      ["Kimi-2.5-internal-leaks","Kimi 2.5 internals series","JavaScript","2026-09-23"],
      ["github-oauth-phishing-k9-analysis","K-9 Mail OAuth token theft analysis","HTML","2026-09-23"],
      ["Hitwords","firm-hitwords firmware tooling","Python","2026-09-21"],
      ["muxxerfuzzer","mXSS fuzzer v4.1 bounty hunter","JavaScript","2026-09-01"]
    ];
    var track = document.getElementById("fxtk-track");
    var countEl = document.getElementById("fxtk-count");
    function esc(s){return (s||"").replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
    function render(rows){
      var html = "";
      for (var pass=0; pass<2; pass++)
        rows.forEach(function(r){
          html += '<div class="fxtk-item">&gt; <a href="https://github.com/FrankSx/'+esc(r[0])+'">'+esc(r[0])+'</a>'
                + ' <span class="fxtk-desc">— '+esc(r[1])+'</span>'
                + ' <span class="fxtk-meta">['+(r[2]||"—")+' · '+esc(r[3])+']</span></div>';
        });
      track.innerHTML = html;
      countEl.textContent = rows.length + " public repos · live sync";
    }
    fetch("https://api.github.com/users/FrankSx/repos?sort=pushed&per_page=14")
      .then(function(r){ if(!r.ok) throw 0; return r.json(); })
      .then(function(data){
        render(data.map(function(d){
          return [d.name,(d.description||"").replace(/\*\*/g,"").slice(0,80),d.language,(d.pushed_at||"").slice(0,10)];
        }));
      })
      .catch(function(){ render(FALLBACK); countEl.textContent = FALLBACK.length + " repos · cached snapshot"; });
  })();
})();
