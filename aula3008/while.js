let somaPrimeiroLoop = 0;
let somaSegundoLoop = 0;

for (let i = 1; i <= 5; i++) { 
    somaPrimeiroLoop += i;
}
for (let j = 1; j <= 5; j++) {
    somaSegundoLoop += j;
}
let resultadoSomaTotal = somaPrimeiroLoop + somaSegundoLoop;

console.log("Soma do primeiro loop: " + somaPrimeiroLoop); 
console.log("Soma do segundo loop: " + somaSegundoLoop); 
console.log("Resultado da soma total: " + resultadoSomaTotal);