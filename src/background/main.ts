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
    if (info.selectionText && info.selectionText?.length > 0) {
      chrome.runtime.sendMessage({
        action: "translateSelectedText",
        text: info.selectionText,
      });
    }
  }
});
