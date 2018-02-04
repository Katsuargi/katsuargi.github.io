function glow(){
	while (document.getElementById("glowy").style.opacity < "0.3") {
		document.getElementById("glowy").style.opacity = document.getElementById("glowy").style.opacity + .01;
	}
	while (document.getElementById("glowy").style.opacity > "0.0") {
		document.getElementById("glowy").style.opacity = document.getElementById("glowy").style.opacity - .01;
	}
}