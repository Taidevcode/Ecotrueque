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
