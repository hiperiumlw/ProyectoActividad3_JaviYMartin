// ocultar menu con es scroll

$(function (){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
           //$('#menu').addClass("normal");
            $('#menu').fadeOut(1000);
        } else {
           // $("#menu").removeClass("normal");
            $('#menu').fadeIn(1000);
        }
    });
});

