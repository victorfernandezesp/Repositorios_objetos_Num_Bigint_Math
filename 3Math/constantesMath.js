document.addEventListener("DOMContentLoaded", function () {
    const eElement = document.getElementById("e");
    const ln2Element = document.getElementById("ln2");
    const ln10Element = document.getElementById("ln10");
    const log2eElement = document.getElementById("log2e");
    const log10eElement = document.getElementById("log10e");
    const piElement = document.getElementById("pi");
    const sqrt1_2Element = document.getElementById("sqrt1_2");
    const sqrt2Element = document.getElementById("sqrt2");

    eElement.innerHTML = "Valor de Math.E:              => " + Math.E;
    ln2Element.innerHTML = "Valor de Math.LN2:          => " + Math.LN2;
    ln10Element.innerHTML = "Valor de Math.LN10:        => " + Math.LN10;
    log2eElement.innerHTML = "Valor de Math.LOG2E:      => " + Math.LOG2E;
    log10eElement.innerHTML = "Valor de Math.LOG10E:    => " + Math.LOG10E;
    piElement.innerHTML = "Valor de Math.PI:            => " + Math.PI;
    sqrt1_2Element.innerHTML = "Valor de Math.SQRT1_2:  => " + Math.SQRT1_2;
    sqrt2Element.innerHTML = "Valor de Math.SQRT2:      => " + Math.SQRT2;
});