const pessoaOriginal = {
    id: 1,
    nome: "Alice",
    idade: 30
}

let objetoClonado;
function clonagem (objetoOriginal) {
    objetoClonado = JSON.parse(JSON.stringify(objetoOriginal));
    return objetoClonado;
}

console.log(clonagem(pessoaOriginal));

objetoClonado.nome = 'José';
console.log(objetoClonado);