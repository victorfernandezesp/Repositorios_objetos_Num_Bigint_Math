// Ejemplo 1
function eArabic(x) {
    return x.toLocaleString('ar-EG');
}

// Ejemplo 2
function precise(x) {
    return x.toPrecision(5);
}

// Ejemplo 3
function expo(x, f) {
    return Number.parseFloat(x).toExponential(f);
}

// Ejemplo 4
const binario = "1010";
const decimal = parseInt(binario, 2);

// Ejemplo 5
const numero = 1234.5678;
const numeroFormateado = numero.toFixed(2);

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('resultado1').textContent = "Número pasado a texto Árabe :" + eArabic(5);
    document.getElementById('resultado3').textContent = "Calculo potencia: " + expo(123456, 2);
    document.getElementById('resultado2').textContent = "Precisión de un número:" + precise(123.456);
    document.getElementById('resultado4').textContent = "El número binario " + binario + " en decimal es: " + decimal;
    document.getElementById('resultado5').textContent = "Número formateado a 2 decimales: " + numeroFormateado;
});
