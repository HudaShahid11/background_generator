var h3= document.getElementsByTagName("h3")[0];
var color1= document.getElementById("color1");
var color2= document.getElementById("color2");
var body = document.getElementById("gradient");

function gradient(){
    
    body.style.background = "linear-gradient(to right,"+ color1.value +", "+ color2.value+ ")";
    h3.textContent = body.style.background +";";
}
color1.addEventListener("input",function(){
    
    gradient();
});
color2.addEventListener("input",function(){
    gradient();
});