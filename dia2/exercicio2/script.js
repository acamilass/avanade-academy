var output = document.querySelector('#output');

function mostrarTexto() {
    var texto = document.getElementById('texto').value;
    output.innerHTML = texto;
}