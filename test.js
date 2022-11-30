var _ = require('lodash');
var array= [2, 3, 4, 5, 6, 7];
console.log(_.pull(array, 4, 6));


var h5 = document.querySelector("h5");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector(".gradient");

function setgradient(){
	body.style.background = "linear-gradient(to right, " +
	color1.value + ", " + color2.value +
	")";
	h5.textContent = body.style.background + ";";
}
color1.addEventListener("input", setgradient);

color2.addEventListener("input", setgradient);

