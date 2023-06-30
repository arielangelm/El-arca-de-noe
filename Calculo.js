function calcularCuotas() {
    var precio = parseFloat(document.getElementById("precio").value);
    var cuotas = parseInt(document.getElementById("cuotas").value);
    
    var porcentaje = 0;
    
    if (cuotas === 2) {
      porcentaje = 10;
    } else if (cuotas === 3) {
      porcentaje = 20;
    } else if (cuotas === 4) {
      porcentaje = 30;
    } else if (cuotas === 5) {
      porcentaje = 40;
    } else if (cuotas === 6) {
      porcentaje = 50;
    } else if (cuotas === 7) {
      porcentaje = 60;
    } else if (cuotas === 8) {
      porcentaje = 70;
    } else if (cuotas === 9) {
      porcentaje = 80;
    } else if (cuotas === 10) {
      porcentaje = 90;
    } else if (cuotas === 11) {
      porcentaje = 100;
    } else if (cuotas === 12) {
      porcentaje = 110;
    }
    
    var precioConPorcentaje = precio * (1 + porcentaje / 100);
    var precioCuota = precioConPorcentaje / cuotas;
    
    var resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = "El precio total es: " + precioConPorcentaje.toFixed(2) + "<br>El precio por cuota para " + cuotas + " cuotas es: " + precioCuota.toFixed(2);
  }
  
  function reiniciarFormulario() {
    document.getElementById("precio").value = "";
    document.getElementById("cuotas").value = "";
    document.getElementById("resultado").innerHTML = "";
  }