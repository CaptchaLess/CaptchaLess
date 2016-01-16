function parseCaptcha(){
	
	var img = document.getElementsByTagName("img")[5];
	if (img !== "undefined" && img.width !== 0) {
		var dataURL = convertImageToDataURL(img, "jpg");
		requestResult(dataURL);
		return;
	}
	else {
		img.onload = function(){
		var dataURL = convertImageToDataURL(this, "jpg");
		
		requestResult(dataURL);
		return;
		};
	}
	
};

function requestResult(dataURL){
	var xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = function(){
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
			var result = xmlhttp.responseText;
			console.log('result:'+result);
			document.getElementsByName("txt_check")[0].value = result;
		}
	};

	xmlhttp.open("GET", "http://115.28.30.25:8000/captchaless/yjs/?url="+ dataURL, true);
	xmlhttp.send();
};

parseCaptcha();


