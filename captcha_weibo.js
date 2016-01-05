function sendImage2Server(){
	var img_url = document.getElementsByClassName("code W_fl")[0].firstChild.src;

	while(img_url === "about:blank"){
		//the check code does not appear at this time point.
	}

	console.log(img_url);
};
sendImage2Server();
