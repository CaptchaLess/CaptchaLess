function getImageUrl(){
	
	var img = document.getElementsByTagName("img")[5];
	var dataUrl = convertImageToDataURL(img, "jpg").replace(/^data:image\/(png|jpg|jpeg);base64,/,"");
	console.log(dataUrl);
	return dataUrl;

};

function requestResult(){
	var xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = function(){
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
			var result = xmlhttp.responseText;
			console.log(result);
			document.getElementsByName("txt_check")[0].value = result;
		}
	};

	xmlhttp.open("GET", "http://202.141.160.95:40002/captchaless/yjs/?url="+ getImageUrl(), true);
	xmlhttp.send();
};

requestResult();