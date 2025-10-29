//your JS code here. If required.
function message(){
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve("Hello world!");
		},1000)
	})
}

message().then((msg) => {
	document.getElementById("output").textContent = msg;
})