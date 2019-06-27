function destroyer(arrayInicial, ...params) {
    let arrayFinal = arrayInicial;

    params.forEach(function(elem) {
        for(i = arrayFinal.length; i--;) {
            if( arrayFinal[i] === elem) arrayFinal.splice(i, 1);
        }
    });

    return arrayFinal;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
console.log(destroyer(['tree', 'hamburguer', 53], 'tree', 53));