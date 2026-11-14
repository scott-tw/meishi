/* 名片設計工坊 service worker: app shell precache + on-demand caching (fonts, Google Fonts) */
const V='card-studio-v4';
const SHELL=['./','index.html','qrcode.js','opentype.min.js','manifest.webmanifest','icon-192.png','icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==V).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
  const r=e.request; if(r.method!=='GET') return;
  const u=new URL(r.url);
  const isFontAsset=/\/f_[A-Za-z]+_\d+\.js$/.test(u.pathname);
  const isGF=u.hostname==='fonts.googleapis.com'||u.hostname==='fonts.gstatic.com';
  if(isFontAsset||isGF){ // cache-first: large, versionless assets
    e.respondWith(caches.open(V).then(c=>c.match(r).then(hit=>hit||fetch(r).then(res=>{if(res.ok||res.type==='opaque')c.put(r,res.clone());return res;}))));
    return;
  }
  if(u.origin===location.origin){ // network-first for the app itself, fall back to cache offline
    e.respondWith(fetch(r).then(res=>{const cp=res.clone();caches.open(V).then(c=>c.put(r,cp));return res;}).catch(()=>caches.match(r).then(h=>h||caches.match('index.html'))));
  }
});
