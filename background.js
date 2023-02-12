browser.menus.create({
  id: 'ichi_moe_lookup',
  title: 'Look up on ichi.moe',
  contexts: ['selection']
});

browser.menus.onClicked.addListener((info) => {
  if (info.menuItemId === 'ichi_moe_lookup') {
    const selection = info.selectionText;
    browser.tabs.create({
      url: `https://ichi.moe/cl/qr/?q=+${selection}+&r=htr`
    });
  }
});
