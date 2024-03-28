const animais = [
    { id: 1, nome: "Leão", especie: "Felino", idade: 5 },
    { id: 2, nome: "Elefante", especie: "Mamífero", idade: 10 },
    { id: 3, nome: "Pinguim", especie: "Ave", idade: 3 }
]

function ordenarAnimais(comparacao) {
    return animais.sort(comparacao);
}

function compararIdadeCrescente() {
    return (a, b) => a.idade - b.idade;
}

function compararIdadeDecrescente() {
    return (a, b) => b.idade - a.idade;
}

const ordemCrescente = ordenarAnimais(compararIdadeCrescente());
console.log(ordemCrescente);

const ordemDecrescente = ordenarAnimais(compararIdadeDecrescente());
console.log(ordemDecrescente);