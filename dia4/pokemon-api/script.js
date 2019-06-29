function getPokemon(url, callback) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            callback(JSON.parse(xhttp.responseText))
        }
    }

    xhttp.open("GET", url, true);
    xhttp.send();
}

var btn = document.getElementById('btn');
btn.addEventListener('click', function() {
    var pokemon = document.getElementById('pokemon').value;
    getPokemon('https://pokeapi.co/api/v2/pokemon/' + pokemon, function(res) {
        // console.log(res);
        var info = document.getElementById('info');
        var sprite = document.getElementById('sprite');

        info.innerText = 'Altura: ' + res.height + '    Peso: ' + res.weight;
        sprite.src = res.sprites.front_default;
        document.getElementById('sprite').appendChild(sprite);
    })
})