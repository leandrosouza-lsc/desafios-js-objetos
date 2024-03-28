const biblioteca = [
    { id: 1, titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", anoPublicacao: 1954 },
    { id: 2, titulo: "Dom Quixote", autor: "Miguel de Cervantes", anoPublicacao: 1605 },
    { id: 3, titulo: "1984", autor: "George Orwell", anoPublicacao: 1949 }
]

function encontrarLivroPorId (id) {
    let resultado = biblioteca.find((elemento) => elemento.id === id);
    if(resultado === undefined){
        return `O livro não foi encontrado.`;
    }else{
        return resultado
    }
}

const livroEncontradoPorID = encontrarLivroPorId(3);
console.log(livroEncontradoPorID);

