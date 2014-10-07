chrome.runtime.onMessage.addListener(
  function(request, sender) {
  	console.log("SETTING ICON");
    if (request.diagnosis == "bad") {
      chrome.browserAction.setIcon({path: 'bad.png'});
    }
    if (request.diagnosis == "almost") {
    	chrome.browserAction.setIcon({path: 'almost.png'});
    }
    if (request.diagnosis == "good") {
    	chrome.browserAction.setIcon({path: 'good.png'});
    }
  });

// check for active page
//chrome.tabs.onActivated.addListener(function() {
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	console.log("active tab recognized");
  chrome.tabs.sendMessage(tabs[0].id, {active: "true"}, function(response) {
    if(response) console.log("got a response!");
  });
});