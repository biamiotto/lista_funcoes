function ehPalindromo (palavra) {
    let aoContrario = "";

    for (let i = palavra.length - 1; i >= 0; i--) {
        aoContrario += palavra[i];
    }

    if (palavra === aoContrario) {
        return true;
    } else {
        return false;
    }
}

console.log(ehPalindromo("ovo"));
console.log(ehPalindromo("beatriz"));