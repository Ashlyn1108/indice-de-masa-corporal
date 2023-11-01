function calcularIMC() {
    var edad = parseInt(document.getElementById("edad").value);
    var sexo = document.getElementById("sexo").value;
    const altura = parseFloat(document.getElementById("altura").value) / 100; // Convertir altura a metros
    const peso = parseFloat(document.getElementById("peso").value);
    const imc = peso / (altura * altura);
 
    let estado = "";
    if (imc < 18.5) {
      estado = "Bajo de peso";
    } else if (imc < 24.9) {
      estado = "Normal";
    } else if (imc < 29.9) {
      estado = "Sobrepeso";
    } else {
      estado = "Obeso";
    }

    var resultado = "Altura: " + altura + " metros<br>";
    resultado += "Peso: " + peso + " kilogramos<br>";
    resultado += "Edad: " + edad + " años<br>";
    resultado += "Sexo: " + (sexo === "M" ? "Masculino" : "Femenino") + "<br>";
    resultado += "IMC: " + imc.toFixed(2)+ "<br>";
    resultado += "estado:" + estado;
    

    document.getElementById("resultado").innerHTML = resultado;
}


