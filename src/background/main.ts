chrome.sidePanel
  .setPanelBehavior({ openPanelOnActionClick: true })
  .catch((error) => console.error(error));

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "translateSelectedText",
    title: "Translate selected text",
    contexts: ["selection"],
  });
});

chrome.contextMenus.onClicked.addListener((info) => {
  if (info.menuItemId === "translateSelectedText") {
    chrome.tabs.create({
      url: `https://translate.google.com/?sl=auto&tl=en&text=${info.selectionText}`,
    });
  }
});
