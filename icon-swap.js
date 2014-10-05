chrome.runtime.onMessage.addListener(
  function(request, sender) {
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