function getImageUrl(){
	var img_url = document.getElementsByClassName("code W_fl")[0].firstChild.src;

	if(img_url === "about:blank"){
		//the check code does not appear at this time point.
	}
	document.getElementsByName("verifycode")[0].value = "1111";
	console.log(img_url);
	return img_url;
};

function requestResult(){
	var xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = function(){
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
			var result = xmlhttp.responseText;
			console.log(result);
			document.getElementsByName("verifycode")[0].value = result;
		}
	};

	xmlhttp.open("GET", "http://115.28.30.25:8000/captchaless/weibo/?url="+ getImageUrl(), true);
	xmlhttp.send();
}

requestResult();