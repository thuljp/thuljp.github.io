// 离线缓存：应用外壳先走网络、失败再用缓存（保证更新及时）；AI 请求不缓存
const CACHE = 'yujing-v5';
const SHELL = [
  './', 'index.html', 'css/style.css', 'icon.svg', 'manifest.webmanifest',
  'js/app.js', 'js/store.js', 'js/fsrs.js', 'js/util.js', 'js/ui.js', 'js/speech.js', 'js/ai.js', 'js/reminder.js', 'js/sync.js',
  'js/data/fr.js', 'js/data/ja.js', 'js/data/found.js', 'js/data/course_fr.js', 'js/data/course_ja.js',
  'js/views/review.js', 'js/views/scene.js', 'js/views/library.js', 'js/views/progress.js', 'js/views/settings.js', 'js/views/learn.js', 'js/views/course.js', 'js/views/practice.js',
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET') return;
  const sameOrigin = url.origin === location.origin;
  const isFont = /fonts\.(googleapis|gstatic)\.com$/.test(url.hostname);
  if (!sameOrigin && !isFont) return;
  e.respondWith(
    fetch(e.request).then(res => {
      if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); }
      return res;
    }).catch(() => caches.match(e.request).then(r => r || caches.match('index.html')))
  );
});
self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(self.clients.matchAll({ type: 'window' }).then(list => {
    const c = list.find(x => 'focus' in x);
    return c ? c.focus() : self.clients.openWindow('./#/today');
  }));
});
