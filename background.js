//listen for tab changes
chrome.tabs.onActivated.addListener(function(tab) {
	chrome.tabs.executeScript({file: "app.js"});
	console.log("tab changed");
});

//at tab change, the app.js file will send back a message with what should go in badge
chrome.runtime.onMessage.addListener(
  function(request, sender) {
  	console.log("SETTING ICON");
    if (request.diagnosis == "bad") {
      chrome.browserAction.setBadgeText({text: "bad"});
    }
    if (request.diagnosis == "almost") {
    	chrome.browserAction.setBadgeText({text: "almost"});
    }
    if (request.diagnosis == "good") {
    	chrome.browserAction.setBadgeText({text: "good"});
    }
});