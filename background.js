//listen for tab changes
chrome.tabs.onActivated.addListener(function() {
	chrome.browserAction.setBadgeBackgroundColor({color: [255,0,0,255]});
	chrome.tabs.executeScript({file: "app.js"}, function() {
        if (chrome.runtime.lastError) {
        	chrome.browserAction.setBadgeBackgroundColor({color: [0,0,0,0]});
        	chrome.browserAction.setBadgeText({text: ""});
            console.error(chrome.runtime.lastError.message);
        }
    });
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