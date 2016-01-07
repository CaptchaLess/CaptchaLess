function getImageUrl(){
	var img_url = document.getElementById("random").src;
	console.log(img_url);
	return img_url;
};

function requestResult(){
	var xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = function(){
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
			var result = xmlhttp.responseText;
			console.log(result);
			document.getElementById("check").value = result;
		}
	};

	xmlhttp.open("GET", "http://202.141.160.95:40002/captchaless/mis/?url="+ getImageUrl(), true);
	xmlhttp.send();
}

requestResult();
