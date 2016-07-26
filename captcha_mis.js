function parseCaptcha(){
	var img = document.getElementById("dfyctp");
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
			console.log(result);
			document.getElementById("check").value = result;
		}
	};

	xmlhttp.open("GET", "http://115.28.30.25:8000/captchaless/mis/?url="+ dataURL, true);
	xmlhttp.send();
}

parseCaptcha();
