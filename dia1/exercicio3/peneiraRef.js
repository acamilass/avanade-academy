function dropElements(arrayInicial, cb) {
    let tamanho = arrayInicial.length;
    let arrayFinal = [];

    for (let i = 0; i < tamanho; i++) {

        let num = arrayInicial[i];
            if(cb(num)) {
                arrayFinal.push(num);
            }
    }

    return arrayFinal;
}

console.log(dropElements([1, 2, 3, 9, 2], function(n) { return n > 2 }));