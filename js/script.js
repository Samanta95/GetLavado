function validacion_log(){
  sweetAlert("Oops...", "Usuario no existe", "error");
}

$('.card').click(function(){
    $(this).removeClass('desactivo');
    $(this).addClass('activo');
    setTimeout(function(){
        $(this).removeClass('activo');
        $(this).addClass('desactivo');
    }, 100);
});
