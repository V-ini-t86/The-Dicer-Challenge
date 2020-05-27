var num ;
var num1 ;

function dice1 () {
	var number = Math.random();
	var no;
	number = (number * 6);
	no = Math.floor(number) + 1;
	num = no;
	if (no === 1) {
		var image = document.getElementsByTagName("img")[0];
		image.src = "images/dice1.png"
	}else if (no === 2) {
		var image1 = document.getElementsByTagName("img")[0];
		image1.src = "images/dice2.png"
	}else if (no === 3) {
		var image3 = document.getElementsByTagName("img")[0];
		image3.src = "images/dice3.png"
	}else if (no === 4) {
		var image4 = document.getElementsByTagName("img")[0];
		image4.src = "images/dice4.png"
	}else if (no === 5) {
		var image5 = document.getElementsByTagName("img")[0];
		image5.src = "images/dice5.png"
	}else if (no === 6) {
		var image6 = document.getElementsByTagName("img")[0];
		image6.src = "images/dice6.png"
	}
}
function dice2 () {
	var number = Math.random();
	var no;
	number = (number * 6);
	no = Math.floor(number) + 1;
	num1 = no;
	if (no === 1) {
		var image = document.getElementsByTagName("img")[1];
		image.src = "images/dice1.png"
	}else if (no === 2) {
		var image1 = document.getElementsByTagName("img")[1];
		image1.src = "images/dice2.png"
	}else if (no === 3) {
		var image3 = document.getElementsByTagName("img")[1];
		image3.src = "images/dice3.png"
	}else if (no === 4) {
		var image4 = document.getElementsByTagName("img")[1];
		image4.src = "images/dice4.png"
	}else if (no === 5) {
		var image5 = document.getElementsByTagName("img")[1];
		image5.src = "images/dice5.png"
	}else if (no === 6) {
		var image6 = document.getElementsByTagName("img")[1];
		image6.src = "images/dice6.png"
	}
}
function compare() {
	if( num > num1) {
		document.querySelector("h1").innerText = "Player 1 Wins";
	}else if (num < num1) {
		document.querySelector("h1").innerText = "Player 2 Wins";
	}else if (num === num1) {
		document.querySelector("h1").innerText = "Tie";
	}
}


dice2();
dice1();
compare();
