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
    
    // Ponemos la fecha en la cual se acaba la oferta
    var countDownDate = new Date("Apr 5, 2018 15:37:25").getTime();

// Actualizamos el tiempo cada segundo
    var x = setInterval(function() {

        // Escogemos la fecha y hora de hoy
        var now = new Date().getTime();

        // Calculamos la diferencia entre la fecha de hoy y la fecha en la que se acaba la oferta
        var distance = countDownDate - now;

        // Calculamos el dia , la hora , los minutos y los segundos
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Le asignamos el texto a la id .expira
        $(".expira").text(days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ");

        // Si la cuenta de atras llega a su fin , indicamos que se ha acabado la oferta
        if (distance < 0) {
            clearInterval(x);
            $(".expira").text("Expirada");
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

