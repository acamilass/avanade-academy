var frutas = [
    'uva', 'maçã', 'banana', 'melancia', 'laranja', 'mamão', 'ameixa', 'limão', 'morango', 'amora'
]

var fotosFrutas = {
    uva: "https://souagro.com.br/wp-content/uploads/2018/09/uva_verde_533487490.jpg",
    maçã: "https://superprix.vteximg.com.br/arquivos/ids/175207-292-292/Maca-Argentina--1-unidade-aprox.-200g-.png?v=636294203590200000",
    banana: "https://coopsp.vteximg.com.br/arquivos/ids/171799-804-804/22017135.jpg?v=636886903674570000",
    melancia: "https://superprix.vteximg.com.br/arquivos/ids/175180-600-600/Melancia--1-fatia-aprox.-17kg-.png?v=636294180570600000",
    laranja: "https://images2.nogueirense.com.br/wp-content/uploads/2019/01/laranja-1548279387.jpg",
    mamão: "https://www.remedio-caseiro.com/wp-content/uploads/2019/01/20190109-mamao.jpg",
    ameixa: "https://s1.static.brasilescola.uol.com.br/artigos/a-ameixa-possui-um-alto-valor-nutritivo-537e5ca81b0c1.jpg?i=https://brasilescola.uol.com.br/upload/conteudo/images/a-ameixa-possui-um-alto-valor-nutritivo-537e5ca81b0c1.jpg",
    limão: "https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia4515/limao.jpg",
    morango: "https://www.bistrohub.com.br/wp-content/uploads/2018/04/morango.jpg",
    amora: "http://matonoprato.com.br/wp-content/uploads/2019/05/amora-2.png"
}

function sortearFruta() {
    var num = Math.floor(Math.random() * 10);
    var fruta = frutas[num];
    var img = document.createElement("IMG");

    if(fotosFrutas[fruta]) {
        console.log(fotosFrutas[fruta]);
        img.src = fotosFrutas[fruta];
        document.getElementById('imagem').appendChild(img);
    } else {
        document.getElementById('imagem').remove(img);
    }
}