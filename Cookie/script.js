F = 0;

function feed(){
	F = F + 1;
	document.getElementById("num").innerHTML = F;
}

function reset(){
	F = 0;
	document.getElementById("num").innerHTML = 0;
}