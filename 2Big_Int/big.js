document.addEventListener("DOMContentLoaded", function () {
    const alsoHuge = BigInt(9007199254740991);
    const hugeString = BigInt("9007199254740991");
    const hugeHex = BigInt("0x1fffffffffffff");
    const hugeOctal = BigInt("0o377777777777777777");
    const hugeBin = BigInt("0b11111111111111111111111111111111111111111111111111111");

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `
        <p>Valor de alsoHuge: ${alsoHuge}</p>
        <p>Valor de hugeString: ${hugeString}</p>
        <p>Valor de hugeHex: ${hugeHex}</p>
        <p>Valor de hugeOctal: ${hugeOctal}</p>
        <p>Valor de hugeBin: ${hugeBin}</p>
    `;
});