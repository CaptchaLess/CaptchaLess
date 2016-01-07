function convertImageToDataURL(img, type){
	var canvas = document.createElement("canvas");
	canvas.width = img.width;
	canvas.height = img.height;
	var ctx = canvas.getContext("2d");
	ctx.drawImage(img, 0, 0);
	var dataURL = canvas.toDataURL("image/" +type);
	console.log("origin base64:"+dataURL);
	dataURL=dataURL.replace(/^data:image\/(png|jpg|jpeg|bmp);base64,/,"");
	console.log("cleared base64:"+dataURL);

	return dataURL;
}

