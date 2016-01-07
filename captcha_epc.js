var iframe = document.getElementsByTagName("iframe")[1];
var innerDoc = iframe.contentDocument || iframe.contentWindow.document;

function getImageUrl(){
	var img = innerDoc.getElementsByTagName("img")[1];
	var dataUrl = convertImageToDataURL(img, "bmp").replace(/^data:image\/(png|jpg|jpeg);base64,/,"");
	console.log(dataUrl);
	return dataUrl;
};

function requestResult(){
	var xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = function(){
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
			var result = xmlhttp.responseText;
			console.log(result);
			innerDoc.getElementsByName("txt_check")[0].value = result;
		}
	};

	xmlhttp.open("GET", "http://202.141.160.95:40002/captchaless/epc/?url="+ getImageUrl(), true);
	xmlhttp.send();
};

requestResult();