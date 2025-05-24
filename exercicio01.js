function ehPrimo (numero) {
    if (numero <= 1) {
        return false;
    }

for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
        return false;
    }
}

return true;

}

console.log(ehPrimo(2));
console.log(ehPrimo(10));
console.log(ehPrimo(5));
console.log(ehPrimo(8));