var input = document.querySelector('#input');
var button = document.querySelector('#button');
var contagem = document.querySelector('#contagem');
var h1 = document.createElement('H1');
var foguete = document.querySelector('.foguete');
var altura = 550;
var subir;

var decolar = function () {
    altura = altura - 50
    foguete.style.height = altura + 'px';
    if (altura === 0) {
        clearInterval(subir);
        alert('Foguete partiu!');
        altura = 550;
        foguete.style.height = altura + 'px';
        input.value = '';
        contagem.removeChild(h1);
    }
};

button.addEventListener('click', function () {
    var valor = input.value;

    contagem.appendChild(h1);
    var time = setInterval(function () {
        h1.innerText = valor;
        valor = valor - 1;
        if (valor < 0) {
            h1.innerText = '';
            clearInterval(time);
            subir = setInterval(decolar, 200);
        }
    }, 1000);

});