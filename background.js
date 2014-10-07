//listens for tab change
chrome.tabs.onActivated.addListener(function() {
	chrome.browserAction.setBadgeBackgroundColor({color: [255,0,0,255]});
	chrome.tabs.executeScript({file: "app.js"}, function() {
        //on error - log error message and set badge to transparent
        if (chrome.runtime.lastError) {
        	chrome.browserAction.setBadgeBackgroundColor({color: [0,0,0,0]});
        	chrome.browserAction.setBadgeText({text: ""});
            console.error(chrome.runtime.lastError.message);
        }
    });
});


chrome.runtime.onMessage.addListener(
  function(request, sender) {
    //log diagnosis to badge
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