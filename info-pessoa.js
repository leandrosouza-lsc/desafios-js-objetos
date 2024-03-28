/*1 e 2
const pessoa = {
    nome: '',
    idade: 0,
    solteiro: true,
    hobbies: [],
}

//console.log(pessoa);

pessoa.nome = 'João Bolt';
pessoa.idade = 20;
pessoa.solteiro = false;
pessoa.hobbies.push('Futebol', 'Praia', 'Churrasco');

//console.log(pessoa);

function mostrarInfoPessoa (pessoa) {
    console.log(pessoa);
    console.log(typeof pessoa.nome, typeof pessoa.idade, typeof pessoa.solteiro, typeof pessoa.hobbies,
        typeof pessoa.endereco);
}

pessoa.endereco = {
    rua: 'Rua das Oliveiras',
    cidade: 'Fortaleza',
    estado: 'Ceará'
}

mostrarInfoPessoa (pessoa);*/

const pessoas = [{
    nome: 'Maria Coentro',
    idade: 49,
    cidade: 'Manaus'
},{
    nome: 'José Pedro',
    idade: 51,
    cidade: 'Porto Alegre'
},{
    nome: 'Gabriela Isis',
    idade: 20,
    cidade: 'Vitória'
}];

function mostrarListaPessoas (pessoas){
    console.log(pessoas);
   
}

pessoas.push({
    nome: 'Natália Ubrach',
    idade: 22,
    cidade: 'Florianópolis'
})

//mostrarListaPessoas(pessoas);

function filtrarPorCidade (pessoas, cidadeProcurada){
    return pessoas.filter((elemento) => elemento.cidade === cidadeProcurada);
}

console.log(filtrarPorCidade(pessoas, 'Florianópolis')); 