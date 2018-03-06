var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var css = document.querySelector("h3");
var btn = document.querySelector(".rnd");
var randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}

function rndBg() {
	body.style.background =
	"linear-gradient(to right, " 
	+ "rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")"
	+ ", "
	+ "rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")"
	+ ")";

	css.textContent = body.style.background + ";";

}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
btn.addEventListener("click", rndBg);
