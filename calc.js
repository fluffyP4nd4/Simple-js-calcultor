
function screen( val){
	document.getElementById("output").value+=val;
}

function clearScr(){
	document.getElementById("output").value='';
}

function result(){
	let x = document.getElementById("output").value;
	document.getElementById("output").value=eval(x);
}
