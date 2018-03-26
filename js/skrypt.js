var menu0 = document.getElementById("b0");
var menu1 = document.getElementById("b1");
var menu2 = document.getElementById("b2");
var menu3 = document.getElementById("b3");
var menu4 = document.getElementById("b4");
var menu5 = document.getElementById("b5");
var menu6 = document.getElementById("b6");




var stara='.menu0';


function showing(nr)
{
$('.menu'+stara).removeClass('menuA');
$('.menu'+nr).addClass('menuA');
stara=nr;
}

