
self.addEventListener('beforeunload', function (event) {
  event.returnValue = "你确定要离开此页面吗"
});

self.addEventListener('load', async function () {
  BABYLON.recast = await Recast()
  const fetchInitData = await fetch('/api/init')
  blocklyExt.createEditor('root', (await fetchInitData.json()))
});

