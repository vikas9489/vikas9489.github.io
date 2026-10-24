window.OneSignalDeferred = window.OneSignalDeferred || [];
OneSignalDeferred.push(async function(OneSignal) {
  await OneSignal.init({
    appId: "d5d2f97e-696a-4b8b-b5a6-801a1e0e18b0",
    notifyButton: { enable: true },
  });
  const permission = await OneSignal.getNotificationPermission();
  if (permission === 'default') {
    setTimeout(() => OneSignal.Slidedown.promptPush(), 4000);
  }
});
