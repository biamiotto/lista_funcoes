function filtrarMaioresQue (arr, n) {
    let resultado = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > n) {
            resultado.push(arr[i]);
        }
    }

    return resultado;
}

console.log(filtrarMaioresQue([100, 500, 80, 150, 200], 150));