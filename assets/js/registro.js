$('.btn-success').click(()=>{
    var textoUsuario = $('#usuario').val();
var email = $('#email-registro').val();
var contraseña = $('#contrasenya').val();
var repetircontraseña = $('#repetir-contrasenya').val();
if (textoUsuario=='') {
    $('.alert-success').remove();
    $('.alert-danger').remove();
    $('.formulario-registro').append('<div class="alert alert-danger">\n' +
        '  <strong>Error!</strong> No ha introducido el nombre de usuario.\n' +
        '</div>')
}else if (email==""){
    $('.alert-success').remove();
    $('.alert-danger').remove();
    $('.formulario-registro').append('<div class="alert alert-danger">\n' +
        '  <strong>Error!</strong> El campo email esta vacio.\n' +
        '</div>')
} else if(contraseña=="" || repetircontraseña==""){
    $('.alert-danger').remove();
    $('.alert-success').remove();
    $('.formulario-registro').append('<div class="alert alert-danger">\n' +
        '  <strong>Error!</strong> Algun campo de las contraseñas esta vacio.\n' +
        '</div>')
} else if (contraseña!=repetircontraseña){
    $('.alert-danger').remove();
    $('.alert-success').remove();
    $('.formulario-registro').append('<div class="alert alert-danger">\n' +
        '  <strong>Error!</strong> Las contraseñas no coinciden.\n' +
        '</div>')
} else {
    $('.alert-danger').remove();
    $('.alert-success').remove();
    $('.formulario-registro').append('<div class="alert alert-success">\n' +
        '  <strong>Bien!</strong> Todos los datos son correctos\n' +
        '</div>')
}
});