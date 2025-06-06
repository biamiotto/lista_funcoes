function segundoMaior (array) {
    if (array.length < 2) {
        return array[0];
    }

    let maior = array[0];
    let segundo = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > maior) {
            segundo = maior;
            sugundo = array[i];
        } else if (array[i] < maior && (segundo === maior || array[i] > segundo)) {
            segundo = array[i];
        }
    }
    
    console.log(segundo === maior ? maior : segundo);

}

segundoMaior([100, 60, 150]);