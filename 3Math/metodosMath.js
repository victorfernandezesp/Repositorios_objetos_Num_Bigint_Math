document.addEventListener("DOMContentLoaded", function () {
    const absElement = document.getElementById("abs");
    const absElement2 = document.getElementById("abs2");
    const signElement = document.getElementById("sign");
    const signElement2 = document.getElementById("sign2");
    const expElement = document.getElementById("exp");
    const expm1Element = document.getElementById("expm1");
    const maxElement = document.getElementById("max");
    const minElement = document.getElementById("min");
    const powElement = document.getElementById("pow");
    const powElement2 = document.getElementById("pow2");
    const sqrtElement = document.getElementById("sqrt");
    const cbrtElement = document.getElementById("cbrt");
    const imulElement = document.getElementById("imul");
    const clz32Element = document.getElementById("clz32");

    const x = 10; 
    const y = -10; 

    absElement.innerHTML = `Math.abs(${x}) = ${Math.abs(x)}`;
    absElement2.innerHTML = `Math.abs(${y}) = ${Math.abs(y)}`;
    signElement.innerHTML = `Math.sign(${x}) = ${Math.sign(x)}`;
    signElement2.innerHTML = `Math.sign(${y}) = ${Math.sign(y)}`;
    expElement.innerHTML = `Math.exp(${x}) = ${Math.exp(x)}`;
    expm1Element.innerHTML = `Math.expm1(${x}) = ${Math.expm1(x)}`;
    maxElement.innerHTML = `Math.max(1, 2, 3) = ${Math.max(1, 2, 3)}`;
    minElement.innerHTML = `Math.min(3, 2, 1) = ${Math.min(3, 2, 1)}`;
    powElement.innerHTML = `Math.pow(${x}, 2) = ${Math.pow(x, 2)}`;
    powElement2.innerHTML = `Math.pow(${y}, 2) = ${Math.pow(y, 2)}`;
    sqrtElement.innerHTML = `Math.sqrt(${x}) = ${Math.sqrt(x)}`;
    cbrtElement.innerHTML = `Math.cbrt(${x}) = ${Math.cbrt(x)}`;
    imulElement.innerHTML = `Math.imul(5, 10) = ${Math.imul(5, 10)}`;
    clz32Element.innerHTML = `Math.clz32(8) = ${Math.clz32(8)}`;
});
