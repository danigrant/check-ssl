//format string
function formatURL() {
	var currURL = window.location.host;
	var url = currURL;
	
	// if exists, move the 'www'
	if (currURL.indexOf("www") >= 0){
		url = currURL.split("www.")[1];
		console.log("splitting from www: " + url);
	}
	// take out extra path after address
	if(window.location.pathname !== "/") {
		var pathname = window.location.pathname;
		url = url.split(pathname)[0];
		console.log("split pathname now " + url);
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
	    		console.log("good");
	    		break;
	    	case "almost":
	    		chrome.runtime.sendMessage({diagnosis: "almost"});
	    		console.log("almost");
		    	break;
	    	case "bad":
	    		chrome.runtime.sendMessage({diagnosis: "bad"});
	    		console.log("bad");
		    	break;
	    }
	  }
	}
	xhr.send();
}

sendRequest(formatURL());
