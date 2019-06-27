var Pessoa = function(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

var Professor = function(nome, idade, escola, materia) {
    Pessoa.call(this, nome, idade);
    this.escola = escola;
    this.materia = materia;
}

Professor.prototype = new Pessoa();
Professor.prototype.constructor = Professor;

Professor.prototype.ensinar = function() {
    console.log(this.nome, "está ensinando", this.materia);
}

let professor = new Professor('Ana Camila', 26, 'Faculdade de Computação', 'Programação');
professor.ensinar();