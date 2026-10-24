window.OneSignalDeferred = window.OneSignalDeferred || [];
OneSignalDeferred.push(async function(OneSignal) {
  await OneSignal.init({
    appId: "d5d2f97e-696a-4b8b-b5a6-801a1e0e18b0",
    notifyButton: { enable: true },
  });
  const permission = await OneSignal.getNotificationPermission();
  if (permission !== 'default') return;
  // Ask only once the reader has shown interest (scrolled halfway), not on arrival over the title
  const onScroll = () => {
    const doc = document.documentElement;
    if (window.scrollY + window.innerHeight < doc.scrollHeight * 0.5) return;
    window.removeEventListener('scroll', onScroll);
    OneSignal.Slidedown.promptPush();
  };
  window.addEventListener('scroll', onScroll, { passive: true });
});

// Visitor analytics (GoatCounter: no cookies, so no consent banner needed).
// count.js skips localhost and file:// on its own.
(function() {
  const GOATCOUNTER = 'https://bytevikas.goatcounter.com';
  const s = document.createElement('script');
  s.async = true;
  s.src = 'https://gc.zgo.at/count.js';
  s.dataset.goatcounter = GOATCOUNTER + '/count';
  document.head.appendChild(s);

  // Blog posts show their view count next to the read time
  document.addEventListener('DOMContentLoaded', function() {
    const readTime = document.querySelector('.post-meta .read-time');
    if (!readTime || location.protocol !== 'https:') return;
    const canonical = document.querySelector('link[rel="canonical"]');
    const path = canonical ? new URL(canonical.href).pathname : location.pathname;
    fetch(GOATCOUNTER + '/counter/' + encodeURIComponent(path) + '.json')
      .then(function(r) { return r.ok ? r.json() : null; })
      .then(function(data) {
        if (!data || !data.count || data.count === '0') return;
        const views = document.createElement('span');
        views.className = 'read-time';
        views.textContent = data.count + (data.count === '1' ? ' view' : ' views');
        readTime.after(views);
      })
      .catch(function() {});
  });
})();
