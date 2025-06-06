function somaImpares (arr) {
    let soma = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            soma += arr[i];
        }
    }

    return soma;

}

console.log(somaImpares([22, 31, 5, 4]));