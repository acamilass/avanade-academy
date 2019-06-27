function sumAll(arraySum) {
    let soma = 0;
    for(let i=arraySum[0]; i<=arraySum[1]; i++) {
        soma += i;
    }
    return soma;
}

console.log(sumAll([5, 10]));