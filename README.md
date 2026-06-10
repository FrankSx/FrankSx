<img width="300" height="169" alt="aurora_v7_growth" src="https://github.com/user-attachments/assets/1eb1d08e-9251-46f1-bbf9-babe691ffa3a" />
## Hi there 👋

<!--
**FrankSx/FrankSx** is a ✨ _special_ ✨ repository because its `README.md` (this file) appears on your GitHub profile.

Here are some ideas to get you started:

- 🔭 I’m currently working on ...<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
     width="100%" height="100%" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice"
     style="background:#050508;" id="root">
  <defs>
    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="2" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    <filter id="strong-glow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="4" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    <radialGradient id="seed-grad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#00ff41" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#00ff41" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="seed-grad-amber" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#ffaa00" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#ffaa00" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="seed-grad-red" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#ff0044" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#ff0044" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <!-- Grid -->
  <g id="grid-layer" opacity="0.03" stroke="#222" stroke-width="0.5">
    <script type="text/javascript">
      <![CDATA[
        (function(){
          var g = document.getElementById('grid-layer');
          for(var x=0; x<1920; x+=40){
            var l = document.createElementNS('http://www.w3.org/2000/svg','line');
            l.setAttribute('x1',x); l.setAttribute('y1',0);
            l.setAttribute('x2',x); l.setAttribute('y2',1080);
            g.appendChild(l);
          }
          for(var y=0; y<1080; y+=40){
            var l = document.createElementNS('http://www.w3.org/2000/svg','line');
            l.setAttribute('x1',0); l.setAttribute('y1',y);
            l.setAttribute('x2',1920); l.setAttribute('y2',y);
            g.appendChild(l);
          }
        })();
      ]]>
    </script>
  </g>

  <!-- Growth layers -->
  <g id="root-layer"></g>
  <g id="branch-layer"></g>
  <g id="leaf-layer"></g>
  <g id="bloom-layer" filter="url(#glow)"></g>
  <g id="token-layer" filter="url(#strong-glow)"></g>

  <!-- Telemetry (hidden until growth completes) -->
  <g id="telemetry" opacity="0">
    <text x="20" y="1040" fill="#1a1a1a" font-family="monospace" font-size="11" id="t-phase">PHASE: SEED</text>
    <text x="20" y="1055" fill="#1a1a1a" font-family="monospace" font-size="11" id="t-branches">BRANCHES: 0</text>
    <text x="20" y="1070" fill="#1a1a1a" font-family="monospace" font-size="11" id="t-leaves">LEAVES: 0</text>
    <text x="300" y="1040" fill="#1a1a1a" font-family="monospace" font-size="11" id="t-interaction">INTERACTION: NONE</text>
    <text x="300" y="1055" fill="#1a1a1a" font-family="monospace" font-size="11" id="t-trust">TRUST: PENDING</text>
    <text x="300" y="1070" fill="#1a1a1a" font-family="monospace" font-size="11" id="t-token">TOKEN: ---</text>
  </g>

  <!-- Sample ID (top right) -->
  <text x="1880" y="30" fill="#1a1a1a" font-family="monospace" font-size="11" text-anchor="end" id="sample-id">SAMPLE: PENDING</text>

  <!-- Error display -->
  <text x="960" y="540" fill="#441111" font-family="monospace" font-size="10" text-anchor="middle" id="error-display"></text>

  <!-- Main Script -->
  <script type="text/javascript">
    <![CDATA[
      (function(){
        "use strict";

        var W = 1920, H = 1080;
        var cx = W/2, cy = H/2;
        var svg = document.getElementById('root');
        var rootLayer = document.getElementById('root-layer');
        var branchLayer = document.getElementById('branch-layer');
        var leafLayer = document.getElementById('leaf-layer');
        var bloomLayer = document.getElementById('bloom-layer');
        var tokenLayer = document.getElementById('token-layer');
        var telemetry = document.getElementById('telemetry');
        var sampleId = document.getElementById('sample-id');
        var errorDisplay = document.getElementById('error-display');
        var errors = [];

        function err(msg) {
          errors.push(msg);
          if(errorDisplay) errorDisplay.textContent = errors.join(' | ');
        }

        // === ENVIRONMENT DETECTION ===
        var E = {};
        try {
          E = {
            webdriver: !!navigator.webdriver,
            plugins: navigator.plugins ? navigator.plugins.length : 0,
            languages: navigator.languages ? navigator.languages.length : 0,
            chrome: !!window.chrome,
            outerWidth: window.outerWidth, outerHeight: window.outerHeight,
            innerWidth: window.innerWidth, innerHeight: window.innerHeight,
            deviceMemory: navigator.deviceMemory || 'unknown',
            hardwareConcurrency: navigator.hardwareConcurrency || 'unknown',
            maxTouchPoints: navigator.maxTouchPoints || 0,
            platform: navigator.platform, vendor: navigator.vendor,
            userAgent: navigator.userAgent, doNotTrack: navigator.doNotTrack,
            oscpu: navigator.oscpu || 'unknown',
            pdfViewerEnabled: navigator.pdfViewerEnabled || false,
            webglVendor: null, webglRenderer: null,
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            touch: 'ontouchstart' in window,
            webRTC: !!window.RTCPeerConnection,
            webAudio: !!window.AudioContext,
            webWorker: !!window.Worker,
            serviceWorker: !!navigator.serviceWorker,
            bluetooth: !!navigator.bluetooth,
            usb: !!navigator.usb,
            mediaCapabilities: !!navigator.mediaCapabilities,
            presentation: !!window.PresentationRequest,
            wakeLock: !!navigator.wakeLock,
            webShare: !!navigator.share,
            contacts: !!navigator.contacts,
            clipboard: !!navigator.clipboard,
            credentials: !!navigator.credentials,
            keyboard: !!navigator.keyboard,
            mediaSession: !!navigator.mediaSession,
            permissions: !!navigator.permissions,
            scheduling: !!navigator.scheduling,
            storage: !!navigator.storage,
            webkitTemporaryStorage: !!navigator.webkitTemporaryStorage,
            devicePosture: !!navigator.devicePosture,
            gpu: !!navigator.gpu,
            userActivation: !!navigator.userActivation,
            virtualKeyboard: !!navigator.virtualKeyboard,
            windowControlsOverlay: !!navigator.windowControlsOverlay,
            webkit: !!window.webkitURL,
            safari: !!window.safari,
            opr: !!window.opr,
            opera: !!window.opera,
            InstallTrigger: typeof InstallTrigger !== 'undefined',
            CSS: !!window.CSS,
            CSSSupports: window.CSS && window.CSS.supports,
            offscreenCanvas: !!window.OffscreenCanvas,
            requestIdleCallback: !!window.requestIdleCallback,
            requestAnimationFrame: !!window.requestAnimationFrame,
            indexedDB: !!window.indexedDB,
            localStorage: !!window.localStorage,
            sessionStorage: !!window.sessionStorage,
            performance: !!window.performance,
            performanceMemory: !!(window.performance && window.performance.memory),
            performanceTiming: !!(window.performance && window.performance.timing),
            mutationObserver: !!window.MutationObserver,
            intersectionObserver: !!window.IntersectionObserver,
            resizeObserver: !!window.ResizeObserver,
            proxy: !!window.Proxy,
            reflect: !!window.Reflect,
            weakMap: !!window.WeakMap,
            weakSet: !!window.WeakSet,
            symbol: !!window.Symbol,
            bigint: !!window.BigInt,
            sharedArrayBuffer: !!window.SharedArrayBuffer,
            atomics: !!window.Atomics,
            wasm: !!window.WebAssembly,
            streams: !!window.ReadableStream,
            fetch: !!window.fetch,
            beacon: !!navigator.sendBeacon,
            credentialsApi: !!navigator.credentials,
            payment: !!window.PaymentRequest,
            paymentHandler: !!window.PaymentRequestEvent,
            isSecureContext: window.isSecureContext,
            crossOriginIsolated: window.crossOriginIsolated,
            cookieEnabled: navigator.cookieEnabled,
            onLine: navigator.onLine,
            connection: navigator.connection ? {
              effectiveType: navigator.connection.effectiveType,
              downlink: navigator.connection.downlink,
              rtt: navigator.connection.rtt,
              saveData: navigator.connection.saveData
            } : null,
            screen: {
              width: screen.width, height: screen.height,
              availWidth: screen.availWidth, availHeight: screen.availHeight,
              colorDepth: screen.colorDepth, pixelDepth: screen.pixelDepth,
              availLeft: screen.availLeft, availTop: screen.availTop,
              orientation: screen.orientation ? screen.orientation.type : 'unknown'
            },
            devicePixelRatio: window.devicePixelRatio,
            visualViewport: !!window.visualViewport,
            caretPositionFromPoint: !!document.caretPositionFromPoint,
            elementFromPoint: !!document.elementFromPoint,
            fontsApi: !!document.fonts,
            fullscreenEnabled: !!document.fullscreenEnabled,
            pictureInPictureEnabled: !!document.pictureInPictureEnabled,
            webkitFullscreenEnabled: !!document.webkitFullscreenEnabled,
            hidden: !!document.hidden,
            prerendering: !!document.prerendering,
            wasDiscarded: !!document.wasDiscarded,
            featurePolicy: !!document.featurePolicy,
            documentURI: document.documentURI,
            compatMode: document.compatMode,
            designMode: document.designMode,
            dir: document.dir,
            readyState: document.readyState,
            referrer: document.referrer,
            lastModified: document.lastModified,
            title: document.title,
            URL: document.URL,
            baseURI: document.baseURI,
            location: window.location.href,
            hostname: window.location.hostname,
            protocol: window.location.protocol,
            port: window.location.port,
            pathname: window.location.pathname,
            search: window.location.search,
            hash: window.location.hash
          };
        } catch(e) { err('env:'+e.message); }

        // WebGL - MUST use XHTML namespace for canvas
        try {
          var c = document.createElementNS('http://www.w3.org/1999/xhtml', 'canvas');
          c.width = 1; c.height = 1;
          var gl = c.getContext('webgl') || c.getContext('experimental-webgl');
          if(gl) {
            var dbg = gl.getExtension('WEBGL_debug_renderer_info');
            if(dbg) {
              E.webglVendor = gl.getParameter(dbg.UNMASKED_VENDOR_WEBGL);
              E.webglRenderer = gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL);
            }
            var lose = gl.getExtension('WEBGL_lose_context');
            if(lose) lose.loseContext();
          }
        } catch(e) { err('webgl:'+e.message); }

        // Automation indicators
        var autoInd = [];
        try {
          if(E.webdriver) autoInd.push('navigator.webdriver');
          if(E.plugins === 0) autoInd.push('zero-plugins');
          if(E.languages === 0) autoInd.push('zero-languages');
          if(window.outerWidth === 0 && window.outerHeight === 0) autoInd.push('zero-outer-dims');
          if(!E.chrome && E.userAgent.indexOf('Chrome') > -1) autoInd.push('chrome-ua-no-chrome-obj');
          if(E.webglRenderer && (E.webglRenderer.indexOf('SwiftShader') > -1 || E.webglRenderer.indexOf('llvmpipe') > -1 || E.webglRenderer.indexOf('Software') > -1)) {
            autoInd.push('software-renderer');
          }
          if(navigator.plugins && navigator.plugins.length > 0) {
            if(navigator.plugins[0].name === 'Chrome PDF Plugin' && navigator.plugins.length === 1) {
              autoInd.push('single-pdf-plugin');
            }
          }
          if(typeof __playwright__ !== 'undefined') autoInd.push('__playwright__');
          if(typeof __pw_manual__ !== 'undefined') autoInd.push('__pw_manual__');
          if(typeof __pw_resume__ !== 'undefined') autoInd.push('__pw_resume__');
          if(window.callPhantom || window._phantom) autoInd.push('phantomjs');
          if(window.callPhantom) autoInd.push('callPhantom');
          if(window._phantom) autoInd.push('_phantom');
          if(window.Buffer) autoInd.push('node-Buffer');
          if(window.process) autoInd.push('node-process');
          if(window.emit) autoInd.push('casper-emit');
          if(window.spawn) autoInd.push('phantom-spawn');
          if(window.webdriver) autoInd.push('window.webdriver');
          if(window.domAutomation) autoInd.push('domAutomation');
          if(window.domAutomationController) autoInd.push('domAutomationController');
          if(window.cdc_adoQpoasnfa76pfcZLmcfl_) autoInd.push('cdc-chrome-driver');
          if(window.document.documentElement.getAttribute('webdriver')) autoInd.push('webdriver-attr');
          if(navigator.userAgent.indexOf('Headless') > -1) autoInd.push('headless-ua');
          if(navigator.userAgent.indexOf('PhantomJS') > -1) autoInd.push('phantomjs-ua');
          if(navigator.userAgent.indexOf('Electron') > -1) autoInd.push('electron-ua');
          if(navigator.userAgent.indexOf('slimerjs') > -1) autoInd.push('slimerjs-ua');
          if(navigator.userAgent.indexOf('Seamonkey') > -1 && !window.navigator.productSub) autoInd.push('seamonkey-anomaly');
          if(window.Notification && window.Notification.permission === 'default' && !window.Notification.requestPermission) autoInd.push('notification-api-anomaly');
          try {
            if(window.outerWidth === 0 && window.outerHeight === 0) autoInd.push('headless-window-dims');
          } catch(e){}
          try {
            var perf = performance.getEntriesByType('navigation')[0];
            if(perf && perf.nextHopProtocol === '') autoInd.push('protocol-empty');
          } catch(e){}
          if(navigator.permissions) {
            navigator.permissions.query({name: 'notifications'}).then(function(p){
              if(p.state === 'prompt' && Notification.permission === 'denied') {
                autoInd.push('permission-inconsistency');
              }
            }).catch(function(){});
          }
        } catch(e) { err('auto:'+e.message); }
        E.automationIndicators = autoInd;
        E.automationScore = autoInd.length;
        E.isHeadless = autoInd.length > 2;
        E.isAutomated = autoInd.length > 0;

        // === TRUST COLORS ===
        var trustColor, seedGrad, secondaryColor, tertiaryColor;
        if(E.automationScore === 0) {
          trustColor = '#00ff41'; seedGrad = 'url(#seed-grad)';
        } else if(E.automationScore <= 2) {
          trustColor = '#ffaa00'; seedGrad = 'url(#seed-grad-amber)';
        } else {
          trustColor = '#ff0044'; seedGrad = 'url(#seed-grad-red)';
        }
        secondaryColor = E.touch ? '#00ffff' : '#ff44ff';
        tertiaryColor = E.webglRenderer ? '#4488ff' : '#888888';

        // === TOKEN ===
        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        var token = 'SAMPLE-';
        for(var i=0; i<6; i++) token += chars.charAt(Math.floor(Math.random()*chars.length));

        // === SVG HELPERS ===
        function createPath(d, stroke, width, opacity, layer) {
          var p = document.createElementNS('http://www.w3.org/2000/svg','path');
          p.setAttribute('d', d);
          p.setAttribute('stroke', stroke);
          p.setAttribute('stroke-width', width);
          p.setAttribute('fill', 'none');
          p.setAttribute('stroke-linecap', 'round');
          p.setAttribute('opacity', opacity);
          layer.appendChild(p);
          return p;
        }
        function createCircle(x, y, r, fill, opacity, layer) {
          var c = document.createElementNS('http://www.w3.org/2000/svg','circle');
          c.setAttribute('cx', x); c.setAttribute('cy', y);
          c.setAttribute('r', r); c.setAttribute('fill', fill);
          c.setAttribute('opacity', opacity);
          layer.appendChild(c);
          return c;
        }
        function createText(x, y, text, fill, size, layer, anchor) {
          var t = document.createElementNS('http://www.w3.org/2000/svg','text');
          t.setAttribute('x', x); t.setAttribute('y', y);
          t.setAttribute('fill', fill); t.setAttribute('font-size', size);
          t.setAttribute('font-family', 'monospace');
          t.setAttribute('text-anchor', anchor || 'middle');
          t.setAttribute('opacity', '0');
          t.textContent = text;
          layer.appendChild(t);
          return t;
        }

        // === SEED ===
        createCircle(cx, cy, 4, seedGrad, 0.6, rootLayer);
        createCircle(cx, cy, 8, trustColor, 0.2, rootLayer);

        // === BRANCH SYSTEM ===
        var branches = [];
        var leaves = [];
        var blooms = [];
        var frame = 0;
        var growthSpeed = E.isAutomated ? 1.5 : 1.0;
        var maxBranches = E.isAutomated ? 8 : 12;
        var interactionBranches = 0;
        var mouseX = cx, mouseY = cy;
        var mouseMoved = false;
        var mouseMoveTime = 0;
        var clickCount = 0;

        // Mouse tracking
        svg.addEventListener('mousemove', function(e) {
          var rect = svg.getBoundingClientRect();
          mouseX = (e.clientX - rect.left) * (1920 / rect.width);
          mouseY = (e.clientY - rect.top) * (1080 / rect.height);
          mouseMoved = true;
          mouseMoveTime = Date.now();
        });
        svg.addEventListener('click', function() { clickCount++; });
        svg.addEventListener('touchstart', function(e) {
          var rect = svg.getBoundingClientRect();
          mouseX = (e.touches[0].clientX - rect.left) * (1920 / rect.width);
          mouseY = (e.touches[0].clientY - rect.top) * (1080 / rect.height);
          mouseMoved = true;
          mouseMoveTime = Date.now();
        });

        function Branch(x, y, angle, length, depth, maxDepth, color) {
          this.x = x; this.y = y;
          this.angle = angle;
          this.targetLength = length;
          this.currentLength = 0;
          this.depth = depth;
          this.maxDepth = maxDepth;
          this.color = color;
          this.width = Math.max(0.5, 3 - depth * 0.5);
          this.growthRate = (0.5 + Math.random() * 1.5) * growthSpeed;
          this.finished = false;
          this.children = [];
          var endX = x + Math.cos(angle) * length;
          var endY = y + Math.sin(angle) * length;
          this.path = createPath('M'+x+','+y+' L'+x+','+y, this.color, this.width, 0.3 + (1 - depth/maxDepth) * 0.5, branchLayer);
          this.grow = function() {
            if(this.finished) return;
            this.currentLength += this.growthRate;
            if(this.currentLength >= this.targetLength) {
              this.currentLength = this.targetLength;
              this.finished = true;
              this.spawnChildren();
            }
            var ex = this.x + Math.cos(this.angle) * this.currentLength;
            var ey = this.y + Math.sin(this.angle) * this.currentLength;
            this.path.setAttribute('d', 'M'+this.x+','+this.y+' L'+ex+','+ey);
          };
          this.spawnChildren = function() {
            if(this.depth >= this.maxDepth) {
              var leafColor = Math.random() > 0.5 ? trustColor : secondaryColor;
              var leaf = createCircle(
                this.x + Math.cos(this.angle) * this.targetLength,
                this.y + Math.sin(this.angle) * this.targetLength,
                0, leafColor, 0, leafLayer
              );
              leaves.push({ el: leaf, targetR: 2 + Math.random() * 3, currentR: 0, color: leafColor });
              return;
            }
            var numChildren = Math.floor(Math.random() * 2) + 2;
            for(var i=0; i<numChildren; i++) {
              var newAngle = this.angle + (Math.random() - 0.5) * 1.2;
              var newLength = this.targetLength * (0.6 + Math.random() * 0.3);
              var childColor = this.depth === 0 ? trustColor : (Math.random() > 0.7 ? tertiaryColor : this.color);
              var child = new Branch(
                this.x + Math.cos(this.angle) * this.targetLength,
                this.y + Math.sin(this.angle) * this.targetLength,
                newAngle, newLength, this.depth + 1, this.maxDepth, childColor
              );
              this.children.push(child);
              branches.push(child);
            }
          };
        }

        // Initial branches
        var initialAngles = [-Math.PI/2, -Math.PI/2 - 0.5, -Math.PI/2 + 0.5, -Math.PI/2 - 1.0, -Math.PI/2 + 1.0];
        for(var ia=0; ia<initialAngles.length; ia++) {
          branches.push(new Branch(cx, cy, initialAngles[ia], 60 + Math.random() * 40, 0, 4, trustColor));
        }

        function spawnInteractionBranch() {
          if(!mouseMoved || Date.now() - mouseMoveTime > 3000) return;
          var angle = Math.atan2(mouseY - cy, mouseX - cx) + (Math.random() - 0.5) * 0.5;
          branches.push(new Branch(cx, cy, angle, 40 + Math.random() * 30, 0, 3, secondaryColor));
          interactionBranches++;
        }

        // === BLOOM SYSTEM ===
        var bloomPhase = 0;
        var bloomElements = [];
        function createBloom() {
          for(var r=20; r<=100; r+=20) {
            var circle = document.createElementNS('http://www.w3.org/2000/svg','circle');
            circle.setAttribute('cx', cx); circle.setAttribute('cy', cy);
            circle.setAttribute('r', r); circle.setAttribute('fill', 'none');
            circle.setAttribute('stroke', trustColor); circle.setAttribute('stroke-width', '0.5');
            circle.setAttribute('opacity', '0');
            circle.setAttribute('stroke-dasharray', '4 8');
            bloomLayer.appendChild(circle);
            blooms.push({ el: circle, targetOp: 0.15, currentOp: 0, delay: r/20 });
          }
          var tokenText = createText(cx, cy - 80, token, trustColor, '14', tokenLayer, 'middle');
          var tokenLabel = createText(cx, cy - 60, 'SAMPLE IDENTIFIER', '#444', '8', tokenLayer, 'middle');
          blooms.push({ el: tokenText, targetOp: 0.9, currentOp: 0, delay: 8 });
          blooms.push({ el: tokenLabel, targetOp: 0.5, currentOp: 0, delay: 8 });
          // Reveal telemetry
          telemetry.setAttribute('opacity', '1');
          sampleId.textContent = 'SAMPLE: ' + token;
          sampleId.setAttribute('fill', '#333');
        }

        // === ANIMATION LOOP ===
        function animate() {
          frame++;
          var allFinished = true;
          for(var bi=0; bi<branches.length; bi++) {
            branches[bi].grow();
            if(!branches[bi].finished) allFinished = false;
          }
          for(var li=0; li<leaves.length; li++) {
            var leaf = leaves[li];
            if(leaf.currentR < leaf.targetR) {
              leaf.currentR += 0.1;
              leaf.el.setAttribute('r', leaf.currentR);
              leaf.el.setAttribute('opacity', Math.min(0.8, leaf.currentR / leaf.targetR));
            }
          }
          if(frame % 120 === 0 && branches.length < maxBranches + 10) {
            spawnInteractionBranch();
          }
          if(allFinished && leaves.length > 5 && bloomPhase === 0) {
            bloomPhase = 1;
            createBloom();
            document.getElementById('t-phase').textContent = 'PHASE: BLOOM';
          }
          if(bloomPhase === 1) {
            for(var bpi=0; bpi<blooms.length; bpi++) {
              var be = blooms[bpi];
              if(frame > be.delay * 60) {
                be.currentOp += (be.targetOp - be.currentOp) * 0.03;
                be.el.setAttribute('opacity', be.currentOp);
              }
            }
          }
          // Update telemetry
          document.getElementById('t-branches').textContent = 'BRANCHES: ' + branches.length;
          document.getElementById('t-leaves').textContent = 'LEAVES: ' + leaves.length;
          document.getElementById('t-interaction').textContent = 'INTERACTION: ' + (mouseMoved ? (Date.now() - mouseMoveTime < 3000 ? 'ACTIVE' : 'IDLE') : 'NONE');
          document.getElementById('t-trust').textContent = 'TRUST: ' + (E.automationScore === 0 ? 'TRUSTED' : (E.automationScore <= 2 ? 'VERIFY' : 'DENIED'));
          document.getElementById('t-token').textContent = 'TOKEN: ' + token;
          document.getElementById('t-token').setAttribute('fill', trustColor);

          requestAnimationFrame(animate);
        }

        // === HASH & EXPOSE ===
        function hash(str) {
          var h = 0;
          for(var i=0; i<str.length; i++) {
            var c = str.charCodeAt(i);
            h = ((h << 5) - h) + c;
            h = h & h;
          }
          return Math.abs(h).toString(16).toUpperCase().padStart(8, '0');
        }
        var sessionHash = hash(token + JSON.stringify(E.screen) + E.userAgent);

        window.__SAMPLE__ = {
          token: token,
          sessionHash: sessionHash,
          env: E,
          trustColor: trustColor,
          secondaryColor: secondaryColor,
          tertiaryColor: tertiaryColor,
          timestamp: Date.now(),
          errors: errors
        };

        try {
          if(window.BroadcastChannel) {
            var bc = new BroadcastChannel('sample_growth');
            bc.postMessage(window.__SAMPLE__);
          }
        } catch(e){}

        // Start
        animate();
      })();
    ]]>
  </script>
</svg>

- 🌱 I’m currently learning ...<img width="300" height="169" alt="aurora_v7_growth" src="https://github.com/user-attachments/assets/fe6ea116-df29-4ab7-b5c5-ca76ddb2aed2" />
- 👯 I’m looking to collaborate on ...
- 🤔 I’m looking for help with ...
- 💬 Ask me about ...
- 📫 How to reach me: ...
- 😄 Pronouns: ...
- ⚡ Fun fact: ...
-->
