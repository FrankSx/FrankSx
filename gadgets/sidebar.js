// sidebar.js - self-mounting gadget. Host on GitHub, load via jsDelivr.
// Blogger: Layout > Add Gadget > HTML/JavaScript > paste ONE line:
//   <script src="https://cdn.jsdelivr.net/gh/FrankSx/franks-electric-dreams@main/gadgets/sidebar.js"></script>
(function(){
  if (window.__fxg-side) return; window.__fxg-side = 1;
  var st = document.createElement("style"); st.textContent = `.fx-side{font-family:"Courier New",monospace;font-size:13px;line-height:1.5;color:#99ffb0}
.fx-side .fx-head{color:#7CFC00;letter-spacing:2px;font-weight:bold;margin:0 0 8px 0}
.fx-side .fx-head::before{content:"// "}
.fx-side ul{list-style:none;margin:0;padding:0}
.fx-side li{margin:4px 0}
.fx-side a{color:#9e9e9e;text-decoration:none;transition:color .15s}
.fx-side a:hover{color:#7CFC00}
.fx-side a::before{content:"> ";color:#7CFC00}
.fx-side .fx-gpg{margin-top:10px;padding:8px;border:1px dashed #1e3a1e;color:#5da85d;font-size:11px;word-break:break-all}
.fx-side .fx-ver{font-size:11px;color:#4a6b4a;margin-top:6px}`; document.head.appendChild(st);
  var el = document.createElement("div"); el.className = "fxg-side";
  el.innerHTML = `<div class="fx-side">
  <p class="fx-head">RESEARCH ECONOMY</p>
  <ul>
    <li><a href="https://github.com/FrankSx">github.com/FrankSx — 20+ public repos</a></li>
    <li><a href="https://www.wechall.net/profile/FrankSx">wechall — competitive profile</a></li>
    <li><a href="https://community.fandom.com/wiki/User:FrankSx">fandom — project wiki</a></li>
    <li><a href="https://franksx.github.io/Substance-D/">substance-d — scramble suit demo</a></li>
    <li><a href="https://franksx.github.io/INJECTRIX/">injectrix — js recon toolkit</a></li>
    <li><a href="mailto:fixes.it.frank@gmail.com">fixes.it.frank@gmail.com</a></li>
  </ul>
  <div class="fx-gpg">GPG 8101 97FF 62E3 CD8B E21B A0D5 1B4A 3AB8 7F12 5B59</div>
  <div class="fx-ver">verify before you trust. no fluff.</div>
</div>`;
  var s = document.currentScript; (s ? s.parentNode : document.body).appendChild(el);

})();
