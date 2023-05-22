$.validator.addMethod("terminaPor", function(value, element, parametro){

if(value.endsWith(parametro)){
    return true;
}

return false;

}, "Debe terminar por {0}")


$("#formulario_inicio").validate({
    rules:{
        nombre: {
            required: true,
            minlength: 3,
            maxlength: 15
        },
        apellido: {
            required: true,
            minlength: 3,
            maxlength: 15
        },
        email: {
            required: true,
            email: true,
            terminaPor: "duocuc.cl"
        },
        password: {
            required: true,
            minlength: 8,
            maxlength: 30
        },
        rePassword: {
            required: true,
            minlength: 8,
            maxlength: 30
        }

    }
})


$("#guardar").click(function(){
    if($("#formulario_inicio").valid() == false){
        return;
    }
    let nombre = $("#nombre").val()
    let apellido = $("#apellido").val()
    let email = $("#email").val()
    let password = $("#password").val()
    let rePassword = $("#rePassword").val()
})

