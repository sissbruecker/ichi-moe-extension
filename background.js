const browserApi = typeof browser !== 'undefined' ? browser : chrome;

browserApi.contextMenus.create({
  id: 'ichi_moe_lookup',
  title: 'Look up on ichi.moe',
  contexts: ['selection']
});

browserApi.contextMenus.onClicked.addListener((info) => {
  if (info.menuItemId === 'ichi_moe_lookup') {
    const selection = info.selectionText;
    browserApi.tabs.create({
      url: `https://ichi.moe/cl/qr/?q=+${selection}+&r=htr`
    });
  }
});
