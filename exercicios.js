/*1
let media;

const pessoa = {
    nome: 'José Cabron',
    notas: [7, 10, 9, 10],
    calcularMediaNotas: function (notas) {
        const somaDasNotas = notas.reduce((acumulador, nota) => acumulador += nota, 0);
        media = somaDasNotas / notas.length;
        return media;
    },
    classificarDesempenho: function (media) {
        let desempenho;
        if (media < 6){
            desempenho = 'Desempenho insuficiente';
        }else if (media <= 7.5){
            desempenho = 'Desempenho regular';
        }else if (media <= 8.9){
            desempenho = 'Bom desempenho';
        }else {
            desempenho = 'Desempenho excelente';
        }
        return desempenho;
    } 
}

//console.log(pessoa.calcularMediaNotas(pessoa.notas));
//console.log(pessoa.classificarDesempenho(media));

const estudante = {
    nome: 'João Parrer',
    notas: [7, 10, 8, 6]
}

console.log(pessoa.calcularMediaNotas(estudante.notas));
console.log(pessoa.classificarDesempenho(media));*/

/*2
const carro = {
    marca: 'Ford',
    modelo: 'Ranger Storm',
    ano: 2024,
    cor: 'Azul'
}

//for (let chave in carro) {
//    const resultado = `A propriedade é: ${chave}; e seu valor é: ${carro[chave]}`;
//    console.log(resultado);
//}

carro.novoOuUsado = 'Novo';
carro.combustivel = 'Diesel';

for (let chave in carro) {
    const resultado = `A propriedade é: ${chave}; e seu valor é: ${carro[chave]}`;
    console.log(resultado);
}*/

/*3 - ver arquivo metodosObjetos.js*/