function contaPalavras (frase) {
    let palavras = frase.split(" ");
    let contador = 0;

     for (let i = 0; i < palavras.length; i++) {
        if (palavras[i] !== "") {
            contador++;
        }
     }

     return contador;
}

console.log(contaPalavras("A miotto é muito diva linda"));