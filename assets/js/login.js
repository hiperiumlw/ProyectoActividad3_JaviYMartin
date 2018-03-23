
$(".contrasenya-olvidada").on("click", function(){
    // $("#divForm").css("display", "none");
    $("#divForm").fadeOut();
    $("#divFormPass").fadeIn(2000);
});

$("#btnSend").on("click", function(){
   $(".modal-body").empty();
   $(".modal-body").append("<p>Mensaje enviado</p>");
   $(".modal-footer").empty();
   $(".modal-footer").append("<button id='btnAccept' class='btn btn-primary btn-sm'>Aceptar</button>");
});

$(document.body).on("click", "#btnAccept", function(){
    //console.log(window.location.hostname+":"+window.location.port)
    window.location.href = window.location.hostname+":"+window.location.port+"/";
    return false;
});

$("#divBtnLogin button").on("click", function(){

});
