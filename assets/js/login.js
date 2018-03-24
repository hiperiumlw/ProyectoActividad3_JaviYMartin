
$(".contrasenya-olvidada").on("click", function(){
    // $("#divForm").css("display", "none");
    $("#divForm").fadeOut();
    $("#divFormPass").fadeIn(2000);
});

$("#divBtnLogin button").on("click", function(){
    let value = $("#user").val();

    if(value !== ""){
        localStorage.setItem("usuario", JSON.stringify({nombre: value}));
    }
});
