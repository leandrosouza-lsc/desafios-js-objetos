const estudantes = require('./estudantes.json');

function buscaInformacao (lista, chave, valor) {
    return lista.find((estudante) => estudante[chave].includes(valor));
}

const estudanteEncontrado = buscaInformacao(estudantes, 'nome', 'Emilee');
console.log(estudanteEncontrado);

const telefoneEncontrado = buscaInformacao(estudantes, 'telefone', '90945673092');
console.log(telefoneEncontrado);


