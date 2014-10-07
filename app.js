function formatURL() {
	var currURL = window.location.host;
	var url = currURL;
	// remove 'www'
	if (currURL.indexOf("www") >= 0){
		url = currURL.split("www.")[1];
	}
	// remove any path after web address
	if(window.location.pathname !== "/") {
		var pathname = window.location.pathname;
		url = url.split(pathname)[0];
	}
	return url;
}

function sendRequest(url) {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", ("https://shaaaaaaaaaaaaa.com/api/check/" + url), true);
	xhr.onreadystatechange = function() {
	  if (xhr.readyState == 4) {
	    var resp = JSON.parse(xhr.responseText);
	    var diagnosis = resp.diagnosis;
	    switch (diagnosis) {
	    	case "good":
	    		chrome.runtime.sendMessage({diagnosis: "good"});
	    		break;
	    	case "almost":
	    		chrome.runtime.sendMessage({diagnosis: "almost"});
		    	break;
	    	case "bad":
	    		chrome.runtime.sendMessage({diagnosis: "bad"});
		    	break;
	    }
	  }
	}
	xhr.send();
}

sendRequest(formatURL());
