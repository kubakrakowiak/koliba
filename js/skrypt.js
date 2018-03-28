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


$(document).ready(function() {
    var NavY = $('main').offset().top-200;
      
    var stickyNav = function(){
    var ScrollY = $(window).scrollTop();
           
    if (ScrollY > NavY) { 
        $('#logo').addClass('logoS');
    } else {
        $('#logo').removeClass('logoS'); 
    }
    };
      
    stickyNav();
      
    $(window).scroll(function() {
        stickyNav();
    });
    });




    $("#n0").click(function() {
        $('html, body').animate({
            scrollTop: $("#work").offset().top
        }, 2000);
    });
    $("#n1").click(function() {
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 2000);
    });
    $("#n2").click(function() {
        $('html, body').animate({
            scrollTop: $("#party").offset().top
        }, 2000);
    });
    $("#n3").click(function() {
        $('html, body').animate({
            scrollTop: $("#gallery").offset().top
        }, 2000);
    });
    $("#n4").click(function() {
        $('html, body').animate({
            scrollTop: $("#menu").offset().top
        }, 2000);
    });
    $("#n5").click(function() {
        $('html, body').animate({
            scrollTop: $("#news").offset().top
        }, 2000);
    });
    $("#n6").click(function() {
        $('html, body').animate({
            scrollTop: $("#home").offset().top
        }, 2000);
    });
