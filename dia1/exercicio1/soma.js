function sumAll(arraySum) {
    let soma = 0;
    for(let i=arraySum[0]; i<=arraySum[1]; i++) {
        soma += i;
    }
    console.log(soma);
}

sumAll([5, 10]);