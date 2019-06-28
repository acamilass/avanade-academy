var output = document.querySelector('#output');

function mostrarFruta() {
    var fruta = document.getElementById('fruta').value;
    var img = document.createElement("IMG");

    if(fruta === "uva") {
        img.src = "https://souagro.com.br/wp-content/uploads/2018/09/uva_verde_533487490.jpg";
        document.getElementById('image').appendChild(img);
    } else if(fruta === "melancia") {
        img.src = "https://superprix.vteximg.com.br/arquivos/ids/175180-600-600/Melancia--1-fatia-aprox.-17kg-.png?v=636294180570600000";
        document.getElementById('image').appendChild(img);
    } else if(fruta === "banana") {
        img.src = "https://coopsp.vteximg.com.br/arquivos/ids/171799-804-804/22017135.jpg?v=636886903674570000";
        document.getElementById('image').appendChild(img);
    } else if(fruta === "laranja") {
        img.src = "https://images2.nogueirense.com.br/wp-content/uploads/2019/01/laranja-1548279387.jpg";
        document.getElementById('image').appendChild(img);
    } else if(fruta === "maçã") {
        img.src = "https://superprix.vteximg.com.br/arquivos/ids/175207-292-292/Maca-Argentina--1-unidade-aprox.-200g-.png?v=636294203590200000";
        document.getElementById('image').appendChild(img);
    } 
}