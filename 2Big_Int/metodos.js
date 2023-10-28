document.addEventListener("DOMContentLoaded", function () {
    const bigint = BigInt(42);
    const binario = bigint.toString(2); // Convierte a binario
    const hexadecimal = bigint.toString(16); // Convierte a hexadecimal
    const asIntN1 = BigInt.asIntN(2, -2n);
    const asIntN2 = BigInt.asIntN(2, -1n);
    const asIntN3 = BigInt.asIntN(2, 0n);
    const asIntN4 = BigInt.asIntN(2, 1n);

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `
        <p>Binario: ${binario}</p>
        <p>Hexadecimal: ${hexadecimal}</p>
        <p>asIntN(2, -2n): ${asIntN1}</p>
        <p>asIntN(2, -1n): ${asIntN2}</p>
        <p>asIntN(2, 0n): ${asIntN3}</p>
        <p>asIntN(2, 1n): ${asIntN4}</p>
    `;
});