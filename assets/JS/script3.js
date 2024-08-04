document.getElementById("ingresar").addEventListener("click", () => {
    
    let digito1 = document.getElementById("select1").value;
    let digito2 = document.getElementById("select2").value;
    let digito3 = document.getElementById("select3").value;
    console.log(digito1)  
    console.log(digito2)
    console.log(digito3)
    let password = digito1 + digito2 + digito3;
    console.log(password)

    let resultado = document.getElementById("texto")
    console.log(resultado)

    if (password=='911') {
        resultado.innerHTML = 'Password 1 correcto'
    }
    else if (password=='714') {
        resultado.innerHTML = 'Password 2 correcto'

    }
    else {
        resultado.innerHTML = 'Password incorrecto'

    }
    
});