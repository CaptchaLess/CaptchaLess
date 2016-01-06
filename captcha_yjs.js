function getImageUrl(){
	var img_url = document.getElementsByTagName("img")[5].src;
	console.log(img_url);
	return img_url;
};

function requestResult(){
	var xmlhttp = new XMLHttpRequest();

	console.log("in requestResult");
	xmlhttp.onreadstatechange = function(){
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
			var result = xmlhttp.responseText;
			console.log(result);
			document.getElementsByName("txt_check")[0].value = result;
		}
	};

	xmlhttp.open("GET", "http://202.141.160.95:40001/captchaless/yjs/?url="+ getImageUrl(), true);
	xmlhttp.send();
};

requestResult();