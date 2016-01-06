var iframe = document.getElementsByTagName("iframe")[1];
var innerDoc = iframe.contentDocument || iframe.contentWindow.document;

function getImageUrl(){
	var img_url = innerDoc.getElementsByTagName("img")[1].src;
	console.log(img_url);

	return img_url;
};

getImageUrl();
function requestResult(){
	var xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadstatechange = function(){
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
			var result = xmlhttp.responseText;
			console.log(result);
			innerDoc.getElementsByName("txt_check")[0].value = result;
		}
	};

	xmlhttp.open("GET", "http://202.141.160.95:40001/captchaless/epc?url="+ getImageUrl(), true);
	xmlhttp.send();
};

requestResult();