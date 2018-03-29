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


    $(document).ready(function() {
        var NavY = $('#extender').offset().top;
          
        var stickyNav = function(){
        var ScrollY = $(window).scrollTop();
               
        if (ScrollY > NavY) { 
            $('a.navlink').addClass('navS');
        } else {
            $('a.navlink').removeClass('navS'); 
        }
        };
          
        stickyNav();
          
        $(window).scroll(function() {
            stickyNav();
        });
        });

// handle links with @href started with '#' only
$(document).on('click', 'a[href^="#"]', function(e) {
    // target element id
    var id = $(this).attr('href');
    
    // target element
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }
    
    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();
    
    // top position relative to the document
    var pos = $id.offset().top;
    
    // animated top scrolling
    $('body, html').animate({scrollTop: pos});
});
