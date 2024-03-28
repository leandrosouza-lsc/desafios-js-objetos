const listaAnimais = require('./animais.json');
console.log(listaAnimais);

const stringAnimais = JSON.stringify(listaAnimais);
//console.log(stringAnimais);

const objAnimais = JSON.parse(stringAnimais);
//console.log(objAnimais);

listaAnimais.animais.push({
    id: 4,
    nome: 'Águia',
    tipo: 'ave',
    habitat: 'Floresta Temperada'
});

//console.log(animais);

listaAnimais.animais[2] = {
    id: 3,
    nome: 'Urso',
    tipo: 'Mamífero',
    habitat: 'Polo Norte'
}

//console.log(listaAnimais);

listaAnimais.animais.splice(1, 1);

console.log(listaAnimais);

stringAnimais = JSON.stringify(listaAnimais);

