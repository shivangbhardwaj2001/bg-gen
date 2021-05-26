var css=document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2= document.querySelector(".color2");
// console.log(css);
// console.log(color1);
 var body = document.getElementById("gradient");

// console.log(body);


 color1.addEventListener("input",colorChange)
 
 color2.addEventListener("input",colorChange)



 function colorChange(){
 	body.style.background = "linear-gradient(to right, " 
 	+ color1.value+","+color2.value+")";

 	css.textContent=body.style.background+";";
 };
 