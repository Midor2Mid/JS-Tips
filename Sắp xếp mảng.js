inputArray.sort(function(a, b){
	return b - a; //giảm dần
	//return a - b; //tăng dần
	//Mở rộng cho độ dài string array
	return b.length - a.length; //giảm dần
	//return a.length - b.length; //tăng dần
});
