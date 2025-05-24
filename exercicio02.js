function inverterArray (arr) {
    return arr.slice().reverse();
}

let original = [5, 10, 15, 20];
let invertido = inverterArray(original);

console.log(original);
console.log(invertido);