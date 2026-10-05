// wechall.js - self-mounting gadget. Host on GitHub, load via jsDelivr.
// Blogger: Layout > Add Gadget > HTML/JavaScript > paste ONE line:
//   <script src="https://cdn.jsdelivr.net/gh/FrankSx/franks-electric-dreams@main/gadgets/wechall.js"></script>
(function(){
  if (window.__fxg-wechall) return; window.__fxg-wechall = 1;
  var st = document.createElement("style"); st.textContent = `.fxwc{font-family:"Courier New",monospace;font-size:12px;color:#9e9e9e}
.fxwc .fxwc-chrome{background:#111;border:1px solid #2a2a2a;border-bottom:none;border-radius:6px 6px 0 0;padding:5px 10px;color:#555;font-size:11px}
.fxwc .fxwc-chrome i{display:inline-block;width:9px;height:9px;border-radius:50%;margin-right:5px}
.fxwc .fxwc-body{background:#0a0a0a;border:1px solid #2a2a2a;border-top:none;padding:12px}
.fxwc .fxwc-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:10px}
.fxwc .fxwc-stat{background:#111;border:1px dashed #1e3a1e;padding:8px;text-align:center}
.fxwc .fxwc-stat b{display:block;color:#7CFC00;font-size:16px}
.fxwc .fxwc-stat span{font-size:10px;color:#4a6b4a;letter-spacing:1px}
.fxwc .fxwc-sites{list-style:none;margin:0 0 10px 0;padding:0;font-size:11px}
.fxwc .fxwc-sites li{padding:3px 0;border-bottom:1px dotted #1c1c1c}
.fxwc .fxwc-sites a{color:#9e9e9e;text-decoration:none}
.fxwc .fxwc-sites a:hover{color:#7CFC00}
.fxwc .fxwc-sites .fxwc-pts{float:right;color:#4a6b4a}
.fxwc .fxwc-link{display:block;text-align:center;background:#111;border:1px solid #2a2a2a;color:#7CFC00;text-decoration:none;padding:7px;font-weight:bold}
.fxwc .fxwc-link:hover{background:#16210f}
.fxwc .fxwc-sync{margin-top:8px;font-size:10px;color:#4a6b4a;text-align:right}`; document.head.appendChild(st);
  var el = document.createElement("div"); el.className = "fxg-wechall";
  el.innerHTML = `<div class="fxwc">
  <div class="fxwc-chrome"><i style="background:#dc2626"></i><i style="background:#d7a825"></i><i style="background:#2ea043"></i>root@franksx:~$ wechall --user FrankSx</div>
  <div class="fxwc-body">
    <div class="fxwc-grid">
      <div class="fxwc-stat"><b>EDIT_ME</b><span>GLOBAL RANK</span></div>
      <div class="fxwc-stat"><b>EDIT_ME</b><span>SCORE</span></div>
      <div class="fxwc-stat"><b>EDIT_ME</b><span>SOLVED</span></div>
      <div class="fxwc-stat"><b>EDIT_ME</b><span>SITES LINKED</span></div>
    </div>
    <ul class="fxwc-sites">
      <li><a href="https://www.wechall.net/">wechall.net</a><span class="fxwc-pts">EDIT_ME pts</span></li>
      <li><a href="https://ringzer0ctf.com/">ringzer0ctf</a><span class="fxwc-pts">EDIT_ME pts</span></li>
      <li><a href="https://pwn.college/">pwn.college</a><span class="fxwc-pts">EDIT_ME pts</span></li>
    </ul>
    <a class="fxwc-link" href="https://www.wechall.net/profile/FrankSx">&gt; view full profile</a>
    <div class="fxwc-sync">last manual sync: EDIT_DATE</div>
  </div>
</div>`;
  var s = document.currentScript; (s ? s.parentNode : document.body).appendChild(el);

})();
