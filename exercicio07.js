function maiorPalavra (frase) {
    let palavras = frase.split(" ");
    let maior = "";

    for (let i = 0; i < palavras.length; i++) {
        if (palavras[i].length > maior.length) {
            maior = palavras[i];
        }
    }

    return maior;
}

console.log(maiorPalavra("Hoje eu assisti Stranger Things"));
console.log(maiorPalavra("eu amo ds"));