// ocultar menu con es scroll
$(document).ready(function () {

    new jBox('Tooltip', {
        attach: '.jBox-Tooltip',
        theme: 'TooltipDark',
        delayOpen: 200,
        content: $('#grabMe'),
    });

    new jBox('Modal', {
        attach: '.verDisponibilidad',
        getTitle: 'data-jbox-title',
        getContent: 'data-jbox-content'
    });
    
    $('.verDisponibilidad').click(function (e) {
        e.preventDefault();
    })
    
    // Set the date we're counting down to
    var countDownDate = new Date("Apr 5, 2018 15:37:25").getTime();

// Update the count down every 1 second
    var x = setInterval(function() {

        // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now an the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        $(".expira").text(days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ");

        // If the count down is over, write some text
        if (distance < 0) {
            clearInterval(x);
            $(".expira").text("Expired");
        }
    }, 1000);
})

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


// Añadimos efecto al scroll de los links , para que el movimiento sea mas suave
$("a").on('click', function(event) {

    // El hash lo que hace es leer el atributo HREF de 'a' y si encuentra alguna '#'
    // coge el elemento que empieza por '#'
    if (this.hash !== "") {
        // Previene el comportamiento "natural" de los enlaces
        event.preventDefault();

        // Guardamos el hash
        var hash = this.hash;

        // Usamos la funcion animate de JQuery para hacer que el scroll sea mas suave
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 1000, function(){

            // Modifica la URL cuando acaba el Scroll (ver url)
            window.location.hash = hash;
        });
    } // End if
});

