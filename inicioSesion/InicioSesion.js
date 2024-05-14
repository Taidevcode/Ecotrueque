function validarFormulario() {
    var email = document.getElementById("email").value.trim();
    var errorEmail = document.getElementById("error-email");
    

    // Verificar si el campo de correo electrónico está vacío
    if (email === "") {
        errorEmail.innerHTML = "Por favor, ingrese su correo electrónico.";
        return false;
    }

    // Verificar el formato del correo electrónico utilizando una expresión regular
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorEmail.innerHTML = "Correo electrónico no válido.";
        return false;
    }

    // Si la validación es exitosa, limpiar cualquier mensaje de error y devolver true
    errorEmail.innerHTML = "";
    return true;
}
function validarcontraseña() {
    var password = document.getElementById("contraseña").value.trim();
    var errorcontraseña = document.getElementById("error-contraseña");

    if (password === "") {
        errorcontraseña.innerHTML = "Por favor, ingrese su contraseña";
        return false;
    }

    var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordPattern.test(password)) {
        errorcontraseña.innerHTML = "La contraseña no cumple con los criterios requeridos.";
        return false;
    }
     
    errorcontraseña.innerHTML = "";
    return true;
}