var iframe = document.getElementsByTagName("iframe")[1];
var innerDoc = iframe.contentDocument || iframe.contentWindow.document;

function parseCaptcha(){
	var img = innerDoc.getElementsByTagName("img")[1];
	if (img !== "undefined" && img.width !== 0) {
		var dataURL = convertImageToDataURL(img, "bmp");
		requestResult(dataURL);
		return;
	}
	else {
		img.onload = function(){
			var dataURL = convertImageToDataURL(this, "bmp");
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
			innerDoc.getElementsByName("txt_check")[0].value = result;
		}
	};

	xmlhttp.open("GET", "http://115.28.30.25:8000/captchaless/epc/?url="+ dataURL, true);
	xmlhttp.send();
};

parseCaptcha();