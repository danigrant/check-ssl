window.onload = function(){
	//format string
	var currURL = window.location.host;
	var url = currURL.split("www.")[1];
	console.log(url);

	var xhr = new XMLHttpRequest();
	xhr.open("GET", ("https://shaaaaaaaaaaaaa.com/api/check/" + url), true);
	xhr.onreadystatechange = function() {
	  if (xhr.readyState == 4) {
	    var resp = JSON.parse(xhr.responseText);
	    var diagnosis = resp.diagnosis;
	    switch (diagnosis) {
	    	case "good":
	    		chrome.browserAction.setIcon({path: 'good.png'});
	    		console.log("good");
	    		break;
	    	case "almost":
	    		chrome.browserAction.setIcon({path: 'almost.png'});
	    		console.log("almost");
		    	break;
	    	case "bad":
	    		chrome.browserAction.setIcon({path: 'bad.png'});
	    		console.log("oof");
		    	break;
	    }
	  }
	}
	xhr.send();
};